import type { Metadata } from 'next';
import { BASE_URL, SITE_NAME } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Privacy Policy — ${SITE_NAME}`,
  description: `Privacy policy and cookie disclosures for ${SITE_NAME}. Learn how we protect your data.`,
  alternates: {
    canonical: `${BASE_URL}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-16">
      <div className="max-w-4xl mx-auto bg-white border-4 border-black shadow-brutal p-8 md:p-12 space-y-12">
        
        <section>
          <h1 className="text-4xl md:text-5xl font-extrabold font-[family-name:var(--font-heading)] mb-6 text-gray-900 border-b-4 border-black pb-2 inline-block">
            Privacy Policy
          </h1>
          <p className="text-gray-600 font-medium mb-8">Last Updated: June 14, 2026</p>
          
          <div className="prose prose-lg prose-gray max-w-none text-gray-800 font-medium leading-relaxed space-y-8">
            
            <div className="bg-yellow-50 border-4 border-black p-6 shadow-brutal-sm">
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-3">1. 100% Client-Side Processing</h2>
              <p>
                The core premise of <strong>{SITE_NAME}</strong> is absolute privacy. We do not upload, transmit, store, or process your images on any remote server. All image manipulation (compression, resizing, formatting) occurs strictly on your device within your web browser using HTML5 Canvas and Web Worker technologies. We literally have zero access to your image files.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-3">2. Google AdSense & Cookies</h2>
              <p>
                To keep {SITE_NAME} free to use, we display advertisements provided by Google AdSense. Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to your website or other websites.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to this site and/or other sites on the Internet.</li>
                <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary font-bold hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</li>
                <li>Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" className="text-primary font-bold hover:underline" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-3">3. Google Analytics (GA4)</h2>
              <p>
                We use Google Analytics to monitor general website traffic and usage patterns (e.g., page views, tool popularity). This data is aggregated, anonymized, and does not contain personal identifying information or image content. We use this data solely to improve the user experience and maintain the performance of the platform. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary font-bold hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-3">4. GDPR and CCPA/CPRA Rights</h2>
              <p>
                If you are a resident of the European Economic Area (EEA) or California, you have certain data protection rights. While we do not collect personal data directly (since image processing is client-side), our advertising partners (Google) may collect tracking data. You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Request access to the data they have collected.</li>
                <li>Request rectification or erasure of your personal data.</li>
                <li>Opt-out of the &quot;sale&quot; or &quot;sharing&quot; of your personal information (via the Ad Settings links provided above).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-3">5. Contact Information</h2>
              <p>
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at our <Link href="/contact" className="text-primary font-bold hover:underline">Contact Page</Link>.
              </p>
            </div>

          </div>
        </section>
      </div>
    </Container>
  );
}
