'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-4 border-black shadow-brutal-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-8">
        
        {/* Left Side: Logo & Mega Menu Trigger */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-3xl font-extrabold tracking-tight font-[family-name:var(--font-heading)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-transform z-50 relative bg-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="text-primary">Image</span>
            <span className="text-gray-900">Fix</span>
          </Link>

          {/* Desktop Mega Menu Trigger */}
          <div 
            className="hidden lg:block relative"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <button className="flex items-center gap-2 bg-accent/20 hover:bg-accent px-4 py-2 border-2 border-black shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all font-bold text-gray-900 uppercase tracking-wide">
              <span>All Tools</span>
              <span className={`transform transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {/* Mega Menu Dropdown */}
            {isMegaMenuOpen && (
              <div className="absolute top-full left-0 pt-5 w-[850px]">
                <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] p-8 grid grid-cols-3 gap-10">
                
                {/* Column 1: Optimize & Modify */}
                <div className="space-y-8">
                  <div>
                    <h3 className="font-extrabold text-primary uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                      Optimize
                    </h3>
                    <ul className="space-y-4">
                      <li>
                        <Link href="/compress-images/compress-image-to-50kb" className="group block" onClick={() => setIsMegaMenuOpen(false)}>
                          <div className="font-bold text-gray-900 group-hover:text-primary transition-colors">Compress Image</div>
                          <div className="text-sm font-medium text-gray-500">Shrink size, keep quality</div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/compress-images/compress-image-to-20kb" className="group block" onClick={() => setIsMegaMenuOpen(false)}>
                          <div className="font-bold text-gray-900 group-hover:text-primary transition-colors">Extreme Compress</div>
                          <div className="text-sm font-medium text-gray-500">Under 20KB for portals</div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-blue-600 uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600 inline-block"></span>
                      Modify
                    </h3>
                    <ul className="space-y-4">
                      <li>
                        <Link href="/resize-and-scale/resize-image-to-1920x1080" className="group block" onClick={() => setIsMegaMenuOpen(false)}>
                          <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Resize Image</div>
                          <div className="text-sm font-medium text-gray-500">Exact px or preset bounds</div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Column 2: Convert */}
                <div className="space-y-8">
                  <div>
                    <h3 className="font-extrabold text-orange-500 uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
                      Convert
                    </h3>
                    <ul className="space-y-4">
                      <li>
                        <Link href="/convert-formats/convert-png-to-webp" className="group block" onClick={() => setIsMegaMenuOpen(false)}>
                          <div className="font-bold text-gray-900 group-hover:text-orange-500 transition-colors">PNG to WebP</div>
                          <div className="text-sm font-medium text-gray-500">Modern web format</div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/convert-formats/convert-png-to-jpg" className="group block" onClick={() => setIsMegaMenuOpen(false)}>
                          <div className="font-bold text-gray-900 group-hover:text-orange-500 transition-colors">PNG to JPG</div>
                          <div className="text-sm font-medium text-gray-500">Universal compatibility</div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/convert-formats/convert-jpg-to-webp" className="group block" onClick={() => setIsMegaMenuOpen(false)}>
                          <div className="font-bold text-gray-900 group-hover:text-orange-500 transition-colors">JPG to WebP</div>
                          <div className="text-sm font-medium text-gray-500">Save bandwidth</div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Column 3: Exam & Gov Forms */}
                <div className="space-y-8 bg-gray-50 p-6 border-2 border-black -m-4">
                  <div>
                    <h3 className="font-extrabold text-gray-900 uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-900 inline-block"></span>
                      Exam & Gov Forms
                    </h3>
                    <ul className="space-y-5">
                      <li>
                        <Link href="/indian-exams/upsc-photo-resize" className="group flex gap-3 items-center" onClick={() => setIsMegaMenuOpen(false)}>
                          <div className="w-8 h-8 flex items-center justify-center border-2 border-black bg-white shadow-[2px_2px_0px_#000] text-sm group-hover:bg-primary group-hover:text-white transition-colors">🇮🇳</div>
                          <div>
                            <div className="font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">UPSC Formatter</div>
                            <div className="text-xs font-medium text-gray-500">DAF & application</div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/indian-exams/ssc-chsl-photo" className="group flex gap-3 items-center" onClick={() => setIsMegaMenuOpen(false)}>
                          <div className="w-8 h-8 flex items-center justify-center border-2 border-black bg-white shadow-[2px_2px_0px_#000] text-sm group-hover:bg-primary group-hover:text-white transition-colors">📝</div>
                          <div>
                            <div className="font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">SSC Resizer</div>
                            <div className="text-xs font-medium text-gray-500">CGL / CHSL / MTS</div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/indian-id-documents/pan-card-uti-photo" className="group flex gap-3 items-center" onClick={() => setIsMegaMenuOpen(false)}>
                          <div className="w-8 h-8 flex items-center justify-center border-2 border-black bg-white shadow-[2px_2px_0px_#000] text-sm group-hover:bg-primary group-hover:text-white transition-colors">🆔</div>
                          <div>
                            <div className="font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">PAN Card Photo</div>
                            <div className="text-xs font-medium text-gray-500">NSDL / UTI spec</div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/visas/schengen-visa-photo" className="group flex gap-3 items-center" onClick={() => setIsMegaMenuOpen(false)}>
                          <div className="w-8 h-8 flex items-center justify-center border-2 border-black bg-white shadow-[2px_2px_0px_#000] text-sm group-hover:bg-primary group-hover:text-white transition-colors">🇺🇸</div>
                          <div>
                            <div className="font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">US Visa Photo</div>
                            <div className="text-xs font-medium text-gray-500">DS-160 600x600 px</div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/passports/uk-passport-photo" className="group flex gap-3 items-center" onClick={() => setIsMegaMenuOpen(false)}>
                          <div className="w-8 h-8 flex items-center justify-center border-2 border-black bg-white shadow-[2px_2px_0px_#000] text-sm group-hover:bg-primary group-hover:text-white transition-colors">🇬🇧</div>
                          <div>
                            <div className="font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">UK Passport</div>
                            <div className="text-xs font-medium text-gray-500">Digital online form</div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                </div>
              </div>
            )}
          </div>
        </div>

        {/* Center: Quick Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/compress-images/compress-image-to-50kb" className="font-bold text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            Images
          </Link>
          <Link href="/indian-exams/upsc-photo-resize" className="font-bold text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
            Exam Forms
          </Link>
          <Link href="/visas/schengen-visa-photo" className="font-bold text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            Visas & Passports
          </Link>
        </nav>

        {/* Right Side: CTA & Mobile Hamburger */}
        <div className="flex items-center gap-4 relative z-50 bg-white md:bg-transparent">
          <Link 
            href="/compress-images/compress-image-to-50kb" 
            className="hidden sm:flex bg-primary text-white font-extrabold px-6 py-2 border-4 border-black shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] transition-all whitespace-nowrap items-center gap-2 rounded-sm"
          >
            Try Free <span className="text-xl leading-none">➔</span>
          </Link>
          
          <button 
            className="lg:hidden p-2 border-4 border-black bg-white shadow-[2px_2px_0px_#000] font-bold z-50 flex flex-col justify-center items-center w-12 h-12" 
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-1 bg-black transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-1'}`}></span>
            <span className={`block w-6 h-1 bg-black transition-all my-0.5 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-1 bg-black transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[76px] bg-white z-40 overflow-y-auto pb-24 border-t-4 border-black animate-in slide-in-from-top-2 duration-200">
          <div className="p-6 space-y-8">
            
            <div className="space-y-4">
              <h3 className="font-extrabold text-primary uppercase tracking-widest text-sm border-b-2 border-black pb-2">Optimize & Modify</h3>
              <div className="grid grid-cols-1 gap-3">
                <Link href="/compress-images/compress-image-to-50kb" className="font-bold text-lg p-3 border-2 border-black bg-accent/10 active:bg-accent" onClick={toggleMobileMenu}>Compress Image</Link>
                <Link href="/resize-and-scale/resize-image-to-1920x1080" className="font-bold text-lg p-3 border-2 border-black bg-accent/10 active:bg-accent" onClick={toggleMobileMenu}>Resize Image</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-extrabold text-orange-500 uppercase tracking-widest text-sm border-b-2 border-black pb-2">Convert</h3>
              <div className="grid grid-cols-1 gap-3">
                <Link href="/convert-formats/convert-png-to-webp" className="font-bold text-lg p-3 border-2 border-black bg-orange-50 active:bg-orange-100" onClick={toggleMobileMenu}>PNG to WebP</Link>
                <Link href="/convert-formats/convert-png-to-jpg" className="font-bold text-lg p-3 border-2 border-black bg-orange-50 active:bg-orange-100" onClick={toggleMobileMenu}>PNG to JPG</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-extrabold text-gray-900 uppercase tracking-widest text-sm border-b-2 border-black pb-2">Exam & Gov Forms</h3>
              <div className="grid grid-cols-1 gap-3">
                <Link href="/indian-exams/upsc-photo-resize" className="font-bold text-lg p-3 border-2 border-black bg-gray-50 active:bg-gray-100 flex items-center justify-between" onClick={toggleMobileMenu}>
                  UPSC Formatter <span className="text-2xl">🇮🇳</span>
                </Link>
                <Link href="/indian-exams/ssc-chsl-photo" className="font-bold text-lg p-3 border-2 border-black bg-gray-50 active:bg-gray-100 flex items-center justify-between" onClick={toggleMobileMenu}>
                  SSC Resizer <span className="text-2xl">📝</span>
                </Link>
                <Link href="/visas/schengen-visa-photo" className="font-bold text-lg p-3 border-2 border-black bg-gray-50 active:bg-gray-100 flex items-center justify-between" onClick={toggleMobileMenu}>
                  US Visa Photo <span className="text-2xl">🇺🇸</span>
                </Link>
                <Link href="/passports/uk-passport-photo" className="font-bold text-lg p-3 border-2 border-black bg-gray-50 active:bg-gray-100 flex items-center justify-between" onClick={toggleMobileMenu}>
                  UK Passport <span className="text-2xl">🇬🇧</span>
                </Link>
              </div>
            </div>

            <Link 
              href="/compress-images/compress-image-to-50kb" 
              className="flex justify-center items-center gap-2 w-full bg-primary text-white font-extrabold uppercase px-6 py-4 border-4 border-black shadow-[4px_4px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000] rounded-sm"
              onClick={toggleMobileMenu}
            >
              Try For Free <span className="text-xl leading-none">➔</span>
            </Link>

          </div>
        </div>
      )}
    </header>
  );
};
