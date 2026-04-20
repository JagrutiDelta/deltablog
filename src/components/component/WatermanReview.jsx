"use client"
import Image from "next/image";
import waterman from "../../../public/Clientlogo/image 109waterman.png";
import Desire from "../../../public/Clientlogo/Logo/DesireLogos.png";
import GauravGupta from "../../../public/Clientlogo/GouravGupta.png";
import AakashPAtel from "../../../public/Clientlogo/AkashPatel.png";
import play from "../../../public/Clientlogo/output-onlinegiftools.gif";
import Highlight from "@/app/widgets/Highlight";
import { useState } from "react";
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Quote } from "lucide-react";

export default function WatermanReview() {
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);

    const reviews = [
        {
            id: 'desire',
            visible: visible1,
            setVisible: setVisible1,
            videoUrl: "https://www.youtube.com/embed/MtWF0UNyMUw?autoplay=1&rel=0&loop=1&playlist=MtWF0UNyMUw",
            image: GauravGupta,
            logo: Desire,
            logoWidth: 180,
            quote: "Delta Team is our IT Partner since <Highlight>10 years</Highlight>, they have made managing our day-to-day work simple and easy for us in <Highlight>Delta iERP and Mobile Applications</Highlight>. Behind the growth of Desire Energy, there are <Highlight>equally strong contributions</Highlight> from Delta.",
            author: "Gaurav Gupta",
            designation: "Managing Director, Desire Energy Solutions"
        },
        {
            id: 'waterman',
            visible: visible,
            setVisible: setVisible,
            videoUrl: "https://www.youtube.com/embed/a4TAZsAiRks?autoplay=1&rel=0&loop=1&playlist=a4TAZsAiRks",
            image: AakashPAtel,
            logo: waterman,
            logoWidth: 240,
            quote: "A big thank you from all of us at <Highlight><em>Waterman Pumps</em></Highlight> for developing our iERP solution. Your expertise and dedication have truly enhanced our operations, making everything run <Highlight>smoother and more efficiently.</Highlight>",
            author: "Aakash Patel",
            designation: "Executive Director, Waterman Pumps Pvt Ltd"
        }
    ];

    return (
        <div className="py-24 relative">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-5 dark:opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full" />
            </div>

            <Carousel
                plugins={[Autoplay({ delay: 6000 })]}
                className="max-w-[1700px] mx-auto px-6"
            >
                <CarouselContent>
                    {reviews.map((review) => (
                        <CarouselItem key={review.id}>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch bg-white dark:bg-neutral-900 rounded-[4rem] p-8 md:p-14 lg:p-20 border border-gray-100 dark:border-neutral-800 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] overflow-hidden group"
                            >
                                {/* Video Section */}
                                <div className="relative w-full aspect-video lg:aspect-square rounded-[3rem] overflow-hidden bg-neutral-100 dark:bg-neutral-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
                                    <AnimatePresence mode="wait">
                                        {review.visible ? (
                                            <motion.iframe
                                                key="video"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                src={review.videoUrl}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="absolute inset-0 w-full h-full"
                                            />
                                        ) : (
                                            <motion.div
                                                key="thumbnail"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="absolute inset-0"
                                            >
                                                <Image
                                                    src={review.image}
                                                    alt={review.author}
                                                    fill
                                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-neutral-900/40 group-hover:bg-neutral-900/20 transition-colors" />
                                                <button
                                                    onClick={() => review.setVisible(true)}
                                                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 group/play"
                                                >
                                                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center group-hover/play:bg-teal-500 group-hover/play:scale-110 transition-all duration-500 shadow-2xl">
                                                        <Play className="w-10 h-10 text-white fill-white translate-x-1" />
                                                    </div>
                                                    <span className="text-white font-black uppercase tracking-[0.3em] text-[10px] drop-shadow-md">Play Success Story</span>
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Content Section */}
                                <div className="flex flex-col justify-center relative">
                                    <div className="absolute -top-10 -right-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                                        <Quote size={300} weight="fill" className="text-teal-500" />
                                    </div>

                                    <div className="relative z-10 space-y-12">
                                        <div className="flex items-center gap-6">
                                            <div className="h-0.5 w-12 bg-teal-500" />
                                            <Image 
                                                src={review.logo} 
                                                alt="Company Logo" 
                                                width={review.logoWidth} 
                                                height={80} 
                                                className="object-contain opacity-80 dark:invert dark:brightness-200" 
                                            />
                                        </div>

                                        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-neutral-800 dark:text-neutral-100 italic tracking-tight">
                                            <span 
                                                dangerouslySetInnerHTML={{ 
                                                    __html: review.quote.replace(/<Highlight>(.*?)<\/Highlight>/g, '<span class="text-teal-600 dark:text-teal-400 font-black">$1</span>') 
                                                }} 
                                            />
                                        </blockquote>

                                        <div className="flex flex-col gap-2">
                                            <p className="text-2xl font-black text-neutral-900 dark:text-white tracking-tight">
                                                {review.author}
                                            </p>
                                            <p className="text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest text-xs">
                                                {review.designation}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-end gap-4 mt-12">
                    <CarouselPrevious className="static translate-y-0 w-16 h-16 rounded-full border-neutral-200 dark:border-neutral-800 hover:border-teal-500 transition-all duration-500" />
                    <CarouselNext className="static translate-y-0 w-16 h-16 rounded-full border-neutral-200 dark:border-neutral-800 hover:border-teal-500 transition-all duration-500" />
                </div>
            </Carousel>
        </div>
    );
}