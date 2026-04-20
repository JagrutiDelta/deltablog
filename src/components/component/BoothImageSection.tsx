'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Updated image imports
const images = Array.from({ length: 20 }, (_, i) => `/TechExpoGujarat/${i + 1}.jpeg`);

const BoothImageSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openModal = (index: number) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const navigateImage = (direction: 'prev' | 'next') => {
        setSelectedImageIndex((prevIndex) => {
            if (direction === 'prev') {
                return prevIndex > 0 ? prevIndex - 1 : images.length - 1;
            } else {
                return prevIndex < images.length - 1 ? prevIndex + 1 : 0;
            }
        });
    };

    return (
        <section className="flex justify-center md:py-24 lg:py-32">
            {/* Masonry Grid of Images */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => openModal(index)}
                    >
                        <Image
                            src={image}
                            alt={`Booth Image ${index + 1}`}
                            className="w-full h-48 object-cover object-center transition-all duration-300 ease-in-out transform hover:scale-105"
                            width={200}
                            height={200}
                        />
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl w-full mx-auto p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 p-2 bg-white bg-opacity-25 hover:bg-opacity-50 text-white rounded-full transition-all duration-200 ease-in-out z-10"
                                aria-label="Close modal"
                            >
                                <X size={24} />
                            </button>
                            <Image
                                src={images[selectedImageIndex]}
                                alt={`Selected Booth Image ${selectedImageIndex + 1}`}
                                className="object-contain w-full h-full max-h-[80vh]"
                                width={1000}
                                height={1000}
                            />
                            <button
                                onClick={() => navigateImage('prev')}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-25 hover:bg-opacity-50 text-white rounded-full transition-all duration-200 ease-in-out"
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={() => navigateImage('next')}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-25 hover:bg-opacity-50 text-white rounded-full transition-all duration-200 ease-in-out"
                                aria-label="Next image"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default BoothImageSection;

