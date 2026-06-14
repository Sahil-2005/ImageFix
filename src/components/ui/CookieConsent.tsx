'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-black p-4 md:p-6 z-[100] shadow-[0_-4px_0_rgba(0,0,0,1)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-gray-900 font-medium text-sm md:text-base leading-relaxed flex-1">
          <strong>We value your privacy.</strong> We use cookies to personalize content and ads, provide social media features, and analyze our traffic. Third-party vendors, including Google, use cookies to serve ads based on your prior visits. By using our site, you consent to our use of cookies. 
          <br className="hidden md:block" />
          Read our <Link href="/privacy-policy" className="underline font-bold text-primary hover:text-gray-900 transition-colors">Privacy Policy</Link> for full details and opt-out instructions.
        </div>
        <button
          onClick={acceptCookies}
          className="bg-primary text-white font-extrabold uppercase tracking-wide px-8 py-3 border-4 border-black shadow-brutal hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-none transition-all whitespace-nowrap"
        >
          Accept & Close
        </button>
      </div>
    </div>
  );
}
