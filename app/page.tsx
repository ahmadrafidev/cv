import { getAllContent } from '@/lib/content';
import { ContentData, Education, Experience, Publication, ResearchInterest, Skill } from '@/types/content';

export default async function HomePage() {
  const content = getAllContent() as ContentData;
  const { profile, education, experience, skills, research, publications } = content;

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Header/Introduction */}
      <header className="mb-2 sm:mb-4 border-b pb-4 sm:pb-6">
        <h1 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3" tabIndex={0}>
          {profile.name}
        </h1>
        <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 mb-2 sm:mb-3" tabIndex={0}>
          {profile.title}
        </p>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl" tabIndex={0}>
          {profile.summary}
        </p>
      </header>

      {/* Contact Information */}
      <section className="mb-2 sm:mb-4" aria-label="Contact Information">
        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
          <a 
            href={`mailto:${profile.contact.email}`} 
            className="hover:text-black dark:hover:text-white transition-colors"
            aria-label={`Email: ${profile.contact.email}`}
          >
            {profile.contact.email}
          </a>
          <span aria-hidden="true">•</span>
          <a 
            href={`https://github.com/${profile.contact.github}`} 
            className="hover:text-black dark:hover:text-white transition-colors"
            aria-label={`GitHub profile: ${profile.contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/{profile.contact.github}
          </a>
          <span aria-hidden="true">•</span>
          <a 
            href={`https://linkedin.com/in/${profile.contact.linkedin}`} 
            className="hover:text-black dark:hover:text-white transition-colors"
            aria-label={`LinkedIn profile: ${profile.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/{profile.contact.linkedin}
          </a>
          <span aria-hidden="true">•</span>
          <a 
            href={`https://scholar.google.com/citations?user=${profile.contact.google_scholar}`} 
            className="hover:text-black dark:hover:text-white transition-colors"
            aria-label={`Google Scholar profile: ${profile.contact.google_scholar}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </a>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6 sm:mb-8" aria-labelledby="education-heading">
        <h2 id="education-heading" className="text-base sm:text-lg font-semibold mb-3 border-b pb-2">Education</h2>
        <div className="space-y-3">
          {education.education.map((edu: Education, index: number) => (
            <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-3">
              <div>
                <h3 className="font-medium text-sm sm:text-base">{edu.degree}</h3>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">{edu.school}</p>
                {edu.description && (
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">{edu.description}</p>
                )}
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">{edu.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-6 sm:mb-8" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-base sm:text-lg font-semibold mb-3 border-b pb-2">Experience</h2>
        <div className="space-y-4">
          {experience.experience.map((exp: Experience, index: number) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-3 mb-1">
                <div>
                  <h3 className="font-medium text-sm sm:text-base">{exp.role}</h3>
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    {exp.companyUrl ? (
                      <a 
                        href={exp.companyUrl}
                        className="hover:text-black dark:hover:text-white transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </p>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-0.5 text-xs sm:text-sm pl-4">
                {exp.highlights.map((highlight: string, idx: number) => (
                  <li key={idx} className="leading-relaxed">{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="mb-6 sm:mb-8" aria-labelledby="publications-heading">
        <h2 id="publications-heading" className="text-base sm:text-lg font-semibold mb-3 border-b pb-2">Selected Publications</h2>
        <div className="space-y-3">
          {publications.publications.map((pub: Publication, index: number) => (
            <div key={index} className="space-y-0.5">
              <h3 className="font-medium text-sm sm:text-base">
                {pub.link ? (
                  <a 
                    href={pub.link} 
                    className="hover:text-black dark:hover:text-white transition-colors duration-200 inline-block transform hover:-translate-y-0.5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pub.title}
                  </a>
                ) : (
                  pub.title
                )}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">{pub.authors}</p>
              <p className="text-xs sm:text-sm italic text-zinc-600 dark:text-zinc-400">{pub.venue}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-6 sm:mb-8" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-base sm:text-lg font-semibold mb-3 border-b pb-2">Technical Skills</h2>
        <div className="space-y-3">
          {skills.skills.map((skill: Skill, index: number) => (
            <div key={index}>
              <h3 className="font-medium text-sm sm:text-base mb-1">{skill.category}</h3>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {skill.items.join(' • ')}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Interests */}
      <section className="mb-6 sm:mb-8" aria-labelledby="research-heading">
        <h2 id="research-heading" className="text-base sm:text-lg font-semibold mb-3 border-b pb-2">Research Interests</h2>
        <div className="space-y-2">
          {research.research_interests.map((interest: ResearchInterest, index: number) => (
            <div key={index}>
              <h3 className="font-medium text-sm sm:text-base">{interest.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 mt-0.5 leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Template Note */}
      <footer className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 border-t pt-4 sm:pt-6">
        <p>
          This is just a template made by{' '}
          <a 
            href="https://x.com/rafiwiranaa" 
            className="underline hover:text-black dark:hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Rafi on X (Twitter)"
          >
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
          {' '}this template for your own academic profile!
        </p>
      </footer>
    </main>
  );
}
