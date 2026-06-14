const fs = require('fs');

const docs = [
  { slug: 'neet-photo-resize', title: 'NEET', w: 413, h: 531, min: 10, max: 200, cat: 'indian-exams' },
  { slug: 'jee-main-photo', title: 'JEE Main', w: 413, h: 531, min: 10, max: 200, cat: 'indian-exams' },
  { slug: 'gate-photo-resize', title: 'GATE Photo', w: 480, h: 640, min: 20, max: 200, cat: 'indian-exams' },
  { slug: 'gate-signature', title: 'GATE Signature', w: 530, h: 260, min: 5, max: 200, cat: 'signature-resizer' },
  { slug: 'ibps-po-photo', title: 'IBPS PO', w: 200, h: 230, min: 20, max: 50, cat: 'indian-exams' },
  { slug: 'ibps-clerk-photo', title: 'IBPS Clerk', w: 200, h: 230, min: 20, max: 50, cat: 'indian-exams' },
  { slug: 'ibps-signature', title: 'IBPS Signature', w: 140, h: 60, min: 10, max: 20, cat: 'signature-resizer' },
  { slug: 'rrb-ntpc-photo', title: 'RRB NTPC', w: 320, h: 240, min: 20, max: 50, cat: 'indian-exams' },
  { slug: 'rrb-alp-photo', title: 'RRB ALP', w: 320, h: 240, min: 20, max: 50, cat: 'indian-exams' },
  { slug: 'rrb-signature', title: 'RRB Signature', w: 140, h: 60, min: 10, max: 40, cat: 'signature-resizer' },
  { slug: 'ssc-chsl-photo', title: 'SSC CHSL', w: 200, h: 240, min: 20, max: 50, cat: 'indian-exams' },
  { slug: 'ssc-mts-photo', title: 'SSC MTS', w: 200, h: 240, min: 20, max: 50, cat: 'indian-exams' },
  { slug: 'ssc-signature', title: 'SSC Signature', w: 140, h: 60, min: 10, max: 20, cat: 'signature-resizer' },
  { slug: 'uk-passport-photo', title: 'UK Passport', w: 600, h: 750, min: 50, max: 10000, cat: 'passports' },
  { slug: 'uk-visa-photo', title: 'UK Visa', w: 413, h: 531, min: 50, max: 240, cat: 'visas' },
  { slug: 'schengen-visa-photo', title: 'Schengen Visa', w: 413, h: 531, min: 20, max: 240, cat: 'visas' },
  { slug: 'canada-pr-photo', title: 'Canada PR', w: 420, h: 540, min: 60, max: 240, cat: 'visas' },
  { slug: 'canada-visa-photo', title: 'Canada Visa', w: 420, h: 540, min: 60, max: 240, cat: 'visas' },
  { slug: 'australia-visa-photo', title: 'Australia Visa', w: 413, h: 531, min: 50, max: 500, cat: 'visas' },
  { slug: 'indian-passport-photo', title: 'Indian Passport', w: 630, h: 810, min: 20, max: 100, cat: 'passports' },
  { slug: 'aadhaar-card-photo', title: 'Aadhaar Card', w: 300, h: 400, min: 20, max: 50, cat: 'indian-id-documents' },
  { slug: 'pan-card-uti-photo', title: 'PAN Card (UTI)', w: 213, h: 213, min: 10, max: 30, cat: 'indian-id-documents' },
  { slug: 'pan-card-uti-signature', title: 'PAN Card Signature (UTI)', w: 400, h: 200, min: 10, max: 60, cat: 'signature-resizer' },
  { slug: 'oci-card-photo', title: 'OCI Card', w: 600, h: 600, min: 20, max: 200, cat: 'indian-id-documents' },
];

let output = `import { ToolDefinition } from './types';

export const GENERATED_TOOLS: ToolDefinition[] = [
`;

docs.forEach(t => {
  output += `  {
    slug: '${t.slug}',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: '${t.cat}',
    title: 'Resize ${t.title} Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your ${t.title} application photo to the exact ${t.min}-${t.max}KB size and ${t.w}x${t.h} pixel dimensions required.',
    h1: '${t.title} Resizer',
    keywords: ['${t.title} photo size', '${t.title} photo resize', '${t.title} photo requirements'],
    heroDescription: 'The ${t.title} has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: ${t.w}, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: ${t.h}, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: ${t.max - 1}, min: ${t.min}, max: ${t.max} }
    ],
    compliance: {
      targetWidth: ${t.w}, targetHeight: ${t.h}, minSizeKB: ${t.min}, maxSizeKB: ${t.max},
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '${t.min} KB to ${t.max} KB' },
        { label: 'Dimensions', value: '${t.w} x ${t.h} pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the ${t.title} requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid ${t.min} KB to ${t.max} KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\\n\\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the ${t.w}x${t.h} pixel format.',
      'The compression engine adjusts the quality to ensure the file is under ${t.max}KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my ${t.title} photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under ${t.max}KB), incorrect dimensions (${t.w}x${t.h}), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
`;
});

output += `];\n`;

fs.writeFileSync('src/lib/registry/generatedTools.ts', output);
console.log('Successfully generated ' + docs.length + ' tools into src/lib/registry/generatedTools.ts');
