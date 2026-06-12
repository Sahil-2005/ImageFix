'use client';

import React from 'react';

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Toggle: React.FC<ToggleProps> = ({
  label,
  checked,
  onChange,
  className = '',
  disabled = false,
  ...props
}) => {
  return (
    <label className={`flex items-center justify-between cursor-pointer group ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      <span className="font-bold text-gray-900 uppercase tracking-wide text-sm select-none">
        {label}
      </span>
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => {
            if (!disabled) onChange(e.target.checked);
          }}
          disabled={disabled}
          {...props}
        />
        {/* Track */}
        <div className={`block w-14 h-8 border-3 border-black transition-colors ${checked ? 'bg-primary' : 'bg-gray-300'}`} />
        {/* Thumb */}
        <div 
          className={`absolute left-0 top-0 w-8 h-8 bg-white border-3 border-black shadow-brutal-sm transition-transform ${checked ? 'translate-x-6' : 'translate-x-0'}`} 
        />
      </div>
    </label>
  );
};
