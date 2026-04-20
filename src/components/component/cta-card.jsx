"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Stars } from "lucide-react";

export default function CTACard() {
    return (
        <div className="w-full py-16 md:py-24 px-6">
            <div className="max-w-[1700px] mx-auto">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="relative bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-600 rounded-[3rem] p-10 md:p-14 lg:px-24 shadow-[0_40px_100px_-20px_rgba(20,184,166,0.25)] overflow-hidden border border-white/20"
                >
                    {/* High-End Background Accents */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full" />
                        <div className="absolute -bottom-1/2 -left-1/4 w-[400px] h-[400px] bg-teal-800/30 blur-[100px] rounded-full" />
                        <div className="absolute inset-0 opacity-[0.05]" 
                             style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-3xl">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-black uppercase tracking-[0.25em] text-[9px] shadow-sm"
                            >
                                <Zap size={12} className="fill-white" />
                                Next-Gen Automation
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight">
                                Ready to <span className="underline decoration-white/30 underline-offset-8">Automate</span> Your <br className="hidden md:block" />
                                Business Needs?
                            </h2>

                            <p className="text-lg md:text-xl text-teal-50 font-medium leading-relaxed max-w-2xl opacity-90">
                                Transform your operations from "Good" to <span className="font-black">"Exponential"</span>. Let's build the technical backbone that powers your growth.
                            </p>
                        </div>

                        <div className="flex flex-col items-center lg:items-end gap-6 sm:flex-row lg:flex-col shrink-0">
                            <Link href="/contactus" className="group">
                                <button className="relative px-10 py-5 bg-white text-teal-600 font-black text-lg rounded-2xl hover:bg-neutral-900 hover:text-white transition-all duration-500 flex items-center gap-3 shadow-[0_15px_40px_-5px_rgba(0,0,0,0.1)] active:scale-95 group-hover:-translate-y-2">
                                    Book a Free Demo
                                    <ArrowRight className="group-hover:translate-x-1.5 transition-transform duration-500" />
                                </button>
                            </Link>
                            
                            <div className="flex items-center gap-2 text-white/80 font-bold text-sm tracking-tight px-4 py-2 rounded-xl bg-black/5 dark:bg-white/5">
                                <Stars size={16} className="text-teal-200" />
                                <span>Expert Strategic Partner</span>
                            </div>
                        </div>
                    </div>

                    {/* Subtle Corner Detail */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white rounded-tr-3xl" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
