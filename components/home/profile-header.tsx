import { Mail, Github, Linkedin, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { ContentData } from '@/types/content';

interface ProfileHeaderProps {
  profile: ContentData['profile'];
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className="border-zinc-200 dark:border-zinc-800 pb-8">
      <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0 self-center lg:self-start">
          <Image
            src="/images/profile.jpg"
            alt={profile.name}
            width={150}
            height={150}
            className="rounded-lg object-cover border border-zinc-200 dark:border-zinc-700 shadow-sm"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
              {profile.name}
            </h1>
            <h2 className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 font-normal">
              {profile.title}
            </h2>
          </div>

          <p className="text-base text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            {profile.summary}
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            <Link 
              href={`mailto:${profile.contact.email}`} 
              className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
            >
              <Mail className="h-4 w-4" />
              <span>{profile.contact.email}</span>
            </Link>
            
            <Link 
              href={`https://github.com/${profile.contact.github}`} 
              className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              <span>{profile.contact.github}</span>
            </Link>
            
            <Link 
              href={`https://linkedin.com/in/${profile.contact.linkedin}`} 
              className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </Link>
            
            <Link 
              href={`https://scholar.google.com/citations?user=${profile.contact.google_scholar}`} 
              className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GraduationCap className="h-4 w-4" />
              <span>Google Scholar</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 
