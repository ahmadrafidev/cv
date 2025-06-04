import { getAllContent } from '@/lib/content';
import { ContentData } from '@/types/content';
import Link from 'next/link';
import { BackHomeButton } from '@/components/back-home-button';

export default async function TeachingPage() {
  const content = getAllContent() as ContentData;
  const { teaching } = content;

  return (
    <main className="max-w-4xl mx-auto px-6 py-8 print:py-4 min-h-screen bg-white dark:bg-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Teaching & Mentoring</h1>
          <BackHomeButton />
        </div>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
          A comprehensive overview of my teaching experience, including university courses, workshops, and mentoring activities.
        </p>
      </header>

      <div className="space-y-12">
        {/* University Courses */}
        <section aria-labelledby="university-courses-heading">
          <h2 id="university-courses-heading" className="text-xl md:text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-50">
            University Courses
          </h2>
          <div className="space-y-8">
            {teaching.university_courses.map((course, index) => (
              <div key={index} className="group">
                <h3 className="font-medium text-lg text-zinc-900 dark:text-zinc-50 mb-2">
                  {course.courseUrl ? (
                    <Link 
                      href={course.courseUrl} 
                      className="hover:text-zinc-600 hover:underline dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-1 py-0.5 rounded transition-all duration-200 inline-block" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {course.title}
                    </Link>
                  ) : (
                    course.title
                  )}
                </h3>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                  <p>
                    <span className="font-medium">Institution:</span>{' '}
                    {course.institutionUrl ? (
                      <Link 
                        href={course.institutionUrl} 
                        className="hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-1 py-0.5 rounded transition-all duration-200 hover:underline" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {course.institution}
                      </Link>
                    ) : (
                      course.institution
                    )}
                  </p>
                  <p><span className="font-medium">Period:</span> {course.period}</p>
                  <p><span className="font-medium">Role:</span> {course.role}</p>
                  <p className="mt-2">{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workshops & Training */}
        <section aria-labelledby="workshops-training-heading">
          <h2 id="workshops-training-heading" className="text-xl md:text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-50">
            Workshops & Training
          </h2>
          <div className="space-y-8">
            {teaching.workshops_training.map((workshop, index) => (
              <div key={index} className="group">
                <h3 className="font-medium text-lg text-zinc-900 dark:text-zinc-50 mb-2">{workshop.title}</h3>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                  <p><span className="font-medium">Organization:</span> {workshop.institution}</p>
                  <p><span className="font-medium">Period:</span> {workshop.period}</p>
                  <p><span className="font-medium">Role:</span> {workshop.role}</p>
                  <p className="mt-2">{workshop.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mentoring */}
        <section aria-labelledby="mentoring-heading">
          <h2 id="mentoring-heading" className="text-xl md:text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-50">
            Mentoring
          </h2>
          <div className="space-y-8">
            {teaching.mentoring.map((mentorship, index) => (
              <div key={index} className="group">
                <h3 className="font-medium text-lg text-zinc-900 dark:text-zinc-50 mb-2">{mentorship.title}</h3>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                  <p><span className="font-medium">Organization:</span> {mentorship.institution}</p>
                  <p><span className="font-medium">Period:</span> {mentorship.period}</p>
                  <p><span className="font-medium">Role:</span> {mentorship.role}</p>
                  <p className="mt-2">{mentorship.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 