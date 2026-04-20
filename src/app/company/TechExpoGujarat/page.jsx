"use client"
import React, { useState } from 'react'
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import RetroGrid from "@/components/magicui/retro-grid"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import Highlight from "@/app/widgets/Highlight"

// Assets
import TechExpoImage from '../../../../public/TechExpoGujarat/expo-dark.png';
import DeltaLogo from '../../../../public/TechExpoGujarat/delta-logo.png';
import ExpoLogo from '../../../../public/TechExpoGujarat/expo-logo.png';
import AwardImage1 from '../../../../public/TechExpoGujarat/award1.png';

const TechExpoPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const images = Array.from({ length: 20 }, (_, i) => `/TechExpoGujarat/${i + 1}.jpeg`);

    const slogan = "Showcasing Innovation at Gujarat's Premier Tech Event"

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const navigateImage = (direction) => {
        setSelectedImageIndex((prevIndex) => {
            if (direction === 'prev') {
                return prevIndex > 0 ? prevIndex - 1 : images.length - 1;
            } else {
                return prevIndex < images.length - 1 ? prevIndex + 1 : 0;
            }
        });
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden selection:bg-teal-500 selection:text-white">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
                <RetroGrid className="absolute inset-0 z-0 h-full w-full opacity-50 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-6 mb-16">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/30 text-sm font-medium text-teal-600 dark:text-teal-400 mb-4 shadow-sm">
                        Event Highlights
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Tech Expo <span className="text-teal-500">Gujarat 2024</span>
                    </h1>
                    <div className="max-w-4xl mx-auto">
                        <div className="scale-90 md:scale-100">
                            <TextGenerateEffect words={slogan} className="text-center" />
                        </div>
                    </div>

                    {/* Partner Logos */}
                    <div className="flex items-center justify-center gap-8 mt-8 p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-100 dark:border-gray-800 shadow-lg">
                        <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
                            <Image src={DeltaLogo} alt="Delta Logo" fill className="object-contain" />
                        </div>
                        <div className="w-px h-12 bg-gray-200 dark:bg-gray-700"></div>
                        <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
                            <Image src={ExpoLogo} alt="Expo Logo" fill className="object-contain" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="space-y-24 pb-24 w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">

                {/* Event Details & Award */}
                <section className="relative rounded-3xl overflow-hidden bg-gray-50 dark:bg-gray-900/30 border border-gray-100 dark:border-gray-800 p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                                    Expo <span className="text-teal-600">Highlights</span>
                                </h2>
                                <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
                                    <p className="lead border-l-4 border-teal-500 pl-6 italic bg-teal-50 dark:bg-teal-900/20 p-4 rounded-r-xl">
                                        We were proud to showcase our cutting-edge solutions at <strong className="text-teal-600 dark:text-teal-400">Booth E31</strong> as an Exponential Growth Partner.
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-4">
                                {[
                                    { title: 'MyTime', desc: 'Smart HRM & Attendance Tracking', icon: '⏰' },
                                    { title: 'iAccount', desc: 'Automated Financial Operations', icon: '📊' },
                                    { title: 'iERP', desc: 'Seamless Business Integration', icon: '🏭' },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 transition-colors"
                                    >
                                        <span className="text-2xl">{item.icon}</span>
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group flex justify-center">
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-3xl rounded-full transform group-hover:scale-110 transition-transform duration-700"></div>
                            <Image
                                src={AwardImage1}
                                alt="Tech Expo Award"
                                width={500}
                                height={700}
                                className="relative z-10 rounded-2xl shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </section>

                {/* Memory Wall (Gallery) */}
                <section>
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Memory <span className="text-teal-600">Wall</span>
                        </h2>
                        <p className="text-lg text-gray-500 dark:text-gray-400">Glimpses from the event floor.</p>
                    </div>

                    <div className="columns-1 md:columns-3 lg:columns-4 gap-6 space-y-6">
                        {images.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="break-inside-avoid relative rounded-2xl overflow-hidden cursor-pointer group bg-gray-100 dark:bg-gray-800"
                                onClick={() => openModal(index)}
                            >
                                <Image
                                    src={image}
                                    alt={`Gallery ${index + 1}`}
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
                        onClick={closeModal}
                    >
                        <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
                            <button
                                onClick={closeModal}
                                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
                            >
                                <X size={32} />
                            </button>

                            <button
                                onClick={() => navigateImage('prev')}
                                className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-all"
                            >
                                <ChevronLeft size={24} />
                            </button>

                            <motion.div
                                key={selectedImageIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative w-full h-full flex items-center justify-center pointer-events-none"
                            >
                                <Image
                                    src={images[selectedImageIndex]}
                                    alt="Selected"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>

                            <button
                                onClick={() => navigateImage('next')}
                                className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-all"
                            >
                                <ChevronRight size={24} />
                            </button>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                                {selectedImageIndex + 1} / {images.length}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default TechExpoPage