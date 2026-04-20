"use client"
import { MagicCard, MagicContainer } from '@/components/magicui/magic-card'
import { BackgroundBeams } from '@/components/ui/background-beams'
import React, { useState, useRef } from 'react'
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
// import { Input, Form, Button } from 'antd';
import logo from "../../../public/deltainfosoftonly.png"
// import { InboxOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import Image from 'next/image';
import axios from "axios"

import { MoonLoader } from 'react-spinners';

import { MathCaptcha } from '@/components/ui/MathCaptcha';

const Contactus = () => {

  const [formdata, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    description: ""
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaResetKey, setCaptchaResetKey] = useState(0);

  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(false)
  const openNotification = (placement: any, message: any) => {
    api.open({
      message: `${message}`,
      // description:
      //   // 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      //   placement,
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

    // console.log(formdata)
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (formdata.name == "" || formdata.phoneNumber == "" || formdata.email == "" || formdata.description == "") {
      openNotification('bottomRight', "All Fields Are Mandatory")
      return;
    }

    if (!captchaToken) {
      openNotification('bottomRight', "Please complete the Captcha");
      return;
    }

    try {
      setIsLoading(true)
      const payload = { ...formdata, captchaToken };
      const resposne = await axios.post("/api/contactus", payload)

      if (resposne.data.code === 998 || resposne.data.success) { // consistent success check
        openNotification('bottomRight', resposne.data.message)
        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          description: ""
        })
        setCaptchaToken(null);
        setCaptchaResetKey(prev => prev + 1);
      } else {
        openNotification('bottomRight', resposne.data.message || "Something went wrong")
      }

      setIsLoading(false)
      console.log("Response:", resposne)
    } catch (error: any) {
      console.log("Error on Sending FormData", error)
      openNotification('bottomRight', error.response?.data?.message || "Error sending message")
      setIsLoading(false)
    }
  }

  return (
    <>

      {contextHolder}

      <div className="h-full w-full   relative flex flex-col items-center justify-start antialiased">
        <div className="flex mt-10 items-center p-3 justify-center  w-full">
          <MagicContainer className="relative flex h-full  flex-col lg:h-auto lg:flex-row items-center justify-center">
            <MagicCard
              borderWidth={5}
              className="relative flex w-full  flex-col lg:flex-row items-center justify-center bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#F86E04_0,#045C64_50%,#179092_70%)] p-20 shadow-2xl"
              style={{ overflow: 'visible' }}
            >
              <div className="flex w-full lg:w-1/2   flex-col items-center justify-center p-4 z-10">
                <Image
                  src={logo}
                  alt='Company Logo'
                  height={300}
                  width={300}
                  quality={100}
                  className=' mb-6'
                />
                <h1 className="text-lg md:text-7xl font-bold    text-center font-sans font-bold">
                  Reach Out Us
                </h1>
                <div className="mt-8 space-y-4">
                  <div className="flex text-2xl items-center text-black dark:text-neutral-300">
                    <PhoneOutlined className="mr-4" />
                    <span>(+91) 79403 71010</span>
                  </div>
                  <div className="flex text-2xl items-center  text-black dark:text-neutral-300">
                    <MailOutlined className="mr-4" />
                    <span>info@deltainfosoft.com</span>
                  </div>

                </div>
              </div>
              <BackgroundBeams />
              <div className="flex w-[20rem] lg:w-1/2  flex-col items-center justify-center p-4 z-10">
                <div className="max-w-md mx-auto p-6 rounded-lg ">
                  <h2 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">Fill This form</h2>
                  <form onSubmit={handleSubmit}>
                    <input type="text" id='name' name='name' value={formdata.name} onChange={handleChange} placeholder="Name" className="w-full p-2 mb-4 border-b-2 border-b-teal-600 rounded-md focus:outline-none  bg-transparent  dark:placeholder-zinc-400 dark:text-white" />
                    <input type="email" id='email' name='email' value={formdata.email} onChange={handleChange} placeholder="E-mail Address" className="w-full p-2 mb-4 border-b-2 rounded-md focus:outline-none bg-transparent  border-b-teal-600 dark:placeholder-zinc-400 dark:text-white" />
                    <input type="tel" id='phoneNumber' name='phoneNumber' value={formdata.phoneNumber} onChange={handleChange} placeholder="Contact Number" className="w-full p-2 mb-4 border-b-2 rounded-md focus:outline-none  bg-transparent border-b-teal-600 dark:placeholder-zinc-400 dark:text-white" />
                    <textarea id='description' name='description' value={formdata.description} onChange={handleChange} placeholder="How we can help you?" className="w-full p-2 mb-4 border-b-2 rounded-md focus:outline-none  bg-transparent border-b-teal-600 dark:placeholder-zinc-400 dark:text-white"></textarea>

                    <div className="flex justify-center mt-4 w-full">
                      <MathCaptcha
                        key={captchaResetKey}
                        onVerify={(token) => setCaptchaToken(token)}
                      />
                    </div>

                    {isLoading ? <><MoonLoader className='flex justify-center' size={20} color='white' /></> :
                      <button type="submit" className="w-full my-2 p-2 bg-black text-white rounded-md hover:bg-zinc-900 dark:bg-zinc-900 dark:hover:bg-zinc-700">Submit</button>}
                  </form>
                </div>
              </div>
            </MagicCard>
          </MagicContainer>
        </div>
      </div >

    </>
  )
}

export default Contactus
