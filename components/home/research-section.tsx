import { ContentData } from '@/types/content';

interface ResearchSectionProps {
  research: ContentData['research'];
}

export function ResearchSection({ research }: ResearchSectionProps) {
  return (
    <section aria-labelledby="research-heading" className="space-y-3">
      <h2 id="research-heading" className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Research Interests
      </h2>
      <div className="flex flex-wrap gap-2">
        {research.research_interests.map((interest: string, index: number) => (
          <span
            key={index}
            className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-200 cursor-default"
          >
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
} 