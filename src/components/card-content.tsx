'use client';

import { useRef } from "react";
import { CardHeader, CardContent, CardTitle, CardDescription } from "./ui/card"
import { summaryData } from "@/data/content";


export default function CardContents() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const jobTitleRef = useRef<HTMLParagraphElement>(null);
  const aboutMeRef = useRef<HTMLParagraphElement>(null);

  
  return (
    <>
      <CardHeader className='items-center'>
        <CardTitle ref={nameRef} className="text-5xl font-bold text-center mb-4 text-primary animate-fade-in">
          {summaryData.name}
        </CardTitle>
        <CardDescription ref={jobTitleRef} className="text-xl font-bold mb-4 text-primary/75 animate-fade-in animation-delay-200">
          {summaryData.jobTitle}
        </CardDescription>
      </CardHeader>
      <CardContent ref={aboutMeRef} className="max-w-2xl mx-auto text-primary text-center animate-fade-in animation-delay-400">
        {summaryData.aboutMe}
      </CardContent>
    </>
  )
}