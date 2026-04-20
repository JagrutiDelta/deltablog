import { cn } from "@/app/utils/cn"

export default function Highlight({
    children,
    className,
}) {
    return (
        <span
            className={cn(
                "font-bold bg-teal-100 text-teal-700 dark:bg-teal-700/[0.2] dark:text-teal-500 px-1 py-0.1",
                className
            )}
        >
            {children}
        </span>
    );
};