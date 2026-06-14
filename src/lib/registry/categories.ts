// src/lib/registry/categories.ts
// Tool category definitions

import type { ToolCategory } from './types';

export const CATEGORIES: ToolCategory[] = [
  {
    id: 'compress',
    name: 'Compress Images',
    description: 'Reduce file size without losing visible quality',
    icon: '📦',
  },
  {
    id: 'convert',
    name: 'Convert Format',
    description: 'Change image formats instantly in your browser',
    icon: '🔄',
  },
  {
    id: 'resize',
    name: 'Resize & Scale',
    description: 'Scale images to exact pixel dimensions',
    icon: '📐',
  },
  {
    id: 'crop',
    name: 'Crop & Aspect Ratio',
    description: 'Crop images to specific aspect ratios',
    icon: '✂️',
  },
  {
    id: 'metadata',
    name: 'Privacy & Metadata',
    description: 'Strip EXIF data and protect your privacy',
    icon: '🔒',
  },
  {
    id: 'exam-india',
    name: 'Indian Exam Forms',
    description: 'Photo & signature formatting for UPSC, SSC, IBPS, GATE, JEE, NEET',
    icon: '📋'
  },
  {
    id: 'passport',
    name: 'Passport Photos',
    description: 'Format photos to exact passport specifications worldwide',
    icon: '🛂'
  },
  {
    id: 'visa',
    name: 'Visa Applications',
    description: 'Photo formatting for US, UK, Schengen, and Canada visas',
    icon: '✈️'
  },
  {
    id: 'identity-india',
    name: 'Indian ID Documents',
    description: 'Photo formatting for PAN, Aadhaar, and OCI cards',
    icon: '🪪'
  },
  {
    id: 'signature',
    name: 'Signature Resizer',
    description: 'Resize and compress signatures for exam and document uploads',
    icon: '✍️'
  },
];

/** Look up a category by its ID */
export function getCategoryById(id: string): ToolCategory | undefined {
  return CATEGORIES.find((cat) => cat.id === id);
}
