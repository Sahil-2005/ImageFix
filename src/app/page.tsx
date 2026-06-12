// src/app/page.tsx
// Homepage — hero section + tool category grid + featured tools

import Link from 'next/link';
import { TOOLS } from '@/lib/registry/toolRegistry';
import { CATEGORIES } from '@/lib/registry/categories';
import { SITE_TAGLINE } from '@/lib/constants';

// UI Components
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';

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
              <Link href="/compress-image-to-50kb">
                <Button variant="primary" className="text-xl py-4 px-8">
                  Compress an Image
                </Button>
              </Link>
              <Link href="/convert-png-to-webp">
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
            return (
              <Card key={category.id} hoverable className="flex flex-col h-full border-4">
                <div className="text-5xl mb-4 bg-surface-alt w-16 h-16 flex items-center justify-center border-2 border-black shadow-brutal-sm">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 font-medium mb-6 flex-grow">
                  {category.description}
                </p>
                <div className="flex flex-col gap-3">
                  {categoryTools.slice(0, 3).map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/${tool.slug}`}
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
                href={`/${tool.slug}`}
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
    </>
  );
}
