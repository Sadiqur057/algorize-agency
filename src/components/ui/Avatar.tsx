import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib';
import { AvatarProps } from '@/types/components';

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  fallback,
  className,
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg',
    xl: 'w-24 h-24 text-xl',
  };

  const getFallbackText = () => {
    if (fallback) return fallback;
    if (alt) return alt.charAt(0).toUpperCase();
    return '?';
  };

  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center rounded-full bg-secondary-100 text-secondary-600 font-medium overflow-hidden',
        sizeClasses[size],
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt || 'Avatar'}
          fill
          className="object-cover"
        />
      ) : (
        <span>{getFallbackText()}</span>
      )}
    </div>
  );
};

export default Avatar;
