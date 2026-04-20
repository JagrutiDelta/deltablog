"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import strategy from "../../public/strategystrategy.png"
import braning from "../../public/marketingmarketing.png"
import dev from "../../public/developmentdev.png"
import webd from "../../public/designdesign.png"
import { HeroParalla } from "./widgets/heroScreen";
import media from "../../public/socialmedia.png"
import ECOM from "../../public/ecommerceecom.png"
import { MarqueeDemo } from "./widgets/Reviews";
import weLesds from "../../public/We leads.gif";
import AnimatedGridPatternDemo from "./widgets/Grid-Pattern";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import WatermanReview from "@/components/component/WatermanReview"
import { SparklesCore } from "../components/ui/sparkles";
import CustomerStory from "@/components/component/customer-story";
import NumberTicker from "@/components/magicui/number-ticker";
import { Solutions } from "@/components/component/solutions";
import { Partners } from "./widgets/Partners";
import { motion } from "framer-motion";
import { Visiongrid } from "@/components/component/visiongrid";



export default function Home() {

  // JSON-LD Schema for LocalBusiness and SoftwareCompany
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["SoftwareCompany", "LocalBusiness"],
    "name": "Delta Infosoft Pvt Ltd",
    "description": "Delta Infosoft Pvt Ltd is a software development company based in Ahmedabad, Gujarat, India. We provide ERP software, CRM solutions, Zoho CRM implementation and custom business automation software for small and mid-size businesses.",
    "url": "https://deltainfosoft.com",
    "logo": "https://deltainfosoft.com/logo.png",
    "image": "https://deltainfosoft.com/og-image.png",
    "telephone": "+91-79-40084600",
    "email": "info@deltainfosoft.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Delta House, Near Rajpath Club",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380054",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.0225",
      "longitude": "72.5714"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "23.0225",
        "longitude": "72.5714"
      },
      "geoRadius": "50000"
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/delta-infosoft",
      "https://www.facebook.com/deltainfosoft"
    ],
    "founder": {
      "@type": "Person",
      "name": "Delta Infosoft Team"
    },
    "foundingDate": "2011",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "50"
    },
    "slogan": "Innovative Software Solutions for Modern Businesses",
    "knowsAbout": [
      "ERP Software",
      "CRM Software",
      "Zoho CRM Implementation",
      "Custom Software Development",
      "Business Automation",
      "Web Development",
      "Mobile App Development"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "ERP Software Development",
          "description": "Custom ERP solutions for manufacturing, trading, and service industries"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "CRM Software Solutions",
          "description": "Customer relationship management software and Zoho CRM implementation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Software Development",
          "description": "Tailored software solutions for business automation and digital transformation"
        }
      }
    ]
  };

  const projects = [

    {
      title: "Strategy",
      description:
        "Focuses on delivering scalable, integrated solutions that enhance efficiency, user experience, and business value for clients.",
      link: "#",
      image: strategy.src,
      feature: ""
    },
    {
      title: "Product Design",
      description:
        "Designing visually appealing, user-friendly, and responsive products that provide an optimal user experience.",
      link: "#",
      image: webd.src,
      feature: ""
    },
    {
      "title": "APP Development",
      "description": "Creating a unique identity in form of Applications for a product or company through consistent theme, messaging, and visual elements.",
      "link": "#",
      "image": dev.src,
      "feature": ""
    }
    ,
    {
      title: "WEB Development",
      description:
        "Building and maintaining web applications through systematic planning, innovation, and implementation of effective strategies.",
      link: "#",
      image: dev.src,
      feature: ""
    },

    {
      title: "Third party Integration",
      description:
        "Seamlessly integrating third-party services to enhance functionality and user experience.",
      link: "#",
      image: media.src,
      feature: ""
    },
    {
      title: "Ecommerce",
      description:
        "Enabling the buying and selling of goods and services online, offering convenience, a wide selection, and seamless transactions.",
      link: "#",
      image: ECOM.src,
      feature: ""
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-visible">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* SEO Content Section - Hidden but crawlable */}
      <section className="sr-only">
        <h1>Software Development Company in Ahmedabad – Delta Infosoft Pvt Ltd</h1>
        <p>
          Delta Infosoft Pvt Ltd is a software development company based in Ahmedabad, Gujarat, India.
          We provide ERP software, CRM solutions, Zoho CRM implementation and custom business automation
          software for small and mid-size businesses.
        </p>
      </section>

      {/* Hero */}
      <section className="w-full">
        <HeroParalla />
      </section>

      {/* Subtle animated background divider */}
      <section className="w-full px-3 md:px-6 lg:px-8">
        <div className="max-w-[1800px] mx-auto">
          <AnimatedGridPatternDemo />
        </div>
      </section>

      {/* Stats */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white">
              Trusted by the World’s Leading <span className="text-teal-500">Companies</span>
            </h2>
            <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-400 font-medium">
              As we continue to grow, our numbers speak for themselves. Take a look at our impressive statistics.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: 150, label: 'Total Clients', suffix: '+' },
              { value: new Date().getFullYear() - 2011, label: 'Years of Experience', suffix: '+' },
              { value: 400, label: 'Softwares Built', suffix: '+' },
              { value: 98, label: 'Retention Ratio', suffix: '%' },
            ].map(({ value, label, suffix }, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/40 backdrop-blur shadow-sm hover:shadow-lg hover:border-teal-500/30 transition"
              >
                <p className="text-5xl md:text-6xl font-extrabold text-teal-500">
                  <NumberTicker value={value} />
                  {suffix}
                </p>
                <p className="mt-4 text-sm md:text-base font-medium text-gray-600 dark:text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Founder Vision */}
      <Visiongrid />

      {/* Solutions */}
      <Solutions />

      {/* Why Choose Delta */}
      <section className="relative w-full mt-10 overflow-hidden rounded-none bg-neutral-950">
        <div className="w-full absolute inset-0 h-[70rem]">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.8}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#14b8a6"
          />
        </div>

        <div className="relative max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:max-w-2xl">
              <p className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
                Why Choose Delta?
              </p>
              <p className="mt-6 text-lg md:text-xl text-neutral-300 leading-relaxed font-medium">
                We are ready to start <span className="text-teal-400 font-semibold shadow-teal-500/20 shadow-sm"><em>solving challenges</em></span> before they become{" "}
                <span className="text-teal-400 font-semibold shadow-teal-500/20 shadow-sm"><em>problems.</em></span>
              </p>
            </div>
            <div className="w-full lg:w-auto flex justify-center relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-teal-500 rounded-full blur-[120px] opacity-70 dark:opacity-0 pointer-events-none" />
              <Image
                src={weLesds.src}
                alt="Why Choose Delta"
                width={750}
                height={750}
                quality={100}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="w-full py-16 md:py-24 border-t border-gray-200 dark:border-neutral-800">
        <div className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              What Our <span className="text-teal-500">Exponential Growth</span> Partners Say
            </h2>
          </div>
          <div className="px-0 md:px-6">
            <WatermanReview />
          </div>
          <div className="mt-8">
            <MarqueeDemo />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="w-full">
        <Partners />
      </section>

      {/* Services Section */}
      <section className="w-full py-20 md:py-32 bg-neutral-50/50 dark:bg-neutral-950/20 relative overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-[1700px] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col items-center text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-teal-700 dark:text-teal-400 font-bold uppercase tracking-widest text-[10px]">What we do</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter mb-8 leading-[0.9]">
              Services We <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Provide</span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
              We leverage cutting-edge technology and years of expertise to deliver robust, scalable, and tailored software solutions that drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              { 
                title: "Digital Strategy", 
                desc: "Strategic roadmaps designed to help tech companies scale efficiently and drive long-term business value.", 
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                color: "teal"
              },
              { 
                title: "UI / UX Design", 
                desc: "Creating visually stunning and intuitive user interfaces that emphasize usability and brand consistency.", 
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
                color: "blue"
              },
              { 
                title: "App Development", 
                desc: "Robust mobile and desktop applications built with the latest frameworks to ensure high performance and security.", 
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
                color: "emerald"
              },
              { 
                title: "Web Engineering", 
                desc: "Custom web applications and full-stack development that integrate seamlessly with your existing infrastructure.", 
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
                color: "indigo"
              },
              { 
                title: "Cloud & Integration", 
                desc: "Secure third-party API integrations and cloud infrastructure management for optimized business operations.", 
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
                color: "sky"
              },
              { 
                title: "E-Commerce Solutions", 
                desc: "Comprehensive online shopping platforms with secure payment gateways and advanced inventory management.", 
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>,
                color: "teal"
              },
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: "circOut" }}
                className="group relative p-12 rounded-[3.5rem] bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_80px_rgba(20,184,166,0.1)] hover:-translate-y-3 transition-all duration-700 overflow-hidden"
              >
                {/* Accent Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent dark:from-teal-500/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="mb-10 w-24 h-24 rounded-3xl bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all duration-700 shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>

                {/* Corner Decorative Element */}
                <div className="absolute top-0 right-0 p-8 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="w-8 h-8 border-t-2 border-r-2 border-teal-500/30" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Service Links - Ahmedabad Focus */}
      <section className="w-full py-20 md:py-32 bg-neutral-50/30 dark:bg-neutral-950/40 relative overflow-hidden">
        {/* Background Decorative Map-Inspired Element */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-5 dark:opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[2px] border-teal-500 rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-[1px] border-blue-500 rounded-full" />
        </div>

        <div className="max-w-[1700px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="flex flex-col items-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-teal-700 dark:text-teal-400 font-bold uppercase tracking-widest text-[10px]">Localized Expertise</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-[0.9] mb-8">
              Our Expertise in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Ahmedabad</span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl leading-relaxed font-medium">
              We understand the local business landscape in Ahmedabad and Gujarat, providing tailored software solutions that help businesses dominate their respective markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "ERP Software Company in Ahmedabad",
                desc: "Custom ERP solutions designed for manufacturing, trading, and service industries across Gujarat. Streamline operations with our proven systems.",
                link: "/erp-software-ahmedabad",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                color: "teal",
                gradient: "from-teal-500/20 to-emerald-500/20"
              },
              {
                title: "CRM Software Company in Ahmedabad",
                desc: "Boost your sales with powerful CRM solutions tailored for Ahmedabad businesses. Lead management, sales automation, and more.",
                link: "/crm-software-ahmedabad",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                color: "purple",
                gradient: "from-purple-500/20 to-pink-500/20"
              },
              {
                title: "Zoho CRM Implementation Partner",
                desc: "Certified Zoho CRM partner in Ahmedabad. Expert setup, customization, and training for seamless CRM adoption and ROI.",
                link: "/zoho-crm-implementation-ahmedabad",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                ),
                color: "red",
                gradient: "from-red-500/20 to-orange-500/20"
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8, ease: "circOut" }}
              >
                <Link
                  href={item.link}
                  className="group relative block p-12 h-full rounded-[4rem] bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] hover:-translate-y-3 transition-all duration-700 overflow-hidden"
                >
                  {/* Subtle Inner Gradient Accent */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-10 w-24 h-24 rounded-[2rem] bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center transition-all duration-700 group-hover:bg-neutral-900 dark:group-hover:bg-white text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-gray-900">
                      {item.icon}
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6 leading-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-all">
                      {item.title}
                    </h3>
                    <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="inline-flex items-center text-sm font-black uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400 group-hover:gap-4 gap-2 transition-all">
                      Read Strategy
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Journey */}
      <section className="w-full py-16 md:py-24 bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
        <div className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-teal-500">
              Client Journey
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-gray-600 dark:text-neutral-400">
              Hear from our customers about how our platform has helped them succeed.
            </p>
          </div>
          <CustomerStory />
        </div>
      </section>
    </main>);
}

