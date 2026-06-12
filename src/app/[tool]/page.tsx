// src/app/[tool]/page.tsx
// ★ Dynamic programmatic SEO route — generates one page per tool at build time
// Server Component shell that renders metadata + a placeholder for the future
// client-side ImageProcessor component (Phase 4).

import { TOOLS, getToolBySlug, getRelatedTools } from '@/lib/registry/toolRegistry';
import { BASE_URL, SITE_NAME } from '@/lib/constants';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

// ★ Required for static export — any slug NOT in generateStaticParams returns 404
export const dynamicParams = false;

// ★ Generate all tool pages at build time from the registry
export function generateStaticParams() {
  return TOOLS.map((tool) => ({ tool: tool.slug }));
}

// ★ Dynamic SEO metadata per tool (Next.js 16: params is a Promise)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ tool: string }>;
}): Promise<Metadata> {
  const { tool: slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};

  return {
    title: tool.title,
    description: tool.metaDescription,
    keywords: tool.keywords,
    openGraph: {
      title: tool.title,
      description: tool.metaDescription,
      url: `${BASE_URL}/${tool.slug}`,
      siteName: SITE_NAME,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: tool.title,
      description: tool.metaDescription,
    },
    alternates: {
      canonical: `${BASE_URL}/${tool.slug}`,
    },
  };
}

// ★ Page component (Server Component)
export default async function ToolPage({
  params,
}: {
  params: Promise<{ tool: string }>;
}) {
  const { tool: slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const relatedTools = getRelatedTools(tool);

  // ── JSON-LD Structured Data ──
  // WebApplication schema for free utility rich snippets
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.h1,
    description: tool.metaDescription,
    url: `${BASE_URL}/${tool.slug}`,
    applicationCategory: 'BrowserApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
    },
    browserRequirements: 'Requires a modern browser with HTML5 Canvas support',
  };

  // HowTo schema
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to ${tool.h1}`,
    description: tool.heroDescription,
    step: tool.howToSteps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      text: step,
    })),
  };

  // FAQPage schema
  const faqSchema =
    tool.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: tool.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* ── Hero Section ── */}
      <section className="max-w-4xl mx-auto px-4 pt-8 pb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          {tool.h1}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          {tool.heroDescription}
        </p>
      </section>

      {/* ── Tool Placeholder ── */}
      {/* Phase 4: This will be replaced with <ImageProcessor tool={tool} /> */}
      <section className="max-w-4xl mx-auto px-4 pb-8" id="tool-dropzone">
        <div className="border-3 border-dashed border-gray-300 rounded-lg p-12 text-center bg-gray-50">
          <div className="text-5xl mb-4">🖼️</div>
          <p className="text-xl font-semibold text-gray-700 mb-2">
            Drop your image here or click to upload
          </p>
          <p className="text-sm text-gray-500">
            Supports {tool.inputFormats.map((f) => f.toUpperCase()).join(', ')}
          </p>
          <p className="text-xs text-gray-400 mt-4">
            ⚡ Tool engine will be wired in Phase 4
          </p>
        </div>
      </section>

      {/* ── How-To Section ── */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How to {tool.h1}
        </h2>
        <ol className="space-y-3">
          {tool.howToSteps.map((step, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white font-bold rounded-full flex items-center justify-center text-sm">
                {i + 1}
              </span>
              <span className="text-gray-700 pt-1">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* ── FAQ Section ── */}
      {tool.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 pb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {tool.faqs.map((faq, i) => (
              <details
                key={i}
                className="border-2 border-gray-200 rounded-lg overflow-hidden group"
              >
                <summary className="cursor-pointer px-5 py-4 font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100 transition-colors select-none">
                  {faq.question}
                </summary>
                <div className="px-5 py-4 text-gray-600 border-t border-gray-200">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* ── Related Tools ── */}
      {relatedTools.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Related Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedTools.map((related) => (
              <Link
                key={related.slug}
                href={`/${related.slug}`}
                className="block border-2 border-gray-200 rounded-lg p-4 hover:border-orange-400 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-1">
                  {related.h1}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {related.heroDescription}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
