'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { formatBytes } from '@/lib/engine/utils';

interface OutputPreviewProps {
  originalFile: File;
  outputBlob: Blob;
  outputUrl: string;
  onReset: () => void;
}

export const OutputPreview: React.FC<OutputPreviewProps> = ({
  originalFile,
  outputBlob,
  outputUrl,
  onReset,
}) => {
  const originalSize = originalFile.size;
  const newSize = outputBlob.size;
  const savedBytes = originalSize - newSize;
  const savedPercent = originalSize > 0 ? (savedBytes / originalSize) * 100 : 0;

  const downloadFilename = `imagefix_${originalFile.name.replace(/\.[^/.]+$/, '')}.${outputBlob.type.split('/')[1] || 'jpg'}`;

  return (
    <Card className="flex flex-col gap-6">
      <h3 className="font-extrabold text-xl font-[family-name:var(--font-heading)] border-b-3 border-black pb-2">
        Processing Complete
      </h3>
      
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Visual Preview */}
        <div className="w-full md:w-1/2 aspect-video bg-gray-100 border-3 border-black flex items-center justify-center overflow-hidden relative shadow-brutal-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={outputUrl} 
            alt="Processed preview" 
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Stats & Actions */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="border-3 border-black p-3 bg-white">
              <p className="text-xs font-bold text-gray-500 uppercase">Original Size</p>
              <p className="font-extrabold text-lg">{formatBytes(originalSize)}</p>
            </div>
            <div className="border-3 border-black p-3 bg-accent">
              <p className="text-xs font-bold text-gray-900 uppercase">New Size</p>
              <p className="font-extrabold text-lg">{formatBytes(newSize)}</p>
            </div>
          </div>

          {savedBytes > 0 && (
            <div className="bg-primary text-white border-3 border-black p-3 font-bold flex justify-between items-center">
              <span>Saved space:</span>
              <span>{formatBytes(savedBytes)} ({savedPercent.toFixed(1)}%)</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a 
              href={outputUrl} 
              download={downloadFilename}
              className="w-full"
            >
              <Button fullWidth variant="primary" className="text-lg py-4">
                Download Image
              </Button>
            </a>
            <Button variant="outline" onClick={onReset}>
              Process Another
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
