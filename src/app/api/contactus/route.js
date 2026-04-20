// import { Description } from '@radix-ui/react-dialog';
import { connectToDatabase } from '../../dbConfig';
import userData from "../../modal/DataRecieveing"
import { NextRequest, NextResponse } from "next/server";
const nodemailer = require('nodemailer');
import { verifyCaptcha, contactFormSchema } from "@/lib/validation";

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phoneNumber, description, captchaToken } = body;

        // 1. Verify Captcha
        const isCaptchaValid = await verifyCaptcha(captchaToken);
        if (!isCaptchaValid) {
            return NextResponse.json({
                message: "Captcha validation failed. Please try again.",
                code: 400
            }, { status: 400 });
        }

        // 2. Validate Input Data (Gibberish check + Schema)
        const validationResult = contactFormSchema.safeParse({ name, email, phoneNumber, description, captchaToken });

        if (!validationResult.success) {
            // Get the first error message safely
            const format = validationResult.error.format();
            const errorMessage = validationResult.error.issues?.[0]?.message || "Invalid input data";

            return NextResponse.json({
                message: errorMessage,
                code: 400
            }, { status: 400 });
        }

        // Use sanitized data if needed, but here we just proceed with the original valid values
        // or we could use validationResult.data

        console.log("Validated Body:", body);


        try {

            // const transporter = nodemailer.createTransport({
            //     host: 'smtppro.zoho.com',
            //     port: 465,
            //     secure: true,
            //     auth: {
            //         user: 'no-reply@ierp.in',
            //         pass: 'Delta@2020'
            //     }
            // });

              const transporter = nodemailer.createTransport({
      host: process.env.SMTPHOST ,
      port:  process.env.SMTPPORT ||587,
      secure: false,
      auth: {
        user: process.env.SMTPUSER ,
        pass:process.env.SMTPPASSWORD ,
      },
    })
        

            const mailOptions = {
               from: "no-reply@ierp.in",
                to: "no-reply@ierp.in",
                cc: ["hr@deltainfosoft.com", "sandip@deltainfosoft.com", "yogesh@deltainfosoft.com", "bdm@deltainfosoft.com", "mayur@deltainfosoft.com"],
                bcc: "sandip@deltainfosoft.com",         
                subject: "Web Inquire ,Deltainfosoft.com",
                html: `<p>Kindly find New Inquire Details as Below</p><p>Name: ${name}</p> <p>Mobile Number: ${phoneNumber}</p><p>Email: ${email}</p><p>Description: ${description}</p>`,
            };

            const may = await transporter.sendMail(mailOptions);
            console.log('Email sent:', may);

        } catch (emailError) {
            console.error('Error sending email:', emailError);
        }

        try {
            await connectToDatabase();
            const saveUserData = new userData({
                name,
                email,
                phoneNumber,
                description
            });
            await saveUserData.save();
            console.log('Inquiry saved to DB');
        } catch (error) {
            console.error("Error saving inquiry to DB:", error);
        }

        return NextResponse.json({
            message: "Received your message. We will get back to you ASAP",
            code: 998
        });

    } catch (dbError) {
        console.error('Error saving data to MongoDB:', dbError);
        return NextResponse.json({
            message: "Error in data saving",
        });
    }
}
