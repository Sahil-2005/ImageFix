'use client';

import React from 'react';

export interface ProgressBarProps {
  progress: number; // 0 to 100
  label?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label }) => {
  // Ensure progress is bounded between 0 and 100
  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <div className="flex justify-between items-center text-sm font-bold uppercase tracking-wide">
          <span>{label}</span>
          <span>{Math.round(safeProgress)}%</span>
        </div>
      )}
      <div className="w-full h-8 bg-white border-3 border-black shadow-brutal overflow-hidden">
        <div 
          className="h-full bg-secondary border-r-3 border-black transition-all duration-300 ease-out flex items-center justify-end px-2"
          style={{ width: `${safeProgress}%` }}
        >
          {/* Subtle striped pattern overlay for the fill */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)' }} />
        </div>
      </div>
    </div>
  );
};
