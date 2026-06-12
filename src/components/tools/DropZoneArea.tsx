'use client';

import React from 'react';
import { DropZone } from '@/components/ui/DropZone';
import { ToolDefinition } from '@/lib/registry/types';

interface DropZoneAreaProps {
  tool: ToolDefinition;
  onFileSelect: (file: File) => void;
  disabled?: boolean;
}

export const DropZoneArea: React.FC<DropZoneAreaProps> = ({ tool, onFileSelect, disabled }) => {
  const handleFileDrop = (file: File) => {
    // Validate file type
    const extension = file.name.split('.').pop()?.toLowerCase() || '';
    const isAccepted = tool.inputFormats.includes(extension as any);
    
    if (!isAccepted) {
      alert(`Invalid file format. Please upload a ${tool.inputFormats.join(', ')} file.`);
      return;
    }
    
    // In MVP we process one file. We just pass it up.
    onFileSelect(file);
  };

  return (
    <div className="w-full">
      <DropZone
        onFileDrop={handleFileDrop}
        acceptedFormats={tool.inputFormats}
        disabled={disabled}
      />
    </div>
  );
};
