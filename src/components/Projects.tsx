import { useRef } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { projectsFlyIn } from "./features/animations";

const projectList = [
  {
    title: "Hot Nav",
    description: "A really cool thing",
    overview: "the coolest thing?"
  },
  {
    title: "URL Smart Scan",
    description: "Whoa....",
    overview: "possibly even cooler??"
  },
  {
    title: "Fitness Tracker",
    description: "Let's git it SON!",
    overview: "maximum basedity acheived"
  },
  {
    title: "Portfolio",
    description: "Portfolioception",
    overview: "this is my portfolio this is my portfolio this is my portfolio this is my portfolio this is my portfolio this is my portfolio"
  }
]


export function Projects() {

  const projectCardsRef = useRef<HTMLDivElement[]>([])

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!prefersReducedMotion) {
      const t1 = gsap.timeline({delay: 3.5, defaults: { ease: 'power3.out' } });
      projectsFlyIn(t1, projectCardsRef.current)
    } else {
      gsap.set(projectCardsRef.current, { opacity: 1 })
    }
  }, [])

  return (
    <>
      {projectList.map((project, idx) => {
        const { title, description, overview } = project;
        return (
          <Card 
            key={project.title}
            ref={(el) => {
              if (el) projectCardsRef.current[idx] = el
            }}
            className={`bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:shadow-xl animate-fade-in animation-delay-${idx * 200 + 200}`}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary dark:text-gray-100">{title}</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">{overview}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"><a href={''}>View Project</a></Button>
            </CardFooter>
          </Card>
          )
        }
      )}
    </>
  )
} 