import { research } from '@/data/research';

export default function ResearchPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-2xl font-semibold">Research Projects</h1>
      {research.map((item, idx) => (
        <div key={idx} className="space-y-1">
          <h2 className="text-xl font-medium">{item.title} ({item.year})</h2>
          <p>{item.description}</p>
          {item.link && <a href={item.link} className="text-blue-600 underline" target="_blank">Learn more</a>}
        </div>
      ))}
    </main>
  );
}
