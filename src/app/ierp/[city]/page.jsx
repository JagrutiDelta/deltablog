import React from 'react'
import Blogs from '@/components/component/blogs'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import RetroGrid from '@/components/magicui/retro-grid'

export async function generateMetadata({ params }) {
    const { city } = await params;
    const cityCap = city.charAt(0).toUpperCase() + city.slice(1);
    return {
        title: `Delta iERP for ${cityCap} - Pump Manufacturing ERP Software`,
        description: `Optimize your pump manufacturing business in ${cityCap} with Delta iERP. Tailored solutions for local industry needs, from billing to production planning.`,
        keywords: `ERP for ${cityCap}, pump manufacturing software ${cityCap}, Delta iERP ${cityCap}, industrial software ${cityCap}, manufacturing ERP Gujarat`,
    }
}

const CityBlogPage = async ({ params }) => {
    const { city } = await params;
    // Capitalize for display
    const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);
    const slogan = `Tailored for ${formattedCity}'s Industries`;

    return (
        <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden selection:bg-teal-500 selection:text-white">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
                <RetroGrid className="absolute inset-0 z-0 h-full w-full opacity-50 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-6 mb-16">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/30 text-sm font-medium text-teal-600 dark:text-teal-400 mb-4 shadow-sm">
                        Regional Success
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white">
                        iERP for <span className="text-teal-500">{formattedCity}</span>
                    </h1>
                    <div className="max-w-4xl mx-auto">
                        <div className="scale-90 md:scale-100">
                            <TextGenerateEffect words={slogan} className="text-center" />
                        </div>
                    </div>
                    <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 mx-auto leading-relaxed">
                        Discover how Delta iERP is transforming the pump manufacturing landscape in {formattedCity} with specialized solutions for local challenges.
                    </p>
                </div>
            </section>

            {/* Blogs Content */}
            <div className="w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 pb-24">
                {/* 
                  Note: Client Components inside Async Server Components are fine, 
                  but we pass serializable props (strings).
                */}
                <Blogs cityName={city} />
            </div>
        </div>
    )
}

export default CityBlogPage
