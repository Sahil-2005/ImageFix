import React from 'react';
import Link from 'next/link';

interface ToolCTAProps {
  toolUrl: string;
  toolName: string;
  description: string;
}

export const ToolCTA: React.FC<ToolCTAProps> = ({ toolUrl, toolName, description }) => {
  return (
    <div className="not-prose my-8 p-6 bg-surface-alt border-3 border-black shadow-brutal flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h4 className="text-xl font-bold text-gray-900 mb-2 font-[family-name:var(--font-heading)]">{toolName}</h4>
        <p className="text-gray-700 m-0">{description}</p>
      </div>
      <Link
        href={toolUrl}
        className="shrink-0 bg-primary text-white font-extrabold px-6 py-3 border-3 border-black shadow-brutal-sm hover-brutal transition-brutal whitespace-nowrap inline-block text-center"
      >
        Use Tool Free ➔
      </Link>
    </div>
  );
};
