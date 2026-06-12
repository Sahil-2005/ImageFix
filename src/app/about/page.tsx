// src/app/about/page.tsx
import type { Metadata } from 'next';
import { BASE_URL, SITE_NAME } from '@/lib/constants';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: `Privacy Policy & Terms — ${SITE_NAME}`,
  description: `Privacy policy and terms of service for ${SITE_NAME}. We process all images 100% locally in your browser.`,
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <Container className="py-16">
      <div className="max-w-3xl mx-auto bg-white border-4 border-black shadow-brutal p-8 md:p-12 space-y-12">
        
        {/* About Section */}
        <section>
          <h1 className="text-4xl md:text-5xl font-extrabold font-[family-name:var(--font-heading)] mb-6 text-gray-900 border-b-4 border-black pb-2 inline-block">
            About {SITE_NAME}
          </h1>
          <div className="prose prose-lg prose-gray max-w-none text-gray-700 font-medium leading-relaxed">
            <p>
              <strong>{SITE_NAME}</strong> is a high-performance, browser-based image utility suite. Our mission is to provide fast, free, and completely private image manipulation tools.
            </p>
            <p>
              We designed this platform for developers, creators, and everyday users who need to resize, compress, crop, or convert images without the privacy risks or bandwidth costs associated with uploading files to a remote server.
            </p>
          </div>
        </section>

        {/* Privacy Policy */}
        <section>
          <h2 className="text-3xl font-extrabold font-[family-name:var(--font-heading)] mb-6 text-gray-900 border-b-4 border-black pb-2 inline-block">
            Privacy Policy
          </h2>
          <div className="prose prose-lg prose-gray max-w-none text-gray-700 font-medium leading-relaxed space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-2">1. 100% Client-Side Processing</h3>
              <p>
                The core premise of {SITE_NAME} is absolute privacy. <strong>We do not upload, transmit, store, or process your images on any remote server.</strong> All image manipulation (compression, resizing, formatting) occurs strictly on your device within your web browser using HTML5 Canvas and Web Worker technologies. We literally have zero access to your files.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-2">2. Google AdSense & Cookies</h3>
              <p>
                To keep {SITE_NAME} free to use, we display advertisements provided by Google AdSense. Third party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to your website or other websites.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to this site and/or other sites on the Internet.</li>
                <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ads Settings</a>.</li>
                <li>Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-2">3. Google Analytics (GA4)</h3>
              <p>
                We use Google Analytics to monitor general website traffic and usage patterns (e.g., page views, tool popularity). This data is aggregated, anonymized, and does not contain personal identifying information or image content. We use this data solely to improve the user experience and maintain the performance of the platform.
              </p>
            </div>
          </div>
        </section>

        {/* Terms of Service */}
        <section>
          <h2 className="text-3xl font-extrabold font-[family-name:var(--font-heading)] mb-6 text-gray-900 border-b-4 border-black pb-2 inline-block">
            Terms of Service
          </h2>
          <div className="prose prose-lg prose-gray max-w-none text-gray-700 font-medium leading-relaxed space-y-4">
            <p>
              By accessing and using {SITE_NAME}, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            <p>
              <strong>Disclaimer of Warranties:</strong> The service is provided &quot;as is&quot; without warranty of any kind, express or implied. While we strive to ensure the image processing algorithms produce accurate results, we cannot guarantee the output quality or exact sizing for every possible file type or device combination.
            </p>
            <p>
              <strong>User Content:</strong> You retain full ownership and intellectual property rights to any images you process. Because processing happens locally on your device, we have no responsibility for the storage, backup, or loss of your files.
            </p>
            <p>
              <strong>Acceptable Use:</strong> You agree not to use {SITE_NAME} to process illegal, malicious, or strictly prohibited content under applicable law.
            </p>
          </div>
        </section>

      </div>
    </Container>
  );
}
