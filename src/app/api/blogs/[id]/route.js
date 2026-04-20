import { connectToDatabase } from "@/app/dbConfig";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        await connectToDatabase();
        const { id } = await params;
        const blog = await Blog.findById(id);
        if (!blog) {
            return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, blog }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        await connectToDatabase();
        const { id } = await params;
        const text = await request.text();
        const body = JSON.parse(text);
        
        const blog = await Blog.findByIdAndUpdate(id, body, { new: true });
        if (!blog) {
            return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, blog }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 400 });
    }
}

export async function DELETE(request, { params }) {
    try {
        await connectToDatabase();
        const { id } = await params;
        const blog = await Blog.findByIdAndDelete(id);
        if (!blog) {
            return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, message: "Blog deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 400 });
    }
}
