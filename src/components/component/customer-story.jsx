"use client"
import React, { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

// Import all images
import waterman from "../../../public/Clientlogo/image 109waterman.png"
import AakashPAtel from "../../../public/Clientlogo/Rectangle 1714.png"
import Desire from "../../../public/Clientlogo/DesireLogos.png"
import GauravGupta from "../../../public/Clientlogo/GouravGupta.png"
import monalChoksi from "../../../public/Clientlogo/monalchoksi.png"
import prabhudas from "../../../public/Clientlogo/prabhudas patel.png"
import powerH20 from "../../../public/Clientlogo/H20.png"
import Duke from "../../../public/Clientlogo/Duke.png"

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const customerStories = [
    {
      id: 1,
      image: prabhudas,
      logo: Duke,
      title: "Prabhudas Patel",
      designation: "Managing Director, Duke Plasto Technique",
      description: "The people at Delta Infosoft not only make everything simple but also assist us at any given point in time. Their level of understand with customer requirements is tremendous. which is very supportive and work 24/7 to help us.",
    },
    {
      id: 2,
      image: GauravGupta,
      logo: Desire,
      title: "Gaurav Gupta",
      designation: "Managing Director, Desire Energy Solution",
      description: "Delta Team is our IT Partner since 10 year, they has made work for manage day to day all operation simple and easy for us in Delta iERP and Mobile Applications. Behind growth of Desire energy there are equally contribution of Delta Infosoft.",
    },
    {
      id: 3,
      image: monalChoksi,
      logo: powerH20,
      title: "Monal Chokshi",
      designation: "Managing Director, PowerH20 Technologies",
      description: "Delta's IOT and Mobile APPs plays a significant role in our water treatment projects with the highest level of accuracy, especially when you are dealing with government tenders and a large number of Data from Our Devices.",
    },
    {
      id: 4,
      image: AakashPAtel,
      logo: waterman,
      title: "Aakash Patel",
      designation: "Executive Director, Waterman Pumps Pvt Ltd",
      description: "A big thank you from all of us at Waterman Pumps for developing our iERP solution. Your expertise and dedication have truly enhanced our operations, making everything run smoother and more efficiently.",
    },
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % customerStories.length)
  }, [customerStories.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + customerStories.length) % customerStories.length)
  }, [customerStories.length])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <div 
      className="relative w-full max-w-[1500px] mx-auto px-4 py-12"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative h-[600px] md:h-[500px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <div className="grid lg:grid-cols-5 gap-0 items-stretch bg-white dark:bg-neutral-900 rounded-[4rem] overflow-hidden border border-gray-100 dark:border-neutral-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)]">
              
              {/* Left Side: Professional Portrait */}
              <div className="lg:col-span-2 relative h-[350px] lg:h-full bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src={customerStories[currentIndex].image}
                  alt={customerStories[currentIndex].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                
                {/* Floating Meta */}
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="p-1 px-4 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3 text-white text-[10px] font-bold uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                    Verified Partner
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight">
                    {customerStories[currentIndex].title}
                  </h3>
                  <p className="text-teal-400 font-bold text-sm">
                    {customerStories[currentIndex].designation}
                  </p>
                </div>
              </div>

              {/* Right Side: Quote & Content */}
              <div className="lg:col-span-3 p-12 md:p-20 relative flex flex-col justify-center">
                <div className="absolute top-10 right-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                  <Quote size={200} weight="fill" className="text-teal-500" />
                </div>

                <div className="relative z-10 space-y-10">
                  <div className="h-16 w-32 relative opacity-60 dark:opacity-40">
                    <Image
                      src={customerStories[currentIndex].logo}
                      alt="Company Logo"
                      fill
                      className="object-contain dark:invert dark:brightness-200"
                    />
                  </div>

                  <blockquote className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 leading-relaxed italic tracking-tight">
                    “{customerStories[currentIndex].description}”
                  </blockquote>

                  <div className="flex gap-4">
                    <div className="h-1 w-12 bg-teal-500 rounded-full" />
                    <div className="h-1 w-4 bg-teal-500/30 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-8">
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="w-14 h-14 rounded-full flex items-center justify-center border border-gray-200 dark:border-neutral-800 hover:border-teal-500 hover:text-teal-500 transition-all duration-500 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="w-14 h-14 rounded-full flex items-center justify-center border border-gray-200 dark:border-neutral-800 hover:border-teal-500 hover:text-teal-500 transition-all duration-500 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex gap-3">
          {customerStories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 transition-all duration-700 rounded-full ${
                currentIndex === idx ? "w-12 bg-teal-500" : "w-3 bg-gray-200 dark:bg-neutral-800 hover:bg-teal-500/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}