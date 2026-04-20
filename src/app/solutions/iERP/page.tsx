"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import RetroGrid from '@/components/magicui/retro-grid'
import {
    BarChart,
    Calendar,
    Code,
    DollarSign,
    Handshake,
    Settings,
    Truck,
    Users,
    CheckIcon,
    PenIcon,
    Box,
    ShoppingCart,
    BarChart3,
    Factory,
    ClipboardCheck,
    Wallet,
    Megaphone,
    MonitorCheck,
    Briefcase
} from "lucide-react"
import { motion } from "framer-motion"

import splashLogo from "../../../../public/iERP.png"
import list from "../../../../public/list.png"
// Note: Flow images not present in original file? Original file imported them but maybe didn't use them? 
// Original file imported: import darkflow from "../../../../public/Flows/Delta iERP Dark.png" ...
// I will reuse them if they exist and are correct.
import darkflow from "../../../../public/Flows/Delta iERP Dark.png"
import light from "../../../../public/Flows/Delta iERP White.png"


const page = () => {

    const words = "iERP is as unique as your business operations."

    const keyFeatures = [
        {
            title: "Financial Management",
            description: "Streamline financial operations with comprehensive tools for budgeting, accounting, and financial reporting.",
            icon: <DollarSign className="w-16 h-16 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "HR Management",
            description: "Optimize your workforce with advanced HR tools for recruitment, payroll, performance management, and employee self-service.",
            icon: <Users className="w-16 h-16 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "Supply Chain Management",
            description: "Improve efficiency and visibility across your supply chain with integrated tools for procurement, inventory, and logistics.",
            icon: <Truck className="w-16 h-16 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "Manufacturing & Production",
            description: "Boost production efficiency with robust tools for planning, scheduling, and monitoring manufacturing processes.",
            icon: <Settings className="w-16 h-16 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "Sales & CRM",
            description: "Enhance sales and customer service with powerful CRM tools for lead management, sales tracking, and customer support.",
            icon: <Handshake className="w-16 h-16 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "Project Management",
            description: "Manage projects from start to finish with tools for planning, scheduling, resource allocation, and tracking.",
            icon: <Calendar className="w-16 h-16 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "Data & Analytics",
            description: "Unlock actionable insights with advanced analytics and reporting tools. Make informed decisions with real-time data.",
            icon: <BarChart className="w-16 h-16 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300" />
        },
        {
            title: "Technology & Integration",
            description: "Seamlessly integrate with existing systems and leverage the latest technology. Enhance functionality and scalability.",
            icon: <Code className="w-16 h-16 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
        }
    ]

    const benefits = [
        "Standardises processes",
        "Realtime Inventory",
        "Reduces operational cost",
        "Smooth processing",
        "Boosts Collaboration with Dealers",
        "Easy scalability",
        "Compliance on Click",
        "Realtime Dashboard"
    ]

    const modules = [
        { title: "Design & Development", icon: <PenIcon className="w-8 h-8" />, features: ["New Product Master", "Bill Of Material", "Drawing Request Note", "Customize BOM"] },
        { title: "Inventory / Jobwork", icon: <Box className="w-8 h-8" />, features: ["Min/Max Level", "Reorder Level", "Purchase Requesting", "Material Issue Slip"] },
        { title: "Procurement", icon: <ShoppingCart className="w-8 h-8" />, features: ["Purchase Order Generation", "Auto PO against Shortages", "Pending PO Report"] },
        { title: "Sales", icon: <BarChart3 className="w-8 h-8" />, features: ["Sales Order", "Pending Order reports", "Proforma Invoice", "Reports"] },
        { title: "Production", icon: <Factory className="w-8 h-8" />, features: ["Planning Against Production", "Consumption Report", "Efficiency Measurement"] },
        { title: "Quality", icon: <ClipboardCheck className="w-8 h-8" />, features: ["Incoming QC", "In-Process QC", "Inspection Report", "Gamba Chart"] },
        { title: "Account", icon: <Wallet className="w-8 h-8" />, features: ["Payable / Receivable", "General Ledgers", "Billing", "GST Reports"] },
        { title: "Marketing", icon: <Megaphone className="w-8 h-8" />, features: ["Project Journey Plan", "Tour Reports", "Target Vs Achievement"] },
        { title: "Dispatch", icon: <Truck className="w-8 h-8" />, features: ["Dispatch Schedule", "Sales Order Against Dispatch", "Dispatch Slip Report"] },
        { title: "Dealer Portal", icon: <Briefcase className="w-8 h-8" />, features: ["Online scheduling", "Appointment management", "Reporting and analytics"] },
        { title: "Vendor Portal", icon: <MonitorCheck className="w-8 h-8" />, features: ["Purchase Order", "Pending Order Report", "Dispatch Entry"] }
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
                            Enterprise Solution
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
                        >
                            Delta <span className="text-teal-500 relative inline-block">
                                iERP
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
                            In the dynamic world of business operations, One Size Fits All is not possible. Our custom iERP solution enables you to run your business from manual processes to digital transformation.
                        </motion.p>

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
                                src={splashLogo}
                                alt="iERP Application"
                                width={600}
                                height={600}
                                className="w-full h-auto max-h-[600px] rounded-xl shadow-2xl skew-y-2 transform transition-all duration-700 hover:skew-y-0 hover:scale-[1.02] hover:shadow-teal-500/20"
                                priority
                            />
                            {/* Floating Elements for Decoration */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse mix-blend-multiply" />
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
                        Key Features of <span className="text-teal-500">iERP</span>
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
                            Benefits of <span className="text-teal-500">Delta iERP</span>
                        </h2>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                        <div className="w-full lg:w-1/2">
                            <motion.ul
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                            >
                                {benefits.map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        variants={fadeInUp}
                                        className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-gray-100 dark:border-neutral-800 shadow-sm flex items-center gap-3 hover:border-teal-500/50 transition-colors"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center flex-shrink-0">
                                            <CheckIcon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-200 font-medium">{item}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <Image src={list} alt="iERP Benefits" className="w-full max-w-md h-auto" />
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
                        Comprehensive <span className="text-teal-500">Modules</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        A tailored suite of modules to cover every aspect of your business.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {modules.map((item, idx) => (
                        <div key={idx} className="group cursor-pointer relative">
                            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col hover:-translate-y-2">
                                <div className="p-6 flex flex-col items-center flex-grow relative z-10">
                                    <div className="mb-4 text-gray-900 dark:text-white group-hover:text-teal-500 transition-colors group-hover:scale-110 duration-300">
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
