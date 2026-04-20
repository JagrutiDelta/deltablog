import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Zoho CRM Implementation Partner in Ahmedabad | Delta Infosoft",
    description:
        "Certified Zoho CRM implementation partner in Ahmedabad. Expert Zoho CRM setup, customization, integration, and training services for businesses in Gujarat.",
    keywords:
        "Zoho CRM Ahmedabad, Zoho CRM implementation Ahmedabad, Zoho partner Ahmedabad, Zoho CRM consultant Gujarat, Zoho CRM customization, Zoho integration services",
    openGraph: {
        title: "Zoho CRM Implementation Partner Ahmedabad | Delta Infosoft",
        description: "Professional Zoho CRM implementation and customization services in Ahmedabad",
        url: "https://deltainfosoft.com/zoho-crm-implementation-ahmedabad",
    },
};

export default function ZohoCRMImplementationAhmedabad() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Zoho CRM Implementation",
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
        "description": "Professional Zoho CRM implementation, customization, and integration services in Ahmedabad"
    };

    return (
        <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            {/* Hero Section */}
            <section className="w-full py-20 md:py-32 bg-gradient-to-br from-red-50 to-orange-50 dark:from-neutral-900 dark:to-neutral-800">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                            Zoho CRM Implementation Partner in Ahmedabad
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
                            Transform your sales process with expert Zoho CRM implementation, customization, and training services
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-600 dark:text-teal-400">
                            Certified Zoho CRM Partner in Ahmedabad
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            <Link href="/" className="text-teal-600 dark:text-teal-400 hover:underline font-semibold">
                                Delta Infosoft Pvt Ltd
                            </Link> is a trusted Zoho CRM implementation partner serving businesses in Ahmedabad, Gujarat. With extensive
                            experience in deploying Zoho CRM for companies across various industries, we help you leverage the full power
                            of Zoho's comprehensive customer relationship management platform.
                        </p>

                        <p className="text-lg leading-relaxed mb-6">
                            As a Zoho partner in Ahmedabad, we provide end-to-end services including CRM setup, data migration, custom
                            module development, third-party integrations, workflow automation, and user training. Whether you're a startup
                            looking to implement your first CRM or an established enterprise migrating from another platform, our team
                            ensures a smooth transition and maximum ROI from your Zoho CRM investment.
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-teal-600 dark:text-teal-400">
                            Why Choose Zoho CRM for Your Ahmedabad Business?
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            Zoho CRM is one of the world's leading customer relationship management platforms, trusted by over 250,000
                            businesses globally. Here's why it's perfect for Ahmedabad businesses:
                        </p>

                        <ul className="list-disc list-inside space-y-3 text-lg mb-8">
                            <li><strong>Affordable Pricing:</strong> Cost-effective plans starting from ₹800 per user per month, ideal for SMEs and startups</li>
                            <li><strong>Cloud-Based:</strong> Access your CRM from anywhere, anytime using web browsers or mobile apps</li>
                            <li><strong>Comprehensive Features:</strong> Sales automation, marketing automation, customer support, analytics, and AI-powered insights</li>
                            <li><strong>Scalability:</strong> Grows with your business from 5 users to 5000+ users without platform changes</li>
                            <li><strong>Integration Ecosystem:</strong> Connects with 150+ business applications including WhatsApp, Gmail, accounting software, and more</li>
                            <li><strong>Indian Market Ready:</strong> GST compliance, Indian payment gateway integration, and multi-language support</li>
                        </ul>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-teal-600 dark:text-teal-400">
                            Our Zoho CRM Implementation Services
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3 text-teal-600 dark:text-teal-400">CRM Setup & Configuration</h3>
                                <p>Complete Zoho CRM account setup, user management, role configuration, security settings, and initial customization based on your business requirements.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3 text-teal-600 dark:text-teal-400">Data Migration</h3>
                                <p>Seamless migration of customer data, contacts, leads, deals, and historical records from spreadsheets, old CRM systems, or other platforms to Zoho CRM.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3 text-teal-600 dark:text-teal-400">Custom Module Development</h3>
                                <p>Create custom modules, fields, layouts, and page designs tailored to your unique business processes and industry requirements.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3 text-teal-600 dark:text-teal-400">Workflow Automation</h3>
                                <p>Design and implement automated workflows, approval processes, email notifications, task assignments, and business rules to streamline operations.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3 text-teal-600 dark:text-teal-400">Third-Party Integrations</h3>
                                <p>Integrate Zoho CRM with your existing tools including accounting software (Tally, QuickBooks), email platforms, WhatsApp Business API, payment gateways, and more.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3 text-teal-600 dark:text-teal-400">Training & Support</h3>
                                <p>Comprehensive user training sessions, admin training, documentation, and ongoing support to ensure your team maximizes Zoho CRM adoption.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-teal-600 dark:text-teal-400">
                            Zoho CRM Implementation Process
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            Our proven implementation methodology ensures successful Zoho CRM deployment for your Ahmedabad business:
                        </p>

                        <ol className="list-decimal list-inside space-y-4 text-lg mb-8">
                            <li>
                                <strong>Requirement Analysis (Week 1):</strong> We conduct detailed discussions to understand your sales process,
                                team structure, reporting needs, and integration requirements. We document all customization needs and create
                                a project plan.
                            </li>
                            <li>
                                <strong>CRM Configuration (Week 2-3):</strong> Our team sets up your Zoho CRM account, creates custom fields
                                and modules, configures sales stages, designs page layouts, and sets up user roles and permissions.
                            </li>
                            <li>
                                <strong>Data Migration (Week 3-4):</strong> We clean, format, and import your existing customer data into
                                Zoho CRM. This includes contacts, accounts, leads, deals, and historical communication records.
                            </li>
                            <li>
                                <strong>Automation & Integration (Week 4-5):</strong> We implement workflow rules, email templates, approval
                                processes, and integrate Zoho CRM with your other business tools.
                            </li>
                            <li>
                                <strong>Testing & Training (Week 5-6):</strong> Thorough testing of all configurations, followed by comprehensive
                                training sessions for your sales team, managers, and administrators.
                            </li>
                            <li>
                                <strong>Go-Live & Support (Week 6+):</strong> Launch Zoho CRM for your team with hands-on support during the
                                initial weeks. We provide ongoing support and optimization based on user feedback.
                            </li>
                        </ol>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-teal-600 dark:text-teal-400">
                            Industries We Serve
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            We have successfully implemented Zoho CRM for businesses across various sectors in Ahmedabad:
                        </p>

                        <div className="grid md:grid-cols-3 gap-4 mb-8">
                            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                                <p className="font-semibold">Manufacturing & Engineering</p>
                            </div>
                            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                                <p className="font-semibold">Real Estate & Construction</p>
                            </div>
                            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                                <p className="font-semibold">IT Services & Software</p>
                            </div>
                            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                                <p className="font-semibold">Education & Training</p>
                            </div>
                            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                                <p className="font-semibold">Healthcare & Pharma</p>
                            </div>
                            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                                <p className="font-semibold">Trading & Distribution</p>
                            </div>
                            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                                <p className="font-semibold">Financial Services</p>
                            </div>
                            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                                <p className="font-semibold">Retail & E-commerce</p>
                            </div>
                            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                                <p className="font-semibold">Professional Services</p>
                            </div>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-teal-600 dark:text-teal-400">
                            Zoho CRM Customization Capabilities
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            Every business has unique processes. We customize Zoho CRM to match your specific requirements:
                        </p>

                        <ul className="list-disc list-inside space-y-2 text-lg mb-8">
                            <li>Custom fields, modules, and page layouts</li>
                            <li>Industry-specific sales stages and pipelines</li>
                            <li>Automated lead scoring and assignment rules</li>
                            <li>Custom reports and dashboards for different user roles</li>
                            <li>Email templates and drip campaigns</li>
                            <li>WhatsApp integration for automated messaging</li>
                            <li>Custom functions using Deluge scripting</li>
                            <li>Integration with Tally, SAP, or other ERP systems</li>
                            <li>Mobile app customization for field sales teams</li>
                            <li>Custom portals for customers and partners</li>
                        </ul>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-teal-600 dark:text-teal-400">
                            Zoho CRM Pricing & Packages
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            Zoho CRM offers flexible pricing plans to suit businesses of all sizes. As a Zoho partner, we help you choose
                            the right plan and can offer implementation packages:
                        </p>

                        <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg mb-8">
                            <h3 className="text-xl font-bold mb-4">Zoho CRM Plans (Monthly Pricing per User)</h3>
                            <ul className="space-y-2">
                                <li><strong>Standard:</strong> ₹800/user - Basic CRM features for small teams</li>
                                <li><strong>Professional:</strong> ₹1,400/user - Advanced automation and customization</li>
                                <li><strong>Enterprise:</strong> ₹2,400/user - Complete CRM with AI and advanced analytics</li>
                                <li><strong>Ultimate:</strong> ₹3,000/user - Premium features with enhanced storage and support</li>
                            </ul>
                            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                                * Annual billing available with 20% discount. Free trial available for 15 days.
                            </p>
                        </div>

                        <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg mb-8">
                            <h3 className="text-xl font-bold mb-4">Our Implementation Packages</h3>
                            <ul className="space-y-2">
                                <li><strong>Basic Setup:</strong> ₹25,000 - Standard configuration for up to 10 users</li>
                                <li><strong>Professional Implementation:</strong> ₹50,000 - Custom modules, workflows, and integrations</li>
                                <li><strong>Enterprise Deployment:</strong> ₹1,00,000+ - Complex customizations, multiple integrations, and extensive training</li>
                            </ul>
                            <p className="mt-4 text-sm">
                                All packages include data migration, user training, and 30 days of post-implementation support.
                            </p>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-teal-600 dark:text-teal-400">
                            Why Choose Delta Infosoft as Your Zoho Partner?
                        </h2>

                        <ul className="list-disc list-inside space-y-3 text-lg mb-8">
                            <li><strong>Local Expertise:</strong> Based in Ahmedabad with deep understanding of local business practices and requirements</li>
                            <li><strong>Proven Track Record:</strong> Successfully implemented Zoho CRM for 50+ businesses across Gujarat</li>
                            <li><strong>Certified Consultants:</strong> Our team includes Zoho-certified CRM consultants and developers</li>
                            <li><strong>Comprehensive Services:</strong> From initial consultation to ongoing support, we handle everything</li>
                            <li><strong>Quick Turnaround:</strong> Most implementations completed within 4-6 weeks</li>
                            <li><strong>Competitive Pricing:</strong> Transparent pricing with no hidden costs</li>
                            <li><strong>Post-Implementation Support:</strong> Dedicated support team for troubleshooting and enhancements</li>
                            <li><strong>Training Excellence:</strong> Hands-on training sessions in Gujarati and English</li>
                        </ul>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-teal-600 dark:text-teal-400">
                            Zoho CRM vs. Custom CRM
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            While we also offer our own <Link href="/crm-software-ahmedabad" className="text-teal-600 dark:text-teal-400 hover:underline">
                                custom CRM solution (Delta iCRM)</Link>, Zoho CRM is ideal if you:
                        </p>

                        <ul className="list-disc list-inside space-y-2 text-lg mb-6">
                            <li>Prefer a cloud-based solution with automatic updates</li>
                            <li>Need extensive third-party integrations (Gmail, Office 365, social media, etc.)</li>
                            <li>Want to leverage Zoho's ecosystem (Zoho Books, Zoho Campaigns, Zoho Desk, etc.)</li>
                            <li>Require mobile apps for iOS and Android</li>
                            <li>Need AI-powered sales predictions and insights</li>
                        </ul>

                        <p className="text-lg leading-relaxed mb-6">
                            However, if you need complete control, one-time licensing, or highly specific customizations, our custom CRM
                            might be a better fit. We'll help you make the right choice based on your requirements and budget.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Implement Zoho CRM for Your Business?
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Get a free consultation and Zoho CRM demo. Our Ahmedabad team is ready to help you get started!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contactus"
                            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
                        >
                            Schedule Free Consultation
                        </Link>
                        <Link
                            href="tel:+917940084600"
                            className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition"
                        >
                            Call: +91-79-40084600
                        </Link>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="w-full py-12 bg-gray-50 dark:bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <h3 className="text-2xl font-bold mb-6 text-center">Explore Our Other Services</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/erp-software-ahmedabad" className="block p-6 bg-white dark:bg-neutral-800 rounded-lg hover:shadow-lg transition">
                            <h4 className="text-xl font-bold mb-2 text-teal-600 dark:text-teal-400">ERP Software Ahmedabad</h4>
                            <p className="text-gray-600 dark:text-gray-400">Complete business management solutions for manufacturing and trading</p>
                        </Link>
                        <Link href="/crm-software-ahmedabad" className="block p-6 bg-white dark:bg-neutral-800 rounded-lg hover:shadow-lg transition">
                            <h4 className="text-xl font-bold mb-2 text-teal-600 dark:text-teal-400">Custom CRM Software</h4>
                            <p className="text-gray-600 dark:text-gray-400">Tailored CRM solutions built specifically for your business</p>
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
