import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className = '', children }: CardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  );
}