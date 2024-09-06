'use client'

import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="bg-background text-foreground shadow-md dark:bg-gray-800 dark:text-white transition-colors duration-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            Portfolio
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/projects" className="hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors"
          >
            Contact Me
          </Link>
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-2">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors inline-block"
            >
              Contact Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}