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
];

/** Look up a category by its ID */
export function getCategoryById(id: string): ToolCategory | undefined {
  return CATEGORIES.find((cat) => cat.id === id);
}
