'use client';

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { onLoadSimultaneousAnimation } from "./features/animations";
import Project from "./project";
import Section from "./ui/section-wrapper";
import { projectData } from "@/data/content";


export default function Projects() {
  const projectCardsRef = useRef<HTMLDivElement[]>([])
  const [projectsLoaded, setProjectsLoaded] = useState(false)
  
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!prefersReducedMotion) {
      onLoadSimultaneousAnimation(projectCardsRef.current, () => setProjectsLoaded(true))
    } else {
      gsap.set(projectCardsRef.current, { opacity: 1 })
    }
  }, [])


  return (
    <Section _id="Projects">
      <div className="grid grid-cols-1 gap-2">
        {projectData.map((project, idx) => {
          return (
            <Project 
              key={project.title}
              project={project}
              projectCardsRef={projectCardsRef}
              projectsLoaded={projectsLoaded}
              idx={idx}
            />
          )
        })}
      </div>
    </Section>
  )
} 