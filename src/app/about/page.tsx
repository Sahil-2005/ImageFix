// src/app/about/page.tsx
// About page — required for AdSense approval (privacy policy, terms)

import type { Metadata } from 'next';
import { BASE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `About — ${SITE_NAME}`,
  description: `Learn about ${SITE_NAME}, a free browser-based image utility suite. Privacy policy and terms of service.`,
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* About Section */}
      <h1 className="text-4xl font-extrabold font-[family-name:var(--font-heading)] mb-6">
        About {SITE_NAME}
      </h1>
      <div className="prose prose-gray max-w-none space-y-4 mb-12">
        <p>
          <strong>{SITE_NAME}</strong> is a free, browser-based image utility
          suite that lets you compress, resize, crop, and convert images without
          uploading them to any server.
        </p>
        <p>
          All processing happens directly in your browser using the HTML5 Canvas
          API. Your images never leave your device — guaranteeing complete
          privacy and instant results.
        </p>
        <p>
          Our tools are designed for anyone who needs quick image manipulation:
          developers optimizing assets, job seekers compressing photos for
          applications, students preparing documents, and everyday users who want
          fast, free image tools.
        </p>
      </div>

      {/* Privacy Policy */}
      <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-4">
        Privacy Policy
      </h2>
      <div className="prose prose-gray max-w-none space-y-4 mb-12">
        <p>
          <strong>Your images are never uploaded.</strong> {SITE_NAME} processes
          all images entirely within your browser. We do not have access to your
          files at any point.
        </p>
        <p>
          <strong>Analytics:</strong> We use Google Analytics to understand how
          visitors use the site (page views, tool usage patterns). This data is
          anonymized and does not include any personal information or image
          content.
        </p>
        <p>
          <strong>Advertising:</strong> We display ads via Google AdSense to keep
          the service free. Google may use cookies to serve relevant ads. You can
          learn more about Google&apos;s ad practices at{' '}
          <a
            href="https://policies.google.com/technologies/ads"
            className="text-orange-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ad Policies
          </a>
          .
        </p>
        <p>
          <strong>Cookies:</strong> We use essential cookies for site
          functionality and third-party cookies from analytics and advertising
          partners. You can control cookie preferences in your browser settings.
        </p>
      </div>

      {/* Terms of Service */}
      <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-4">
        Terms of Service
      </h2>
      <div className="prose prose-gray max-w-none space-y-4">
        <p>
          {SITE_NAME} is provided &quot;as is&quot; without warranties of any
          kind. We make best efforts to ensure accuracy of image processing, but
          cannot guarantee results for all image types and sizes.
        </p>
        <p>
          You retain full ownership of all images you process through{' '}
          {SITE_NAME}. We do not claim any rights to your content.
        </p>
        <p>
          Use of this service is subject to applicable laws. Do not use{' '}
          {SITE_NAME} for illegal purposes or to process content that violates
          any laws or regulations.
        </p>
      </div>
    </main>
  );
}
