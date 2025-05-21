import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-12 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs md:text-sm text-zinc-500 dark:text-zinc-400">
      <p>
        Built by{' '}
        <Link href="https://x.com/rafiwiranaa" className="underline hover:text-black dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
          Rafi.
        </Link>
        {' '}Feel free to{' '}
        <Link 
          href="https://github.com/ahmadrafidev/cv" 
          className="underline hover:text-black dark:hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fork this template on GitHub"
        >
          fork and customize
        </Link>
        {' '}this template for your own profile.
      </p>
    </footer>
  );
} 