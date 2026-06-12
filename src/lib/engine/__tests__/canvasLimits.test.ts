import { getSafeCanvasArea, getSafeDimensions } from '../canvasLimits';

describe('canvasLimits', () => {
  it('should return safe desktop area by default in tests', () => {
    expect(getSafeCanvasArea()).toBe(8192 * 8192);
  });

  it('should not scale dimensions under the limit', () => {
    const { width, height, scaled } = getSafeDimensions(1000, 1000);
    expect(width).toBe(1000);
    expect(height).toBe(1000);
    expect(scaled).toBe(false);
  });

  it('should scale dimensions that exceed the limit', () => {
    // 10000x10000 is 100MP, exceeding the 67MP desktop limit
    const { width, height, scaled } = getSafeDimensions(10000, 10000);
    expect(width * height).toBeLessThanOrEqual(8192 * 8192);
    expect(scaled).toBe(true);
    expect(width).toBe(height); // maintains aspect ratio
  });
});
