"use client"
import React from "react"
import { motion } from "framer-motion"
import { FileText, Gavel, Scale, ShieldAlert } from "lucide-react"

export default function TermsOfService() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="min-h-screen bg-white dark:bg-black selection:bg-teal-500 selection:text-white pb-24">
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-4 md:px-6 lg:px-8 max-w-[1800px] mx-auto text-center overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-teal-500/5 blur-[120px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 space-y-4"
                >
                    <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mb-4">
                        <Gavel className="w-8 h-8" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Terms of <span className="text-teal-600">Service</span>
                    </h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Effective date: {currentYear}. Please read these terms carefully before using our software and services.
                    </p>
                </motion.div>
            </section>

            {/* Content Section */}
            <main className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-[2.5rem] p-8 md:p-16 shadow-2xl space-y-12">

                    <section className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-xl">
                                01
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Introduction</h2>
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed md:pl-16">
                            Welcome to Delta Infosoft Pvt. Ltd. By accessing our website, located at www.deltainfosoft.com or any other products and services we provide, including ERP, CRM (the "Services"), you agree to these Terms and Conditions.
                        </p>
                    </section>

                    <section className="space-y-10">
                        <div className="flex items-center gap-4">
                            <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-xl">
                                02
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Core Principles</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:pl-16 text-left">
                            {[
                                {
                                    icon: <ShieldAlert className="w-6 h-6" />,
                                    title: "Acceptance of Terms",
                                    desc: "By using our Site or any of our Services, you represent that you are an authorized user and agree to these Terms."
                                },
                                {
                                    icon: <FileText className="w-6 h-6" />,
                                    title: "Ownership",
                                    desc: "All content on the Site, including text, graphics, logos, and software is owned by Delta Infosoft or its licensors."
                                },
                                {
                                    icon: <Scale className="w-6 h-6" />,
                                    title: "Limitation of Liability",
                                    desc: "Delta Infosoft and its suppliers shall have no liability for any indirect, incidental, or consequential damages."
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 hover:border-teal-500/50 transition-colors">
                                    <div className="text-teal-500 mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6 pt-12">
                        <div className="flex items-center gap-4">
                            <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-xl">
                                03
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Additional Restrictions</h2>
                        </div>
                        <div className="md:pl-16 space-y-4">
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                You should not interfere with or disrupt or cause harm to the Site, our servers, or our network. Hacking, cracking, or circumventing security is strictly prohibited.
                            </p>
                        </div>
                    </section>

                    <section className="pt-12 border-t border-gray-100 dark:border-gray-800">
                        <div className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20 border border-teal-100 dark:border-teal-900/30">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Governing Law</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                                These Terms and Conditions are governed by the Laws of India and your use of the Site or Services will be governed by the Courts of India.
                            </p>
                            <div className="pt-6 border-t border-teal-100 dark:border-teal-900/30">
                                <p className="text-sm font-medium text-teal-600 dark:text-teal-400 mb-2 uppercase tracking-wider">Contact Information</p>
                                <p className="text-gray-600 dark:text-gray-400">
                                    info@deltainfosoft.com | +91 84012 81010
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-600">
                © {currentYear} Delta Infosoft Pvt. Ltd. All Rights Reserved.
            </div>
        </div>
    )
}
