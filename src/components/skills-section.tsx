'use client';

import { useGSAP } from "@gsap/react";
import { useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './bounce.css';
import Section from "./ui/section-wrapper";
import { DefaultSkills, Skill } from "@/data/content";
import SkillIcon from "./skill-icon";


export default function Skills({ skills=DefaultSkills, labels=false, bounceEntry=true }: { skills?: Skill[], labels?: boolean, bounceEntry?: boolean })  {
  const skillsHeaderRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement[]>([])

  useGSAP(() => {
    if (!bounceEntry) return;
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
          trigger: skillsHeaderRef.current,
          start: 'top bottom', // when the top of the trigger hits the top of the viewport
          end: '+=0', // end immediately after starting, so it doesn't stretch beyond the start
          scrub: false, // disable scrubbing, so the animation happens all at once
          once: true // trigger the animation only once
      }
    });

    const ease = Math.random() > 0.5 ? "bounce.out" : "bounce.in";

    let count = 0;
    for (const skill of skillsRef.current) {
      let rotate = Math.random() * 1801;
      if (count % 2 === 0) rotate *= -1;
      count++;

      tl.from(skill, {
        y: -3000,
        opacity: 0,
        duration: 2.5,
        rotate: rotate,
        ease: ease
      }, Math.random() / 5)

    }
    gsap.from(skillsHeaderRef.current, {
      opacity: 0,
      duration: 5
    })
  })
  
  return (
    <Section _id="Skills" _ref={skillsHeaderRef}>
      <div className='flex flex-wrap justify-center gap-6 md:gap-16 my-10 w-full'>
          {skills.map((skill, index) => (
          <SkillIcon 
            key={skill.title}
            skill={skill}
            index={index}
            setRef={(el: HTMLDivElement | null) => {
              if (el) skillsRef.current[index] = el
            }}

            labels={labels} />
          
          ))}
      </div>
    </Section>
  )
}