// src/app/page.tsx
// Homepage — hero section + tool category grid + featured tools

import Link from 'next/link';
import type { Metadata } from 'next';
import { TOOLS } from '@/lib/registry/toolRegistry';
import { CATEGORIES } from '@/lib/registry/categories';
import { BASE_URL, SITE_NAME } from '@/lib/constants';

// UI Components
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: `${SITE_NAME} — Free Online Image Tools. No Upload. No Server.`,
  description: 'Compress, resize, crop, and convert images instantly in your browser. 100% free, 100% private. Supports UPSC, SSC, NEET, passport, and visa photo compliance formats.',
  alternates: {
    canonical: BASE_URL,
  },
};

export default function Home() {
  return (
    <>
      {/* ── Hero Section ── */}
      <div className="bg-dots w-full border-b-4 border-black">
        <Container className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight font-[family-name:var(--font-heading)] mb-6 leading-none">
              <span className="text-primary block mb-2">Fix Your Images.</span>
              <span className="text-gray-900 block">In Your Browser.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl font-medium mb-10 leading-snug">
              Compress, resize, crop, and convert images instantly.
              <br />
              <strong className="text-black bg-accent px-2 leading-loose">100% free. 100% private.</strong>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/compress-images/compress-image-to-50kb">
                <Button variant="primary" className="text-xl py-4 px-8">
                  Compress an Image
                </Button>
              </Link>
              <Link href="/convert-formats/convert-png-to-webp">
                <Button variant="outline" className="text-xl py-4 px-8">
                  Convert Formats
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Privacy Badge ── */}
      <Container className="-mt-8 mb-16 relative z-10">
        <div className="bg-white border-4 border-black shadow-brutal p-5 flex items-center gap-4 max-w-2xl mx-auto justify-center">
          <span className="text-3xl">🔒</span>
          <p className="text-base text-gray-800 font-medium">
            <strong>No Servers Involved.</strong> Your images are processed using HTML5 Canvas and Web Workers. They never leave your device.
          </p>
        </div>
      </Container>

      {/* ── Category Grid ── */}
      <Container className="pb-20">
        <h2 className="text-4xl font-extrabold font-[family-name:var(--font-heading)] text-center mb-10 text-gray-900">
          What do you need to do?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((category) => {
            const categoryTools = TOOLS.filter(
              (t) => t.category === category.id
            );
            
            if (categoryTools.length === 0) return null;

            return (
              <Card key={category.id} hoverable className="flex flex-col h-full border-4">
                <div className="text-5xl mb-4 bg-surface-alt w-16 h-16 flex items-center justify-center border-2 border-black shadow-brutal-sm">
                  {category.icon}
                </div>
                <Link href={`/${category.id}`} className="group outline-none inline-block">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    {category.name} <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </h3>
                </Link>
                <p className="text-gray-600 font-medium mb-6 flex-grow">
                  {category.description}
                </p>
                <div className="flex flex-col gap-3">
                  {categoryTools.slice(0, 3).map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/${tool.category}/${tool.slug}`}
                      className="text-base font-bold text-gray-900 hover:text-primary transition-colors flex items-center justify-between group p-2 -mx-2 hover:bg-accent/10 rounded"
                    >
                      <span>{tool.h1}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 transform duration-200">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </Container>

      {/* ── How It Works ── */}
      <div className="bg-white border-y-4 border-black w-full">
        <Container className="py-20">
          <h2 className="text-4xl font-extrabold font-[family-name:var(--font-heading)] text-center mb-4 text-gray-900">
            How It Works
          </h2>
          <p className="text-center text-lg text-gray-600 font-medium mb-12 max-w-2xl mx-auto">
            No accounts. No uploads. No waiting. Every image operation happens entirely inside your browser using the same technology that powers modern web applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '01',
                icon: '📁',
                title: 'Upload Your Image',
                desc: 'Drag and drop or click to select your image. The file is loaded directly into browser memory — it is never sent over the internet.',
              },
              {
                step: '02',
                icon: '⚙️',
                title: 'Process Locally',
                desc: "Our HTML5 Canvas engine and Web Worker algorithms run the operation (compress, resize, convert) entirely on your device's CPU. No server round-trip.",
              },
              {
                step: '03',
                icon: '⬇️',
                title: 'Download Instantly',
                desc: 'The processed image is generated as a local file download. Nothing is stored. Once you close the tab, even the browser has no copy of your file.',
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center bg-surface-alt border-4 border-black p-8 shadow-brutal relative">
                <span className="absolute -top-5 -left-3 bg-primary text-white font-extrabold text-2xl w-10 h-10 flex items-center justify-center border-4 border-black">
                  {item.step}
                </span>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Why ImageFix ── */}
      <Container className="py-20">
        <h2 className="text-4xl font-extrabold font-[family-name:var(--font-heading)] text-center mb-4 text-gray-900">
          Why ImageFix?
        </h2>
        <p className="text-center text-lg text-gray-600 font-medium mb-12 max-w-2xl mx-auto">
          Hundreds of image tools exist online. Here is what makes ImageFix different — and why it matters for your specific use case.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: '🎯',
              title: 'Precision Target Compression',
              desc: 'Most tools compress to a fixed quality level. Ours uses a binary-search algorithm to find the exact quality that hits your target file size (20KB, 50KB, 100KB) — not just "close enough."',
            },
            {
              icon: '📋',
              title: 'Government-Spec Compliance Tools',
              desc: "Pre-configured tools for UPSC, SSC, IBPS, NEET, JEE, Indian passport, US visa, Schengen visa, PAN card, and more — encoding official requirements so you don't have to look them up.",
            },
            {
              icon: '🔒',
              title: 'Absolute Privacy',
              desc: 'Your passport photo, ID scan, or sensitive document never leaves your device. This is architecturally guaranteed — we have no server infrastructure to receive your files.',
            },
            {
              icon: '📱',
              title: 'Works on Any Device',
              desc: 'No app downloads. No account. Works on Android, iPhone, Windows, Mac, and Linux. If your browser is modern, ImageFix will work — including on low-end devices.',
            },
            {
              icon: '⚡',
              title: 'Instant Results',
              desc: 'Because there are no uploads or server queues, processing is instant. Most operations complete in under two seconds, even on mobile devices.',
            },
            {
              icon: '💰',
              title: 'Completely Free, Always',
              desc: 'No freemium tiers. No watermarks. No daily limits. No credit card required. ImageFix is free because we believe access to these utilities should be universal.',
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 bg-white border-4 border-black p-6 shadow-brutal-sm hover:shadow-brutal transition-all">
              <div className="text-3xl flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 font-medium text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* ── All Tools List ── */}
      <div className="bg-surface-alt border-t-4 border-black w-full">
        <Container className="py-20">
          <h2 className="text-4xl font-extrabold font-[family-name:var(--font-heading)] text-center mb-10 text-gray-900">
            All Image Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOLS.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.category}/${tool.slug}`}
                className="block group outline-none"
              >
                <Card hoverable className="h-full group-focus-visible:ring-4 group-focus-visible:ring-primary">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                    {tool.h1}
                  </h3>
                  <p className="text-sm font-medium text-gray-600 line-clamp-2 mb-4">
                    {tool.heroDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto border-t-2 border-dashed border-gray-200 pt-3">
                    {tool.inputFormats.slice(0, 3).map((fmt) => (
                      <Badge key={fmt} variant="neutral" className="text-[10px] py-0 border-gray-300 shadow-none">
                        {fmt}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </div>

      {/* ── About Blurb (SEO content) ── */}
      <Container className="py-20">
        <div className="max-w-3xl mx-auto bg-white border-4 border-black shadow-brutal p-8 space-y-4">
          <h2 className="text-3xl font-extrabold font-[family-name:var(--font-heading)] text-gray-900 border-b-4 border-black pb-2 inline-block">
            About ImageFix
          </h2>
          <p className="text-lg text-gray-700 font-medium leading-relaxed">
            ImageFix was built by a developer who watched a close friend miss a government exam deadline because his photo was 8KB too large. That moment became a mission: to build the most reliable, private, and precise image formatting tool on the web.
          </p>
          <p className="text-lg text-gray-700 font-medium leading-relaxed">
            Today, ImageFix serves students applying to UPSC, SSC, IBPS, NEET, and JEE; travellers formatting photos for US, UK, Schengen, and Indian passports; and web developers optimizing images for performance. Every tool is pre-configured with official government specifications, updated whenever requirements change.
          </p>
          <div className="flex gap-4 flex-wrap pt-2">
            <Link href="/about">
              <Button variant="outline">Our Full Story →</Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline">Read Our Guides →</Button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
