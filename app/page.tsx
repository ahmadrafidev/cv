import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-3xl font-bold">Hi, I am </h1>

      <ul className="space-y-2 pt-4">
        <li><Link href="/about" className="underline underline-offset-4">About</Link></li>
        <li><Link href="/research" className="underline underline-offset-4">Research</Link></li>
        <li><Link href="/publications" className="underline underline-offset-4">Publications</Link></li>
        <li><Link href="/cv" className="underline underline-offset-4">CV</Link></li>
      </ul>
    </main>
  );
}
