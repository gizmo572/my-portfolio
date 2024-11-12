import ExperienceCard from './experience-card';
import Section from './ui/section-wrapper';
import { workExperienceData } from '@/data/content';


export default function Experience() {

  return (
    <>
      <Section _id='Experience'>
        <div className="grid grid-cols-1 gap-2">
          {workExperienceData.map((job, idx) => (
            <ExperienceCard 
              key={job.company}
              job={job}
              idx={idx} 
            />
          ))}
        </div>
      </Section>
    </>
  );
}