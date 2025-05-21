import { ContentData, Education } from '@/types/content';
import Link from 'next/link';

interface EducationSectionProps {
  education: ContentData['education'];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section aria-labelledby="education-heading">
      <div className="flex justify-between items-center mb-4">
        <h2 id="education-heading" className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-50">Education</h2>
        <Link 
          href="/education" 
          className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 flex items-center gap-1"
        >
          View all
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </Link>
      </div>
      <div className="space-y-4">
        {education.education.slice(0, 3).map((edu: Education, index: number) => (
          <div key={index}>
            <div className="flex flex-wrap justify-between items-baseline mb-1">
              <h3 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50">{edu.degree}</h3>
              <span className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">{edu.year}</span>
            </div>
            <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300">
              {edu.schoolUrl ? (
                <Link href={edu.schoolUrl} className="hover:text-zinc-900 dark:hover:text-zinc-50" target="_blank" rel="noopener noreferrer">
                  {edu.school}
                </Link>
              ) : (
                edu.school
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
} 