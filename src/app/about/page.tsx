import type { Metadata } from 'next';
import { BASE_URL, SITE_NAME } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `About Us — ${SITE_NAME}`,
  description: `Learn about ${SITE_NAME}, the secure, client-side image optimization and document photo compliance platform.`,
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <Container className="py-16">
      <div className="max-w-4xl mx-auto bg-white border-4 border-black shadow-brutal p-8 md:p-12 space-y-12">
        
        <section>
          <h1 className="text-4xl md:text-5xl font-extrabold font-[family-name:var(--font-heading)] mb-6 text-gray-900 border-b-4 border-black pb-2 inline-block">
            About {SITE_NAME}
          </h1>
          <div className="prose prose-lg prose-gray max-w-none text-gray-800 font-medium leading-relaxed space-y-6">
            <p className="text-xl font-bold text-gray-900">
              <strong>{SITE_NAME}</strong> is an advanced, high-performance web utility designed to solve one of the most frustrating digital tasks: formatting images to exact specifications.
            </p>
            <p>
              Originally built as a simple compression utility, we quickly realized that millions of students, travelers, and professionals struggle daily with strict government and institutional portals. When applying for a UPSC exam or a US Visa, an image that is 1KB too large or 10 pixels too wide results in instant rejection.
            </p>
            <p>
              We pivoted {SITE_NAME} into a comprehensive <strong>compliance engine</strong>. We research official government guidelines, encode them into strict mathematical limits, and allow users to format their photos with zero guesswork.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-extrabold font-[family-name:var(--font-heading)] mb-6 text-gray-900 border-b-4 border-black pb-2 inline-block">
            Our Engineering Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="bg-surface-alt border-4 border-black p-6 shadow-[4px_4px_0px_#000]">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-2 text-gray-900">100% Client-Side</h3>
              <p className="text-gray-800 font-medium text-base">
                We believe your private documents should stay private. By utilizing HTML5 Canvas and Web Worker technologies, all image processing happens <strong>locally inside your browser</strong>. We have no servers storing your passport photos.
              </p>
            </div>
            
            <div className="bg-primary/10 border-4 border-black p-6 shadow-[4px_4px_0px_#000]">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-2 text-gray-900">Instant Performance</h3>
              <p className="text-gray-800 font-medium text-base">
                Because there are no server uploads, there are no waiting times. Our dynamic resampling algorithms run directly on your device's CPU, producing optimized files in milliseconds.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-extrabold font-[family-name:var(--font-heading)] mb-6 text-gray-900 border-b-4 border-black pb-2 inline-block">
            Trust & Transparency
          </h2>
          <div className="prose prose-lg prose-gray max-w-none text-gray-800 font-medium leading-relaxed space-y-4">
            <p>
              We are committed to transparency in how we operate. As a free tool, we monetize via Google AdSense. We do not sell user data (because we do not collect any).
            </p>
            <ul className="list-disc pl-6 space-y-2 font-bold text-primary">
              <li><Link href="/privacy-policy" className="hover:underline text-gray-900 hover:text-primary transition-colors">Read our Privacy Policy & Cookie Disclosure</Link></li>
              <li><Link href="/terms" className="hover:underline text-gray-900 hover:text-primary transition-colors">Read our Terms of Service & Disclaimers</Link></li>
              <li><Link href="/contact" className="hover:underline text-gray-900 hover:text-primary transition-colors">Contact our Support Team</Link></li>
            </ul>
          </div>
        </section>

      </div>
    </Container>
  );
}
