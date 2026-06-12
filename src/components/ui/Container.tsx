import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  withPattern?: boolean;
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  withPattern = false, 
  className = '', 
  ...props 
}) => {
  const patternClass = withPattern ? 'bg-dots' : '';

  return (
    <div className={`w-full ${patternClass} ${className}`} {...props}>
      <div className="max-w-6xl mx-auto px-4 w-full">
        {children}
      </div>
    </div>
  );
};
