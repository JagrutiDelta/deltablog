"use client"
import React from 'react'
import Image from 'next/image'
import DoubleTick from "../../../../public/doubleTick.png"
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import RetroGrid from '@/components/magicui/retro-grid'

const DoubleTickPartnerPage = () => {
    const slogan = "Simplify Compliance with DoubleTick Integration"

    return (
        <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden selection:bg-blue-500 selection:text-white">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
                <RetroGrid className="absolute inset-0 z-0 h-full w-full opacity-50 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-6 mb-16">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 text-sm font-medium text-blue-600 dark:text-blue-400 mb-4 shadow-sm">
                        Strategic Partner
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white">
                        DoubleTick <span className="text-blue-600">Partner</span>
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
                                src={DoubleTick}
                                alt="DoubleTick Partnership"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                                    Accuracy & <span className="text-blue-600">Efficiency</span>
                                </h2>
                                <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
                                    <p>
                                        To enhance our offerings and deliver exceptional value, we have partnered with DoubleTick Company. DoubleTick is renowned for its innovative approach and excellence.
                                    </p>
                                    <p>
                                        Together, we leverage our combined expertise to bring you reliable, efficient, and cutting-edge solutions tailored to meet your unique compliance and auditing needs.
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

export default DoubleTickPartnerPage
