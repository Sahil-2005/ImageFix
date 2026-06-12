import React from 'react';
import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-4 border-black shadow-brutal-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="text-3xl font-extrabold tracking-tight font-[family-name:var(--font-heading)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-transform"
        >
          <span className="text-primary">Image</span>
          <span className="text-gray-900">Fix</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="font-bold text-gray-900 uppercase tracking-wide hover:bg-accent hover:text-black px-3 py-1 border-2 border-transparent hover:border-black transition-colors">
            Home
          </Link>
          <Link href="/about" className="font-bold text-gray-900 uppercase tracking-wide hover:bg-accent hover:text-black px-3 py-1 border-2 border-transparent hover:border-black transition-colors">
            About
          </Link>
        </nav>

        {/* Mobile menu button placeholder (optional) */}
        <div className="md:hidden">
          <button className="p-2 border-2 border-black bg-accent font-bold" aria-label="Menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};
