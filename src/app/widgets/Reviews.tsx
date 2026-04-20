"use client"
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
import { motion } from "framer-motion";

// Import all logos
import AngelLogo from "../../../public/Clientlogo/Logo/AnGelLogos.png"
import Banas from "../../../public/Clientlogo/Logo/BanasLogos.png"
import Chem from "../../../public/Clientlogo/Logo/ChemLogos.png"
import FlowTech from "../../../public/Clientlogo/Logo/ChemLogos-1.png"
import Desire from "../../../public/Clientlogo/Logo/DesireLogos.png"
import Duke from "../../../public/Clientlogo/Logo/DukeLogos.png"
import GA from "../../../public/Clientlogo/Logo/GALogos.png"
import GrundForce from "../../../public/Clientlogo/Logo/GrundFosLogos.png"
import Harshidh from "../../../public/Clientlogo/Logo/HarsiddhLogos.png"
import Indifos from "../../../public/Clientlogo/Logo/IndifosLogos.png"
import Leakproof from "../../../public/Clientlogo/Logo/Leak ProofLogos.png"
import pacific from "../../../public/Clientlogo/Logo/PacificLogos.png"
import prompt from "../../../public/Clientlogo/Logo/PromptLogos.png"
import ratanmani from "../../../public/Clientlogo/Logo/RatanmaniLogos.png"
import Rotodel from "../../../public/Clientlogo/Logo/RotodelLogos.png"
import Waterman from "../../../public/Clientlogo/Logo/WatermanLogos.png"
import adityabirla from "../../../public/Clientlogo/Logo/Aditya Birla Fashion And Retail.png"
import vasant from "../../../public/Clientlogo/Logo/VASANT.png"
import RC from "../../../public/Clientlogo/Logo/RC.png"
import LT from "../../../public/Clientlogo/Logo/L&T.png"
import hayat from "../../../public/Clientlogo/Logo/Hayat.png"
import DE from "../../../public/Clientlogo/Logo/DE.png"
import ATUL from "../../../public/Clientlogo/Logo/ATUL.png"
import AMUL from "../../../public/Clientlogo/Logo/AMUL.png"
import ALGO from "../../../public/Clientlogo/Logo/ALGO.png"

const reviews = [
  { img: AngelLogo.src },
  { img: Waterman.src },
  { img: Rotodel.src },
  { img: ratanmani.src },
  { img: pacific.src },
  { img: Banas.src },
  { img: Chem.src },
  { img: FlowTech.src },
  { img: Desire.src },
  { img: Duke.src },
  { img: GA.src },
  { img: GrundForce.src },
  { img: Harshidh.src },
  { img: Indifos.src },
  { img: Leakproof.src },
  { img: prompt.src },
  { img: adityabirla.src },
  { img: vasant.src },
  { img: RC.src },
  { img: LT.src },
  { img: hayat.src },
  { img: DE.src },
  { img: ATUL.src },
  { img: AMUL.src },
  { img: ALGO.src },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 h-32 cursor-pointer overflow-hidden rounded-[2.5rem] border p-8 mx-4",
        "bg-white/50 dark:bg-neutral-900/30 backdrop-blur-sm",
        "border-neutral-100 dark:border-neutral-800",
        "transition-all duration-700 hover:scale-105 hover:bg-white dark:hover:bg-neutral-900 hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/5 group"
      )}
    >
      <div className="flex items-center justify-center h-full w-full">
        <Image 
          className="object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
          width={180} 
          height={60} 
          alt="Brand Logo" 
          src={img} 
        />
      </div>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white dark:bg-neutral-950 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/20 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1700px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-neutral-500 dark:text-neutral-400 font-black uppercase tracking-[0.2em] text-[9px]">Global Network</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none mb-8">
            Trusted by the World’s<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Leading Companies</span>
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 font-medium max-w-3xl leading-relaxed">
            From emerging startups to global giants, we power the technical operations for industry leaders across manufacturing, trading, and technology.
          </p>
        </div>

        <div className="relative flex flex-col items-center gap-8 py-10">
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((review, idx) => (
              <ReviewCard key={idx} img={review.img} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s]">
            {secondRow.map((review, idx) => (
              <ReviewCard key={idx} img={review.img} />
            ))}
          </Marquee>
          
          {/* Side Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-neutral-950 px-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-neutral-950 px-10"></div>
        </div>
      </div>
    </section>
  );
};

export { MarqueeDemo };

