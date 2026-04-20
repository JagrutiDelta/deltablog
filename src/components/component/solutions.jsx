"use client"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ArrowRight, MoveDown, MoveUp, Boxes, Zap, ShieldCheck } from "lucide-react"

// Import all images
import Iaccount from "../../../public/Frame 22115Iaccount.png"
import GateModule from "../../../public/Group 22239GateMOdule.png"
import MyTIme from "../../../public/Group 22269MYtime.png"
import Attendance from "../../../public/ProductLogo/Attendance.png"
import Barcode from "../../../public/ProductLogo/Barcode.png"
import BigData from "../../../public/ProductLogo/Delta BigData.png"
import Ivendor from "../../../public/ProductLogo/Delta iVendor Connect.png"
import IOT from "../../../public/ProductLogo/IOT.png"
import Inventry from "../../../public/ProductLogo/Inventory.png"
import LabhCart from "../../../public/ProductLogo/Labhcart.png"
import PPC from "../../../public/ProductLogo/PPC.png"
import IDealer from "../../../public/ProductLogo/iDealer.png"
import Istock from "../../../public/ProductLogo/iStock.png"
import ierp from "../../../public/iERP.png"
import icrm from "../../../public/ProductLogo/CrmLogo.png"

export function Solutions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const savedState = sessionStorage.getItem("showMoreSolutions");
    if (savedState === "true") {
      setShow(true);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("showMoreSolutions", show);
  }, [show]);


  const allSolutions = [
    {
      title: "Inventory Management",
      description: "Optimize stock levels, reduce waste, and ensure timely replenishments with precision.",
      image: GateModule,
      link: "/solutions/GateModule",
      tag: "Operations"
    },
    {
      title: "Finance Management",
      description: "Master your general ledger, accounts payable, and accounts receivable with ease.",
      image: Iaccount,
      link: "/solutions/iAccount",
      tag: "Financial"
    },
    {
      title: "Human Capital Management",
      description: "Employee records and self-service portals designed for a modern, efficient workforce.",
      image: MyTIme,
      link: "/solutions/MyTime",
      tag: "HR Tech"
    },
    {
      title: "Efficient Stock Control",
      description: "Streamline inventory tracking, management, and control for businesses of all sizes.",
      image: Istock,
      link: "/solutions/iStock",
      tag: "Logistics"
    },
    {
      title: "Custom iERP Solution",
      description: "Streamline your business operations and enhance efficiency across all departments.",
      image: ierp,
      link: "/solutions/iERP",
      tag: "Enterprise"
    },
    {
      title: "Integrated iCRM",
      description: "Manage your customer relationships, track leads, and boost your sales performance.",
      image: icrm,
      link: "/solutions/iCRM",
      tag: "Sales"
    },
    {
        title: "Effortless Attendance",
        description: "Comprehensive software designed to optimize workforce attendance tracking.",
        image: Attendance,
        link: "/solutions/iAttendance",
        tag: "HR Tech"
      },
      {
        title: "Precision Barcode",
        description: "Enhances inventory and warehouse management with advanced barcode technology.",
        image: Barcode,
        link: "/solutions/Barcode",
        tag: "Tech"
      },
      {
        title: "Actionable Big Data",
        description: "Efficiently handles large volumes of data to deliver valuable business insights.",
        image: BigData,
        link: "/solutions/BigData",
        tag: "Insights"
      },
      {
        title: "Supply Chain iVendor",
        description: "Streamline communication and collaboration with vendors and partners.",
        image: Ivendor,
        link: "/solutions/iVendor",
        tag: "Supply Chain"
      },
      {
        title: "Delta Industrial IoT",
        description: "Solution designed to revolutionize the way you connect, control, and optimize.",
        image: IOT,
        link: "/solutions/IOT",
        tag: "Industry 4.0"
      },
      {
        title: "Master Inventory",
        description: "Optimizes inventory management with cutting-edge tracking technology.",
        image: Inventry,
        link: "/solutions/Deltainventry",
        tag: "Logistics"
      }
  ];

  const visibleSolutions = show ? allSolutions : allSolutions.slice(0, 6);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-white dark:bg-neutral-950">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/5 blur-[120px] rounded-full -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -ml-40 -mb-40" />

      <div className="max-w-[1700px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-24 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800 mb-6"
          >
            <Boxes size={14} className="text-teal-600 dark:text-teal-400" />
            <span className="text-teal-700 dark:text-teal-400 font-black uppercase tracking-[0.2em] text-[10px]">Product Ecosystem</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-[0.9] mb-8">
            Our Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Solutions</span>
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
            Delta’s ecosystem is a collection of high-performance technical pillars designed to automate, scale, and secure your entire business operation from a single source of truth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {visibleSolutions.map((solution, index) => (
              <motion.div
                layout
                key={solution.title}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05, duration: 0.6, ease: "circOut" }}
              >
                <Link
                  href={solution.link}
                  className="group relative block p-10 h-full rounded-[3.5rem] bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-100 dark:border-neutral-800 hover:border-teal-500/50 hover:bg-white dark:hover:bg-neutral-900 transition-all duration-500 shadow-sm hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.05)] overflow-hidden"
                >
                  {/* Tag */}
                  <div className="absolute top-10 right-10">
                    <span className="px-3 py-1 rounded-full bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 text-[10px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-teal-500 transition-colors">
                      {solution.tag}
                    </span>
                  </div>

                  <div className="flex flex-col h-full">
                    <div className="mb-10 w-24 h-24 rounded-[2rem] bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 flex items-center justify-center p-5 group-hover:scale-110 transition-transform duration-700 group-hover:border-teal-500/30 shadow-sm">
                      <Image
                        src={solution.image}
                        className="object-contain"
                        alt={solution.title}
                      />
                    </div>

                    <div className="space-y-4 flex-grow">
                      <h3 className="text-2xl font-black text-gray-900 dark:text-white leading-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                        {solution.description}
                      </p>
                    </div>

                    <div className="pt-10 mt-auto flex items-center gap-2 text-sm font-black uppercase tracking-widest text-teal-600 dark:text-teal-400 group-hover:gap-4 transition-all">
                      Deploy Insight
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-20">
          <button
            onClick={() => setShow(!show)}
            className="group relative px-10 py-5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-black text-lg rounded-full flex items-center gap-4 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
          >
            {show ? "Collapse Ecosystem" : "Explore More Solutions"}
            {show ? (
              <MoveUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            ) : (
              <MoveDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            )}
            
            {/* Subtle glow effect on button hover */}
            <div className="absolute inset-0 rounded-full bg-teal-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </section>
  );
}
