"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/app/utils/cn";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, 27);
  const secondPart = images.slice(27, 53);
  const thirdPart = images.slice(53);

  return (
    <div
      className={cn("h-full items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-8xl mx-auto gap-20 py-20 sm:pl-10 pl-10 lg:pl-0 pr-10 "
        ref={gridRef}
      >
        <div className="grid gap-20">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
            >
              <img
                src={el}
                className="h-auto w-full object-cover object-left-top rounded-xl gap-20 !m-0 !p-0"
                height="400"
                width="500"
                alt={el}
                // onError={() => console.log("Image failed to load:", el)}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-20">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Image
                src={el}
                className="h-auto w-full object-cover object-left-top rounded-xl gap-20 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-20">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <Image
                src={el}
                className="h-auto w-full object-cover object-left-top rounded-xl gap-20 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
