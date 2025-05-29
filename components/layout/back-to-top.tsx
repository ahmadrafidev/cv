'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

interface BackToTopProps {
  showAfter?: number;
  className?: string;
}

export function BackToTop({ showAfter = 300, className = '' }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(toggleVisibility, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 md:right-[calc(50%-32rem+1.5rem)] z-50
        w-12 h-12
        bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200
        text-white dark:text-gray-900
        rounded-full shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        transform hover:scale-110 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2
        print:hidden
        ${isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
        }
        ${className}
      `}
      aria-label="Back to top"
      title="Back to top"
      aria-hidden={!isVisible}
    >
      <ChevronUp className="w-6 h-6 mx-auto" />
    </button>
  );
} 