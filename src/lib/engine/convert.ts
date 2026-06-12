// src/lib/engine/convert.ts
// Format conversion engine

import { imageToCanvas, canvasToBlob } from './utils';

export type ConvertOptions = {
  mimeType: string; // The target mime type (e.g., 'image/webp')
  quality?: number; // Quality for lossy formats (0.0 to 1.0)
};

export async function convertImage(
  img: HTMLImageElement,
  options: ConvertOptions
): Promise<Blob> {
  const { canvas } = imageToCanvas(img);
  
  // Default quality to 0.92 if not specified, which is a good balance for conversion
  const quality = options.quality !== undefined ? options.quality / 100 : 0.92;
  
  return await canvasToBlob(canvas, options.mimeType, quality);
}
