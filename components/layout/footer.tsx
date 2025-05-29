import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-12 pt-4 text-center text-xs md:text-sm text-zinc-700 dark:text-zinc-300">
      <p>
        Built by{' '}
        <Link href="https://x.com/rafiwiranaa" className="underline hover:text-black dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
          Rafi.
        </Link>
        {' '}Feel free to{' '}
        <Link 
          href="https://github.com/ahmadrafidev/scho" 
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