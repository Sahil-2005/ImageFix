import { CATEGORIES, getCategoryById } from '@/lib/registry/categories';
import { getToolsByCategory } from '@/lib/registry/toolRegistry';
import { BASE_URL, SITE_NAME } from '@/lib/constants';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

// UI Components
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ category: cat.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: id } = await params;
  const category = getCategoryById(id);
  if (!category) return {};

  return {
    title: `${category.name} Tools & Formatting — ${SITE_NAME}`,
    description: `Free online tools for ${category.name.toLowerCase()}. ${category.description}`,
    alternates: {
      canonical: `${BASE_URL}/${category.id}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: id } = await params;
  const category = getCategoryById(id);
  if (!category) notFound();

  const tools = getToolsByCategory(id);

  return (
    <>
      <div className="bg-dots w-full border-b-4 border-black">
        <Container className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="text-6xl mb-6 bg-white p-4 border-4 border-black shadow-brutal-sm inline-block">
              {category.icon}
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight font-[family-name:var(--font-heading)] mb-6 text-gray-900">
              {category.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium leading-snug">
              {category.description}
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-20 min-h-[50vh]">
        {tools.length === 0 ? (
          <div className="text-center py-20 border-4 border-black border-dashed">
            <h2 className="text-2xl font-bold text-gray-500">More tools coming soon!</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.category}/${tool.slug}`}
                className="block group outline-none"
              >
                <Card hoverable className="h-full flex flex-col group-focus-visible:ring-4 group-focus-visible:ring-primary border-4 border-black shadow-[4px_4px_0px_#000]">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2 leading-tight">
                    {tool.h1}
                  </h3>
                  <p className="text-sm font-medium text-gray-600 line-clamp-3 mb-4 flex-grow">
                    {tool.heroDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-3 border-t-2 border-black/10">
                    <span className="text-primary font-bold text-sm uppercase tracking-wide group-hover:translate-x-1 transition-transform">
                      Open Tool →
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </Container>

      {/* ── Category SEO Content ── */}
      {category.seoContent && (
        <div className="bg-surface-alt border-t-4 border-black w-full">
          <Container className="py-20 max-w-4xl">
            <h2 className="text-3xl font-extrabold font-[family-name:var(--font-heading)] mb-6 text-gray-900 border-b-4 border-black pb-2 inline-block">
              {category.seoContent.h2}
            </h2>
            <div className="prose prose-lg text-gray-700 font-medium leading-relaxed">
              <p>{category.seoContent.content}</p>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
