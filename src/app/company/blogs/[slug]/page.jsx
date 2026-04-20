"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { Loader2, ArrowLeft, Calendar, User, Clock, Search, ChevronRight, Tag, Bookmark } from "lucide-react";
import RetroGrid from "@/components/magicui/retro-grid";

export default function BlogPostDetail({ params }) {
    const [blog, setBlog] = useState(null);
    const [allBlogs, setAllBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [siteSettings, setSiteSettings] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem("delta_site_settings");
        if (saved) {
            setSiteSettings(JSON.parse(saved));
        }
    }, []);
    const [searchQuery, setSearchQuery] = useState("");

    // Unwrap params using React.use() if needed, but in client components it's usually fine
    // However, in Next 15+ params is a Promise. Let's handle it safely.
    const [id, setId] = useState(null);

    useEffect(() => {
        const getParams = async () => {
            const resolvedParams = await params;
            setId(resolvedParams.slug);
        };
        getParams();
    }, [params]);

    useEffect(() => {
        if (id) {
            fetchBlog();
            fetchAllBlogs();
        }
    }, [id]);

    const fetchAllBlogs = async () => {
        try {
            const response = await axios.get("/api/blogs");
            // Only show published blogs in sidebar
            const published = (response.data.blogs || []).filter(b => !b.status || b.status === 'published');
            setAllBlogs(published);
        } catch (error) {
            console.error("Error fetching all blogs:", error);
        }
    };

    const fetchBlog = async () => {
        try {
            const response = await axios.get(`/api/blogs/slug/${id}`);
            if (response.data.success) {
                setBlog(response.data.blog);
            } else {
                setError("Blog not found");
            }
        } catch (error) {
            setError(error.response?.data?.message || "Error fetching blog");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <Loader2 className="animate-spin text-teal-500" size={48} />
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center space-y-4">
                <h2 className="text-2xl font-bold">{error || "Blog not found"}</h2>
                <Link href="/company/blogs" className="text-teal-500 hover:underline">
                    Back to Blogs
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black selection:bg-teal-500 selection:text-white">
            <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
                <RetroGrid className="absolute inset-0 z-0 h-full w-full opacity-30 pointer-events-none" />
                
                <Link href="/company/blogs" className="inline-flex items-center gap-2 text-gray-500 hover:text-teal-500 transition-colors mb-12 group relative z-10">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to all blogs
                </Link>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    {/* Main Blog content - 9 Columns */}
                    <div className="lg:col-span-9 space-y-12">
                        <div className="bg-white dark:bg-neutral-900 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-white/5 p-8 md:p-12 lg:p-14 space-y-12 h-fit">
                            {/* Header Section */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-sm font-black uppercase tracking-widest border border-teal-500/20">
                                        {blog.category}
                                    </div>
                                    {blog.status === 'draft' && (
                                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-black uppercase tracking-widest border border-yellow-500/20 shadow-sm animate-pulse">
                                            Preview Mode (Draft)
                                        </div>
                                    )}
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-8">
                                    {blog.title}
                                </h1>

                                <div className="flex flex-wrap items-center text-base text-gray-500 dark:text-gray-400 gap-6 border-y border-gray-100 dark:border-white/5 py-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-black text-xs overflow-hidden shadow-lg shadow-teal-500/10 border border-gray-100 dark:border-white/10">
                                            {siteSettings?.identity?.logo ? (
                                                <img src={siteSettings.identity.logo} className="w-full h-full object-contain p-1" alt="Logo" />
                                            ) : (
                                                <span>{siteSettings?.identity?.siteTitle?.substring(0, 2).toUpperCase() || "DI"}</span>
                                            )}
                                        </div>
                                        <span className="font-bold text-gray-900 dark:text-white">
                                            {siteSettings?.identity?.siteTitle || blog.author}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={18} className="text-teal-500" />
                                        <span>{moment(blog.date).format("MMMM D, YYYY")}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={18} className="text-teal-500" />
                                        <span>{blog.readTime}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Featured Image */}
                            <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 dark:border-white/10">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Content Area */}
                            <div
                                className="prose prose-xl dark:prose-invert max-w-none blog-content break-words w-full prose-headings:font-black prose-headings:tracking-tight prose-a:text-teal-600 prose-img:rounded-2xl prose-strong:text-teal-600 dark:prose-strong:text-teal-400"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />
                        </div>
                    </div>

                    {/* Sidebar - 3 Columns */}
                    <aside className="lg:col-span-3">
                        <div className="sticky top-24 space-y-10">
                            {/* Search Bar */}
                        <div className="bg-white dark:bg-neutral-900 rounded-[2.5rem] p-8 border border-gray-100 dark:border-white/5 shadow-sm">
                            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                <Search className="text-teal-500" size={24} />
                                Search
                            </h3>
                            <div className="relative group">
                                <input 
                                    type="text"
                                    placeholder="Search blogs..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-6 pr-12 py-4 bg-gray-50 dark:bg-neutral-800 rounded-2xl border border-gray-100 dark:border-white/5 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none"
                                />
                                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-500 transition-colors" size={20} />
                            </div>
                        </div>

                        {/* Recent Blogs */}
                        <div className="bg-white dark:bg-neutral-900 rounded-[2.5rem] p-8 border border-gray-100 dark:border-white/5 shadow-sm">
                            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                                <Clock className="text-teal-500" size={24} />
                                Recent Posts
                            </h3>
                            <div className="space-y-8">
                                {allBlogs.filter(b => b._id !== blog?._id).slice(0, 5).map((recent) => (
                                    <Link 
                                        key={recent._id} 
                                        href={`/company/blogs/${recent.slug || recent._id}`}
                                        className="flex gap-4 group cursor-pointer"
                                    >
                                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border border-gray-100 dark:border-white/5">
                                            <Image 
                                                src={recent.image} 
                                                alt={recent.title} 
                                                fill 
                                                className="object-cover transition-transform duration-500 group-hover:scale-110" 
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="text-sm font-black text-gray-900 dark:text-white group-hover:text-teal-500 transition-colors line-clamp-2 leading-tight">
                                                {recent.title}
                                            </h4>
                                            <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                                <Calendar size={12} className="text-teal-500" />
                                                {moment(recent.date).format("MMM D, YYYY")}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="bg-white dark:bg-neutral-900 rounded-[2.5rem] p-8 border border-gray-100 dark:border-white/5 shadow-sm">
                            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                                <Tag className="text-teal-500" size={24} />
                                Categories
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {Array.from(new Set(allBlogs.map(b => b.category))).map((cat) => (
                                    <Link
                                        key={cat}
                                        href={`/company/blogs?category=${cat}`}
                                        className="px-4 py-2 bg-gray-50 dark:bg-neutral-800 hover:bg-teal-500 hover:text-white rounded-xl text-sm font-bold text-gray-600 dark:text-gray-400 transition-all border border-gray-100 dark:border-white/5"
                                    >
                                        {cat}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Featured (Optional) */}
                        <div className="bg-teal-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                           <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-3xl transform group-hover:scale-150 transition-transform duration-700" />
                           <Bookmark className="mb-4 text-teal-200" size={32} />
                           <h3 className="text-2xl font-black mb-2">Join Our Newsletter</h3>
                           <p className="text-teal-50 text-sm mb-6 leading-relaxed">Get the latest technology insights and innovation updates delivered to your inbox.</p>
                           <Link 
                                href="/contactus"
                                className="inline-flex items-center justify-center w-full py-4 bg-white text-teal-600 rounded-2xl font-black text-sm hover:bg-teal-50 transition-colors shadow-lg"
                            >
                                Get Started
                                <ChevronRight className="ml-2" size={18} />
                           </Link>
                        </div>
                    </div>
                </aside>
                </div>
            </section>

            <style jsx global>{`
                .blog-content {
                    line-height: 1.8;
                }
                /* Inline images for side-by-side placement */
                .blog-content img {
                    display: inline-block !important;
                    margin: 10px 5px !important;
                    max-width: calc(100% - 10px) !important;
                    height: auto;
                    border-radius: 1rem;
                }
                /* Quill specific sizes */
                .ql-size-small { font-size: 0.75rem !important; }
                .ql-size-large { font-size: 1.5rem !important; }
                .ql-size-huge { font-size: 3rem !important; font-weight: 900 !important; }

                /* Headings within blog content */
                .blog-content h1 { font-size: 2.5rem !important; font-weight: 900 !important; margin-top: 2rem !important; margin-bottom: 1rem !important; line-height: 1.2 !important; }
                .blog-content h2 { font-size: 2rem !important; font-weight: 800 !important; margin-top: 1.5rem !important; margin-bottom: 0.8rem !important; }
                .blog-content h3 { font-size: 1.75rem !important; font-weight: 700 !important; margin-top: 1.25rem !important; margin-bottom: 0.6rem !important; }
                
                /* Alignment */
                .ql-align-center { text-align: center !important; }
                .ql-align-right { text-align: right !important; }
                .ql-align-justify { text-align: justify !important; }

                /* Colors and backgrounds (often inline styles, but just in case) */
                .blog-content p {
                    margin-bottom: 1.5rem;
                }
                
                /* List fixes - sometimes prose overrides these */
                .blog-content ul {
                    list-style-type: disc !important;
                    padding-left: 1.5rem !important;
                    margin-bottom: 1.5rem !important;
                }
                .blog-content ol {
                    list-style-type: decimal !important;
                    padding-left: 1.5rem !important;
                    margin-bottom: 1.5rem !important;
                }
                .blog-content li {
                    margin-bottom: 0.5rem !important;
                }

                /* Advance Premium Styles for Public View */
                .ql-gradient-text {
                    background: linear-gradient(90deg, #14b8a6, #3b82f6, #8b5cf6) !important;
                    -webkit-background-clip: text !important;
                    -webkit-text-fill-color: transparent !important;
                    font-weight: 800 !important;
                    display: inline-block !important;
                }

                .ql-glass-card {
                    background: rgba(255, 255, 255, 0.05) !important;
                    backdrop-filter: blur(10px) !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    padding: 2.5rem !important;
                    border-radius: 2.5rem !important;
                    margin: 3rem 0 !important;
                    box-shadow: 0 20px 50px -15px rgba(0,0,0,0.1) !important;
                    position: relative !important;
                    overflow: hidden !important;
                }

                .dark .ql-glass-card {
                    background: rgba(255, 255, 255, 0.02) !important;
                    border-color: rgba(255, 255, 255, 0.05) !important;
                    box-shadow: 0 20px 50px -15px rgba(0,0,0,0.5) !important;
                }

                .ql-shadow-hover {
                    display: inline-block !important;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
                    cursor: pointer !important;
                }
                .ql-shadow-hover:hover {
                    box-shadow: 0 25px 50px -12px rgba(20, 184, 166, 0.4) !important;
                    transform: translateY(-8px) scale(1.02) !important;
                    color: #14b8a6 !important;
                }
            `}</style>
        </div>
    );
}
