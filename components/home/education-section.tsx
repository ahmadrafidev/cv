import { ContentData, Education } from '@/types/content';
import Link from 'next/link';

interface EducationSectionProps {
  education: ContentData['education'];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section aria-labelledby="education-heading" className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 id="education-heading" className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Education
        </h2>
        <Link 
          href="/education" 
          className="group text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5"
        >
          View all
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </Link>
      </div>
      
      <div className="space-y-6">
        {education.education.slice(0, 3).map((edu: Education, index: number) => (
          <div 
            key={index} 
            className="group relative p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 bg-white dark:bg-zinc-900/50"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
              <h3 className="font-semibold text-base md:text-lg text-zinc-900 dark:text-zinc-50 leading-tight">
                {edu.degree}
              </h3>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 shrink-0">
                {edu.year}
              </span>
            </div>
            
            <div className="mb-3">
              {edu.schoolUrl ? (
                <Link 
                  href={edu.schoolUrl} 
                  className="inline-flex items-center text-sm md:text-base text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-200 group/school" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className=" border-zinc-400 dark:border-zinc-600 group-hover/school:border-zinc-600 dark:group-hover/school:border-zinc-400">
                    {edu.school}
                  </span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="ml-1 opacity-60 group-hover/school:opacity-100 transition-opacity duration-200"
                  >
                    <path d="M7 7h10v10"/>
                    <path d="M7 17 17 7"/>
                  </svg>
                </Link>
              ) : (
                <span className="text-sm md:text-base text-zinc-700 dark:text-zinc-300">
                  {edu.school}
                </span>
              )}
            </div>

            {edu.description && (
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 