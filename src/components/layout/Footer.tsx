import React from 'react';
import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t-4 border-black mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link 
              href="/" 
              className="text-2xl font-extrabold tracking-tight font-[family-name:var(--font-heading)]"
            >
              <span className="text-primary">Image</span>
              <span className="text-gray-900">Fix</span>
            </Link>
            <p className="text-sm font-medium text-gray-700">
              Fix your images entirely in your browser. Fast, free, and 100% private.
            </p>
          </div>

          {/* Tools Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold uppercase tracking-widest text-sm text-gray-900 border-b-2 border-black pb-1 inline-block w-max">
              Popular Tools
            </h3>
            <Link href="/compress-image-to-50kb" className="text-gray-600 hover:text-primary font-medium transition-colors w-max hover:underline underline-offset-4">
              Compress to 50KB
            </Link>
            <Link href="/convert-png-to-webp" className="text-gray-600 hover:text-primary font-medium transition-colors w-max hover:underline underline-offset-4">
              PNG to WebP
            </Link>
            <Link href="/resize-image-to-1920x1080" className="text-gray-600 hover:text-primary font-medium transition-colors w-max hover:underline underline-offset-4">
              Resize to 1080p
            </Link>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold uppercase tracking-widest text-sm text-gray-900 border-b-2 border-black pb-1 inline-block w-max">
              Legal
            </h3>
            <Link href="/about" className="text-gray-600 hover:text-primary font-medium transition-colors w-max hover:underline underline-offset-4">
              About & Privacy
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary font-medium transition-colors w-max hover:underline underline-offset-4">
              Terms of Service
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-dashed border-gray-300 text-center flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm font-bold text-gray-900">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social or GitHub links could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};
