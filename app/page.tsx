import { Mail, Github, Linkedin, GraduationCap } from 'lucide-react';

import { getAllContent } from '@/lib/content';
import { ContentData, Education, Experience, Publication, Skill, Talk, Teaching } from '@/types/content';

export default async function HomePage() {
  const content = getAllContent() as ContentData;
  const { profile, education, experience, skills, research, publications, talks, teaching } = content;

  return (
    <main className="max-w-4xl mx-auto px-6 py-8 print:py-4 min-h-screen bg-white dark:bg-black">
      {/* Header */}
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
          <h2 id="experience-heading" className="text-lg md:text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Experience</h2>
          <div className="space-y-6">
            {experience.experience.map((exp: Experience, index: number) => (
              <div key={index} className="group">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50">{exp.role}</h3>
                  <span className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">{exp.period}</span>
                </div>
                <p className="text-xs md:text-sm text-zinc-700 dark:text-zinc-300 mb-2">
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
                    <li key={idx} className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-zinc-400">
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
          <h2 id="education-heading" className="text-lg md:text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Education</h2>
          <div className="space-y-4">
            {education.education.map((edu: Education, index: number) => (
              <div key={index}>
                <div className="flex flex-wrap justify-between items-baseline mb-1">
                  <h3 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50">{edu.degree}</h3>
                  <span className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">{edu.year}</span>
                </div>
                <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300">
                  {edu.schoolUrl ? (
                    <a href={edu.schoolUrl} className="hover:text-zinc-900 dark:hover:text-zinc-50" target="_blank" rel="noopener noreferrer">
                      {edu.school}
                    </a>
                  ) : (
                    edu.school
                  )}
                </p>
                {edu.description && (
                  <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 mt-1">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section aria-labelledby="publications-heading">
          <div className="flex justify-between items-center mb-4">
            <h2 id="publications-heading" className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-50">Selected Publications</h2>
            <a 
              href="/publications" 
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 flex items-center gap-1"
            >
              View all
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div className="space-y-4">
            {publications.publications.slice(0, 3).map((pub: Publication, index: number) => (
              <div key={index}>
                <h3 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50 mb-1">
                  {pub.link ? (
                    <a href={pub.link} className="hover:text-zinc-600 hover:underline dark:hover:text-zinc-300">
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className="text-xs md:text-sm text-zinc-700 dark:text-zinc-300">{pub.authors}</p>
                <p className="text-xs md:text-sm italic text-zinc-600 dark:text-zinc-400">{pub.venue}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
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

        {/* Research Interests */}
        <section aria-labelledby="research-heading">
          <h2 id="research-heading" className="text-lg md:text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Research Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {research.research_interests.map((interest: string, index: number) => (
              <div 
                key={index} 
                className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300">
                  {interest}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Talks & Presentations */}
        <section aria-labelledby="talks-heading">
          <h2 id="talks-heading" className="text-lg md:text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Talks & Presentations</h2>
          
          {/* Conference Talks */}
          <div className="mb-6">
            <h3 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50 mb-3">Conference Talks</h3>
            <div className="space-y-4">
              {talks.conference_talks.map((talk: Talk, index: number) => (
                <div key={index} className="group">
                  <h4 className="font-medium text-base text-zinc-900 dark:text-zinc-50 mb-1">
                    {talk.recordingUrl ? (
                      <a href={talk.recordingUrl} className="hover:text-zinc-600 hover:underline dark:hover:text-zinc-300" target="_blank" rel="noopener noreferrer">
                        {talk.title}
                      </a>
                    ) : (
                      talk.title
                    )}
                  </h4>
                  <div className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                    <p>
                      <span className="font-medium">Event:</span>{' '}
                      {talk.eventUrl ? (
                        <a href={talk.eventUrl} className="hover:text-zinc-900 dark:hover:text-zinc-50" target="_blank" rel="noopener noreferrer">
                          {talk.event}
                        </a>
                      ) : (
                        talk.event
                      )}
                    </p>
                    <p><span className="font-medium">Date:</span> {talk.date}</p>
                    <p><span className="font-medium">Location:</span> {talk.location}</p>
                    <p className="mt-1">{talk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Workshop Presentations */}
          <div className="mb-6">
            <h3 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50 mb-3">Workshop Presentations</h3>
            <div className="space-y-4">
              {talks.workshop_presentations.map((talk: Talk, index: number) => (
                <div key={index} className="group">
                  <h4 className="font-medium text-base text-zinc-900 dark:text-zinc-50 mb-1">
                    {talk.recordingUrl ? (
                      <a href={talk.recordingUrl} className="hover:text-zinc-600 hover:underline dark:hover:text-zinc-300" target="_blank" rel="noopener noreferrer">
                        {talk.title}
                      </a>
                    ) : (
                      talk.title
                    )}
                  </h4>
                  <div className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                    <p>
                      <span className="font-medium">Event:</span>{' '}
                      {talk.eventUrl ? (
                        <a href={talk.eventUrl} className="hover:text-zinc-900 dark:hover:text-zinc-50" target="_blank" rel="noopener noreferrer">
                          {talk.event}
                        </a>
                      ) : (
                        talk.event
                      )}
                    </p>
                    <p><span className="font-medium">Date:</span> {talk.date}</p>
                    <p><span className="font-medium">Location:</span> {talk.location}</p>
                    <p className="mt-1">{talk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel Discussions */}
          <div>
            <h3 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50 mb-3">Panel Discussions</h3>
            <div className="space-y-4">
              {talks.panel_discussions.map((talk: Talk, index: number) => (
                <div key={index} className="group">
                  <h4 className="font-medium text-base text-zinc-900 dark:text-zinc-50 mb-1">
                    {talk.recordingUrl ? (
                      <a href={talk.recordingUrl} className="hover:text-zinc-600 hover:underline dark:hover:text-zinc-300" target="_blank" rel="noopener noreferrer">
                        {talk.title}
                      </a>
                    ) : (
                      talk.title
                    )}
                  </h4>
                  <div className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                    <p>
                      <span className="font-medium">Event:</span>{' '}
                      {talk.eventUrl ? (
                        <a href={talk.eventUrl} className="hover:text-zinc-900 dark:hover:text-zinc-50" target="_blank" rel="noopener noreferrer">
                          {talk.event}
                        </a>
                      ) : (
                        talk.event
                      )}
                    </p>
                    <p><span className="font-medium">Date:</span> {talk.date}</p>
                    <p><span className="font-medium">Location:</span> {talk.location}</p>
                    <p className="mt-1">{talk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching & Mentoring */}
        <section aria-labelledby="teaching-heading">
          <h2 id="teaching-heading" className="text-lg md:text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Teaching & Mentoring</h2>
          
          {/* University Courses */}
          <div className="mb-6">
            <h3 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50 mb-3">University Courses</h3>
            <div className="space-y-4">
              {teaching.university_courses.map((course: Teaching, index: number) => (
                <div key={index} className="group">
                  <h4 className="font-medium text-base text-zinc-900 dark:text-zinc-50 mb-1">
                    {course.courseUrl ? (
                      <a href={course.courseUrl} className="hover:text-zinc-600 hover:underline dark:hover:text-zinc-300" target="_blank" rel="noopener noreferrer">
                        {course.title}
                      </a>
                    ) : (
                      course.title
                    )}
                  </h4>
                  <div className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                    <p>
                      <span className="font-medium">Institution:</span>{' '}
                      {course.institutionUrl ? (
                        <a href={course.institutionUrl} className="hover:text-zinc-900 dark:hover:text-zinc-50" target="_blank" rel="noopener noreferrer">
                          {course.institution}
                        </a>
                      ) : (
                        course.institution
                      )}
                    </p>
                    <p><span className="font-medium">Period:</span> {course.period}</p>
                    <p><span className="font-medium">Role:</span> {course.role}</p>
                    <p className="mt-1">{course.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Workshops & Training */}
          <div className="mb-6">
            <h3 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50 mb-3">Workshops & Training</h3>
            <div className="space-y-4">
              {teaching.workshops_training.map((workshop: Teaching, index: number) => (
                <div key={index} className="group">
                  <h4 className="font-medium text-base text-zinc-900 dark:text-zinc-50 mb-1">{workshop.title}</h4>
                  <div className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                    <p><span className="font-medium">Organization:</span> {workshop.institution}</p>
                    <p><span className="font-medium">Period:</span> {workshop.period}</p>
                    <p><span className="font-medium">Role:</span> {workshop.role}</p>
                    <p className="mt-1">{workshop.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mentoring */}
          <div>
            <h3 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50 mb-3">Mentoring</h3>
            <div className="space-y-4">
              {teaching.mentoring.map((mentorship: Teaching, index: number) => (
                <div key={index} className="group">
                  <h4 className="font-medium text-base text-zinc-900 dark:text-zinc-50 mb-1">{mentorship.title}</h4>
                  <div className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                    <p><span className="font-medium">Organization:</span> {mentorship.institution}</p>
                    <p><span className="font-medium">Period:</span> {mentorship.period}</p>
                    <p><span className="font-medium">Role:</span> {mentorship.role}</p>
                    <p className="mt-1">{mentorship.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs md:text-sm text-zinc-500 dark:text-zinc-400">
        <p>
          Built by{' '}
          <a href="https://x.com/rafiwiranaa" className="hover:text-zinc-900 hover:underline dark:hover:text-zinc-50">
            Rafi.
          </a>
          {' '}Feel free to{' '}
          <a 
            href="https://github.com/ahmadrafidev/cv" 
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
