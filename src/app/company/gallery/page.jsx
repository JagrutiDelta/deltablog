"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import RetroGrid from "@/components/magicui/retro-grid";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const slogan = "Capturing moments that define us"

    const categories = [
        { id: 'all', label: 'All Moments' },
        { id: 'celebrations', label: 'Celebrations' },
        { id: 'awards', label: 'Awards' },
        { id: 'team', label: 'Team Life' },
        { id: 'community', label: 'Community' },
        { id: 'milestones', label: 'Milestones' }
    ];

    const projects = [
        {
            id: 1,
            title: "Annual Excellence Awards 2023",
            category: "awards",
            image: "/gallery/RMBPhoto.jpg",
            date: "December 2023"
        },
        {
            id: 2,
            title: "Tech Summit & Hackathon",
            category: "team",
            image: "/CSR activity/1.png",
            date: "October 2023"
        },
        {
            id: 3,
            title: "11 Years of Excellence",
            category: "milestones",
            image: "/gallery/11.JPG",
            date: "November 2022"
        },
        {
            id: 4,
            title: "Green Initiative Launch",
            category: "community",
            image: "/CSR activity/1.png",
            date: "August 2024"
        },
        {
            id: 5,
            title: "Diwali Celebrations 2023",
            category: "celebrations",
            image: "/gallery/SMP_2208.jpeg",
            date: "November 2023"
        },
        {
            id: 6,
            title: "Christmas Celebration 2024",
            category: "celebrations",
            image: "/gallery/image.png",
            date: "September 2023"
        },
        {
            id: 7,
            title: "Holi Celebration 2024",
            category: "celebrations",
            image: "/gallery/holi.png",
            date: "July 2023"
        },
        {
            id: 8,
            title: "Navratri Celebration 2024",
            category: "celebrations",
            image: "/gallery/Navratri.jpeg",
            date: "January 2024"
        },
        {
            id: 9,
            title: "12 Years of Innovation",
            category: "milestones",
            image: "/gallery/12.JPG",
            date: "November 2023"
        },
        {
            id: 10,
            title: "13 Years of Innovation",
            category: "milestones",
            image: "/gallery/13.JPG",
            date: "November 2024"
        },
        {
            id: 11,
            title: "Plantation Day 2024",
            category: "team",
            image: "/gallery/Plantation.jpg",
            date: "January 2024"
        },
        {
            id: 12,
            title: "Tech Expo Gandhinagar 2024",
            category: "community",
            image: "/gallery/Event.jpeg",
            date: "November 2024"
        },
        {
            id: 13,
            title: "Lunch Date with ZOHO Fam",
            category: "community",
            image: "/gallery/ZohoLunch Date.jpeg",
            date: "April 2024"
        },
        {
            id: 14,
            title: "Token Of Apperication",
            category: "awards",
            image: "/gallery/TokenOfApperiaction.jpeg",
            date: "November 2024"
        },
        {
            id: 15,
            title: "Picnic At Polo Forest",
            category: "team",
            image: "/gallery/polo.jpg",
            date: "April 2024"
        },
        {
            id: 16,
            title: "Award From GA",
            category: "awards",
            image: "/gallery/GA.jpeg",
            date: "October 2024"
        },
        {
            id: 17,
            title: "Award 2024",
            category: "awards",
            image: "/gallery/Award.jpeg",
            date: "April 2024"
        },
        {
            id: 18,
            title: "Late AS Mevada Birthday",
            category: "celebrations",
            image: "/gallery/ASM.jpg",
            date: "January 2024"
        },
        {
            id: 19,
            title: "Car Gifting",
            category: "community",
            image: "/gallery/Car.jpg",
            date: "August 2023"
        },
        {
            id: 19,
            title: "Event",
            category: "community",
            image: "/gallery/Event.jpg",
            date: "Feb 2023"
        },
        {
            id: 20,
            title: "Team Ahmedabad",
            category: "team",
            image: "/gallery/Ahm.jpg",
            date: "March 2024"
        },
        {
            id: 21,
            title: "Holi Celebration Palanpur",
            category: "celebrations",
            image: "/gallery/HoliPal.jpeg",
            date: "March 2024"
        },
        {
            id: 22,
            title: "Republic Day",
            category: "celebrations",
            image: "/gallery/RepublicDay.jpg",
            date: "August 2024"
        },
        {
            id: 23,
            title: "Session 2024",
            category: "Community",
            image: "/gallery/Session.jpeg",
            date: "October 2023"
        },
        {
            id: 23,
            title: "Team Palanpur",
            category: "Community",
            image: "/gallery/teamPal.jpeg",
            date: "August 2024"
        }
    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category.toLowerCase() === activeCategory.toLowerCase());

    return (
        <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden selection:bg-teal-500 selection:text-white">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
                <RetroGrid className="absolute inset-0 z-0 h-full w-full opacity-50 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-6 mb-16">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/30 text-sm font-medium text-teal-600 dark:text-teal-400 mb-4 shadow-sm">
                        Our Memories
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Life at <span className="text-teal-500">Delta</span>
                    </h1>
                    <div className="max-w-4xl mx-auto">
                        <div className="scale-90 md:scale-100">
                            <TextGenerateEffect words={slogan} className="text-center" />
                        </div>
                    </div>

                    {/* Filter Categories */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                                    ? "bg-teal-600 text-white shadow-lg shadow-teal-500/25 scale-105"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Content */}
            <div className="w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 pb-32">
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer bg-gray-100 dark:bg-gray-800"
                                onClick={() => setSelectedProject(project)}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                    <span className="text-teal-400 text-xs font-bold uppercase tracking-wider mb-2 block">
                                        {categories.find(c => c.id === project.category.toLowerCase())?.label || project.category}
                                    </span>
                                    <h3 className="text-white text-xl font-bold leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mt-1">{project.date}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-contain max-h-[85vh] mx-auto"
                            />

                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/60 backdrop-blur-md text-white">
                                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                                <p className="text-gray-300">{selectedProject.date} • {categories.find(c => c.id === selectedProject.category.toLowerCase())?.label}</p>
                            </div>

                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
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
    );
};

export default Gallery;
