'use client';

import Project from "./project";
import Section from "./ui/section-wrapper";
import { projectData } from "@/data/content";


export default function Projects() {


  return (
    <Section _id="Projects">
      <div className="grid grid-cols-1 gap-2">
        {projectData.map((project, idx) => {
          return (
            <Project 
              key={project.title}
              project={project}
              idx={idx}
            />
          )
        })}
      </div>
    </Section>
  )
} 