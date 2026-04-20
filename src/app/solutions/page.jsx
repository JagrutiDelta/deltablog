"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import SolutionsImg from "../../../public/Group 22355Solutionss.png"
import RetroGrid from '@/components/magicui/retro-grid'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { ProductPreview } from '@/components/component/product-preview'
import Highlight from "@/app/widgets/Highlight"
import SolutionSmallerScreen from "@/components/component/SolutionSmallerScreen"
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
    ArrowRight,
    CheckCircle2,
    Cpu,
    Factory,
    Globe,
    Layers,
    ShieldCheck,
    Zap
} from 'lucide-react'

// Image imports (using strings to avoid import errors if not standard)
const industryImg = "/eng.png";
const techImg = "/Development.png";
const softwareImg = "/Group 22276showcase.png";

const SolutionsPage = () => {
    const [spread, setSpread] = useState(false);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const slogan = "Scale your business with industry-specific, technology-driven integrated solutions."

    const categories = [
        {
            title: "By Industry",
            description: "Custom ERP solutions designed for the unique workflows of manufacturing, construction, and specialized industrial sectors.",
            link: "/solutions#industries",
            image: industryImg,
            feature: "Pump Manufacturing\nEngineering Units\nConstruction & Projects\nTrading & Distribution"
        },
        {
            title: "By Technology",
            description: "Harnessing AI, IoT, and Cloud infrastructure to build resilient, scalable business systems for the modern era.",
            link: "/solutions#tech",
            image: techImg,
            feature: "AI Integration\nIoT & Automation\nScalable Cloud ERP\nMobility Solutions"
        },
        {
            title: "By Software",
            description: "Our proprietary product suite covering HRM, Inventory, Finance, and Customer Relations management.",
            link: "/solutions#software",
            image: softwareImg,
            feature: "iERP System\niCRM Suite\nMyTime HRM\niStock Inventory"
        },
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-white dark:bg-neutral-950 overflow-x-hidden selection:bg-teal-500 selection:text-white pb-20">

            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 md:px-6 lg:px-8 max-w-[1400px] mx-auto z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 flex flex-col items-start space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-200/50 dark:border-teal-800/50 bg-teal-50/50 dark:bg-teal-900/20 text-sm font-semibold text-teal-600 dark:text-teal-400 backdrop-blur-md shadow-sm"
                        >
                            <Zap className="w-4 h-4 fill-current" />
                            The Future of Enterprise Management
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-gray-900 dark:text-white leading-[0.9]"
                        >
                            Powerful <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
                                Solutions
                            </span>
                        </motion.h1>

                        <div className="max-w-xl">
                            <TextGenerateEffect words={slogan} className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <Link href="/contactus" className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-bold transition-all shadow-xl shadow-teal-500/20 hover:scale-105 active:scale-95 flex items-center gap-2">
                                Request a Demo <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/company/aboutus" className="px-8 py-4 border border-teal-200 dark:border-neutral-800 hover:bg-teal-50 dark:hover:bg-neutral-900 backdrop-blur-sm rounded-full font-bold text-gray-700 dark:text-gray-300 transition-all">
                                Learn More
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="lg:col-span-5 relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-[550px] aspect-square">
                            {/* Decorative rings */}
                            <div className="absolute inset-0 border-[40px] border-teal-500/5 rounded-full animate-[spin_20s_linear_infinite]" />
                            <div className="absolute inset-10 border-[1px] border-teal-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full blur-[80px]" />

                            <Image
                                src={SolutionsImg}
                                alt="Solutions Showcase"
                                width={600}
                                height={600}
                                className="relative z-10 w-full h-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_25px_50px_rgba(20,184,166,0.3)] animate-float"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats/Highlight Section */}
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 mb-32 z-10 relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-[2.5rem] bg-gray-50/50 dark:bg-neutral-900/40 backdrop-blur-2xl border border-gray-100/50 dark:border-white/5">
                    {[
                        { label: "Active Clients", value: "150+", icon: Globe },
                        { label: "Successful Projects", value: "1.2k+", icon: Layers },
                        { label: "System Uptime", value: "99.9%", icon: ShieldCheck },
                        { label: "Efficiency Boost", value: "40%", icon: Zap },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center justify-center p-4 text-center group">
                            <stat.icon className="w-8 h-8 text-teal-500 mb-3 group-hover:scale-125 transition-transform" />
                            <span className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">{stat.value}</span>
                            <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-bold mt-1">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Expertise Section */}
            <section className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 mb-32 z-10 relative">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter">
                        Core <span className="text-teal-600">Expertise</span>
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
                        Our solutions are built on three foundational pillars of excellence.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <HoverEffect items={categories} />
                </div>
            </section>

            {/* Showcase Section */}
            <section className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 mb-32 relative z-10">
                <div className="relative rounded-[3rem] overflow-hidden bg-teal-50/30 dark:bg-slate-950 p-12 lg:p-20 shadow-2xl border border-teal-100/50 dark:border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-white dark:from-teal-900/20 dark:to-neutral-950 z-0" />
                    <div className="absolute top-0 right-0 w-full h-full bg-grid-black/[0.02] dark:bg-grid-white/[0.02] z-0" />

                    <div className="relative z-10 flex flex-col items-center text-center mb-20 space-y-4">
                        <div className="px-4 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold tracking-widest uppercase border border-teal-500/20">
                            Innovation Hub
                        </div>
                        <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
                            Featured <span className="text-teal-500">Products</span>
                        </h2>
                        <p className="text-lg text-gray-500 dark:text-neutral-400 max-w-2xl">
                            Proprietary tools engineered to handle the world's most demanding business workflows.
                        </p>
                    </div>

                    <div className="relative z-10">
                        {/* Desktop View */}
                        <div className="hidden lg:block overflow-hidden rounded-3xl border border-teal-100 dark:border-white/10 shadow-3xl bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl">
                            <ProductPreview />
                        </div>

                        {/* Mobile/Tablet View */}
                        <div className="lg:hidden pointer-events-auto">
                            <SolutionSmallerScreen />
                        </div>
                    </div>

                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-500/10 rounded-full blur-[100px]" />
                </div>
            </section>


            {/* Why Us / Benefits Section */}
            <section className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 mb-32 z-10 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
                            Solving the <br />
                            <span className="text-teal-600">Impossible</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            We don't just provide software; we provide the architectural foundation for your digital transformation. Our systems grow as you grow.
                        </p>

                        <div className="space-y-4 pt-4">
                            {[
                                { title: "Rapid Deployment", desc: "Get up and running in weeks, not months.", icon: Zap },
                                { title: "Deep Integration", desc: "Seamlessly connect with your existing tech ecosystem.", icon: Layers },
                                { title: "Uncompromising Security", desc: "Enterprise-grade protection for your sensitive data.", icon: ShieldCheck },
                            ].map((benefit, i) => (
                                <div key={i} className="flex gap-4 items-start p-4 rounded-2xl hover:bg-teal-50/50 dark:hover:bg-neutral-900/50 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center flex-shrink-0">
                                        <benefit.icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">{benefit.title}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-x-0 -top-40 -bottom-40 bg-teal-500/5 blur-3xl rounded-full" />
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <Image src="/edu.png" width={300} height={400} className="rounded-2xl shadow-xl w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" alt="Solution visualization" />
                                <Image src="/eng.png" width={300} height={300} className="rounded-2xl shadow-xl w-full h-auto" alt="Solution visualization" />
                            </div>
                            <div className="space-y-4 mt-8">
                                <Image src="/Delta iERP.png" width={300} height={300} className="rounded-2xl shadow-xl w-full h-auto" alt="Solution visualization" />
                                <div className="aspect-square rounded-2xl bg-teal-600 flex flex-col items-center justify-center p-6 text-white text-center shadow-xl">
                                    <Factory className="w-12 h-12 mb-4" />
                                    <p className="font-black text-2xl tracking-tighter leading-tight">BUILT FOR INDUSTRY</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default SolutionsPage
