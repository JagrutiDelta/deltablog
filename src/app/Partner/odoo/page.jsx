"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import odoo from "../../../../public/odoo.png"
import partner1 from "../../../../public/OdooPartner1.png"
import partner2 from "../../../../public/OdooPartner2.png"
import Combined from "../../../../public/CombinedOdoo.png"
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import RetroGrid from '@/components/magicui/retro-grid'

const OdooPartnerPage = () => {
    const slogan = "Driving innovation with Odoo ERP Solutions"

    return (
        <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden selection:bg-purple-500 selection:text-white">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
                <RetroGrid className="absolute inset-0 z-0 h-full w-full opacity-50 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-6 mb-16">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/30 text-sm font-medium text-purple-600 dark:text-purple-400 mb-4 shadow-sm">
                        Implementation Partner
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Odoo <span className="text-purple-600">Certified</span> Partner
                    </h1>
                    <div className="max-w-4xl mx-auto">
                        <div className="scale-90 md:scale-100">
                            <TextGenerateEffect words={slogan} className="text-center" />
                        </div>
                    </div>
                    <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 mx-auto leading-relaxed">
                        We are dedicated to driving customer success by tailoring Odoo's suite of tools to perfectly suit the unique needs of every business.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <div className="space-y-24 pb-24 w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">

                {/* Main Feature */}
                <section className="relative rounded-3xl overflow-hidden bg-gray-50 dark:bg-gray-900/30 border border-gray-100 dark:border-gray-800 p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-8 border border-gray-100 dark:border-gray-800">
                            <Image
                                src={odoo}
                                alt="Odoo Partnership"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                                    Partnering for <span className="text-purple-600">Innovation</span>
                                </h2>
                                <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
                                    <p>
                                        As an Odoo partner, our certified experts deliver exceptional services in business scoping, implementation, sales, and support.
                                    </p>
                                    <p>
                                        Delta Infosoft helps you streamline your entire process from marketing to post-sales via workflows and automation, helping you adapt to the constantly evolving market landscape.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Memories Wall & Highlights */}
                <section>
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Memories <span className="text-purple-600">Wall</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <div className="relative rounded-3xl overflow-hidden shadow-xl group">
                            <Image
                                src={partner1}
                                alt="Odoo Partner Event 1"
                                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="relative rounded-3xl overflow-hidden shadow-xl group">
                            <Image
                                src={partner2}
                                alt="Odoo Partner Event 2"
                                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 border border-purple-100 dark:border-gray-800 shadow-xl">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                            <div className="lg:col-span-2 space-y-6">
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Odoo Capabilities</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-4 bg-purple-50 dark:bg-gray-800 rounded-xl">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Languages</p>
                                        <p className="font-semibold text-gray-900 dark:text-white">Hindi, English, Gujarati</p>
                                    </div>
                                    <div className="p-4 bg-purple-50 dark:bg-gray-800 rounded-xl">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Core Expertise</p>
                                        <p className="font-semibold text-gray-900 dark:text-white">ERP Production & Retail</p>
                                    </div>
                                    <div className="p-4 bg-purple-50 dark:bg-gray-800 rounded-xl col-span-1 md:col-span-2">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Top Odoo Apps</p>
                                        <p className="font-semibold text-purple-600 dark:text-purple-400 leading-relaxed">Manufacturing, Accounting, POS, CRM, Project, Inventory, Dashboard</p>
                                    </div>
                                    <div className="p-4 bg-purple-50 dark:bg-gray-800 rounded-xl">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Contact</p>
                                        <a href="mailto:info@deltainfosoft.com" className="font-semibold text-gray-900 dark:text-white hover:text-purple-600">info@deltainfosoft.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                                <Image src={Combined} alt="Odoo Partner Badge" className="w-full max-w-[250px] object-contain" />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default OdooPartnerPage
