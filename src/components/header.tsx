'use client'

import { useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import { HotLink } from 'hot-nav'
import ThemeSwitch from './theme-switch';
import { onLoadSimultaneousHeader } from './features/animations';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!prefersReducedMotion) {
      onLoadSimultaneousHeader(navRef.current, headerRef.current, contactRef.current);

    }
  },[])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="text-foreground transition-colors duration-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div ref={headerRef} className="flex items-center">
          <HotLink href="/" className="text-2xl font-bold hover:text-primary transition-colors duration-200">
            Nick&apos;s Portfolio
          </HotLink>
        </div>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item, idx) => (
            <div
              ref={(el: HTMLDivElement) => {
                if (el) navRef.current[idx] = el
              }}
              key={item.name}
            >
              <HotLink
                href={item.path}
                className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                  pathname === item.path
                    ? 'bg-primary text-primary-foreground font-medium'
                    : 'hover:bg-secondary/50 text-foreground'
                }`}
              >
                {item.name}
              </HotLink>
            </div>
          ))}
        </nav>
        <div ref={contactRef} className="hidden md:flex items-center space-x-4">
          <ThemeSwitch />
          <HotLink
            href="/contact"
            className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Contact Me
          </HotLink>
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <ThemeSwitch />
          <button onClick={toggleMenu} className="transition-transform duration-200 hover:scale-110" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-2">
            {navItems.map((item) => (
              <HotLink
                key={item.name}
                href={item.path}
                className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                  pathname === item.path
                    ? 'bg-primary text-primary-foreground font-medium'
                    : 'hover:bg-secondary/50 text-foreground'
                }`}
              >
                {item.name}
              </HotLink>
            ))}
            <HotLink
              href="/contact"
              className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors duration-200 inline-block"
            >
              Contact Me
            </HotLink>
          </nav>
        </div>
      )}
    </header>
  )
}