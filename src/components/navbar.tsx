'use client';

import { navItems } from "@/data/content"
import { HotLink } from "hot-nav"
import { useEffect, useRef, useState } from "react";
import { scrollToSection } from '@/lib/utils'
import { useGSAP } from "@gsap/react";



export default function NavBar() {
  const navRef = useRef<HTMLDivElement[]>([]);
  const [currentSection, setCurrentSection] = useState<string>('experience')


  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!prefersReducedMotion) {

    }
  },[])

  useEffect(() => {
    // Intersection Observer options
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // Adjust as needed
    };

    // Callback function for the observer
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setCurrentSection(id);

          // Update the URL hash without adding a new history entry
          // router.replace(`#${id}`, undefined, { shallow: true });
          // setTimeout(() => {
          //   window.location.hash = `#${id}`;
          // }, 100)
        }
      });
    };

    // Initialize the observer
    const observer = new IntersectionObserver(callback, options);

    // Observe each section
    navItems.forEach((item) => {
      const { id } = item;
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    // Clean up the observer on unmount
    return () => {
      observer.disconnect();
    };
  })


  return (
    <>
      {navItems.map((item, idx) => (
        <div
          ref={(el: HTMLDivElement) => {
            if (el) navRef.current[idx] = el
          }}
          key={item.name}
        >
          <HotLink
            onClick={() => {
              scrollToSection(item.id)
            }}
            className={`flex px-3 py-2 text-2xl font-bold w-full rounded-md transition-colors duration-200 ${
              currentSection === item.id
                ? 'bg-black/50 dark:bg-primary backdrop-blur-xl text-primary-foreground font-medium'
                : 'hover:bg-black/20 dark:hover:bg-secondary/20 hover:backdrop-blur-xl text-foreground'
            }`}
          >
            {item.name}
          </HotLink>
        </div>
      ))}
    </>

  )
}
