import { Mail, Github, Linkedin, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { ContentData } from '@/types/content';

interface ProfileHeaderProps {
  profile: ContentData['profile'];
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
        <div className="flex-1 order-2 md:order-1">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2" tabIndex={0}>
            {profile.name}
          </h1>
          <h2 className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-3" tabIndex={0}>
            {profile.title}
          </h2>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mb-4 max-w-2xl leading-relaxed">
            {profile.summary}
          </p>
          <div className="flex flex-wrap gap-4 text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
            <Link 
              href={`mailto:${profile.contact.email}`} 
              className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-1.5 rounded-md transition-all duration-200"
            >
              <Mail className="h-4 w-4" />
              <span>{profile.contact.email}</span>
            </Link>
            <Link 
              href={`https://github.com/${profile.contact.github}`} 
              className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-1.5 rounded-md transition-all duration-200" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              <span>{profile.contact.github}</span>
            </Link>
            <Link 
              href={`https://linkedin.com/in/${profile.contact.linkedin}`} 
              className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-1.5 rounded-md transition-all duration-200" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              <span>{profile.contact.linkedin}</span>
            </Link>
            <Link 
              href={`https://scholar.google.com/citations?user=${profile.contact.google_scholar}`} 
              className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-1.5 rounded-md transition-all duration-200" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GraduationCap className="h-4 w-4" />
              <span>Google Scholar</span>
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0 self-center md:self-start order-1 md:order-2">
          <Image
            src="/images/profile.jpg"
            alt={profile.name}
            width={160}
            height={160}
            className="rounded-lg object-cover mx-auto md:mx-0"
            priority
          />
        </div>
      </div>
    </header>
  );
} 
