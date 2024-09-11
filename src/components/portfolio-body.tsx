'use client'

import { useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Projects } from './Projects'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { onLoadAnimation } from './features/animations'
import { SkillsSection } from './skills-section'

export function PortfolioBody() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const nameRef = useRef<HTMLHeadingElement>(null);
  const jobTitleRef = useRef<HTMLParagraphElement>(null);
  const projectsHeaderRef = useRef<HTMLHeadingElement>(null);
  const aboutMeRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!prefersReducedMotion) {
      onLoadAnimation(projectsHeaderRef.current, aboutMeRef.current, nameRef.current, jobTitleRef.current);

    } else {
      gsap.set(nameRef.current, { opacity: 1 })
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { name, email, message })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <>
      {/* Introduction Section */}
      <section className="mb-16 text-center">
        <h1 ref={nameRef} className="text-4xl font-bold mb-4 text-primary animate-fade-in">Nicholas Cushman</h1>
        <p ref={jobTitleRef} className="text-xl mb-4 text-secondary animate-fade-in animation-delay-200">Software Engineer</p>
        <p ref={aboutMeRef} className="max-w-2xl mx-auto text-muted-foreground animate-fade-in animation-delay-400">
          Passionate about creating efficient, scalable, and user-friendly web applications. 
          With expertise in React, Node.js, and cloud technologies, I bring ideas to life.
        </p>
      </section>

      {/* Featured Projects Section */}
      <section className="mb-16">
        <h2 ref={projectsHeaderRef} className="text-3xl font-bold mb-8 text-center text-primary">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Projects />
        </div>
      </section>

      <SkillsSection />

      {/* Contact Form Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground">Name</label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-background text-foreground border-input focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">Email</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background text-foreground border-input focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground">Message</label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="bg-background text-foreground border-input focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-kelly-green transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg">Send Message</Button>
        </form>
      </section>
    </>
  )
}