'use client';

import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    
    // Set initial value
    setIsDarkMode(darkModeMediaQuery.matches);
    
    darkModeMediaQuery.addEventListener('change', handler);
    return () => darkModeMediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme={isDarkMode ? "dark" : "system"} enableSystem>
      {children}
    </ThemeProvider>
  );
}
