import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', fullWidth = false, className = '', ...props }, ref) => {
    // Base brutalist classes
    const baseClasses = 'font-bold px-6 py-3 border-3 border-black shadow-brutal transition-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg active:translate-x-[0px] active:translate-y-[0px] active:shadow-none outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-brutal';
    
    // Variant classes
    const variantClasses = {
      primary: 'bg-primary text-white',
      secondary: 'bg-secondary text-gray-900',
      outline: 'bg-white text-gray-900',
      danger: 'bg-danger text-white',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
