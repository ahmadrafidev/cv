interface SectionProps {
  children: React.ReactNode
  className?: string
}

export function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`my-8 ${className}`}>
      {children}
    </section>
  )
}

interface CardProps {
  title: string
  description?: string
  link?: string
  year?: string | number
  className?: string
}

export function Card({ title, description, link, year, className = '' }: CardProps) {
  return (
    <div className={`p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {year && <span className="text-sm text-neutral-500">{year}</span>}
      </div>
      {description && <p className="text-neutral-700 dark:text-neutral-300">{description}</p>}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          Learn more →
        </a>
      )}
    </div>
  )
}