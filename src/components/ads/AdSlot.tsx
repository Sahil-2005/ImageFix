'use client';

import React, { useEffect, useRef } from 'react';

// Use placeholder publisher ID
const AD_CLIENT_ID = 'ca-pub-0000000000000000';

export interface AdSlotProps {
  slotId: string;
  format?: 'auto' | 'horizontal' | 'rectangle';
  responsive?: boolean;
  className?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({
  slotId,
  format = 'auto',
  responsive = true,
  className = '',
}) => {
  const adRef = useRef<HTMLModElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    // Only push to adsbygoogle once per component instance
    if (typeof window !== 'undefined' && !isLoaded.current && adRef.current) {
      try {
        const adsbygoogle = (window as any).adsbygoogle || [];
        adsbygoogle.push({});
        isLoaded.current = true;
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, []);

  return (
    <div className={`w-full bg-surface-alt border-3 border-dashed border-gray-300 min-h-[100px] flex items-center justify-center relative overflow-hidden ${className}`}>
      {/* Label indicating advertisement, required by some compliance policies */}
      <span className="absolute top-1 right-2 text-[10px] uppercase text-gray-400 font-bold tracking-widest z-0 pointer-events-none">
        Advertisement
      </span>
      
      {/* The actual ad block */}
      <ins
        ref={adRef}
        className="adsbygoogle relative z-10 block"
        style={{ display: 'block', minWidth: '300px' }}
        data-ad-client={AD_CLIENT_ID}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
};
