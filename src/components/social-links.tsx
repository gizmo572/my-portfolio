'use client';

import { useRef } from "react";
import Image from 'next/image';
import { HotLink } from "hot-nav";
import ThemeSwitch from "./theme-switch";
import { useGSAP } from "@gsap/react";




export default function SocialLinks() {
  const contactRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!prefersReducedMotion) {

    }
  },[])


  return (
    <div ref={contactRef} className="grid grid-cols-2 xs:flex justify-center lg:justify-start items-center">
      <ThemeSwitch />
      <HotLink
        href="https://github.com/gizmo572" 
        target="_blank" rel="noopener noreferrer" className='sphere flex items-center justify-center rounded-full p-4'>
        <Image
          src="/social/github.svg"
          alt="github"
          width={50}
          height={50}
          className='hover:opacity-80 hover:animate-pulse dark:invert min-w-[50px] min-h-auto'
        />
      </HotLink>
      <HotLink 
        href="https://www.linkedin.com/in/nicholas-cushman/" target="_blank" rel="noopener noreferrer" className='sphere flex items-center justify-center rounded-full p-4'>
        <Image
          src="/social/linkedin.svg"
          alt="linkedin"
          width={50}
          height={50}
          className='hover:opacity-80 hover:animate-pulse min-w-[50px] min-h-auto'
        />
      </HotLink>
      <HotLink
        href="mailto:cushmann572@gmail.com" 
        target="_blank" rel="noopener noreferrer" className='sphere flex items-center justify-center rounded-full p-4'>
        <Image
          src="/social/gmail.svg"
          alt="gmail"
          width={50}
          height={50}
          className='hover:opacity-80 hover:animate-pulse dark:fill-white min-w-[50px] min-h-auto'
        />
      </HotLink>
    </div>
  )
}