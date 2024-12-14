import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function AnimatedButton({ children, className = '', ...props }: AnimatedButtonProps) {
  return (
    <button
      className={`
        relative px-6 py-3 rounded-lg font-medium text-white
        bg-gradient-to-r from-blue-600 to-red-800
        bg-[length:200%_100%]
        animate-gradient
        hover:shadow-lg
        transition-shadow duration-300
        ${className}
      `}
      {...props}
    >
      <div className="flex items-center justify-center">
        <ArrowLeft className="w-5 h-5 mr-2" />
        {children}
      </div>
    </button>
  );
}