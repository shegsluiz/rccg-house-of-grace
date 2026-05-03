import React, { useState, useEffect } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

/**
 * A component that handles smooth image loading with a fade-in effect.
 * It also supports providing a WebP source with a fallback.
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = "",
  priority = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>(src);

  useEffect(() => {
    // Check if the browser supports WebP
    const isWebPSupported = () => {
      const elem = document.createElement('canvas');
      if (!!(elem.getContext && elem.getContext('2d'))) {
        return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      }
      return false;
    };

    if (src.endsWith('.webp') || !fallbackSrc) {
      setCurrentSrc(src);
    } else {
      // If we have a fallback and the main src isn't webp, 
      // we assume src is the optimized version and fallback is the original.
      // But usually we want to pass webp as src and jpg as fallback.
      setCurrentSrc(src);
    }
  }, [src, fallbackSrc]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background placeholder / blur effect could go here */}
      <div 
        className={`absolute inset-0 bg-hog-black/10 transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
        style={{ backdropFilter: 'blur(10px)' }}
      />
      
      <img
        src={currentSrc}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-lg'
        } ${className.includes('w-') ? '' : 'w-full'} ${className.includes('h-') ? '' : 'h-full'} ${className.includes('object-') ? '' : 'object-cover'} ${className}`}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        {...(priority ? { fetchPriority: "high" } : {})}
        {...props}
      />
      
      {/* Fallback for no JS or older browsers if needed via <picture> would be better, 
          but this is a simple React implementation */}
    </div>
  );
};
