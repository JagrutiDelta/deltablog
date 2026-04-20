import { connectToDatabase } from '../../dbConfig';
import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import { verifyCaptcha, subscriptionSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, captchaToken } = body;

        // 1. Verify Captcha
        const isCaptchaValid = await verifyCaptcha(captchaToken);
        if (!isCaptchaValid) {
            return NextResponse.json({
                message: "Captcha validation failed. Please try again.",
                code: 400
            }, { status: 400 });
        }

        // 2. Validate Email
        const validationResult = subscriptionSchema.safeParse({ email, captchaToken });
        if (!validationResult.success) {
            return NextResponse.json({
                message: validationResult.error.issues?.[0]?.message || "Invalid email address",
                code: 400
            }, { status: 400 });
        }

        const normalizedEmail = email.toLowerCase().trim(); // Use validationResult.data.email ideally but this is fine

        // if (!email || !email.includes('@')) { // Already handled by Zod
        //     return NextResponse.json({
        //         message: "Please provide a valid email address",
        //         code: 400
        //     }, { status: 400 });
        // }

        const clientIP = request.headers.get('x-forwarded-for')?.split(',')[0] ||
            request.headers.get('x-real-ip') ||
            'unknown';


        let isAlreadySubscribed = false;
        let subscriptionExists = false;

        try {
            await connectToDatabase();
            const mongoose = require('mongoose');

            const subscriptionSchema = new mongoose.Schema({
                email: { type: String, required: true, unique: true, lowercase: true },
                subscribedAt: { type: Date, default: Date.now },
                isActive: { type: Boolean, default: true },
                ipAddress: { type: String, required: false },
                userAgent: { type: String, required: false }
            }, { collection: 'Subscriptions' });

            const Subscription = mongoose.models.Subscription || mongoose.model('Subscription', subscriptionSchema);

            const existingSubscription = await Subscription.findOne({ email: normalizedEmail });

            if (existingSubscription) {
                subscriptionExists = true;

                if (existingSubscription.isActive) {
                    // Already active - return error, don't save or send emails
                    return NextResponse.json({
                        message: "You are already subscribed to our newsletter!",
                        code: 409
                    }, { status: 409 });
                } else {
                    // Reactivating existing subscription - update existing record
                    isAlreadySubscribed = true;
                    existingSubscription.isActive = true;
                    existingSubscription.subscribedAt = new Date();
                    existingSubscription.ipAddress = clientIP;
                    existingSubscription.userAgent = request.headers.get('user-agent') || 'Unknown';
                    await existingSubscription.save();
                    console.log(`Subscription reactivated for ${normalizedEmail}`);
                }
            } else {
                // Create new subscription only if it doesn't exist
                const subscription = new Subscription({
                    email: normalizedEmail,
                    ipAddress: clientIP,
                    userAgent: request.headers.get('user-agent') || 'Unknown'
                });
                await subscription.save();
                console.log(`New subscription created for ${normalizedEmail}`);
            }

        } catch (dbError) {
            console.error(`Database error for ${normalizedEmail}:`, dbError);
            // If database fails, still continue but don't send emails to be safe
            return NextResponse.json({
                message: "Database error occurred. Please try again later.",
                code: 500
            }, { status: 500 });
        }

        // Only send emails if it's a new subscription (not reactivation)
        if (!isAlreadySubscribed) {
            // Email transporter
            const transporter = nodemailer.createTransport({
                host: 'smtppro.zoho.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'no-reply@ierp.in',
                    pass: 'Delta@2020'
                }
            });

            const subscriberMailOptions = {
                from: 'no-reply@ierp.in',
                to: normalizedEmail,
                subject: "Welcome to Delta Infosoft Newsletter - Subscription Confirmed",
                html: `
                    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background-color: #ffffff;">
                        <!-- Header Section -->
                        <div style="background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                                🚀 Welcome to Delta Infosoft Pvt. Ltd.
                            </h1>
                          
                        </div>

                        <!-- Main Content -->
                        <div style="padding: 40px 30px; background-color: #ffffff;">
                            <h2 style="color: #1f2937; font-size: 22px; font-weight: 600; margin: 0 0 20px 0; line-height: 1.3;">
                                Thank You for Joining Our Community!
                            </h2>

                            <p style="color: #4b5563; font-size: 16px; line-height: 1.7; margin: 0 0 25px 0;">
                                You've successfully subscribed to receive cutting-edge insights, industry intelligence, and
                                exclusive content from Delta Infosoft Pvt. Ltd. You're now part of our elite community of
                                technology professionals and business leaders.
                            </p>

                            <!-- Benefits Section -->
                            <div style="background: linear-gradient(135deg, #f0f9ff 0%, #faf5ff 100%); padding: 25px; margin: 25px 0; border-radius: 12px; border-left: 4px solid #3b82f6;">
                                <h3 style="color: #1e40af; font-size: 18px; font-weight: 600; margin: 0 0 15px 0;">
                                    📊 What You'll Receive:
                                </h3>
                                <ul style="color: #374151; font-size: 15px; line-height: 1.6; margin: 0; padding-left: 20px;">
                                    <li style="margin-bottom: 8px;"><strong>Enterprise Technology Insights:</strong> Advanced ERP solutions, cloud innovations, and digital transformation strategies</li>
                                    <li style="margin-bottom: 8px;"><strong>Business Intelligence Reports:</strong> Data-driven market analysis and performance optimization techniques</li>
                                    <li style="margin-bottom: 8px;"><strong>Exclusive Industry Content:</strong> Premium whitepapers, case studies, and research findings</li>
                                    <li style="margin-bottom: 8px;"><strong>Early Access:</strong> First look at new solutions, beta features, and industry developments</li>
                                </ul>
                            </div>

                            <!-- Call to Action -->
                            <div style="text-align: center; margin: 30px 0;">
                                <a href="https://deltainfosoft.com"
                                   style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
                                          color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 8px;
                                          font-weight: 600; font-size: 16px; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);">
                                    Explore Our Solutions →
                                </a>
                            </div>

                            <div style="border-top: 1px solid #e5e7eb; padding-top: 25px; margin-top: 30px;">
                                <p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin: 0;">
                                    Need assistance or have questions? Our team is here to help.<br>
                                    Contact us at <a href="mailto:support@deltainfosoft.com" style="color: #3b82f6; text-decoration: none;">support@deltainfosoft.com</a>
                                </p>
                            </div>

                            <p style="color: #374151; font-size: 16px; margin: 30px 0 10px 0; font-weight: 500;">
                                Best regards,
                            </p>
                            <p style="color: #1e40af; font-size: 16px; font-weight: 600; margin: 0;">
                                The Delta Infosoft Pvt. Ltd. Team
                            </p>
                        </div>

                        <!-- Footer -->
                        <div style="background-color: #1f2937; color: #d1d5db; text-align: center; padding: 25px 20px;">
                            <div style="margin-bottom: 15px;">
                                <a href="#" style="color: #60a5fa; text-decoration: none; margin: 0 15px; font-size: 14px;">LinkedIn</a>
                                <a href="#" style="color: #60a5fa; text-decoration: none; margin: 0 15px; font-size: 14px;">Website</a>
                                <a href="#" style="color: #60a5fa; text-decoration: none; margin: 0 15px; font-size: 14px;">Contact Us</a>
                            </div>
                            <p style="margin: 0; font-size: 13px; color: #9ca3af;">
                                © 2025 Delta Infosoft Pvt. Ltd. All rights reserved.
                            </p>
                            <p style="margin: 8px 0 0 0; font-size: 12px; color: #6b7280;">
                                You're receiving this because you subscribed to our newsletter.
                                <a href="#" style="color: #60a5fa; text-decoration: none;"> Unsubscribe</a>
                            </p>
                        </div>
                    </div>
                `
            };

            const companyMailOptions = {
                from: 'no-reply@ierp.in',
                to: "no-reply@ierp.in",
                cc: ["hr@deltainfosoft.com", "sandip@deltainfosoft.com", "yogesh@deltainfosoft.com", "bdm@deltainfosoft.com", "sumit.deltainfosoft@gmail.com", "mayur@deltainfosoft.com"],
                subject: " Newsletter Subscription - Delta Infosoft",
                html: `
                    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
                        <!-- Header -->
                        <div style="background: linear-gradient(135deg, #059669 0%, #0891b2 100%); padding: 25px 20px; text-align: center; border-radius: 8px 8px 0 0;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">
                                📧 New Newsletter Subscription
                            </h1>
                            <p style="color: #ecfccb; margin: 5px 0 0 0; font-size: 14px;">
                                Delta Infosoft Newsletter
                            </p>
                        </div>

                        <!-- Content -->
                        <div style="padding: 30px 25px; background-color: #ffffff;">
                            <div style="background-color: #f0fdf4; border-left: 4px solid #16a34a; padding: 20px; margin: 20px 0; border-radius: 6px;">
                                <h3 style="color: #15803d; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                                    ✅ Subscription Details
                                </h3>

                                <table style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 8px 0; color: #374151; font-weight: 600; width: 140px;">Email Address:</td>
                                        <td style="padding: 8px 0; color: #1f2937; font-family: monospace; background-color: #f9fafb; padding: 4px 8px; border-radius: 4px;">
                                            ${normalizedEmail}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #374151; font-weight: 600;">Subscription Date:</td>
                                        <td style="padding: 8px 0; color: #1f2937;">
                                            ${new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #374151; font-weight: 600;">IP Address:</td>
                                        <td style="padding: 8px 0; color: #1f2937; font-family: monospace;">
                                            ${clientIP}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #374151; font-weight: 600;">Source:</td>
                                        <td style="padding: 8px 0; color: #1f2937;">Website Newsletter Form</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #374151; font-weight: 600;">Status:</td>
                                        <td style="padding: 8px 0;">
                                            <span style="background-color: #dcfce7; color: #166534; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;">
                                                ✓ CONFIRMED
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <!-- Action Required -->
                            <div style="background-color: #eff6ff; border: 1px solid #dbeafe; padding: 20px; margin: 20px 0; border-radius: 8px;">
                                <h4 style="color: #1e40af; margin: 0 0 10px 0; font-size: 16px; font-weight: 600;">
                                    📊 Next Steps:
                                </h4>
                                <ul style="color: #374151; font-size: 14px; line-height: 1.6; margin: 0; padding-left: 20px;">
                                    <li>Welcome email has been automatically sent to subscriber</li>
                                    <li>Email added to professional newsletter distribution list</li>
                               
                                </ul>
                            </div>

                            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 25px; text-align: center;">
                                <p style="color: #6b7280; font-size: 14px; margin: 0;">
                                    This notification was automatically generated by the newsletter subscription system.
                                </p>
                            </div>
                        </div>

                        <!-- Footer -->
                        <div style="background-color: #f3f4f6; color: #6b7280; text-align: center; padding: 15px 20px; border-radius: 0 0 8px 8px;">
                            <p style="margin: 0; font-size: 12px;">
                                © 2025 Delta Infosoft Pvt. Ltd.
                            </p>
                        </div>
                    </div>
                `
            };

            try {
                await transporter.sendMail(subscriberMailOptions);
                await transporter.sendMail(companyMailOptions);
                console.log(`Emails sent successfully for new subscription: ${normalizedEmail}`);
            } catch (emailError) {
                console.error(`Email error for ${normalizedEmail}:`, emailError);
            }
        } else {
            console.log(`Emails skipped - reactivated existing subscription for ${normalizedEmail}`);
        }

        return NextResponse.json({
            message: "Successfully subscribed! Check your email for confirmation.",
            code: 200
        });

    } catch (error) {
        console.error('Subscription error:', error);
        return NextResponse.json({
            message: "Something went wrong. Please try again.",
            code: 500
        }, { status: 500 });
    }
}