// src/app/layout.tsx
// Root layout — defines <html>, <body>, fonts, and base metadata

import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { BASE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';
import './globals.css';

// ── Fonts ──
// Space Grotesk for headings (bold, geometric — fits Neubrutalism)
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

// Inter for body text (clean, highly legible)
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

// ── Base Metadata (title template applies to all child pages) ──
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_NAME} — Free Online Image Tools`,
    template: `%s`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'image compressor',
    'image converter',
    'resize image online',
    'compress image',
    'png to webp',
    'jpg to webp',
    'free image tools',
    'online image editor',
    'client side image processing',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Free Online Image Tools`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Free Online Image Tools`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FFFDF7] text-gray-900 font-[family-name:var(--font-body)]">
        {/* Header — will be replaced with full Neubrutalist header in Phase 3 */}
        <header className="border-b-3 border-black bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a
              href="/"
              className="text-2xl font-extrabold tracking-tight font-[family-name:var(--font-heading)]"
            >
              <span className="text-orange-500">Image</span>
              <span className="text-gray-900">Fix</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="/" className="hover:text-orange-500 transition-colors">
                Home
              </a>
              <a href="/about" className="hover:text-orange-500 transition-colors">
                About
              </a>
            </nav>
          </div>
        </header>

        {/* Main content — children rendered here */}
        {children}

        {/* Footer — will be replaced with full Neubrutalist footer in Phase 3 */}
        <footer className="border-t-3 border-black bg-white mt-auto">
          <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} {SITE_NAME}. All processing happens in
              your browser — your images never leave your device.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
