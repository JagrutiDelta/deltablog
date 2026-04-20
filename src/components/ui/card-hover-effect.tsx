"use client";
import { cn } from "@/app/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CardItem } from "./3d-card";
import { CheckCircle2 } from "lucide-react";


export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        link: string;
        image: string;
        feature: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 gap-6 px-4 md:px-0",
                className
            )}
        >
            {items.map((item, idx) => (
                <div

                    className="relative group block p-2 w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-teal-200 dark:bg-teal-500/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        {item.image !== "" ? (
                            <div className="relative flex items-center justify-center h-48 w-full overflow-hidden bg-gray-100 dark:bg-neutral-900 rounded-xl mb-6">
                                <Image
                                    src={item.image}
                                    height={400}
                                    width={400}
                                    quality={100}
                                    alt={item.title}
                                    className="object-contain w-full h-full p-4 transition-transform duration-500 group-hover:scale-110 dark:invert-0 invert"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-black/20 to-transparent pointer-events-none" />
                            </div>
                        ) : null}
                        <div>
                            <CardTitle className="lg:text-3xl font-bold tracking-tight break-words">{item.title}</CardTitle>
                            <CardDescription className="line-clamp-3 break-words">{item.description}</CardDescription>
                            {item.feature && (
                                <div className="mt-6 space-y-2">
                                    <p className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">Key Capabilities</p>
                                    <ul className="space-y-1">
                                        {item.feature.split('\n').map((feat, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-neutral-400 break-words">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-1" />
                                                <span className="flex-1">{feat.trim()}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </Card>

                </div>
            ))}
        </div>
    );
};


export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-white dark:bg-black border border-gray-200 dark:border-transparent dark:border-white/[0.2] group-hover:border-teal-400 dark:group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-gray-700 dark:text-zinc-300 leading-loose tracking-wide text-lg text-teal-500 dark:text-teal-300 mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-gray-600 dark:text-zinc-400 leading-loose tracking-wide text-md break-words",
                className
            )}
        >
            {children}
        </p>
    );
};
