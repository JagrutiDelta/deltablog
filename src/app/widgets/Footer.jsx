'use client'

import React, { useState } from 'react';
import axios from "axios";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import logo from "../../../public/deltainfosoftonly.png"
import Image from "next/image";
import { LinkedinIcon, InstagramIcon } from 'lucide-react';
import { IconBrandFacebook } from "@tabler/icons-react";
import { Accordianforfooter } from "@/components/component/accordianforfooter"
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"
import { MathCaptcha } from "@/components/ui/MathCaptcha";
import CTACard from "@/components/component/cta-card";

const footerNavs = [
    {
        label: "Quick Links",
        items: [
            { href: "/", name: "Home" },
            { href: "/company/aboutus", name: "About Us" },
            { href: "/company/careers", name: "Careers" },
            { href: "https://deltainfosoft.zohorecruit.in/jobs/Careers", name: "We Are Hiring", target: "_blank" },
            { href: "/company/blogs", name: "Blog" },
        ],
    },
    {
        label: "Products",
        items: [
            { href: "/solutions/MyTime", name: "MyTime" },
            { href: "/solutions/iERP", name: "iERP" },
            { href: "/solutions/iCRM", name: "iCRM" },
            { href: "/solutions/iAccount", name: "iAccount" },
        ],
    },
    {
        label: "Legal",
        items: [
            { href: "/company/PrivacyPolicy", name: "Privacy Policy" },
            { href: "/company/Legal", name: "Terms of Service" },
            { href: "/company/generalInfo", name: "Cookie Policy" },
        ],
    },
];

export function SiteFooter() {
    const { setTheme, theme } = useTheme()
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // "success" or "error"
    const [captchaToken, setCaptchaToken] = useState(null);
    const [captchaResetKey, setCaptchaResetKey] = useState(0);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setMessage("");

        if (!captchaToken) {
            setMessage("Please complete the Captcha verification");
            setMessageType("error");
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post("/api/subscribe", { email, captchaToken });

            if (response.data.code === 200) {
                setMessage("Successfully subscribed! Check your email for confirmation.");
                setMessageType("success");
                setEmail("");
                setCaptchaToken(null);
                setCaptchaResetKey(prev => prev + 1);
            } else {
                setMessage(response.data.message || "Something went wrong. Please try again.");
                setMessageType("error");
            }
        } catch (error) {
            setMessage(error.response?.data?.message || "Network error. Please try again.");
            setMessageType("error");
        } finally {
            setIsLoading(false);
        }
    };

    const footerSocials = [
        {
            href: "https://www.facebook.com/DeltaInfoSoft/",
            name: "Facebook",
            icon: <IconBrandFacebook className="h-5 w-5" />,
        },
        {
            href: "https://in.linkedin.com/company/delta-infosoft-pvt-ltd",
            name: "Linkedin",
            icon: <LinkedinIcon className="h-5 w-5" />,
        },
        {
            href: "https://x.com/i/flow/login?redirect_after_login=%2Fdelta_infosoft",
            name: "Twitter",
            icon: <TwitterLogoIcon className="h-5 w-5" />,
        },
        {
            href: "https://www.instagram.com/delta_infosoft/",
            name: "Instagram",
            icon: <InstagramIcon className="h-5 w-5" />,
        },
    ];

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <footer className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white pt-20 pb-10 border-t border-gray-200 dark:border-neutral-900">
            <div className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8">

                {/* CTA Card */}
                <CTACard />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand & Address Column (Left) */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <Link href="/" className="inline-block">
                            <span className="flex items-center gap-2">
                                <Image src={logo} alt="Delta Infosoft" width={120} height={40} className="h-10 w-auto object-contain" />
                            </span>
                        </Link>

                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
                            Delta Infosoft is an Indian software development company specializing in custom ERP, CRM automation, business process digitization, and cloud-based enterprise applications. We deliver scalable, secure, and result-driven digital solutions for growing businesses.
                        </p>

                        <div className="w-full">
                            <Accordianforfooter />
                            <div className="mt-6 space-y-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-gray-900 dark:text-white font-medium">Sales</span>
                                    <a href="tel:+918401281010" className="hover:text-teal-400 transition-colors text-gray-600 dark:text-neutral-400">+91 84012 81010</a>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-gray-900 dark:text-white font-medium">Email</span>
                                    <a href="mailto:support@deltainfosoft.com" className="hover:text-teal-400 transition-colors text-gray-600 dark:text-neutral-400">support@deltainfosoft.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Columns (Right) */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {footerNavs.map((nav) => (
                            <div key={nav.label} className="flex flex-col gap-6">
                                <h3 className="text-sm font-semibold tracking-wider text-gray-500 dark:text-neutral-500 uppercase">
                                    {nav.label}
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    {nav.items.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                target={item.target}
                                                className={`text-sm transition-colors duration-200 hover:text-teal-400
                                                    ${item.name.includes("We Are Hiring")
                                                        ? "text-teal-400 font-medium"
                                                        : "text-gray-700 dark:text-neutral-300"
                                                    }`}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Newsletter Column */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-sm font-semibold tracking-wider text-gray-500 dark:text-neutral-500 uppercase">
                                Newsletter
                            </h3>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-gray-600 dark:text-neutral-400">
                                    Subscribe to stay updated with our latest news and products.
                                </p>
                                <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email"
                                        required
                                        disabled={isLoading}
                                        className="w-full px-3 py-2 bg-gray-100 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-800 rounded-md text-sm text-gray-900 dark:text-white focus:outline-none focus:border-teal-500 transition-colors"
                                    />
                                    <div className="bg-white p-1.5 rounded-md w-full">
                                        <MathCaptcha key={captchaResetKey} onVerify={(token) => setCaptchaToken(token)} />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? "Subscribing..." : "Subscribe"}
                                    </button>
                                </form>
                                {message && (
                                    <div className={`text-xs p-2 rounded ${messageType === "success" ? "text-green-400 bg-green-900/20" : "text-red-400 bg-red-900/20"}`}>
                                        {message}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 dark:border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                        © {new Date().getFullYear()} Delta Infosoft Pvt Ltd. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-200 dark:bg-neutral-900 text-gray-600 dark:text-neutral-400 hover:bg-gray-300 dark:hover:bg-neutral-800 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
                        </button>
                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            {footerSocials.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    className="text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                >
                                    {social.icon}
                                    <span className="sr-only">{social.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
