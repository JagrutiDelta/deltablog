import { connectToDatabase } from '../../dbConfig';
import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import { emailTemplate } from './email-template.js';
import Inquiry from '../modal/inquiry.js';

async function checkSpamProtection(data) {
  try {
    const response = await fetch('https://dcbindia.in/akismetcurl/akismet_check.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(data).toString(),
    });

    if (!response.ok) {
      console.error('Spam check API returned error status:', response.status);
      return { result: false };
    }

    const responseText = await response.text();
    console.log("Spam check response:", responseText);

    // Check if response contains HTML error (PHP notices/warnings)
    if (responseText.includes('<b>Notice</b>') || responseText.includes('<b>Warning</b>')) {
      console.error('Spam check API returned PHP error:', responseText);

      // Try to extract JSON from the response if it exists after the HTML error
      const jsonMatch = responseText.match(/\{"result":\d+\}/);
      if (jsonMatch) {
        try {
          return JSON.parse(jsonMatch[0]);
        } catch (parseError) {
          console.error('Failed to parse extracted JSON:', parseError);
          return { result: false };
        }
      }
      return { result: false };
    }

    try {
      return JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse spam check response:', responseText);
      return { result: false };
    }
  } catch (error) {
    console.error('Spam check error:', error);
    return { result: false };
  }
}

async function getJunkWords() {
  try {
    const response = await fetch('https://dcbindia.in/junk-word.php?ver=1.2');
    return await response.text();
  } catch (error) {
    console.error('Error fetching junk words:', error);
    return '';
  }
}

async function sendInquiryData(data, additionalData) {
  try {
    const requestData = {
      ...data,
      ...additionalData,
      sitename: process.env.WEBSITE_DOMAIN || "harsiddhind.com",
      save: true
    };

    console.log("FEJN",requestData)

    await fetch('https://dcbindia.in/akismetcurl/akismet_check.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(requestData).toString(),
    });
  } catch (error) {
    console.error('Error sending inquiry data:', error);
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      company_name,
      email,
      message,
      number: phone,
      country,
      city,
      code: country_code
    } = body;

    if (!name?.trim() || !company_name?.trim() || !email?.trim() || 
        !message?.trim() || !phone?.trim() || !city?.trim()) {
      return NextResponse.json({
        message: "Please fill in all required fields",
        code: 400
      }, { status: 400 });
    }

    const clientIP = request.headers.get('x-forwarded-for')?.split(',')[0] ||
                     request.headers.get('x-real-ip') ||
                     request.ip ||
                     'unknown';

    const [spamResult, junkWords] = await Promise.all([
      checkSpamProtection({
        ...body,
        HTTP_HOST: request.headers.get('host'),
        HTTP_USER_AGENT: request.headers.get('user-agent'),
        HTTP_REFERER: request.headers.get('referer'),
        REMOTE_ADDR: clientIP,
        sitename: request.headers.get('host'),
        save: false
      }),
      // getJunkWords()
    ]);

    if (spamResult.result) {
      await sendInquiryData(body, {
        bcoz: "API CONDITION FAIL - SPAM DETECTED",
        status: "FAIL",
        ip: clientIP
      });
      
      return NextResponse.json({
        message: "Request blocked by spam protection",
        code: 403
      }, { status: 403 });
    }

    if (junkWords) {
      const junkRegex = new RegExp(junkWords, 'gi');
      const junkMatches = message.match(junkRegex) || [];
      
      if (junkMatches.length > 0) {
        await sendInquiryData(body, {
          bcoz: "JUNK WORDS DETECTED",
          status: "FAIL",
          ip: clientIP
        });
        
        return NextResponse.json({
          message: "Message contains inappropriate content",
          code: 400
        }, { status: 400 });
      }
    }

    const isDomestic = process.env.IS_DOMESTIC === 'true';
    const cityCountryTitle = isDomestic ? 'City' : 'Country';
    const cityCountryValue = isDomestic ? city : (country || city);
    const phoneDisplay = country_code ? `${country_code} - ${phone}` : phone;

    const emailContent = emailTemplate(
      name,
      company_name,
      email,
      cityCountryTitle,
      cityCountryValue,
      city,
      phoneDisplay,
      message
    );

    // Validate required email credentials
    if (!process.env.SMTP2GO_USERNAME || !process.env.SMTP2GO_PASSWORD) {
      console.error('Missing SMTP credentials - SMTP2GO_USERNAME or SMTP2GO_PASSWORD not set');
      throw new Error('Email service not configured properly');
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "mail.smtp2go.com",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.SMTP2GO_USERNAME,
        pass: process.env.SMTP2GO_PASSWORD
      },
      // Add additional options for better reliability
      pool: true,
      maxConnections: 1,
      rateDelta: 20000,
      rateLimit: 5
    });
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      subject: process.env.EMAIL_SUBJECT || "New Contact Form Inquiry",
      html: emailContent,
      replyTo: email
    };

    const testEmails = (process.env.DCB_INQUIRY_TEST_EMAILS || '').split(',').map(e => e.trim());
    const isTestEmail = testEmails.includes(email);

    if (isTestEmail) {
      mailOptions.to = process.env.DCB_INQUIRY_EMAIL;
    } else {
      mailOptions.to = process.env.TO_EMAIL;
      mailOptions.bcc = process.env.DCB_INQUIRY_EMAIL;
      
      if (process.env.CC_EMAIL) {
        mailOptions.cc = process.env.CC_EMAIL;
      }
    }

    await transporter.sendMail(mailOptions);
    
    await sendInquiryData(body, {
      bcoz: "MAIL SEND SUCCESS",
      status: "SUCCESS",
      ip: clientIP
    });

    await connectToDatabase();
    const inquiry = new Inquiry({
      name,
      companyName: company_name,
      email,
      phone: phoneDisplay,
      country: cityCountryValue,
      city,
      message,
      ipAddress: clientIP,
      userAgent: request.headers.get('user-agent') || 'Unknown'
    });

    await inquiry.save();

    return NextResponse.json({
      message: "Thank you! Your inquiry has been sent successfully.",
      code: 200
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    try {
      const requestBody = typeof body !== 'undefined' ? body : {};
      await sendInquiryData(requestBody, {
        bcoz: "INTERNAL SERVER ERROR",
        status: "FAIL",
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } catch (logError) {
      console.error('Failed to log error:', logError);
    }

    return NextResponse.json({
      message: "Internal server error. Please try again later.",
      code: 500
    }, { status: 500 });
  }
}
