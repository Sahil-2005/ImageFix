// src/lib/registry/toolRegistry.ts
// â˜… Central data configuration â€” single source of truth for all tools
// This file feeds generateStaticParams, generateMetadata, sitemap.ts, and all UI.

import type { ToolDefinition } from './types';
import { COMPLIANCE_TOOLS } from './complianceTools';
import { GENERATED_TOOLS } from './generatedTools';

const GENERIC_TOOLS: ToolDefinition[] = [
  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // COMPRESSION TOOLS
  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: 'compress-image-to-50kb',
    action: 'compress',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    settings: [
      {
        id: 'targetSize',
        label: 'Target File Size',
        type: 'number',
        defaultValue: 50,
        min: 10,
        max: 500,
        unit: 'KB',
      },
    ],
    title: 'Compress Image to 50KB Online Free â€” ImageFix',
    metaDescription:
      'Compress any image to 50KB or less online for free. No upload needed â€” 100% client-side processing. Supports JPG, PNG, WebP.',
    h1: 'Compress Image to 50KB',
    keywords: [
      'compress image to 50kb',
      'reduce image size to 50kb',
      'image compressor 50kb',
      'compress photo to 50kb online',
    ],
    category: 'compress-images',
    heroDescription:
      'Instantly reduce any image to 50KB or less â€” perfect for email attachments, form uploads, and web optimization. Your images never leave your browser.',
    seoContent: {
      specTable: [
        { label: 'Target File Size', value: 'â‰¤ 50 KB' },
        { label: 'Supported Formats', value: 'JPG, JPEG, PNG, WebP' },
        { label: 'Processing Location', value: 'Your Browser (100% Private)' },
        { label: 'Quality Algorithm', value: 'Binary Search (7 iterations)' },
        { label: 'Cost', value: 'Free, No Signup Required' },
      ],
      detailedDescription: `The 50KB file size limit appears on hundreds of government portals, university application forms, and corporate HR systems across India and globally. Whether you are uploading a photo for an IIT JEE application, a passport renewal form, or an employee verification system, a file that is even 1KB over the limit will trigger an instant "File size too large" error. Our free 50KB image compressor was built precisely to eliminate this frustration.

Unlike standard image editing software â€” which requires manual trial-and-error adjustments of quality sliders â€” our tool uses an intelligent binary search algorithm. Internally, it encodes your image at a test quality level, checks the resulting file size, and then automatically adjusts upward or downward in a series of seven rapid iterations. The result is the highest possible visual quality image that is guaranteed to be at or under 50KB. This process completes in under two seconds on any modern device.

A key differentiator of our approach is privacy. When you use ImageFix, your photo is never transmitted over the internet to a remote server. The entire compression process happens inside your browser using the HTML5 Canvas API and Web Workers. This makes it the ideal choice for sensitive documents â€” passport copies, ID scans, and official photographs â€” where you simply cannot risk a third party storing your image.

The 50KB limit is particularly common for Indian competitive examination forms (UPSC, SSC, IBPS, NEET, JEE) and for government identity portals. Most modern smartphone cameras produce JPEG photos between 2MB and 8MB, which means your raw photo is roughly 40 to 160 times larger than required. Our compressor bridges this gap instantly, without any desktop software installation.`,
      rejectionTips: [
        'Do not simply rename a PNG file to .jpg â€” the file will still be the original PNG size and will be rejected. Always use a proper converter first.',
        'If your image has transparency (PNG), converting to JPG will fill transparent areas with white. If you need to preserve transparency, use WebP compression instead.',
        'Avoid over-compressing passport or ID photos below 15KB â€” excessive compression introduces visible artifacts that may cause a rejection during manual verification.',
        'If you compress an already compressed JPEG, you may see "banding" artifacts in uniform colour areas like sky or backgrounds. Start from the original, highest-quality source.',
        'For scanned documents, set the scanner to 150 DPI before compressing â€” this produces a good balance of readability and small file size.',
      ],
    },
    howToSteps: [
      'Click "Upload Image" or drag and drop your file',
      'The tool automatically compresses to â‰¤50KB using a binary search algorithm',
      'Preview the result and compare quality side-by-side',
      'Click "Download" to save your compressed image',
    ],
    faqs: [
      {
        question: 'Will compressing to 50KB reduce image quality?',
        answer:
          'Our smart compression algorithm finds the optimal quality level to reach 50KB while preserving as much visual quality as possible. For most photos, the difference is imperceptible at normal viewing sizes.',
      },
      {
        question: 'Is my image uploaded to a server?',
        answer:
          'No. ImageFix processes everything in your browser using the HTML5 Canvas API and Web Workers. Your images never leave your device at any point.',
      },
      {
        question: 'What image formats are supported?',
        answer:
          'You can compress JPG, JPEG, PNG, and WebP images to 50KB. PNGs will be converted to JPEG during compression for maximum size reduction.',
      },
      {
        question: 'Why do so many portals have a 50KB limit?',
        answer:
          'The 50KB limit is a legacy constraint from older government IT systems designed in the early 2000s to handle high submission volumes with limited server storage. Despite modern infrastructure, many portals retain this limit for consistency with their existing validation logic.',
      },
      {
        question: 'Can I compress an image that is already under 50KB?',
        answer:
          'Yes, but the tool will still process it and may slightly increase or decrease the quality. For images already under 50KB, the output quality should be excellent as the algorithm has room to target a high quality level.',
      },
      {
        question: 'Does this work on mobile phones?',
        answer:
          'Yes. ImageFix works fully on all modern mobile browsers including Chrome for Android, Safari on iOS, and Firefox Mobile. The Web Worker-based engine keeps the UI responsive even on lower-end devices.',
      },
    ],
    relatedSlugs: [
      'compress-image-to-100kb',
      'compress-image-to-20kb',
      'convert-png-to-webp',
    ],
    adDensity: 'medium',
  },

  {
    slug: 'compress-image-to-100kb',
    action: 'compress',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    settings: [
      {
        id: 'targetSize',
        label: 'Target File Size',
        type: 'number',
        defaultValue: 100,
        min: 10,
        max: 500,
        unit: 'KB',
      },
    ],
    title: 'Compress Image to 100KB Online Free â€” ImageFix',
    metaDescription:
      'Reduce any image to 100KB or less for free. Browser-based compression â€” no uploads, no signups. Works with JPG, PNG, WebP.',
    h1: 'Compress Image to 100KB',
    keywords: [
      'compress image to 100kb',
      'reduce image size to 100kb',
      'image compressor 100kb',
      'compress photo to 100kb online free',
    ],
    category: 'compress-images',
    heroDescription:
      'Quickly shrink any image to 100KB â€” ideal for online forms, job applications, and website uploads. Processing happens entirely in your browser.',
    seoContent: {
      specTable: [
        { label: 'Target File Size', value: 'â‰¤ 100 KB' },
        { label: 'Supported Formats', value: 'JPG, JPEG, PNG, WebP' },
        { label: 'Processing Location', value: 'Your Browser (100% Private)' },
        { label: 'Quality Algorithm', value: 'Binary Search Optimization' },
        { label: 'Cost', value: 'Free, No Signup Required' },
      ],
      detailedDescription: `The 100KB file size limit is one of the most common upload restrictions in India and abroad. It appears on job application portals (like those used by PSUs and state government departments), admission forms for universities, and identity verification systems. While 50KB is often required for photos, 100KB limits are more commonly applied to scanned documents and academic certificates. Our free tool makes hitting this target completely effortless.

The challenge with 100KB compression is striking the right balance. At 100KB, a well-photographed portrait at 600x800 pixels can retain near-perfect visual quality â€” making this a much more forgiving limit compared to 50KB. Our tool uses the same binary-search compression engine as our other tools, which means it will always find the highest possible quality that fits within the 100KB ceiling. You are never left with a needlessly over-compressed image.

A common mistake people make is using a generic "image compressor" that simply applies a fixed quality reduction (e.g., 70% quality) without checking the output size. If your image is very large, this might still be too big. If your image is already small, you are compressing it unnecessarily. Our approach is target-aware: you tell us the limit, and we deliver the result that precisely meets it. Every processing step happens locally in your browser, so your documents remain completely private.`,
      rejectionTips: [
        'For scanned documents, scan at 150 DPI in greyscale rather than colour if the content is black-and-white text â€” this alone can reduce file size by 60% before any compression.',
        'Avoid saving documents as PNG before compressing â€” a scanned PDF exported as a PNG can be 5â€“10Ã— larger than the equivalent JPG. Always use JPG as an intermediate format.',
        'If you are compressing a certificate or official document, use a quality level of at least 80% to keep all text legible during manual verification.',
        'Check the compressed file on your phone at 100% zoom before submitting. Text that appears clear on a desktop monitor may be blurry on a smaller screen.',
      ],
    },
    howToSteps: [
      'Upload your image by clicking or dragging it in',
      'The compressor targets â‰¤100KB automatically',
      'Review the before/after quality comparison',
      'Download your optimized image',
    ],
    faqs: [
      {
        question: 'Why do I need to compress images to 100KB?',
        answer:
          'Many online portals, government forms, and application systems require images under 100KB. This ensures manageable server storage and fast processing of thousands of daily submissions.',
      },
      {
        question: 'Does this work on my phone?',
        answer:
          'Yes. ImageFix works on all modern mobile browsers including Chrome, Safari, and Firefox on iOS and Android.',
      },
      {
        question: 'Can I use this for scanned documents?',
        answer:
          'Absolutely. Scan your document, save it as JPG, and upload it here. The tool will reduce it to under 100KB while keeping all text clearly readable.',
      },
      {
        question: 'What is the difference between 50KB and 100KB compression?',
        answer:
          'At 100KB, the compressor has twice as much budget to work with, resulting in significantly better image quality. For the same input image, a 100KB output will look noticeably sharper than a 50KB one.',
      },
      {
        question: 'Is there a limit on how many images I can compress?',
        answer:
          'No. ImageFix is completely free with no daily limit, no account required, and no watermarks added to your images.',
      },
    ],
    relatedSlugs: [
      'compress-image-to-50kb',
      'compress-image-to-20kb',
      'convert-png-to-webp',
    ],
    adDensity: 'medium',
  },

  {
    slug: 'compress-image-to-20kb',
    action: 'compress',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    settings: [
      {
        id: 'targetSize',
        label: 'Target File Size',
        type: 'number',
        defaultValue: 20,
        min: 5,
        max: 500,
        unit: 'KB',
      },
    ],
    title: 'Compress Image to 20KB Online Free â€” ImageFix',
    metaDescription:
      'Compress images to 20KB instantly in your browser. Perfect for passport photos, ID uploads, and strict file size limits. Free, no signup.',
    h1: 'Compress Image to 20KB',
    keywords: [
      'compress image to 20kb',
      'reduce image size to 20kb',
      'photo compressor 20kb',
      'compress image under 20kb',
    ],
    category: 'compress-images',
    heroDescription:
      'Compress any image to 20KB or less for passport applications, ID card uploads, and strict file limits. 100% private â€” no server uploads.',
    seoContent: {
      specTable: [
        { label: 'Target File Size', value: 'â‰¤ 20 KB' },
        { label: 'Supported Formats', value: 'JPG, JPEG, PNG, WebP' },
        { label: 'Minimum Input Size', value: 'Any (even if already under 20KB)' },
        { label: 'Algorithm', value: 'Binary Search, 7 Iterations' },
        { label: 'Privacy', value: 'No Server Upload â€” Local Processing Only' },
      ],
      detailedDescription: `Compressing an image to 20KB is one of the most technically challenging file size targets. At this size, a typical portrait photo of 600x800 pixels will have a JPEG quality somewhere between 30% and 55%, which requires a precision-tuned algorithm to achieve without introducing unacceptable visual noise. Many generic online tools fail at this target â€” they either miss the size limit or destroy the image quality. Our compressor uses an iterative binary search approach that reliably achieves the exact target.

The 20KB limit appears in several specific, high-stakes contexts. IBPS bank exam portals, certain state PSC application forms, and some older government systems enforce this very restrictive limit for photo uploads. Candidates who discover this requirement at midnight before a deadline often have no tools capable of hitting it without downloading software. Our free browser-based tool solves this problem immediately, with no installation required.

The technical reality of 20KB compression is that some amount of quality reduction is unavoidable. At this size budget, a 600x800 pixel image has approximately 42 bytes per pixel â€” roughly 1/6th of what a good-quality JPEG typically uses. Our algorithm maximises perceptual quality by preserving luminance detail (what your eye notices most) while more aggressively compressing chrominance channels (colour information). The result is an image that looks cleaner than what a fixed-quality approach would produce.`,
      rejectionTips: [
        'If your photo is very high resolution (e.g., 12 megapixels from a DSLR), resize it to 600x800 pixels before compressing to 20KB â€” this gives the algorithm more room to work with quality.',
        'Avoid photos with very busy, patterned backgrounds (like wallpaper or foliage) â€” compression artefacts appear more prominently in complex backgrounds at low file sizes.',
        'For ID photos, ensure the original image is well-lit with a plain background. Even after compression, a well-lit face retains more detail than a shadowy one.',
        'If the compressed result looks too grainy, try reducing the original image resolution first to 400x533 pixels, then re-compress â€” a smaller canvas at the same file size results in better perceived quality.',
      ],
    },
    howToSteps: [
      'Upload your photo',
      'ImageFix iteratively finds the best quality at â‰¤20KB',
      'Preview the compressed result at actual size',
      'Download the optimized file',
    ],
    faqs: [
      {
        question: 'Can I compress a photo to exactly 20KB?',
        answer:
          'Our algorithm uses binary search to find the highest quality that fits within 20KB. The result will be at or just under 20KB â€” never over.',
      },
      {
        question: 'Will my passport photo still be accepted?',
        answer:
          'Yes. The compressor preserves the original dimensions and aspect ratio. Only the file size is reduced through quality optimization, not the pixel dimensions.',
      },
      {
        question: 'Why is 20KB so much harder than 50KB?',
        answer:
          'At 20KB, the algorithm must find a JPEG quality level typically between 30-55%, which means significant compression. The binary search approach takes 7 iterations to find the precise setting, versus simpler tools that just guess once.',
      },
      {
        question: 'Which portals require a 20KB photo limit?',
        answer:
          'The IBPS (Institute of Banking Personnel Selection) portal, several state PSC forms, and some older central government application systems enforce a 20KB limit for photographs.',
      },
      {
        question: 'Can I compress a PNG to 20KB?',
        answer:
          'Yes. The tool accepts PNG files and internally converts them to JPEG format to achieve the 20KB target, since JPEG compression is far more efficient than PNG for photographs.',
      },
    ],
    relatedSlugs: [
      'compress-image-to-50kb',
      'compress-image-to-100kb',
      'resize-image-to-1920x1080',
    ],
    adDensity: 'medium',
  },

  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // CONVERSION TOOLS
  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: 'convert-png-to-webp',
    action: 'convert',
    inputFormats: ['png'],
    outputFormat: 'webp',
    settings: [
      {
        id: 'quality',
        label: 'Quality',
        type: 'slider',
        defaultValue: 80,
        min: 1,
        max: 100,
        step: 1,
        unit: '%',
      },
    ],
    title: 'Convert PNG to WebP Online Free â€” ImageFix',
    metaDescription:
      'Convert PNG images to WebP format online for free. Reduce file size by up to 30% with WebP. No upload â€” 100% browser-based.',
    h1: 'Convert PNG to WebP',
    keywords: [
      'convert png to webp',
      'png to webp converter',
      'png to webp online',
      'change png to webp free',
    ],
    category: 'convert-formats',
    heroDescription:
      'Transform PNG files to modern WebP format for smaller file sizes and faster page loads. All processing happens locally in your browser.',
    seoContent: {
      specTable: [
        { label: 'Input Format', value: 'PNG (including transparent)' },
        { label: 'Output Format', value: 'WebP' },
        { label: 'Transparency', value: 'Fully Preserved (Alpha Channel)' },
        { label: 'Typical Size Reduction', value: '25â€“40% vs. original PNG' },
        { label: 'Browser Support', value: 'All modern browsers (Chrome, Firefox, Safari, Edge)' },
        { label: 'Processing', value: 'Client-Side â€” No Upload' },
      ],
      detailedDescription: `WebP was developed by Google in 2010 specifically to be a superior replacement for both JPEG and PNG on the web. For photographic images, WebP lossy compression achieves a 25â€“34% smaller file size than equivalent JPEG at the same quality level. For images with transparency (which is PNG's primary use case), WebP lossless compression produces files that are roughly 26% smaller than the equivalent PNG. Converting your PNG images to WebP is one of the highest-impact optimizations you can make to improve website performance.

The adoption of WebP accelerated dramatically when Apple added native WebP support to Safari 14 in September 2020. As of today, all major browsers â€” Chrome, Firefox, Safari, Edge, and Opera â€” fully support the WebP format, covering over 97% of all global browser usage. There is no longer any meaningful barrier to serving WebP on your website. Tools like Next.js and modern WordPress themes now serve WebP automatically when the browser supports it, making this conversion a standard part of any performance optimization workflow.

One common misconception is that WebP does not support transparency. This is false. WebP fully supports an alpha channel (transparency), making it a direct replacement for PNG in all scenarios including logos, icons, product shots with white-background removal, and UI elements. Our converter preserves transparency fully during the PNG to WebP conversion. The resulting WebP file will look identical to your original PNG, but will typically be 25â€“40% smaller, directly improving your site's Core Web Vitals score and Google PageSpeed Insights rating.`,
      rejectionTips: [
        'If a platform rejects your WebP upload, check if it requires JPG or PNG specifically â€” some older content management systems and form portals do not yet accept WebP.',
        'For email attachments, avoid WebP â€” most email clients including Outlook do not render WebP images inline.',
        'If you are converting a PNG with text or sharp geometric shapes, use 90â€“100% quality to avoid blurring edges that look crisp in the lossless original.',
        'Test your converted WebP in multiple browsers before deploying to production, particularly if you need to support users who might use older browser versions.',
      ],
    },
    howToSteps: [
      'Upload your PNG image',
      'Adjust the quality slider (default: 80% â€” a great balance of size and quality)',
      'Preview the WebP result and verify transparency is preserved',
      'Download your converted WebP file',
    ],
    faqs: [
      {
        question: 'Why should I convert PNG to WebP?',
        answer:
          'WebP typically produces files 25-40% smaller than PNG while maintaining comparable quality, making your website load significantly faster. Google measures page load speed as a ranking signal, so smaller images directly benefit your SEO.',
      },
      {
        question: 'Does WebP support transparency?',
        answer:
          'Yes! WebP supports alpha channel transparency just like PNG, so your transparent backgrounds, logos, and icons are fully preserved. The transparency data is encoded efficiently in the WebP format.',
      },
      {
        question: 'Which browsers support WebP?',
        answer:
          'All modern browsers support WebP including Chrome, Firefox, Safari (since version 14), Edge, and Opera. This covers over 97% of global browser usage as of 2026.',
      },
      {
        question: 'What quality setting should I use for the conversion?',
        answer:
          'The default of 80% is excellent for most web images. For images with text, fine detail, or sharp edges (like UI screenshots or logos), use 90â€“95%. For photographs where file size is the priority, 70% is still visually very good.',
      },
      {
        question: 'Is there a file size limit for the PNG I can upload?',
        answer:
          'There is no hard limit â€” the tool runs in your browser, so the practical limit is your device\'s available RAM. Files up to 20MB work without issue on any modern device.',
      },
      {
        question: 'Will converting to WebP improve my Google PageSpeed score?',
        answer:
          'Yes. Google PageSpeed Insights actively flags non-WebP images as an opportunity to "Serve images in next-gen formats." Converting PNGs to WebP can directly improve your Performance score.',
      },
    ],
    relatedSlugs: [
      'convert-png-to-jpg',
      'convert-jpg-to-webp',
      'compress-image-to-100kb',
    ],
    adDensity: 'medium',
  },

  {
    slug: 'convert-png-to-jpg',
    action: 'convert',
    inputFormats: ['png'],
    outputFormat: 'jpg',
    settings: [
      {
        id: 'quality',
        label: 'Quality',
        type: 'slider',
        defaultValue: 90,
        min: 1,
        max: 100,
        step: 1,
        unit: '%',
      },
    ],
    title: 'Convert PNG to JPG Online Free â€” ImageFix',
    metaDescription:
      'Convert PNG images to JPG format online for free. Reduce file size dramatically while keeping great quality. No uploads required.',
    h1: 'Convert PNG to JPG',
    keywords: [
      'convert png to jpg',
      'png to jpg converter',
      'png to jpeg online',
      'change png to jpg free',
    ],
    category: 'convert-formats',
    heroDescription:
      'Convert PNG screenshots and graphics to universally compatible JPG format. Dramatically reduce file sizes for sharing and uploads.',
    seoContent: {
      specTable: [
        { label: 'Input Format', value: 'PNG' },
        { label: 'Output Format', value: 'JPG / JPEG' },
        { label: 'Transparency', value: 'Transparent areas filled with white' },
        { label: 'Typical Size Reduction', value: '60â€“80% vs. original PNG (for photos)' },
        { label: 'Universal Compatibility', value: 'Supported by all email clients, portals, and devices' },
        { label: 'Processing', value: 'Client-Side â€” No Upload' },
      ],
      detailedDescription: `JPEG (JPG) is the most universally supported image format in the world. Every email client, every government form portal, every printer, and every image viewer on the planet can open a JPEG file. This universal compatibility makes PNG-to-JPG conversion one of the most commonly needed tasks in digital workflows. Whether you need to send a screenshot via email, upload a document to an application portal, or reduce a large PNG graphic to a manageable size, converting to JPG is often the fastest and most reliable solution.

The file size difference between PNG and JPG is often dramatic for photographic content. A PNG photo of a face against a white background might be 800KB, while the equivalent JPG at 90% quality would be 120KB â€” a reduction of 85%. This massive difference arises from the fundamentally different compression strategies of the two formats. PNG uses lossless compression (every pixel is preserved exactly) which is ideal for graphics with flat colours and sharp edges, but extremely inefficient for photographs with millions of continuously-varying tones. JPG uses lossy compression that exploits the limitations of the human visual system, achieving excellent photo quality at a fraction of the PNG file size.

The primary trade-off when converting PNG to JPG is the loss of transparency. JPG does not support an alpha channel, so any transparent areas in your PNG will be filled with a solid colour â€” by default, white. For most use cases (application forms, email, web photos), this is perfectly acceptable since the background is typically white anyway. For use cases that require transparency (logos, icons, UI overlays), WebP is the better conversion target. Our tool makes it straightforward to choose the right format for your specific need.`,
      rejectionTips: [
        'If your PNG has a transparent background that you want to preserve, convert to WebP instead of JPG â€” JPG will replace transparency with white.',
        'Do not convert PNGs that contain text or screenshots with sharp pixel edges to JPG at below 85% quality â€” JPEG compression creates "ringing" artifacts around sharp edges that make text look blurry.',
        'For photographs (selfies, landscapes, product shots), 85â€“90% JPG quality is indistinguishable from the original PNG to the human eye while being 5â€“10Ã— smaller.',
        'Avoid repeatedly converting a JPG to PNG and back to JPG. Each round-trip through lossy JPG compression degrades quality further. Always keep one original lossless copy.',
      ],
    },
    howToSteps: [
      'Upload your PNG image',
      'Set the JPG quality level (default: 90% â€” excellent quality)',
      'Preview the converted result to check for any quality issues',
      'Download your JPG file',
    ],
    faqs: [
      {
        question: 'Will I lose transparency when converting PNG to JPG?',
        answer:
          'Yes. JPG does not support transparency. Transparent areas will be filled with a white background. If you need to preserve transparency, convert to WebP instead using our PNG to WebP tool.',
      },
      {
        question: 'What quality setting should I use?',
        answer:
          'For photos, 85â€“90% is ideal â€” visually identical to the original with much smaller file size. For text, screenshots, or graphics with sharp edges, use 95%+ to prevent blurring.',
      },
      {
        question: 'How much smaller will the JPG be compared to the PNG?',
        answer:
          'For photographic content, typically 60â€“85% smaller. For graphics with flat colours, the reduction will be less dramatic as PNGs already compress these efficiently.',
      },
      {
        question: 'Can I convert multiple PNGs at once?',
        answer:
          'Currently, the tool processes one image at a time for the best quality control. Each conversion takes only seconds, so processing a batch manually is quick.',
      },
      {
        question: 'Is the converted JPG accepted by government portals?',
        answer:
          'Yes. JPEG is the required or preferred format on virtually all government application portals. Converting from PNG to JPG ensures broad compatibility with any upload system.',
      },
    ],
    relatedSlugs: [
      'convert-png-to-webp',
      'convert-jpg-to-webp',
      'compress-image-to-50kb',
    ],
    adDensity: 'medium',
  },

  {
    slug: 'convert-jpg-to-webp',
    action: 'convert',
    inputFormats: ['jpg', 'jpeg'],
    outputFormat: 'webp',
    settings: [
      {
        id: 'quality',
        label: 'Quality',
        type: 'slider',
        defaultValue: 80,
        min: 1,
        max: 100,
        step: 1,
        unit: '%',
      },
    ],
    title: 'Convert JPG to WebP Online Free â€” ImageFix',
    metaDescription:
      'Convert JPG/JPEG images to WebP format instantly. Save up to 30% file size with no visible quality loss. 100% free, no server uploads.',
    h1: 'Convert JPG to WebP',
    keywords: [
      'convert jpg to webp',
      'jpg to webp converter',
      'jpeg to webp online',
      'convert jpeg to webp free',
    ],
    category: 'convert-formats',
    heroDescription:
      'Convert your JPG photos to WebP â€” the modern image format that delivers 25-35% smaller files with identical visual quality. Runs entirely in your browser.',
    seoContent: {
      specTable: [
        { label: 'Input Format', value: 'JPG / JPEG' },
        { label: 'Output Format', value: 'WebP' },
        { label: 'Typical Size Reduction', value: '25â€“35% vs. original JPG' },
        { label: 'Colour Depth', value: '24-bit (16.7 million colours)' },
        { label: 'Animation Support', value: 'Animated WebP supported' },
        { label: 'Processing', value: 'Client-Side â€” No Upload' },
      ],
      detailedDescription: `Converting JPG photos to WebP is the single most impactful image optimization step you can take for a modern website. Google's Lighthouse and PageSpeed Insights tools actively flag JPEG images as "Next-gen format opportunities," and switching to WebP directly addresses this audit. For an e-commerce site with hundreds of product photos or a photography portfolio with dozens of gallery images, the cumulative bandwidth savings from JPG to WebP conversion can be enormous â€” often reducing total image payload by 30% or more.

WebP uses a more sophisticated compression model than JPEG. While JPEG divides the image into 8Ã—8 pixel blocks and applies the Discrete Cosine Transform (DCT), WebP uses larger variable-size blocks (up to 256Ã—256) with a predictive coding algorithm. This allows WebP to model large uniform areas (like clear sky or skin tones) far more efficiently than JPEG, reducing the characteristic "blocking" artifacts that JPEG shows at lower quality settings. In practical terms, a WebP image at 80% quality will look better than a JPEG at 80% quality, while being 25â€“35% smaller.

The practical use case for JPG to WebP conversion is web publishing. If you are running a Next.js, Nuxt, or any modern web framework, the framework can serve WebP images automatically to browsers that support it. For WordPress users, plugins like ShortPixel or Imagify can automate this conversion. However, if you need to manually prepare images for upload to a CMS, social platform, or web host that accepts WebP, our free converter is the fastest path. Every converted image stays entirely within your browser â€” no account, no subscription, no waiting for a server.`,
      rejectionTips: [
        'Do not use JPG to WebP conversion for images you plan to print â€” WebP is a screen-optimized format and print workflows expect JPEG or TIFF.',
        'Some older content management systems, social media platforms (like Facebook), and email clients do not support WebP. Always check platform compatibility before converting.',
        'If you are converting product photos for an online store, test WebP rendering on both desktop and mobile browsers before fully switching your image pipeline.',
        'For maximum quality, convert from the original, highest-quality JPG (before any previous compression), not from a previously compressed version.',
      ],
    },
    howToSteps: [
      'Upload your JPG or JPEG image',
      'Adjust the quality slider (default 80% is optimal for most use cases)',
      'Preview the WebP output and verify quality',
      'Click download to save your WebP file',
    ],
    faqs: [
      {
        question: 'Is WebP better than JPG?',
        answer:
          'For web use, yes. WebP achieves 25â€“35% smaller file sizes at equivalent visual quality, which means faster page loads and lower bandwidth costs. For print or non-web workflows, JPG remains more universally compatible.',
      },
      {
        question: 'Can I convert back from WebP to JPG?',
        answer:
          'Yes! Use our "Convert WebP to JPG" tool for the reverse conversion. Both directions are fully supported and completely free.',
      },
      {
        question: 'Does converting JPG to WebP improve SEO?',
        answer:
          'Yes. Google PageSpeed Insights rewards sites that serve images in next-gen formats like WebP. Faster page loads also improve Core Web Vitals, which are a confirmed Google ranking signal.',
      },
      {
        question: 'Will the converted WebP work on all browsers?',
        answer:
          'WebP is supported by all major modern browsers including Chrome, Firefox, Safari (since v14, 2020), Edge, and Opera. Coverage exceeds 97% of global browser usage.',
      },
      {
        question: 'How much quality is lost when converting JPG to WebP?',
        answer:
          'At 80% quality (our default), the visual difference between a JPG and WebP is imperceptible to the human eye in A/B comparisons. The WebP will typically be 25â€“35% smaller while looking effectively identical.',
      },
    ],
    relatedSlugs: [
      'convert-png-to-webp',
      'convert-png-to-jpg',
      'compress-image-to-100kb',
    ],
    adDensity: 'medium',
  },

  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // RESIZE TOOLS
  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: 'resize-image-to-1920x1080',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    settings: [
      {
        id: 'width',
        label: 'Width',
        type: 'number',
        defaultValue: 1920,
        min: 1,
        max: 7680,
        unit: 'px',
      },
      {
        id: 'height',
        label: 'Height',
        type: 'number',
        defaultValue: 1080,
        min: 1,
        max: 4320,
        unit: 'px',
      },
      {
        id: 'maintainAspect',
        label: 'Maintain Aspect Ratio',
        type: 'toggle',
        defaultValue: true,
      },
    ],
    title: 'Resize Image to 1920Ã—1080 Online Free â€” ImageFix',
    metaDescription:
      'Resize any image to exactly 1920Ã—1080 pixels (Full HD) online for free. No upload required â€” instant browser processing.',
    h1: 'Resize Image to 1920Ã—1080',
    keywords: [
      'resize image to 1920x1080',
      'resize photo to full hd',
      'image resizer 1920x1080',
      'make image 1920x1080 pixels',
    ],
    category: 'resize-and-scale',
    heroDescription:
      'Resize any image to Full HD resolution (1920Ã—1080) instantly. Perfect for wallpapers, presentations, and social media banners.',
    seoContent: {
      specTable: [
        { label: 'Target Resolution', value: '1920 Ã— 1080 pixels (Full HD / 1080p)' },
        { label: 'Aspect Ratio', value: '16:9 (Widescreen)' },
        { label: 'Supported Input Formats', value: 'JPG, JPEG, PNG, WebP' },
        { label: 'Resampling Algorithm', value: 'Bilinear (Browser Canvas)' },
        { label: 'Aspect Ratio Lock', value: 'Optional (toggle on/off)' },
        { label: 'Processing', value: 'Client-Side â€” No Upload' },
      ],
      detailedDescription: `The 1920Ã—1080 pixel resolution â€” commonly known as Full HD or 1080p â€” is the universal standard for digital displays, video production, and content publishing. It is the native resolution of most desktop monitors, all modern laptops, every gaming console, and virtually all YouTube and streaming video. Whether you are creating a desktop wallpaper, designing a presentation slide, editing a YouTube thumbnail, preparing a banner for a website, or creating content for a TV display at an event, 1920Ã—1080 is the target resolution.

Resizing images to exact pixel dimensions is a task that traditionally required desktop software like Adobe Photoshop or GIMP. Our browser-based tool eliminates that dependency entirely. By leveraging the HTML5 Canvas API's built-in resampling capabilities, we can resize any input image to exactly 1920Ã—1080 pixels in milliseconds, with no software installation and no file uploads. The tool handles both upscaling (making a smaller image larger) and downscaling (making a larger image smaller), with an optional aspect ratio lock to prevent distortion.

One critical consideration when resizing to 1920Ã—1080 is the aspect ratio of your source image. If your original image is not in a 16:9 ratio (e.g., a portrait photo at 3:4, or a square image at 1:1), forcing it to exactly 1920Ã—1080 will stretch or compress the image, making faces look wide or tall. Our aspect ratio lock feature solves this by calculating the maximum size that fits within the 1920Ã—1080 boundary while preserving the original proportions. If you need to fill exactly 1920Ã—1080 regardless of the input ratio, disable the lock and the tool will perform a precise forced resize.`,
      rejectionTips: [
        'Upscaling a small image (e.g., 400Ã—300) to 1920Ã—1080 will result in a blurry output â€” the Canvas API interpolates new pixels but cannot create detail that was never there.',
        'If your source is a portrait-orientation photo (taller than wide), enabling the aspect ratio lock will result in a 1920Ã—1080 canvas with empty bars on the sides, not a full-bleed fill.',
        'For YouTube thumbnails, 1280Ã—720 (HD) is actually the recommended size â€” 1920Ã—1080 is technically acceptable but unnecessarily large and will slow thumbnail loading.',
        'For presentations (PowerPoint, Google Slides), the default slide size is 1920Ã—1080 in widescreen mode â€” but export quality settings in the software also affect the final pixel dimensions.',
      ],
    },
    howToSteps: [
      'Upload your image',
      'Width and height are pre-set to 1920Ã—1080 â€” adjust if needed',
      'Toggle the aspect ratio lock to control how the resize handles different proportions',
      'Download your Full HD resized image',
    ],
    faqs: [
      {
        question: 'What is 1920Ã—1080 used for?',
        answer:
          '1920Ã—1080 (Full HD / 1080p) is the standard resolution for desktop wallpapers, YouTube thumbnails, presentations, most modern displays, and any content intended for widescreen 16:9 viewing.',
      },
      {
        question: 'Will resizing upscale small images?',
        answer:
          'Yes, but upscaling a small image to 1920Ã—1080 will result in blurriness because the software is interpolating new pixels. For best results, start with an image that is close to or larger than the target dimensions.',
      },
      {
        question: 'What does the "Maintain Aspect Ratio" toggle do?',
        answer:
          'When enabled, the tool scales your image proportionally so it fits within the 1920Ã—1080 boundary without distortion. When disabled, the tool forces the image to exactly 1920Ã—1080, which may stretch or squish the image if the original ratio is different.',
      },
      {
        question: 'What is the 16:9 aspect ratio?',
        answer:
          '16:9 means for every 16 pixels of width, there are 9 pixels of height. At 1920Ã—1080, this ratio is exactly 16:9. Common 16:9 resolutions include 1280Ã—720 (HD), 1920Ã—1080 (Full HD), and 3840Ã—2160 (4K UHD).',
      },
      {
        question: 'Can I resize to a different resolution using this tool?',
        answer:
          'Yes. While the defaults are set to 1920Ã—1080, you can manually type any width and height values into the input boxes and the tool will resize to your specified dimensions.',
      },
    ],
    relatedSlugs: [
      'compress-image-to-100kb',
      'convert-png-to-webp',
      'compress-image-to-50kb',
    ],
    adDensity: 'medium',
  },
];

export const TOOLS: ToolDefinition[] = [...GENERIC_TOOLS, ...COMPLIANCE_TOOLS, ...GENERATED_TOOLS];


// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// LOOKUP HELPERS
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

/** Find a tool by its URL slug */
export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

/** Get all slugs â€” used by generateStaticParams */
export function getAllToolSlugs(): string[] {
  return TOOLS.map((t) => t.slug);
}

/** Get all tools in a specific category */
export function getToolsByCategory(categoryId: string): ToolDefinition[] {
  return TOOLS.filter((t) => t.category === categoryId);
}

/** Get related tools for a given tool, resolved from slugs */
export function getRelatedTools(tool: ToolDefinition): ToolDefinition[] {
  return tool.relatedSlugs
    .map((slug) => getToolBySlug(slug))
    .filter((t): t is ToolDefinition => t !== undefined);
}
