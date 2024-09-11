import { useRef } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { onLoadSimultaneousAnimation } from "./features/animations";

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
      onLoadSimultaneousAnimation(projectCardsRef.current)
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
            className={`bg-card text-card-foreground border-border hover:shadow-xl animate-fade-in animation-delay-${idx * 200 + 200}`}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary dark:text-gray-100">{title}</CardTitle>
              <CardDescription className="text-muted-foreground">{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">{overview}</p>
            </CardContent>
            <CardFooter>
            <Button 
                variant="outline" 
                className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors duration-200"
              >
                <a href={''} className="no-underline">View Project</a>
              </Button>
            </CardFooter>
          </Card>
          )
        }
      )}
    </>
  )
} 