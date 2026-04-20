"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const partners = [
    {
        name: "Odoo",
        logo: "/odoo.png",
        link: "/Partner/odoo",
    },
    {
        name: "Zoho",
        logo: "/zoho.png",
        link: "/Partner/Zoho",
    },
    {
        name: "DoubleTick",
        logo: "/doubleTick.png",
        link: "/Partner/doubleTick",
    },
    {
        name: "ClearTax",
        logo: "/clearTax.png",
        link: "/Partner/clearTax",
    },
];

export function Partners() {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden bg-white dark:bg-neutral-950">
            {/* Soft Background Accents */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/5 blur-[100px] -translate-y-1/2 -ml-20 rounded-full" />
                <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] -translate-y-1/2 -mr-20 rounded-full" />
            </div>

            <div className="max-w-[1700px] mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800 text-teal-700 dark:text-teal-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-6"
                    >
                        Strategic Alliances
                    </motion.div>
                    
                    <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-[0.9] mb-8">
                        Our Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Partners</span>
                    </h2>
                    
                    <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl font-medium leading-relaxed">
                        We collaborate with the world’s most innovative technology leaders to build a seamless ecosystem of solutions tailored to your unique scaling needs.
                    </p>
                </div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
                >
                    {partners.map((partner) => (
                        <motion.div
                            key={partner.name}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } }
                            }}
                        >
                            <Link
                                href={partner.link}
                                className="group relative flex items-center justify-center p-10 md:p-14 bg-white dark:bg-neutral-900/50 rounded-[3rem] border border-gray-100 dark:border-neutral-800 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_80px_-20px_rgba(20,184,166,0.15)] hover:-translate-y-2 transition-all duration-700"
                            >
                                {/* Inner Card Accent */}
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 to-transparent dark:from-teal-500/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]" />
                                
                                <div className="relative z-10 w-full flex justify-center grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100">
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        width={400}
                                        height={200}
                                        className="object-contain max-h-24 w-auto drop-shadow-sm"
                                    />
                                </div>

                                {/* Interactive Indicator */}
                                <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 group-hover:bottom-8 transition-all duration-700 text-teal-600 dark:text-teal-400 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">
                                    View Partnership
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
