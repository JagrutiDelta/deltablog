import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function GET() {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: 'smtp.gmail.com',
            port: 465,
            secure: false,
            auth: {
                user: 'sumitmali20044@gmail.com',
                pass: 'jycx ldfe muqm fjnb'
            }
        });

        const mailOptions = {
            from: "sumitmali20044@gmail.com",
            to: "sumit.deltainfosoft@gmail.com",
            subject: "EESL Data Not Generated Call Manually",
            html: `<p>Call this API</p><p>api: http://mqtt.aqualogix.in:84/today</p>`,
        };


        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);

        return NextResponse.json({
            message: "Email Sent"
        });
    } catch (error) {
        console.error('Error in email or database operation:', error);
        return NextResponse.json({
            message: "Error in sending email",
        });
    }
}
