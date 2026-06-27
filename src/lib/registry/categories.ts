// src/lib/registry/categories.ts
// Tool category definitions

import type { ToolCategory } from './types';

export const CATEGORIES: ToolCategory[] = [
  {
    id: 'compress-images',
    name: 'Compress Images',
    description: 'Reduce file size without losing visible quality',
    icon: '📦',
    seoContent: {
      h2: 'Why Compress Images Online?',
      content: 'Image compression is the process of reducing the file size of a digital image while maintaining an acceptable level of visual quality. It is one of the most critical tasks in web development, application form submission, and digital document management. Whether you are a student trying to upload a photo under a strict 50KB limit for a government exam form, or a web developer trying to improve page load speed, compression is a core skill that affects millions of users every day.',
      additionalParagraphs: [
        'Our browser-based compression tools use an intelligent binary search algorithm to achieve precise file size targets. Rather than applying a fixed quality reduction (which produces unpredictable results), our engine iterates through quality levels seven times to find the highest possible quality that fits within your specified file size. This approach guarantees you are never over-compressing — you always get the best quality for your given size constraint.',
        'A critical privacy advantage of our approach: your images are compressed entirely inside your browser using the HTML5 Canvas API and Web Workers. They are never uploaded to any server, never stored remotely, and never transmitted over the internet. This makes our tools the right choice for compressing sensitive documents like passport photos, ID card scans, and application form attachments.',
      ],
      useCases: [
        { title: '🎓 Exam Applicants', desc: 'UPSC, SSC, IBPS, NEET, GATE, and JEE portals enforce strict file size limits (typically 20–300KB). Our tools hit the exact target reliably.' },
        { title: '🌐 Web Developers', desc: 'Large images are the #1 cause of slow page loads. Compressing images improves LCP (Largest Contentful Paint) and Core Web Vitals scores.' },
        { title: '📧 Email Users', desc: 'Gmail and Outlook have attachment limits. Compressing photos before attaching ensures they deliver without triggering size restrictions.' },
        { title: '💼 HR & Recruiters', desc: 'Employee ID photos, application documents, and HR system uploads often have strict size limits. Compress reliably to meet portal requirements.' },
        { title: '✈️ Visa Applicants', desc: 'US DS-160, UK UKVCAS, and Schengen portals have specific file size ceilings for photo uploads. Our compressors target these precisely.' },
        { title: '📸 Content Creators', desc: 'Blog images, YouTube thumbnails, and social media assets need to be lightweight without looking pixelated. Find the optimal quality/size balance.' },
      ],
      faqs: [
        {
          question: 'What is the difference between lossy and lossless compression?',
          answer: 'Lossy compression (used by JPEG and WebP) permanently removes some image data to achieve smaller file sizes. The removed data is intelligently chosen based on what the human eye is least sensitive to — fine colour gradations and high-frequency details. Lossless compression (used by PNG) rearranges data more efficiently without removing any pixels. For photographs, lossy compression at 75–90% quality is virtually indistinguishable from lossless while being 5–10× smaller.',
        },
        {
          question: 'How small can I compress an image without it looking bad?',
          answer: 'This depends on the image content and dimensions. A simple portrait photo at 400×400 pixels can typically be compressed to 20–30KB while remaining recognisable. A complex landscape at 1920×1080 pixels may need 150–200KB for acceptable quality. The key insight: always resize to your required dimensions first, then compress. Compressing a large photo to a very small file size produces much worse results than resizing it first.',
        },
        {
          question: 'Will the portal reject my photo if I compress it too much?',
          answer: 'Government exam portals have both an upper (too large) and lower (too small) file size limit. For example, UPSC requires 20–300KB, and IBPS requires photos under 20KB. As long as you are within the specified range, the portal only checks file size — not visual quality. However, heavy compression may fail human scrutiny during document verification. We recommend targeting the upper end of the allowed range (e.g., 280KB for UPSC, 18KB for IBPS) for maximum visual quality.',
        },
        {
          question: 'Is my photo safe when I use your compressor?',
          answer: 'Yes. All compression happens entirely in your browser using the HTML5 Canvas API. Your image is never transmitted over the internet or stored on any server. The processing runs on your own device\'s CPU inside a Web Worker. When you close the browser tab, no trace of your image remains anywhere outside your own device.',
        },
        {
          question: 'Can I compress a PNG to a specific KB size?',
          answer: 'PNG uses lossless compression, which means the file size is largely determined by the image content and cannot be freely reduced without converting to a lossy format. To compress a PNG to a specific KB target, you generally need to convert it to JPEG or WebP first (both support lossy compression), then apply our binary search algorithm. Our tools handle this conversion + compression pipeline automatically.',
        },
      ],
    },
  },
  {
    id: 'convert-formats',
    name: 'Convert Format',
    description: 'Change image formats instantly in your browser',
    icon: '🔄',
    seoContent: {
      h2: 'Seamless Image Format Conversion',
      content: 'Different platforms, systems, and use cases require different image formats. A format that is perfect for one situation can be completely wrong for another. PNG is excellent for logos and screenshots but enormous for photographs. JPEG is the universal standard for photos but cannot handle transparency. WebP is the modern web standard that outperforms both — but is still not accepted by most government portals. Understanding which format to use, and being able to convert between them instantly, is an essential skill in 2026.',
      additionalParagraphs: [
        'Our format conversion tools run entirely in your browser using the HTML5 Canvas API. When you convert an image, it is drawn onto an off-screen canvas and re-encoded in the target format — a process that takes less than one second for most images. No server upload is required, and no copies of your files are stored anywhere. EXIF metadata (including GPS location data) is automatically stripped during the Canvas encoding cycle, providing a free privacy benefit.',
        'Each format conversion is tuned for its specific use case. PNG-to-WebP conversion uses 80% quality by default — the sweet spot that reduces file size by 25–40% with no perceptible quality loss. PNG-to-JPEG conversion fills transparent areas with white (the correct behaviour for government portal submissions). JPG-to-WebP conversion preserves all colour information while producing a significantly smaller output file.',
      ],
      useCases: [
        { title: '🌐 Website Optimisation', desc: 'Convert PNG and JPEG assets to WebP to reduce page weight by 25–40%. Directly improves LCP and Core Web Vitals, which affect Google search ranking.' },
        { title: '📋 Government Portal Uploads', desc: 'Most Indian government portals (UPSC, SSC, Passport Seva) accept only JPEG. Convert your PNG photos to JPEG instantly before submitting.' },
        { title: '📧 Email Compatibility', desc: 'WebP images do not display inline in most email clients (Outlook, Apple Mail). Convert WebP to JPEG for email attachments and newsletters.' },
        { title: '🖨️ Print Preparation', desc: 'Print services typically require JPEG or TIFF. Convert your design exports from PNG to a print-compatible format.' },
        { title: '💻 Developer Workflow', desc: 'Quickly convert image assets between formats during development without leaving the browser or installing Photoshop.' },
        { title: '🔒 Privacy-Sensitive Documents', desc: 'Converting images through our Canvas-based tool automatically strips all EXIF metadata, including GPS coordinates — before your document reaches any portal.' },
      ],
      faqs: [
        {
          question: 'Does converting PNG to JPEG reduce quality?',
          answer: 'Converting from PNG to JPEG always involves some quality loss because JPEG is a lossy format and PNG is lossless. However, at quality levels of 85–95%, the difference is practically indistinguishable to the human eye for photographic content. For images with sharp edges, flat colours, or text (like screenshots or logos), you may notice some "ringing" artifacts around edges — this is an inherent limitation of the JPEG algorithm, not a flaw in the conversion tool.',
        },
        {
          question: 'What happens to transparency when I convert PNG to JPEG?',
          answer: 'JPEG does not support transparency (an alpha channel). When you convert a transparent PNG to JPEG, the transparent areas must be filled with a colour. Our tool fills them with white by default — which is the correct behaviour for passport photos, application form photos, and other official document submissions that require a white background.',
        },
        {
          question: 'Is WebP supported by all browsers?',
          answer: 'Yes, as of 2026, WebP is supported by all major browsers: Chrome, Firefox, Safari (since v14 in September 2020), Edge, and Opera. Combined global browser market share coverage is approximately 97%. The only users who cannot view WebP are those running very old browsers like Internet Explorer 11 or Safari 13 or older. For general public websites, you can safely use WebP without a fallback.',
        },
        {
          question: 'Why does my government portal reject WebP files?',
          answer: 'Government portal software is typically built on older technology stacks and custom validation logic that pre-dates WebP\'s widespread adoption. Most portals were designed in 2010–2018 and explicitly validate for JPEG format. Even if a modern browser can display WebP, the portal\'s server-side validator will reject it as an unrecognised format. For all government and institutional portal submissions, always convert to JPEG first.',
        },
      ],
    },
  },
  {
    id: 'resize-and-scale',
    name: 'Resize & Scale',
    description: 'Scale images to exact pixel dimensions',
    icon: '📐',
    seoContent: {
      h2: 'Pixel-Perfect Image Resizing for Every Use Case',
      content: 'Image resizing is the process of changing an image\'s pixel dimensions — either scaling it down (downsampling) or up (upsampling). Precise resizing is required in dozens of everyday situations: web banners that must be exactly 1920×1080 pixels, YouTube thumbnails that require 1280×720, social media posts with specific aspect ratios, and government exam photos that must meet minimum dimension requirements.',
      additionalParagraphs: [
        'Our resizer uses bilinear interpolation by default, which produces smooth results without the harsh pixelation of nearest-neighbour scaling or the excessive softness of bicubic. For downscaling (making images smaller), this algorithm produces the best trade-off of sharpness and smooth gradients. The resizing operation runs in a Web Worker, keeping the browser UI perfectly responsive even for large source images.',
        'A common mistake is resizing an image without considering the aspect ratio. Forcing a 3:4 portrait photo into a 1:1 square without cropping first will distort the face — stretching it horizontally or squishing it vertically. Our tools preserve the original aspect ratio by default and add padding (if needed) to fill the target dimensions. For compliance tools that require exact square dimensions, the image is centre-cropped before resizing.',
      ],
      useCases: [
        { title: '🖥️ Desktop Wallpapers', desc: 'Resize any image to 1920×1080 (Full HD), 2560×1440 (QHD), or 3840×2160 (4K) for use as desktop wallpapers or presentation backgrounds.' },
        { title: '📱 Social Media', desc: 'Each platform has specific requirements. Instagram post: 1080×1080. Twitter header: 1500×500. LinkedIn banner: 1584×396. Resize precisely without cropping important content.' },
        { title: '📋 Compliance Dimensions', desc: 'Government exam photos require minimum dimensions (UPSC: 350×350px minimum). Resizing ensures your photo meets the minimum pixel count required by portal validators.' },
        { title: '🎬 Video Thumbnails', desc: 'YouTube requires 1280×720 pixels at a minimum for HD thumbnails. Resize your photos or illustrations to the exact required dimensions.' },
        { title: '🌐 Web Development', desc: 'Responsive images require multiple size variants. Resize your source image to generate 400w, 800w, and 1200w versions for srcset attributes.' },
        { title: '🖨️ Print Sizing', desc: 'Print at specific paper sizes (A4, A3, 4R, 5R) by resizing images to the appropriate pixel dimensions for the target DPI and paper size.' },
      ],
      faqs: [
        {
          question: 'What happens when I upscale a small image to a larger size?',
          answer: 'Upscaling (making an image larger) always involves inventing pixel data that was not in the original image. The algorithm must guess what the new pixels should look like by interpolating between neighbouring pixels. This typically results in a blurry or soft-looking image. The more you upscale (e.g., 200×200 to 1920×1080 is a 9.6× increase), the more noticeable the blurriness. For best results, always start from the highest-resolution source image available.',
        },
        {
          question: 'Will resizing affect my image\'s file size?',
          answer: 'Yes, directly and significantly. Image file size is roughly proportional to the number of pixels. A 4000×3000 image has 12 million pixels; a 1920×1080 version has 2 million pixels — 83% fewer pixels. Resizing to 1920×1080 and then saving at the same JPEG quality level will produce a file roughly 83% smaller. This is why resizing to required dimensions before compressing produces much better results than compressing a large image directly.',
        },
        {
          question: 'What is the difference between resize and crop?',
          answer: 'Resizing changes the pixel dimensions of the entire image — the whole composition is scaled up or down. Cropping removes portions of the image to achieve a specific aspect ratio or focus area, without scaling. For example, to make a landscape photo into a square for Instagram, you would crop it (removing the sides) rather than resize it (which would distort the proportions). Many compliance tools require both: first crop to the correct aspect ratio, then resize to meet minimum pixel dimensions.',
        },
      ],
    },
  },
  {
    id: 'crop-images',
    name: 'Crop & Aspect Ratio',
    description: 'Crop images to specific aspect ratios',
    icon: '✂️',
    seoContent: {
      h2: 'Precise Image Cropping for Documents, Social Media, and Web',
      content: 'Cropping an image means removing portions of it to achieve a specific composition or aspect ratio. Unlike resizing, cropping does not stretch or distort the remaining pixels — it simply defines a rectangular region to keep and discards everything outside it. This is essential for passport and visa photos (which must be square), social media posts (which have specific aspect ratios), and document photos (which must show the face in a specific proportion of the frame).',
      additionalParagraphs: [
        'The most critical cropping requirement in document photography is the face coverage rule. For US visa photos, the head must occupy 50–69% of the frame height. For Indian passport photos, the face from chin to crown must be 25–35mm in a 51×51mm photo. For UPSC, the face must cover at least 75% of the frame. Getting this ratio correct is the difference between an accepted and rejected application.',
        'Our cropping tools use aspect-ratio-locked cropping, which ensures the output dimensions are exactly correct for the target document type. You choose the tool (US Visa Photo, UPSC Photo, etc.) and the cropping guide automatically constrains the selection to the required ratio. There is no way to accidentally produce a portrait photo for a format that requires square, or vice versa.',
      ],
      useCases: [
        { title: '🛂 Passport & Visa Photos', desc: 'Crop to the exact 1:1 square required by US, UK, Indian, and Schengen passport and visa applications — with the face centred and correctly proportioned.' },
        { title: '📋 Exam Application Photos', desc: 'UPSC requires square format; SSC requires 3.5×4.5cm portrait. Crop to the exact aspect ratio required by your specific exam portal.' },
        { title: '📱 Instagram & Social Media', desc: 'Crop landscape photos to 1:1 for Instagram posts, 9:16 for Stories and Reels, and 16:9 for Twitter/X and YouTube thumbnails.' },
        { title: '🖥️ Website Hero Images', desc: 'Web designers often need images at specific aspect ratios for responsive layouts. Crop to 16:9, 4:3, or 3:2 without distorting the subject.' },
        { title: '🪪 ID Card Photos', desc: 'PAN card, Aadhaar, and OCI card photos require portrait orientation at specific aspect ratios. Crop your photo to the exact required ratio.' },
        { title: '🖨️ Photo Prints', desc: 'Standard photo print sizes (4R, 5R, 6R) have specific aspect ratios. Crop your digital photo to match the print size to avoid unexpected automatic cropping by the print lab.' },
      ],
      faqs: [
        {
          question: 'What does 1:1 aspect ratio mean?',
          answer: 'A 1:1 aspect ratio means the width and height are equal — it is a perfect square. This is required for US visa photos (600×600 pixels), Indian passport photos (51×51mm), and Instagram feed posts (1080×1080 pixels). Most smartphone photos are taken in 4:3 or 3:2 format, which means you need to crop them to 1:1 before submitting to portals that require a square photo.',
        },
        {
          question: 'What is the correct face proportion for passport photos?',
          answer: 'Requirements vary by country. For US visas: the head must be 50–69% of the total image height. For Indian passports: the face (chin to crown) must be 25–35mm in a 51×51mm photo (approximately 49–69% of height). For Schengen visas: 70–80% of image height. In all cases, more face coverage is generally better than less, as long as you stay within the allowed range and the full head is visible.',
        },
        {
          question: 'Can I crop an image to a specific pixel size?',
          answer: 'Cropping selects a region of the image at its original resolution. To get a specific pixel output (e.g., exactly 600×600 pixels for a US visa photo), you typically crop to the correct aspect ratio first, then resize the cropped region to the target pixel dimensions. Our compliance tools combine both steps automatically: you adjust the crop area, and the tool outputs at the exact required dimensions.',
        },
      ],
    },
  },
  {
    id: 'privacy-metadata',
    name: 'Privacy & Metadata',
    description: 'Strip EXIF data and protect your privacy',
    icon: '🔒',
    seoContent: {
      h2: 'Protect Your Privacy by Removing Hidden Image Metadata',
      content: 'Every photo you take with a smartphone or digital camera contains hidden EXIF (Exchangeable Image File Format) metadata that travels with the image when you share or upload it. This data can include your exact GPS location (accurate to within 10 metres), the make and model of your device, the date and time the photo was taken, and sometimes your camera settings and software version. Most people sharing images online have no idea this information is embedded in every photo.',
      additionalParagraphs: [
        'The privacy implications of EXIF data are significant. A photo of your lunch taken at home and shared publicly on social media contains your home address via GPS coordinates. A series of photos posted under different aliases can be linked to a single device via camera fingerprinting from EXIF lens data. For official document submissions — passport photos, government ID uploads, court filings — EXIF data means your personal location is embedded in every document you submit.',
        'Our metadata stripping tools use a clean approach: images are drawn onto an HTML5 Canvas element and re-encoded using the browser\'s native image encoder. This encoding cycle produces a fresh, clean image file with absolutely no EXIF data — not reduced metadata, but zero metadata. This is the same privacy benefit that all of our compression and conversion tools provide as a side effect of the Canvas-based processing pipeline.',
      ],
      useCases: [
        { title: '🏠 Home Privacy', desc: 'Remove GPS coordinates before sharing photos taken at your home address on social media, marketplaces, or public forums.' },
        { title: '📄 Document Submissions', desc: 'Strip metadata from passport photos, ID scans, and government document submissions to prevent embedding your device and location data in official filings.' },
        { title: '⚖️ Legal & Professional', desc: 'Lawyers, journalists, and researchers often need to share photos without revealing the source device, location, or timestamp metadata for confidentiality reasons.' },
        { title: '🛒 Online Selling', desc: 'Product photos taken at your home or workshop reveal your location via EXIF GPS. Strip metadata before listing on marketplaces.' },
        { title: '👨‍💻 Developer Use', desc: 'Ensure user-uploaded images in your application have EXIF stripped before storage or serving — protecting your users\' privacy automatically.' },
        { title: '📰 Media & Journalism', desc: 'Sources sharing images need metadata stripped to protect their identity and location from being revealed through the file\'s embedded data.' },
      ],
      faqs: [
        {
          question: 'What is EXIF data and what information does it contain?',
          answer: 'EXIF (Exchangeable Image File Format) is a standard for storing metadata in image files, particularly JPEG and TIFF. It can contain: GPS latitude, longitude, and altitude; camera make and model (e.g., "Apple iPhone 15 Pro"); software version (e.g., "iOS 17.4.1"); exact date and time the photo was taken; camera settings (aperture, shutter speed, ISO, focal length); and image dimensions. All of this information is embedded in the image file and transmitted when you share or upload the photo.',
        },
        {
          question: 'Do social media platforms remove EXIF data automatically?',
          answer: 'Some do, some don\'t. Instagram and Twitter/X strip EXIF on upload. Facebook strips most EXIF but retains some. WhatsApp strips location data but may retain device info. Google Drive and Dropbox do NOT strip EXIF. Email attachments do NOT strip EXIF. For complete certainty that your metadata is removed — especially for email attachments and portal uploads — strip EXIF manually before uploading.',
        },
        {
          question: 'Is it safe to strip EXIF from important documents?',
          answer: 'Yes. EXIF stripping only removes the hidden metadata — it does not alter the visible image in any way. The pixels, colours, and composition of the photo remain exactly unchanged. The only difference is that the file no longer contains the hidden technical and location data. Government portals, visa systems, and exam portals do not require EXIF data and are not affected by its removal.',
        },
        {
          question: 'Does stripping EXIF change the file size?',
          answer: 'Yes, slightly. EXIF data typically adds 5–100KB to a JPEG file depending on the GPS data and other fields. Stripping it reduces the file size by this amount. For most images, this saving is a minor bonus — but it can be useful for portal uploads where you are very close to a file size limit.',
        },
      ],
    },
  },
  {
    id: 'indian-exams',
    name: 'Indian Exam Forms',
    description: 'Photo & signature formatting for UPSC, SSC, IBPS, GATE, JEE, NEET',
    icon: '📋',
    seoContent: {
      h2: 'Strict Compliance for Indian Government Exam Photo Uploads',
      content: 'Applying for Indian government examinations — UPSC Civil Services, SSC CGL, SSC CHSL, IBPS PO, IBPS Clerk, NEET UG, JEE Main, GATE, and dozens of state PSC exams — requires uploading a passport-size photograph and signature in very specific digital formats. Each exam has its own file size window, dimension requirements, and format rules. Getting any of these wrong results in an automatic portal rejection or, worse, a disqualification during the document verification stage after you have already passed the written exam.',
      additionalParagraphs: [
        'The most common and preventable failure mode is file size. IBPS has a strict 20KB upper limit for photos — one of the tightest in any Indian exam. UPSC accepts up to 300KB. SSC\'s OTR portal requires 20–50KB. NEET requires 10–200KB. A single compression tool that blindly compresses to "small as possible" will undershoot the minimum for some portals (getting rejected as "file too small") while overshooting the maximum for others. The correct approach is a tool that targets a specific size range for each exam.',
        'Beyond size, format matters. All Indian competitive exam portals require JPEG (JPG) format exclusively. PNG files — even if renamed with a .jpg extension — are rejected because the portal validates the file\'s binary signature (magic bytes), not just the extension. A common mistake: candidates convert their PNG photo to JPEG using a tool that produces a corrupted or incorrectly formatted JPEG. Our tools produce standard, fully compliant JPEG files validated against JFIF format requirements.',
      ],
      useCases: [
        { title: '🏛️ UPSC Civil Services', desc: 'JPEG, 20–300KB, 350×350px minimum, 1000×1000px maximum, square format, white background, name and date at bottom.' },
        { title: '📊 SSC CGL & CHSL', desc: 'JPEG, 20–50KB, 3.5×4.5cm portrait orientation, white background, taken within 3 months.' },
        { title: '🏦 IBPS PO & Clerk', desc: 'JPEG, under 20KB, 200×230px, white background. One of the strictest size limits in Indian competitive exams.' },
        { title: '🩺 NEET UG', desc: 'JPEG, 10–200KB, passport-size portrait, clear white background, name and date printed at bottom.' },
        { title: '⚙️ GATE', desc: 'JPEG, 5–100KB, minimum 240×320px portrait, plain white or light background.' },
        { title: '✍️ Signature Upload', desc: 'All exams require a scanned signature: black/blue ink on white paper, JPEG format, specific KB limits per exam.' },
      ],
      faqs: [
        {
          question: 'Why does my photo get rejected even though it looks correct?',
          answer: 'The most common hidden reason is file format. If you have a PNG file and rename it to .jpg without actually converting it, the portal will detect the PNG binary signature and reject it as "invalid format." Always convert the file to genuine JPEG before uploading. The second most common reason is file size — most portals have both a minimum AND a maximum. Tools that compress to "as small as possible" often produce files below the minimum threshold.',
        },
        {
          question: 'Can I use the same photo for multiple exams?',
          answer: 'Generally yes, as long as: (a) the photo was taken within the recency requirement for each exam (typically 3–6 months), (b) you reformat it to the specific size and dimension requirements of each portal, and (c) the photo still looks like your current appearance. Do not use the same compressed file across portals — each exam has different file size limits, so you should recompress for each specific target.',
        },
        {
          question: 'What should I do if my application is rejected after the deadline?',
          answer: 'Most exam authorities provide a correction/modification window of 5–7 days after the application closure date. During this window, you can log in to the portal and re-upload corrected documents. If you miss this window, the application is typically permanently rejected with no fee refund. Always verify your uploaded photo and signature immediately after submission — do not wait for a rejection notice.',
        },
        {
          question: 'Does the photo need to have my name and date written on it?',
          answer: 'For UPSC and NTA exams (NEET, JEE), yes — the candidate\'s name and the date the photo was taken must be visible at the bottom of the photograph. This can be done physically (printed on the photo paper) or digitally (added as a text annotation to the bottom strip of the image using any basic editor). Many other exams (SSC, IBPS) do not require this, but it does not hurt to include it.',
        },
      ],
    },
  },
  {
    id: 'passports',
    name: 'Passport Photos',
    description: 'Format photos to exact passport specifications worldwide',
    icon: '🛂',
    seoContent: {
      h2: 'Passport Photo Requirements by Country — Get It Right the First Time',
      content: 'Passport photo specifications vary significantly by country, and getting them wrong results in delays of weeks to months — particularly damaging if you have booked travel. The most critical differences are in physical size (Indian passport: 51×51mm square; US passport: 51×51mm; UK passport: 35×45mm; EU/Schengen: 35×45mm), background colour (most require pure white, but UK accepts cream), and head coverage requirements (which range from 50% to 80% of frame height depending on the issuing authority).',
      additionalParagraphs: [
        'The photo requirements for passports worldwide were significantly updated in 2021–2024 to align with ICAO (International Civil Aviation Organization) Document 9303 biometric standards. The most notable change: glasses are now prohibited in virtually all biometric passports globally. This affects Indian passports (MEA updated rules in 2021), US passports (updated 2023), Schengen passports (ICAO 2024 update), and UK passports (ICAO 2024 update). Even prescription glasses must be removed.',
        'A key difference between submitting a digital photo (for online portals) vs. a physical printed photo (for in-person appointments at Passport Seva Kendras or consulates) is the validation process. Digital uploads are validated by automated software that checks file size and dimensions. Physical photos are checked by a human officer who can reject for composition issues, shadow, background colour, or photo age — even if the digital specifications are correct. Always bring photos that are compositionally perfect, not just technically correct.',
      ],
      useCases: [
        { title: '🇮🇳 Indian Passport', desc: '51×51mm square, plain white background, JPEG, 10–500KB for Passport Seva portal. MEA mandates no glasses since 2021.' },
        { title: '🇺🇸 US Passport', desc: '51×51mm square (2×2 inches), pure white background, JPEG, head 50–69% of frame height.' },
        { title: '🇬🇧 UK Passport', desc: '35×45mm portrait, cream or off-white background, JPEG. Part of the UK Standard Visitor and settlement visa process.' },
        { title: '🇪🇺 Schengen Countries', desc: '35×45mm portrait (ICAO standard), pure white background, head 70–80% of frame height. Applies to Germany, France, Italy, Netherlands, Spain, and others.' },
        { title: '🇨🇦 Canadian Passport', desc: '50×70mm portrait (unique dimensions), plain white or light-coloured background, head 31–36mm from chin to crown.' },
        { title: '🇦🇺 Australian Passport', desc: '35×45mm portrait, plain white or off-white background, head 32–36mm from chin to crown. Photo must be taken by a photographer (self-taken photos discouraged).' },
      ],
      faqs: [
        {
          question: 'Can I take my own passport photo at home?',
          answer: 'Yes, for most countries. The key requirements are: plain white background, good even lighting with no shadows on the face, taken at eye level (not a selfie angle), and the correct framing and proportions. Use our country-specific passport photo formatter to crop and format your home photo to exact specifications. Physical photos for in-person submission should be printed on glossy photo paper at a pharmacy or photo lab.',
        },
        {
          question: 'How recent does a passport photo need to be?',
          answer: 'Most countries require the photo to be taken within the last 6 months. India\'s Passport Seva requires photos within 6 months. The US requires within 6 months. The UK requires within 1 month for some applications. The concern is that an old photo may no longer represent your current appearance, which can cause verification failures at border control. Always take a fresh photo during your application period.',
        },
        {
          question: 'Why are glasses no longer allowed in passport photos?',
          answer: 'Biometric passports use facial recognition algorithms to match your photo with border scanners. Glasses interfere with this matching in two ways: lens reflections create glare that obscures facial features, and the frames partially occlude the eyes. ICAO updated their biometric standards to prohibit glasses, and most countries have adopted this change between 2021 and 2024. Contact lenses are permitted as they do not obstruct or alter facial features.',
        },
      ],
    },
  },
  {
    id: 'visas',
    name: 'Visa Applications',
    description: 'Photo formatting for US, UK, Schengen, and Canada visas',
    icon: '✈️',
    seoContent: {
      h2: 'Visa Photo Requirements — Precise Compliance for Every Country',
      content: 'Visa photo requirements are among the most strictly enforced document specifications in government administration. A visa application rejected due to an incorrect photo means restarting the appointment booking process, losing the application fee in some cases, and potentially missing travel deadlines. Unlike passport photos (which you can often retake and resubmit relatively easily), visa appointment slots for high-demand countries like the US and UK can have waiting times of weeks to months.',
      additionalParagraphs: [
        'The critical differences between visa photo requirements across countries: The US DS-160 visa form requires a 600×600 pixel square JPEG under 240KB with a pure white background. The UK UKVCAS accepts up to 4MB but requires a 35×45mm portrait with cream/off-white background. Schengen applications require 35×45mm portrait with pure white background and strict 70–80% head coverage. Canada\'s eTA/visa requires a 50×70mm portrait with specific chin-to-crown measurements.',
        'A common source of confusion: visa photos and passport photos for the same country are not always identical. The US passport requires a 2×2 inch (51×51mm) photo for physical submission, but the DS-160 online form requires a digital 600×600 pixel JPEG. Canada\'s passport is 50×70mm but visa applications submitted through VFS use slightly different dimension specifications. Always check the specific requirements for the specific visa type you are applying for, not just the country\'s general photo rules.',
      ],
      useCases: [
        { title: '🇺🇸 US B1/B2 & F1 Visa (DS-160)', desc: 'Square JPEG, 600×600 pixels minimum, 240KB maximum, pure white background, taken within 6 months.' },
        { title: '🇬🇧 UK Standard Visitor Visa', desc: '35×45mm portrait, cream or off-white background, up to 4MB for digital upload via UKVCAS.' },
        { title: '🇪🇺 Schengen Tourist Visa', desc: '35×45mm portrait, pure white background, 50–300KB digital file, head 70–80% of frame height.' },
        { title: '🇨🇦 Canada Visitor Visa', desc: '50×70mm portrait, plain white or light background, head 31–36mm from chin to crown.' },
        { title: '🇦🇪 UAE Tourist Visa', desc: 'Passport-size photo with white background, JPEG format. Requirements mirror standard ICAO biometric passport photo.' },
        { title: '🇦🇺 Australia Visitor Visa', desc: '35×45mm portrait following standard ICAO biometric requirements, submitted digitally via ImmiAccount.' },
      ],
      faqs: [
        {
          question: 'Can I use my passport photo for my visa application?',
          answer: 'Sometimes, but not always. US visa applications require a specific digital format (600×600 pixel JPEG, max 240KB) that differs from the standard printed 51×51mm passport photo. UK visa applications accept 35×45mm which matches the UK passport photo format. Schengen visa photos are the same format as Schengen passport photos. Check the specific digital requirements for each visa type — do not assume they are the same as the passport photo requirements for the same country.',
        },
        {
          question: 'What if my visa photo is rejected at the consulate?',
          answer: 'If your photo is rejected at a visa appointment, the consulate will typically ask you to return with a corrected photo. You will need to rebook the appointment (which may have a waiting time) and pay any associated fees. In some cases (like VFS-operated US visa centres), same-day photo retakes may be available at an additional cost. To avoid this, always verify your photo using our formatters before your appointment, and if possible, bring backup printed copies of your formatted photo.',
        },
        {
          question: 'How long before my visa interview should I take my photo?',
          answer: 'Most visa authorities require the photo to be taken within the last 6 months. Take the photo as close to your application date as possible, especially if you have changed your appearance recently (new hairstyle, beard, glasses, etc.). A photo that looks noticeably different from your current appearance can cause verification issues at your appointment, even if it technically meets all the technical specifications.',
        },
      ],
    },
  },
  {
    id: 'indian-id-documents',
    name: 'Indian ID Documents',
    description: 'Photo formatting for PAN, Aadhaar, and OCI cards',
    icon: '🪪',
    seoContent: {
      h2: 'Correct Photo Formats for PAN Card, Aadhaar, and OCI Applications',
      content: 'Indian identity document applications — PAN cards through NSDL/UTI, Aadhaar enrollment and updates through UIDAI, and OCI (Overseas Citizen of India) cards through the Ministry of External Affairs — each have specific photo and signature requirements. Getting these right matters because identity document rejections can delay tax filings, bank account openings, and international travel for weeks.',
      additionalParagraphs: [
        'The key difference between the two PAN card portals (NSDL/Protean and UTI/UTIITSL) is the file size limit. NSDL accepts photos up to 120KB, while UTI has a stricter 50KB limit. If you format your photo for NSDL (say, 100KB), it will be rejected by UTI. The safest approach is to format for the stricter UTI specification (targeting 45KB) — this works on both portals. Our PAN Card Photo Formatter defaults to this cross-portal compatible target.',
        'OCI card applications are processed through the Passport Seva portal and follow similar specifications to Indian passport photos — white background, square format, recent photograph. However, OCI applications typically require additional supporting documents (marriage certificates, Indian passport copies of parents, etc.), all of which must also meet specific dimension and file size requirements for portal upload.',
      ],
      useCases: [
        { title: '🏛️ PAN Card (NSDL)', desc: 'JPEG, 20–120KB, portrait orientation 3.5×4.5cm, plain white background. For income tax and financial transactions.' },
        { title: '🏛️ PAN Card (UTI)', desc: 'JPEG, 5–50KB (stricter limit), portrait orientation 3.5×4.5cm, plain white background.' },
        { title: '🪪 Aadhaar Enrollment', desc: 'In-person enrollment captures biometric photo directly. For correction/update requests submitted online, JPEG under 1MB is acceptable.' },
        { title: '🌏 OCI Card', desc: 'Overseas Citizen of India card applications follow Indian passport photo specs: 51×51mm square, white background, JPEG, 10–500KB.' },
        { title: '✍️ Document Signatures', desc: 'PAN and OCI applications require an uploaded signature — black/blue ink on white paper, JPEG format, under the portal-specific KB limit.' },
        { title: '🎓 Student Documents', desc: 'University applications, scholarship forms, and educational certificates often require ID photos in the same format as PAN card specifications.' },
      ],
      faqs: [
        {
          question: 'What is the difference between NSDL and UTI for PAN card applications?',
          answer: 'Both NSDL (Protean eGov Technologies) and UTI (UTIITSL) are authorised by the Income Tax Department to process PAN applications. The process and output are identical — you get the same PAN card regardless of which portal you use. The key difference for photo uploads is the file size limit: NSDL accepts photos up to 120KB, while UTI has a stricter 50KB limit. For fresh PAN applications, either portal works. If you are specifically required to use one (e.g., through an employer or bank), check which portal they specify.',
        },
        {
          question: 'Can I use my passport photo for PAN card application?',
          answer: 'A physical passport photo (51×51mm square) is the wrong dimensions for a PAN card application (which requires 3.5×4.5cm portrait). However, you can use the same digital source photo — just reformat it to portrait orientation and compress it to the 5–50KB range. Our PAN Card Photo Formatter handles this automatically: upload any source photo and it produces a correctly dimensioned, correctly sized JPEG ready for NSDL or UTI portal upload.',
        },
        {
          question: 'How do I update my Aadhaar photo?',
          answer: 'Aadhaar photo updates must be done in person at an Aadhaar Enrolment Centre (Passport Seva Kendra, Common Service Centre, or bank branch with Aadhaar services). UIDAI does not currently support online self-service photo updates. The centre will capture a fresh biometric photo, fingerprints, and iris scans on the spot. Bring your existing Aadhaar card and any supporting identity documents required by the centre.',
        },
      ],
    },
  },
  {
    id: 'signature-resizer',
    name: 'Signature Resizer',
    description: 'Resize and compress signatures for exam and document uploads',
    icon: '✍️',
    seoContent: {
      h2: 'Signature Formatting for Exam and Document Portals',
      content: 'Uploading a digital signature is required alongside the photograph for virtually every Indian competitive exam and identity document application. The signature must be written on plain white paper with a black or blue ballpoint pen, then scanned or photographed to produce a digital file that meets the portal\'s specific size, dimension, and format requirements. This sounds simple, but getting it wrong is one of the most common application errors — and unlike the photograph (which many candidates prepare in advance), the signature is often scanned at the last minute without checking the specifications.',
      additionalParagraphs: [
        'Each exam portal has different signature file size limits. IBPS requires 10–20KB in landscape orientation. UPSC accepts up to 300KB. SSC OTR requires 10–20KB. NEET accepts 4–30KB. A single signature scan at standard resolution will be too large for most portals. The key is to scan at an appropriate resolution (150–200 DPI produces a high-quality scan at a manageable file size) and then compress to within the allowed range.',
        'Common mistakes with signature uploads: scanning at 72 DPI (produces a blurry, low-quality image that looks unprofessional), scanning in portrait mode (the result is a tall thin image instead of the expected wide format), using coloured paper (yellow, pink, or lined paper is rejected — use plain white only), and signing with a pencil or erasable pen instead of ballpoint. These mistakes are caught during manual scrutiny, not always at upload time.',
      ],
      useCases: [
        { title: '📋 UPSC Applications', desc: 'Signature upload required alongside photo. JPEG format, similar size limits to the photograph (20–300KB range).' },
        { title: '🏦 IBPS PO & Clerk', desc: 'Strict 10–20KB limit, landscape orientation, 140×60px. One of the most restrictive signature requirements in any exam.' },
        { title: '🩺 NEET UG', desc: 'Signature required alongside photo. JPEG, 4–30KB. Must be on white paper with black/blue pen.' },
        { title: '📊 SSC OTR Portal', desc: 'Signature upload for all SSC exams (CGL, CHSL, CPO) through the One Time Registration portal. 10–20KB JPEG.' },
        { title: '🏛️ PAN Card', desc: 'Signature required for all PAN card applications. NSDL accepts up to 100KB; UTI requires under 50KB.' },
        { title: '🌏 OCI Applications', desc: 'Signature required alongside photo for OCI card applications through the Passport Seva portal.' },
      ],
      faqs: [
        {
          question: 'How should I scan my signature for exam portals?',
          answer: 'Sign your name in black ballpoint pen on a plain white sheet of A4 paper. Give it a few seconds to dry. Place the paper on a flat surface and photograph it from directly above with your phone in landscape orientation (rotate the phone sideways). Ensure even lighting with no shadows across the signature. Transfer to your computer and crop tightly around the signature with some white margin on all sides. Save as JPEG and compress to within the portal\'s specified range using our Signature Resizer.',
        },
        {
          question: 'Why must the signature be in landscape orientation?',
          answer: 'Exam portals display the signature in a landscape (wider than tall) format on the application form and admit card. If you upload a portrait-orientation signature image, the portal either rejects it or displays it sideways, which looks wrong on your admit card. Always capture your signature in landscape orientation — hold your phone sideways when photographing it, or rotate the scan to landscape before uploading.',
        },
        {
          question: 'Can I type my signature instead of handwriting it?',
          answer: 'No. Exam authorities explicitly require a handwritten signature — a typed or digitally generated signature is not acceptable. At exam centres, invigilators compare the admit card signature with a physical signature on the attendance sheet. A typed signature will fail this comparison check. Sign with your normal, consistent handwriting signature — the same one you use on official documents.',
        },
        {
          question: 'What if my signature file is too large to upload?',
          answer: 'Signature scans are often larger than expected because scanners default to high DPI settings. A signature scanned at 600 DPI on an A4 sheet can easily be 5–10MB — 500× larger than the typical 10–20KB portal limit. First, crop tightly around just the signature (removing most of the white paper). Then use our Signature Resizer to compress the cropped signature to within the required file size range.',
        },
      ],
    },
  },
];

/** Look up a category by its ID */
export function getCategoryById(id: string): ToolCategory | undefined {
  return CATEGORIES.find((cat) => cat.id === id);
}
