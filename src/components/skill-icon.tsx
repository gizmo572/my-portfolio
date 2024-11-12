'use client';

import { AnimatePresence, motion } from "framer-motion";
import { AwsSkills, Skill } from "@/data/content";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import React from "react";
import { HotLink } from "hot-nav";
import { Dialog, DialogContent } from "./ui/dialog";
import { DialogTrigger } from "./ui/dialog";
import SkillsSection from "./skills-section";

interface SkillIconProps {
  skill: Skill;
  index: number;
  labels: boolean;
  setRef: (el: HTMLDivElement | null) => void;
}

export default function SkillIcon({ skill, index, labels, setRef }: SkillIconProps) {
  const [isHovered, setIsHovered] = useState(false)
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [awsClicked, setAwsClicked] = useState<boolean>(false);

  const HOVER_DELAY = 150

  const handleMouseEnter = () => {
    if (labels) return;
    hoverTimerRef.current = setTimeout(() => {
      setIsHovered(true)
    }, HOVER_DELAY)
  }

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current)
    }
    setIsHovered(false)
  }

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={setRef}
      // id="skills"
      className={`${skill.title == 'AWS' && "z-50"}`}
    >
      <div
          className={`sphere light:mud-gradient flex flex-col items-center justify-center rounded-full p-4 transition-all duration-200 animate-fade-in animation-delay-${index * 100}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {skill.title == 'AWS' ?
          <Dialog>
            <DialogTrigger asChild>
              <HotLink className='dark:text-white'>
                <Image width={48} height={48} src={skill.icon} alt={skill.title} className={`dark:invert hover:animate-pulse md:w-20 md:h-20 object-contain`} onClick={() => setAwsClicked(true)}/>
              </HotLink> 
            </DialogTrigger>
            <DialogContent className="w-[100vw] h-[80vh] overflow-y-auto">
                <SkillsSection skills={AwsSkills} labels={true} bounceEntry={false} />
            </DialogContent>
          </Dialog>
          :
            <Image width={48} height={48} src={skill.icon} alt={skill.title} className={`dark:invert hover:animate-pulse md:w-20 md:h-20 object-contain`} />
          }
          {labels && <span>{skill.title}</span>}
      </div>
      {isHovered && !awsClicked && (
      <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x:-60, y: 30 }}
            animate={{ opacity: 1, scale: 1, x: -70, y: 10 }}
            exit={{ opacity: 0, scale: 0.5, x: -60, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-3 py-2"
          >
            <div className="absolute -bottom-2 left-3/4 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white dark:border-t-gray-800"></div>
            <p className="text-xl font-medium text-gray-900 dark:text-white whitespace-nowrap">
              {skill.title == 'AWS' ?
                'Click Me!' :
                skill.title
              }
            </p>
          </motion.div>
      </AnimatePresence>
      )}
    </div>
  )
}
