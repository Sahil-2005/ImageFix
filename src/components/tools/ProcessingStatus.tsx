'use client';

import React from 'react';
import { ProgressBar } from '@/components/ui/ProgressBar';

interface ProcessingStatusProps {
  status: 'idle' | 'processing' | 'done' | 'error';
  progress: number;
  message?: string;
}

export const ProcessingStatus: React.FC<ProcessingStatusProps> = ({
  status,
  progress,
  message,
}) => {
  if (status === 'idle') return null;

  return (
    <div className="w-full mt-4">
      {status === 'processing' && (
        <ProgressBar progress={progress} label={message || 'Processing...'} />
      )}
      
      {status === 'error' && (
        <div className="bg-danger text-white p-4 border-3 border-black shadow-brutal font-bold">
          ⚠️ Error: {message || 'An unknown error occurred during processing.'}
        </div>
      )}

      {status === 'done' && (
        <div className="bg-secondary text-gray-900 p-4 border-3 border-black shadow-brutal font-bold">
          ✨ Success! {message}
        </div>
      )}
    </div>
  );
};
