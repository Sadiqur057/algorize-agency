import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib';

type SocialProofBadgeProps = {
  text: string;
  className?: string;
  /** Provide avatar images to render a stacked avatar group */
  avatars?: Array<{ src: string; alt?: string }>;
  /** Fallback: when avatars not provided, show this many numbered placeholders */
  avatarsCount?: number;
};

const SocialProofBadge: React.FC<SocialProofBadgeProps> = ({
  text,
  className,
  avatars,
  avatarsCount,
}) => {
  return (
    <div
      className={cn(
        // Original base styling with enhanced effects
        'inline-flex items-center bg-bg-secondary/80 backdrop-blur-sm border border-border-primary rounded-full px-3 sm:px-4 py-1.5 sm:py-2',
        // Enhanced shadows and transforms
        // 'shadow-lg hover:shadow-xl hover:shadow-accent-primary/20',
        // group
        'transition-all duration-300 ease-out relative  cursor-pointer overflow-hidden',
        // Hover transforms
        'hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0',
        // Enhanced border on hover
        'hover:border-accent-primary/40 hover:bg-bg-secondary/90',
        className
      )}
    >
      {/* Animated background glow - multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/0 via-accent-primary/20 to-accent-hover/0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md -z-10 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-accent-hover/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

      {/* Shimmer effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out pointer-events-none"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
        <div className="absolute w-1 h-1 bg-accent-primary/80 rounded-full top-2 left-6 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-100"></div>
        <div className="absolute w-1 h-1 bg-accent-hover/80 rounded-full top-4 right-8 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-200"></div>
        <div className="absolute w-0.5 h-0.5 bg-accent-secondary/90 rounded-full bottom-3 left-10 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-300"></div>
      </div>

      {/* Custom avatars with enhanced animations */}
      {Array.isArray(avatars) && avatars.length > 0 ? (
        <div className="flex -space-x-2 mr-1 md:mr-3 group-hover:-space-x-1 transition-all duration-300">
          {avatars.map((avatar, index) => (
            <div
              key={`${avatar.src}-${index}`}
              className={cn(
                'w-8 h-8 rounded-full border-2 border-accent-primary/60 shadow-lg overflow-hidden relative',
                'transition-all duration-300 ease-out',
                'group-hover:scale-110 group-hover:border-accent-primary group-hover:shadow-accent-primary/40 group-hover:-translate-y-1',
                'hover:z-50 hover:scale-125 hover:rotate-12 hover:shadow-xl',
                'group-hover:animate-pulse'
              )}
              style={{
                zIndex: (avatars?.length || 0) - index,
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <Image
                src={avatar.src}
                alt={avatar.alt || 'Avatar'}
                width={32}
                height={32}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Individual glow effect */}
              <div className="absolute inset-0 bg-accent-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-soft-light"></div>
            </div>
          ))}
        </div>
      ) : typeof avatarsCount === 'number' && avatarsCount > 0 ? (
        <div className="flex -space-x-2 mr-3 group-hover:-space-x-1 transition-all duration-300">
          {Array.from({ length: avatarsCount }).map((_, index) => (
            <div
              key={index}
              className={cn(
                'w-8 h-8 rounded-full bg-gradient-to-br from-accent-primary via-accent-hover to-accent-secondary',
                'border-2 border-bg-primary flex items-center justify-center text-text-accent text-xs font-bold shadow-lg',
                'transition-all duration-300 ease-out relative overflow-hidden',
                'group-hover:scale-110 group-hover:shadow-accent-primary/40 group-hover:-translate-y-1',
                'hover:z-50 hover:scale-125 hover:rotate-12 hover:shadow-xl',
                'group-hover:animate-pulse'
              )}
              style={{
                zIndex: avatarsCount - index,
                transitionDelay: `${index * 75}ms`,
              }}
            >
              <span className="relative z-10 drop-shadow-sm font-semibold">
                {index + 1}
              </span>
              {/* Ripple effect */}
              <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500"></div>
              {/* Inner shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="hidden sm:flex -space-x-1 sm:-space-x-2 mr-0 sm:mr-3 group-hover:mr-4 group-hover:-space-x-0.5 transition-all duration-300">
          <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-accent-primary to-accent-hover border border-bg-primary sm:border-2 shadow-lg shadow-accent-primary/30 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1 hover:scale-125 hover:rotate-45 group-hover:animate-pulse"></div>
          <div
            className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-accent-hover to-accent-secondary border border-bg-primary sm:border-2 shadow-lg shadow-accent-hover/30 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1 hover:scale-125 hover:rotate-45 group-hover:animate-pulse"
            style={{ transitionDelay: '100ms' }}
          ></div>
          <div
            className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-accent-secondary to-accent-light border border-bg-primary sm:border-2 shadow-lg shadow-accent-secondary/30 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1 hover:scale-125 hover:rotate-45 group-hover:animate-pulse"
            style={{ transitionDelay: '200ms' }}
          ></div>
        </div>
      )}

      {/* Enhanced text with original styling */}
      <span
        className={cn(
          'text-xs sm:text-sm text-text-muted font-medium relative z-10',
          'group-hover:text-text-secondary group-hover:tracking-wide transition-all duration-300',
          'group-hover:drop-shadow-sm'
        )}
      >
        {text}
      </span>

      {/* Additional border glow effect */}
      <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-accent-primary/20 transition-all duration-500"></div>

      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-primary/5 to-accent-hover/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default SocialProofBadge;
