import { ContentData, Experience } from '@/types/content';

interface ExperienceSectionProps {
  experience: ContentData['experience'];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section aria-labelledby="experience-heading">
      <div className="flex justify-between items-center mb-4">
        <h2 id="experience-heading" className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-50">Experience</h2>
        <a 
          href="/experience" 
          className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 flex items-center gap-1"
        >
          View all
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </a>
      </div>
      <div className="space-y-6">
        {experience.experience.slice(0, 3).map((exp: Experience, index: number) => (
          <div key={index} className="group">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50">{exp.role}</h3>
              <span className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">{exp.period}</span>
            </div>
            <p className="text-xs md:text-sm text-zinc-700 dark:text-zinc-300 mb-2">
              {exp.companyUrl ? (
                <a href={exp.companyUrl} className="hover:text-zinc-900 dark:hover:text-zinc-50" target="_blank" rel="noopener noreferrer">
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
            </p>
            <ul className="space-y-1.5">
              {exp.highlights.slice(0, 2).map((highlight: string, idx: number) => (
                <li key={idx} className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-zinc-400">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 