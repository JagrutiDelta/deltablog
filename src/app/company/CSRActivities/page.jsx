"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion';
import first from "../../../../public/CSR activity/1.png"
import second from "../../../../public/CSR activity/2.png"
import third from "../../../../public/CSR activity/3.png"
import fourth from "../../../../public/CSR activity/4.png"
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import RetroGrid from '@/components/magicui/retro-grid'

const CSRPage = () => {
    const slogan = "Building a sustainable future together"
    const [selectedId, setSelectedId] = useState(null)

    return (
        <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden selection:bg-teal-500 selection:text-white">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
                <RetroGrid className="absolute inset-0 z-0 h-full w-full opacity-50 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-6 mb-16">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/30 text-sm font-medium text-teal-600 dark:text-teal-400 mb-4 shadow-sm">
                        Social Impact
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white">
                        CSR & <span className="text-teal-500">Community</span>
                    </h1>
                    <div className="max-w-4xl mx-auto">
                        <div className="scale-90 md:scale-100">
                            <TextGenerateEffect words={slogan} className="text-center" />
                        </div>
                    </div>
                    <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 mx-auto leading-relaxed">
                        At Delta Infosoft, we believe in giving back. Our commitment to social responsibility is an integral part of our company values, ensuring we make a positive impact on the world around us.
                    </p>
                </div>
            </section>

            {/* Content Container */}
            <div className="space-y-24 pb-24 w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">

                {/* Section 1: Educational Outreach */}
                <section className="group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                                    Educational <span className="text-teal-600 dark:text-teal-400">Outreach</span>
                                </h2>
                                <h3 className="text-xl font-medium text-gray-500 dark:text-gray-400">
                                    Empowering the Next Generation
                                </h3>
                            </div>

                            <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    We recently conducted a webinar for the students of <strong className="text-gray-900 dark:text-white">GD Modi Palanpur</strong>. This initiative aimed to educate students about the workings of the software industry, providing them with valuable insights and knowledge to help them in their future careers.
                                </p>
                                <p>
                                    Our speakers, <span className="text-teal-600 font-semibold">Nirav Adhavan</span> and <span className="text-teal-600 font-semibold">Meet</span>, shared their expertise and lived experiences, inspiring the students and answering their queries about navigating the tech landscape.
                                </p>
                            </div>
                        </div>

                        {/* Image Grid for Education */}
                        <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                layoutId="card-1"
                                onClick={() => setSelectedId(first)}
                                className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 aspect-[4/5] cursor-pointer"
                            >
                                <Image
                                    src={first}
                                    fill
                                    alt="Webinar Session"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                layoutId="card-2"
                                onClick={() => setSelectedId(second)}
                                className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 aspect-[4/5] mt-12 cursor-pointer"
                            >
                                <Image
                                    src={second}
                                    fill
                                    alt="Student Interaction"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Environmental Sustainability */}
                <section className="group bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 md:p-12 lg:-mx-12 xl:-mx-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Image Grid for Environment */}
                        <div className="grid grid-cols-2 gap-4 order-1">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                layoutId="card-3"
                                onClick={() => setSelectedId(third)}
                                className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 aspect-[4/5] cursor-pointer"
                            >
                                <Image
                                    src={third}
                                    fill
                                    alt="Green Initiatives"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                layoutId="card-4"
                                onClick={() => setSelectedId(fourth)}
                                className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 aspect-[4/5] mt-12 cursor-pointer"
                            >
                                <Image
                                    src={fourth}
                                    fill
                                    alt="Tree Plantation"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                            </motion.div>
                        </div>

                        <div className="space-y-8 order-2">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                                    Environmental <span className="text-green-600 dark:text-green-400">Sustainability</span>
                                </h2>
                                <h3 className="text-xl font-medium text-gray-500 dark:text-gray-400">
                                    Commitment to a Greener Planet
                                </h3>
                            </div>

                            <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    Delta Infosoft is deeply committed to reducing our environmental footprint. We understand that a healthy planet is essential for a healthy future.
                                </p>
                                <ul className="space-y-2 mt-4 list-none pl-0">
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-green-500" />
                                        <span>Energy-efficient office lighting systems</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-green-500" />
                                        <span>Comprehensive recycling programs</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-green-500" />
                                        <span>Digital-first documentation to minimize paper waste</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={selectedId === first ? 'card-1' : selectedId === second ? 'card-2' : selectedId === third ? 'card-3' : 'card-4'}
                            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedId}
                                fill
                                alt="Expanded CSR Image"
                                className="object-contain"
                            />
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default CSRPage
