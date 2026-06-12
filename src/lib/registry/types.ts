// src/lib/registry/types.ts
// TypeScript interfaces for the tool registry — the SEO data layer

/** Processing operation types available in the engine */
export type ProcessingAction =
  | 'compress'
  | 'resize'
  | 'crop'
  | 'convert'
  | 'strip-metadata';

/** Supported input/output image formats */
export type ImageFormat =
  | 'jpg'
  | 'jpeg'
  | 'png'
  | 'webp'
  | 'avif'
  | 'gif'
  | 'bmp'
  | 'ico';

/** Category grouping for tools */
export interface ToolCategory {
  id: string;
  name: string;
  description: string;
  icon: string; // emoji or SVG icon name
}

/** Single setting control exposed in the tool UI */
export interface ToolSetting {
  id: string;
  label: string;
  type: 'slider' | 'select' | 'number' | 'toggle';
  defaultValue: number | string | boolean;
  options?: { label: string; value: string | number }[]; // for 'select'
  min?: number; // for 'slider' / 'number'
  max?: number;
  step?: number;
  unit?: string; // e.g., 'KB', 'px', '%'
}

/** FAQ entry for SEO content */
export interface FAQ {
  question: string;
  answer: string;
}

/** Complete tool definition — the single source of truth */
export interface ToolDefinition {
  // ── Routing ──
  slug: string; // URL path: /compress-image-to-50kb

  // ── Processing ──
  action: ProcessingAction;
  inputFormats: ImageFormat[]; // Accepted input types
  outputFormat?: ImageFormat; // Forced output (for conversion tools)
  settings: ToolSetting[]; // UI controls

  // ── SEO Metadata ──
  title: string; // <title> tag (60 chars max)
  metaDescription: string; // <meta description> (155 chars max)
  h1: string; // On-page H1 (can differ from title)
  keywords: string[]; // Long-tail keyword targets
  category: string; // Category ID reference

  // ── Content ──
  heroDescription: string; // Short paragraph below H1
  howToSteps: string[]; // Step-by-step (feeds JSON-LD HowTo)
  faqs: FAQ[]; // FAQ section (feeds JSON-LD FAQPage)
  relatedSlugs: string[]; // Cross-linking to related tools

  // ── Ad Config ──
  adDensity: 'low' | 'medium' | 'high'; // Controls number of ad slots
}
