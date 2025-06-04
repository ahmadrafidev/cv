import { getAllContent } from '@/lib/content';
import Link from 'next/link'; 
import { ContentData } from '@/types/content';
import { BackHomeButton } from '@/components/back-home-button';

export default async function PublicationsPage() {
  const content = getAllContent() as ContentData;
  const { publications } = content;

  return (
    <main className="max-w-4xl mx-auto px-6 py-8 print:py-4 min-h-screen bg-white dark:bg-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Publications</h1>
          <BackHomeButton />
        </div>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
          A comprehensive collection of my published works and research papers.
        </p>
      </header>

      <div className="space-y-6">
        {publications.publications.map((pub: Publication, index: number) => (
          <div key={index} className="border-b border-zinc-200 dark:border-zinc-800 pb-6 last:border-0">
            <h2 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50 mb-2">
              {pub.link ? (
                <Link 
                  href={pub.link} 
                  className="hover:text-zinc-600 hover:underline dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-1 py-0.5 rounded transition-all duration-200 inline-block" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {pub.title}
                </Link>
              ) : (
                pub.title
              )}
            </h2>
            <p className="text-xs md:text-sm text-zinc-700 dark:text-zinc-300 mb-1">{pub.authors}</p>
            <p className="text-xs md:text-sm italic text-zinc-600 dark:text-zinc-400">{pub.venue}</p>
          </div>
        ))}
      </div>
    </main>
  );
} 