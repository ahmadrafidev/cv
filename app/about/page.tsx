import { getMdxContent } from '@/lib/mdx'

export default async function AboutPage() {
  const { content } = await getMdxContent('about')

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <article className="prose dark:prose-invert">
        {content}
      </article>
    </main>
  )
}
