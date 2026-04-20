"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { 
  Code2, Database, Smartphone, Cloud, Shield, Lock, 
  Server, Zap, CheckCircle2, GitBranch, Container, 
  Workflow, Cpu, Network, Globe, Layers, Search, ShieldCheck,
  Wind, Boxes, Terminal 
} from "lucide-react";

export default function TechnologyPage() {
    const techStack = [
        {
            title: "Frontend Engineering",
            icon: Code2,
            items: [
                { name: "React.js", icon: <Zap /> },
                { name: "Next.js", icon: <Layers /> },
                { name: "TypeScript", icon: <Code2 /> },
                { name: "Tailwind", icon: <Wind /> },
                { name: "Redux", icon: <Boxes /> },
                { name: "HTML5/CSS3", icon: <Globe /> }
            ],
            description: "Sculpting immersive, lightning-fast interfaces that redefine digital engagement.",
            gradient: "from-teal-500/20 to-emerald-500/20"
        },
        {
            title: "Backend Architecture",
            icon: Server,
            items: [
                { name: "Node.js", icon: <Cpu /> },
                { name: "NET Core", icon: <Terminal /> },
                { name: "Python", icon: <Database /> },
                { name: "Laravel", icon: <Server /> },
                { name: "Django", icon: <GitBranch /> },
                { name: "Express", icon: <Zap /> }
            ],
            description: "Robust, secure, and infinitely scalable server-side systems for industrial workloads.",
            gradient: "from-blue-500/20 to-indigo-500/20"
        },
        {
            title: "Mobile Ecosystems",
            icon: Smartphone,
            items: [
                { name: "React Native", icon: <Smartphone /> },
                { name: "Flutter", icon: <Zap /> },
                { name: "PWA", icon: <Globe /> },
                { name: "iOS/Android", icon: <Layers /> },
                { name: "Ionic", icon: <Cpu /> }
            ],
            description: "Seamless native performance across every mobile platform with a unified codebase.",
            gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
            title: "Data Intelligence",
            icon: Database,
            items: [
                { name: "PostgreSQL", icon: <Database /> },
                { name: "MongoDB", icon: <Layers /> },
                { name: "Redis", icon: <Zap /> },
                { name: "MySQL", icon: <Database /> },
                { name: "Firebase", icon: <Cloud /> },
                { name: "Oracle", icon: <Shield /> }
            ],
            description: "Reliable data persistence and high-speed architectures for mission-critical info.",
            gradient: "from-orange-500/20 to-red-500/20"
        }
    ];

    const cloudServices = [
        { name: "AWS Cloud", icon: Cloud },
        { name: "Microsoft Azure", icon: Network },
        { name: "Google Cloud Platform", icon: Globe },
        { name: "Docker & Kubernetes", icon: Container },
        { name: "CI/CD Pipelines", icon: GitBranch },
        { name: "GitHub Actions", icon: Workflow },
        { name: "Security Audits", icon: Shield },
        { name: "Performance Ops", icon: Zap }
    ];

    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950 text-gray-900 dark:text-white overflow-visible font-sans">
            {/* Cinematic Hero Section */}
            <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="w-full absolute inset-0 z-0">
                    <SparklesCore
                        id="tech-sparkles-premium"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={120}
                        className="w-full h-full"
                        particleColor="#14b8a6"
                    />
                </div>
                
                {/* Radial Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
                   <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/10 blur-[150px] rounded-full" />
                   <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/10 blur-[150px] rounded-full" />
                </div>

                <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-12 py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 dark:bg-neutral-900 border border-teal-100 dark:border-neutral-800 mb-8"
                    >
                        <Cpu size={14} className="text-teal-600 dark:text-teal-400" />
                        <span className="text-teal-700 dark:text-teal-400 font-black uppercase tracking-[0.2em] text-[10px]">Engineering The Future</span>
                    </motion.div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-12 leading-[1.05]"
                    >
                        Mastering the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-500 to-blue-500">Digital Stack</span>
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium"
                    >
                        We don't just use tools; we engineer ecosystems. Delta Infosoft integrates the world's most stable and performant technologies to deliver enterprise-grade software that scales with your ambition.
                    </motion.p>
                </div>
            </section>

            {/* Core Tech Stack - Bento Inspired Grid */}
            <section className="w-full py-20 md:py-40 relative">
                <div className="max-w-[1700px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col items-center text-center mb-24">
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none mb-8">
                           Technological <span className="text-teal-500">Foundations</span>
                        </h2>
                        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl font-medium leading-relaxed">
                            Our primary development stack is curated for maximum efficiency, security, and long-term maintainability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
                        {techStack.map((tech, idx) => (
                            <motion.div
                                key={tech.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.8, ease: "circOut" }}
                                viewport={{ once: true }}
                                className="group relative p-12 md:p-16 rounded-[4rem] bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-100 dark:border-neutral-800 hover:border-teal-500/50 transition-all duration-700 overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                                
                                <div className="relative z-10">
                                    <div className="mb-12 w-20 h-20 rounded-3xl bg-white dark:bg-neutral-800 flex items-center justify-center p-5 group-hover:scale-110 transition-transform duration-700 shadow-xl border border-neutral-100 dark:border-neutral-700">
                                        <tech.icon className="w-10 h-10 text-teal-600 dark:text-teal-400" />
                                    </div>
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter leading-tight">
                                                {tech.title}
                                            </h3>
                                            <p className="text-xl text-gray-500 dark:text-neutral-300 font-medium leading-relaxed max-w-lg">
                                                {tech.description}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 pt-4">
                                            {tech.items.map((item) => (
                                                <div 
                                                    key={item.name} 
                                                    className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white dark:bg-black/40 border border-neutral-100 dark:border-neutral-800 shadow-sm group-hover:border-teal-500/30 transition-all duration-500"
                                                >
                                                    <div className="text-teal-600 dark:text-teal-400 [&_svg]:w-4 [&_svg]:h-4">
                                                        {item.icon}
                                                    </div>
                                                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                                                        {item.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Infrastructure & Ops - Clean Minimal Grid */}
            <section className="w-full py-20 md:py-40 bg-neutral-50 dark:bg-neutral-900/20">
                <div className="max-w-[1700px] mx-auto px-6 md:px-12">
                   <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-32">
                        <div className="flex-1">
                            <h2 className="text-5xl md:text-8xl font-black text-gray-900 dark:text-white tracking-tighter leading-none mb-8">
                                Scalable <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 whitespace-nowrap">Cloud Infrastructure</span>
                            </h2>
                            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl font-medium leading-relaxed">
                                Our DevOps philosophy ensures high availability and rapid deployment cycles across major hyperscalers.
                            </p>
                        </div>
                   </div>

                   <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
                       {cloudServices.map((service, idx) => {
                           const Icon = service.icon;
                           return (
                               <motion.div
                                   key={service.name}
                                   initial={{ opacity: 0, scale: 0.9 }}
                                   whileInView={{ opacity: 1, scale: 1 }}
                                   transition={{ delay: idx * 0.05, duration: 0.5 }}
                                   viewport={{ once: true }}
                                   className="group p-8 md:p-12 bg-white dark:bg-neutral-900 rounded-[3rem] border border-neutral-100 dark:border-neutral-800 hover:border-teal-500/50 hover:shadow-[0_40px_100px_-20px_rgba(20,184,166,0.1)] transition-all duration-700 text-center"
                               >
                                   <div className="w-16 h-16 bg-neutral-50 dark:bg-neutral-950 rounded-2xl flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white duration-500 border border-neutral-100 dark:border-neutral-800">
                                       <Icon className="w-8 h-8" />
                                   </div>
                                   <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tight leading-none group-hover:text-teal-500 transition-colors">
                                       {service.name}
                                   </h3>
                               </motion.div>
                           )
                       })}
                   </div>
                </div>
            </section>

            {/* Development Methodology - Horizontal Timeline */}
            <section className="w-full py-20 md:py-40">
                <div className="max-w-[1700px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-32">
                        <h2 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white tracking-tighter leading-none mb-10">
                            The <span className="text-teal-500">Agile Workflow</span>
                        </h2>
                        <div className="w-24 h-2 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
                        {[
                            { 
                                step: "01", 
                                icon: <Search className="w-10 h-10" />,
                                title: "Strategic Analysis", 
                                desc: "We deep-dive into your operational DNA to architect the perfect technical roadmap." 
                            },
                            { 
                                step: "02", 
                                icon: <Cpu className="w-10 h-10" />,
                                title: "Precision Engineering", 
                                desc: "Agile sprints centered around modular design and high-performance clean coding." 
                            },
                            { 
                                step: "03", 
                                icon: <ShieldCheck className="w-10 h-10" />,
                                title: "Continuous Evolution", 
                                desc: "Deployment is just the start. We monitor, optimize, and scale your product perpetually." 
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="relative group p-10 rounded-[3rem] hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-all duration-700"
                            >
                                <div className="text-8xl font-black text-neutral-100 dark:text-white/15 absolute -top-16 -left-4 z-0 group-hover:text-teal-500/20 transition-colors duration-700">
                                    {item.step}
                                </div>
                                <div className="relative z-10">
                                    <div className="mb-8 w-20 h-20 bg-teal-500 text-white rounded-3xl flex items-center justify-center p-5 group-hover:scale-110 transition-transform shadow-lg shadow-teal-500/20">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
                                        {item.title}
                                    </h3>
                                    <p className="text-xl text-gray-500 dark:text-neutral-300 font-medium leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
