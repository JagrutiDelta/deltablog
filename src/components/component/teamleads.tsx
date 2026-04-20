
import Image from "next/image";
import ASMewada from "../../../public/Rectangle 1604AS.png"
import SandipSIr from "../../../public/VisionIMage.png"
import Pinkal from "../../../public/PP.png"
import Birwa from "../../../public/BB.png"
import Unknown from "../../../public/BM.png"
import YK from "../../../public/YK.png"
import Kaushik from "../../../public/KM.png"
import Mayur from "../../../public/MG.png"
import Pratik from "../../../public/PM.png"

const teamMembers = [
  {
    name: "Late AS Mevada",
    role: "CMD",
    description: "Chairman and Managing Director.",
    image: ASMewada,
  },
  {
    name: "Sandip Mevada",
    role: "Managing Director",
    description: "Business Strategy & Global Operations.",
    image: SandipSIr,
  },
  {
    name: "Kaushik Mevada",
    role: "Director",
    description: "Innovation & Product Development.",
    image: Kaushik,
  },
  {
    name: "Pratik Mevada",
    role: "COO - MyTime",
    description: "HRMS & Strategic Leadership.",
    image: Pratik,
  },
  {
    name: "Birwa Bhavsar",
    role: "COO - iAccount",
    description: "Operational Efficiency & Strategy.",
    image: Birwa,
  },
  {
    name: "Pinkal Patel",
    role: "COO - iERP",
    description: "Operations & Efficiency.",
    image: Pinkal,
  },
  {
    name: "Yogesh Kotadiya",
    role: "BDM",
    description: "Business Development & Team Building.",
    image: YK,
  },
  {
    name: "Mayur Gauswami",
    role: "Support Head",
    description: "Customer Support & Marketing.",
    image: Mayur,
  },
  {
    name: "Bina Mevada",
    role: "Branch Head",
    description: "Operations & Digital Transformation.",
    image: Unknown,
  },
];

export function Teamleads() {
  return (
    <div className="relative bg-white dark:bg-black text-gray-800 dark:text-white py-16 md:py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-teal-400/30 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500">
            Meet Our Team Leaders
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The visionaries and strategists driving our success and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 hover:shadow-teal-500/20 transition-all duration-300">
              <div className="relative w-full h-[400px] overflow-hidden">
                <Image
                  alt={member.name}
                  src={member.image}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="overflow-hidden">
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">
                      {member.name}
                    </h3>
                    <p className="text-teal-400 font-semibold text-lg mb-2 drop-shadow-sm">
                      {member.role}
                    </p>
                    <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                      <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-teal-500 pl-3">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
