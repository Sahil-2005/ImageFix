// src/lib/engine/compress.ts
// Orchestrates image compression. 
// Uses Web Worker for target KB binary search, or main thread as fallback.

import { imageToCanvas, canvasToBlob } from './utils';
import { compressInWorker } from './workerClient';

/**
 * Checks if the browser supports OffscreenCanvas (needed for worker compression)
 */
const supportsOffscreenCanvas = typeof window !== 'undefined' && 'OffscreenCanvas' in window;

export type CompressOptions = {
  mimeType: string;
  targetSizeKB?: number;
  quality?: number;
  onProgress?: (progress: number) => void;
};

/**
 * Compresses an image. Automatically routes to Web Worker if supported,
 * otherwise falls back to main-thread processing.
 */
export async function compressImage(
  img: HTMLImageElement,
  options: CompressOptions
): Promise<Blob> {
  // If OffscreenCanvas is supported, offload to Web Worker
  if (supportsOffscreenCanvas) {
    try {
      return await compressInWorker(img, options);
    } catch (e) {
      console.warn('Worker compression failed, falling back to main thread', e);
      // Fall through to main thread
    }
  }

  // ── Main Thread Fallback ──
  const { canvas } = imageToCanvas(img);

  // Simple direct conversion based on quality
  if (options.quality !== undefined) {
    const blob = await canvasToBlob(canvas, options.mimeType, options.quality / 100);
    return blob;
  }

  // Binary search to hit targetSizeKB on main thread
  if (!options.targetSizeKB) {
    throw new Error('Either quality or targetSizeKB must be provided');
  }

  const targetBytes = options.targetSizeKB * 1024;
  let minQ = 0.01;
  let maxQ = 1.0;
  let bestBlob: Blob | null = null;
  let bestDiff = Infinity;
  const MAX_ITERATIONS = 7;

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    const midQ = (minQ + maxQ) / 2;
    const blob = await canvasToBlob(canvas, options.mimeType, midQ);
    
    if (options.onProgress) {
      options.onProgress(Math.round(((i + 1) / MAX_ITERATIONS) * 100));
    }

    const diff = Math.abs(blob.size - targetBytes);
    
    if (blob.size <= targetBytes && diff < bestDiff) {
      bestBlob = blob;
      bestDiff = diff;
    } else if (!bestBlob && i === MAX_ITERATIONS - 1) {
      bestBlob = blob; 
    }

    if (blob.size > targetBytes) {
      maxQ = midQ; 
    } else {
      minQ = midQ; 
    }

    if (diff / targetBytes < 0.05 && blob.size <= targetBytes) {
      break;
    }

    // Yield to main thread to prevent UI freezing
    await new Promise((resolve) => setTimeout(resolve, 10));
  }

  if (!bestBlob) {
    throw new Error('Fallback compression failed to produce a valid blob');
  }

  return bestBlob;
}
