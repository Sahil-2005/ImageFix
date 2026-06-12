import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, hoverable = false, className = '', ...props }, ref) => {
    const baseClasses = 'bg-white border-3 border-black shadow-brutal p-6';
    const hoverClasses = hoverable ? 'transition-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg' : '';

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${hoverClasses} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
