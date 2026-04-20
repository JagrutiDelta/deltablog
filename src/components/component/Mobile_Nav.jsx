"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/Logo.png";
import { DownOutlined } from "@ant-design/icons";
import { cn } from "@/app/utils/cn";


export const MobileNav = ({ navItems }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() === 0) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className="flex lg:hidden md:hidden flex bg-white/80 dark:bg-black/80 backdrop-blur-2xl flex-col w-full fixed top-0 z-50 transition-all duration-300">
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-white/5">
        <Link href={"/"} className="relative transition-transform active:scale-95">
          <Image src={logo} alt="Logo" width={110} height={70} className="drop-shadow-sm" />
        </Link>
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 focus:outline-none transition-colors active:bg-gray-200 dark:active:bg-white/10"
          >
            {menuOpen ? <span className="text-xl">✕</span> : <span className="text-2xl">☰</span>}
          </button>
        )}
      </div>
      <AnimatePresence>
        {(menuOpen || !isMobile) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-white/95 dark:bg-neutral-950/95 backdrop-blur-3xl shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              <Link href={"/"} className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
              <Link href={"/services"} className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400" >Services</Link>
              <Link href={"/technology"} className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400" >Technologies</Link>

              {navItems.map((navItem, idx) => (
                <div key={idx} className="relative">
                  <div
                    onClick={() =>
                      setActive(active === navItem.name ? null : navItem.name)
                    }
                    className="cursor-pointer py-2"
                  >
                    <Link href={`${navItem.link}`}>
                      <span className="flex items-center text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400">
                        {navItem.name}
                        {navItem.productCategory || navItem.nestedSelection ? <><DownOutlined className="ml-2 text-xs" /> </> : <></>}
                      </span>
                    </Link>
                  </div>
                  <AnimatePresence>
                    {(active === navItem.name || !isMobile) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 border-l-2 border-teal-100 dark:border-teal-900/30 ml-1 space-y-2 mb-2"
                      >
                        {navItem.productCategory ? (
                          <div className="py-2">
                            {Object.keys(navItem.productCategory).map(
                              (category, catIdx) => (
                                <div key={catIdx} className="mb-2">
                                  <div
                                    onClick={() => handleCategoryClick(category)}
                                    className="flex items-center text-gray-600 dark:text-gray-400 cursor-pointer hover:text-teal-600 dark:hover:text-teal-400 group"
                                  >
                                    <span className="flex items-center text-sm font-bold uppercase tracking-wider">
                                      {category}
                                      <DownOutlined className={cn("ml-2 text-[10px] transition-transform duration-200", selectedCategory === category ? "rotate-180" : "")} />
                                    </span>
                                  </div>
                                  <AnimatePresence>
                                    {selectedCategory === category && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden pl-3 mt-2 space-y-3"
                                      >
                                        {navItem.productCategory[category][0].products.map(
                                          (product, productIdx) => (
                                            <div key={productIdx}>
                                              <Link
                                                href={product.href}
                                                className="block text-base text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                                                {...(product.href.startsWith('http') || product.target === '_blank' ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                              >
                                                {product.title}
                                              </Link>
                                            </div>
                                          )
                                        )}
                                      </motion.div>
                                    )}

                                  </AnimatePresence>
                                </div>
                              )
                            )}
                          </div>
                        ) : (
                          <div className="flex flex-col py-2 space-y-3">
                            {navItem.nestedSelection.map(
                              (nestedItem, nestedIdx) => (
                                <Link
                                  key={nestedIdx}
                                  href={nestedItem.link}
                                  className="text-base text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                                  {...(nestedItem.link.startsWith('http') || nestedItem.target === '_blank' ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                >
                                  {nestedItem.name}
                                </Link>
                              )
                            )}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pt-4 pb-2">
                <Link href={"/contactus"}>
                  <button className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold text-lg shadow-[0_10px_20px_rgba(20,184,166,0.3)] active:scale-[0.98] transition-all">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};
