'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { HotLink } from "hot-nav";
import { ExternalLinkIcon } from "lucide-react";
import { useRef } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { onHoverBobAnimation } from "./features/animations";
import { useGSAP } from "@gsap/react";
interface ProjectProps {
  project: {
    title: string;
    description: string;
    overview: string;
    href: string;
    demo: string;
  };
  idx: number;
}

export default function Project({ project, idx }: ProjectProps) {
  const { title, description, overview, demo } = project
  const toggleHotKeysButtonRef = useRef<HTMLButtonElement>(null)
  const projectCardRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!prefersReducedMotion && projectCardRef?.current) {
      onHoverBobAnimation(projectCardRef.current)
    }
  }, [projectCardRef])


  const simulateControlKeyClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    // Create a new KeyboardEvent
    const controlKeyEvent = new KeyboardEvent('keydown', {
      key: 'Control',    // The key name (use 'key' instead of 'keyCode')
      code: 'ControlLeft', // The code for the left control key
      bubbles: true,     // Ensures the event bubbles up in the DOM
      cancelable: true   // Allows the event to be canceled
    });

    // Dispatch the event on the document
    document.dispatchEvent(controlKeyEvent);
  };


  return (
    <Card 
      ref={projectCardRef}
      className={`backdrop-blur-xl dark:backdrop-blur-lg bg-secondary/10 hover:bg-secondary/20 m-2 border-none transform animate-fade-in animation-delay-${idx * 200 + 200} group`}
    >
      <Dialog>
        <DialogTrigger asChild>
          <HotLink
          key={project.title}
          // href="https://reactrelay.com"
          target="_blank"
          rel="noopener noreferrer"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className={"text-2xl font-bold text-primary card-on-hover"}>
                  {title}
                </CardTitle>
                <ExternalLinkIcon className="text-muted-foreground group-hover:scale-105  group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform card-on-hover" size={20} />
              </div>
              <CardDescription className={"text-muted-foreground card-on-hover"}>
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-2 content-center card-on-hover">
              {overview}
              {title === "Hot Nav" && 
                <HotLink ref={toggleHotKeysButtonRef} className={`bg-secondary/50 dark:bg-primary/80 dark:group-hover:bg-primary/70 dark:group-hover:hover:bg-primary/40 text-primary-foreground group-hover:hover:text-popover-foreground font-bold hover:bg-secondary/60 transition-colors duration-200 px-2 rounded-md  hover:scale-105 active:scale-100 ease-in-out z-999`} onClick={(e) => simulateControlKeyClick(e)}>
                  <button>
                    TRY ME!!
                  </button>
                </HotLink>
              }
            </CardContent>
          </HotLink>
        </DialogTrigger>
        <DialogContent className="w-[80vw] h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between">
            <a
              className="text-primary"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <h1 className="text-4xl font-bold text-center text-primary mx-auto">
              {title}
            </h1>
          </div>
            <p className="text-lg text-center text-muted-foreground">
              
            </p>
            <img src={demo} alt={title} className="w-full h-full object-contain" />
        </DialogContent>
      </Dialog>    
    </Card>
  )
}
