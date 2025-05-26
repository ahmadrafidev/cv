import { ContentData, Talk } from '@/types/content';
import Link from 'next/link';

interface TalksSectionProps {
  talks: ContentData['talks'];
}

export function TalksSection({ talks }: TalksSectionProps) {
  return (
    <section aria-labelledby="talks-heading">
      <div className="flex justify-between items-center mb-4">
        <h2 id="talks-heading" className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-50">Talks & Presentations</h2>
        <Link 
          href="/talks" 
          className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-1 rounded-md transition-all duration-200  flex items-center gap-1"
        >
          View all
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </Link>
      </div>
      
      {/* Conference Talks */}
      {talks.conference_talks && talks.conference_talks.length > 0 && (
        <div className="mb-6">
          <h3 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50 mb-3">Conference Talks</h3>
          <div className="space-y-4">
            {talks.conference_talks.slice(0, 3).map((talk: Talk, index: number) => (
              <div key={index} className="group">
                <h4 className="font-medium text-base text-zinc-900 dark:text-zinc-50 mb-1">
                  {talk.recordingUrl ? (
                    <Link 
                      href={talk.recordingUrl} 
                      className="hover:text-zinc-600 hover:underline dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-1 py-0.5 rounded transition-all duration-200 inline-block" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {talk.title}
                    </Link>
                  ) : (
                    talk.title
                  )}
                </h4>
                <div className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                  <p>
                    <span className="font-medium">Event:</span>{' '}
                    {talk.eventUrl ? (
                      <Link 
                        href={talk.eventUrl} 
                        className="hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-1 py-0.5 rounded transition-all duration-200 hover:underline" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {talk.event}
                      </Link>
                    ) : (
                      talk.event
                    )}
                  </p>
                  <p><span className="font-medium">Date:</span> {talk.date}</p>
                  <p><span className="font-medium">Location:</span> {talk.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Workshop Presentations */}
      {talks.workshop_presentations && talks.workshop_presentations.length > 0 && (
        <div className="mb-6">
          <h3 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50 mb-3">Workshop Presentations</h3>
          <div className="space-y-4">
            {talks.workshop_presentations.slice(0, 3).map((talk: Talk, index: number) => (
              <div key={index} className="group">
                <h4 className="font-medium text-base text-zinc-900 dark:text-zinc-50 mb-1">
                  {talk.recordingUrl ? (
                    <Link 
                      href={talk.recordingUrl} 
                      className="hover:text-zinc-600 hover:underline dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-1 py-0.5 rounded transition-all duration-200 inline-block" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {talk.title}
                    </Link>
                  ) : (
                    talk.title
                  )}
                </h4>
                <div className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                  <p>
                    <span className="font-medium">Event:</span>{' '}
                    {talk.eventUrl ? (
                      <Link 
                        href={talk.eventUrl} 
                        className="hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-1 py-0.5 rounded transition-all duration-200 hover:underline" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {talk.event}
                      </Link>
                    ) : (
                      talk.event
                    )}
                  </p>
                  <p><span className="font-medium">Date:</span> {talk.date}</p>
                  <p><span className="font-medium">Location:</span> {talk.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {talks.panel_discussions && talks.panel_discussions.length > 0 && (
        <div>
          <h3 className="font-medium text-base md:text-lg text-zinc-900 dark:text-zinc-50 mb-3">Panel Discussions</h3>
          <div className="space-y-4">
            {talks.panel_discussions.slice(0, 3).map((talk: Talk, index: number) => (
              <div key={index} className="group">
                <h4 className="font-medium text-base text-zinc-900 dark:text-zinc-50 mb-1">
                  {talk.recordingUrl ? (
                    <Link 
                      href={talk.recordingUrl} 
                      className="hover:text-zinc-600 hover:underline dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-1 py-0.5 rounded transition-all duration-200 inline-block" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {talk.title}
                    </Link>
                  ) : (
                    talk.title
                  )}
                </h4>
                <div className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                  <p>
                    <span className="font-medium">Event:</span>{' '}
                    {talk.eventUrl ? (
                      <Link 
                        href={talk.eventUrl} 
                        className="hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-1 py-0.5 rounded transition-all duration-200 hover:underline" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {talk.event}
                      </Link>
                    ) : (
                      talk.event
                    )}
                  </p>
                  <p><span className="font-medium">Date:</span> {talk.date}</p>
                  <p><span className="font-medium">Location:</span> {talk.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
} 