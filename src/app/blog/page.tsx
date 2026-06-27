import React from 'react';
import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import { BlogCard } from '@/components/blog/BlogCard';
import { SITE_NAME, BASE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Blog — Image Guides, Compression Tips & Tech Deep-Dives | ' + SITE_NAME,
  description: 'In-depth guides for UPSC, NEET, GATE, SSC, IBPS, passport, and visa photo requirements. Plus technical articles on client-side image processing with HTML5 Canvas and Web Workers.',
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  
  const bridgePosts = posts.filter(p => p.track === 'bridge');
  const technicalPosts = posts.filter(p => p.track === 'technical');

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 font-[family-name:var(--font-heading)] uppercase tracking-tight">
          The <span className="text-primary bg-primary/10 px-2 border-3 border-black shadow-[4px_4px_0px_#000]">ImageFix</span> Blog
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl font-medium">
          Insights on building a faster web, client-side image processing, and guides for strict document formatting.
        </p>
      </div>

      <div className="space-y-16">
        {/* Guides Section */}
        {bridgePosts.length > 0 && (
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900 font-[family-name:var(--font-heading)] uppercase tracking-wide">
                Guides & Tutorials
              </h2>
              <div className="h-1 flex-grow bg-black/10"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bridgePosts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Technical Section */}
        {technicalPosts.length > 0 && (
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900 font-[family-name:var(--font-heading)] uppercase tracking-wide">
                Engineering
              </h2>
              <div className="h-1 flex-grow bg-black/10"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalPosts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
