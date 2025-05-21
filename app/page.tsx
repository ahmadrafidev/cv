import { getAllContent } from '@/lib/content';
import { ContentData } from '@/types/content';

import { ProfileHeader } from '@/components/home/profile-header';
import { EducationSection } from '@/components/home/education-section';
import { ResearchSection } from '@/components/home/research-section';
import { ExperienceSection } from '@/components/home/experience-section';
import { PublicationsSection } from '@/components/home/publications-section';
import { TalksSection } from '@/components/home/talks-section';
import { TeachingSection } from '@/components/home/teaching-section';
import { SkillsSection } from '@/components/home/skills-section';
import { Footer } from '@/components/layout/footer';

export default async function HomePage() {
  const content = getAllContent() as ContentData;
  const { profile, education, experience, skills, research, publications, talks, teaching } = content;

  return (
    <main className="max-w-4xl mx-auto px-6 py-8 print:py-4 min-h-screen bg-white dark:bg-black">
      <ProfileHeader profile={profile} />

      <div className="space-y-8">
        <EducationSection education={education} />
        <ResearchSection research={research} />
        <ExperienceSection experience={experience} />
        <PublicationsSection publications={publications} />
        <TalksSection talks={talks} />
        <TeachingSection teaching={teaching} />
        <SkillsSection skills={skills} />
      </div>

      <Footer />
    </main>
  );
}
