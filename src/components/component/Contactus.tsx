"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import EmailIcon from "../../../public/iCon/svg_309752 1emailicon.png"
import location from "../../../public/iCon/svg_340590 1location.png"
import { CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import axios from "axios"
import { useState, useRef } from "react"
import { notification } from "antd"
import { PhoneOutlined } from "@ant-design/icons"
import { MathCaptcha } from '@/components/ui/MathCaptcha';

import { MoonLoader } from 'react-spinners';
import RetroGrid from '@/components/magicui/retro-grid';


export function Contactus() {



  const handleButtonClick = () => {
    const url = `https://maps.app.goo.gl/73auMtybp25uMKEe9`;
    window.open(url, '_blank');
  };

  const [formdata, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    description: ""

  });
  const [isLoading, setIsLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaResetKey, setCaptchaResetKey] = useState(0);

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement: any, message: any) => {
    api.open({
      message: `${message}`,
      // description:
      //   // 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      //   " ",
    });
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {

    const { name, value } = e.target;
    if (name === 'phoneNumber') {

      const filteredValue = value.replace(/[^0-9]/g, '');

      setFormData({
        ...formdata,
        [name]: filteredValue
      });
    } else {
      setFormData({
        ...formdata,
        [name]: value
      });
    }

    console.log(formdata)
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (formdata.name == "" || formdata.phoneNumber == "" || formdata.email == "" || formdata.description == "") {
      openNotification('bottomLeft', "All Fields Are Mandatory")
      // console.log("Response:")
    }
    else if (formdata.phoneNumber.length <= 9 || formdata.phoneNumber.length > 10) {
      openNotification("bottomLeft", "Enter Valid Mobile Number")
    }
    else if (!captchaToken) {
      openNotification('bottomLeft', "Please complete the Captcha");
    }
    else {
      try {
        setIsLoading(true)
        const payload = { ...formdata, captchaToken };
        const resposne = await axios.post("/api/contactus", payload)

        if (resposne.data.code === 998 || resposne.data.success) { // Consistent check based on your backend
          openNotification('bottomLeft', resposne.data.message)
          setFormData({
            name: "",
            phoneNumber: "",
            email: "",
            description: ""
          })
          setCaptchaToken(null);
          setCaptchaResetKey(prev => prev + 1);
        } else {
          openNotification('bottomLeft', resposne.data.message || "Something went wrong")
        }

        setIsLoading(false)
        console.log("Response:", resposne)
      } catch (error: any) {
        console.log("Error on Sending FormData", error)
        openNotification('bottomLeft', error.response?.data?.message || "Error sending message")
        setIsLoading(false)
      }
    }
  }



  return (

    <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden selection:bg-teal-500 selection:text-white underline-offset-4">

      {contextHolder}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto text-center">
        <RetroGrid className="absolute inset-0 z-0 h-full w-full opacity-50 pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/30 text-sm font-medium text-teal-600 dark:text-teal-400 mb-4 shadow-sm">
            Get in Touch
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
            Contact <span className="text-teal-500">Us</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            We'd love to hear from you! Whether you have a question, want to learn more about our services, or just want to say hello.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left Column: Contact Info & About */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">We're here to help</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                You can contact us by email, phone, or by visiting our office. We'll do our best to get back to you as soon as possible. Our team involves passionate professionals dedicated to providing top-notch services.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 transition-all hover:shadow-lg hover:border-teal-500/30 group">
                <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mb-4 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform">
                  <Image src={EmailIcon} alt="email" className="w-6 h-6 dark:invert" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 break-all">info@deltainfosoft.com</p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 transition-all hover:shadow-lg hover:border-teal-500/30 group">
                <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mb-4 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform">
                  <PhoneOutlined className="text-2xl" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">+91 7940371010</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">+91 8401281010</p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 transition-all hover:shadow-lg hover:border-teal-500/30 group sm:col-span-2">
                <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mb-4 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform">
                  <Image src={location} alt="location" className="w-6 h-6 dark:invert" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Locations</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Gujarat, Rajasthan</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Working Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="font-medium opacity-90">Monday - Saturday</span>
                    <span className="font-bold">9:30 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-medium opacity-90">Sunday</span>
                    <span className="font-bold bg-white/20 px-3 py-1 rounded-full text-sm">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 dark:border-gray-800 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-t-3xl"></div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Send us a message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formdata.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formdata.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tel" className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</Label>
                  <Input
                    id="tel"
                    name="phoneNumber"
                    value={formdata.phoneNumber}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-3 rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</Label>
                <Textarea
                  id="message"
                  name="description"
                  value={formdata.description}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all min-h-[150px]"
                />
              </div>

              <div className="pt-2">
                <MathCaptcha
                  key={captchaResetKey}
                  onVerify={(token) => setCaptchaToken(token)}
                />
              </div>

              <div className="pt-4">
                {isLoading ? (
                  <div className="flex justify-center p-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
                    <MoonLoader size={24} color='#14b8a6' />
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-lg hover:shadow-teal-500/30 transition-all transform hover:-translate-y-0.5 active:scale-95 text-lg"
                  >
                    Send Message
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto pb-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] border border-gray-100 dark:border-gray-800 group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3543088740485!2d72.5031458750914!3d23.010759579182118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b27a0d49685%3A0x77aeb4070c444489!2sDelta%20Infosoft%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1718367087290!5m2!1sen!2sin"
            className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div className="absolute bottom-6 left-6 z-10">
            <button
              onClick={handleButtonClick}
              className="flex items-center gap-2 bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-3 rounded-full shadow-lg hover:bg-teal-50 dark:hover:bg-gray-900 font-medium transition-colors border border-gray-200 dark:border-gray-700"
            >
              <Image src={location} alt="nav" className="w-5 h-5" />
              Get Directions
            </button>
          </div>
        </div>
      </section>

    </div>

  )
}
