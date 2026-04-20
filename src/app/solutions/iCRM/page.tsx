"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import RetroGrid from '@/components/magicui/retro-grid'
import { CheckIcon, BarChart, HelpCircle, Send, Settings, Users, Target, TrendingUp, Repeat, PieChart, PenIcon, Box, ShoppingCart, BarChart3, Factory, ClipboardCheck, Truck, Wallet, Megaphone, Wrench, Store, Calendar, FileClock, Smile, TrendingUp as TrendingUpIcon, Share2, Database, Zap, MousePointerClick } from 'lucide-react'
import { motion } from "framer-motion"

import splashLogo from "../../../../public/CrmLogo.png"
import list from "../../../../public/CRM.png"
import darkflow from "../../../../public/Flows/iCRMDark.png"
import light from "../../../../public/Flows/iCRMLIght.png"

// Import duplication for completeness or placeholder to avoid massive imports
import dnd from "../../../../public/EngineeringSolutiton/Engineering/1 d and d.png"
// ... mapping other images is risky without knowing if they duplicate. I will use icons for the extra modules to be safe and clean, or reuse if possible. 
// Actually since I am rewriting, I can just use Lucide icons for the bottom modules to keep the file cleaner and faster.

const page = () => {

    const words = "Integrated Customer Relationship Management.";

    const keyFeatures = [
        {
            title: "Sales Management",
            description: "Streamline your sales processes, track leads, and manage opportunities for improved conversion rates.",
            icon: <BarChart className="w-16 h-16 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "Customer Support",
            description: "Enhance customer service with efficient ticketing systems, support tracking, and timely issue resolution.",
            icon: <HelpCircle className="w-16 h-16 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "Marketing Automation",
            description: "Optimize your marketing campaigns with targeted email marketing, segmentation, and personalized communication.",
            icon: <Send className="w-16 h-16 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "Contact Management",
            description: "Maintain a comprehensive database of customer information for personalized interactions and better relationship building.",
            icon: <Settings className="w-16 h-16 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "Lead Management",
            description: "Track and nurture leads throughout the sales funnel to maximize conversion potential.",
            icon: <Users className="w-16 h-16 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "Sales Forecasting",
            description: "Use predictive analytics to forecast sales trends and make informed strategic decisions.",
            icon: <Target className="w-16 h-16 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "Workflow Automation",
            description: "Automate routine tasks and workflows to improve efficiency and reduce manual errors.",
            icon: <TrendingUp className="w-16 h-16 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "Integration Capabilities",
            description: "Seamlessly integrate with other business systems and applications for a unified data ecosystem.",
            icon: <Repeat className="w-16 h-16 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
        }
    ];

    const benefits = [
        {
            title: "Improved CX",
            description: "Deliver superior customer experiences through organized data and timely responses.",
            icon: <Smile className="w-8 h-8 text-teal-500" />
        },
        {
            title: "Increased Sales",
            description: "Boost your sales figures with better lead tracking and conversion tools.",
            icon: <TrendingUpIcon className="w-8 h-8 text-teal-500" />
        },
        {
            title: "Better Data Mgmt",
            description: "Centralize your customer data for easy access and security.",
            icon: <Database className="w-8 h-8 text-teal-500" />
        },
        {
            title: "Enhanced Collaboration",
            description: "Share data seamlessly across teams to ensure everyone is on the same page.",
            icon: <Share2 className="w-8 h-8 text-teal-500" />
        },
        {
            title: "Increased Efficiency",
            description: "Automate manual tasks and free up time for strategic activities.",
            icon: <Zap className="w-8 h-8 text-teal-500" />
        },
        {
            title: "Better Decisions",
            description: "Make informed business decisions backed by real-time analytics.",
            icon: <MousePointerClick className="w-8 h-8 text-teal-500" />
        }
    ];

    // Modules for the iERP integrated section - using Icons for simplicity and consistency
    const ierpModules = [
        { title: "Design & Development", icon: <PenIcon className="w-10 h-10" />, features: ["Product Master", "BOM", "Drawing Request"] },
        { title: "Inventory", icon: <Box className="w-10 h-10" />, features: ["Min/Max Level", "Reorder Level", "Stock Reports"] },
        { title: "Procurement", icon: <ShoppingCart className="w-10 h-10" />, features: ["PO Generation", "PO Tracking", "GRN"] },
        { title: "Sales", icon: <BarChart3 className="w-10 h-10" />, features: ["Sales Order", "Proforma Invoice", "Reports"] },
        { title: "Production", icon: <Factory className="w-10 h-10" />, features: ["Planning", "Consumption", "Efficiency Reports"] },
        { title: "Quality", icon: <ClipboardCheck className="w-10 h-10" />, features: ["Incoming QC", "In-Process QC", "Gamba Chart"] },
        { title: "Dispatch", icon: <Truck className="w-10 h-10" />, features: ["Dispatch Schedule", "Invoice", "Tracking"] },
        { title: "Accounts", icon: <Wallet className="w-10 h-10" />, features: ["Payable/Receivable", "Ledgers", "GST Reports"] },
        { title: "Marketing", icon: <Megaphone className="w-10 h-10" />, features: ["Journey Plan", "Tour Reports", "Target vs Achievement"] },
        { title: "Dealer Portal", icon: <Users className="w-10 h-10" />, features: ["Scheduling", "Availability", "Analytics"] },
        { title: "Vendor Portal", icon: <Store className="w-10 h-10" />, features: ["PO", "Rate Contract", "Dispatch Entry"] }
    ];

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
                            CRM Solution
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
                        >
                            <span className="text-teal-500 relative inline-block">
                                iCRM
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-500 opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                        </motion.h1>

                        <div className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                            <TextGenerateEffect words={words} className="text-lg md:text-xl font-normal text-gray-600 dark:text-gray-300" />
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="text-gray-500 dark:text-gray-400 max-w-lg"
                        >
                            Our powerful CRM solution helps you manage your customer relationships, track leads, and boost your sales. Experience the difference with our intuitive and customizable platform.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                            className="pt-4 flex gap-4"
                        >
                            <Link href="https://www.icrm.in" target="_blank">
                                <button className="px-8 py-3 bg-teal-600 text-white font-medium rounded-full hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1 active:scale-95">
                                    Get Started
                                </button>
                            </Link>

                            <Link href="/contactus">
                                <button className="px-8 py-3 bg-white dark:bg-transparent text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-neutral-800 transition-all hover:-translate-y-1">
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
                                src={splashLogo}
                                alt="iCRM Application"
                                width={500}
                                height={600}
                                className="w-full h-auto max-h-[600px] rounded-xl shadow-2xl skew-y-2 transform transition-all duration-700 hover:skew-y-0 hover:scale-[1.02] hover:shadow-teal-500/20"
                                priority
                            />
                            {/* Floating Elements for Decoration */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl animate-pulse mix-blend-multiply" />
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
                        Key Features of <span className="text-teal-500">iCRM</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Streamline your workflows and boost productivity with our cutting-edge software solution.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {keyFeatures.map((feature, idx) => (
                        <motion.div key={idx} variants={fadeInUp} className="group relative h-full">
                            <div className="bg-white dark:bg-neutral-900 h-full rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-lg hover:shadow-2xl transition-all duration-300 ease-out flex flex-col overflow-hidden relative z-10 hover:-translate-y-2">
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

            {/* Benefits Section */}
            <section className="py-24 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
                <div className="relative bg-gray-50 dark:bg-neutral-900/50 rounded-[3rem] p-8 md:p-16 border border-gray-100 dark:border-neutral-800 overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                        <BarChart className="w-96 h-96" />
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16 relative z-10"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Benefits of <span className="text-teal-500">Delta iCRM</span>
                        </h2>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                        <div className="w-full lg:w-1/2">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                            >
                                {benefits.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={fadeInUp}
                                        className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:border-teal-500/30 transition-all duration-300 group"
                                    >
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="w-10 h-10 bg-teal-50 dark:bg-teal-900/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-teal-600 transition-colors">{item.title}</h3>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <Image src={list} alt="CRM Benefits" className="w-full max-w-md h-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrated Modules Section */}
            <section className="py-20 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        <span className="text-teal-500">iERP</span> Integrated Modules
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        A wide range of modules designed to meet your business operations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ierpModules.map((item, idx) => (
                        <div key={idx} className="group cursor-pointer relative">
                            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col hover:-translate-y-2">
                                <div className="p-6 flex flex-col items-center flex-grow relative z-10">
                                    <div className="mb-4 text-gray-900 dark:text-white group-hover:text-teal-500 transition-colors">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-center mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                                </div>
                                <div className="bg-gray-50/50 dark:bg-neutral-800/50 p-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[300px] transition-all duration-500 ease-in-out border-t border-gray-100 dark:border-neutral-800">
                                    <ul className="space-y-2">
                                        {item.features.map((feat, fIdx) => (
                                            <li key={fIdx} className="flex items-start text-xs text-gray-600 dark:text-gray-300">
                                                <CheckIcon className="w-3 h-3 mr-2 text-teal-500 mt-0.5 flex-shrink-0" />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
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
                <div
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
                </div>
            </section>
        </div>
    )
}

export default page
