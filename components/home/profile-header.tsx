import { Mail, Github, Linkedin, GraduationCap } from 'lucide-react';
import { ContentData } from '@/types/content';

interface ProfileHeaderProps {
  profile: ContentData['profile'];
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-8">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2" tabIndex={0}>
        {profile.name}
      </h1>
      <h2 className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-4" tabIndex={0}>
        {profile.title}
      </h2>
      <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mb-4 max-w-2xl leading-relaxed">
        {profile.summary}
      </p>
      <div className="flex flex-wrap gap-4 text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
        <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-50">
          <Mail className="h-4 w-4" />
          <span>{profile.contact.email}</span>
        </a>
        <a href={`https://github.com/${profile.contact.github}`} className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-50" target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4" />
          <span>{profile.contact.github}</span>
        </a>
        <a href={`https://linkedin.com/in/${profile.contact.linkedin}`} className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-50" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-4 w-4" />
          <span>{profile.contact.linkedin}</span>
        </a>
        <a href={`https://scholar.google.com/citations?user=${profile.contact.google_scholar}`} className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-50" target="_blank" rel="noopener noreferrer">
          <GraduationCap className="h-4 w-4" />
          <span>Google Scholar</span>
        </a>
      </div>
    </header>
  );
} 