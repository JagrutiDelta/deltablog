import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import icrm from "../../../public/Navlogo/crm.png";
import Mytime from "../../../public/Navlogo/mytime.png";

export const metadata: Metadata = {
    title: "CRM Software Company in Ahmedabad | Delta Infosoft Pvt Ltd",
    description:
        "Best CRM software company in Ahmedabad offering custom CRM solutions, sales automation, and customer management systems for businesses. Boost your sales with Delta iCRM.",
    keywords:
        "CRM software Ahmedabad, CRM company Ahmedabad, customer relationship management Ahmedabad, sales automation software, Delta iCRM, CRM solutions Gujarat",
    openGraph: {
        title: "CRM Software Company in Ahmedabad | Delta Infosoft",
        description: "Custom CRM solutions for Ahmedabad businesses - sales automation, lead management, and customer engagement",
        url: "https://deltainfosoft.com/crm-software-ahmedabad",
    },
};

export default function CRMSoftwareAhmedabad() {
    const crmProducts = [
        {
            title: "Delta iCRM",
            description: "Complete CRM solution with lead management, sales pipeline, customer engagement, and analytics for growing businesses.",
            link: "/solutions/iCRM",
            image: icrm.src,
            feature: "",
        },
        {
            title: "Delta MyTime",
            description: "Time tracking and project management system integrated with CRM for service-based businesses and agencies.",
            link: "/solutions/MyTime",
            image: Mytime.src,
            feature: "",
        },
    ];

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "CRM Software Development",
        "provider": {
            "@type": "SoftwareCompany",
            "name": "Delta Infosoft Pvt Ltd",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
            }
        },
        "areaServed": {
            "@type": "City",
            "name": "Ahmedabad"
        },
        "description": "Custom CRM software solutions for sales automation and customer relationship management in Ahmedabad"
    };

    return (
        <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            {/* Hero Section */}
            <section className="w-full py-20 md:py-32 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-neutral-900 dark:to-neutral-800">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                            CRM Software Company in Ahmedabad
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
                            Accelerate your sales growth with powerful CRM solutions designed for Ahmedabad's dynamic business environment
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-600 dark:text-teal-400">
                            Leading CRM Software Provider in Ahmedabad
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            <Link href="/" className="text-teal-600 dark:text-teal-400 hover:underline font-semibold">
                                Delta Infosoft Pvt Ltd
                            </Link> is a premier CRM software company in Ahmedabad, Gujarat, helping businesses streamline their sales processes,
                            improve customer relationships, and boost revenue growth. Our customer relationship management solutions are trusted
                            by 150+ businesses across Ahmedabad and Gujarat for their sales automation and customer engagement needs.
                        </p>

                        <p className="text-lg leading-relaxed mb-6">
                            Whether you're a B2B company in Ahmedabad's industrial areas, a retail business in the city center, or a service
                            provider looking to scale, our CRM software provides the tools you need to manage leads, track sales opportunities,
                            automate follow-ups, and deliver exceptional customer experiences. Our CRM solutions are designed specifically for
                            the Indian market with features like WhatsApp integration, regional language support, and GST-compliant invoicing.
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-teal-600 dark:text-teal-400">
                            Why Your Ahmedabad Business Needs CRM Software
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            In today's competitive business landscape, managing customer relationships manually through spreadsheets and
                            notebooks is no longer effective. A robust CRM system helps you:
                        </p>

                        <ul className="list-disc list-inside space-y-3 text-lg mb-8">
                            <li><strong>Centralize Customer Data:</strong> Store all customer information, communication history, and purchase records in one secure location</li>
                            <li><strong>Automate Sales Processes:</strong> Set up automated workflows for lead assignment, follow-up reminders, and email campaigns</li>
                            <li><strong>Improve Team Collaboration:</strong> Enable your sales team to work together efficiently with shared pipelines and real-time updates</li>
                            <li><strong>Track Performance:</strong> Monitor sales metrics, conversion rates, and team performance through comprehensive dashboards</li>
                            <li><strong>Enhance Customer Service:</strong> Provide faster, more personalized support with complete customer history at your fingertips</li>
                            <li><strong>Increase Revenue:</strong> Identify upsell opportunities, reduce sales cycle time, and close more deals with data-driven insights</li>
                        </ul>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-teal-600 dark:text-teal-400">
                            Delta iCRM Features
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3 text-teal-600 dark:text-teal-400">Lead Management</h3>
                                <p>Capture leads from multiple sources, qualify them automatically, and assign to the right sales representatives based on territory or expertise.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3 text-teal-600 dark:text-teal-400">Sales Pipeline</h3>
                                <p>Visualize your sales funnel, track deal stages, forecast revenue, and identify bottlenecks in your sales process.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3 text-teal-600 dark:text-teal-400">WhatsApp Integration</h3>
                                <p>Send automated WhatsApp messages, follow-ups, and promotional campaigns directly from your CRM system.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3 text-teal-600 dark:text-teal-400">Mobile CRM App</h3>
                                <p>Access customer data, update deals, and manage tasks on the go with our Android and iOS mobile applications.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3 text-teal-600 dark:text-teal-400">Email Marketing</h3>
                                <p>Create and send targeted email campaigns, track open rates, and nurture leads with automated drip sequences.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3 text-teal-600 dark:text-teal-400">Reports & Analytics</h3>
                                <p>Generate detailed reports on sales performance, team productivity, customer behavior, and revenue forecasts.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-teal-600 dark:text-teal-400">
                            Industries We Serve in Ahmedabad
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            Our CRM software is versatile and can be customized for various industries prevalent in Ahmedabad:
                        </p>

                        <ul className="list-disc list-inside space-y-2 text-lg mb-8">
                            <li>Manufacturing and Industrial Equipment Sales</li>
                            <li>Real Estate and Property Development</li>
                            <li>IT Services and Software Companies</li>
                            <li>Educational Institutions and Training Centers</li>
                            <li>Healthcare and Medical Equipment Suppliers</li>
                            <li>Retail and E-commerce Businesses</li>
                            <li>Financial Services and Insurance</li>
                            <li>Consulting and Professional Services</li>
                        </ul>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-teal-600 dark:text-teal-400">
                            Our CRM Products
                        </h2>
                    </div>

                    <div className="mt-8">
                        <HoverEffect items={crmProducts} />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none mt-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-600 dark:text-teal-400">
                            CRM Implementation Process
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            We follow a structured approach to ensure successful CRM implementation for your Ahmedabad business:
                        </p>

                        <ol className="list-decimal list-inside space-y-3 text-lg mb-8">
                            <li><strong>Discovery & Consultation:</strong> We understand your sales process, team structure, and business goals</li>
                            <li><strong>System Design:</strong> Customize the CRM to match your workflows, terminology, and reporting requirements</li>
                            <li><strong>Data Migration:</strong> Import existing customer data from spreadsheets, old systems, or other CRM platforms</li>
                            <li><strong>User Training:</strong> Comprehensive training sessions for your sales team, managers, and administrators</li>
                            <li><strong>Go-Live Support:</strong> Hands-on support during the initial weeks to ensure smooth adoption</li>
                            <li><strong>Ongoing Optimization:</strong> Regular reviews and enhancements based on user feedback and changing needs</li>
                        </ol>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-teal-600 dark:text-teal-400">
                            Pricing & Support
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            We offer flexible pricing models including per-user monthly subscriptions, annual licenses, and one-time perpetual
                            licenses based on your preference. Our CRM software is affordable for small businesses starting at just ₹500 per
                            user per month, with enterprise plans available for larger organizations.
                        </p>

                        <p className="text-lg leading-relaxed mb-6">
                            All our CRM packages include free implementation support, user training, and 3 months of complimentary technical
                            support. Post-implementation, we offer AMC plans with guaranteed response times, regular updates, and dedicated
                            account managers for enterprise clients. Our Ahmedabad-based support team is available via phone, email, and
                            on-site visits when required.
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-teal-600 dark:text-teal-400">
                            Custom CRM vs. Zoho CRM
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            While we also provide <Link href="/zoho-crm-implementation-ahmedabad" className="text-teal-600 dark:text-teal-400 hover:underline">
                                Zoho CRM implementation services</Link>, our custom-built Delta iCRM offers several advantages for Ahmedabad businesses:
                        </p>

                        <ul className="list-disc list-inside space-y-2 text-lg mb-8">
                            <li>Complete customization without platform limitations</li>
                            <li>One-time cost option instead of recurring subscriptions</li>
                            <li>Integration with local payment gateways and Indian business tools</li>
                            <li>On-premise deployment option for data security</li>
                            <li>Dedicated local support team in Ahmedabad</li>
                        </ul>

                        <p className="text-lg leading-relaxed mb-6">
                            However, if you prefer a cloud-based solution with global integrations, we can help you implement and customize
                            Zoho CRM for your specific needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Boost Your Sales with CRM Software?
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Schedule a free demo and see how Delta iCRM can transform your sales process. Contact us today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contactus"
                            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
                        >
                            Get Free Demo
                        </Link>
                        <Link
                            href="tel:+917940084600"
                            className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition"
                        >
                            Call: +91-79-40084600
                        </Link>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="w-full py-12 bg-gray-50 dark:bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <h3 className="text-2xl font-bold mb-6 text-center">Related Services</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/erp-software-ahmedabad" className="block p-6 bg-white dark:bg-neutral-800 rounded-lg hover:shadow-lg transition">
                            <h4 className="text-xl font-bold mb-2 text-teal-600 dark:text-teal-400">ERP Software Ahmedabad</h4>
                            <p className="text-gray-600 dark:text-gray-400">Complete business management solutions for manufacturing and trading</p>
                        </Link>
                        <Link href="/zoho-crm-implementation-ahmedabad" className="block p-6 bg-white dark:bg-neutral-800 rounded-lg hover:shadow-lg transition">
                            <h4 className="text-xl font-bold mb-2 text-teal-600 dark:text-teal-400">Zoho CRM Implementation</h4>
                            <p className="text-gray-600 dark:text-gray-400">Professional Zoho CRM setup and customization services</p>
                        </Link>
                        <Link href="/" className="block p-6 bg-white dark:bg-neutral-800 rounded-lg hover:shadow-lg transition">
                            <h4 className="text-xl font-bold mb-2 text-teal-600 dark:text-teal-400">Software Development Company</h4>
                            <p className="text-gray-600 dark:text-gray-400">Custom software solutions for all business needs</p>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
