"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import RetroGrid from '@/components/magicui/retro-grid'
import { BarChart, Bell, Calendar, CalendarRangeIcon, Clock, Link as LinkIcon, Settings, UserCheck, Settings as SettingsIcon, ShieldCheck, Laptop, Smartphone, PlayCircle, Database } from "lucide-react"
import { motion } from "framer-motion"

import iDealer from "../../../../public/ProductLogo/iDealer.png"
import darkflow from "../../../../public/Flows/iDealerDark.png"
import light from "../../../../public/Flows/iDealerLight.png"

const page = () => {

    const words = `Delta's dealer module software is a comprehensive solution crafted to streamline and elevate dealership operations. This robust platform offers advanced features designed to optimize dealer management, enhancing efficiency and performance across your network.`;

    const features = [
        {
            title: "Online Scheduling",
            description: "Easily schedule appointments online, ensuring convenience for both customers and staff.",
            icon: <Calendar className="w-16 h-16 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "Appointment Management",
            description: "Efficiently manage appointments, including booking, rescheduling, and cancellations.",
            icon: <Clock className="w-16 h-16 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "Availability Management",
            description: "Monitor and update staff availability in real-time to optimize scheduling.",
            icon: <UserCheck className="w-16 h-16 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "Multiple Calendars",
            description: "Sync and manage multiple calendars seamlessly to avoid scheduling conflicts.",
            icon: <CalendarRangeIcon className="w-16 h-16 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "Reminders and Notifications",
            description: "Send automated reminders and notifications to reduce no-shows and keep everyone informed.",
            icon: <Bell className="w-16 h-16 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "Integration with Other Tools",
            description: "Integrate with other business tools and platforms for enhanced functionality and workflow.",
            icon: <LinkIcon className="w-16 h-16 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "Reporting and Analytics",
            description: "Access detailed reports and analytics to gain insights into appointment trends and staff performance.",
            icon: <BarChart className="w-16 h-16 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "Customization",
            description: "Customize the software to fit your business needs and branding, ensuring a tailored experience.",
            icon: <Settings className="w-16 h-16 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
        }
    ]

    const implementationMeasures = [
        {
            title: "Requirement Analysis",
            description: "Conduct a thorough analysis to understand your specific dealer network requirements and objectives.",
            icon: <SettingsIcon className="w-8 h-8 text-teal-500" />
        },
        {
            title: "Customization",
            description: "Tailor the software to align with your unique business processes and workflows for maximum efficiency.",
            icon: <Laptop className="w-8 h-8 text-teal-500" />
        },
        {
            title: "Training and Support",
            description: "Provide comprehensive training sessions and ongoing support to ensure a smooth transition and user adoption.",
            icon: <PlayCircle className="w-8 h-8 text-teal-500" />
        },
        {
            title: "Data Migration",
            description: "Safely migrate existing data to the new system to maintain continuity and accuracy in operations.",
            icon: <Database className="w-8 h-8 text-teal-500" />
        },
        {
            title: "Testing and Deployment",
            description: "Rigorously test the software before deployment to guarantee reliability and performance across your dealer network.",
            icon: <ShieldCheck className="w-8 h-8 text-teal-500" />
        }
    ]

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 overflow-x-hidden selection:bg-teal-500 selection:text-white font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto min-h-[90vh] flex items-center">
                <RetroGrid className="absolute inset-0 z-0 h-full w-full opacity-50 pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

                    {/* Text Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/30 text-sm font-medium text-teal-600 dark:text-teal-400 mb-4 shadow-sm backdrop-blur-sm"
                        >
                            Dealer Solution
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
                        >
                            Delta <span className="text-teal-500 relative inline-block">
                                iDealer
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-500 opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                    </span>
                        </motion.h1>

                        <div className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                            <TextGenerateEffect words={words} className="text-lg md:text-xl font-normal text-gray-600 dark:text-gray-300" />
                </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                            className="pt-4 flex gap-4"
                        >
                            <Link href="/contactus">
                                <button className="px-8 py-3 bg-teal-600 text-white font-medium rounded-full hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1 active:scale-95">
                                    Book Demo
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center lg:justify-end relative order-1 lg:order-2"
                    >
                        <div className="relative rounded-2xl p-4 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 dark:to-transparent backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl">
                        <Image
                            src={iDealer}
                                alt="iDealer Application"
                                width={600}
                                height={600}
                                className="w-full h-auto max-h-[600px] rounded-xl shadow-2xl skew-y-2 transform transition-all duration-700 hover:skew-y-0 hover:scale-[1.02] hover:shadow-teal-500/20"
                                priority
                            />
                            {/* Floating Elements for Decoration */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse mix-blend-multiply" />
                    </div>
                    </motion.div>
                    </div>
                </section>

            {/* Features Section */}
            <section className="py-20 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Powerful Features of <span className="text-teal-500">iDealer</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Comprehensive modules designed to optimize every aspect of your dealership management process with precision and ease.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {features.map((feature, idx) => (
                        <motion.div key={idx} variants={fadeInUp} className="group relative h-full">
                            <div className="bg-white dark:bg-neutral-900 h-full rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-lg hover:shadow-2xl transition-all duration-300 ease-out flex flex-col overflow-hidden relative z-10 hover:-translate-y-2">
                                {/* Gradient Hover Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent dark:from-teal-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                <div className="p-8 flex flex-col items-center flex-grow relative z-10 transition-all duration-300 group-hover:pb-2">
                                    <div className="mb-6 p-4 bg-gray-50 dark:bg-neutral-800 rounded-2xl group-hover:bg-white dark:group-hover:bg-neutral-700 transition-colors shadow-inner">
                                        {feature.icon}
                                </div>
                                    <h3 className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                        {feature.title}
                                    </h3>
                                </div>
                                <div className="px-8 pb-8 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[200px] transition-all duration-500 ease-in-out relative z-10 transform translate-y-4 group-hover:translate-y-0">
                                    <div className="w-10 h-1 bg-teal-500 rounded-full mx-auto mb-4" />
                                    <p className="text-center text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                                </div>
                        </motion.div>
                    ))}
                </motion.div>
                    </section>

            {/* Implementation Measures Section */}
            <section className="py-24 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
                <div className="relative bg-gray-50 dark:bg-neutral-900/50 rounded-[3rem] p-8 md:p-16 border border-gray-100 dark:border-neutral-800 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                        <Calendar className="w-96 h-96" />
            </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16 relative z-10"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Implementation <span className="text-teal-500">Measures</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            A seamless journey from setup to daily use, designed for maximum efficiency.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
                    >
                        {implementationMeasures.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:border-teal-500/30 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {item.icon}
                        </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Product Flow Section */}
            <section className="py-20 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto mb-20">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Product <span className="text-teal-500">Flow</span>
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center items-center"
                >
                    <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-neutral-900 p-2 md:p-4 border border-gray-200 dark:border-neutral-800 group">
                        <div className="absolute inset-0 bg-teal-500/5 group-hover:bg-teal-500/0 transition-colors" />
                        <div className="dark:hidden">
                            <Image src={light} alt="Product Flow Light" className="rounded-2xl w-full h-auto transform transition-transform duration-700 hover:scale-[1.01]" width={1300} />
                </div>
                        <div className="hidden dark:block">
                            <Image src={darkflow} alt="Product Flow Dark" className="rounded-2xl w-full h-auto transform transition-transform duration-700 hover:scale-[1.01]" width={1300} />
                    </div>
                </div>
                </motion.div>
            </section>
            </div>
    )
}

export default page
