import { getMdxContent } from '@/lib/mdx'

export default async function ResearchPage() {
  const { content } = await getMdxContent('research')

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <article className="prose dark:prose-invert">
        {content}
      </article>
    </main>
  )
}
