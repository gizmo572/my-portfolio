'use client';

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { HotLink } from 'hot-nav'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <HotLink className='sphere flex items-center justify-center rounded-full p-4'>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded-2 transition-colors duration-200 transform hover:-translate-y-0.5 hover:animate-pulse"
        aria-label="Toggle theme"
      >
        { theme === 'light' ? <Moon size={50} /> : <Sun size={50} />}
      </button>
    </HotLink>
  )
}
