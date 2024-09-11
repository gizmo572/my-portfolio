import { useGSAP } from "@gsap/react";
import { Badge } from "./ui/badge";
import { useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



export const SkillsSection = () => {
  const skillsHeaderRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement[]>([])

  useGSAP(() => {
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
        y: -2000,
        opacity: 0,
        duration: 2,
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
    <section className="mb-16">
      <h2 ref={skillsHeaderRef} className="text-3xl font-bold mb-8 text-center text-primary">Skills</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {['React', 'Node.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Next.js', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'CI/CD'].map((skill, idx) => (
          <div
            key={skill} 
            ref={(el) => {
              if (el) skillsRef.current[idx] = el 
            }}   
          >
            <Badge variant="secondary" className={`text-lg py-2 px-4 bg-secondary text-secondary-foreground transition-all duration-200 hover:scale-105 animate-fade-in animation-delay-${100} rounded-full`}>
              {skill}
            </Badge>
          </div>
        ))}
      </div>
    </section>
  )
}