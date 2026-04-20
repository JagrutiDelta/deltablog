"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/app/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
// import { Console } from "console";
import logo from "../../../public/Logo.png"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  const [active, setActive] = useState<string | null>(null);

  const [clickedCategory, setClickedCategory] = useState<string | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() == 0) {
        setVisible(true);
        console.log("Still", scrollYProgress.get())
        // console.log(navItems)

      } else {
        if (direction < 0) {
          // console.log("UPPPPPPP", direction)
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "hidden sm:flex md:flex max-w-[95%] lg:max-w-[85rem] bg-white/70 dark:bg-black/70 backdrop-blur-2xl fixed text-sm inset-x-0 mx-auto border border-white/20 dark:border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-[5000] px-8 py-2 items-center justify-between gap-4 top-6 transition-all duration-300",
          className
        )}
      >
        <div className="flex items-center">
          <Link href={"/"} className="relative group">
            <Image src={logo} alt="Logo" width={140} height={90} className="transition-transform duration-300 group-hover:scale-105 drop-shadow-md" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
          </Link>
        </div>


        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} href="/" active={active} item="Home" />
          <MenuItem setActive={setActive} href="/technology" active={active} item="Technology" />
          <MenuItem setActive={setActive} href="/services" active={active} item="Services" />


          {navItems?.map((navItem: any, idx: number) => (
            <MenuItem key={idx} setActive={setActive} href={`${navItem.link}`} active={active} item={`${navItem.name}`}>
              {navItem.productCategory ? (
                <div className="flex flex-col space-y-5 text-lg">
                  {Object.keys(navItem.productCategory)?.map((category, categoryIdx) => (
                    <div key={categoryIdx}>
                      <div className="text-gray-800 dark:text-gray-200 font-bold text-lg mb-4 pb-2 border-b border-gray-200 dark:border-neutral-700">
                        {category}
                      </div>
                      <div className={cn("grid gap-6 mt-4", navItem.name === "Industry we Serve" ? "grid-cols-2 w-[40rem]" : "grid-cols-3")}>
                        {navItem.productCategory[category]?.[0]?.products?.map((product: any, productIdx: any) => (
                          <ProductItem
                            key={productIdx}
                            href={product.href}
                            title={product.title}
                            src={product.src}
                            description={product.description}
                            target={product.target}
                            className={navItem.name === "Industry we Serve" ? "p-4 border border-gray-100 dark:border-neutral-800 rounded-xl hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors" : ""}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col space-y-3">
                  {navItem.nestedSelection?.map((nestedItem: any, nestedIdx: any) => (
                    <HoveredLink key={nestedIdx} href={`${nestedItem.link}`} target={nestedItem.target}>
                      {nestedItem.name}
                    </HoveredLink>
                  ))}
                </div>
              )}

            </MenuItem>

            // <MenuItem key={idx} setActive={setActive} href={`${navItem.link}`} active={active} item={`${navItem.name}`}>

            //   {navItem.productCategory ?
            //     <>
            //       <div className="flex flex-col space-y-5 text-lg">
            //         {clickedCategory !== null && (<>

            //           <button onClick={() => setClickedCategory(null)} className="border w-28 flex justify-center item-center text-lg font-medium relative my-3 border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-3 rounded-full">
            //             <span>Back</span>
            //             <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            //           </button>
            //         </>
            //         )}
            //         {clickedCategory === null ? (
            //           Object.keys(navItem.productCategory)?.map((nestedItem, nestedIdx) => (
            //             <div
            //               key={nestedIdx}
            //               className="text-neutral-700 dark:text-neutral-200 cursor-pointer"
            //               onClick={() => setClickedCategory(nestedItem)}
            //             >
            //               {nestedItem}
            //             </div>
            //           ))
            //         ) : (
            //           <div className="grid grid-cols-3 gap-10">
            //             {navItem.productCategory[clickedCategory]?.[0]?.products?.map((product: any, productIdx: any) => (
            //               <ProductItem
            //                 key={productIdx}
            //                 href={product.href}
            //                 title={product.title}
            //                 src={product.src}
            //                 description={product.description}
            //               />
            //             ))}
            //           </div>
            //         )}
            //       </div>

            //     </> :
            //     <>
            //       <div className="flex flex-col space-y-4 text-xl">
            //         {navItem.nestedSelection?.map((nestedItem: any, nestedIdx: number) => (
            //           <HoveredLink key={nestedIdx} href={`${nestedItem.link}`}>
            //             {nestedItem.name}
            //           </HoveredLink>
            //         ))}
            //       </div>
            //     </>}
            // </MenuItem>
          ))}
        </Menu>

        <div className="flex items-center gap-4">
          <Link href={"/contactus"}>
            <button className="hidden sm:inline-flex relative group px-6 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] overflow-hidden">
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shimmer" />
            </button>
          </Link>
        </div>
      </motion.div>

    </AnimatePresence >
  );
};
