import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 text-sm uppercase tracking-wider font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform active:scale-95";
  
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-primary-600/40 focus:ring-primary-500 border border-transparent",
    secondary: "bg-secondary-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-gray-900/30 focus:ring-gray-900 border border-transparent",
    outline: "border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500 bg-transparent",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-glass"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className} group`}
      {...props}
    >
      {/* Shine Effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default Button;