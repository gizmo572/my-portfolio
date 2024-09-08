'use client'

import { useState, useRef } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef<HTMLAnchorElement[]>([]);
  const headerRef = useRef<HTMLAnchorElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!prefersReducedMotion) {
      const t1 = gsap.timeline({ defaults: { ease: 'power3.out' } });

      t1.from(navRef.current[1], {
        x: -500,
        y: -500,
        duration: 1
      }, .5)
      t1.from(navRef.current[0], {
        x: -500,
        y: -500,
        duration: 1
      }, 1)

      t1.from(navRef.current[2], {
        x: 500,
        y: -500,
        duration: 1
      }, .5)
      t1.from(navRef.current[3], {
        x: 500,
        y: -500,
        duration: 1
      }, 1)
      t1.from(headerRef.current, {
        x: -500,
        y: -500,
        duration: 1
      }, 1.5)
      t1.from(contactRef.current, {
        x: 500,
        y: -500,
        duration: 1
      }, 1.5)

    }
  },[])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-background text-foreground shadow-md dark:bg-gray-800 dark:text-white transition-colors duration-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link ref={headerRef} href="/" className="text-2xl font-bold hover:text-primary transition-colors duration-200">
            Nick&apos;s Portfolio
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          {['Home', 'Projects', 'About', 'Blog'].map((item, idx) => (
            <Link
              ref={(el) => {
                if (el) navRef.current[idx] = el
              }}
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:text-primary transition-colors duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div ref={contactRef} className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Contact Me
          </Link>
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={toggleMenu} className="transition-transform duration-200 hover:scale-110">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-2">
            {['Home', 'Projects', 'About', 'Blog'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="hover:text-primary transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors duration-200 inline-block"
            >
              Contact Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}