// src/lib/engine/worker.ts
// Web Worker for handling expensive image compression tasks
// Offloads binary search canvas operations to prevent main thread UI freezes.

export type WorkerMessage = {
  type: 'COMPRESS';
  id: string;
  imageBitmap: ImageBitmap;
  mimeType: string;
  targetSizeKB?: number;
  quality?: number; // Used for direct conversion instead of target KB
};

export type WorkerResponse = {
  id: string;
  type: 'SUCCESS' | 'ERROR' | 'PROGRESS';
  blob?: Blob;
  error?: string;
  progress?: number;
};

// Listen for messages from the main thread
self.onmessage = async (e: MessageEvent<WorkerMessage>) => {
  const { type, id, imageBitmap, mimeType, targetSizeKB, quality } = e.data;

  if (type === 'COMPRESS') {
    try {
      const canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Failed to get OffscreenCanvas context');

      ctx.drawImage(imageBitmap, 0, 0);

      // Simple direct compression based on quality
      if (quality !== undefined) {
        const blob = await canvas.convertToBlob({ type: mimeType, quality: quality / 100 });
        postResponse({ id, type: 'SUCCESS', blob });
        return;
      }

      // Binary search to hit targetSizeKB
      if (!targetSizeKB) {
        throw new Error('Either quality or targetSizeKB must be provided');
      }

      const targetBytes = targetSizeKB * 1024;
      let minQ = 0.01;
      let maxQ = 1.0;
      let bestBlob: Blob | null = null;
      let bestDiff = Infinity;
      const MAX_ITERATIONS = 7;

      for (let i = 0; i < MAX_ITERATIONS; i++) {
        const midQ = (minQ + maxQ) / 2;
        const blob = await canvas.convertToBlob({ type: mimeType, quality: midQ });
        
        postResponse({ id, type: 'PROGRESS', progress: Math.round(((i + 1) / MAX_ITERATIONS) * 100) });

        const diff = Math.abs(blob.size - targetBytes);
        
        // Save best so far that is UNDER or equal to target
        if (blob.size <= targetBytes && diff < bestDiff) {
          bestBlob = blob;
          bestDiff = diff;
        } else if (!bestBlob && i === MAX_ITERATIONS - 1) {
          // If we never found one under the target, just use the lowest quality we tried
          bestBlob = blob; 
        }

        if (blob.size > targetBytes) {
          maxQ = midQ; // File too large, decrease quality
        } else {
          minQ = midQ; // File smaller than target, try higher quality
        }

        // Break early if we're within 5% of target
        if (diff / targetBytes < 0.05 && blob.size <= targetBytes) {
          break;
        }
      }

      if (!bestBlob) {
        throw new Error('Compression failed to produce a valid blob');
      }

      postResponse({ id, type: 'SUCCESS', blob: bestBlob });
    } catch (error: any) {
      postResponse({ id, type: 'ERROR', error: error.message || 'Unknown compression error' });
    }
  }
};

function postResponse(res: WorkerResponse) {
  self.postMessage(res);
}
