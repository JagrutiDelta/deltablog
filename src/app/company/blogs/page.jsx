import React from 'react'
import Blogs from '@/components/component/blogs'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import RetroGrid from '@/components/magicui/retro-grid'

export const metadata = {
    title: "Blog - Insights and Updates from Delta Infosoft",
    description: "Stay updated with the latest insights, news, and articles from Delta Infosoft. Our blog covers topics ranging from software development to industry trends and company updates.",
    keywords: "Delta Infosoft blog, industry insights, software development trends, technology blog, company news, updates from Delta, business tips, digital transformation",
};

const BlogPage = () => {
    const slogan = "Insights that drive innovation"

    return (
        <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden selection:bg-teal-500 selection:text-white">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
                <RetroGrid className="absolute inset-0 z-0 h-full w-full opacity-50 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-6 mb-16">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/30 text-sm font-medium text-teal-600 dark:text-teal-400 mb-4 shadow-sm">
                        Our Insights
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Blogs & <span className="text-teal-500">Updates</span>
                    </h1>
                    <div className="max-w-4xl mx-auto">
                        <div className="scale-90 md:scale-100">
                            <TextGenerateEffect words={slogan} className="text-center" />
                        </div>
                    </div>
                    <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 mx-auto leading-relaxed">
                        Stay updated with the latest news, insights, and stories from Delta Infosoft. Join us as we explore the world of ERP and share valuable knowledge.
                    </p>
                </div>
            </section>

            {/* Blogs Content */}
            <div className="w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 pb-24">
                <Blogs />
            </div>
        </div>
    )
}

export default BlogPage
