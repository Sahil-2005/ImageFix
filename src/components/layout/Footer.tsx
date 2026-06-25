import React from 'react';
import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t-4 border-black mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
          
          {/* Brand & Trust */}
          <div className="flex flex-col gap-5 md:col-span-2">
            <Link 
              href="/" 
              className="text-3xl font-extrabold tracking-tight font-[family-name:var(--font-heading)] inline-block w-max"
            >
              <span className="text-primary">Image</span>
              <span className="text-gray-900">Fix</span>
            </Link>
            <p className="text-base font-medium text-gray-700 max-w-sm">
              The fastest, most secure way to optimize your images. All processing happens 100% locally in your browser.
            </p>
            <div className="flex items-center gap-3 bg-surface-alt border-2 border-black p-3 w-max shadow-brutal-sm">
              <span className="text-2xl">🔒</span>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900 leading-none">100% Secure</span>
                <span className="text-xs font-medium text-gray-600 leading-none mt-1">Files never leave your device</span>
              </div>
            </div>
          </div>

          {/* Tools Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold uppercase tracking-widest text-sm text-gray-900 border-b-2 border-black pb-1 inline-block w-max">
              Popular Tools
            </h3>
            <Link href="/compress-images/compress-image-to-50kb" className="text-gray-600 hover:text-primary font-bold transition-colors w-max hover:underline underline-offset-4">
              Compress to 50KB
            </Link>
            <Link href="/convert-formats/convert-png-to-webp" className="text-gray-600 hover:text-primary font-bold transition-colors w-max hover:underline underline-offset-4">
              PNG to WebP
            </Link>
            <Link href="/resize-and-scale/resize-image-to-1920x1080" className="text-gray-600 hover:text-primary font-bold transition-colors w-max hover:underline underline-offset-4">
              Resize to 1080p
            </Link>
            <Link href="/convert-formats/convert-jpg-to-webp" className="text-gray-600 hover:text-primary font-bold transition-colors w-max hover:underline underline-offset-4">
              JPG to WebP
            </Link>
          </div>

          {/* Resources & Blog */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold uppercase tracking-widest text-sm text-gray-900 border-b-2 border-black pb-1 inline-block w-max">
              Resources
            </h3>
            <Link href="/blog" className="text-gray-600 hover:text-primary font-bold transition-colors w-max hover:underline underline-offset-4">
              Read Our Blog
            </Link>
            <Link href="/blog/us-visa-photo-requirements-2026" className="text-gray-600 hover:text-primary font-bold transition-colors w-max hover:underline underline-offset-4 line-clamp-1">
              US Visa Photo Guide
            </Link>
            <Link href="/blog/client-side-image-compression-canvas-web-workers" className="text-gray-600 hover:text-primary font-bold transition-colors w-max hover:underline underline-offset-4 line-clamp-1">
              Canvas Compression
            </Link>
          </div>

          {/* Legal & Support */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold uppercase tracking-widest text-sm text-gray-900 border-b-2 border-black pb-1 inline-block w-max">
              Company
            </h3>
            <Link href="/about" className="text-gray-600 hover:text-primary font-bold transition-colors w-max hover:underline underline-offset-4">
              About Us
            </Link>
            <Link href="/privacy-policy" className="text-gray-600 hover:text-primary font-bold transition-colors w-max hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-primary font-bold transition-colors w-max hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary font-bold transition-colors w-max hover:underline underline-offset-4">
              Contact Us
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-dashed border-gray-300 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm font-bold text-gray-900">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-sm font-bold text-gray-600 flex items-center gap-1">
            Made with <span className="text-primary text-lg">♥</span> for a faster web
          </p>
        </div>
      </div>
    </footer>
  );
};
