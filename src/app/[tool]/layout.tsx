// src/app/[tool]/layout.tsx
// Per-tool layout — wraps every tool page with breadcrumbs

import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export default function ToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumbs />
      <main className="flex-1">{children}</main>
    </>
  );
}
