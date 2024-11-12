'use client';

import { AnimatePresence, motion } from "framer-motion";
import SkillsSection from "../skills-section";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { AwsSkills } from "@/data/content";
import { HotLink } from "hot-nav";

type AwsSkillsPopupProps = {
  setAwsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AwsSkillsPopup({ setAwsClicked }: AwsSkillsPopupProps) {
  const awsModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (awsModalRef.current && !awsModalRef.current.contains(event.target as Node)) {
        setAwsClicked(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setAwsClicked]);


  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x:-60, y: 430 }}
        animate={{ opacity: 1, scale: 1, x: -70, y: 410 }}
        exit={{ opacity: 0, scale: 0.5, x: -60, y: 430 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-3 w-[90vw] lg:w-[35vw] lg:px-0 h-[625px]"
      >
        <HotLink className="text-white">
          <X height={30} width={30} className="absolute m-1 bg-red-500 rounded-md" onClick={() => setAwsClicked(false)}/>
        </HotLink>
        <div ref={awsModalRef} className="h-[600px] overflow-y-auto">
          <SkillsSection skills={AwsSkills} labels={true} bounceEntry={false} />
        </div>
      </motion.div>
    </AnimatePresence>
  )

}