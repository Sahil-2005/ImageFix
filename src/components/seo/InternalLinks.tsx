import React from 'react';
import Link from 'next/link';
import { ToolDefinition } from '@/lib/registry/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const InternalLinks: React.FC<{ relatedTools: ToolDefinition[] }> = ({ relatedTools }) => {
  if (relatedTools.length === 0) return null;

  return (
    <section>
      <h2 className="text-3xl font-extrabold font-[family-name:var(--font-heading)] mb-6 text-gray-900 border-b-4 border-black pb-2 inline-block">
        Related Tools
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedTools.map((related) => (
          <Link
            key={related.slug}
            href={`/${related.slug}`}
            className="block group outline-none"
          >
            <Card hoverable className="h-full flex flex-col justify-between group-focus-visible:ring-4 group-focus-visible:ring-primary group-focus-visible:ring-offset-2">
              <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                  {related.h1}
                </h3>
                <p className="text-sm font-medium text-gray-600 line-clamp-2 mb-4">
                  {related.heroDescription}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t-2 border-dashed border-gray-200">
                {related.inputFormats.slice(0, 3).map((fmt) => (
                  <Badge key={fmt} variant="neutral" className="text-xs py-0.5 border-gray-300 shadow-none">
                    {fmt}
                  </Badge>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
