import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function Image({ src, alt, width, height, className = '' }: ImageProps) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const handleLoad = () => setIsLoading(false);
  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  if (error) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`} 
        style={{ aspectRatio: `${width}/${height}` }}
      >
        <span className="text-gray-500">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-100 animate-pulse rounded-lg"
          style={{ aspectRatio: `${width}/${height}` }}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </div>
  );
}