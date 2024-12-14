import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  className = '',
  titleClassName = '',
  subtitleClassName = ''
}: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className={`text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-xl text-gray-600 dark:text-gray-400 ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}