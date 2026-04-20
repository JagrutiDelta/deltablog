"use client";

import React, { useState, useEffect } from "react";
import { LayoutDashboard, FileText, Clock, Eye } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import moment from "moment";
import { cn } from "@/app/utils/cn";

export default function DashboardPage() {
    const [stats, setStats] = useState({
        totalPosts: 0,
        drafts: 0,
        totalViews: 0,
        recentPosts: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get("/api/blogs");
                const blogs = response.data.blogs || [];
                
                setStats({
                    totalPosts: blogs.length,
                    drafts: blogs.filter(b => b.status === "draft").length,
                    totalViews: 1240,
                    recentPosts: blogs.slice(0, 5)
                });
            } catch (error) {
                console.error("Error fetching stats:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    return (
        <div className="flex-1 p-8 overflow-y-auto bg-[#f8fafc] dark:bg-neutral-950 relative">
            {/* Background Decorative Mesh */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-teal-500/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-tl from-teal-500/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <h1 className="text-3xl font-black uppercase tracking-[0.2em] mb-12 flex items-center gap-4 text-gray-900 dark:text-white">
                    <div className="p-3 bg-teal-500 rounded-2xl shadow-lg shadow-teal-500/20">
                        <LayoutDashboard className="text-white" size={28} />
                    </div>
                    Dashboard <span className="text-teal-500 font-light text-sm tracking-widest ml-4 hidden sm:inline-block border-l pl-4 border-gray-200">DELTA CORE ENGINE</span>
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Stats Cards with Gradients & Shadows */}
                    <div className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-2xl text-teal-600 dark:text-teal-400">
                                    <FileText size={28} />
                                </div>
                                <div className="text-[10px] font-black uppercase text-teal-500 bg-teal-50 dark:bg-teal-900/40 px-3 py-1 rounded-full">Active Content</div>
                            </div>
                            <h3 className="text-gray-400 text-[10px] font-black uppercase tracking-[0.1em]">Total Posts</h3>
                            <p className="text-5xl font-black mt-2 bg-gradient-to-br from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                                {loading ? "..." : stats.totalPosts}
                            </p>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-2xl text-amber-600 dark:text-amber-400">
                                    <Clock size={28} />
                                </div>
                                <div className="text-[10px] font-black uppercase text-amber-500 bg-amber-50 dark:bg-amber-900/40 px-3 py-1 rounded-full">Awaiting Review</div>
                            </div>
                            <h3 className="text-gray-400 text-[10px] font-black uppercase tracking-[0.1em]">Drafts</h3>
                            <p className="text-5xl font-black mt-2 bg-gradient-to-br from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                                {loading ? "..." : stats.drafts}
                            </p>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-blue-600 dark:text-blue-400">
                                    <Eye size={28} />
                                </div>
                                <div className="text-[10px] font-black uppercase text-blue-500 bg-blue-50 dark:bg-blue-900/40 px-3 py-1 rounded-full">Live Engagement</div>
                            </div>
                            <h3 className="text-gray-400 text-[10px] font-black uppercase tracking-[0.1em]">Total Views</h3>
                            <p className="text-5xl font-black mt-2 bg-gradient-to-br from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                                {loading ? "..." : stats.totalViews.toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Recent Activity with Table Enhancements */}
                <div className="bg-white dark:bg-neutral-900 rounded-[2.5rem] border border-gray-200 dark:border-neutral-800 shadow-xl overflow-hidden mb-12">
                    <div className="p-8 border-b border-gray-100 dark:border-neutral-800 flex items-center justify-between bg-white dark:bg-neutral-900/50">
                        <h3 className="font-black text-xl uppercase tracking-tighter">Live Activity Feed</h3>
                        <Link href="/admin/blogs" className="px-5 py-2 bg-gray-50 dark:bg-neutral-800 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-teal-500 hover:text-white transition-all">View Repository</Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50 dark:bg-neutral-800/30 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
                                <tr>
                                    <th className="px-8 py-5">Content Reference</th>
                                    <th className="px-8 py-5">Classification</th>
                                    <th className="px-8 py-5">System Status</th>
                                    <th className="px-8 py-5">Timestamp</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-neutral-800/50">
                                {loading ? (
                                    <tr><td colSpan="4" className="p-20 text-center"><div className="animate-spin h-8 w-8 border-4 border-teal-500 border-t-transparent rounded-full mx-auto" /></td></tr>
                                ) : stats.recentPosts && stats.recentPosts.length > 0 ? (
                                    stats.recentPosts.map((post) => (
                                        <tr key={post._id} className="group hover:bg-teal-50/30 dark:hover:bg-teal-500/5 transition-all duration-300 cursor-default">
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-4 text-sm font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                                    <div className="w-2 h-2 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    {post.title}
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-gray-100 dark:bg-neutral-800 rounded-lg text-gray-500 border border-gray-200/50 dark:border-neutral-700">
                                                    {post.category}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className={cn(
                                                    "inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase shadow-sm",
                                                    post.status === 'published' 
                                                        ? "bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-500/20" 
                                                        : "bg-amber-50 text-amber-600 border border-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-500/20"
                                                )}>
                                                    <div className={cn("w-1.5 h-1.5 rounded-full", post.status === 'published' ? "bg-emerald-500" : "bg-amber-500")} />
                                                    {post.status}
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 text-xs text-gray-400 font-medium">{moment(post.date).fromNow()}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr><td colSpan="4" className="p-20 text-center text-gray-400 italic">No historical data available.</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="p-12 bg-white dark:bg-neutral-900 rounded-[2.5rem] border border-gray-200 dark:border-neutral-800 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <p className="text-gray-900 dark:text-white font-black uppercase tracking-widest text-lg relative z-10">Advanced Predictive Analytics</p>
                    <p className="text-gray-500 text-xs mt-3 max-w-sm relative z-10">Neural engine is processing visitor data flow. Real-time heatmaps and deep performance metrics will manifest here as your reach expands.</p>
                </div>
            </div>
        </div>
    );
}
