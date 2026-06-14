import type { Metadata } from 'next';
import { BASE_URL, SITE_NAME } from '@/lib/constants';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: `Contact Us — ${SITE_NAME}`,
  description: `Contact support for ${SITE_NAME}. Reach out for feature requests, bug reports, or business inquiries.`,
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <Container className="py-16">
      <div className="max-w-3xl mx-auto bg-white border-4 border-black shadow-brutal p-8 md:p-12">
        
        <section>
          <h1 className="text-4xl md:text-5xl font-extrabold font-[family-name:var(--font-heading)] mb-6 text-gray-900 border-b-4 border-black pb-2 inline-block">
            Contact Us
          </h1>
          
          <div className="prose prose-lg prose-gray max-w-none text-gray-800 font-medium leading-relaxed space-y-8">
            <p>
              Have a question about one of our photo compliance tools? Need to request a new country's visa specification or report a bug? We are here to help.
            </p>
            
            <div className="bg-surface-alt border-4 border-black p-5 md:p-8 shadow-[4px_4px_0px_#000]">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-widest mb-4">Direct Email Support</h2>
              <p className="mb-6 text-base md:text-lg">
                You can reach our support team directly via email. We aim to respond to all inquiries within <strong>24-48 hours</strong> during regular business days.
              </p>
              <a 
                href="mailto:support@imagefix.online" 
                className="block sm:inline-block text-center bg-primary text-white font-extrabold text-base sm:text-xl md:text-2xl px-4 py-3 md:px-6 md:py-4 border-4 border-black shadow-[4px_4px_0px_#000] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#000] transition-all break-all"
              >
                support@imagefix.online
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-3 border-b-4 border-black inline-block pb-1">What to include in your email:</h2>
              <ul className="list-disc pl-6 space-y-3 mt-4">
                <li><strong>For Bug Reports:</strong> Please include your browser (e.g., Chrome, Safari) and device type (e.g., iPhone 15, Windows PC), along with the specific tool URL you were using.</li>
                <li><strong>For New Tool Requests:</strong> If you need a photo formatted for a specific exam or visa that we don't currently have, please link us to the official government specification page.</li>
                <li><strong>For Business & AdSense Inquiries:</strong> Use the subject line "Business Inquiry" to ensure it reaches the right department.</li>
              </ul>
            </div>
            
          </div>
        </section>

      </div>
    </Container>
  );
}
