import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'inline-block px-6 py-2 rounded-md transition-colors duration-300';
  const variantClasses = {
    primary: 'bg-secondary-600 text-white hover:bg-secondary-700',
    secondary: 'border-2 border-secondary-600 text-secondary-600 hover:bg-secondary-50',
    white: 'border-2 border-white text-white hover:bg-white hover:text-primary-900',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
