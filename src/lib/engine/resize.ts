// src/lib/engine/resize.ts
// Handles image resolution scaling

import { imageToCanvas, canvasToBlob } from './utils';

export type ResizeOptions = {
  width: number;
  height: number;
  maintainAspect: boolean;
  mimeType: string;
};

export async function resizeImage(
  img: HTMLImageElement,
  options: ResizeOptions
): Promise<Blob> {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Failed to get 2D canvas context');

  let finalWidth = options.width;
  let finalHeight = options.height;

  if (options.maintainAspect) {
    const originalAspect = img.naturalWidth / img.naturalHeight;
    const targetAspect = options.width / options.height;

    if (originalAspect > targetAspect) {
      // Image is wider than target ratio
      finalHeight = Math.floor(options.width / originalAspect);
    } else {
      // Image is taller than target ratio
      finalWidth = Math.floor(options.height * originalAspect);
    }
  }

  canvas.width = finalWidth;
  canvas.height = finalHeight;

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, finalWidth, finalHeight);

  // Export at maximum quality for resize operations
  return await canvasToBlob(canvas, options.mimeType, 1.0);
}
