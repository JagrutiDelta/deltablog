"use client"
import React, { useRef } from 'react'
import service from "../../../../public/eng.png"
import Image from 'next/image'
import Link from 'next/link'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import RetroGrid from '@/components/magicui/retro-grid'
import { CheckIcon, PenIcon, Trophy, Box, ShoppingCart, BarChart3, Factory, ClipboardCheck, Truck, Wallet, Megaphone, Wrench, Users, Store, Calendar, FileClock } from 'lucide-react'
import { motion } from "framer-motion"

import dnd from "../../../../public/EngineeringSolutiton/Engineering/1 d and d.png"
import inventory from "../../../../public/EngineeringSolutiton/Engineering/2 inventory.png"
import procurement from "../../../../public/EngineeringSolutiton/Engineering/3 procurement.png"
import sales from "../../../../public/EngineeringSolutiton/Engineering/4 sales.png"
import planning from "../../../../public/EngineeringSolutiton/Engineering/5 planning.png"
import production from "../../../../public/EngineeringSolutiton/Engineering/6 Production.png"
import quality from "../../../../public/EngineeringSolutiton/Engineering/7 Quality.png"
import dispatch from "../../../../public/EngineeringSolutiton/Engineering/8 dispatch.png"
import account from "../../../../public/EngineeringSolutiton/Engineering/9 account.png"
import marketing from "../../../../public/EngineeringSolutiton/Engineering/10 marketing.png"
import service2 from "../../../../public/EngineeringSolutiton/Engineering/11 service.png"
import hr from "../../../../public/EngineeringSolutiton/Engineering/12 hr.png"
import vendor from "../../../../public/EngineeringSolutiton/Engineering/13 vendor.png"
import dealer from "../../../../public/EngineeringSolutiton/Engineering/14 dealer.png"
import scheduler from "../../../../public/EngineeringSolutiton/Engineering/15 scheduler.png"
import shopscheduler from "../../../../public/EngineeringSolutiton/Engineering/16 shopscheduler.png"
import job from "../../../../public/EngineeringSolutiton/Engineering/17 job work scheduler.png"

