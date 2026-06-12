// src/lib/registry/toolRegistry.ts
// ★ Central data configuration — single source of truth for all tools
// This file feeds generateStaticParams, generateMetadata, sitemap.ts, and all UI.

import type { ToolDefinition } from './types';

export const TOOLS: ToolDefinition[] = [
  // ─────────────────────────────────────────────
  // COMPRESSION TOOLS
  // ─────────────────────────────────────────────
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
    title: 'Compress Image to 50KB Online Free — ImageFix',
    metaDescription:
      'Compress any image to 50KB or less online for free. No upload needed — 100% client-side processing. Supports JPG, PNG, WebP.',
    h1: 'Compress Image to 50KB',
    keywords: [
      'compress image to 50kb',
      'reduce image size to 50kb',
      'image compressor 50kb',
      'compress photo to 50kb online',
    ],
    category: 'compress',
    heroDescription:
      'Instantly reduce any image to 50KB or less — perfect for email attachments, form uploads, and web optimization. Your images never leave your browser.',
    howToSteps: [
      'Click "Upload Image" or drag and drop your file',
      'The tool automatically compresses to ≤50KB',
      'Preview the result and compare quality',
      'Click "Download" to save your compressed image',
    ],
    faqs: [
      {
        question: 'Will compressing to 50KB reduce image quality?',
        answer:
          'Our smart compression algorithm finds the optimal quality level to reach 50KB while preserving as much visual quality as possible. For most photos, the difference is imperceptible.',
      },
      {
        question: 'Is my image uploaded to a server?',
        answer:
          'No. ImageFix processes everything in your browser using the HTML5 Canvas API. Your images never leave your device.',
      },
      {
        question: 'What image formats are supported?',
        answer:
          'You can compress JPG, JPEG, PNG, and WebP images to 50KB.',
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
    title: 'Compress Image to 100KB Online Free — ImageFix',
    metaDescription:
      'Reduce any image to 100KB or less for free. Browser-based compression — no uploads, no signups. Works with JPG, PNG, WebP.',
    h1: 'Compress Image to 100KB',
    keywords: [
      'compress image to 100kb',
      'reduce image size to 100kb',
      'image compressor 100kb',
      'compress photo to 100kb online free',
    ],
    category: 'compress',
    heroDescription:
      'Quickly shrink any image to 100KB — ideal for online forms, job applications, and website uploads. Processing happens entirely in your browser.',
    howToSteps: [
      'Upload your image by clicking or dragging it in',
      'The compressor targets ≤100KB automatically',
      'Review the before/after quality comparison',
      'Download your optimized image',
    ],
    faqs: [
      {
        question: 'Why do I need to compress images to 100KB?',
        answer:
          'Many online portals, government forms, and application systems require images under 100KB. This tool ensures your photo meets that limit.',
      },
      {
        question: 'Does this work on my phone?',
        answer:
          'Yes. ImageFix works on all modern mobile browsers including Chrome, Safari, and Firefox on iOS and Android.',
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
    title: 'Compress Image to 20KB Online Free — ImageFix',
    metaDescription:
      'Compress images to 20KB instantly in your browser. Perfect for passport photos, ID uploads, and strict file size limits. Free, no signup.',
    h1: 'Compress Image to 20KB',
    keywords: [
      'compress image to 20kb',
      'reduce image size to 20kb',
      'photo compressor 20kb',
      'compress image under 20kb',
    ],
    category: 'compress',
    heroDescription:
      'Compress any image to 20KB or less for passport applications, ID card uploads, and strict file limits. 100% private — no server uploads.',
    howToSteps: [
      'Upload your photo',
      'ImageFix iteratively finds the best quality at ≤20KB',
      'Preview the compressed result',
      'Download the optimized file',
    ],
    faqs: [
      {
        question: 'Can I compress a photo to exactly 20KB?',
        answer:
          'Our algorithm uses binary search to find the highest quality that fits within 20KB. The result will be at or just under 20KB.',
      },
      {
        question: 'Will my passport photo still be accepted?',
        answer:
          'Yes. The compressor preserves the original dimensions and aspect ratio. Only the file size is reduced through quality optimization.',
      },
    ],
    relatedSlugs: [
      'compress-image-to-50kb',
      'compress-image-to-100kb',
      'resize-image-to-1920x1080',
    ],
    adDensity: 'medium',
  },

  // ─────────────────────────────────────────────
  // CONVERSION TOOLS
  // ─────────────────────────────────────────────
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
    title: 'Convert PNG to WebP Online Free — ImageFix',
    metaDescription:
      'Convert PNG images to WebP format online for free. Reduce file size by up to 30% with WebP. No upload — 100% browser-based.',
    h1: 'Convert PNG to WebP',
    keywords: [
      'convert png to webp',
      'png to webp converter',
      'png to webp online',
      'change png to webp free',
    ],
    category: 'convert',
    heroDescription:
      'Transform PNG files to modern WebP format for smaller file sizes and faster page loads. All processing happens locally in your browser.',
    howToSteps: [
      'Upload your PNG image',
      'Adjust the quality slider (default: 80%)',
      'Preview the WebP result',
      'Download your converted WebP file',
    ],
    faqs: [
      {
        question: 'Why should I convert PNG to WebP?',
        answer:
          'WebP typically produces files 25-35% smaller than PNG while maintaining comparable quality, making your website load significantly faster.',
      },
      {
        question: 'Does WebP support transparency?',
        answer:
          'Yes! WebP supports alpha channel transparency just like PNG, so your transparent backgrounds are fully preserved.',
      },
      {
        question: 'Which browsers support WebP?',
        answer:
          'All modern browsers support WebP including Chrome, Firefox, Safari, Edge, and Opera. Only very old browser versions lack support.',
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
    title: 'Convert PNG to JPG Online Free — ImageFix',
    metaDescription:
      'Convert PNG images to JPG format online for free. Reduce file size dramatically while keeping great quality. No uploads required.',
    h1: 'Convert PNG to JPG',
    keywords: [
      'convert png to jpg',
      'png to jpg converter',
      'png to jpeg online',
      'change png to jpg free',
    ],
    category: 'convert',
    heroDescription:
      'Convert PNG screenshots and graphics to universally compatible JPG format. Dramatically reduce file sizes for sharing and uploads.',
    howToSteps: [
      'Upload your PNG image',
      'Set the JPG quality level (default: 90%)',
      'Preview the converted result',
      'Download your JPG file',
    ],
    faqs: [
      {
        question: 'Will I lose transparency when converting PNG to JPG?',
        answer:
          'Yes. JPG does not support transparency. Transparent areas will be filled with a white background. If you need transparency, convert to WebP instead.',
      },
      {
        question: 'What quality setting should I use?',
        answer:
          'For photos, 85-90% is ideal — visually identical to the original with much smaller file size. For text/screenshots, use 95%+ to keep sharp edges.',
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
    title: 'Convert JPG to WebP Online Free — ImageFix',
    metaDescription:
      'Convert JPG/JPEG images to WebP format instantly. Save up to 30% file size with no visible quality loss. 100% free, no server uploads.',
    h1: 'Convert JPG to WebP',
    keywords: [
      'convert jpg to webp',
      'jpg to webp converter',
      'jpeg to webp online',
      'convert jpeg to webp free',
    ],
    category: 'convert',
    heroDescription:
      'Convert your JPG photos to WebP — the modern image format that delivers 25-35% smaller files with identical visual quality. Runs entirely in your browser.',
    howToSteps: [
      'Upload your JPG/JPEG image',
      'Adjust quality with the slider',
      'Preview the WebP output',
      'Click download to save',
    ],
    faqs: [
      {
        question: 'Is WebP better than JPG?',
        answer:
          'For web use, yes. WebP achieves 25-35% smaller file sizes at equivalent visual quality, which means faster page loads and lower bandwidth costs.',
      },
      {
        question: 'Can I convert back from WebP to JPG?',
        answer:
          'Yes! Use our "Convert WebP to JPG" tool for the reverse conversion. Both directions are fully supported.',
      },
    ],
    relatedSlugs: [
      'convert-png-to-webp',
      'convert-png-to-jpg',
      'compress-image-to-100kb',
    ],
    adDensity: 'medium',
  },

  // ─────────────────────────────────────────────
  // RESIZE TOOLS
  // ─────────────────────────────────────────────
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
    title: 'Resize Image to 1920×1080 Online Free — ImageFix',
    metaDescription:
      'Resize any image to exactly 1920×1080 pixels (Full HD) online for free. No upload required — instant browser processing.',
    h1: 'Resize Image to 1920×1080',
    keywords: [
      'resize image to 1920x1080',
      'resize photo to full hd',
      'image resizer 1920x1080',
      'make image 1920x1080 pixels',
    ],
    category: 'resize',
    heroDescription:
      'Resize any image to Full HD resolution (1920×1080) instantly. Perfect for wallpapers, presentations, and social media banners.',
    howToSteps: [
      'Upload your image',
      'Dimensions are pre-set to 1920×1080',
      'Toggle aspect ratio lock if needed',
      'Download the resized image',
    ],
    faqs: [
      {
        question: 'What is 1920×1080 used for?',
        answer:
          '1920×1080 (Full HD / 1080p) is the standard resolution for desktop wallpapers, YouTube thumbnails, presentations, and most modern displays.',
      },
      {
        question: 'Will resizing upscale small images?',
        answer:
          'Yes, but upscaling a small image to 1920×1080 may result in blurriness. For best results, start with an image that is close to or larger than the target dimensions.',
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

// ─────────────────────────────────────────────
// LOOKUP HELPERS
// ─────────────────────────────────────────────

/** Find a tool by its URL slug */
export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

/** Get all slugs — used by generateStaticParams */
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
