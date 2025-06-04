import { getAllContent } from '@/lib/content';
import { ContentData } from '@/types/content';
import Link from 'next/link';
import { BackHomeButton } from '@/components/back-home-button';

export default async function ExperiencePage() {
  const content = getAllContent() as ContentData;
  const { experience } = content;

  return (
    <main className="max-w-4xl mx-auto px-6 py-8 print:py-4 min-h-screen bg-white dark:bg-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Experience</h1>
          <BackHomeButton />
        </div>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
          A detailed overview of my professional experience and contributions.
        </p>
      </header>

      <div className="space-y-8">
        {experience.experience.map((exp, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-baseline mb-2">
              <h2 className="font-medium text-xl text-zinc-900 dark:text-zinc-50">{exp.role}</h2>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">{exp.period}</span>
            </div>
            <p className="text-base text-zinc-700 dark:text-zinc-300 mb-4">
              {exp.companyUrl ? (
                <Link 
                  href={exp.companyUrl} 
                  className="hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-1 py-0.5 rounded transition-all duration-200 hover:underline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {exp.company}
                </Link>
              ) : (
                exp.company
              )}
            </p>
            <ul className="space-y-2">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-zinc-400">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
} 