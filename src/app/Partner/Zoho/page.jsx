"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import zoho from "../../../../public/zoho.png"
import zohoPartner from "../../../../public/ZohoPartner.png"
import Combined from "../../../../public/Combined.png"
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import RetroGrid from '@/components/magicui/retro-grid'

const ZohoPartnerPage = () => {
    const slogan = "Driving business growth with comprehensive Zoho Solutions"

    return (
        <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden selection:bg-teal-500 selection:text-white">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
                <RetroGrid className="absolute inset-0 z-0 h-full w-full opacity-50 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-6 mb-16">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/30 text-sm font-medium text-teal-600 dark:text-teal-400 mb-4 shadow-sm">
                        Premier Partner
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Zoho <span className="text-teal-500">Certified</span> Partner
                    </h1>
                    <div className="max-w-4xl mx-auto">
                        <div className="scale-90 md:scale-100">
                            <TextGenerateEffect words={slogan} className="text-center" />
                        </div>
                    </div>
                    <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 mx-auto leading-relaxed">
                        We are proud to partner with Zoho to provide unified customer experiences and deliver outstanding business scoping, implementation, and support services.
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
                                src={zoho}
                                alt="Zoho Partnership"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                                    Partnering for <span className="text-teal-600">Change</span>
                                </h2>
                                <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
                                    <p>
                                        Zoho Consulting Partners enable customer success by identifying the right set of Zoho tools to address the unique needs of each business.
                                    </p>
                                    <p>
                                        Delta Infosoft has worked with ERP and CRM since 2011. Now, as an authorized Zoho partner, we help you streamline processes from marketing to post-sales via workflows and automation, ensuring you get the best return on your investment.
                                    </p>
                                </div>
                            </div>

                            <Link
                                href="https://www.zoho.com/partners/find-partner-profile.html?partnerid=b83d93054c6d90b688f7be7527f4f1fb"
                                target="_blank"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors shadow-lg hover:shadow-teal-500/30"
                            >
                                View Partner Profile
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Memories Wall & Highlights */}
                <section>
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Memories <span className="text-teal-600">Wall</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                        <div className="col-span-1 lg:col-span-2 relative rounded-3xl overflow-hidden shadow-xl group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-8">
                                <span className="text-white text-xl font-bold">Zoho Partner Meet 2024</span>
                            </div>
                            <Image
                                src={zohoPartner}
                                alt="Zoho Partner Event"
                                width={1200}
                                height={600}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800 shadow-xl">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                            <div className="lg:col-span-2 space-y-6">
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Zoho Expertise</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Languages</p>
                                        <p className="font-semibold text-gray-900 dark:text-white">Hindi, English, Gujarati</p>
                                    </div>
                                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Core Expertise</p>
                                        <p className="font-semibold text-gray-900 dark:text-white">CRM Sales Management</p>
                                    </div>
                                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl col-span-1 md:col-span-2">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Top Zoho Apps</p>
                                        <p className="font-semibold text-teal-600 dark:text-teal-400">Zoho CRM Plus, Zoho One</p>
                                    </div>
                                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Contact</p>
                                        <a href="mailto:info@deltainfosoft.com" className="font-semibold text-gray-900 dark:text-white hover:text-teal-600">info@deltainfosoft.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                                <Image src={Combined} alt="Zoho Partner Badge" className="w-full max-w-[250px] object-contain" />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default ZohoPartnerPage
