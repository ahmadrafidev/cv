import { getAllContent } from '@/lib/content';
import { ContentData, Education, Experience, Publication, ResearchInterest, Skill } from '@/types/content';
import { Mail, Github, Linkedin, GraduationCap } from 'lucide-react';

export default async function HomePage() {
  const content = getAllContent() as ContentData;
  const { profile, education, experience, skills, research, publications } = content;

  return (
    <main className="max-w-4xl mx-auto px-6 py-8 print:py-4 min-h-screen bg-white dark:bg-zinc-900">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2" tabIndex={0}>
          {profile.name}
        </h1>
        <h2 className="text-lg text-zinc-700 dark:text-zinc-300 mb-4" tabIndex={0}>
          {profile.title}
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 max-w-2xl leading-relaxed">
          {profile.summary}
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-50">
            <Mail className="h-4 w-4" />
            <span>{profile.contact.email}</span>
          </a>
          <a href={`https://github.com/${profile.contact.github}`} className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-50">
            <Github className="h-4 w-4" />
            <span>{profile.contact.github}</span>
          </a>
          <a href={`https://linkedin.com/in/${profile.contact.linkedin}`} className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-50">
            <Linkedin className="h-4 w-4" />
            <span>{profile.contact.linkedin}</span>
          </a>
          <a href={`https://scholar.google.com/citations?user=${profile.contact.google_scholar}`} className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-50">
            <GraduationCap className="h-4 w-4" />
            <span>Google Scholar</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Experience */}
        <section aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Experience</h2>
          <div className="space-y-6">
            {experience.experience.map((exp: Experience, index: number) => (
              <div key={index} className="group">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium text-base text-zinc-900 dark:text-zinc-50">{exp.role}</h3>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">{exp.period}</span>
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">
                  {exp.companyUrl ? (
                    <a href={exp.companyUrl} className="hover:text-zinc-900 dark:hover:text-zinc-50">
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </p>
                <ul className="space-y-1.5">
                  {exp.highlights.map((highlight: string, idx: number) => (
                    <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-zinc-400">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section aria-labelledby="education-heading">
          <h2 id="education-heading" className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Education</h2>
          <div className="space-y-4">
            {education.education.map((edu: Education, index: number) => (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium text-base text-zinc-900 dark:text-zinc-50">{edu.degree}</h3>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">{edu.year}</span>
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">{edu.school}</p>
                {edu.description && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section aria-labelledby="publications-heading">
          <h2 id="publications-heading" className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Selected Publications</h2>
          <div className="space-y-4">
            {publications.publications.map((pub: Publication, index: number) => (
              <div key={index}>
                <h3 className="font-medium text-base text-zinc-900 dark:text-zinc-50 mb-1">
                  {pub.link ? (
                    <a href={pub.link} className="hover:text-zinc-600 hover:underline dark:hover:text-zinc-300">
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">{pub.authors}</p>
                <p className="text-sm italic text-zinc-600 dark:text-zinc-400">{pub.venue}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Technical Skills</h2>
          <div className="space-y-4">
            {skills.skills.map((skill: Skill, index: number) => (
              <div key={index}>
                <h3 className="font-medium text-base text-zinc-900 dark:text-zinc-50 mb-1">{skill.category}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {skill.items.join(' • ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Interests */}
        <section aria-labelledby="research-heading">
          <h2 id="research-heading" className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Research Interests</h2>
          <div className="space-y-4">
            {research.research_interests.map((interest: ResearchInterest, index: number) => (
              <div key={index}>
                <h3 className="font-medium text-base text-zinc-900 dark:text-zinc-50 mb-1">{interest.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{interest.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-500 dark:text-zinc-400">
        <p>
          Built by{' '}
          <a href="https://x.com/rafiwiranaa" className="hover:text-zinc-900 hover:underline dark:hover:text-zinc-50">
            Rafi.
          </a>
          {' '}Feel free to{' '}
          <a 
            href="https://github.com/ahmadrafidev/scholaris" 
            className="underline hover:text-black dark:hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fork this template on GitHub"
          >
            fork and customize
          </a>
          {' '}this template for your own academic profile.
        </p>
      </footer>
    </main>
  );
}
