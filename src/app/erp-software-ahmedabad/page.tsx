import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import ierp from "../../../public/Navlogo/Delta IERP.png";
import iAccount from "../../../public/Navlogo/iaccount.png";
import Inventry from "../../../public/Navlogo/inventry.png";

export const metadata: Metadata = {
    title: "ERP Software Company in Ahmedabad | Delta Infosoft Pvt Ltd",
    description:
        "Leading ERP software company in Ahmedabad offering custom ERP solutions for manufacturing, trading, and service industries. Get scalable business automation software tailored to your needs.",
    keywords:
        "ERP software Ahmedabad, ERP company Ahmedabad, manufacturing ERP software, custom ERP solutions Ahmedabad, business automation software Ahmedabad, Delta iERP",
    openGraph: {
        title: "ERP Software Company in Ahmedabad | Delta Infosoft",
        description: "Custom ERP solutions for Ahmedabad businesses - manufacturing, trading, and services",
        url: "https://deltainfosoft.com/erp-software-ahmedabad",
    },
};

export default function ERPSoftwareAhmedabad() {
    const erpProducts = [
        {
            title: "Delta iERP",
            description: "Comprehensive ERP solution for manufacturing and trading businesses with modules for production, inventory, sales, and finance.",
            link: "/solutions/iERP",
            image: ierp.src,
            feature: "",
        },
        {
            title: "Delta iAccount",
            description: "Advanced accounting and financial management system integrated with GST compliance and real-time reporting.",
            link: "/solutions/iAccount",
            image: iAccount.src,
            feature: "",
        },
        {
            title: "Delta Inventory",
            description: "Complete inventory management solution with barcode integration, stock tracking, and automated reordering.",
            link: "/solutions/Deltainventry",
            image: Inventry.src,
            feature: "",
        },
    ];

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "ERP Software Development",
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
        "description": "Custom ERP software solutions for manufacturing, trading, and service businesses in Ahmedabad"
    };

    return (
        <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            {/* Hero Section */}
            <section className="w-full py-20 md:py-32 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-neutral-900 dark:to-neutral-800">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                            ERP Software Company in Ahmedabad
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
                            Transform your business operations with custom ERP solutions designed for Ahmedabad's manufacturing, trading, and service industries
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-600 dark:text-teal-400">
                            Why Choose Delta Infosoft for ERP Software in Ahmedabad?
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            <Link href="/" className="text-teal-600 dark:text-teal-400 hover:underline font-semibold">
                                Delta Infosoft Pvt Ltd
                            </Link> is a leading ERP software company in Ahmedabad, Gujarat, specializing in custom enterprise resource planning solutions
                            for businesses of all sizes. With over {new Date().getFullYear() - 2011}+ years of experience serving Ahmedabad's business community,
                            we understand the unique challenges faced by local manufacturers, traders, and service providers.
                        </p>

                        <p className="text-lg leading-relaxed mb-6">
                            Our ERP software solutions are designed to streamline your business operations, reduce manual work, improve accuracy,
                            and provide real-time insights into your business performance. Whether you're a small manufacturing unit in Odhav,
                            a trading company in Narol, or a service provider in Satellite, our ERP systems are tailored to meet your specific requirements.
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-teal-600 dark:text-teal-400">
                            Comprehensive ERP Solutions for Ahmedabad Businesses
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            Our ERP software covers all critical business functions including inventory management, production planning,
                            sales and distribution, purchase management, financial accounting, HR and payroll, and business intelligence.
                            We provide industry-specific ERP solutions for:
                        </p>

                        <ul className="list-disc list-inside space-y-3 text-lg mb-8">
                            <li><strong>Manufacturing ERP:</strong> Perfect for pump manufacturing, engineering goods, textile machinery, and chemical industries prevalent in Ahmedabad</li>
                            <li><strong>Trading & Distribution ERP:</strong> Ideal for wholesale traders, distributors, and retail chains operating in Gujarat</li>
                            <li><strong>Construction ERP:</strong> Designed for contractors, builders, and real estate developers in the Ahmedabad region</li>
                            <li><strong>Service Industry ERP:</strong> Tailored for IT companies, consulting firms, and professional services</li>
                        </ul>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-teal-600 dark:text-teal-400">
                            Key Features of Our ERP Software
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3 text-teal-600 dark:text-teal-400">Real-time Business Intelligence</h3>
                                <p>Get instant access to critical business metrics, sales reports, inventory levels, and financial data through intuitive dashboards.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3 text-teal-600 dark:text-teal-400">GST Compliance</h3>
                                <p>Fully integrated GST billing, e-invoicing, and return filing capabilities compliant with Indian tax regulations.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3 text-teal-600 dark:text-teal-400">Mobile Access</h3>
                                <p>Access your ERP system from anywhere using our mobile apps for iOS and Android devices.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3 text-teal-600 dark:text-teal-400">Customization</h3>
                                <p>Every business is unique. Our ERP solutions are fully customizable to match your specific workflows and processes.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-teal-600 dark:text-teal-400">
                            Our ERP Products
                        </h2>
                    </div>

                    <div className="mt-8">
                        <HoverEffect items={erpProducts} />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none mt-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-600 dark:text-teal-400">
                            Implementation & Support
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            We provide end-to-end ERP implementation services including requirement analysis, system design, data migration,
                            user training, and go-live support. Our local team in Ahmedabad ensures quick response times and on-site support
                            whenever needed. We offer flexible deployment options including cloud-based ERP, on-premise installation,
                            or hybrid solutions based on your preferences.
                        </p>

                        <p className="text-lg leading-relaxed mb-6">
                            Post-implementation, we provide comprehensive AMC (Annual Maintenance Contract) services with regular updates,
                            bug fixes, and feature enhancements. Our support team is available via phone, email, and remote assistance
                            to ensure your ERP system runs smoothly 24/7.
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-teal-600 dark:text-teal-400">
                            Why Ahmedabad Businesses Trust Delta Infosoft
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            With 150+ satisfied clients across Gujarat, we have established ourselves as a trusted ERP software provider
                            in Ahmedabad. Our clients include leading manufacturers, traders, and service providers who have transformed
                            their business operations using our ERP solutions. We understand the local business culture, language preferences
                            (Gujarati and English support), and regulatory requirements specific to Gujarat.
                        </p>

                        <p className="text-lg leading-relaxed mb-6">
                            Our competitive pricing, flexible payment terms, and proven track record make us the preferred choice for
                            businesses looking to implement ERP software in Ahmedabad. We offer free demos, requirement consultations,
                            and ROI analysis to help you make an informed decision.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Transform Your Business with ERP Software?
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Get a free consultation and demo of our ERP solutions. Contact our Ahmedabad team today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contactus"
                            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
                        >
                            Request Free Demo
                        </Link>
                        <Link
                            href="tel:+917940084600"
                            className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-600 transition"
                        >
                            Call: +91-79-40084600
                        </Link>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="w-full py-12 bg-gray-50 dark:bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <h3 className="text-2xl font-bold mb-6 text-center">Explore More Solutions</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/crm-software-ahmedabad" className="block p-6 bg-white dark:bg-neutral-800 rounded-lg hover:shadow-lg transition">
                            <h4 className="text-xl font-bold mb-2 text-teal-600 dark:text-teal-400">CRM Software Ahmedabad</h4>
                            <p className="text-gray-600 dark:text-gray-400">Customer relationship management solutions for growing businesses</p>
                        </Link>
                        <Link href="/zoho-crm-implementation-ahmedabad" className="block p-6 bg-white dark:bg-neutral-800 rounded-lg hover:shadow-lg transition">
                            <h4 className="text-xl font-bold mb-2 text-teal-600 dark:text-teal-400">Zoho CRM Implementation</h4>
                            <p className="text-gray-600 dark:text-gray-400">Expert Zoho CRM setup and customization services</p>
                        </Link>
                        <Link href="/" className="block p-6 bg-white dark:bg-neutral-800 rounded-lg hover:shadow-lg transition">
                            <h4 className="text-xl font-bold mb-2 text-teal-600 dark:text-teal-400">Software Development Company</h4>
                            <p className="text-gray-600 dark:text-gray-400">Custom software solutions for all industries</p>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
