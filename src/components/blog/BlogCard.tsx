import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { BlogPost } from '@/lib/blog';

interface BlogCardProps {
  post: Omit<BlogPost, 'content'>;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full group">
      <Card hoverable className="h-full flex flex-col p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className={`text-xs font-extrabold uppercase tracking-widest px-3 py-1 border-2 border-black ${
            post.track === 'bridge' ? 'bg-accent/20 text-green-800' : 'bg-primary/20 text-primary'
          }`}>
            {post.track === 'bridge' ? 'Guide' : 'Technical'}
          </span>
          <time className="text-sm font-bold text-gray-500">
            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </time>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-primary transition-colors font-[family-name:var(--font-heading)] line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-6 font-medium line-clamp-3 flex-grow">
          {post.description}
        </p>
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-sm font-bold text-gray-900 border-b-2 border-primary pb-0.5">Read Article</span>
          <span className="text-primary group-hover:translate-x-1 transition-transform">➔</span>
        </div>
      </Card>
    </Link>
  );
};
