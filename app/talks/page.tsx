import { getAllContent } from '@/lib/content';
import { ContentData } from '@/types/content';
import Link from 'next/link';

export default async function TalksPage() {
  const content = getAllContent() as ContentData;
  const { talks } = content;

  return (
    <main className="max-w-4xl mx-auto px-6 py-8 print:py-4 min-h-screen bg-white dark:bg-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Talks & Presentations</h1>
          <Link 
            href="/" 
            className="text-sm text-gray-700 dark:text-gray-200 hover:underline hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-1 rounded transition-all duration-200"
          >
            Back Home
          </Link>
        </div>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
          A comprehensive list of my speaking engagements, including conference talks, workshop presentations, and panel discussions.
        </p>
      </header>

      <div className="space-y-12">
        {/* Conference Talks */}
        <section aria-labelledby="conference-talks-heading">
          <h2 id="conference-talks-heading" className="text-xl md:text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-50">
            Conference Talks
          </h2>
          <div className="space-y-8">
            {talks.conference_talks.map((talk, index) => (
              <div key={index} className="group">
                <h3 className="font-medium text-lg text-zinc-900 dark:text-zinc-50 mb-2">
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
                </h3>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
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
                  <p className="mt-2">{talk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workshop Presentations */}
        <section aria-labelledby="workshop-presentations-heading">
          <h2 id="workshop-presentations-heading" className="text-xl md:text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-50">
            Workshop Presentations
          </h2>
          <div className="space-y-8">
            {talks.workshop_presentations.map((talk, index) => (
              <div key={index} className="group">
                <h3 className="font-medium text-lg text-zinc-900 dark:text-zinc-50 mb-2">
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
                </h3>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
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
                  <p className="mt-2">{talk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Panel Discussions */}
        <section aria-labelledby="panel-discussions-heading">
          <h2 id="panel-discussions-heading" className="text-xl md:text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-50">
            Panel Discussions
          </h2>
          <div className="space-y-8">
            {talks.panel_discussions.map((talk, index) => (
              <div key={index} className="group">
                <h3 className="font-medium text-lg text-zinc-900 dark:text-zinc-50 mb-2">
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
                </h3>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
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
                  <p className="mt-2">{talk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 