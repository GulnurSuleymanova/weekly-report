import React from "react";

const Input = ({ 
  type = "text", 
  placeholder, 
  className = "", 
  value, 
  onChange,
  ...props 
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 ${className}`}
      {...props}
    />
  );
};

export default Input;