import { ContentData, Teaching } from '@/types/content';

interface TeachingSectionProps {
  teaching: ContentData['teaching'];
}

export function TeachingSection({ teaching }: TeachingSectionProps) {
  return (
    <section aria-labelledby="teaching-heading">
      <div className="flex justify-between items-center mb-4">
        <h2 id="teaching-heading" className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-50">Teaching & Mentoring</h2>
        <a 
          href="/teaching" 
          className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 flex items-center gap-1"
        >
          View all
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </a>
      </div>
      
      {teaching.university_courses && teaching.university_courses.length > 0 && (
        <div className="mb-6">
          <h3 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50 mb-3">University Courses</h3>
          <div className="space-y-4">
            {teaching.university_courses.slice(0, 3).map((course: Teaching, index: number) => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {teaching.workshops_training && teaching.workshops_training.length > 0 && (
        <div className="mb-6">
          <h3 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50 mb-3">Workshops & Training</h3>
          <div className="space-y-4">
            {teaching.workshops_training.slice(0, 3).map((workshop: Teaching, index: number) => (
              <div key={index} className="group">
                <h4 className="font-medium text-base text-zinc-900 dark:text-zinc-50 mb-1">{workshop.title}</h4>
                <div className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                  <p><span className="font-medium">Organization:</span> {workshop.institution}</p>
                  <p><span className="font-medium">Period:</span> {workshop.period}</p>
                  <p><span className="font-medium">Role:</span> {workshop.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {teaching.mentoring && teaching.mentoring.length > 0 && (
        <div>
          <h3 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50 mb-3">Mentoring</h3>
          <div className="space-y-4">
            {teaching.mentoring.slice(0, 3).map((mentorship: Teaching, index: number) => (
              <div key={index} className="group">
                <h4 className="font-medium text-base text-zinc-900 dark:text-zinc-50 mb-1">{mentorship.title}</h4>
                <div className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                  <p><span className="font-medium">Organization:</span> {mentorship.institution}</p>
                  <p><span className="font-medium">Period:</span> {mentorship.period}</p>
                  <p><span className="font-medium">Role:</span> {mentorship.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
} 