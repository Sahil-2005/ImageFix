import type { Metadata } from 'next';
import { BASE_URL, SITE_NAME } from '@/lib/constants';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: `Terms of Service — ${SITE_NAME}`,
  description: `Terms of Service and legal disclaimers for ${SITE_NAME}.`,
  alternates: {
    canonical: `${BASE_URL}/terms`,
  },
};

export default function TermsPage() {
  return (
    <Container className="py-16">
      <div className="max-w-4xl mx-auto bg-white border-4 border-black shadow-brutal p-8 md:p-12 space-y-12">
        
        <section>
          <h1 className="text-4xl md:text-5xl font-extrabold font-[family-name:var(--font-heading)] mb-6 text-gray-900 border-b-4 border-black pb-2 inline-block">
            Terms of Service
          </h1>
          <p className="text-gray-600 font-medium mb-8">Last Updated: June 14, 2026</p>
          
          <div className="prose prose-lg prose-gray max-w-none text-gray-800 font-medium leading-relaxed space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using <strong>{SITE_NAME}</strong>, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div className="bg-yellow-50 border-4 border-black p-6 shadow-brutal-sm">
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-3">2. Government & Agency Disclaimer</h2>
              <p>
                <strong>{SITE_NAME} is not affiliated with, endorsed by, or connected to any government body, embassy, testing agency, or official institution.</strong> 
                While our tools are designed to help you format photos to publicly available specifications (e.g., UPSC, DS-160, Passport Seva), we <strong>do not guarantee</strong> that images processed through our tools will be accepted by any portal or authority. Specifications may change without our knowledge. It is entirely your responsibility to verify the accuracy of your photo against the official guidelines of the respective institution before submission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-3">3. Disclaimer of Warranties</h2>
              <p>
                The service is provided &quot;as is&quot; without warranty of any kind, express or implied. While we strive to ensure the image processing algorithms produce accurate results, we cannot guarantee the output quality, exact byte sizing, or physical dimension accuracy for every possible file type or device combination.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-3">4. User Content & Intellectual Property</h2>
              <p>
                You retain full ownership and intellectual property rights to any images you process. Because processing happens locally on your device via your web browser, we do not store your files. We have no responsibility for the storage, backup, or loss of your files.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-3">5. Acceptable Use</h2>
              <p>
                You agree not to use {SITE_NAME} to process illegal, malicious, or strictly prohibited content under applicable law. You must not attempt to reverse engineer, disrupt, or attack the platform&apos;s infrastructure.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-3">6. Limitations of Liability</h2>
              <p>
                In no event shall {SITE_NAME} be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the service, including but not limited to application rejections, loss of exam fees, or travel delays.
              </p>
            </div>

          </div>
        </section>
      </div>
    </Container>
  );
}
