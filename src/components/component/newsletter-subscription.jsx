"use client";
import { useState } from "react";
import axios from "axios";
import { MathCaptcha } from "@/components/ui/MathCaptcha";

export default function NewsletterSubscription() {
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

    return (
        <div className="relative py-20 px-4 flex justify-center w-full z-20">
            <div className="bg-neutral-900 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border border-neutral-800 flex flex-col items-center text-center w-full max-w-[1600px]">

                {/* Background Effects */}
                <div className="absolute right-0 top-0 h-full w-[60%] bg-gradient-to-l from-teal-900/20 via-teal-900/5 to-transparent pointer-events-none" />
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="z-10 w-full">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Subscribe to Delta Infosoft Newsletter
                    </h2>
                    <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
                        Join over 1000+ industry professionals. Get cutting-edge insights, ERP solutions, and digital transformation strategies delivered to your inbox.
                    </p>

                    {/* Icon Blocks */}
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-5xl mx-auto">
                        <div className="flex flex-col items-center p-4 rounded-xl bg-neutral-800/50 border border-neutral-700">
                            <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mb-3 text-teal-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="font-semibold text-white">Enterprise Tech</h3>
                        </div>
                        <div className="flex flex-col items-center p-4 rounded-xl bg-neutral-800/50 border border-neutral-700">
                            <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mb-3 text-teal-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="font-semibold text-white">Business Intelligence</h3>
                        </div>
                        <div className="flex flex-col items-center p-4 rounded-xl bg-neutral-800/50 border border-neutral-700">
                            <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mb-3 text-teal-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            </div>
                            <h3 className="font-semibold text-white">Industry Reports</h3>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubscribe} className="max-w-xl mx-auto w-full">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your business email"
                                required
                                disabled={isLoading}
                                className="flex-1 px-5 py-4 bg-neutral-800 border border-neutral-700 text-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none disabled:opacity-50 placeholder-neutral-500"
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-bold rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                            >
                                {isLoading ? "Subscribing..." : "Subscribe"}
                            </button>
                        </div>
                        <div className="mt-6 flex justify-center">
                            <div className="bg-white p-2 rounded-lg">
                                <MathCaptcha key={captchaResetKey} onVerify={(token) => setCaptchaToken(token)} />
                            </div>
                        </div>
                    </form>

                    {message && (
                        <div className={`mt-4 p-4 rounded-lg text-sm max-w-xl mx-auto ${messageType === "success" ? "bg-green-900/30 text-green-300 border border-green-800" : "bg-red-900/30 text-red-300 border border-red-800"}`}>
                            {message}
                        </div>
                    )}

                    <p className="text-xs text-neutral-500 mt-6">
                        We value your privacy. Unsubscribe anytime.
                    </p>
                </div>
            </div>
        </div>
    );
}