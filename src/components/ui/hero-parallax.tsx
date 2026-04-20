"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { ArrowRight, Rocket, Star, Sparkles } from "lucide-react";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);
  const thirdRow = products.slice(8, 12);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.6], [-600, -50]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[2300px] pt-10 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-gradient-to-b from-white via-teal-50/20 to-slate-50 dark:from-black dark:via-neutral-900/20 dark:to-neutral-950"
    >
      {/* Background Depth Blobs - Increased Opacity */}
      <div className="absolute top-[15%] -left-[5%] w-[45%] h-[45%] bg-teal-400/15 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute top-[45%] -right-[5%] w-[45%] h-[45%] bg-blue-400/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[35%] h-[35%] bg-emerald-400/10 blur-[100px] rounded-full pointer-events-none" />
      
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="relative max-w-[1800px] mx-auto min-h-[95vh] flex items-center pt-32 md:pt-40 pb-20 px-6 md:px-12 lg:px-16 w-full z-50">
      {/* Decorative floating icon background */}
      <div className="absolute top-[20%] right-[10%] opacity-20 dark:opacity-40 animate-bounce delay-700 pointer-events-none">
        <Rocket className="w-12 h-12 text-teal-500" />
      </div>
      <div className="absolute bottom-[25%] left-[5%] opacity-10 dark:opacity-30 animate-pulse pointer-events-none">
        <Sparkles className="w-10 h-10 text-blue-500" />
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24 w-full">
        <div className="lg:w-[55%] flex flex-col justify-center text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-sm font-semibold mb-8 w-fit mx-auto lg:mx-0"
          >
            <Star className="w-4 h-4 fill-current" />
            Leading ERP Solution across India
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight text-gray-900 dark:text-white mb-8 leading-[1.05]">
            Custom ERP & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-500 to-blue-500 animate-gradient">
              Business Process
            </span> <br />
            Automation for You
          </h1>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            <p className="font-medium">
              Transform your business with intelligent software systems. From lead management to production and automated reporting — we build the systems that drive <span className="text-teal-600 dark:text-teal-400 font-bold italic">Exponential Growth.</span>
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start relative z-50">
            <Link 
              href="/contactus" 
              className="group relative z-50 px-10 py-5 rounded-2xl bg-teal-600 text-white font-bold transition-all shadow-xl shadow-teal-500/40 hover:scale-105 hover:bg-teal-700 flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">Get Started Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:animate-shimmer" />
            </Link>
            
            <Link 
              href="/services" 
              className="group relative z-50 px-10 py-5 rounded-2xl border-2 border-slate-200 dark:border-white/10 hover:border-teal-500/50 text-gray-900 dark:text-white font-bold transition-all hover:bg-slate-50 dark:hover:bg-white/5 flex items-center justify-center gap-2"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              {[
                { name: "Amul", src: "/Clientlogo/Logo/AMUL.png" },
                { name: "L&T", src: "/Clientlogo/Logo/L&T.png" },
                { name: "Duke", src: "/Clientlogo/Logo/DukeLogos.png" },
                { name: "Aditya", src: "/Clientlogo/Logo/ADITYA.png" },
              ].map((company, i) => (
                <div key={company.name} className="w-10 h-10 rounded-full border-2 border-white dark:border-neutral-900 bg-white shadow-sm overflow-hidden flex items-center justify-center p-1 z-[2] hover:z-10 transition-all hover:scale-105">
                  <img 
                    src={company.src} 
                    alt={company.name}
                    className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-white dark:border-neutral-900 bg-teal-500 shadow-md flex items-center justify-center text-white text-xs font-black z-[1]">
                150+
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold leading-tight">
              Trusted by <span className="text-teal-600 dark:text-teal-400 font-black">150+ Companies</span> <br /> 
              <span className="text-xs opacity-70">including Industry Leaders</span>
            </p>
          </div>
        </div>

        <div className="lg:w-[45%] flex justify-center items-center relative">
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="relative z-20 w-full"
          >
            {/* Background platform for the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-blue-500/20 blur-[80px] rounded-full opacity-60 animate-pulse" />
            <Image
              src="/Hometest.png"
              alt="Delta Infosoft Dashboard"
              width={1000}
              height={800}
              className="object-contain relative z-20 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform hover:scale-105 duration-700"
              priority
            />
          </motion.div>
          {/* Decorative bits around the image */}
          <div className="absolute -top-10 -right-5 w-32 h-32 bg-yellow-400/10 blur-[50px] rounded-full" />
          <div className="absolute -bottom-10 -left-5 w-40 h-40 bg-blue-400/10 blur-[60px] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -15,
        scale: 1.02,
      }}
      key={product.title}
      className="group/product h-[22rem] w-[35rem] md:h-96 md:w-[40rem] relative flex-shrink-0 bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden border-2 border-slate-200/60 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-2xl hover:shadow-teal-500/20 hover:border-teal-500/50 transition-all duration-500"
    >
      {/* Top Colorful Accent Line */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-teal-400 to-blue-500 z-30 opacity-80" />

      <Link
        href={product.link}
        className="block h-full w-full relative"
      >
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          className="object-cover object-center absolute inset-0 h-full w-full saturate-[1.1] transition-all duration-700 group-hover/product:scale-105 group-hover/product:saturate-[1.5] group-hover/product:contrast-[1.1] group-hover/product:brightness-[1.1]"
          alt={product.title}
        />
        {/* Subtle Shine Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/product:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/product:opacity-100 transition-opacity duration-500" />
      </Link>
      
      {/* Enhanced Title Tag */}
      <div className="absolute bottom-10 left-10 z-20 translate-y-4 opacity-0 group-hover/product:translate-y-0 group-hover/product:opacity-100 transition-all duration-500">
        <h2 className="text-white text-lg font-bold bg-teal-600/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-white/20">
          {product.title}
        </h2>
      </div>
    </motion.div>
  );
};