import { education, experience } from '@/data/cv';

export default function CVPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 space-y-10">
      <section>
        <h1 className="text-2xl font-semibold">Education</h1>
        <ul className="space-y-3 mt-4">
          {education.map((edu, idx) => (
            <li key={idx}>
              <p className="font-medium">{edu.school}</p>
              <p className="text-sm text-zinc-600">{edu.degree} ({edu.start} - {edu.end})</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h1 className="text-2xl font-semibold">Experience</h1>
        <ul className="space-y-3 mt-4">
          {experience.map((exp, idx) => (
            <li key={idx}>
              <p className="font-medium">{exp.company}</p>
              <p className="text-sm text-zinc-600">{exp.role} ({exp.start} - {exp.end})</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}