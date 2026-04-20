import { connectToDatabase } from "@/app/dbConfig";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        await connectToDatabase();
        const resolvedParams = await params;
        const slug = resolvedParams?.slug;
        
        if (!slug) {
            return NextResponse.json({ success: false, message: "No slug provided" }, { status: 400 });
        }

        // Try finding by slug first
        let blog = await Blog.findOne({ slug });
        
        // If not found, check if the "slug" is actually an ID
        if (!blog && slug.toString().match(/^[0-9a-fA-F]{24}$/)) {
            blog = await Blog.findById(slug);
        }

        if (!blog) {
            return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, blog }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
