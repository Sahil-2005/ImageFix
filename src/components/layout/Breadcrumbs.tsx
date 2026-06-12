'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';

/**
 * Breadcrumbs component for tool pages.
 * Renders: Home > Tool Name
 * Also emits BreadcrumbList JSON-LD for SEO.
 */
export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  // Build breadcrumb items
  const items = [
    { label: 'Home', href: '/' },
    ...segments.map((segment, index) => ({
      label: segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      href: '/' + segments.slice(0, index + 1).join('/'),
    })),
  ];

  // JSON-LD BreadcrumbList structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: index === 0 ? SITE_NAME : item.label,
      item: `https://imagefix.online${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm py-3 px-4">
        <ol className="flex items-center gap-1.5 flex-wrap">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {index > 0 && (
                <span className="text-gray-400 select-none" aria-hidden="true">
                  /
                </span>
              )}
              {index === items.length - 1 ? (
                <span className="font-semibold text-gray-900" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors underline-offset-2 hover:underline"
                >
                  {index === 0 ? SITE_NAME : item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
