import { publications } from '@/data/publications';

export default function PublicationsPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-2xl font-semibold">Publications</h1>
      {publications.map((pub, idx) => (
        <div key={idx} className="space-y-1">
          <h2 className="text-lg font-medium">{pub.title}</h2>
          <p className="text-sm text-zinc-600">{pub.authors.join(', ')} — <em>{pub.journal}</em> ({pub.year})</p>
          {pub.link && <a href={pub.link} className="text-blue-600 underline" target="_blank">View publication</a>}
        </div>
      ))}
    </main>
  );
}
