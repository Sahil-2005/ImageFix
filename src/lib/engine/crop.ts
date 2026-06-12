// src/lib/engine/crop.ts
// Handles aspect-ratio cropping

import { canvasToBlob } from './utils';

export type CropOptions = {
  aspectRatio: number; // e.g., 16/9, 4/3, 1/1
  mimeType: string;
};

export async function cropImage(
  img: HTMLImageElement,
  options: CropOptions
): Promise<Blob> {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Failed to get 2D canvas context');

  const originalAspect = img.naturalWidth / img.naturalHeight;
  let sourceX = 0, sourceY = 0, sourceWidth = img.naturalWidth, sourceHeight = img.naturalHeight;

  if (originalAspect > options.aspectRatio) {
    // Original is wider than target crop
    sourceWidth = img.naturalHeight * options.aspectRatio;
    sourceX = (img.naturalWidth - sourceWidth) / 2;
  } else if (originalAspect < options.aspectRatio) {
    // Original is taller than target crop
    sourceHeight = img.naturalWidth / options.aspectRatio;
    sourceY = (img.naturalHeight - sourceHeight) / 2;
  }

  canvas.width = sourceWidth;
  canvas.height = sourceHeight;

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(
    img,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight, // Source crop
    0,
    0,
    sourceWidth,
    sourceHeight  // Destination
  );

  return await canvasToBlob(canvas, options.mimeType, 1.0);
}
