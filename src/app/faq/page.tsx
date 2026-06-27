import type { Metadata } from 'next';
import { BASE_URL, SITE_NAME } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Frequently Asked Questions — ${SITE_NAME}`,
  description: 'Everything you need to know about ImageFix — how the tools work, privacy, supported formats, file size limits, and government exam photo specifications.',
  alternates: {
    canonical: `${BASE_URL}/faq`,
  },
};

const FAQ_SECTIONS = [
  {
    id: 'general',
    title: '🌐 General Questions',
    faqs: [
      {
        q: 'What is ImageFix?',
        a: `ImageFix is a free, browser-based image processing platform. It provides tools for compressing, resizing, cropping, and converting images, as well as pre-configured compliance tools for government exam photos, passport photos, and visa application photos. Every tool runs entirely inside your browser — your images are never uploaded to any server.`,
      },
      {
        q: 'Is ImageFix completely free?',
        a: `Yes. All tools on ImageFix are 100% free with no hidden fees, no account creation required, no watermarks on output files, and no daily usage limits. The platform is supported by Google AdSense ads displayed alongside content. The tools themselves will always remain free.`,
      },
      {
        q: 'Do I need to create an account or sign up?',
        a: `No. There is no account, login, or registration required. Open any tool, upload your image, and download the result. Nothing is saved or associated with your identity.`,
      },
      {
        q: 'Who built ImageFix?',
        a: `ImageFix was built by Sahil Gawade, a full-stack developer from India. The platform was created after a close friend missed a government exam deadline because his photo was 8KB over the portal's strict file size limit. You can read the full story on our About page.`,
      },
      {
        q: 'What browsers does ImageFix support?',
        a: `ImageFix works on all modern browsers: Chrome, Firefox, Safari (including iOS Safari), Edge, and Opera. The Web Worker and OffscreenCanvas APIs we use require a browser released after 2020. Internet Explorer is not supported. We recommend Chrome or Firefox for the best performance.`,
      },
      {
        q: 'Does ImageFix work on mobile devices?',
        a: `Yes. All tools are fully responsive and work on Android and iOS smartphones. The compression and conversion processing uses the same browser APIs available on mobile. However, very large images (above 10MP) may process more slowly on lower-end mobile devices due to CPU constraints.`,
      },
    ],
  },
  {
    id: 'privacy',
    title: '🔒 Privacy & Security',
    faqs: [
      {
        q: 'Does ImageFix upload my images to a server?',
        a: `No. This is the core architectural principle of ImageFix. Every image operation — compression, resizing, cropping, format conversion — happens inside your browser using the HTML5 Canvas API and Web Workers. Your image file is never transmitted over the internet to any server. We have no server infrastructure to receive your files, and we cannot access your images even if we wanted to.`,
      },
      {
        q: 'Is it safe to process passport photos and ID documents on ImageFix?',
        a: `Yes. Because processing is entirely local (inside your browser), your sensitive documents never leave your device. This is architecturally guaranteed — not a policy promise. For comparison, tools that require you to "upload" your image send it to a third-party server where it is processed and (potentially) stored. ImageFix's processing model is the private alternative.`,
      },
      {
        q: 'Does ImageFix strip EXIF metadata from my photos?',
        a: `Yes, automatically. When your image is drawn onto an HTML5 Canvas and re-encoded using our tools, the Canvas API produces a clean new image file with no EXIF metadata. This includes GPS location data, device make/model, timestamps, and all other embedded metadata. This stripping happens as a side effect of all Canvas-based processing — you don't need to take any extra step.`,
      },
      {
        q: 'Does ImageFix use cookies?',
        a: `Yes, but minimally. ImageFix uses cookies for Google AdSense (our ad provider) and Vercel Analytics (our privacy-first, aggregate analytics tool). We do not use cookies to track individual user behaviour across sessions. You can read the full details in our Privacy Policy.`,
      },
      {
        q: 'What analytics data does ImageFix collect?',
        a: `We use Vercel Analytics, which collects aggregate, non-personally-identifiable data: page views, page load times, and general geographic regions. We cannot identify individual users from this data. We do not use Google Analytics. No images, filenames, or personal data are ever collected by our analytics system.`,
      },
    ],
  },
  {
    id: 'compression',
    title: '📦 Image Compression',
    faqs: [
      {
        q: 'How does ImageFix compress to an exact file size?',
        a: `Most image tools use a fixed quality setting (e.g., "70% quality") which produces unpredictable file sizes. ImageFix uses a binary search algorithm: it encodes the image at a test quality level, checks the resulting file size, and adjusts quality up or down. After 7 iterations (which takes under 2 seconds), the algorithm has narrowed the quality range to within 1% of optimal — guaranteeing the highest possible quality that fits within your target file size.`,
      },
      {
        q: 'What is the smallest file size I can compress to?',
        a: `Technically there is no hard lower limit, but practically speaking, compressing a photograph below 10–15KB produces heavily degraded results with visible block artifacts. For government portal submissions, never compress below 20KB — most portals (UPSC, SSC, NTA) have a minimum file size as well as a maximum, and files below the minimum are rejected as "file too small."`,
      },
      {
        q: 'Can I compress a PNG to a specific file size?',
        a: `PNG uses lossless compression, which means you cannot freely reduce its size without converting to a lossy format (JPEG or WebP). Our compression tools automatically convert PNG to JPEG during the compression process. If you need to keep the PNG format, you can use lossless PNG optimisation — but the size reduction will be limited compared to JPEG compression.`,
      },
      {
        q: 'Why does my compressed image look different than the original?',
        a: `All JPEG and WebP compression involves discarding some image data (this is called "lossy" compression). At quality levels of 70–90%, this difference is typically invisible to the human eye. At very aggressive levels (below 50%), you may see "banding" in uniform colour areas, "ringing" around sharp edges, and a general softness. Start from the highest-quality source image you have and target the upper end of the allowed file size range for best results.`,
      },
      {
        q: 'Does compressing an image reduce its dimensions?',
        a: `No. Compression only reduces the file size by encoding the pixels more efficiently. The pixel dimensions (width × height) remain unchanged. To reduce both file size and dimensions simultaneously, use our resize tool first, then compress.`,
      },
    ],
  },
  {
    id: 'formats',
    title: '🔄 Image Formats',
    faqs: [
      {
        q: 'What image formats does ImageFix support?',
        a: `ImageFix supports JPG/JPEG, PNG, and WebP as input formats for all tools. Output formats depend on the tool: compression tools output JPEG, conversion tools output the target format (WebP or JPG), and compliance tools always output JPEG (as required by government portals). AVIF and HEIC are not currently supported as inputs.`,
      },
      {
        q: 'Why does the portal reject my image even though it has a .jpg extension?',
        a: `If you rename a PNG or WebP file to .jpg without converting it, the file still contains the original format's binary data. Government portals validate the file's internal format signature (called "magic bytes"), not just the file extension. A PNG renamed to .jpg will always be rejected as "invalid format." You must perform an actual format conversion, not just a rename.`,
      },
      {
        q: 'Is WebP supported by all browsers?',
        a: `Yes, as of 2026. All major browsers — Chrome, Firefox, Safari (since v14, September 2020), Edge, and Opera — fully support WebP. Combined global browser market share coverage is approximately 97%. WebP is safe to use for web images without any fallback for general audiences. The only exception is very old browsers like Internet Explorer 11 and Safari 13 or older.`,
      },
      {
        q: 'What format should I use for government portal uploads?',
        a: `Always use JPEG for government portal submissions (UPSC, SSC, NSDL, Passport Seva, NTA, IBPS, UPSSSC, etc.). Virtually all Indian government portals were built before WebP was widespread and only accept JPEG. PNG is sometimes accepted but JPEG is universally correct. Never use WebP for official form submissions.`,
      },
      {
        q: 'What happens to transparent areas when I convert PNG to JPEG?',
        a: `JPEG does not support transparency. When you convert a transparent PNG to JPEG, the transparent areas are filled with a colour — our tools fill them with white by default, which is the correct behaviour for photos requiring a white background (passport photos, exam form photos, etc.). If you need to preserve transparency, convert to WebP instead (which supports full transparency).`,
      },
    ],
  },
  {
    id: 'exam-photos',
    title: '📋 Government Exam Photo Requirements',
    faqs: [
      {
        q: 'What are the photo specifications for UPSC application?',
        a: `UPSC requires: JPG/JPEG format, file size between 20KB and 300KB, dimensions minimum 350×350 pixels and maximum 1000×1000 pixels (square format), plain white background, face covering at least 75% of the frame, and the candidate's name and date at the bottom. The photo must be recent (taken within 10 days of the start of the application window).`,
      },
      {
        q: 'What are the photo specifications for IBPS PO exam?',
        a: `IBPS requires: JPEG format, maximum 20KB file size (one of the strictest limits in Indian exams), dimensions 200×230 pixels, white background, taken within 3 months. Additionally, a signature (10–20KB JPEG, 140×60px), left thumb impression (20KB maximum, 240×240px), and handwriting sample (50KB maximum, PO only) are required.`,
      },
      {
        q: 'What are the photo specifications for NEET UG?',
        a: `NTA NEET requires: JPEG/JPG format, file size between 10KB and 200KB, passport-size portrait orientation (at least 200×260 pixels), plain white or light background, clear face with both eyes visible, and the candidate's name and date printed at the bottom. The signature must also be uploaded: 4KB to 30KB JPEG on white paper.`,
      },
      {
        q: 'What are the photo specifications for SSC CGL and CHSL?',
        a: `The SSC OTR portal requires: JPG format, file size between 20KB and 50KB, portrait orientation (3.5cm × 4.5cm, approximately 200×260 pixels), plain white background, taken within 3 months. The signature must be 10–20KB JPG on white paper with black ballpoint ink.`,
      },
      {
        q: 'What are the photo specifications for GATE?',
        a: `GATE (GOAPS portal) requires: JPEG format, file size between 5KB and 100KB, portrait orientation (minimum 240×320 pixels), plain white or light-coloured background. The signature must be 2–30KB JPEG in landscape orientation on white paper with black or blue ink.`,
      },
      {
        q: 'Why was my application photo rejected even after uploading successfully?',
        a: `A successful upload only means the file passed the portal's automated validation (format, size, dimensions). Manual scrutiny by exam authorities during document processing can reject photos for: non-white background, shadows on the face or background, photo that is more than the allowed number of days old, glasses (in most exams), and digital alteration/filter effects. Use an unedited, recent photo against a plain white background.`,
      },
    ],
  },
  {
    id: 'passport-visa',
    title: '✈️ Passport & Visa Photos',
    faqs: [
      {
        q: 'What are the photo requirements for Indian passport?',
        a: `Passport Seva (passportindia.gov.in) requires: JPEG format, 10KB to 500KB file size, minimum 200×200 pixels (square/1:1 ratio), plain white background. Physical prints submitted at PSK must be 51×51mm (2×2 inches) in colour on glossy photo paper. Glasses are not permitted (MEA rule updated 2021). Photo must be taken within the last 6 months.`,
      },
      {
        q: 'What are the photo requirements for a US visa (DS-160)?',
        a: `US State Department requires: JPEG format, maximum 240KB file size, minimum 600×600 pixels (square, 1:1 ratio), maximum 1200×1200 pixels, pure white background, head covering 50–69% of frame height, taken within the last 6 months. Glasses are prohibited. Neutral expression, both eyes open.`,
      },
      {
        q: 'What are the photo requirements for a Schengen visa?',
        a: `Schengen (ICAO standard) requires: physical photo 35mm × 45mm (portrait), plain white background, head covering 70–80% of frame height, taken within the last 6 months. Digital uploads (where accepted): JPEG, 50–300KB, minimum 600×800 pixels. Glasses are not recommended and increasingly prohibited following ICAO 2024 updates.`,
      },
      {
        q: 'What are the photo requirements for a UK visa?',
        a: `UK UKVCAS requires: 35mm × 45mm portrait format, cream or off-white background (distinctive from US/Schengen which require pure white), JPEG format, up to 4MB for digital upload, head covering 50–70% of frame height, taken within the last 6 months. Glasses are not recommended.`,
      },
      {
        q: 'Can I use the same photo for my passport and visa application?',
        a: `It depends on the country. US passport requires a printed 2×2 inch photo, but the DS-160 visa form requires a specific 600×600 pixel digital file — different formats. UK passport and UK visa photos are both 35×45mm, so the same format works but you should recompress for digital vs. print use. Always verify the specific digital requirements for each application separately.`,
      },
    ],
  },
  {
    id: 'technical',
    title: '⚙️ Technical Questions',
    faqs: [
      {
        q: 'Why does processing large images take longer on mobile?',
        a: `Image processing in our tools uses the browser's CPU via Web Workers. Desktop computers have significantly more powerful CPUs than mobile devices. A 12MP photo compressed using our binary search algorithm (7 encoding iterations) takes about 1–2 seconds on a modern desktop and 3–8 seconds on a mid-range smartphone. This is a hardware constraint — the processing itself is optimised, but the CPU speed of the device determines how fast it runs.`,
      },
      {
        q: 'What is a Web Worker and why does ImageFix use one?',
        a: `A Web Worker is a background thread that runs JavaScript separately from the browser's main UI thread. Without a Worker, running heavy image processing (like our binary search compression loop) on the main thread would freeze the entire browser tab — buttons would stop responding, animations would stutter, and the page would feel "broken" during processing. By moving the work to a Worker, the UI stays perfectly responsive while processing happens in the background.`,
      },
      {
        q: 'What is the HTML5 Canvas API?',
        a: `The HTML5 Canvas API provides a 2D drawing surface in the browser. Our tools use it to: load your image as pixel data, perform operations (resize, crop, colour adjustments), and re-encode the result as a JPEG or WebP file using the canvas.toBlob() / OffscreenCanvas.convertToBlob() methods. This is the same technology used by browser-based photo editors, but we use it specifically for precision compression and format conversion.`,
      },
      {
        q: 'Does ImageFix use AI or machine learning?',
        a: `No. All image processing in ImageFix uses deterministic algorithms: the binary search compression algorithm finds the optimal JPEG quality level through iterative encoding and size checking. Resizing uses bilinear interpolation. Format conversion uses the browser's native image encoder. There are no neural networks or machine learning models involved. This keeps processing fast, predictable, and completely private.`,
      },
      {
        q: 'Can I use ImageFix for commercial projects?',
        a: `Yes. The images you process through ImageFix are yours — you hold full copyright to them before and after processing. We place no restrictions on how you use your processed images. ImageFix simply provides the processing tools; it does not claim any rights to your content.`,
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <div className="bg-dots w-full border-b-4 border-black">
        <Container className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">❓</div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight font-[family-name:var(--font-heading)] mb-6 text-gray-900">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about ImageFix — privacy, supported formats, compression, and government exam photo specifications.
            </p>
            {/* Jump links */}
            <div className="flex flex-wrap gap-2 justify-center mt-8">
              {FAQ_SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="bg-white border-2 border-black px-3 py-1 text-sm font-bold hover:bg-primary hover:text-white transition-colors shadow-brutal-sm"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ── FAQ Sections ── */}
      <Container className="py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          {FAQ_SECTIONS.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-8">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-extrabold font-[family-name:var(--font-heading)] text-gray-900">
                  {section.title}
                </h2>
                <div className="h-1 flex-grow bg-black" />
              </div>

              {/* FAQ Items */}
              <div className="space-y-3">
                {section.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="bg-white border-4 border-black shadow-brutal group open:shadow-brutal-sm open:translate-x-[2px] open:translate-y-[2px] transition-all"
                  >
                    <summary className="p-5 font-bold text-gray-900 cursor-pointer list-none flex justify-between items-start gap-4 hover:bg-surface-alt transition-colors">
                      <span className="text-lg leading-snug">{faq.q}</span>
                      <span className="text-primary text-2xl font-extrabold flex-shrink-0 group-open:rotate-45 transition-transform duration-200 mt-0.5">+</span>
                    </summary>
                    <div className="px-5 pb-5 text-gray-700 font-medium leading-relaxed border-t-2 border-black/10 pt-4 text-base">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>

      {/* ── Still have questions? ── */}
      <div className="bg-surface-alt border-t-4 border-black w-full">
        <Container className="py-16">
          <div className="max-w-2xl mx-auto text-center bg-white border-4 border-black shadow-brutal p-10">
            <div className="text-5xl mb-4">💬</div>
            <h2 className="text-3xl font-extrabold font-[family-name:var(--font-heading)] text-gray-900 mb-4">
              Still Have a Question?
            </h2>
            <p className="text-lg text-gray-700 font-medium mb-6 leading-relaxed">
              If your question isn&apos;t answered here, reach out through our contact form. We typically respond within 24–48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-extrabold px-8 py-3 border-4 border-black shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                Contact Support
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-extrabold px-8 py-3 border-4 border-black shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                Read Our Guides →
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
