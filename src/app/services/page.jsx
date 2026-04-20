"use client"
import React from 'react'
import { motion } from "framer-motion"
import { SparklesCore } from "@/components/ui/sparkles"
import service from "../../../public/Group 22303service.png"
import strategy from "../../../public/strategystrategy.png"
import braning from "../../../public/marketingmarketing.png"
import dev from "../../../public/developmentdev.png"
import webd from "../../../public/designdesign.png"
import media from "../../../public/socialmedia.png"
import ECOM from "../../../public/ecommerceecom.png"
import Image from 'next/image'
import { Rocket, ShieldCheck, Zap, Layers, Globe, Cpu, Boxes, ArrowRight, MousePointer2 } from "lucide-react"

const ServicesPage = () => {
    const services = [
        {
            title: "Strategic Consulting",
            description: "Scalable, integrated roadmaps designed to enhance operational efficiency and long-term business value.",
            icon: <Layers />,
            image: strategy.src,
            gradient: "from-teal-500/20 to-emerald-500/20"
        },
        {
            title: "Identity Branding",
            description: "Creating a unique digital footprint through consistent visual elements and high-authority messaging.",
            icon: <Globe />,
            image: braning.src,
            gradient: "from-blue-500/20 to-indigo-500/20"
        },
        {
            title: "Industrial Development",
            description: "Systematic growth hacking through planning, innovation, and implementation of high-performance logic.",
            icon: <Cpu />,
            image: dev.src,
            gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
            title: "UI / UX Engineering",
            description: "Artfully crafted, user-centric interfaces that provide optimal experiences across the entire device spectrum.",
            icon: <MousePointer2 />,
            image: webd.src,
            gradient: "from-orange-500/20 to-red-500/20"
        },
        {
            title: "Social Ecosystems",
            icon: <Zap />,
            description: "Dynamic communication platforms built for high engagement and rapid community growth.",
            image: media.src,
            gradient: "from-emerald-500/20 to-teal-500/20"
        },
        {
            title: "Omnichannel Commerce",
            icon: <Boxes />,
            description: "Seamless online transactions and convenient inventory management for global business scale.",
            image: ECOM.src,
            gradient: "from-blue-600/20 to-cyan-500/20"
        }
    ];

    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950 text-gray-900 dark:text-white overflow-visible selection:bg-teal-500/30">
            {/* Cinematic Hero */}
            <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="w-full absolute inset-0 z-0">
                    <SparklesCore
                        id="services-sparkles-premium"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#14b8a6"
                    />
                </div>
                
                {/* Radial Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
                   <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/5 blur-[150px] rounded-full" />
                   <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full" />
                </div>

                <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-12 py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 dark:bg-neutral-900 border border-teal-100 dark:border-neutral-800 mb-8"
                    >
                        <Rocket size={14} className="text-teal-600 dark:text-teal-400" />
                        <span className="text-teal-700 dark:text-teal-400 font-black uppercase tracking-[0.2em] text-[10px]">What We Power</span>
                    </motion.div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-12 leading-[1.05]"
                    >
                        Solutions That Drive <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-500 to-blue-500">Exponential Growth</span>
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium mb-16"
                    >
                        Delta Infosoft engineers custom software ecosystems that simplify complexity, automate bottlenecks, and unlock new levels of business profitability.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="relative max-w-4xl mx-auto rounded-[3.5rem] overflow-hidden border border-neutral-100 dark:border-neutral-800 p-2 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl group"
                    >
                        <Image
                            src={service}
                            alt="Services"
                            className="w-full h-auto rounded-[3rem] transition-transform duration-700 group-hover:scale-105"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="w-full py-20 md:py-40 relative">
                <div className="max-w-[1700px] mx-auto px-6 md:px-12">
                   <div className="flex flex-col items-center text-center mb-32">
                        <h2 className="text-5xl md:text-8xl font-black text-gray-900 dark:text-white tracking-tighter leading-none mb-10">
                            Our Service <span className="text-teal-500">Ecosystem</span>
                        </h2>
                        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl font-medium leading-relaxed">
                            A comprehensive collection of high-performance pillars designed to automate your entire operation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.8, ease: "circOut" }}
                                viewport={{ once: true }}
                                className="group relative p-12 rounded-[3.5rem] bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-100 dark:border-neutral-800 hover:border-teal-500/50 transition-all duration-700 overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                                
                                <div className="relative z-10">
                                    <div className="mb-10 w-20 h-20 rounded-3xl bg-white dark:bg-neutral-800 flex items-center justify-center p-5 group-hover:scale-110 transition-transform duration-700 shadow-xl border border-neutral-100 dark:border-neutral-700 text-teal-600 dark:text-teal-400">
                                        {React.cloneElement(item.icon, { size: 40 })}
                                    </div>
                                    <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xl text-gray-500 dark:text-neutral-300 font-medium leading-relaxed mb-10">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-teal-600 dark:text-teal-400 group-hover:gap-5 transition-all">
                                        Analyze Service
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Operational Approach */}
            <section className="w-full py-20 md:py-40 bg-neutral-50 dark:bg-neutral-900/40">
                <div className="max-w-[1700px] mx-auto px-6 md:px-12">
                   <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2">
                            <h2 className="text-5xl md:text-8xl font-black text-gray-900 dark:text-white tracking-tighter leading-[0.8] mb-12">
                                Our <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">Methodology</span>
                            </h2>
                            <div className="space-y-12">
                                {[
                                    { title: "Client-Centric Design", icon: <Globe />, desc: "We architect solutions around your unique operational DNA and business goals." },
                                    { title: "Agile Development", icon: <Zap />, desc: "High-velocity sprints ensure transparency and rapid feature evolution." },
                                    { title: "Continuous Support", icon: <ShieldCheck />, desc: "Post-deployment monitoring and scaling ensure long-term platform stability." }
                                ].map((item, idx) => (
                                    <motion.div 
                                        key={item.title}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group flex items-start gap-8"
                                    >
                                        <div className="flex-shrink-0 w-16 h-16 rounded-3xl bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-sm group-hover:bg-teal-500 group-hover:text-white transition-all duration-500">
                                            {React.cloneElement(item.icon, { size: 24 })}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                            <p className="text-xl text-gray-500 dark:text-neutral-300 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="absolute inset-0 bg-teal-500/10 blur-[120px] rounded-full animate-pulse" />
                            <div className="relative p-4 rounded-[4rem] border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
                                <div className="text-center">
                                    <Cpu size={120} className="mx-auto text-teal-500/20 mb-8 animate-pulse" />
                                    <p className="text-2xl font-black text-gray-900 dark:text-white tracking-widest uppercase">System Core Analysis</p>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </section>
        </main>
    )
}

export default ServicesPage