import React from 'react';

export type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'danger' | 'neutral';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-block px-3 py-1 text-sm font-bold border-2 border-black shadow-brutal-sm uppercase tracking-wide';
  
  const variantClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-gray-900',
    accent: 'bg-accent text-gray-900',
    danger: 'bg-danger text-white',
    neutral: 'bg-white text-gray-900',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};
