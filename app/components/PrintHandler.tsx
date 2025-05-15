'use client';

import { useEffect } from 'react';

export default function PrintHandler() {
  useEffect(() => {
    const handlePrint = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'p') {
        e.preventDefault();
        window.print();
      }
    };

    window.addEventListener('keydown', handlePrint);
    return () => window.removeEventListener('keydown', handlePrint);
  }, []);

  return null;
} 