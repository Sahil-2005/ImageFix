'use client';

import React, { useCallback, useState } from 'react';

export interface DropZoneProps {
  onFileDrop: (file: File) => void;
  acceptedFormats: string[];
  disabled?: boolean;
}

export const DropZone: React.FC<DropZoneProps> = ({
  onFileDrop,
  acceptedFormats,
  disabled = false,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setIsDragging(true);
  }, [disabled]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      if (disabled) return;

      const file = e.dataTransfer.files?.[0];
      if (file) {
        onFileDrop(file);
      }
    },
    [disabled, onFileDrop]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      const file = e.target.files?.[0];
      if (file) {
        onFileDrop(file);
      }
    },
    [disabled, onFileDrop]
  );

  const acceptedString = acceptedFormats.map(f => `.${f}, image/${f === 'jpg' ? 'jpeg' : f}`).join(',');

  return (
    <div
      className={`relative w-full border-4 border-black border-dashed bg-white p-12 text-center transition-brutal hover-brutal group ${
        isDragging ? 'bg-accent/20 border-accent shadow-brutal-lg -translate-x-1 -translate-y-1' : 'shadow-brutal'
      } ${disabled ? 'opacity-50 cursor-not-allowed hover:translate-x-0 hover:translate-y-0 hover:shadow-brutal' : 'cursor-pointer'}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
        accept={acceptedString}
        onChange={handleChange}
        disabled={disabled}
        aria-label="Upload an image file"
      />
      <div className="pointer-events-none flex flex-col items-center justify-center space-y-4">
        <div className={`text-6xl transition-transform ${isDragging ? 'scale-110' : 'group-hover:scale-110'}`}>
          🖼️
        </div>
        <div>
          <p className="text-2xl font-extrabold font-[family-name:var(--font-heading)] mb-2">
            {isDragging ? 'Drop it here!' : 'Click or Drag & Drop'}
          </p>
          <p className="text-gray-600 font-medium">
            Supports {acceptedFormats.map((f) => f.toUpperCase()).join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};
