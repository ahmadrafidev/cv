import { about } from '@/data/about';

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 space-y-4">
      <h1 className="text-2xl font-semibold">About</h1>
      <p>Name: {about.name}</p>
      <p>Role: {about.role}</p>
      <p>Location: {about.location}</p>
      <p>Email: {about.email}</p>
    </main>
  );
}
