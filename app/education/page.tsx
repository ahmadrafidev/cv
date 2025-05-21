import { getAllContent } from '@/lib/content';
import { ContentData } from '@/types/content';
import Link from 'next/link';

export default async function EducationPage() {
  const content = getAllContent() as ContentData;
  const { education } = content;

  return (
    <main className="max-w-4xl mx-auto px-6 py-8 print:py-4 min-h-screen bg-white dark:bg-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Education</h1>
          <Link href="/" className="text-sm text-gray-700 dark:text-gray-200 hover:underline">
            Back Home
          </Link>
        </div>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
          A detailed summary of my academic journey and educational background.
        </p>
      </header>

      <div className="space-y-8">
        {education.education.map((edu, index) => (
          <div key={index} className="group">
            <div className="flex flex-wrap justify-between items-baseline mb-2">
              <h2 className="font-medium text-xl text-zinc-900 dark:text-zinc-50">{edu.degree}</h2>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">{edu.year}</span>
            </div>
            <p className="text-base text-zinc-700 dark:text-zinc-300 mb-2">
              {edu.schoolUrl ? (
                <a href={edu.schoolUrl} className="hover:text-zinc-900 dark:hover:text-zinc-50" target="_blank" rel="noopener noreferrer">
                  {edu.school}
                </a>
              ) : (
                edu.school
              )}
            </p>
            {edu.description && (
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">{edu.description}</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
} 