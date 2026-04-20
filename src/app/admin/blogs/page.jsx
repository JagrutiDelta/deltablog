"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import axios from "axios";
import {
    Plus, Edit2, Trash2, X, Image as ImageIcon, FileText, User, Tag,
    Clock, ExternalLink, LayoutDashboard, Settings, Users,
    ChevronLeft, ChevronRight, Save, Eye, Globe, MoreVertical,
    Search, Filter, Check, AlertCircle, Menu
} from "lucide-react";
import moment from "moment";
import { cn } from "@/app/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { compressAndResizeImage } from "@/app/utils/imageUtils";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(async () => {
    const { default: RQ } = await import("react-quill-new");
    const { default: ImageResize } = await import("quill-image-resize-module-react");

    const Quill = (await import("react-quill-new")).Quill;
    if (Quill) {
        Quill.register("modules/imageResize", ImageResize);

        // Custom Module to handle Image Compression on Paste and Drop
        class ImageCompression {
            constructor(quill) {
                this.quill = quill;
                this.quill.root.addEventListener('paste', this.handlePaste.bind(this), false);
                this.quill.root.addEventListener('drop', this.handleDrop.bind(this), false);
            }

            async handlePaste(e) {
                if (e.clipboardData && e.clipboardData.files && e.clipboardData.files.length) {
                    const files = Array.from(e.clipboardData.files);
                    const images = files.filter(file => file.type.startsWith('image/'));
                    if (images.length > 0) {
                        e.preventDefault();
                        const range = this.quill.getSelection() || { index: this.quill.getLength() };
                        for (const file of images) {
                            const compressed = await compressAndResizeImage(file);
                            this.quill.insertEmbed(range.index, 'image', compressed);
                        }
                    }
                }
            }

            async handleDrop(e) {
                if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) {
                    const files = Array.from(e.dataTransfer.files);
                    const images = files.filter(file => file.type.startsWith('image/'));
                    if (images.length > 0) {
                        e.preventDefault();
                        this.quill.focus();
                        const range = this.quill.getSelection() || { index: this.quill.getLength() };
                        for (const file of images) {
                            const compressed = await compressAndResizeImage(file);
                            this.quill.insertEmbed(range.index, 'image', compressed);
                        }
                    }
                }
            }
        }
        Quill.register('modules/imageCompression', ImageCompression);
        
        // Register Custom Formats for Premium Content
        const Inline = Quill.import('blots/inline');
        const Block = Quill.import('blots/block');

        class PulseBlot extends Inline {}
        PulseBlot.blotName = 'pulse';
        PulseBlot.tagName = 'span';
        PulseBlot.className = 'ql-pulse-glow';
        Quill.register(PulseBlot, true);

        class TiltBlot extends Inline {}
        TiltBlot.blotName = 'tilt';
        TiltBlot.tagName = 'span';
        TiltBlot.className = 'ql-tilt-3d';
        Quill.register(TiltBlot, true);

        class BorderBlot extends Block {}
        BorderBlot.blotName = 'nborder';
        BorderBlot.tagName = 'div';
        BorderBlot.className = 'ql-neon-border-box';
        Quill.register(BorderBlot, true);

        class HighlightBlot extends Inline {}
        HighlightBlot.blotName = 'cyber';
        HighlightBlot.tagName = 'span';
        HighlightBlot.className = 'ql-cyber-highlight';
        Quill.register(HighlightBlot, true);

        class GradientBlot extends Inline {}
        GradientBlot.blotName = 'gradient';
        GradientBlot.tagName = 'span';
        GradientBlot.className = 'ql-gradient-text';
        Quill.register(GradientBlot, true);

        class ShadowBlot extends Inline {}
        ShadowBlot.blotName = 'shadow';
        ShadowBlot.tagName = 'span';
        ShadowBlot.className = 'ql-shadow-hover';
        Quill.register(ShadowBlot, true);

        class CardBlot extends Block {}
        CardBlot.blotName = 'card';
        CardBlot.tagName = 'div';
        CardBlot.className = 'ql-glass-card';
        Quill.register(CardBlot, true);

        class FlowBlot extends Block {}
        FlowBlot.blotName = 'flow';
        FlowBlot.tagName = 'div';
        FlowBlot.className = 'ql-animate-bg';
        Quill.register(FlowBlot, true);
        
        class NeonBlot extends Inline {}
        NeonBlot.blotName = 'neon';
        NeonBlot.tagName = 'span';
        NeonBlot.className = 'ql-neon-glow';
        Quill.register(NeonBlot, true);
    }

    return RQ;
}, {
    ssr: false,
    loading: () => <div className="h-96 w-full bg-gray-100 dark:bg-neutral-900 animate-pulse rounded-[2rem]" />
});
import "react-quill-new/dist/quill.snow.css";

