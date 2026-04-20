'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import TechExpoImage from '../../../public/TechExpoGujarat/expo-dark.png';
import DeltaLogo from '../../../public/TechExpoGujarat/delta-logo.png';
import ExpoLogo from '../../../public/TechExpoGujarat/expo-logo.png';
import ExpoLogoLight from '../../../public/TechExpoGujarat/expo-dark.png'; // Make sure to add this new logo

const TechHeroSection = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check initial theme
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(darkModeMediaQuery.matches);

        // Listen for theme changes
        const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
        darkModeMediaQuery.addEventListener('change', handler);

        // Also check for HTML data attribute if you're using a theme toggle
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-color-scheme') {
                    setIsDarkMode(document.documentElement.getAttribute('data-color-scheme') === 'dark');
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-color-scheme']
        });

        return () => {
            darkModeMediaQuery.removeEventListener('change', handler);
            observer.disconnect();
        };
    }, []);

    return (
        <section className="relative py-12 sm:p-5 md:p-5 lg:p-3 flex justify-center items-center flex-col mt-48 md:py-24 lg:py-32 dark:bg-gray-900 transition-colors duration-300">
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent  dark:via-gray-900/50 dark:to-gray-900" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4">
                {/* Title Section */}
                <div className="text-center mb-6">
                    <h1 className="lg:text-6xl font-bold tracking-tighter text-3xl sm:text-3xl md:text-5xl 
                                 text-gray-900 dark:text-white
                                 transition-colors duration-300">
                        Tech Expo Gujarat 2024
                    </h1>
                </div>

                {/* Logos Section */}
                <div className="flex justify-center items-center gap-10 mt-10 mb-10">
                    <div className="relative p-4 rounded-lg transition-all duration-300
                                hover:shadow-lg dark:hover:shadow-cyan-500/20">
                        <Image
                            src={DeltaLogo}
                            width={150}
                            height={150}
                            alt="Delta Infosoft Logo"
                            className="object-contain transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="relative p-4 rounded-lg transition-all duration-300
                                hover:shadow-lg dark:hover:shadow-cyan-500/20">
                        <Image
                            src={isDarkMode ? ExpoLogo : ExpoLogoLight}
                            width={150}
                            height={150}
                            alt="Tech Expo Gujarat Logo"
                            className="object-contain transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>

                {/* Bottom Text Section */}
                <div className="relative text-center mt-10">
                    <div className="space-y-4 max-w-3xl mx-auto">
                        <p className="text-gray-700 dark:text-gray-300 md:text-lg leading-loose transition-colors duration-300">
                            We are honored to have had the opportunity to present our product at Tech Expo Gujarat 2024.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 md:text-lg leading-loose transition-colors duration-300">
                            Our Delta iERP solution is transforming the way businesses operate. We were proud to showcase its capabilities and innovations at such a prestigious event.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechHeroSection;