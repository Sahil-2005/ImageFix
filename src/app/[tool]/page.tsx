// src/app/[tool]/page.tsx
// ★ Dynamic programmatic SEO route — generates one page per tool at build time

import { TOOLS, getToolBySlug, getRelatedTools } from '@/lib/registry/toolRegistry';
import { BASE_URL, SITE_NAME } from '@/lib/constants';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Components
import { StructuredData } from '@/components/seo/StructuredData';
import { ToolPageContent } from '@/components/seo/ToolPageContent';
import { InternalLinks } from '@/components/seo/InternalLinks';
import { ImageProcessor } from '@/components/tools/ImageProcessor';
import { Container } from '@/components/ui/Container';
import { AdSlot } from '@/components/ads/AdSlot';

// ★ Required for static export — any slug NOT in generateStaticParams returns 404
export const dynamicParams = false;

// ★ Generate all tool pages at build time from the registry
export function generateStaticParams() {
  return TOOLS.map((tool) => ({ tool: tool.slug }));
}

// ★ Dynamic SEO metadata per tool
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

  // Mid slot logic
  const showMidSlot = tool.adDensity === 'medium' || tool.adDensity === 'high';

  return (
    <>
      <StructuredData tool={tool} />

      <Container className="pt-8 pb-16 space-y-12">

        {/* ── Top Ad Slot (Leaderboard) ── */}
        <div className="w-full max-w-4xl mx-auto flex justify-center">
          <AdSlot slotId="5119066512" format="horizontal" className="max-w-[728px] h-[90px]" />
        </div>

        {/* ── Hero & Processor Section ── */}
        <section className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Title & Description */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 font-[family-name:var(--font-heading)] leading-tight">
              {tool.h1}
            </h1>
            <p className="text-lg text-gray-600 font-medium">
              {tool.heroDescription}
            </p>
          </div>

          {/* Engine / Processor UI */}
          <div className="w-full lg:w-2/3">
            <ImageProcessor tool={tool} />
          </div>
        </section>

        {/* ── Mid Ad Slot (Rectangle) ── */}
        {showMidSlot && (
          <div className="w-full flex justify-center pt-8">
            <AdSlot slotId="3061050241" format="rectangle" className="max-w-[336px] h-[280px]" />
          </div>
        )}

        {/* ── SEO Content (How-To & FAQs) ── */}
        <ToolPageContent tool={tool} />

        {/* ── Internal Links for SEO Juice ── */}
        <InternalLinks relatedTools={relatedTools} />

        {/* ── Bottom Ad Slot (Leaderboard) ── */}
        <div className="w-full max-w-4xl mx-auto flex justify-center pt-8">
          <AdSlot slotId="9254881942" format="horizontal" className="max-w-[728px] h-[90px]" />
        </div>

      </Container>
    </>
  );
}
