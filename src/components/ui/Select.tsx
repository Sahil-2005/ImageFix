'use client';

import React from 'react';

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label: string;
  options: SelectOption[];
  value: string | number;
  onChange: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="font-bold text-gray-900 uppercase tracking-wide text-sm select-none">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-white font-bold text-gray-900 px-4 py-3 border-3 border-black shadow-brutal transition-brutal hover-brutal focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-2 cursor-pointer"
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {/* Custom Caret */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-900 font-bold border-l-3 border-black bg-accent">
          ▼
        </div>
      </div>
    </div>
  );
};
