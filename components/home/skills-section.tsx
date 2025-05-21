import { ContentData, Skill } from '@/types/content';

interface SkillsSectionProps {
  skills: ContentData['skills'];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="text-lg md:text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Technical Skills</h2>
      <div className="space-y-4">
        {skills.skills.map((skill: Skill, index: number) => (
          <div key={index}>
            <h3 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50 mb-1">{skill.category}</h3>
            <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
              {skill.items.join(' • ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
} 