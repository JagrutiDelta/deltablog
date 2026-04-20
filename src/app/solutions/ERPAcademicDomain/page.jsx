"use client"
import React from 'react'
import Image from 'next/image'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import RetroGrid from '@/components/magicui/retro-grid'
import { CheckIcon, GraduationCap, Users, MessageSquare, CalendarCheck, CreditCard, ShieldCheck, Smartphone, PencilLine, UserPlus } from 'lucide-react'
import { motion } from "framer-motion"

import solution from "../../../../public/edu.png"
import Addmission from "../../../../public/Education/Addmission.png"
import attendance from "../../../../public/Education/attendance.png"
import communication from "../../../../public/Education/communication.png"
import fees from "../../../../public/Education/fees.png"
import iexam from "../../../../public/Education/iexam.png"
import information from "../../../../public/Education/information.png"
import parent from "../../../../public/Education/parents mobile app.png"
import payment from "../../../../public/Education/payment.png"
import security from "../../../../public/Education/security.png"

const page = () => {

  const words = `An interactive system for management and students to digitize all academic transactions. It streamlines staff management, fee payments, time table creation, attendance, and examination workflows.`;

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
      title: "Admissions Management",
      image: Addmission,
      icon: <UserPlus className="w-8 h-8" />,
      features: ["Online Application Hub", "Enrollment Monitoring", "Waiting List Automation", "Seamless Grade Migration", "No Re-entry Onboarding"]
    },
    {
      title: "Student Information",
      image: information,
      icon: <Users className="w-8 h-8" />,
      features: ["360° Student Profile", "Demographic Tracking", "Blended Family Situations", "Emergency Contact Database", "Authorized Pickup Control"]
    },
    {
      title: "Parent Communication",
      image: communication,
      icon: <MessageSquare className="w-8 h-8" />,
      features: ["Dynamic Announcement Lists", "Direct Parent Messaging", "Point-and-Click Notice", "Staff-Parent Synergy", "Event Notifications"]
    },
    {
      title: "Attendance tracking",
      image: attendance,
      icon: <CalendarCheck className="w-8 h-8" />,
      features: ["Classroom Digital Register", "Instant Office reporting", "Parental Leave Requests", "Teacher Approval Workflow", "Absence Alerts"]
    },
    {
      title: "Fees Management",
      image: fees,
      icon: <CreditCard className="w-8 h-8" />,
      features: ["Charge Creation (Term/Lunch)", "Online Payment History", "Recurring Tuition Plans", "One-Click Invoicing", "Auto-Balance Updates"]
    },
    {
      title: "Security & Hosting",
      image: security,
      icon: <ShieldCheck className="w-8 h-8" />,
      features: ["Safe & Personalized Master", "Local Server Hosting", "Data Privacy Encryption", "Role-based Access Control", "Activity Auditing"]
    },
    {
      title: "Parent Mobile App",
      image: parent,
      icon: <Smartphone className="w-8 h-8" />,
      features: ["Real-time Grades & HW", "Interactive School Calendar", "Fee Balance Viewer", "Direct Resource Access", "Push Notifications"]
    },
    {
      title: "iExam Portal",
      image: iexam,
      icon: <PencilLine className="w-8 h-8" />,
      features: ["Entrance Exam Module", "Online Video Test Support", "Digital Grading System", "Academic Progress Reports", "Question Bank System"]
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
                Academic Domain
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
                alt="Academic ERP"
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
            iERP for the <span className="text-teal-500">Academic Domain</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A specialized system designed to bridge the gap between management, educators, and students through digital excellence.
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
