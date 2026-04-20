"use client";

import { usePathname } from "next/navigation";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { MobileNav } from "@/components/component/Mobile_Nav";
import { SiteFooter } from "./widgets/Footer";
import SmoothScroll from "./SmoothScroll";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import React, { Suspense, useState, useEffect } from 'react';
import { Inter } from "next/font/google";
import { Shield, Eye, EyeOff } from "lucide-react";
import RetroGrid from "@/components/magicui/retro-grid";
import { cn } from "@/app/utils/cn";

import Attendance from "../../public/Navlogo/attendeance.png"
import iShop from "../../public/Navlogo/iShop.png"
import Barcode from "../../public/Navlogo/barcode.png"
import BigData from "../../public/Navlogo/bigdata.png"
import Ivendor from "../../public/Navlogo/ivendor.png"
import kanban from "../../public/Navlogo/Kanban.png"
import GateMOdule from "../../public/Navlogo/Gatemodule.png"
import IOT from "../../public/Navlogo/Iot.png"
import Inventry from "../../public/Navlogo/inventry.png"
import LabhCart from "../../public/Navlogo/Labhcart.png"
import PPC from "../../public/Navlogo/ppc.png"
import IDealer from "../../public/Navlogo/idealer.png"
import Istock from "../../public/Navlogo/Stock.png"
import Mytime from "../../public/Navlogo/mytime.png"
import GateModule from "../../public/Navlogo/Gatemodule.png"
import iAccount from "../../public/Navlogo/iaccount.png"
import ierp from "../../public/Navlogo/Delta IERP.png"
import icrm from "../../public/Navlogo/crm.png"
import proniq from "../../public/ProductLogo/proniq.png"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function ConditionalLayout({ 
    children 
}: { 
    children: React.ReactNode
}) {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [accessKey, setAccessKey] = useState("");
    const [accessError, setAccessError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check for existing session authorization
        if (typeof window !== 'undefined') {
            const auth = sessionStorage.getItem("delta_admin_auth");
            if (auth === "true") setIsAuthorized(true);
        }
    }, []);

    useEffect(() => {
        const applySettings = () => {
            const saved = localStorage.getItem("delta_site_settings");
            if (saved) {
                const settings = JSON.parse(saved);
                let styleTag = document.getElementById('dynamic-site-styles');
                if (!styleTag) {
                    styleTag = document.createElement('style');
                    styleTag.id = 'dynamic-site-styles';
                    document.head.appendChild(styleTag);
                }

                const css = `
                    :root {
                        --brand-primary: ${settings.appearance?.primaryColor || '#14b8a6'};
                        --brand-secondary: ${settings.appearance?.secondaryColor || '#3b82f6'};
                        --site-font-family: ${settings.appearance?.fontFamily || 'Inter, sans-serif'};
                    }
                    body { font-family: var(--site-font-family); }
                    
                    /* Global Overrides */
                    .bg-teal-600, .bg-teal-500 { background-color: var(--brand-primary) !important; }
                    .text-teal-600, .text-teal-500 { color: var(--brand-primary) !important; }
                    .border-teal-600, .border-teal-500 { border-color: var(--brand-primary) !important; }
                    .hover\\:bg-teal-600:hover { background-color: var(--brand-primary) !important; opacity: 0.9; }
                    
                    /* Quill Button Overrides */
                    .ql-snow.ql-toolbar button:hover, .ql-snow .ql-toolbar button:hover, 
                    .ql-snow.ql-toolbar button:focus, .ql-snow .ql-toolbar button:focus,
                    .ql-snow.ql-toolbar button.ql-active, .ql-snow .ql-toolbar button.ql-active {
                        color: var(--brand-primary) !important;
                    }
                    .ql-snow.ql-toolbar .ql-picker-label:hover, .ql-snow .ql-toolbar .ql-picker-label:hover,
                    .ql-snow.ql-toolbar .ql-picker-label.ql-active, .ql-snow .ql-toolbar .ql-picker-label.ql-active {
                        color: var(--brand-primary) !important;
                    }

                    /* Theme Engines */
                    ${settings.appearance?.theme === 'corp' ? `
                        :root {
                            --brand-primary: #0f172a;
                            --brand-secondary: #334155;
                        }
                        .rounded-2xl, .rounded-3xl, .rounded-[2.5rem] { border-radius: 0.5rem !important; }
                        * { border-color: #e2e8f0 !important; }
                        .bg-teal-500, .bg-teal-600 { background: #0f172a !important; }
                    ` : ''}

                    ${settings.appearance?.theme === 'glass' ? `
                        :root {
                            --brand-primary: #6366f1;
                            --brand-secondary: #a855f7;
                        }
                        .bg-white, .bg-neutral-900 { 
                            background: rgba(255, 255, 255, 0.7) !important; 
                            backdrop-filter: blur(20px) !important; 
                        }
                        .dark .bg-neutral-900, .dark .bg-black { 
                            background: rgba(0, 0, 0, 0.4) !important; 
                            backdrop-filter: blur(20px) !important; 
                        }
                    ` : ''}

                    ${settings.appearance?.theme === 'tech' ? `
                         /* Default Modern/Teal - already handled by variables */
                    ` : ''}

                    ${settings.customCSS || ""}
                `;
                styleTag.innerHTML = css;
                
                if (settings.identity?.siteTitle) {
                    document.title = settings.identity.siteTitle;
                }
            }
        };

        if (mounted) {
            applySettings();
            window.addEventListener('site-settings-updated', applySettings);
        }
        return () => window.removeEventListener('site-settings-updated', applySettings);
    }, [mounted]);

    const isAdmin = pathname.startsWith('/admin');

    const navItems = [
        {
          name: "Industry we Serve",
          link: "/solutions",
          productCategory: {
            "By Industry": [
              {
                products: [
                  { title: "ERP For Pump Manufacturing", href: "/solutions/PumpManufacturing", src: "", description: "Enhances production and quality management." },
                  { title: "ERP For Engineering Manufacturing", href: "/solutions/EngineeringManufacturing", src: "", description: " Integrates design and production processes." },
                  { title: "ERP For Construction and Contracting Industry", href: "/solutions/ConstructionContractingIndustry", src: "", description: "Manages projects and resources." },
                  { title: "ERP For Trading and Distribution", href: "/solutions/TradingandDistribution", src: "", description: "Optimizes supply chain and sales." },
                  { title: "ERP For Education Domain", href: "/solutions/ERPAcademicDomain", src: "", description: "Streamlines administration and academics." }
                ]
              },
            ],
          }
        },
        {
          name: "Our Products",
          link: "/solutions",
          productCategory: {
            "By Current Software": [
              {
                products: [
                  { title: "Delta MyTime", href: "/solutions/MyTime", src: Mytime.src, description: "" },
                  { title: "Delta iCRM", href: "/solutions/iCRM", src: icrm.src, description: "" },
                  { title: "Delta iERP", href: "/solutions/iERP", src: ierp.src, description: "" },
                  { title: "Delta iAccount", href: "/solutions/iAccount", src: iAccount.src, description: "" },
                  { title: "Delta iVendor", href: "/solutions/iVendor", src: Ivendor.src, description: "" },
                  { title: "Delta iAttendance", href: "/solutions/iAttendance", src: Attendance.src, description: "" },
                  { title: "Delta Inventory", href: "/solutions/Deltainventry", src: Inventry.src, description: "" },
                  { title: "Delta Barcode", href: "/solutions/Barcode", src: Barcode.src, description: "" },
                  { title: "Delta iStock", href: "/solutions/iStock", src: Istock.src, description: "" },
                  { title: "Delta IOT", href: "/solutions/IOT", src: IOT.src, description: "" },
                  { title: "Delta iDealer", href: "/solutions/iDealer", src: IDealer.src, description: "" },
                  { title: "Delta PPC", href: "/solutions/PPC", src: PPC.src, description: "" },
                  { title: "Delta GateModule", href: "/solutions/GateModule", src: GateModule.src, description: "" },
                  { title: "Delta BigData", href: "/solutions/BigData", src: BigData.src, description: "" },
                  { title: "LabhCart", href: "/solutions/labhCart", src: LabhCart.src, description: "" },
                  { title: "Kanban", href: "/solutions/Kanban", src: kanban.src, description: "" },
                  { title: "iShop", href: "/solutions/iShop", src: iShop.src, description: "" },
                  { title: "proniq", href: "https://proniq.ai", src: proniq.src, description: "AI-driven solutions for business excellence.", target: "_blank" }
                ]
              }
            ]
          }
        },
        {
          name: "Partners",
          link: "",
          nestedSelection: [
            { name: "Odoo", link: "/Partner/odoo" },
            { name: "ZOHO", link: "/Partner/Zoho" },
            { name: "DoubleTick", link: "/Partner/doubleTick" },
            { name: "ClearTax", link: "/Partner/clearTax" }
          ]
        },
        {
          name: "Company",
          link: "",
          nestedSelection: [
            { name: "About Us", link: "/company/aboutus" },
            { name: "Life At Delta", link: "/company/lifeAtDelta" },
            { name: "Awards", link: "/company/Awards" },
            { name: "Blog", link: "/company/blogs" },
            { name: "CSR Activities", link: "/company/CSRActivities" },
            { name: "Gallery", link: "/company/gallery" },
            { name: "Careers", link: "/company/careers" },
            { name: "Tech Expo", link: "/company/TechExpoGujarat" }
          ]
        }
    ];

    if (!mounted) {
        return <div className={inter.className}>{children}</div>;
    }

    if (isAdmin) {
        if (!isAuthorized) {
            return (
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                    <div className={`${inter.variable} font-sans h-full w-full bg-neutral-950 flex items-center justify-center p-6 relative overflow-hidden`}>
                        {/* Security Background */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 blur-[150px] rounded-full" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full" />
                        <RetroGrid className="absolute inset-0 z-0 h-full w-full opacity-20 pointer-events-none" />

                        <div className="relative z-10 w-full max-w-md space-y-8 text-center">
                            <div className="space-y-4">
                                <div className="mx-auto w-20 h-20 bg-teal-500 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-teal-500/30 rotate-12 transition-transform hover:rotate-0 duration-500 cursor-help">
                                    <Shield className="text-white" size={36} />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-black uppercase tracking-tighter text-white">Security Gate</h1>
                                    <p className="text-[10px] text-teal-500 font-bold uppercase tracking-[0.4em]">Restricted Entrance</p>
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[3rem] shadow-2xl space-y-6">
                                <div className="space-y-2 text-left">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Access Key</label>
                                    <div className="relative group/input">
                                        <input 
                                            type={showPassword ? "text" : "password"}
                                            value={accessKey}
                                            onChange={(e) => {
                                                setAccessKey(e.target.value);
                                                setAccessError(false);
                                            }}
                                            placeholder="Enter Administrative Key"
                                            className={cn(
                                                "w-full bg-black/40 border px-6 py-4 rounded-2xl outline-none text-teal-400 font-mono tracking-widest transition-all focus:ring-4 focus:ring-teal-500/10 text-center pr-14",
                                                accessError ? "border-rose-500 animate-shake" : "border-white/5 focus:border-teal-500"
                                            )}
                                        />
                                        <button 
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-teal-500 transition-colors"
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                    {accessError && (
                                        <p className="text-[9px] text-rose-500 font-black uppercase tracking-widest text-center mt-2 animate-bounce">Access Key Incorrect</p>
                                    )}
                                </div>

                                <button 
                                    onClick={() => {
                                        if (accessKey === "Delta@2026") {
                                            setIsAuthorized(true);
                                            sessionStorage.setItem("delta_admin_auth", "true");
                                        } else {
                                            setAccessError(true);
                                            setAccessKey("");
                                        }
                                    }}
                                    className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-teal-500/20 hover:-translate-y-1 transition-all active:scale-95"
                                >
                                    Verify Entrance
                                </button>
                            </div>

                            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest transition-opacity hover:opacity-100 opacity-60">
                                Protected by Delta Cloud Security Matrix
                            </p>
                        </div>
                    </div>
                </ThemeProvider>
            );
        }

        return (
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                <div className={`${inter.variable} font-sans h-full w-full bg-[#f0f2f5] dark:bg-neutral-950 overflow-hidden`}>
                    {children}
                </div>
                <Analytics />
                <SpeedInsights />
            </ThemeProvider>
        );
    }

    return (
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <ScrollProgress />
            <SmoothScroll>
                <div className="relative w-full pt-10">
                    <FloatingNav navItems={navItems} />
                    <MobileNav navItems={navItems} />
                    <div className={`${inter.variable} relative w-full --font-inter`}>{children}</div>
                </div>
            </SmoothScroll>
            <SiteFooter />
            <Analytics />
            <Suspense fallback={null}>
            </Suspense>
            <SpeedInsights />
        </ThemeProvider>
    );
}
