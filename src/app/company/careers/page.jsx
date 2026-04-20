"use client"
import React, { useState } from 'react'
import Link from "next/link"
import Image from 'next/image'
import Career from "../../../../public/Group 22319career.png"
import { CardStack } from '@/components/ui/card-stack';
import Highlight from "@/app/widgets/Highlight"
import { EmployeeBenifit } from '@/components/component/employee-benifit'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import RetroGrid from '@/components/magicui/retro-grid'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, ChevronRight } from 'lucide-react'

export default function CareersPage() {
  const slogan = "Join us in revolutionizing the tech industry"

  const CARDS = [
    {
      id: 0,
      name: "How is the interview process?",
      designation: "",
      content: (
        <p className="text-gray-600 dark:text-gray-300">
          Our process includes <Highlight>initial details check, technical rounds, and culture fit interviews</Highlight>. We value your time and aim to make it transparent.
        </p>
      ),
    },
    {
      id: 1,
      name: "Is there room for growth?",
      designation: "",
      content: (
        <p className="text-gray-600 dark:text-gray-300">
          <Highlight>Absolutely.</Highlight> We believe in internal mobility and provide dedicated budgets for learning and certifications.
        </p>
      ),
    },
    {
      id: 2,
      name: "What about the culture?",
      designation: "",
      content: (
        <p className="text-gray-600 dark:text-gray-300">
          We foster <Highlight>innovation, diversity, and fun</Highlight>. From team outings to hackathons, work is never just about code at Delta.
        </p>
      ),
    },
    {
      id: 3,
      name: "Do you hire interns?",
      designation: "",
      content: (
        <p className="text-gray-600 dark:text-gray-300">
          Yes! Our internship program is designed for <Highlight>hands-on learning</Highlight> with real-world projects and mentorship from senior devs.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden selection:bg-teal-500 selection:text-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <RetroGrid className="absolute inset-0 z-0 h-full w-full opacity-50 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center space-y-6 mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/30 text-sm font-medium text-teal-600 dark:text-teal-400 mb-4 shadow-sm">
            We Are Hiring
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white">
            Build Your <span className="text-teal-500">Future</span>
          </h1>
          <div className="max-w-[1800px] mx-auto">
            <div className="scale-90 md:scale-100">
              <TextGenerateEffect words={slogan} className="text-center" />
            </div>
          </div>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 mx-auto leading-relaxed">
            Join a team of passionate innovators dedicated to creating cutting-edge solutions that drive global change.
          </p>
          <div className="pt-8">
            <Link
              target="_blank"
              href="https://deltainfosoft.zohorecruit.in/jobs/Careers"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-500/30 transform hover:-translate-y-1"
            >
              View Openings
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="space-y-32 pb-24 w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">

        {/* Featured Image Section */}
        <section className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
              <Image
                src={Career}
                alt="Team collaborating"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                Why Join <span className="text-teal-600">Delta?</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We don't just write code; we solve real-world problems. At Delta Infosoft, you'll work on challenging projects, collaborate with smart minds, and enjoy a culture that values work-life balance and continuous learning.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  'Global Client Exposure',
                  'Modern Tech Stack',
                  'Mentorship & Training',
                  'Flexible Work Culture'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              Perks & <span className="text-teal-600">Benefits</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">Everything you need to thrive personally and professionally.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-3xl p-4 sm:p-8 border border-gray-100 dark:border-gray-800 shadow-xl">
            <EmployeeBenifit />
          </div>
        </section>

        {/* Testimonials Video */}
        <section className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hear From <span className="text-teal-600">Our Team</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">Real stories from the people who make Delta Infosoft keen.</p>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 group">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/eUYAbqaNzto?si=hdwjXQBj-8xjtkjr&loop=1&playlist=eUYAbqaNzto"
              title="Employee Testimonials"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* FAQ Section */}
      <section className="py-24 px-4 md:px-6 lg:px-8 relative overflow-hidden bg-gray-50/50 dark:bg-neutral-950/50">
        <div className="max-w-[1800px] mx-auto relative z-10">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-teal-500/5 blur-[120px] pointer-events-none" />

          <div className="text-center mb-16 space-y-4 relative">
            <div className="inline-flex items-center justify-center p-2 rounded-xl bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mb-2">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              Common <span className="text-teal-600">Questions</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
              Clear answers to help you navigate your journey with Delta Infosoft.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4 relative z-10">
            {CARDS.map((card, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`} 
                className="border-none group overflow-hidden"
              >
                <AccordionTrigger className="flex gap-4 px-6 py-6 text-left text-xl font-bold bg-white dark:bg-gray-900/40 backdrop-blur-md border border-gray-100 dark:border-gray-800 rounded-2xl hover:no-underline hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/10 transition-all data-[state=open]:border-teal-500/50 data-[state=open]:bg-teal-50/30 dark:data-[state=open]:bg-teal-900/10">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform">
                    <span className="text-sm font-black">0{i + 1}</span>
                  </div>
                  <span className="flex-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {card.name}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-gray-100 dark:border-gray-800 flex items-center justify-center group-hover:border-teal-500/50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-gray-400 group-data-[state=open]:rotate-90 group-data-[state=open]:text-teal-500 transition-all" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-16 pt-2 pb-8 text-lg text-gray-600 dark:text-gray-400 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  {card.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-950/20 dark:to-blue-950/20 border border-teal-100/50 dark:border-teal-900/30 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
              <HelpCircle className="w-24 h-24 text-teal-600" />
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 relative z-10">
              Still have questions? Reach out to our HR team at{' '}
              <a href="mailto:hr@deltainfosoft.com" className="text-teal-600 hover:text-teal-700 underline font-bold transition-colors">
                hr@deltainfosoft.com
              </a>
            </p>
          </div>
        </div>
      </section>

      </div>
    </div>
  )
}
