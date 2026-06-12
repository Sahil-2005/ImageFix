import React from 'react';
import { ToolDefinition } from '@/lib/registry/types';
import { Card } from '@/components/ui/Card';

export const ToolPageContent: React.FC<{ tool: ToolDefinition }> = ({ tool }) => {
  return (
    <div className="space-y-12">
      {/* How-To Section */}
      <section>
        <h2 className="text-3xl font-extrabold font-[family-name:var(--font-heading)] mb-6 text-gray-900">
          How to {tool.h1}
        </h2>
        <Card>
          <ol className="space-y-5">
            {tool.howToSteps.map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white font-extrabold flex items-center justify-center border-2 border-black shadow-brutal-sm text-sm translate-y-0.5">
                  {i + 1}
                </span>
                <span className="text-gray-800 font-medium text-lg pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </Card>
      </section>

      {/* FAQ Section */}
      {tool.faqs.length > 0 && (
        <section>
          <h2 className="text-3xl font-extrabold font-[family-name:var(--font-heading)] mb-6 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {tool.faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white border-3 border-black shadow-brutal-sm open:shadow-brutal transition-brutal"
              >
                <summary className="cursor-pointer px-6 py-4 font-bold text-lg text-gray-900 hover:bg-accent/10 select-none list-none flex justify-between items-center">
                  <span>{faq.question}</span>
                  <span className="text-primary text-xl font-bold group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 py-5 text-gray-700 font-medium border-t-3 border-black bg-surface-alt/30 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
