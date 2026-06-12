import React from 'react';
import { ToolDefinition } from '@/lib/registry/types';
import { BASE_URL } from '@/lib/constants';

export const StructuredData: React.FC<{ tool: ToolDefinition }> = ({ tool }) => {
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.h1,
    description: tool.metaDescription,
    url: `${BASE_URL}/${tool.slug}`,
    applicationCategory: 'BrowserApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
    },
    browserRequirements: 'Requires a modern browser with HTML5 Canvas support',
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to ${tool.h1}`,
    description: tool.heroDescription,
    step: tool.howToSteps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      text: step,
    })),
  };

  const faqSchema =
    tool.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: tool.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
};
