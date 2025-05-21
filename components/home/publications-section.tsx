import { ContentData, Publication } from '@/types/content';
import Link from 'next/link';

interface PublicationsSectionProps {
  publications: ContentData['publications'];
}

export function PublicationsSection({ publications }: PublicationsSectionProps) {
  return (
    <section aria-labelledby="publications-heading">
      <div className="flex justify-between items-center mb-4">
        <h2 id="publications-heading" className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-50">Publications</h2>
        <Link 
          href="/publications" 
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
        {publications.publications.slice(0, 3).map((pub: Publication, index: number) => (
          <div key={index}>
            <h3 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50 mb-1">
              {pub.link ? (
                <Link href={pub.link} className="hover:text-zinc-600 hover:underline dark:hover:text-zinc-300" target="_blank" rel="noopener noreferrer">
                  {pub.title}
                </Link>
              ) : (
                pub.title
              )}
            </h3>
            <p className="text-xs md:text-sm text-zinc-700 dark:text-zinc-300">{pub.authors}</p>
            <p className="text-xs md:text-sm italic text-zinc-600 dark:text-zinc-400">{pub.venue}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 