// src/app/not-found.tsx
// Custom 404 page

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-md">
        <div className="text-8xl font-extrabold font-[family-name:var(--font-heading)] text-orange-500 mb-4">
          404
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Tool Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The image tool you&apos;re looking for doesn&apos;t exist. It may have
          been moved or the URL might be incorrect.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-bold border-3 border-black shadow-brutal hover-brutal transition-brutal"
        >
          ← Back to All Tools
        </Link>
      </div>
    </main>
  );
}
