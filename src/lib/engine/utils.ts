// src/lib/engine/utils.ts
// Shared utilities for the image processing engine

import { getSafeDimensions } from './canvasLimits';

/**
 * Loads a File or Blob into an HTMLImageElement
 */
export function loadImage(file: File | Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image'));
    };
    
    img.src = url;
  });
}

/**
 * Draws an HTMLImageElement onto a Canvas, applying safe downscaling
 * if the image exceeds the device's canvas limits.
 */
export function imageToCanvas(img: HTMLImageElement): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D; scaled: boolean } {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  
  if (!ctx) {
    throw new Error('Failed to get 2D canvas context');
  }

  // Determine safe dimensions
  const { width, height, scaled } = getSafeDimensions(img.naturalWidth, img.naturalHeight);
  
  canvas.width = width;
  canvas.height = height;
  
  // Draw with high quality smoothing
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, width, height);
  
  return { canvas, ctx, scaled };
}

/**
 * Converts a Canvas to a Blob asynchronously
 */
export function canvasToBlob(canvas: HTMLCanvasElement | OffscreenCanvas, mimeType: string, quality?: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    // Handle HTMLCanvasElement
    if (canvas instanceof HTMLCanvasElement) {
      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject(new Error('Canvas toBlob failed'));
        },
        mimeType,
        quality
      );
    } 
    // Handle OffscreenCanvas
    else {
      canvas.convertToBlob({ type: mimeType, quality }).then(resolve).catch(reject);
    }
  });
}

/**
 * Formats bytes into a human-readable string (KB, MB, etc.)
 */
export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
