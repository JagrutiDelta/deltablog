import { connectToDatabase } from "@/app/dbConfig";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDatabase();
        const blogs = await Blog.find().sort({ date: -1 });
        return NextResponse.json({ success: true, blogs }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        await connectToDatabase();
        const text = await request.text();
        const body = JSON.parse(text);
        
        // Simple slug generation if not provided
        if (!body.slug) {
            body.slug = body.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        }

        const blog = await Blog.create(body);
        return NextResponse.json({ success: true, blog }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 400 });
    }
}
