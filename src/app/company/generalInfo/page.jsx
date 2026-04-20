"use client"
import React from "react"
import { motion } from "framer-motion"
import { Cookie, Info, Settings, MousePointerClick } from "lucide-react"

export default function CookiePolicy() {
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
                        <Cookie className="w-8 h-8" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Cookie <span className="text-teal-600">Policy</span>
                    </h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Last updated: {currentYear}. Learn how we use cookies to provide you with the best experience on our platform.
                    </p>
                </motion.div>
            </section>

            {/* Content Section */}
            <main className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-[2.5rem] p-8 md:p-16 shadow-2xl space-y-16">

                    <section className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-xl">
                                01
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What are Cookies?</h2>
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed md:pl-16">
                            Cookies are small text files that are stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience. At Delta Infosoft, we use cookies to understand how you interact with our services and to enhance site performance.
                        </p>
                    </section>

                    <section className="space-y-10">
                        <div className="flex items-center gap-4">
                            <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-xl">
                                02
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Types of Cookies We Use</h2>
                        </div>

                        <div className="md:pl-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: <Info className="w-6 h-6" />,
                                    title: "Essential Cookies",
                                    desc: "Crucial for basic site functionality. Without these, our ERP and CRM tools wouldn't work correctly."
                                },
                                {
                                    icon: <Settings className="w-6 h-6" />,
                                    title: "Preference Cookies",
                                    desc: "Used to remember your settings, such as language preferences or login details."
                                },
                                {
                                    icon: <MousePointerClick className="w-6 h-6" />,
                                    title: "Analytics Cookies",
                                    desc: "Help us understand how users interact with our site, so we can build better products."
                                },
                                {
                                    icon: <Cookie className="w-6 h-6" />,
                                    title: "Marketing Cookies",
                                    desc: "Track visitors across websites to deliver relevant advertisements and measure campaign success."
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700 hover:border-teal-500/50 transition-all">
                                    <div className="text-teal-500 mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-xl">
                                03
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Managing Your Preferences</h2>
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed md:pl-16">
                            Most browsers allow you to control cookies through their settings. You can block or delete cookies, but doing so may affect your ability to use certain features on our site. To learn more about managing cookies, visit your browser's help section.
                        </p>
                    </section>

                    <section className="pt-12 border-t border-gray-100 dark:border-gray-800">
                        <div className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20 border border-teal-100 dark:border-teal-900/30">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Need more info?</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                                If you have specific questions about our use of cookies, please don't hesitate to reach out to our technical team.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="mailto:info@deltainfosoft.com" className="px-8 py-3 bg-teal-600 text-white font-bold rounded-2xl hover:bg-teal-700 transition-colors">
                                    Email Support
                                </a>
                                <div className="flex items-center gap-2 px-6 py-3 text-gray-600 dark:text-gray-400 font-medium">
                                    <span>or call us at +91 84012 81010</span>
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
