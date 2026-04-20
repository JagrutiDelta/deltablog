"use client"
import React from 'react'
import Image from 'next/image'
import ClearTax from "../../../../public/clearTax.png"
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import RetroGrid from '@/components/magicui/retro-grid'

const ClearTaxPartnerPage = () => {
    const slogan = "Streamlining Tax Compliance for Growth"

    return (
        <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden selection:bg-green-500 selection:text-white">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
                <RetroGrid className="absolute inset-0 z-0 h-full w-full opacity-50 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-6 mb-16">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/30 text-sm font-medium text-green-600 dark:text-green-400 mb-4 shadow-sm">
                        Technology Partner
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ClearTax <span className="text-green-600">Partner</span>
                    </h1>
                    <div className="max-w-4xl mx-auto">
                        <div className="scale-90 md:scale-100">
                            <TextGenerateEffect words={slogan} className="text-center" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <div className="space-y-24 pb-24 w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">

                {/* Main Feature */}
                <section className="relative rounded-3xl overflow-hidden bg-gray-50 dark:bg-gray-900/30 border border-gray-100 dark:border-gray-800 p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-8 border border-gray-100 dark:border-gray-800">
                            <Image
                                src={ClearTax}
                                alt="ClearTax Partnership"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                                    Transforming <span className="text-green-600">Compliance</span>
                                </h2>
                                <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
                                    <p>
                                        In pursuit of excellence, we have joined forces with ClearTax. Known for its outstanding service delivery, ClearTax enables us to offer robust and scalable solutions.
                                    </p>
                                    <p>
                                        This partnership enhances productivity, streamlines operations, and fosters growth for our clients by simplifying financial management and tax compliance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default ClearTaxPartnerPage
