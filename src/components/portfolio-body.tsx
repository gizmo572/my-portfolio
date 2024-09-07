'use client'

import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Projects } from './Projects'

export function PortfolioBody() {
  const { theme } = useTheme()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="container mx-auto px-4 py-8 text-gray-800 dark:text-gray-200">
      {/* Introduction Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 animate-fade-in">Nicholas Cushman</h1>
        <p className="text-xl mb-4 text-gray-700 dark:text-gray-300 animate-fade-in animation-delay-200">Full Stack Developer</p>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 animate-fade-in animation-delay-400">
          Passionate about creating efficient, scalable, and user-friendly web applications. 
          With expertise in React, Node.js, and cloud technologies, I bring ideas to life.
        </p>
      </section>

      {/* Featured Projects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Projects />
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary dark:text-gray-100">Skills</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {['React', 'Node.js', 'TypeScript', 'Next.js', 'GraphQL', 'AWS', 'Docker', 'CI/CD'].map((skill) => (
            <Badge key={skill} variant="secondary" className={`text-lg py-2 px-4 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 transition-all duration-200 hover:scale-105 animate-fade-in animation-delay-${100} rounded-full`}>
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center text-primary dark:text-gray-100">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1 dark:text-gray-300">Name</label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-background dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1 dark:text-gray-300">Email</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1 dark:text-gray-300">Message</label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="bg-background dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg">Send Message</Button>
        </form>
      </section>
    </div>
  )
}