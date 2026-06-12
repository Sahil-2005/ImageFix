'use client';

import React from 'react';

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Slider: React.FC<SliderProps> = ({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange,
  className = '',
  ...props
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <div className="flex justify-between items-center">
        <label className="font-bold text-gray-900 uppercase tracking-wide text-sm">{label}</label>
        <span className="font-extrabold bg-black text-white px-2 py-0.5 border-2 border-black">
          {value}{unit}
        </span>
      </div>
      
      {/* Brutalist Custom Slider Container */}
      <div className="relative h-6 flex items-center group">
        {/* Track (Thick border) */}
        <div className="absolute w-full h-4 bg-white border-3 border-black shadow-brutal-sm" />
        
        {/* Fill */}
        <div 
          className="absolute h-4 bg-primary border-y-3 border-l-3 border-black transition-all duration-75"
          style={{ width: `calc(${percentage}% + 1.5px)` }}
        />
        
        {/* Actual Input (Invisible but interactive overlay) */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          className="absolute w-full h-full opacity-0 cursor-ew-resize z-10"
          {...props}
        />

        {/* Thumb Indicator (Visual only) */}
        <div 
          className="absolute h-8 w-4 bg-accent border-3 border-black shadow-brutal pointer-events-none transition-transform group-active:scale-110"
          style={{ left: `calc(${percentage}% - 8px)` }}
        />
      </div>
    </div>
  );
};