const page = () => {

  const words = `iERP is developed to help management in making informed decision, by streamlining internal departments workflow and providing real time information at fingertips.`;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const featureModules = [
    {
      title: "Design & Development",
      image: dnd,
      icon: <PenIcon className="w-8 h-8" />,
      features: ["New Product Master", "Bill Of Material", "Drawing Request Note", "Drawing Change Request Note", "Pattern Request Note", "Customize BOM", "RMC"]
    },
    {
      title: "Inventory / Jobwork",
      image: inventory,
      icon: <Box className="w-8 h-8" />,
      features: ["Min/Max Level", "Reorder Level", "Purchase Requisition", "Material Issue Slip", "Stock Convert Option", "Job-work Outward/Inward", "Job-work Reports", "Multiple Stock Reports"]
    },
    {
      title: "Procurement",
      image: procurement,
      icon: <ShoppingCart className="w-8 h-8" />,
      features: ["Purchase Order Generation", "Auto PO against Shortages", "Pending PO Report", "PO Tracking", "GRN against PO", "Material Inward Report", "Rate Contract", "Transaction History"]
    },
    {
      title: "Sales",
      image: sales,
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Sales Order", "Pending Order reports", "Sales Order Approval", "Sales Order Cancelation", "Proforma Invoice", "Reports"]
    },
    {
      title: "Production",
      image: production,
      icon: <Factory className="w-8 h-8" />,
      features: ["Planning Against Production", "Consumption Report", "Operator/Process/Dept wise reports", "Overdue Production Reports", "Production Efficiency", "Daily Production Reports"]
    },
    {
      title: "Quality",
      image: quality,
      icon: <ClipboardCheck className="w-8 h-8" />,
      features: ["Incoming QC", "Drawing Viewer at QC", "In-Process QC", "CTQ Parameter wise QC", "Gamba Chart", "Multiple QC Reports"]
    },
    {
      title: "Dispatch",
      image: dispatch,
      icon: <Truck className="w-8 h-8" />,
      features: ["Dispatch Schedule", "Sales Order Against Dispatch", "Dispatch Slip Report", "Invoice Prepare", "Invoice Approval", "LR Number Update", "Serial Number Tracking"]
    },
    {
      title: "Account",
      image: account,
      icon: <Wallet className="w-8 h-8" />,
      features: ["Payable / Receivable", "General Ledgers", "Billing", "All Register", "Day Book Report", "Outstanding Aging", "Bank Reconciliation", "GST Reports", "TDS Reports"]
    },
    {
      title: "Marketing",
      image: marketing,
      icon: <Megaphone className="w-8 h-8" />,
      features: ["Project Journey Plan", "Tour Reports [ Daily ]", "Tour Expenses Details", "New Dealer Target Vs Achievement", "Sales Target Vs Achievement", "Collection Target Vs Achievement"]
    },
    {
      title: "Service",
      image: service2,
      icon: <Wrench className="w-8 h-8" />,
      features: ["Complaint Booking", "Corrective and Preventive Action", "Complaint Closer Report", "Replacement and Repairing Details", "Complaint Reports"]
    },
    {
      title: "HR",
      image: hr,
      icon: <Users className="w-8 h-8" />,
      features: ["Employee Management", "Application", "Interview Process", "Joining Process", "Payroll", "Time and Attendance", "Salary Reports", "Statutory reports"]
    },
    {
      title: "Vendor Portal",
      image: vendor,
      icon: <Store className="w-8 h-8" />,
      features: ["Purchase Order", "Pending Order Report", "Rate Contract", "Ledger Report", "Dispatch Entry", "Dispatch Report"]
    },
    {
      title: "Dealer Portal",
      image: dealer,
      icon: <Users className="w-8 h-8" />,
      features: ["Online scheduling", "Appointment management", "Availability management", "Multiple calendars", "Reminders and notifications", "Reporting and analytics"]
    },
    {
      title: "Scheduler Portal",
      image: scheduler,
      icon: <Calendar className="w-8 h-8" />,
      features: ["Purchase Order", "Pending Order Report", "Rate Contract", "Ledger Report", "Dispatch Entry", "Dispatch Report"]
    },
    {
      title: "Shop Schedule",
      image: shopscheduler,
      icon: <FileClock className="w-8 h-8" />,
      features: ["Features for shop floor scheduling and management"]
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 overflow-x-hidden selection:bg-teal-500 selection:text-white font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto min-h-[90vh] flex items-center">
        <RetroGrid className="absolute inset-0 z-0 h-full w-full opacity-50 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/30 text-sm font-medium text-teal-600 dark:text-teal-400 mb-4 shadow-sm backdrop-blur-sm"
            >
              Industry Solution
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
            >
              ERP For <span className="text-teal-500 relative inline-block">
                Engineering
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-500 opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </motion.h1>

            <div className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              <TextGenerateEffect words={words} className="text-lg md:text-xl font-normal text-gray-600 dark:text-gray-300" />
            </div>

            {/* Removed Book Demo button as requested */}
          </div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end relative order-1 lg:order-2"
          >
            <div className="relative rounded-2xl p-4 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 dark:to-transparent backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl">
              <Image
                src={service}
                alt="Engineering Manufacturing ERP"
                width={600}
                height={600}
                className="w-full h-auto rounded-xl shadow-2xl skew-y-2 transform transition-all duration-700 hover:skew-y-0 hover:scale-[1.02] hover:shadow-teal-500/20"
                priority
              />
              {/* Floating Elements for Decoration */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse mix-blend-multiply" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            iERP for <span className="text-teal-500">Engineering Manufacturing</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive modules designed to optimize every aspect of your manufacturing process.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {featureModules.map((item, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="group cursor-pointer relative">
              <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent dark:from-teal-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="p-8 flex flex-col items-center flex-grow relative z-10">
                  <div className="mb-6 p-4 bg-gray-50 dark:bg-neutral-800 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                    <Image className="w-16 h-16 object-contain" src={item.image} alt={item.title} />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{item.title}</h3>
                </div>

                {/* Expandable Content */}
                <div className="bg-gray-50/50 dark:bg-neutral-800/50 p-6 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[500px] transition-all duration-500 ease-in-out border-t border-gray-100 dark:border-neutral-800">
                  <ul className="space-y-3">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                        <CheckIcon className="w-4 h-4 mr-2 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  )
}

export default page