export default function AdminBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState("list"); // 'list' or 'edit'
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [currentBlog, setCurrentBlog] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [isEditingStatus, setIsEditingStatus] = useState(false);
    const [isEditingVisibility, setIsEditingVisibility] = useState(false);
    const [isEditingDate, setIsEditingDate] = useState(false);
    const [isAddingCategory, setIsAddingCategory] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [categories, setCategories] = useState(["Technology", "ERP Solutions", "Business", "Innovation", "Company News"]);

    const imageInputRef = useRef(null);

    const [formData, setFormData] = useState({
        title: "",
        author: "Delta Infosoft",
        image: "",
        category: "Technology",
        content: "",
        readTime: "5 min read",
        slug: "",
        status: "published"
    });

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get("/api/blogs");
            setBlogs(response.data.blogs || []);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleOpenEditor = (blog = null) => {
        if (blog) {
            setCurrentBlog(blog);
            setFormData({
                title: blog.title || "",
                author: blog.author || "Delta Infosoft",
                image: blog.image || "",
                category: blog.category || "Technology",
                content: blog.content || "",
                readTime: blog.readTime || "5 min read",
                slug: blog.slug || "",
                status: blog.status || "published"
            });
        } else {
            setCurrentBlog(null);
            setFormData({
                title: "",
                author: "Delta Infosoft",
                image: "",
                category: "Technology",
                content: "",
                readTime: "5 min read",
                slug: "",
                status: "draft"
            });
        }
        setView("edit");
    };

    const handleSaveDraft = async () => {
        try {
            const draftData = { ...formData, status: "draft" };
            let response;
            if (currentBlog) {
                response = await axios.put(`/api/blogs/${currentBlog._id}`, draftData);
            } else {
                response = await axios.post("/api/blogs", draftData);
                setCurrentBlog(response.data.blog);
            }
            setFormData(prev => ({ ...prev, status: "draft" }));
            alert("Draft saved successfully!");
            fetchBlogs();
        } catch (error) {
            alert("Error saving draft");
        }
    };

    const handlePreview = () => {
        if (!formData.slug) {
            alert("Please enter a title first to generate a slug.");
            return;
        }
        // Save current work as draft before previewing if needed, 
        // or just open the link if the slug is set.
        window.open(`/company/blogs/${formData.slug}`, '_blank');
    };

    const handleCloseEditor = () => {
        setView("list");
        setCurrentBlog(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => {
            const newData = { ...prev, [name]: value };
            if (name === "title" && !currentBlog) {
                newData.slug = value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
            }
            return newData;
        });
    };

    const handleContentChange = (content) => {
        setFormData(prev => ({ ...prev, content }));
    };

    const handleImageClick = () => {
        imageInputRef.current?.click();
    };

    const handleFileChange = async (e) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const compressed = await compressAndResizeImage(file);
                setFormData(prev => ({ ...prev, image: compressed }));
            } catch (error) {
                console.error("Compression Error:", error);
            }
        }
    };

    const handleSubmit = async (e) => {
        e && e.preventDefault();
        try {
            if (currentBlog) {
                await axios.put(`/api/blogs/${currentBlog._id}`, formData);
            } else {
                await axios.post("/api/blogs", formData);
            }
            fetchBlogs();
            handleCloseEditor();
        } catch (error) {
            console.error("Save Error:", error);
            const status = error.response?.status;
            if (status === 413) {
                alert("Payload too large. The images in your blog post are too big for the server to process. Please try adding fewer or smaller images.");
            } else {
                alert(error.response?.data?.message || "Error saving blog. Please check your connection and try again.");
            }
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
            try {
                await axios.delete(`/api/blogs/${id}`);
                fetchBlogs();
            } catch (error) {
                alert("Error deleting blog");
            }
        }
    };

    const filteredBlogs = useMemo(() => {
        return blogs.filter(blog =>
            blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [blogs, searchQuery]);

    const quillModules = useMemo(() => ({
        toolbar: {
            container: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                ['gradient', 'shadow', 'card', 'neon', 'flow', 'pulse', 'tilt', 'nborder', 'cyber'], 
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }, { 'align': [] }],
                ['link', 'image', 'video'],
                ['blockquote', 'code-block'],
                ['table', 'clean']
            ],
            handlers: {
                'gradient': function() { this.quill.format('gradient', !this.quill.getFormat().gradient); },
                'shadow': function() { this.quill.format('shadow', !this.quill.getFormat().shadow); },
                'card': function() { this.quill.format('card', !this.quill.getFormat().card); },
                'neon': function() { this.quill.format('neon', !this.quill.getFormat().neon); },
                'flow': function() { this.quill.format('flow', !this.quill.getFormat().flow); },
                'pulse': function() { this.quill.format('pulse', !this.quill.getFormat().pulse); },
                'tilt': function() { this.quill.format('tilt', !this.quill.getFormat().tilt); },
                'nborder': function() { this.quill.format('nborder', !this.quill.getFormat().nborder); },
                'cyber': function() { this.quill.format('cyber', !this.quill.getFormat().cyber); },
                'image': function() {
                    const input = document.createElement('input');
                    input.setAttribute('type', 'file');
                    input.setAttribute('accept', 'image/*');
                    input.click();
                    input.onchange = async () => {
                        const file = input.files[0];
                        if (file) {
                            try {
                                // We use a helper function to resize and compress before inserting
                                const compressed = await compressAndResizeImage(file);
                                const range = this.quill.getSelection();
                                this.quill.insertEmbed(range.index, 'image', compressed);
                            } catch (error) {
                                console.error("Quill Image Error:", error);
                            }
                        }
                    };
                }
            }
        },
        imageResize: {
            modules: ['Resize', 'DisplaySize', 'Toolbar']
        },
        imageCompression: true,
        table: true
    }), []);

    const quillFormats = [
        'header', 'size', 'bold', 'italic', 'underline', 'strike',
        'color', 'background', 'script', 'list', 'bullet', 'indent', 'align',
        'link', 'image', 'video', 'blockquote', 'code-block', 'table',
        'gradient', 'shadow', 'card', 'neon', 'flow', 'pulse', 'tilt', 'nborder', 'cyber'
    ];

    return (
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
            {/* Header */}
            <header className="h-16 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 flex items-center justify-between px-8 z-40">
                <div className="flex items-center gap-4">
                        {view === "edit" && (
                            <button
                                onClick={handleCloseEditor}
                                className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors text-gray-500"
                            >
                                <ChevronLeft size={24} />
                            </button>
                        )}
                        <h1 className="text-lg font-bold">
                            {view === "list" ? "All Posts" : currentBlog ? "Edit Post" : "Add New Post"}
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <div className="w-8 h-8 bg-gray-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                                <img src="/Logo.png" alt="Avatar" />
                            </div>
                            <span className="text-sm font-medium hidden sm:inline-block">Howdy, Delta Admin</span>
                        </div>
                    </div>
                </header>

                {/* Scrolled Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {view === "list" ? (
                        <div className="p-8 max-w-7xl mx-auto space-y-6">
                            {/* List Header Actions */}
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white dark:bg-neutral-900 p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-neutral-800">
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-2xl font-black tracking-tighter uppercase">Content Repository</h2>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Global Blog Management System</p>
                                </div>
                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="relative group flex-1 min-w-[300px]">
                                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-500 transition-colors" size={20} />
                                        <input
                                            type="text"
                                            placeholder="Query database..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full pl-14 pr-6 py-4 bg-gray-50 dark:bg-neutral-800 border-none rounded-2xl focus:ring-4 focus:ring-teal-500/10 transition-all outline-none font-bold text-sm"
                                        />
                                    </div>
                                    <button
                                        onClick={() => handleOpenEditor()}
                                        className="px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-lg shadow-teal-500/20 transition-all flex items-center gap-3 active:scale-95 hover:-translate-y-1"
                                    >
                                        <Plus size={20} />
                                        <span>Create Post</span>
                                    </button>
                                </div>
                            </div>

                            {/* Blog List Table */}
                            {loading ? (
                                <div className="flex justify-center items-center py-20">
                                    <div className="animate-spin rounded-full h-10 w-10 border-2 border-teal-500/20 border-t-teal-500"></div>
                                </div>
                            ) : filteredBlogs.length > 0 ? (
                                <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-200 dark:border-neutral-800 overflow-hidden">
                                    <table className="w-full text-left">
                                        <thead className="bg-gray-50 dark:bg-neutral-800/50 border-b border-gray-100 dark:border-neutral-800">
                                            <tr>
                                                <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-gray-400">Title</th>
                                                <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-gray-400">Author</th>
                                                <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-gray-400">Categories</th>
                                                <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-gray-400">Date</th>
                                                <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-gray-400">Status</th>
                                                <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-gray-400 text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50 dark:divide-neutral-800">
                                            {filteredBlogs.map((blog) => (
                                                <tr key={blog._id} className="group hover:bg-teal-50/20 dark:hover:bg-teal-500/5 transition-all duration-500">
                                                    <td className="px-8 py-6">
                                                        <div className="flex items-center gap-6">
                                                            <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-500 border border-gray-100 dark:border-neutral-700">
                                                                <img src={blog.image || "/navlogo/Delta IERP.png"} className="w-full h-full object-cover" />
                                                            </div>
                                                            <div className="space-y-1">
                                                                <div className="font-black text-gray-900 dark:text-white line-clamp-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors tracking-tight">
                                                                    {blog.title}
                                                                </div>
                                                                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest flex items-center gap-2">
                                                                    <div className="w-1 h-1 rounded-full bg-teal-500" />
                                                                    {blog.slug}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-8 py-6">
                                                        <div className="text-sm font-bold text-gray-600 dark:text-gray-300 leading-none">{blog.author}</div>
                                                        <div className="text-[10px] text-gray-400 font-bold uppercase mt-1">Administrator</div>
                                                    </td>
                                                    <td className="px-8 py-6">
                                                        <span className="px-4 py-1.5 bg-gray-50 dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 text-[10px] font-black uppercase tracking-widest rounded-xl text-gray-500 dark:text-gray-400">
                                                            {blog.category}
                                                        </span>
                                                    </td>
                                                    <td className="px-8 py-6">
                                                        <div className="text-xs font-black uppercase text-gray-400">{moment(blog.date).format("MMM D, YYYY")}</div>
                                                    </td>
                                                    <td className="px-8 py-6">
                                                        <div className={cn(
                                                            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase shadow-sm border",
                                                            blog.status === 'published' 
                                                                ? "bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-500/20" 
                                                                : "bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-500/20"
                                                        )}>
                                                            <div className={cn("w-1.5 h-1.5 rounded-full", blog.status === 'published' ? "bg-emerald-500 animate-pulse" : "bg-amber-500")} />
                                                            {blog.status || 'published'}
                                                        </div>
                                                    </td>
                                                    <td className="px-8 py-6 text-right">
                                                        <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                                                            <button
                                                                onClick={() => handleOpenEditor(blog)}
                                                                className="p-3 bg-white dark:bg-neutral-800 text-teal-600 dark:text-teal-400 rounded-xl shadow-lg hover:bg-teal-600 hover:text-white transition-all border border-gray-100 dark:border-neutral-700"
                                                            >
                                                                <Edit2 size={16} />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDelete(blog._id)}
                                                                className="p-3 bg-white dark:bg-neutral-800 text-rose-600 dark:text-rose-400 rounded-xl shadow-lg hover:bg-rose-600 hover:text-white transition-all border border-gray-100 dark:border-neutral-700"
                                                            >
                                                                <Trash2 size={16} />
                                                            </button>
                                                            <Link 
                                                                href={`/company/blogs/${blog.slug}`} 
                                                                target="_blank"
                                                                className="p-3 bg-white dark:bg-neutral-800 text-gray-400 rounded-xl shadow-lg hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all border border-gray-100 dark:border-neutral-700"
                                                            >
                                                                <ExternalLink size={16} />
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="text-center py-32 bg-white dark:bg-neutral-900 rounded-3xl border-2 border-dashed border-gray-100 dark:border-neutral-800">
                                    <div className="w-20 h-20 bg-gray-50 dark:bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Search size={40} className="text-gray-300" />
                                    </div>
                                    <h2 className="text-2xl font-bold">No posts found</h2>
                                    <p className="text-gray-500 mt-2">Try adjusting your search or create a new post.</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        /* WordPress Style Editor View */
                        <form onSubmit={handleSubmit} className="p-8 max-w-[1400px] mx-auto">
                            <div className="flex flex-col lg:flex-row gap-8">
                                {/* Left Column: Editor */}
                                <div className="flex-1 space-y-6">
                                    <div className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-neutral-800 space-y-6">
                                        <div>
                                            <input
                                                required
                                                name="title"
                                                value={formData.title}
                                                onChange={handleChange}
                                                placeholder="Enter title here"
                                                className="w-full text-3xl font-bold bg-transparent border-b-2 border-gray-100 dark:border-neutral-800 focus:border-teal-500 outline-none pb-4 transition-all placeholder:text-gray-300"
                                            />
                                            <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
                                                <span className="font-bold">Permalink:</span>
                                                <span className="bg-gray-50 dark:bg-neutral-800 px-2 py-0.5 rounded border border-gray-200 dark:border-neutral-700 italic">
                                                    https://delta.com/blogs/{formData.slug || "your-slug"}
                                                </span>
                                                <button type="button" className="text-teal-500 hover:underline font-medium">Edit</button>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button type="button" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 text-gray-600 dark:text-gray-300 text-sm font-bold rounded-lg border border-gray-200 dark:border-neutral-700 transition-all">
                                                <ImageIcon size={16} />
                                                Add Media
                                            </button>
                                        </div>

                                        <div className="editor-container h-[800px]">
                                            <ReactQuill
                                                theme="snow"
                                                value={formData.content}
                                                onChange={handleContentChange}
                                                modules={quillModules}
                                                formats={quillFormats}
                                                placeholder="Begin your masterpiece... (Select text to apply gradients or glass effects)"
                                                className="h-full rounded-xl overflow-hidden"
                                                style={{ height: 'calc(100% - 42px)' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Sidebar Actions */}
                                <div className="w-full lg:w-[320px] space-y-6">
                                    {/* Publish Box */}
                                    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-200 dark:border-neutral-800 overflow-hidden">
                                        <div className="px-6 py-4 border-b border-gray-100 dark:border-neutral-800 flex items-center justify-between">
                                            <h3 className="font-bold">Publish</h3>
                                            <ChevronRight size={16} className="text-gray-400 rotate-90" />
                                        </div>
                                        <div className="p-6 space-y-4">
                                            <div className="flex items-center justify-between">
                                                <button
                                                    type="button"
                                                    onClick={handleSaveDraft}
                                                    className="px-4 py-2 bg-gray-50 dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 text-gray-600 dark:text-gray-300 text-sm font-bold rounded-lg border border-gray-200 dark:border-neutral-700 transition-all active:scale-95"
                                                >
                                                    Save Draft
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={handlePreview}
                                                    className="px-4 py-2 bg-gray-50 dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 text-gray-600 dark:text-gray-300 text-sm font-bold rounded-lg border border-gray-200 dark:border-neutral-700 transition-all active:scale-95"
                                                >
                                                    Preview
                                                </button>
                                            </div>
                                            <div className="space-y-4 text-sm pt-4 border-t border-gray-50 dark:border-neutral-800">
                                                {/* Status Edit */}
                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-2 text-gray-500">
                                                        <span className={cn("w-1.5 h-1.5 rounded-full", formData.status === 'published' ? "bg-green-500" : "bg-yellow-500")} />
                                                        <span>Status: <span className="text-gray-900 dark:text-white font-bold capitalize">{formData.status}</span></span>
                                                        <button
                                                            type="button"
                                                            onClick={() => setIsEditingStatus(!isEditingStatus)}
                                                            className="ml-auto text-teal-500 hover:underline"
                                                        >
                                                            {isEditingStatus ? "Cancel" : "Edit"}
                                                        </button>
                                                    </div>
                                                    {isEditingStatus && (
                                                        <div className="flex gap-2">
                                                            <select
                                                                name="status"
                                                                value={formData.status}
                                                                onChange={(e) => {
                                                                    handleChange(e);
                                                                    setIsEditingStatus(false);
                                                                }}
                                                                className="flex-1 px-3 py-2 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg outline-none"
                                                            >
                                                                <option value="published">Published</option>
                                                                <option value="draft">Draft</option>
                                                            </select>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="flex items-center gap-2 text-gray-500">
                                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                                    <span>Visibility: <span className="text-gray-900 dark:text-white font-bold">Public</span></span>
                                                    <button type="button" className="ml-auto text-teal-500 hover:underline">Edit</button>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-500">
                                                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                                                    <span>Publish <span className="text-gray-900 dark:text-white font-bold">immediately</span></span>
                                                    <button type="button" className="ml-auto text-teal-500 hover:underline">Edit</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-6 py-4 bg-gray-50 dark:bg-neutral-800/50 flex items-center justify-between mt-4">
                                            <button
                                                type="button"
                                                onClick={() => currentBlog && handleDelete(currentBlog._id)}
                                                className={cn("text-xs font-bold hover:underline", currentBlog ? "text-red-500" : "text-gray-300 pointer-events-none")}
                                            >
                                                Move to Trash
                                            </button>
                                            <button
                                                type="submit"
                                                className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-black rounded-lg shadow-lg shadow-teal-500/20 transition-all text-sm"
                                            >
                                                {currentBlog ? "Update" : "Publish"}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Categories Box */}
                                    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-200 dark:border-neutral-800 overflow-hidden">
                                        <div className="px-6 py-4 border-b border-gray-100 dark:border-neutral-800">
                                            <h3 className="font-bold">Categories</h3>
                                        </div>
                                        <div className="p-6 space-y-4">
                                            <select
                                                name="category"
                                                value={formData.category}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-50 dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-teal-500 transition-all outline-none text-sm font-medium appearance-none"
                                            >
                                                {categories.map(cat => (
                                                    <option key={cat} value={cat}>{cat}</option>
                                                ))}
                                            </select>

                                            {isAddingCategory ? (
                                                <div className="space-y-2">
                                                    <input
                                                        type="text"
                                                        placeholder="Category name"
                                                        value={newCategoryName}
                                                        onChange={(e) => setNewCategoryName(e.target.value)}
                                                        className="w-full px-4 py-2 bg-gray-50 dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 rounded-lg text-sm outline-none"
                                                    />
                                                    <div className="flex gap-2">
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                if (newCategoryName) {
                                                                    setCategories([...categories, newCategoryName]);
                                                                    handleChange({ target: { name: 'category', value: newCategoryName } });
                                                                    setNewCategoryName("");
                                                                    setIsAddingCategory(false);
                                                                }
                                                            }}
                                                            className="flex-1 py-2 bg-teal-600 text-white text-[10px] font-black uppercase rounded-lg"
                                                        >
                                                            Add
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => setIsAddingCategory(false)}
                                                            className="flex-1 py-2 bg-gray-100 dark:bg-neutral-800 text-[10px] font-black uppercase rounded-lg"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <button
                                                    type="button"
                                                    onClick={() => setIsAddingCategory(true)}
                                                    className="text-teal-600 dark:text-teal-400 text-xs font-bold hover:underline flex items-center gap-1"
                                                >
                                                    <Plus size={12} />
                                                    Add New Category
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Metadata Box */}
                                    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-200 dark:border-neutral-800 overflow-hidden">
                                        <div className="px-6 py-4 border-b border-gray-100 dark:border-neutral-800">
                                            <h3 className="font-bold">Metadata</h3>
                                        </div>
                                        <div className="p-6 space-y-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Featured Image</label>
                                                <div className="relative group">
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        className="hidden"
                                                        ref={imageInputRef}
                                                        onChange={handleFileChange}
                                                    />
                                                    <div
                                                        onClick={handleImageClick}
                                                        className="relative aspect-video rounded-xl overflow-hidden border-2 border-dashed border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800 cursor-pointer hover:border-teal-500 transition-all group"
                                                    >
                                                        {formData.image ? (
                                                            <>
                                                                <img src={formData.image} className="w-full h-full object-cover" alt="Featured Preview" />
                                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                                                    <span className="text-white text-xs font-black uppercase">Change Image</span>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
                                                                <ImageIcon className="text-gray-400" size={32} />
                                                                <span className="text-gray-400 text-[10px] font-black uppercase">Click to Select Image</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <input
                                                        name="image"
                                                        value={formData.image}
                                                        onChange={handleChange}
                                                        placeholder="Or paste URL/Base64 here..."
                                                        className="mt-2 w-full px-4 py-2 bg-gray-50 dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 rounded-lg outline-none text-[10px] opacity-70 focus:opacity-100 transition-all"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Author</label>
                                                <input
                                                    name="author"
                                                    value={formData.author}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 rounded-xl outline-none text-xs"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Reading Time</label>
                                                <input
                                                    name="readTime"
                                                    value={formData.readTime}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 rounded-xl outline-none text-xs"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #14b8a6;
                    border-radius: 10px;
                }
                
                .ql-editor {
                    min-height: 750px;
                    font-size: 1rem;
                    line-height: 1.8;
                }

                /* Header Sizes within Editor */
                .ql-editor h1 { font-size: 2.5rem !important; font-weight: 900 !important; margin-bottom: 1rem !important; }
                .ql-editor h2 { font-size: 2rem !important; font-weight: 800 !important; margin-bottom: 0.8rem !important; }
                .ql-editor h3 { font-size: 1.75rem !important; font-weight: 700 !important; margin-bottom: 0.6rem !important; }

                /* Quill Font Sizes */
                .ql-size-small { font-size: 0.75rem !important; }
                .ql-size-large { font-size: 1.5rem !important; }
                .ql-size-huge { font-size: 3rem !important; font-weight: 900 !important; }

                /* Alignment and Lists */
                .ql-align-center { text-align: center; }
                .ql-align-right { text-align: right; }
                .ql-align-justify { text-align: justify; }

                .ql-editor ul { list-style-type: disc !important; padding-left: 1.5rem !important; }
                .ql-editor ol { list-style-type: decimal !important; padding-left: 1.5rem !important; }

                /* Advance Premium Styles within Editor */
                .ql-gradient-text {
                    background: linear-gradient(90deg, #14b8a6, #3b82f6, #8b5cf6);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-weight: 800;
                }

                .ql-glass-card {
                    background: rgba(255, 255, 255, 0.05) !important;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    padding: 2rem !important;
                    border-radius: 2rem !important;
                    margin: 2rem 0 !important;
                    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1) !important;
                }

                .dark .ql-glass-card {
                    background: rgba(255, 255, 255, 0.02) !important;
                    border-color: rgba(255, 255, 255, 0.05) !important;
                }

                .ql-shadow-hover {
                    display: inline-block;
                    transition: all 0.3s ease;
                }
                .ql-shadow-hover:hover {
                    box-shadow: 0 20px 40px -15px rgba(20, 184, 166, 0.3);
                    transform: translateY(-5px);
                }

                /* Custom Toolbar Icons Labels */
                .ql-gradient::before { content: 'GRAD' !important; font-size: 8px !important; font-weight: 900 !important; color: #14b8a6; }
                .ql-shadow::before { content: 'SHAD' !important; font-size: 8px !important; font-weight: 900 !important; color: #3b82f6; }
                .ql-card::before { content: 'CARD' !important; font-size: 8px !important; font-weight: 900 !important; color: #8b5cf6; }

                .blog-content table, .ql-editor table {
                    border-collapse: collapse;
                    width: 100%;
                    margin-bottom: 2rem;
                }
                .blog-content table th, .blog-content table td,
                .ql-editor table th, .ql-editor table td {
                    border: 1px solid #e5e7eb;
                    padding: 0.75rem;
                }
                .dark .blog-content table th, .dark .blog-content table td,
                .dark .ql-editor table th, .dark .ql-editor table td {
                    border-color: #262626;
                }
                
                /* Allow images side-by-side */
                .ql-editor img {
                    display: inline-block !important;
                    vertical-align: bottom;
                    margin: 5px;
                    cursor: pointer;
                }

                .ql-toolbar.ql-snow {
                    border: none !important;
                    border-bottom: 2px solid #f3f4f6 !important;
                    padding: 12px !important;
                    position: sticky;
                    top: 0;
                    z-index: 100;
                    background: white;
                }
                .dark .ql-toolbar.ql-snow {
                    border-bottom: 2px solid #262626 !important;
                    background: #171717; /* Matches neutral-900 */
                }
                .ql-container.ql-snow {
                    border: none !important;
                }
                .dark .ql-editor.ql-blank::before {
                    color: rgba(255, 255, 255, 0.3) !important;
                }
                .dark .ql-toolbar .ql-stroke {
                    stroke: #d1d5db !important;
                }
                .dark .ql-toolbar .ql-fill {
                    fill: #d1d5db !important;
                }
                .dark .ql-toolbar .ql-picker {
                    color: #d1d5db !important;
                }
            `}</style>
        </div>
    );
}
