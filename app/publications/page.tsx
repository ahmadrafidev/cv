import { getAllContent } from '@/lib/content';
import { ContentData, Publication } from '@/types/content';
import Link from 'next/link';

export default async function PublicationsPage() {
  const content = getAllContent() as ContentData;
  const { publications } = content;

  return (
    <main className="max-w-4xl mx-auto px-6 py-8 min-h-screen bg-white dark:bg-black">
      <div className="mb-6">
        <Link 
          href="/" 
          className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 text-sm"
        >
          ← Back to Home
        </Link>
      </div>
      
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-zinc-900 dark:text-zinc-50">
        All Publications
      </h1>

      <div className="space-y-6">
        {publications.publications.map((pub: Publication, index: number) => (
          <div key={index} className="border-b border-zinc-200 dark:border-zinc-800 pb-6 last:border-0">
            <h2 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50 mb-2">
              {pub.link ? (
                <Link href={pub.link} className="hover:text-zinc-600 hover:underline dark:hover:text-zinc-300" target="_blank" rel="noopener noreferrer">
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