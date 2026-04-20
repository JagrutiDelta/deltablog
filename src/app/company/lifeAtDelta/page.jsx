"use client"
import React from 'react'
import { LifeAtDelta } from '@/components/component/LifeAtDelta'
import { CarouselLife } from '@/components/component/carousel-life'
import { EmployeeBenifit } from '@/components/component/employee-benifit'
import { TeamSpirit } from '@/components/component/team-spirit'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import RetroGrid from '@/components/magicui/retro-grid'

const LifeAtDeltaPage = () => {
    const slogan = "Where innovation meets culture"

    return (
        <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden selection:bg-teal-500 selection:text-white">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
                <RetroGrid className="absolute inset-0 z-0 h-full w-full opacity-50 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-6 mb-16">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/30 text-sm font-medium text-teal-600 dark:text-teal-400 mb-4 shadow-sm">
                        Our Culture
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Life at <span className="text-teal-500">Delta</span>
                    </h1>
                    <div className="max-w-4xl mx-auto">
                        <div className="scale-90 md:scale-100">
                            <TextGenerateEffect words={slogan} className="text-center" />
                        </div>
                    </div>
                </div>

                {/* Intro Content (LifeAtDelta Component) */}
                <div className="relative z-10 mt-12">
                    <LifeAtDelta />
                </div>
            </section>

            {/* Sections Wrapper */}
            <div className="space-y-24 pb-24">

                {/* Team Spirit Section */}
                <section className="relative w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 md:p-12">
                        <TeamSpirit />
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="relative w-full overflow-hidden">
                    <CarouselLife />
                </section>

                {/* Benefits Section */}
                <section className="relative w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
                    <EmployeeBenifit />
                </section>

            </div>
        </div>
    )
}

export default LifeAtDeltaPage
