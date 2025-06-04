import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function BackHomeButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200 group"
    >
      <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
      <span className="hidden sm:inline">Back Home</span>
      <span className="sm:hidden">Back</span>
    </Link>
  );
} 