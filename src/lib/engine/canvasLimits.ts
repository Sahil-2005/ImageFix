// src/lib/engine/canvasLimits.ts
// Mobile Canvas size detection and safe scaling utility
// Prevents tab crashes on iOS Safari and other mobile browsers when processing high-res images.

/**
 * Known safe canvas limits by device/browser.
 * iOS Safari has a strict ~16.7 megapixel limit for a single canvas (4096x4096).
 * We default to 4096x4096 as a safe upper bound for mobile devices.
 */
const SAFE_MOBILE_MAX_AREA = 4096 * 4096;
const SAFE_DESKTOP_MAX_AREA = 8192 * 8192; // 67 MP

/**
 * Checks if the current environment is a mobile device.
 * (Simple heuristic based on User-Agent and touch support)
 */
function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    ((navigator.maxTouchPoints || 0) > 2)
  );
}

/**
 * Calculates the maximum safe canvas area based on the device.
 */
export function getSafeCanvasArea(): number {
  return isMobile() ? SAFE_MOBILE_MAX_AREA : SAFE_DESKTOP_MAX_AREA;
}

/**
 * Given an original width and height, returns dimensions that safely fit
 * within the device's canvas limits while maintaining the aspect ratio.
 */
export function getSafeDimensions(originalWidth: number, originalHeight: number): { width: number; height: number; scaled: boolean } {
  const maxArea = getSafeCanvasArea();
  const currentArea = originalWidth * originalHeight;

  if (currentArea <= maxArea) {
    return { width: originalWidth, height: originalHeight, scaled: false };
  }

  // Calculate the scale factor to fit within maxArea
  const scale = Math.sqrt(maxArea / currentArea);
  
  return {
    width: Math.floor(originalWidth * scale),
    height: Math.floor(originalHeight * scale),
    scaled: true,
  };
}

/**
 * (Optional) Probe technique to aggressively test canvas limits.
 * Not used by default as it can be slow, but useful for extreme edge cases.
 */
export function probeCanvasMaxArea(): number {
  if (typeof document === 'undefined') return SAFE_MOBILE_MAX_AREA;
  
  const canvas = document.createElement('canvas');
  let low = 1000;
  let high = 16384;
  let maxSafe = low;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    canvas.width = mid;
    canvas.height = mid;
    // Attempt to get context and draw
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (ctx) {
      try {
        ctx.fillRect(0, 0, 1, 1);
        const data = ctx.getImageData(0, 0, 1, 1);
        if (data && data.data[3] !== 0) { // Check if alpha is non-zero
          maxSafe = mid;
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      } catch (e) {
        high = mid - 1;
      }
    } else {
      high = mid - 1;
    }
  }
  
  return maxSafe * maxSafe;
}
