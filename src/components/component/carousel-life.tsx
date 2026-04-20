'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import image1 from "../../../public/Life At Delta/1.jpg"
import image2 from "../../../public/Life At Delta/2.jpg"
import image3 from "../../../public/Life At Delta/3.jpg"
import image4 from "../../../public/Life At Delta/4.jpg"
import image5 from "../../../public/Life At Delta/5.jpg"
import image6 from "../../../public/Life At Delta/6.jpeg"

const images = [
  { src: image1, alt: "Team collaboration at Delta", caption: "Launching Success" },
  { src: image2, alt: "Delta office environment", caption: "Modern Workspace" },
  { src: image3, alt: "Delta team meeting", caption: "Strategic Planning" },
  { src: image4, alt: "Delta tech showcase", caption: "Cutting-edge Solutions" },
  { src: image5, alt: "Delta team building activity", caption: "Building Connections" },
  { src: image6, alt: "Delta product launch", caption: "Innovating Together" },
]


export function CarouselLife() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const navigate = (direction: number) => {
    setCurrentIndex((prevIndex) => (prevIndex + direction + images.length) % images.length)
  }

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-6">
      <div className="relative aspect-[16/9] md:aspect-[21/9] bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1600px"
              priority={currentIndex === 0}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-6 left-6 md:bottom-12 md:left-12 max-w-2xl text-white space-y-2 pointer-events-none"
            >
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight">{images[currentIndex].caption}</h3>
              <p className="text-lg text-gray-200">{images[currentIndex].alt}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex items-center space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => navigate(1)}
            className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute top-6 right-6 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-white' : 'w-4 bg-white/40 hover:bg-white/60'
                }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

