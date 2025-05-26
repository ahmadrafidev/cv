import { ContentData } from '@/types/content';

interface ResearchSectionProps {
  research: ContentData['research'];
}

export function ResearchSection({ research }: ResearchSectionProps) {
  return (
    <section aria-labelledby="research-heading">
      <h2 id="research-heading" className="text-lg md:text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Research Interests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {research.research_interests.map((interest: string, index: number) => (
          <div 
            key={index} 
            className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 cursor-default"
          >
            <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300">
              {interest}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
} 