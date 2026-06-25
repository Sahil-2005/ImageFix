import React from 'react';
import Link from 'next/link';
import { ToolCTA } from './ToolCTA';

export const MDXComponents = {
  ToolCTA,
  h2: (props: any) => <h2 className="text-3xl font-extrabold text-gray-900 mt-12 mb-6 font-[family-name:var(--font-heading)]" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-[family-name:var(--font-heading)]" {...props} />,
  p: (props: any) => <p className="text-lg text-gray-700 leading-relaxed mb-6" {...props} />,
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
  ul: (props: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg text-gray-700" {...props} />,
  li: (props: any) => <li className="" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-black bg-gray-50 p-6 my-8 text-xl italic font-medium text-gray-800" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-900 text-gray-100 p-6 rounded-none border-3 border-black shadow-brutal overflow-x-auto my-8 text-sm" {...props} />
  ),
  code: (props: any) => {
    if (props.className) {
        return <code {...props} />;
    }
    return <code className="bg-gray-100 px-1.5 py-0.5 border border-black font-mono text-sm font-bold" {...props} />;
  },
  strong: (props: any) => <strong className="font-extrabold text-gray-900" {...props} />,
};
