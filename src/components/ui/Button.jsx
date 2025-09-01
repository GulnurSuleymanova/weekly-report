import React from "react";

const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  onClick,
  ...props 
}) => {
  const baseClasses = "font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-green-500 to-blue-500 text-white hover:shadow-xl transform hover:scale-105",
    secondary: "border-2 border-green-500 text-green-600 hover:bg-green-50",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;