'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"
import Image from "next/image"
import { BriefcaseIcon, ExternalLinkIcon } from 'lucide-react';
import { HotLink } from 'hot-nav'
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { onHoverBobAnimation } from "./features/animations";

interface JobProps {
  company: string;
    position: string;
    duration: string;
    description: string;
    icon: string;
    background: string;
    href: string;
}

interface ExperienceCardProps {
  job: JobProps;
  idx: number;
}


export default function ExperienceCard ({ job }: ExperienceCardProps) {
  const experienceCardRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!prefersReducedMotion && experienceCardRef.current) {
      onHoverBobAnimation(experienceCardRef.current)
    }
  }, [experienceCardRef])



  return (
    <Card
        ref={experienceCardRef}
        className={`backdrop-blur-xl dark:backdrop-blur-lg m-2 bg-secondary/10 border-none transform animate-fade-in hover:bg-secondary/20 group`}
    >
      <HotLink 
        key={job.company}
        href={job.href}
        target="_blank"
        rel="noopener noreferrer"
        customHotKeyPlacement={true}
      >
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="max-xs:hidden flex-shrink-0 w-10 dark:bg-primary h-10 rounded-full flex items-center justify-center mr-4 group-hover:opacity-75">
                { job.icon ?
                  <Image alt={`${job.company} logo`} src={job.icon} height={25} width={25} /> :
                  <BriefcaseIcon className="text-primary-foreground" size={25} />
                }
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-primary card-on-hover hot-nav">
                  {job.company}
                </CardTitle>
                <CardDescription className="card-on-hover">{job.position}</CardDescription>
              </div>
            </div>
            <ExternalLinkIcon className="text-muted-foregroundgroup-hover:scale-105  group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform card-on-hover" size={20} />
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm mb-2 card-on-hover">{job.duration}</CardDescription>
          <CardDescription className="card-on-hover">{job.description}</CardDescription>
        </CardContent>
      </HotLink>
    </Card>
  )
}
