import { getAllContent } from '@/lib/content';
import { ContentData, Education, Experience, Publication, ResearchInterest, Skill } from '@/types/content';

export default async function HomePage() {
  const content = getAllContent() as ContentData;
  const { profile, education, experience, skills, research, publications } = content;

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      {/* Header/Introduction */}
      <header className="mb-12 border-b pb-8">
        <h1 className="text-4xl font-bold mb-4">{profile.name}</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
          {profile.title}
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
          {profile.summary}
        </p>
      </header>

      {/* Contact Information */}
      <section className="mb-12">
        <div className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <a href={`mailto:${profile.contact.email}`} className="hover:text-black dark:hover:text-white">
            {profile.contact.email}
          </a>
          <span>•</span>
          <a href={`https://github.com/${profile.contact.github}`} className="hover:text-black dark:hover:text-white">
            github.com/{profile.contact.github}
          </a>
          <span>•</span>
          <a href={`https://linkedin.com/in/${profile.contact.linkedin}`} className="hover:text-black dark:hover:text-white">
            linkedin.com/in/{profile.contact.linkedin}
          </a>
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Education</h2>
        <div className="space-y-4">
          {education.education.map((edu: Education, index: number) => (
            <div key={index} className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{edu.degree}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{edu.school}</p>
                {edu.description && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">{edu.description}</p>
                )}
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{edu.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Experience</h2>
        <div className="space-y-6">
          {experience.experience.map((exp: Experience, index: number) => (
            <div key={index}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">{exp.role}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">{exp.company}</p>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-1 text-sm">
                {exp.highlights.map((highlight: string, idx: number) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Selected Publications</h2>
        <div className="space-y-4">
          {publications.publications.map((pub: Publication, index: number) => (
            <div key={index} className="space-y-1">
              <h3 className="font-medium">
                {pub.link ? (
                  <a href={pub.link} className="hover:text-zinc-800 dark:hover:text-zinc-200">
                    {pub.title}
                  </a>
                ) : (
                  pub.title
                )}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{pub.authors}</p>
              <p className="text-sm italic text-zinc-600 dark:text-zinc-400">{pub.venue}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Technical Skills</h2>
        <div className="space-y-4">
          {skills.skills.map((skill: Skill, index: number) => (
            <div key={index}>
              <h3 className="font-medium mb-2">{skill.category}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{skill.items.join(' • ')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Interests */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Research Interests</h2>
        <div className="space-y-2">
          {research.research_interests.map((interest: ResearchInterest, index: number) => (
            <div key={index}>
              <h3 className="font-medium">{interest.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{interest.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Template Note */}
      <footer className="text-sm text-zinc-400 dark:text-zinc-500 border-t pt-8">
        <p>
          This is a template. Fork this project on{' '}
          <a 
            href="https://github.com/username/repo" 
            className="underline hover:text-black dark:hover:text-white"
          >
            GitHub
          </a>
          {' '}to create your own version.
        </p>
      </footer>
    </main>
  );
}
