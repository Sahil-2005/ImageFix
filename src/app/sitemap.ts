// src/app/sitemap.ts
// Programmatic sitemap generated from the tool registry

import type { MetadataRoute } from 'next';
import { TOOLS } from '@/lib/registry/toolRegistry';
import { CATEGORIES } from '@/lib/registry/categories';
import { BASE_URL } from '@/lib/constants';
import { getAllPosts } from '@/lib/blog';

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
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  // Dynamic tool pages from registry
  const toolPages: MetadataRoute.Sitemap = TOOLS.map((tool) => ({
    url: `${BASE_URL}/${tool.category}/${tool.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic category pages
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${BASE_URL}/${cat.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Blog pages
  const blogPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const blogIndex: MetadataRoute.Sitemap = [{
    url: `${BASE_URL}/blog`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }];

  return [...staticPages, ...toolPages, ...categoryPages, ...blogIndex, ...blogPages];
}
