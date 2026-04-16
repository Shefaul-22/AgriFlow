import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  href?: string;         // যদি href থাকে, তবে এটি Link হিসেবে কাজ করবে
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string; // আলাদা কোনো ডিজাইন যোগ করার জন্য
}

const Button = ({ text, href, onClick, variant = 'primary', className }: ButtonProps) => {
  
  // বাটনের বেসিক স্টাইল (rounded-lg, font-medium, animation, etc.)
  const baseStyles = "px-6 py-2.5 rounded-lg font-medium transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group";
  
  const variants = {
    primary: 'bg-gradient-to-r from-emerald-950 via-emerald-900 to-lime-700 text-white hover:shadow-lg hover:shadow-green-900/30',
    secondary: 'bg-main-black text-white hover:bg-gray-800',
    outline: 'border-2 border-deep-green text-deep-green hover:bg-soft-green'
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {text}
    </button>
  );
};

export default Button;