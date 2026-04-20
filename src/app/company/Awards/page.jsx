"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Duke from "../../../../public/award/Duke.jpeg"
import SM from "../../../../public/award/1.jpeg"
import PM from "../../../../public/award/2.jpeg"
import MG from "../../../../public/award/3.jpeg"
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import RetroGrid from '@/components/magicui/retro-grid'

const AwardsPage = () => {
    const slogan = "Excellence recognized by the industry"

    return (
        <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden selection:bg-teal-500 selection:text-white">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
                <RetroGrid className="absolute inset-0 z-0 h-full w-full opacity-50 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-6 mb-16">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/30 text-sm font-medium text-teal-600 dark:text-teal-400 mb-4 shadow-sm">
                        Our Achievements
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Awards & <span className="text-teal-500">Recognition</span>
                    </h1>
                    <div className="max-w-4xl mx-auto">
                        <div className="scale-90 md:scale-100">
                            <TextGenerateEffect words={slogan} className="text-center" />
                        </div>
                    </div>
                    <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 mx-auto leading-relaxed">
                        Our company has been recognized for our innovative products and exceptional service. Here are some of the milestones we have achieved together.
                    </p>
                </div>
            </section>

            {/* Awards Content */}
            <div className="space-y-24 pb-24 w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">

                {/* Award 1: Service Excellence */}
                <section className="group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-6 order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                                Honoring Excellence in <span className="text-teal-600 dark:text-teal-400">Service</span>
                            </h2>
                            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    In a momentous ceremony, a distinguished member of Delta Infosoft Private Limited is being honored for their exemplary service and contributions to the industry. This heartfelt gesture is a testament to the individual's dedication, hard work, and commitment to excellence.
                                </p>
                                <p>
                                    The event, graced by notable dignitaries, reflects the high esteem in which Delta Infosoft is held. The recognition underscores our impact and the pivotal role played by our team members in driving innovation and growth.
                                </p>
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 group-hover:shadow-teal-500/20 transition-all duration-500 order-1 lg:order-2">
                            <Image
                                src={SM}
                                width={800}
                                height={600}
                                alt="Excellence in Service Award"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>
                </section>

                {/* Award 2: Duke Certificate */}
                <section className="group bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 md:p-12 lg:-mx-12 xl:-mx-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 group-hover:shadow-blue-500/20 transition-all duration-500">
                            <Image
                                src={Duke}
                                width={800}
                                height={600}
                                alt="Duke Certificate of Appreciation"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                                Certificate of Appreciation <span className="text-blue-600 dark:text-blue-400">2023-24</span>
                            </h2>
                            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    Delta Infosoft was proudly presented with a Certificate of Appreciation by Duke Plasto Technique Private Limited. This prestigious award recognizes outstanding contributions and exceptional skills in software development.
                                </p>
                                <p>
                                    Since 2012, Delta Infosoft has demonstrated dedication and unwavering support. The certificate, framed with a golden border, symbolizes the strong partnership and impactful results achieved through our innovative solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Award 3: Leadership */}
                <section className="group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-6 order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                                Exemplary <span className="text-purple-600 dark:text-purple-400">Leadership</span> & Dedication
                            </h2>
                            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    In a moment of pride, our Project Manager was honored for outstanding leadership. The award, featuring an inspiring portrait of Mahatma Gandhi, symbolizes values of perseverance, integrity, and commitment.
                                </p>
                                <p>
                                    This accolade celebrates individual excellence and highlights the collective spirit of the Delta Infosoft team, fostering a culture of innovation and contributing significantly to our growth.
                                </p>
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 group-hover:shadow-purple-500/20 transition-all duration-500 order-1 lg:order-2">
                            <Image
                                src={PM}
                                width={800}
                                height={600}
                                alt="Leadership Award"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </section>

                {/* Award 4: GA Infra */}
                <section className="group bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 md:p-12 lg:-mx-12 xl:-mx-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 group-hover:shadow-orange-500/20 transition-all duration-500">
                            <Image
                                src={MG}
                                width={800}
                                height={600}
                                alt="GA Infra Award"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                                Prestigious Recognition from <span className="text-orange-600 dark:text-orange-400">GA Infra</span>
                            </h2>
                            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    Celebrating a moment of pride, Delta Infosoft Pvt. Ltd. was honored with an appreciation award from GA Infra. This accolade reflects our commitment to excellence, innovation, and outstanding service in the industry.
                                </p>
                                <p className="font-medium text-gray-900 dark:text-white">
                                    Congratulations to the entire team for this well-deserved recognition!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}


export default AwardsPage

// Force rebuild
