// src/lib/engine/workerClient.ts
// Main thread bridge to communicate with the Web Worker

import type { WorkerMessage, WorkerResponse } from './worker';

let workerInstance: Worker | null = null;

function getWorker(): Worker {
  if (typeof window === 'undefined') {
    throw new Error('Worker cannot be created on the server');
  }
  
  if (!workerInstance) {
    // Next.js Webpack integration for Web Workers
    workerInstance = new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' });
  }
  return workerInstance;
}

export type CompressionOptions = {
  mimeType: string;
  targetSizeKB?: number;
  quality?: number;
  onProgress?: (progress: number) => void;
};

/**
 * Sends an image to the worker for compression
 */
export async function compressInWorker(
  img: HTMLImageElement,
  options: CompressionOptions
): Promise<Blob> {
  // Create an ImageBitmap for fast transfer to worker
  const imageBitmap = await createImageBitmap(img);
  const id = Math.random().toString(36).substring(7);

  const worker = getWorker();

  return new Promise((resolve, reject) => {
    const handleMessage = (e: MessageEvent<WorkerResponse>) => {
      const res = e.data;
      if (res.id !== id) return;

      if (res.type === 'PROGRESS' && options.onProgress && res.progress !== undefined) {
        options.onProgress(res.progress);
      } else if (res.type === 'SUCCESS' && res.blob) {
        worker.removeEventListener('message', handleMessage);
        resolve(res.blob);
      } else if (res.type === 'ERROR') {
        worker.removeEventListener('message', handleMessage);
        reject(new Error(res.error));
      }
    };

    worker.addEventListener('message', handleMessage);

    const msg: WorkerMessage = {
      type: 'COMPRESS',
      id,
      imageBitmap,
      mimeType: options.mimeType,
      targetSizeKB: options.targetSizeKB,
      quality: options.quality,
    };

    // Transfer the ImageBitmap to the worker to avoid cloning memory
    worker.postMessage(msg, [imageBitmap]);
  });
}
