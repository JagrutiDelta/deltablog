'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AwardImage1 from '../../../public/TechExpoGujarat/award1.png';

const EventDetails = () => {
    return (
        <section className="py-12 md:py-24 lg:py-32 flex justify-center items-center  dark:bg-gray-900 transition-colors duration-300">
            <div className="container flex flex-col lg:flex-row lg:items-start gap-12">
                {/* Left Side: Event Details */}
                <motion.div
                    className="flex-1 text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">
                        Tech Expo Gujarat 2024
                    </h1>
                    <p className="mx-auto max-w-[800px] text-gray-600 dark:text-gray-300 md:text-lg/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed leading-relaxed mb-8 border-l-4 border-blue-500 pl-4 italic transition-colors duration-300">
                        Thank you for joining us at the premier event that brought together technology experts and innovators! We had an incredible experience showcasing our cutting-edge solutions, including the Delta iERP system, at{' '}
                        <span className="font-bold text-blue-600 dark:text-blue-400 relative">
                            booth E31
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </span> as an{' '}
                        <span className="font-semibold text-teal-600 dark:text-teal-400 relative">
                            Exponential Growth Partner
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 dark:bg-teal-400 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </span>.
                    </p>
                    <div className="mt-10 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-300">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </span>
                            Event Highlights
                        </h2>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                            {['MyTime', 'iAccount', 'iERP'].map((item, index) => (
                                <motion.li
                                    key={item}
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <span className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <div>
                                        <strong className="text-lg text-teal-600 dark:text-teal-400">{item}:</strong>{' '}
                                        {item === 'MyTime' && 'A smart HRM solution to streamline employee management, attendance, and leave tracking.'}
                                        {item === 'iAccount' && 'A comprehensive accounting system designed to simplify and automate financial operations.'}
                                        {item === 'iERP' && 'Revolutionizing manufacturing and business management by providing seamless integration across departments.'}
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* Right Side: Award Image with Elegant Beam Effect */}
                <div className="flex-1 flex justify-center items-center">
                    <div className="relative group">
                        <svg
                            className="absolute inset-0 w-full h-full"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 300 400"
                            preserveAspectRatio="xMidYMid slice"
                        >
                            <defs>
                                <linearGradient id="beam-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="rgba(37, 99, 235, 0.2)" />
                                    <stop offset="50%" stopColor="rgba(37, 99, 235, 0.5)" />
                                    <stop offset="100%" stopColor="rgba(37, 99, 235, 0.2)" />
                                </linearGradient>
                                <linearGradient id="beam-gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
                                    <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
                                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
                                </linearGradient>
                                <filter id="beam-glow">
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            <rect
                                className="beam"
                                x="0"
                                y="0"
                                width="300"
                                height="400"
                                rx="15"
                                ry="15"
                                fill="none"
                                stroke="url(#beam-gradient-light)"
                                strokeWidth="2"
                                filter="url(#beam-glow)"
                            />
                        </svg>

                        <Image
                            src={AwardImage1}
                            alt="Award 1"
                            className="rounded-lg object-contain relative z-10"
                            width={450}
                            height={700}
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes beam-animation {
                    0% {
                        stroke-dashoffset: 0;
                    }
                    100% {
                        stroke-dashoffset: 1400;
                    }
                }
                .beam {
                    stroke-dasharray: 700;
                    animation: beam-animation 10s linear infinite;
                }
                :global(.dark) .beam {
                    stroke: url(#beam-gradient-dark);
                }
            `}</style>
        </section>
    );
};

export default EventDetails;