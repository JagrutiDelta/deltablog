"use client"
import Image from "next/image"
import FeatureIMage from "../../../public/VisionIMage.png"
import { CircleCheckIcon, Quote, Sparkles, TrendingUp, ShieldCheck } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Visiongrid() {
  const containerRef = useRef(null)
  
  return (
    <section ref={containerRef} className="relative bg-white dark:bg-neutral-950 overflow-visible">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-0 w-[500px] h-[500px] bg-teal-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1700px] mx-auto px-6 md:px-12 relative z-10 py-32 md:py-60">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start relative">
          
          {/* Left Side: Sticky Image Column */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-40 h-fit">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[4rem] overflow-hidden border-[1px] border-neutral-100 dark:border-neutral-800 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.15)] group"
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                <Image
                  alt="Sandip Mevada - Founder Vision"
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  src={FeatureIMage}
                  width={1000}
                  height={1333}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-12 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                   <div className="flex flex-col gap-2">
                     <p className="text-teal-400 font-black uppercase tracking-[0.4em] text-[10px]">Leader & Visionary</p>
                     <h3 className="text-white text-5xl md:text-6xl font-black tracking-tighter">Sandip Mevada</h3>
                     <p className="text-neutral-400 font-medium">Founder, Delta Infosoft Pvt Ltd</p>
                   </div>
                </div>
              </div>
            </motion.div>
            
            {/* Visual glow on the corner */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/10 blur-[60px] rounded-full pointer-events-none" />
          </div>

          {/* Right Side: Narrative Column (Long Scroll) */}
          <div className="w-full lg:w-1/2 flex flex-col pt-10">
            {/* Mission Statement */}
            <div className="mb-40">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-teal-50 dark:bg-neutral-900 border border-teal-100 dark:border-teal-800 mb-10"
              >
                <Sparkles className="w-4 h-4 text-teal-600 animate-pulse" />
                <span className="text-teal-700 dark:text-teal-400 font-black uppercase tracking-widest text-[10px]">Our Corporate Mission</span>
              </motion.div>
              
              <h2 className="text-6xl md:text-8xl font-black text-neutral-900 dark:text-white tracking-tighter leading-[0.85] mb-12">
                Accelerating <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-500 to-blue-500">Business Potential</span>
              </h2>
              <p className="text-2xl text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed">
                 We bridge the gap between complex industrial processes and digital simplicity. Our goal is to transform every MSME into a data-driven powerhouse through intelligent automation.
              </p>
            </div>

            {/* Feature Blocks (Added More to Extend Scroll) */}
            <div className="space-y-40 mb-40">
              {[
                { 
                  icon: <TrendingUp className="w-10 h-10" />,
                  title: "Exponential Scale", 
                  desc: "We build systems that don't just solve today's bottlenecks but architect for tomorrow's expansion. Our ERP frameworks are designed to scale linearly as your headcount and operations grow." 
                },
                { 
                  icon: <ShieldCheck className="w-10 h-10" />,
                  title: "The Integrity Core", 
                  desc: "Digital transformation is built on trust. We ensure 100% data transparency and security, creating a 'Single Source of Truth' for your entire management hierarchy." 
                },
                { 
                  icon: <Quote className="w-10 h-10" />,
                  title: "Operational Clarity", 
                  desc: "By eliminating manual data silos, we provide CEOs and MDs with real-time dashboards that turn complex spreadsheets into clear, actionable business intelligence." 
                },
                { 
                  icon: <Sparkles className="w-10 h-10" />,
                  title: "Continuous Innovation", 
                  desc: "Our commitment to R&D means your business always stays ahead of the technical curve. From AI-driven reporting to IoT integration, we keep you future-ready." 
                }
              ].map((val, idx) => (
                <motion.div 
                  key={val.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-50px" }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col gap-8 group/item"
                >
                  <div className="w-24 h-24 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover/item:border-teal-500/50 transition-all duration-500 shadow-sm">
                    {val.icon}
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-5xl font-black text-neutral-900 dark:text-white tracking-tighter">{val.title}</h3>
                    <p className="text-2xl text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* High-End Closure Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-16 md:p-20 rounded-[4rem] bg-neutral-950 text-white overflow-hidden shadow-2xl border border-white/5"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 blur-[120px] rounded-full -mr-40 -mt-40" />
              <Quote className="w-16 h-16 text-teal-500 mb-12 opacity-50" />
              <h4 className="text-4xl md:text-5xl font-bold italic leading-tight tracking-tight mb-16 relative z-10">
                “ Our vision is simple: to make Indian manufacturing <span className="text-teal-400">globally competitive</span> through pure technical excellence. ”
              </h4>
              <div className="flex items-center gap-6 relative z-10">
                 <div className="w-16 h-[2px] bg-teal-500 rounded-full" />
                 <p className="font-black uppercase tracking-[0.3em] text-xs">Managing Director's Statement</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
