import React from 'react';
import Link from 'next/link';
import { ToolCTA } from './ToolCTA';

export const MDXComponents = {
  ToolCTA,

  // ── Headings ──
  h2: (props: any) => <h2 className="text-3xl font-extrabold text-gray-900 mt-12 mb-6 font-[family-name:var(--font-heading)]" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-[family-name:var(--font-heading)]" {...props} />,
  h4: (props: any) => <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3" {...props} />,

  // ── Body text ──
  p: (props: any) => <p className="text-lg text-gray-700 leading-relaxed mb-6" {...props} />,
  strong: (props: any) => <strong className="font-extrabold text-gray-900" {...props} />,
  em: (props: any) => <em className="italic text-gray-700" {...props} />,

  // ── Links ──
  a: (props: any) => {
    const href = props.href;
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className="text-primary font-bold hover:underline underline-offset-4 decoration-2" {...props} />
      );
    }
    return (
      <a target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline underline-offset-4 decoration-2" {...props} />
    );
  },

  // ── Lists ──
  ul: (props: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg text-gray-700" {...props} />,
  li: (props: any) => <li className="leading-relaxed" {...props} />,

  // ── Blockquote ──
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-black bg-gray-50 p-6 my-8 text-xl italic font-medium text-gray-800" {...props} />
  ),

  // ── Code blocks ──
  pre: (props: any) => (
    <pre className="bg-gray-900 text-gray-100 p-6 rounded-none border-4 border-black shadow-brutal overflow-x-auto my-8 text-sm leading-relaxed" {...props} />
  ),
  code: (props: any) => {
    if (props.className) {
      return <code {...props} />;
    }
    return <code className="bg-gray-100 px-1.5 py-0.5 border border-black font-mono text-sm font-bold text-gray-900" {...props} />;
  },

  // ── Horizontal rule ──
  hr: () => <hr className="border-t-4 border-black my-10" />,

  // ── Tables (GFM) ──
  table: (props: any) => (
    <div className="overflow-x-auto my-8 border-4 border-black shadow-brutal">
      <table className="w-full border-collapse text-base" {...props} />
    </div>
  ),
  thead: (props: any) => (
    <thead style={{ backgroundColor: '#111827' }} {...props} />
  ),
  tbody: (props: any) => (
    <tbody className="divide-y-2 divide-black" {...props} />
  ),
  tr: (props: any) => (
    <tr className="even:bg-[#f3f0ff] odd:bg-white hover:bg-[#ede9fe] transition-colors" {...props} />
  ),
  th: (props: any) => (
    <th
      style={{ backgroundColor: '#111827', color: '#ffffff' }}
      className="px-5 py-3 text-left font-extrabold uppercase tracking-wide text-sm border-r-2 border-gray-700 last:border-r-0"
      {...props}
    />
  ),
  td: (props: any) => (
    <td className="px-5 py-3 text-gray-800 font-medium border-r-2 border-black/10 last:border-r-0 leading-snug" {...props} />
  ),
};
