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
      content: 'Image compression is the most effective way to improve website loading speeds, save storage space, and ensure your files meet strict upload requirements. Our browser-based compression tools use advanced algorithms to intelligently reduce file size while preserving maximum visual quality. Whether you need to hit a strict 50KB limit for an application form or just want to optimize photos for email, everything happens securely on your device. We support lossy compression for JPEG and WebP, and lossless optimization for PNG.'
    }
  },
  {
    id: 'convert-formats',
    name: 'Convert Format',
    description: 'Change image formats instantly in your browser',
    icon: '🔄',
    seoContent: {
      h2: 'Seamless Image Format Conversion',
      content: 'Different platforms require different image formats. While PNGs are perfect for transparent graphics and sharp text, they are incredibly heavy. Converting PNGs to modern next-gen formats like WebP can instantly reduce file size by up to 35% without losing quality, vastly improving SEO and Core Web Vitals. Conversely, if you need universal compatibility for older systems, converting WebP to standard JPEG guarantees your images will render everywhere. Our converter handles these transformations entirely client-side, meaning your private files are never uploaded to a remote server.'
    }
  },
  {
    id: 'resize-and-scale',
    name: 'Resize & Scale',
    description: 'Scale images to exact pixel dimensions',
    icon: '📐',
  },
  {
    id: 'crop-images',
    name: 'Crop & Aspect Ratio',
    description: 'Crop images to specific aspect ratios',
    icon: '✂️',
  },
  {
    id: 'privacy-metadata',
    name: 'Privacy & Metadata',
    description: 'Strip EXIF data and protect your privacy',
    icon: '🔒',
  },
  {
    id: 'indian-exams',
    name: 'Indian Exam Forms',
    description: 'Photo & signature formatting for UPSC, SSC, IBPS, GATE, JEE, NEET',
    icon: '📋',
    seoContent: {
      h2: 'Strict Compliance for Indian Government Exams',
      content: 'Applying for Indian government examinations (like UPSC, SSC CGL, IBPS PO, and NEET) requires absolute precision when uploading documents. A single mistake in your photograph\'s dimensions, background color, or file size can result in automatic rejection of your application during the scrutiny phase. Our specialized formatting tools are pre-configured to output exactly the required specifications: whether it\'s a 350x350 pixel image under 300KB for UPSC, or a perfectly cropped 4.5cm x 3.5cm photo for SSC. Never risk your admit card over a formatting error again.'
    }
  },
  {
    id: 'passports',
    name: 'Passport Photos',
    description: 'Format photos to exact passport specifications worldwide',
    icon: '🛂'
  },
  {
    id: 'visas',
    name: 'Visa Applications',
    description: 'Photo formatting for US, UK, Schengen, and Canada visas',
    icon: '✈️'
  },
  {
    id: 'indian-id-documents',
    name: 'Indian ID Documents',
    description: 'Photo formatting for PAN, Aadhaar, and OCI cards',
    icon: '🪪'
  },
  {
    id: 'signature-resizer',
    name: 'Signature Resizer',
    description: 'Resize and compress signatures for exam and document uploads',
    icon: '✍️'
  },
];

/** Look up a category by its ID */
export function getCategoryById(id: string): ToolCategory | undefined {
  return CATEGORIES.find((cat) => cat.id === id);
}
