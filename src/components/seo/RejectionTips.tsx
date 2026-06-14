import React from 'react';

interface RejectionTipsProps {
  tips: string[];
}

export function RejectionTips({ tips }: RejectionTipsProps) {
  if (!tips || tips.length === 0) return null;

  return (
    <div className="my-12 bg-red-50 border-4 border-black p-6 shadow-[4px_4px_0px_#000]">
      <h2 className="text-2xl font-extrabold font-[family-name:var(--font-heading)] mb-4 text-red-600 border-b-4 border-red-600 inline-block pb-1">
        Avoid Application Rejection
      </h2>
      <p className="mb-4 text-gray-800 font-medium">
        Common reasons why photos are rejected by the automated validator or during manual scrutiny:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        {tips.map((tip, index) => (
          <li key={index} className="text-gray-800 leading-relaxed font-medium">
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
