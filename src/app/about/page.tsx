import type { Metadata } from 'next';
import { BASE_URL, SITE_NAME } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `About Us — ${SITE_NAME}`,
  description: `Learn about ${SITE_NAME}, the secure, client-side image optimization and document photo compliance platform built by developers who experienced government portal rejections firsthand.`,
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <Container className="py-16">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* ── Main Header Card ── */}
        <div className="bg-white border-4 border-black shadow-brutal p-8 md:p-12 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold font-[family-name:var(--font-heading)] text-gray-900 border-b-4 border-black pb-2 inline-block">
            About {SITE_NAME}
          </h1>
          <p className="text-xl font-bold text-gray-900">
            <strong>{SITE_NAME}</strong> is a free, privacy-first image optimization platform that was born out of a genuinely frustrating real-world experience.
          </p>
          <p className="text-lg text-gray-700 font-medium leading-relaxed">
            My close friend Aryan had spent months preparing for a government exam. On the night before the application deadline, he sat at his computer, photograph in hand, and uploaded it to the official portal. Three times. Every single time, the portal rejected it with a vague error: &quot;Image does not meet specifications.&quot; He didn&apos;t know what was wrong. The photo looked fine. It was the right format. But the file was 58KB — 8KB over the portal&apos;s strict 50KB limit. He had no tools that could hit that precise target without installing desktop software he had never used.
          </p>
          <p className="text-lg text-gray-700 font-medium leading-relaxed">
            He missed the deadline. He had to wait an entire year to apply again.
          </p>
          <p className="text-lg text-gray-700 font-medium leading-relaxed">
            That is the moment I decided to build {SITE_NAME}. I am <strong>Sahil Gawade</strong>, a full-stack developer from India. I built this platform because I believe no one should lose a life opportunity over a kilobyte. Every tool on this site exists to solve a specific, real problem that millions of students, applicants, and professionals face every year.
          </p>
        </div>

        {/* ── The Origin Story ── */}
        <div className="bg-white border-4 border-black shadow-brutal p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-extrabold font-[family-name:var(--font-heading)] text-gray-900 border-b-4 border-black pb-2 inline-block">
            From a Simple Compressor to a Compliance Engine
          </h2>
          <p className="text-lg text-gray-700 font-medium leading-relaxed">
            The original version of {SITE_NAME} was just a basic image compressor. You uploaded a photo, set a size target, and downloaded the result. Simple, effective, and fast. But as I showed it to friends and classmates who were applying for UPSC, SSC, NEET, and passport renewals, a pattern emerged: they didn&apos;t just need to compress an image. They needed to hit a very specific set of constraints — simultaneously.
          </p>
          <p className="text-lg text-gray-700 font-medium leading-relaxed">
            A UPSC photo, for example, must be in JPEG format, between 20KB and 300KB, at least 350×350 pixels but no more than 1000×1000, with a plain white background, the candidate&apos;s name and date at the bottom, and the face covering 75% of the frame. Getting all of these requirements right simultaneously is genuinely difficult without the right tools. Most people end up with photos that satisfy two or three conditions but fail on the others.
          </p>
          <p className="text-lg text-gray-700 font-medium leading-relaxed">
            So I pivoted {SITE_NAME} into a <strong>compliance engine</strong>. I researched the official government notifications and guidelines for dozens of exams, passport offices, and visa authorities. I encoded those exact requirements into the tool settings. I built a binary-search compression algorithm that reliably hits precise file size targets. The result is a platform where you select your document type, upload your photo, and the tool automatically configures itself to the exact specifications required.
          </p>
        </div>

        {/* ── Engineering Philosophy Grid ── */}
        <div className="bg-white border-4 border-black shadow-brutal p-8 md:p-12 space-y-8">
          <h2 className="text-3xl font-extrabold font-[family-name:var(--font-heading)] text-gray-900 border-b-4 border-black pb-2 inline-block">
            Our Engineering Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-alt border-4 border-black p-6 shadow-[4px_4px_0px_#000]">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-2 text-gray-900">100% Client-Side Processing</h3>
              <p className="text-gray-700 font-medium text-base leading-relaxed">
                Every single image operation on {SITE_NAME} — compression, resizing, cropping, format conversion, EXIF stripping — happens entirely inside your browser. We use the HTML5 Canvas API and Web Workers to perform these operations on your device&apos;s own CPU. Your photos are never transmitted to our servers (we don&apos;t have any). This is not a marketing claim; it is an architectural fact.
              </p>
            </div>

            <div className="bg-primary/10 border-4 border-black p-6 shadow-[4px_4px_0px_#000]">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-2 text-gray-900">Precision Over Simplicity</h3>
              <p className="text-gray-700 font-medium text-base leading-relaxed">
                Generic tools apply a fixed quality reduction and call it &quot;compressed.&quot; Our binary-search algorithm takes a different approach: it finds the highest possible quality that fits within your exact target. Seven iterations of encode-check-adjust, running in under two seconds, produce results that are guaranteed to meet the spec without sacrificing more quality than necessary.
              </p>
            </div>

            <div className="bg-accent/20 border-4 border-black p-6 shadow-[4px_4px_0px_#000]">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-2 text-gray-900">Research-Backed Specifications</h3>
              <p className="text-gray-700 font-medium text-base leading-relaxed">
                Every compliance tool on this site is built from official government notifications, not from guesswork. When UPSC updates their photo requirements, we update our tool. When the US Department of State changes visa photo dimensions, our specifications change. We link to official sources so you can verify the requirements yourself.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_#000]">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-2 text-gray-900">Zero Install, Always Accessible</h3>
              <p className="text-gray-700 font-medium text-base leading-relaxed">
                No app downloads. No account creation. No subscriptions. The tools work on any modern browser — desktop, tablet, or phone. A student in a small town with a basic Android phone and a Chrome browser can use the exact same tool as someone with a high-end PC. Equal access to these utilities matters.
              </p>
            </div>
          </div>
        </div>

        {/* ── Who Uses ImageFix ── */}
        <div className="bg-white border-4 border-black shadow-brutal p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-extrabold font-[family-name:var(--font-heading)] text-gray-900 border-b-4 border-black pb-2 inline-block">
            Who Uses ImageFix?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🎓', title: 'Exam Aspirants', desc: 'Students applying for UPSC, SSC, IBPS, NEET, JEE, GATE, and other competitive exams who need photos and signatures in exact government-mandated formats.' },
              { icon: '✈️', title: 'Travellers', desc: 'Individuals applying for passports and visas — US B1/B2, UK Standard Visitor, Schengen, Canada — where photo requirements are strictly enforced by consulates.' },
              { icon: '💻', title: 'Web Developers', desc: 'Developers optimizing website assets who need to convert images to WebP, compress photos for email, or resize graphics for responsive layouts without installing Photoshop.' },
              { icon: '🏢', title: 'HR Professionals', desc: 'HR managers processing employee ID photos, PAN card submissions, and Aadhaar updates who receive photos in incorrect formats or file sizes.' },
              { icon: '📸', title: 'Content Creators', desc: 'YouTubers, bloggers, and social media creators who need to resize and compress images for thumbnails, blog posts, and web uploads.' },
              { icon: '🪪', title: 'ID Document Applicants', desc: 'Anyone applying for PAN cards, Aadhaar updates, or OCI cards who needs their photo formatted to NSDL, UTI, or UIDAI specifications.' },
            ].map((item) => (
              <div key={item.title} className="bg-surface-alt border-2 border-black p-4">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-700 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Meet the Developer ── */}
        <div className="bg-white border-4 border-black shadow-brutal p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-extrabold font-[family-name:var(--font-heading)] text-gray-900 border-b-4 border-black pb-2 inline-block">
            Meet the Developer
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-4">
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                I&apos;m <strong>Sahil Gawade</strong>, a full-stack developer passionate about building tools that solve real-world problems. {SITE_NAME} is a side project I built because I was tired of seeing people — friends, family, classmates — struggle with a problem that is entirely solvable with the right software.
              </p>
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                I work primarily with TypeScript, Next.js, and the HTML5 Canvas API. The technical architecture of ImageFix — with its client-side processing, Web Worker engine, and static export for zero-cost hosting — is something I am proud of and have written about in our <Link href="/blog/canvas-image-compression-web-workers" className="text-primary font-bold hover:underline">technical blog</Link>.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href="https://github.com/Sahil-2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold px-4 py-2 border-2 border-black shadow-brutal-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <span>⚡</span> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/sahil-gawade-920a0a242/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-700 text-white font-bold px-4 py-2 border-2 border-black shadow-brutal-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <span>💼</span> LinkedIn
                </a>
                <a
                  href="https://sahil-gawade.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-4 py-2 border-2 border-black shadow-brutal-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <span>🌐</span> Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Trust & Transparency ── */}
        <div className="bg-white border-4 border-black shadow-brutal p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-extrabold font-[family-name:var(--font-heading)] text-gray-900 border-b-4 border-black pb-2 inline-block">
            Trust &amp; Transparency
          </h2>
          <div className="prose prose-lg prose-gray max-w-none text-gray-700 font-medium leading-relaxed space-y-4">
            <p>
              {SITE_NAME} is a free tool monetized through Google AdSense. We do not sell user data — because we do not collect any. We cannot access your images even if we wanted to; they never leave your browser.
            </p>
            <p>
              We believe in radical transparency about how we operate and how we make money. The tools are free because ads are shown alongside the content and guides on this site. That is the entire business model. No hidden subscriptions, no freemium tiers, no watermarks.
            </p>
            <ul className="list-disc pl-6 space-y-2 font-bold text-primary">
              <li><Link href="/privacy-policy" className="hover:underline text-gray-900 hover:text-primary transition-colors">Read our Privacy Policy &amp; Cookie Disclosure</Link></li>
              <li><Link href="/terms" className="hover:underline text-gray-900 hover:text-primary transition-colors">Read our Terms of Service &amp; Disclaimers</Link></li>
              <li><Link href="/contact" className="hover:underline text-gray-900 hover:text-primary transition-colors">Contact our Support Team</Link></li>
              <li><Link href="/blog" className="hover:underline text-gray-900 hover:text-primary transition-colors">Read our Blog &amp; Guides</Link></li>
            </ul>
          </div>
        </div>

      </div>
    </Container>
  );
}
