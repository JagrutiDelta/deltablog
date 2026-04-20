import product1 from "../../../public/mytimeproduct.png"
import { UpdateIcon } from "@radix-ui/react-icons"
import { IconCertificate, IconFileTypePdf, IconLoadBalancer } from "@tabler/icons-react"
import { Download, Fingerprint, LogInIcon, UserCheck2 } from "lucide-react"
import Image from "next/image"
import { JSX, SVGProps } from "react"

export function Product() {
  return (
    <div className="flex flex-col">

      <section className="grid grid-cols-1 md:grid-cols-2 px-auto lg:px-10 gap-8 py-12 md:py-24 lg:py-32">
        <div className="grid gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Key Features</h1>
            <p className="text-gray-500 mt-2 text-lg dark:text-gray-400">
              Streamline your workflows and boost productivity with our cutting-edge software solution.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mt-2"><UserCheck2 className="h-10" /> Intuitive User Interface</h3>
              <p className="text-gray-500 mt-1 dark:text-gray-400">
                Our software boasts a clean and user-friendly interface, making it easy for your team to navigate and
                get work done.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 dark:bg-gray-800">
              {/* <GaugeIcon className="w-8 h-8 text-gray-900 dark:text-gray-50" /> */}
              <h3 className="text-lg font-semibold mt-2"><Fingerprint className="h-10" /> Bio Matrix</h3>
              <p className="text-gray-500 mt-1 dark:text-gray-400">Leverages biometric technology to enhance security and streamline user authentication.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 dark:bg-gray-800">
              {/* <GaugeIcon className="w-8 h-8 text-gray-900 dark:text-gray-50" /> */}
              <h3 className="text-lg font-semibold mt-2"> <IconLoadBalancer className="h-10" /> Leave Balances</h3>
              <p className="text-gray-500 mt-1 dark:text-gray-400">Comprehensive overview of your accrued leave.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mt-2"><UpdateIcon className="h-10" /> Comprehensive Support</h3>
              <p className="text-gray-500 mt-1 dark:text-gray-400">
                Regular software updates to ensure you're always getting the best
                experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mt-2"><LogInIcon className="h-10" /> Web Check-in</h3>
              <p className="text-gray-500 mt-1 dark:text-gray-400">
                Keep accurate records of your work hours and ensure compliance with company policies from anywhere.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 dark:bg-gray-800">
              {/* <ShieldIcon className="w-8 h-8 text-gray-900 dark:text-gray-50" /> */}
              <h3 className="text-lg font-semibold mt-2"><IconFileTypePdf className="h-10" /> Salary View</h3>
              <p className="text-gray-500 mt-1 dark:text-gray-400">This tool provides detailed insights into your salary structure, including basic pay, allowances, deductions, and net salary.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 dark:bg-gray-800">
              {/* <ShieldIcon className="w-8 h-8 text-gray-900 dark:text-gray-50" /> */}
              <h3 className="text-lg font-semibold mt-2"><Download className="h-10" /> Download PaySlip</h3>
              <p className="text-gray-500 mt-1 dark:text-gray-400">Download PaySlip feature, you can easily download your monthly payslips directly from the application.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mt-2"><IconCertificate className="h-10" /> Download Certificates</h3>
              <p className="text-gray-500 mt-1 dark:text-gray-400">
                Download various certificates directly from the application, saving you time and ensuring you have the necessary documents at your fingertips.


              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full lg:flex-row ">

          <div className="flex-1 flex justify-center items-center">
            <Image
              src={product1}
              alt="Product Showcase 2"
              width={600}
              className="h-full rounded-lg object-cover"
            />
          </div>
        </div>

      </section>
      <section className="py-12  sm:p-5 md:p-5 lg:p-3 flex justify-center  md:py-24 lg:py-32">
        <div className="container text-center">
          <h1 className="lg:text-6xl font-bold tracking-tighter text-3xl sm:text-3xl md:text-5xl">Product Details</h1>
          <p className="mx-auto mt-10 max-w-[1300px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Delta MyTime is a comprehensive employee management application designed to simplify HR processes and enhance the overall experience for both employees and administrators. The application focuses on key features, including attendance tracking, leave management, and salary slip access.  </p>
        </div>
      </section>
      <section className=" flex justify-center items-center py-12 md:py-24 lg:py-32">
        <div className=" container px-4 md:px-6">
          <div className=" grid gap-6 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Implementation Measures</h2>
              <p className="text-gray-500 mt-2 text-lg dark:text-gray-400">
                Learn how to set up and start using our software solution.
              </p>
            </div>
            <div className="grid gap-10">
              <div>
                <h3 className="text-2xl lg:text-2xl md:text-xl sm:text-lg font-semibold">Simple Setup</h3>
                <p className="text-gray-500 mt-1 dark:text-gray-400">
                  Our software is designed for rapid deployment. The setup process includes an intuitive installation wizard that guides administrators through the configuration steps.
                  Default settings are optimized for quick start, while advanced options allow for customized configurations to meet specific organizational needs.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-2xl md:text-xl sm:text-lg font-semibold">Security Measures</h3>
                <p className="text-gray-500 mt-1 dark:text-gray-400">
                  Delta MyTime employs robust encryption to ensure the security and confidentiality of employee data.<br />
                  Access controls are implemented to restrict sensitive information to authorized personnel. </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-2xl md:text-xl sm:text-lg font-semibold">User-Friendly Interface</h3>
                <p className="text-gray-500 mt-1 dark:text-gray-400">
                  The application features a responsive design, ensuring compatibility across various devices and screen sizes.
                  It utilizes modern UI/UX principles, with a focus on ease of navigation and accessibility, incorporating ARIA roles and attributes to support assistive technologies.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-2xl md:text-xl sm:text-lg font-semibold">Mobile Accessibility</h3>
                <p className="text-gray-500 mt-1 dark:text-gray-400">
                  Delta MyTime is optimized for mobile devices through progressive web application (PWA) technology, ensuring fast load times and offline functionality.
                  Employees can access all features, including time tracking and leave requests, through a seamless mobile interface.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-2xl md:text-xl sm:text-lg font-semibold">Onboarding Assistance</h3>
                <p className="text-gray-500 mt-1 dark:text-gray-400">
                  We provide comprehensive onboarding support, including detailed documentation, video tutorials, and live training sessions.
                  Our support team is available 24/7 to assist with any queries, ensuring a smooth transition and effective use of the software from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 flex justify-center md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">See Our Software in Action</h2>
              <p className="text-gray-500 mt-2  text-lg dark:text-gray-400">
                Watch a video showcasing the key features and capabilities of our software solution.
              </p>
            </div>

            <div className="relative overflow-hidden mt-20 flex justify-center rounded-xl">
              <iframe
                src="https://www.youtube.com/embed/PmzDBEJ1Lb0?si=vWZ_hPhwVyO38TWK&autoplay=1&rel=0"
                className="w-full h-screen rounded-2xl"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}
