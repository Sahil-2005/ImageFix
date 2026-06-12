'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ToolDefinition } from '@/lib/registry/types';
import { DropZoneArea } from './DropZoneArea';
import { SettingsPanel } from './SettingsPanel';
import { ProcessingStatus } from './ProcessingStatus';
import { OutputPreview } from './OutputPreview';
import { Button } from '@/components/ui/Button';

// Engine imports
import { loadImage } from '@/lib/engine/utils';
import { compressImage } from '@/lib/engine/compress';
import { resizeImage } from '@/lib/engine/resize';
import { cropImage } from '@/lib/engine/crop';
import { convertImage } from '@/lib/engine/convert';
import { stripMetadata } from '@/lib/engine/metadata';

interface ImageProcessorProps {
  tool: ToolDefinition;
}

export const ImageProcessor: React.FC<ImageProcessorProps> = ({ tool }) => {
  const [file, setFile] = useState<File | null>(null);
  const [settings, setSettings] = useState<Record<string, any>>({});
  const [status, setStatus] = useState<'idle' | 'processing' | 'done' | 'error'>('idle');
  const [progress, setProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [outputBlob, setOutputBlob] = useState<Blob | null>(null);
  const [outputUrl, setOutputUrl] = useState<string>('');

  // Initialize default settings
  useEffect(() => {
    const defaults: Record<string, any> = {};
    tool.settings.forEach(s => {
      defaults[s.id] = s.defaultValue;
    });
    setSettings(defaults);
  }, [tool]);

  // Cleanup object URLs to prevent memory leaks
  useEffect(() => {
    return () => {
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    };
  }, [outputUrl]);

  const handleSettingChange = useCallback((key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  const handleReset = useCallback(() => {
    setFile(null);
    setStatus('idle');
    setProgress(0);
    setErrorMsg('');
    setOutputBlob(null);
    if (outputUrl) URL.revokeObjectURL(outputUrl);
    setOutputUrl('');
  }, [outputUrl]);

  const handleProcess = async () => {
    if (!file) return;

    setStatus('processing');
    setProgress(10);
    setErrorMsg('');

    try {
      const img = await loadImage(file);
      setProgress(30);

      let resultBlob: Blob;
      const targetMimeType = !tool.outputFormat 
        ? file.type 
        : `image/${tool.outputFormat === 'jpg' ? 'jpeg' : tool.outputFormat}`;

      // Route to correct engine function based on tool action
      switch (tool.action) {
        case 'compress':
          resultBlob = await compressImage(img, {
            mimeType: targetMimeType,
            targetSizeKB: settings.targetSizeKB,
            quality: settings.quality,
            onProgress: (p) => setProgress(30 + Math.floor(p * 0.6)), // map 0-100 to 30-90
          });
          break;

        case 'resize':
          resultBlob = await resizeImage(img, {
            width: settings.width,
            height: settings.height,
            maintainAspect: settings.maintainAspect,
            mimeType: targetMimeType,
          });
          break;

        case 'crop':
          resultBlob = await cropImage(img, {
            aspectRatio: settings.aspectRatio,
            mimeType: targetMimeType,
          });
          break;

        case 'convert':
          resultBlob = await convertImage(img, {
            mimeType: targetMimeType,
            quality: settings.quality,
          });
          break;

        case 'strip-metadata':
          resultBlob = await stripMetadata(img, {
            mimeType: targetMimeType,
          });
          break;

        default:
          throw new Error(`Unsupported tool action: ${tool.action}`);
      }

      setProgress(100);
      setOutputBlob(resultBlob);
      setOutputUrl(URL.createObjectURL(resultBlob));
      setStatus('done');

    } catch (err: any) {
      console.error('Processing failed:', err);
      setStatus('error');
      setErrorMsg(err.message || 'An unknown error occurred.');
    }
  };

  return (
    <div className="w-full flex flex-col gap-8">
      {status === 'idle' || status === 'error' ? (
        <>
          {/* Input State */}
          {!file ? (
            <DropZoneArea tool={tool} onFileSelect={setFile} />
          ) : (
            <div className="flex flex-col gap-6">
              {/* Selected File Card */}
              <div className="bg-white border-3 border-black shadow-brutal p-4 flex items-center justify-between">
                <div className="flex items-center gap-4 truncate">
                  <div className="text-3xl">📄</div>
                  <div className="truncate">
                    <p className="font-bold text-gray-900 truncate">{file.name}</p>
                    <p className="text-sm text-gray-500 uppercase">{file.type} • {(file.size / 1024).toFixed(1)} KB</p>
                  </div>
                </div>
                <Button variant="outline" onClick={() => setFile(null)} className="py-2 px-4 shrink-0">
                  Change
                </Button>
              </div>

              {/* Dynamic Settings */}
              <SettingsPanel 
                tool={tool} 
                settings={settings} 
                onSettingChange={handleSettingChange} 
              />

              {/* Error Message if any */}
              <ProcessingStatus status={status} progress={0} message={errorMsg} />

              {/* Process Action */}
              <Button 
                variant="primary" 
                fullWidth 
                className="text-xl py-5 uppercase tracking-wider"
                onClick={handleProcess}
              >
                {tool.action === 'compress' ? 'Compress Image Now' : 'Process Image Now'}
              </Button>
            </div>
          )}
        </>
      ) : status === 'processing' ? (
        <div className="py-12">
          <ProcessingStatus status={status} progress={progress} message="Applying changes in your browser..." />
        </div>
      ) : (
        <OutputPreview 
          originalFile={file!}
          outputBlob={outputBlob!}
          outputUrl={outputUrl}
          onReset={handleReset}
        />
      )}
    </div>
  );
};
