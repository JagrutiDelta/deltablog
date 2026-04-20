"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/app/utils/cn";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  href,
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  href: string,
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative group/menuitem">
      <Link href={href} className="flex items-center">
        <motion.p
          transition={{ duration: 0.3 }}
          className={cn(
            "cursor-pointer transition-all duration-300 font-medium px-4 py-2 rounded-full text-base",
            active === item
              ? "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 shadow-sm"
              : "text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-gray-100 dark:hover:bg-white/5"
          )}
        >
          {item}
        </motion.p>
      </Link>
      {active !== null && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4 z-[6000]">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white/95 dark:bg-neutral-950/95 backdrop-blur-2xl rounded-[2rem] overflow-hidden border border-gray-200/50 dark:border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.18)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
              >
                <motion.div
                  layout
                  className="w-max h-full p-6 md:p-8"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}

    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex justify-center items-center space-x-1 lg:space-x-2 px-2 py-1"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
  className,
  target,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
  className?: string;
  target?: string;
}) => {
  const isExternal = href.startsWith('http') || target === "_blank";
  return (
    <Link
      href={href}
      className={cn(
        "flex space-x-4 p-3 rounded-2xl transition-all duration-300 group/product hover:bg-teal-50/50 dark:hover:bg-teal-900/10 border border-transparent hover:border-teal-100 dark:hover:border-teal-900/30",
        className
      )}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {src !== "" && (
        <div className="flex-shrink-0 w-10 h-10 relative rounded-xl overflow-hidden shadow-md group-hover/product:shadow-teal-200/50 dark:group-hover/product:shadow-teal-900/20 transition-all duration-300 group-hover/product:scale-105">
          <Image
            src={src}
            fill
            alt={title}
            className="object-contain p-1"
          />
        </div>
      )}
      <div className="flex flex-col justify-center">
        <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover/product:text-teal-600 dark:group-hover/product:text-teal-400 transition-colors">
          {title}
        </h4>
        {description && (
          <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed max-w-[15rem] mt-0.5 line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  const isExternal = rest.href?.startsWith('http') || rest.target === "_blank";
  return (
    <Link
      {...rest}
      className="block py-1.5 px-3 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/10 transition-all duration-200"
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
};
