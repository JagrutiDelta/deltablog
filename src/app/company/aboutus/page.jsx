"use client"
import React from 'react'
import about from "../../../../public/exponential.png"
import Image from 'next/image'
import { History } from '@/components/component/history'
import { Teamleads } from '@/components/component/teamleads'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import RetroGrid from '@/components/magicui/retro-grid'

const AboutPage = () => {
    const slogan = `Software that leads your way`

    return (
        <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden selection:bg-teal-500 selection:text-white">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
                <RetroGrid className="absolute inset-0 z-0 h-full w-full opacity-50 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-6 mb-16">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/30 text-sm font-medium text-teal-600 dark:text-teal-400 mb-4 shadow-sm">
                        Who We Are
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white">
                        About <span className="text-teal-500">Us</span>
                    </h1>
                    <div className="max-w-4xl mx-auto">
                        {/* We wrap TextGenerateEffect to control its container better, though styles are internal */}
                        <div className="scale-90 md:scale-100">
                            <TextGenerateEffect words={slogan} className="text-center" />
                        </div>
                    </div>
                </div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="space-y-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        <div className="space-y-6">
                            <p className="border-l-4 border-teal-500 pl-6 italic text-xl font-medium text-gray-800 dark:text-gray-200">
                                Transforming businesses through innovative enterprise resource planning (ERP) solutions.
                            </p>
                            <p>
                                At <span className="font-semibold text-teal-600 dark:text-teal-400">Delta</span>, our mission is to drive efficiency, productivity, and growth for organizations of all sizes and industries. We provide comprehensive, scalable, and customizable ERP systems that streamline operations and deliver tangible value from day one.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-6">
                            <div className="flex flex-col p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                                <span className="text-4xl font-bold text-teal-600 dark:text-teal-400">15+</span>
                                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider mt-1">Years Experience</span>
                            </div>
                            <div className="flex flex-col p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                                <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">150+</span>
                                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider mt-1">Clients Served</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500 to-blue-600 rounded-[2rem] blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl">
                            <Image
                                src={about}
                                alt="Delta Team Collaboration"
                                height={800}
                                width={800}
                                className="object-cover w-full h-full transform transition duration-700 group-hover:scale-105"
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 items-end flex p-8">
                                <p className="text-white font-medium">Building the future together.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <div className="relative z-10">
                <Teamleads />
            </div>

            {/* History Section */}
            <div className="relative z-10 bg-gray-50 dark:bg-gray-900/40 border-t border-gray-200 dark:border-gray-800">
                <History />
            </div>
        </div>
    )
}

export default AboutPage