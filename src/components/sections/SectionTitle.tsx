import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-xl text-gray-600">{subtitle}</p>}
    </div>
  );
}