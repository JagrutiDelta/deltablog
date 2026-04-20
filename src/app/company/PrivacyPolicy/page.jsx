"use client"
import React from "react"
import { motion } from "framer-motion"
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react"

export default function PrivacyPolicy() {
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
                        <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Privacy <span className="text-teal-500">Policy</span>
                    </h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Last updated: {currentYear}. Your privacy is our priority. This policy outlines how we handle your data with transparency and care.
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
                            Welcome to Delta Infosoft Pvt. Ltd. (hereinafter referred to as "Delta Infosoft," "we," "our," or "us"). Delta Infosoft values your privacy and confidentiality and is committed to ensuring that your personal data is protected. The purpose of this Privacy Policy is to describe how we collect, use, disclose, and protect your information when you access or use www.delta-infosoft.com (the website) or use one of our products and services, including ERP and CRM solutions (the "Services").
                        </p>
                    </section>

                    <section className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-xl">
                                02
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Information We Collect</h2>
                        </div>
                        <div className="md:pl-16 space-y-6">
                            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Personal Information</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    We may collect personal information that you provide to us explicitly, for example, any information that you enter such as your name, email address, phone number, and any other information you wish to provide when you register for an account, request information from us, or otherwise communicate with us.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Usage Data</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    We automatically collect information regarding your interaction with our website or Services. This information may include your IP address, browser type, operating system, pages visited, and various usage statistics to improve your experience.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-xl">
                                03
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How We Use Your Information</h2>
                        </div>
                        <ul className="md:pl-16 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: "Service Delivery", desc: "To provide and enhance our ERP and CRM solutions." },
                                { title: "Communication", desc: "Keeping you updated on products and improvements." },
                                { title: "Usage Analysis", desc: "Understanding how our tools help your business grow." },
                                { title: "Security", desc: "Ensuring your data remains safe and protected from threats." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 p-5 rounded-2xl border border-gray-50 dark:border-gray-800">
                                    <div className="w-1.5 h-auto bg-teal-500 rounded-full" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-xl">
                                04
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Data Security</h2>
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed md:pl-16">
                            We take reasonable administrative, technical, and physical measures to help protect your information from unauthorized access, disclosure, and use. While we strive for 100% security, please note that no data transmission over the Internet is completely immune to risks.
                        </p>
                    </section>

                    <section className="pt-8 border-t border-gray-100 dark:border-gray-800">
                        <div className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-950/20 dark:to-blue-950/20 border border-teal-100 dark:border-teal-900/30">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                        <Mail className="w-5 h-5 text-teal-500" />
                                        <span>info@deltainfosoft.com</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                        <Phone className="w-5 h-5 text-teal-500" />
                                        <span>+91 84012 81010</span>
                                    </div>
                                </div>
                                <div className="flex gap-3 text-gray-600 dark:text-gray-400">
                                    <MapPin className="w-5 h-5 text-teal-500 shrink-0" />
                                    <address className="not-italic">
                                        Delta Infosoft Pvt. Ltd.<br />
                                        A-701, Safal Profitaire, Corporate Road,<br />
                                        Satellite, Ahmedabad, Gujarat - 380015
                                    </address>
                                </div>
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

