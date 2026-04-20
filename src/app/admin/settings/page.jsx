"use client";

import React, { useState, useEffect } from "react";
import { 
    Settings, Palette, Globe, Menu as MenuIcon, Image as ImageIcon, 
    Type, Shield, Code, Save, Plus, Trash2, ChevronRight, Check,
    Monitor, Moon, Sun, Smartphone, Laptop, Layout
} from "lucide-react";
import { cn } from "@/app/utils/cn";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("general");
    const [mounted, setMounted] = useState(false);
    
    // Site Identity State
    const [identity, setIdentity] = useState({
        siteTitle: "Delta Infosoft",
        tagline: "Empowering Business through Innovation",
        logo: "",
        favicon: ""
    });

    // Appearance State
    const [appearance, setAppearance] = useState({
        primaryColor: "#14b8a6",
        secondaryColor: "#3b82f6",
        fontFamily: "Inter, sans-serif",
        darkMode: true,
        borderRadius: "1rem",
        theme: "tech"
    });

    const [customCSS, setCustomCSS] = useState("");

    useEffect(() => {
        setMounted(true);
        // Handle deep linking from sidebar
        if (window.location.hash === "#appearance") {
            setActiveTab("appearance");
        }

        // Load settings from localStorage
        const savedSettings = localStorage.getItem("delta_site_settings");
        if (savedSettings) {
            const parsed = JSON.parse(savedSettings);
            if (parsed.identity) setIdentity(parsed.identity);
            if (parsed.appearance) setAppearance(parsed.appearance);
            if (parsed.customCSS) setCustomCSS(parsed.customCSS);
        }
    }, []);

    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setIdentity({...identity, logo: reader.result});
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFaviconUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setIdentity({...identity, favicon: reader.result});
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        const settingsToSave = {
            identity,
            appearance,
            customCSS
        };
        localStorage.setItem("delta_site_settings", JSON.stringify(settingsToSave));
        
        // Trigger a custom event so other components (like ConditionalLayout) can react
        window.dispatchEvent(new Event('site-settings-updated'));
        
        alert("System wide propagation complete. Your settings have been applied.");
    };

    const tabs = [
        { id: "general", label: "General", icon: Globe, description: "Basic site configuration & identity" },
        { id: "appearance", label: "Appearance", icon: Palette, description: "Global colors, layout & typography" },
        { id: "advanced", label: "Advanced", icon: Code, description: "Custom CSS & Developer diagnostics" },
        { id: "security", label: "Security", icon: Shield, description: "Roles, permissions & access control" }
    ];

    if (!mounted) return null;

    return (
        <div className="flex-1 flex flex-col min-w-0 bg-[#f8fafc] dark:bg-neutral-950 overflow-hidden relative">
            {/* Background Aesthetic */}
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-teal-500/[0.03] blur-[150px] rounded-full" />

            <header className="h-20 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl border-b border-gray-100 dark:border-neutral-800 flex items-center justify-between px-10 z-20">
                <div className="flex flex-col">
                    <h1 className="text-xl font-black uppercase tracking-tighter">System Console</h1>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{activeTab} environment</p>
                </div>
                <div className="flex items-center gap-4">
                    <button 
                        onClick={handleSave}
                        className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg shadow-teal-500/20 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                    >
                        <Save size={14} />
                        Propagate Changes
                    </button>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Internal Navigation Tabs */}
                <div className="w-80 border-r border-gray-100 dark:border-neutral-800 p-8 space-y-2 overflow-y-auto z-10">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "w-full flex items-center gap-4 p-4 rounded-2xl transition-all text-left group",
                                    isActive 
                                        ? "bg-white dark:bg-neutral-900 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-neutral-800" 
                                        : "hover:bg-gray-100 dark:hover:bg-white/5 opacity-60 hover:opacity-100"
                                )}
                            >
                                <div className={cn(
                                    "p-2.5 rounded-xl transition-colors",
                                    isActive ? "bg-teal-500 text-white" : "bg-gray-50 dark:bg-neutral-800 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                )}>
                                    <Icon size={18} />
                                </div>
                                <div className="flex-1">
                                    <p className={cn("text-xs font-black uppercase tracking-tight", isActive ? "text-gray-900 dark:text-white" : "text-gray-500")}>
                                        {tab.label}
                                    </p>
                                    {isActive && <p className="text-[9px] text-gray-400 font-bold uppercase mt-0.5">{tab.id}</p>}
                                </div>
                                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,1)]" />}
                            </button>
                        );
                    })}
                </div>

                {/* Main Settings Display */}
                <div className="flex-1 overflow-y-auto p-12 relative z-10 custom-scrollbar">
                    <div className="max-w-4xl mx-auto space-y-12">
                        
                        {/* Tab Content: General */}
                        {activeTab === "general" && (
                            <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="flex flex-col gap-2 border-b border-gray-100 dark:border-neutral-800 pb-8">
                                    <h2 className="text-3xl font-black uppercase tracking-tighter">Site Identity</h2>
                                    <p className="text-sm text-gray-500 font-medium">Configure global metadata and brand recognition signals.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Site Title</label>
                                        <input 
                                            value={identity.siteTitle} 
                                            onChange={(e) => setIdentity({...identity, siteTitle: e.target.value})}
                                            className="w-full px-5 py-3 bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl outline-none focus:ring-4 focus:ring-teal-500/5 transition-all font-bold"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Tagline / Motto</label>
                                        <input 
                                            value={identity.tagline} 
                                            onChange={(e) => setIdentity({...identity, tagline: e.target.value})}
                                            className="w-full px-5 py-3 bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl outline-none focus:ring-4 focus:ring-teal-500/5 transition-all font-bold"
                                        />
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-neutral-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-neutral-800 shadow-sm space-y-6">
                                    <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-3">
                                        <ImageIcon className="text-teal-500" size={18} />
                                        Visual Assets
                                    </h3>
                                    <div className="flex flex-wrap gap-8">
                                        <div className="space-y-3">
                                            <p className="text-[10px] font-black uppercase text-gray-400">Primary Brand Logo</p>
                                            <label className="w-48 h-32 rounded-3xl bg-gray-50 dark:bg-neutral-800 border-2 border-dashed border-gray-200 dark:border-neutral-700 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-teal-500 transition-all group overflow-hidden relative">
                                                {identity.logo ? (
                                                    <img src={identity.logo} className="w-full h-full object-contain p-2" alt="Logo Preview" />
                                                ) : (
                                                    <div className="flex flex-col items-center gap-2">
                                                        <div className="p-3 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm text-gray-400 group-hover:text-teal-500 transition-colors">
                                                            <Plus size={20} />
                                                        </div>
                                                        <span className="text-[10px] font-black uppercase text-gray-400">Upload Logo</span>
                                                    </div>
                                                )}
                                                <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
                                            </label>
                                        </div>
                                        <div className="space-y-3">
                                            <p className="text-[10px] font-black uppercase text-gray-400">Site Icon (Favicon)</p>
                                            <label className="w-32 h-32 rounded-3xl bg-gray-50 dark:bg-neutral-800 border-2 border-dashed border-gray-200 dark:border-neutral-700 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-teal-500 transition-all group overflow-hidden relative">
                                                {identity.favicon ? (
                                                    <img src={identity.favicon} className="w-full h-full object-contain p-4" alt="Favicon Preview" />
                                                ) : (
                                                    <div className="flex flex-col items-center gap-2">
                                                        <div className="p-3 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm text-gray-400 group-hover:text-teal-500 transition-colors">
                                                            <Plus size={20} />
                                                        </div>
                                                        <span className="text-[10px] font-black uppercase text-gray-400">Upload Icon</span>
                                                    </div>
                                                )}
                                                <input type="file" accept="image/*" className="hidden" onChange={handleFaviconUpload} />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Tab Content: Appearance */}
                        {activeTab === "appearance" && (
                            <section className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="flex flex-col gap-2 border-b border-gray-100 dark:border-neutral-800 pb-8">
                                    <h2 className="text-3xl font-black uppercase tracking-tighter">Color & Typography</h2>
                                    <p className="text-sm text-gray-500 font-medium">Define the visual DNA of the user experience.</p>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div className="bg-white dark:bg-neutral-900 p-8 rounded-[2rem] border border-gray-100 dark:border-neutral-800 shadow-sm space-y-6">
                                        <h3 className="text-xs font-black uppercase tracking-widest flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                            Palette Console
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-neutral-800/50 rounded-2xl">
                                                <span className="text-[10px] font-black uppercase text-gray-500">Primary Brand</span>
                                                <div className="flex items-center gap-3">
                                                    <input 
                                                        type="color" 
                                                        value={appearance.primaryColor}
                                                        onChange={(e) => setAppearance({...appearance, primaryColor: e.target.value})}
                                                        className="w-10 h-10 rounded-xl bg-transparent border-none cursor-pointer outline-none p-0 overflow-hidden" 
                                                    />
                                                    <span className="text-xs font-bold font-mono uppercase">{appearance.primaryColor}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-neutral-800/50 rounded-2xl">
                                                <span className="text-[10px] font-black uppercase text-gray-500">Accent Highlight</span>
                                                <div className="flex items-center gap-3">
                                                    <input 
                                                        type="color" 
                                                        value={appearance.secondaryColor}
                                                        onChange={(e) => setAppearance({...appearance, secondaryColor: e.target.value})}
                                                        className="w-10 h-10 rounded-xl bg-transparent border-none cursor-pointer outline-none p-0 overflow-hidden" 
                                                    />
                                                    <span className="text-xs font-bold font-mono uppercase">{appearance.secondaryColor}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white dark:bg-neutral-900 p-8 rounded-[2rem] border border-gray-100 dark:border-neutral-800 shadow-sm space-y-6">
                                        <h3 className="text-xs font-black uppercase tracking-widest flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-teal-500" />
                                            Design Rules
                                        </h3>
                                        <div className="grid grid-cols-3 gap-4">
                                            {[
                                                { label: "Phone", icon: Smartphone },
                                                { label: "Tablet", icon: Laptop },
                                                { label: "Desktop", icon: Monitor }
                                            ].map((device) => (
                                                <button key={device.label} className="p-4 bg-gray-50 dark:bg-neutral-800/50 rounded-2xl flex flex-col items-center gap-2 hover:bg-teal-500 hover:text-white transition-all group">
                                                    <device.icon size={20} className="text-gray-400 group-hover:text-white" />
                                                    <span className="text-[10px] font-black uppercase">{device.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                        <div className="p-4 bg-gray-50 dark:bg-neutral-800 rounded-2xl flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                {appearance.darkMode ? <Moon className="text-teal-500" size={18} /> : <Sun className="text-amber-500" size={18} />}
                                                <span className="text-[10px] font-black uppercase">{appearance.darkMode ? 'Dark Environment' : 'Light Environment'}</span>
                                            </div>
                                            <button 
                                                onClick={() => setAppearance({...appearance, darkMode: !appearance.darkMode})}
                                                className={cn(
                                                    "w-12 h-6 rounded-full relative transition-all shadow-inner",
                                                    appearance.darkMode ? "bg-teal-500" : "bg-gray-300"
                                                )}
                                            >
                                                <div className={cn(
                                                    "absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all",
                                                    appearance.darkMode ? "right-1" : "left-1"
                                                )} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-3 px-2">
                                        <Layout size={18} className="text-teal-500" />
                                        Design Templates
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {[
                                            { id: 'tech', name: 'Ultra Modern', color: 'from-teal-500 to-blue-500', active: appearance.theme === 'tech' },
                                            { id: 'corp', name: 'Elite Corporate', color: 'from-slate-800 to-slate-900', active: appearance.theme === 'corp' },
                                            { id: 'glass', name: 'Frost Glass', color: 'from-indigo-500 to-purple-500', active: appearance.theme === 'glass' }
                                        ].map((theme) => (
                                            <div 
                                                key={theme.id} 
                                                onClick={() => setAppearance({...appearance, theme: theme.id})}
                                                className={cn(
                                                    "group relative aspect-video rounded-3xl overflow-hidden border-2 transition-all cursor-pointer",
                                                    theme.active ? "border-teal-500 shadow-xl shadow-teal-500/10" : "border-gray-100 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-600"
                                                )}
                                            >
                                                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80", theme.color)} />
                                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                                    <p className="text-white text-xs font-black uppercase tracking-widest mb-4">{theme.name}</p>
                                                    {theme.active ? (
                                                        <div className="px-4 py-1.5 bg-white text-teal-600 text-[9px] font-black uppercase rounded-full flex items-center gap-2">
                                                            <Check size={12} /> Live Engine
                                                        </div>
                                                    ) : (
                                                        <div className="px-4 py-1.5 bg-white/20 group-hover:bg-white text-white group-hover:text-gray-900 text-[9px] font-black uppercase rounded-full transition-all backdrop-blur-md">
                                                            Activate Theme
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        
                        {/* Tab Content: Advanced */}
                        {activeTab === "advanced" && (
                            <section className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="flex flex-col gap-2 border-b border-gray-100 dark:border-neutral-800 pb-8">
                                    <h2 className="text-3xl font-black uppercase tracking-tighter">Developer Command</h2>
                                    <p className="text-sm text-gray-500 font-medium">Safe-mode overrides and system diagnostics.</p>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-xs font-black uppercase tracking-widest flex items-center gap-3 text-rose-500">
                                        <Code size={18} />
                                        Master CSS Override
                                    </h3>
                                    <div className="relative group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-teal-500 rounded-[2rem] blur opacity-10 group-focus-within:opacity-20 transition duration-500"></div>
                                        <textarea 
                                            value={customCSS}
                                            onChange={(e) => setCustomCSS(e.target.value)}
                                            placeholder="/* Add Custom CSS Rules Here */\n\n:root {\n  --brand-primary: #14b8a6;\n}\n\n.header {\n  backdrop-filter: blur(20px);\n}"
                                            className="relative w-full h-80 bg-neutral-900 text-teal-400 p-8 rounded-[2rem] border border-neutral-800 font-mono text-sm outline-none focus:ring-4 focus:ring-teal-500/5 transition-all"
                                        />
                                    </div>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Warning: Direct CSS injection bypasses safety protocols. Use with precision.</p>
                                </div>
                            </section>
                        )}

                    </div>
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e2e8f0;
                    border-radius: 10px;
                }
                .dark .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #262626;
                }
            `}</style>
        </div>
    );
}
