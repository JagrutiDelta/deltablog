import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
    },
    author: {
        type: String,
        default: "Delta Infosoft",
    },
    date: {
        type: Date,
        default: Date.now,
    },
    image: {
        type: String,
        required: [true, "Please provide an image URL"],
    },
    category: {
        type: String,
        required: [true, "Please provide a category"],
    },
    content: {
        type: String,
        required: [true, "Please provide content"],
    },
    readTime: {
        type: String,
        default: "5 min read",
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        enum: ["published", "draft"],
        default: "published"
    }
}, { timestamps: true });

const Blog = mongoose.models.blogs || mongoose.model("blogs", BlogSchema);

export default Blog;
