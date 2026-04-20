"use client"
import React from 'react'
import Image from 'next/image'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import RetroGrid from '@/components/magicui/retro-grid'
import { CheckIcon, Briefcase, FileText, Layout, HardHat, Receipt, Calculator, BarChart4, Handshake, Users, Wallet, ClipboardList } from 'lucide-react'
import { motion } from "framer-motion"

import solution from "../../../../public/SolutionHeroscreen/Construction.png"
import AccountandF from "../../../../public/construction/Account And Finance.png"
import BOQ from "../../../../public/construction/BOQ Planning to Procurement.png"
import Finance from "../../../../public/construction/Finance.png"
import ProjectPlanning from "../../../../public/construction/Project Planning & Management.png"
import ProjectWiseBudget from "../../../../public/construction/Project Wise Budget Vs Actual.png"
import Purchase from "../../../../public/construction/Purchase Processing.png"
import RABills from "../../../../public/construction/RA bill.png"
import SiteActivity from "../../../../public/construction/Site Activity.png"
import SubContract from "../../../../public/construction/Sub-contract Management.png"
import Tendring from "../../../../public/construction/Tendering Management.png"
import WorkOrder from "../../../../public/construction/Work Order Processing.png"

const page = () => {

  const words = `A specialized system to manage contract based projects, sub contracts, inspections, and approval stage-wise payments. It supports unique requirements for large-scale and government projects like EMD, tendering, and bidding.`;

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
      title: "Tendering Management",
      image: Tendring,
      icon: <FileText className="w-8 h-8" />,
      features: ["EMD Management", "Technical Bid Details", "Price Comparison", "Tender Tracking", "Contract Awarding", "Bidding Analysis"]
    },
    {
      title: "BOQ Planning",
      image: BOQ,
      icon: <Layout className="w-8 h-8" />,
      features: ["Material Estimation", "Labor Costing", "Overhead Allocation", "Rate Analysis", "BOQ Variance Tracking", "Resource Mapping"]
    },
    {
      title: "Work Order Processing",
      image: WorkOrder,
      icon: <ClipboardList className="w-8 h-8" />,
      features: ["Order Generation", "Scheduling", "Contractor Assignment", "Timeline Management", "Approval Workflow"]
    },
    {
      title: "Site Activity",
      image: SiteActivity,
      icon: <HardHat className="w-8 h-8" />,
      features: ["Daily Progress Report (DPR)", "Labor Attendance", "Equipment Log Book", "Safety Compliance", "Site Documentation"]
    },
    {
      title: "RA Bills Management",
      image: RABills,
      icon: <Receipt className="w-8 h-8" />,
      features: ["Running Account Billing", "Measurement Book (MB) Entry", "Retention Money Tracking", "Stage Completion Proof", "Client Approval"]
    },
    {
      title: "Project Accounting",
      image: ProjectPlanning,
      icon: <Calculator className="w-8 h-8" />,
      features: ["Budget vs Actual", "Project Profitability", "Expense Tracking", "Resource Costing", "Financial Forecasting"]
    },
    {
      title: "Budget Management",
      image: ProjectWiseBudget,
      icon: <BarChart4 className="w-8 h-8" />,
      features: ["Cost Head Control", "Allocation Logic", "Limit Alerts", "Variance Reporting", "Multi-Project Comparison"]
    },
    {
      title: "Sub-contract Management",
      image: SubContract,
      icon: <Handshake className="w-8 h-8" />,
      features: ["Sub-contractor Agreements", "Payment Tracking", "Quality Audit", "Work Verification", "Retention Handling"]
    },
    {
      title: "Purchase Processing",
      image: Purchase,
      icon: <Briefcase className="w-8 h-8" />,
      features: ["Material Sourcing", "Vendor Comparison", "PO Generation", "Inventory Management", "Logistics Tracking"]
    },
    {
      title: "Financial Accounting",
      image: Finance,
      icon: <Wallet className="w-8 h-8" />,
      features: ["General Ledger", "Taxation (GST/TDS)", "Billing Control", "Receivable/Payable", "Statutory Reporting"]
    },
    {
      title: "HR & Payroll",
      image: AccountandF,
      icon: <Users className="w-8 h-8" />,
      features: ["Staff Management", "Site Labor Payroll", "Attendance Integration", "Salary Reports", "Compliance Docs"]
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
                Construction & Contracting
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-500 opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </motion.h1>

            <div className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              <TextGenerateEffect words={words} className="text-lg md:text-xl font-normal text-gray-600 dark:text-gray-300" />
            </div>
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
                src={solution}
                alt="Construction ERP"
                width={600}
                height={600}
                className="w-full h-auto rounded-xl shadow-2xl skew-y-2 transform transition-all duration-700 hover:skew-y-0 hover:scale-[1.02] hover:shadow-teal-500/20"
                priority
              />
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
            iERP for <span className="text-teal-500">Construction & Contracting</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive modules designed to optimize every aspect of your construction projects and contracting operations.
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
