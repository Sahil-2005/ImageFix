// src/lib/engine/metadata.ts
// EXIF and Metadata stripping engine

import { imageToCanvas, canvasToBlob } from './utils';

export type MetadataOptions = {
  mimeType: string;
};

/**
 * Strips all EXIF, GPS, and other metadata from an image.
 * This works natively in the browser because the HTML5 Canvas API
 * strictly operates on pixel data and inherently discards all metadata
 * when converting back to a Blob.
 */
export async function stripMetadata(
  img: HTMLImageElement,
  options: MetadataOptions
): Promise<Blob> {
  // Drawing to canvas strips metadata automatically
  const { canvas } = imageToCanvas(img);
  
  // Export at maximum quality to preserve original visual fidelity
  return await canvasToBlob(canvas, options.mimeType, 1.0);
}
