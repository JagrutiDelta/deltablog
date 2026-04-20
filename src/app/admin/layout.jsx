"use client";

import React, { useState } from "react";
import { 
    LayoutDashboard, FileText, Image as ImageIcon, Users, Settings, 
    Globe, ChevronLeft, ChevronRight, Palette, Layout, Menu as MenuIcon,
    LogOut, UserCircle
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/utils/cn";

export default function AdminLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [siteSettings, setSiteSettings] = useState(null);
    const pathname = usePathname();

    React.useEffect(() => {
        const loadSettings = () => {
            const saved = localStorage.getItem("delta_site_settings");
            if (saved) {
                setSiteSettings(JSON.parse(saved));
            }
        };
        loadSettings();
        window.addEventListener('site-settings-updated', loadSettings);
        return () => window.removeEventListener('site-settings-updated', loadSettings);
    }, []);

    const sidebarItems = [
        { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
        { icon: FileText, label: "Posts", href: "/admin/blogs" },
        { icon: ImageIcon, label: "Media Library", href: "/admin/media" },
        { icon: Palette, label: "Appearance", href: "/admin/settings#appearance" },
        { icon: Users, label: "Users", href: "/admin/users" },
        { icon: Settings, label: "Settings", href: "/admin/settings" },
    ];

    const siteTitle = siteSettings?.identity?.siteTitle || "Delta";
    const siteLogo = siteSettings?.identity?.logo;

    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            sessionStorage.removeItem("delta_admin_auth");
            window.location.reload();
        }
    };

    return (
        <div className="flex h-full w-full bg-[#f8fafc] dark:bg-neutral-950 font-sans text-gray-800 dark:text-gray-200 overflow-hidden items-stretch relative">
            {/* Background Aesthetic Elements */}
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
            
            {/* Sidebar */}
            <aside 
                className={cn(
                    "bg-[#1e1e2d] text-gray-400 flex-shrink-0 transition-all duration-300 flex flex-col z-50 h-full sticky top-0",
                    isSidebarOpen ? "w-64" : "w-20"
                )}
            >
                <div className="p-6 flex items-center gap-3 border-b border-white/5">
                    <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden shadow-lg shadow-teal-500/10">
                        {siteLogo ? (
                            <img src={siteLogo} className="w-full h-full object-contain p-1" alt="Logo" />
                        ) : (
                            <Globe className="text-white" size={20} />
                        )}
                    </div>
                    {isSidebarOpen && (
                        <div className="flex flex-col">
                            <span className="font-black text-white tracking-tighter text-xl leading-none">
                                {siteTitle}
                            </span>
                            <span className="text-[10px] text-teal-400 font-bold uppercase tracking-widest mt-1">Admin</span>
                        </div>
                    )}
                </div>

                <nav className="flex-1 px-4 py-8 space-y-3 overflow-y-auto custom-scrollbar">
                    {sidebarItems.map((item, idx) => {
                        const isActive = pathname === item.href || (item.href === "/admin/blogs" && pathname.startsWith("/admin/blogs"));
                        return (
                            <Link
                                key={idx}
                                href={item.href}
                                className={cn(
                                    "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all group",
                                    isActive 
                                        ? "bg-gradient-to-r from-teal-500/20 to-transparent text-teal-400 border border-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.1)]" 
                                        : "hover:bg-white/5 hover:text-white"
                                )}
                            >
                                <item.icon size={20} className={cn(isActive ? "text-teal-400" : "group-hover:text-white")} />
                                {isSidebarOpen && <span className="font-medium">{item.label}</span>}
                            </Link>
                        );
                    })}
                </nav>

                {/* Sidebar Footer User Section */}
                <div className="p-6 border-t border-white/5 space-y-4 bg-black/10">
                    <div className={cn(
                        "flex items-center gap-4 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer group",
                        !isSidebarOpen && "justify-center"
                    )}>
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-500 to-emerald-500 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-teal-500/20">
                            DA
                        </div>
                        {isSidebarOpen && (
                            <div className="flex-1 overflow-hidden">
                                <p className="text-white text-xs font-black truncate">Delta Admin</p>
                                <p className="text-[10px] text-teal-500 font-bold uppercase tracking-widest leading-tight">Master Console</p>
                            </div>
                        )}
                    </div>
                    <button 
                        onClick={handleLogout}
                        className={cn(
                            "w-full flex items-center gap-4 p-3 rounded-2xl hover:bg-rose-500/10 text-gray-500 hover:text-rose-500 transition-all text-[10px] font-black uppercase tracking-[0.2em]",
                            !isSidebarOpen && "justify-center"
                        )}
                    >
                        <LogOut size={18} />
                        {isSidebarOpen && <span>Exit System</span>}
                    </button>
                </div>

                <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-4 hover:bg-white/5 flex items-center justify-center border-t border-white/5 text-gray-600 transition-colors"
                >
                    {isSidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                </button>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-w-0 h-screen overflow-y-auto relative custom-scrollbar bg-[#f8fafc] dark:bg-neutral-950">
                <div className="min-h-full flex flex-col">
                    {children}
                </div>
            </main>
        </div>
    );
}
