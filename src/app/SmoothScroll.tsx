'use client'; 

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}
 
export default function SmoothScroll({ children }: SmoothScrollProps) {
    useEffect(() => {
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        });
      
        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
      
        requestAnimationFrame(raf);
      
        // Handle anchor links smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', (e) => {
            const target = e.currentTarget as HTMLAnchorElement;
            e.preventDefault();
            const targetId = target.getAttribute('href');
            if (targetId && targetId !== '#') {
               const targetElement = document.querySelector(targetId);
               if (targetElement) {
                 lenis.scrollTo(targetElement as HTMLElement);
               }
            }
          });
        });
      
        return () => {
          lenis.destroy();
        };
      }, []);
      
  return <>{children}</>;
}
