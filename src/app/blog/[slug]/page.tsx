import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { MDXComponents } from '@/components/blog/MDXComponents';
import { BASE_URL, SITE_NAME } from '@/lib/constants';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} — ${SITE_NAME} Blog`,
    description: post.description,
    alternates: {
      canonical: `${BASE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <div className="mb-12 border-b-4 border-black pb-12">
        <Link href="/blog" className="inline-flex items-center gap-2 font-bold text-gray-600 hover:text-primary transition-colors mb-8">
          <span className="text-xl leading-none rotate-180">➔</span> Back to Blog
        </Link>
        <div className="flex items-center gap-4 mb-6">
          <span className={`text-sm font-extrabold uppercase tracking-widest px-3 py-1 border-2 border-black ${
            post.track === 'bridge' ? 'bg-accent/20 text-green-800' : 'bg-primary/20 text-primary'
          }`}>
            {post.track === 'bridge' ? 'Guide' : 'Technical'}
          </span>
          <time className="text-gray-500 font-bold" suppressHydrationWarning>
            {new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </time>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-[family-name:var(--font-heading)] leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 border-2 border-black rounded-full flex items-center justify-center font-bold text-gray-500">
            {post.author.charAt(0)}
          </div>
          <span className="font-bold text-gray-900">By {post.author}</span>
        </div>
      </div>

      <article className="prose prose-lg max-w-none prose-headings:font-[family-name:var(--font-heading)] prose-a:text-primary hover:prose-a:text-primary/80 prose-img:border-4 prose-img:border-black prose-img:shadow-brutal-sm prose-table:border-0 prose-th:text-white prose-th:bg-transparent prose-thead:bg-gray-900">
        <MDXRemote
          source={post.content}
          components={MDXComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </article>
      
      <div className="mt-16 pt-8 border-t-4 border-black flex justify-between items-center">
        <Link href="/blog" className="inline-flex items-center gap-2 bg-white text-black font-extrabold px-6 py-3 border-3 border-black shadow-brutal-sm hover-brutal transition-brutal">
          <span className="text-xl leading-none rotate-180">➔</span> All Articles
        </Link>
      </div>
    </div>
  );
}
