// src/app/page.tsx
// Homepage — hero section + tool category grid + featured tools

import Link from 'next/link';
import { TOOLS } from '@/lib/registry/toolRegistry';
import { CATEGORIES } from '@/lib/registry/categories';
import { SITE_TAGLINE } from '@/lib/constants';

export default function Home() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="bg-dots py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-[family-name:var(--font-heading)] mb-6">
            <span className="text-orange-500">Fix</span> Your Images.
            <br />
            <span className="text-gray-900">In Your Browser.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Compress, resize, crop, and convert images instantly — 100% free,
            100% private. Your files never leave your device.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/compress-image-to-50kb"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-bold border-3 border-black shadow-brutal hover-brutal transition-brutal"
            >
              Compress Image →
            </Link>
            <Link
              href="/convert-png-to-webp"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-bold border-3 border-black shadow-brutal hover-brutal transition-brutal"
            >
              Convert Format →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Privacy Badge ── */}
      <section className="max-w-4xl mx-auto px-4 -mt-6 mb-12">
        <div className="bg-white border-3 border-black shadow-brutal p-4 flex items-center gap-3 max-w-lg mx-auto">
          <span className="text-2xl">🔒</span>
          <p className="text-sm text-gray-700">
            <strong>100% Client-Side Processing.</strong> Your images are never
            uploaded to any server. Everything runs in your browser using the
            HTML5 Canvas API.
          </p>
        </div>
      </section>

      {/* ── Category Grid ── */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-extrabold font-[family-name:var(--font-heading)] text-center mb-8">
          What do you need to do?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((category) => {
            const categoryTools = TOOLS.filter(
              (t) => t.category === category.id
            );
            return (
              <div
                key={category.id}
                className="bg-white border-3 border-black shadow-brutal p-6 hover-brutal transition-brutal"
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {categoryTools.slice(0, 3).map((tool) => (
                    <li key={tool.slug}>
                      <Link
                        href={`/${tool.slug}`}
                        className="text-sm font-medium text-orange-600 hover:text-orange-800 hover:underline transition-colors"
                      >
                        → {tool.h1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── All Tools List ── */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-extrabold font-[family-name:var(--font-heading)] text-center mb-8">
          All Image Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOOLS.map((tool) => (
            <Link
              key={tool.slug}
              href={`/${tool.slug}`}
              className="block bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-orange-400 hover:shadow-md transition-all group"
            >
              <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-1">
                {tool.h1}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">
                {tool.heroDescription}
              </p>
              <div className="mt-3 flex flex-wrap gap-1">
                {tool.inputFormats.slice(0, 3).map((fmt) => (
                  <span
                    key={fmt}
                    className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-medium"
                  >
                    {fmt.toUpperCase()}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
