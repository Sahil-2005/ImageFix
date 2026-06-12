// src/app/sitemap.ts
// Programmatic sitemap generated from the tool registry

import type { MetadataRoute } from 'next';
import { TOOLS } from '@/lib/registry/toolRegistry';
import { BASE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  // Dynamic tool pages from registry
  const toolPages: MetadataRoute.Sitemap = TOOLS.map((tool) => ({
    url: `${BASE_URL}/${tool.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...toolPages];
}
