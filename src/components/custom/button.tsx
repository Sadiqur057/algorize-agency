'use client';

import { useRef, useState, forwardRef } from 'react';
import clsx from 'clsx';

interface AnimatedButtonProps {
  text?: string;
  afterText?: string;
  width?: string;
  mobileWidth?: string;
  height?: string;
  mobileHeight?: string;
  fontSize?: string;
  radius?: string;
  textColor?: string;
  afterBgColor?: string;
  afterTextColor?: string;
  icon?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  variant?: 'default' | 'outline';
  theme?: 'light' | 'dark';
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(function AnimatedButton({
  text = 'Button',
  afterText = '',
  width = '190px',
  mobileWidth = '160px',
  height = '50px',
  mobileHeight = '45px',
  fontSize = '16px',
  radius = '50px',
  textColor,
  afterBgColor,
  afterTextColor,
  icon = false,
  className,
  onClick,
  children,
  variant = 'default',
  theme = "dark",
  ...props
}, ref) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Ripple effect
  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(button.clientWidth, button.clientHeight);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.position = 'absolute';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.background = 'rgba(255, 255, 255, 0.3)';
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'scale(0)';
    ripple.style.opacity = '1';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'ripple-animation 600ms ease-out';
    ripple.className = 'ripple';

    button.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleRipple(e);
    if (onClick) onClick(e);
  };

  // Smart defaults based on variant and theme
  const resolvedTextColor =
    textColor ??
    (variant === 'outline'
      ? theme === 'dark'
        ? '#9cfe4f'
        : '#ccff00'
      : '#262626');

  const resolvedAfterBgColor =
    afterBgColor ??
    (variant === 'outline'
      ? theme === 'dark'
        ? '#161616'
        : '#282828'
      : '#282828');

  const resolvedAfterTextColor = afterTextColor ?? '#ffffff';

  return (
    <div className='inline-block'>
      <button
        ref={(el) => {
          buttonRef.current = el;
          if (typeof ref === 'function') ref(el);
          else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = el;
        }}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
        className={clsx(
          'relative overflow-hidden p-0 cursor-pointer transition-transform duration-100 active:scale-95',
          'border border-primary custom-button-size',
          variant === 'default' && 'bg-accent-primary',
          variant === 'outline' && 'bg-transparent',
          icon && 'flex items-center justify-center w-[45px]! md:w-[50px]! aspect-square!',
          // Only apply default responsive classes if not icon
          !icon && 'text-sm md:text-base h-[45px] md:h-[50px]',
          className
        )}
        style={{
          borderRadius: radius,
          ...(icon
            ? {}
            : {
              '--mobile-width': mobileWidth,
              '--desktop-width': width,
              '--mobile-height': mobileHeight,
              '--desktop-height': height,
              '--font-size': fontSize,
              width: 'var(--mobile-width)',
              height: 'var(--mobile-height)',
              fontSize: 'var(--font-size)',
            }
          ),
        }}
      >
        {/* Top Layer */}
        <div
          className={clsx(
            'absolute left-0 w-full h-full font-semibold transition-all duration-300',
            'flex items-center justify-center',
            isHovered ? '-top-full' : 'top-0'
          )}
          style={{
            color: resolvedTextColor,
          }}
        >
          {/* {banner && <Image src={buttonClick} alt="Button Click Animation" className="w-8 h-8 mr-2 " height={100} width={100} />} */}
          {children || text}
        </div>

        {/* Hover Layer */}
        <div
          className={clsx(
            'absolute left-0 w-full h-full font-semibold transition-all duration-300',
            'flex items-center justify-center', // 👈 added
            isHovered ? 'top-0' : 'top-full'
          )}
          style={{
            backgroundColor: resolvedAfterBgColor,
            color: resolvedAfterTextColor,
            borderRadius: radius,
          }}
        >
          {/* {banner && <Image src={buttonClick} alt="Button Click Animation" className="w-8 h-8 mr-2  invert brightness-0" height={100} width={100} />} */}
          {afterText || children || text}
        </div>

        {/* Ripple animation */}
        <style>{`
          @keyframes ripple-animation {
            to {
              transform: scale(3);
              opacity: 0;
            }
          }
          .ripple {
            position: absolute;
            z-index: 10;
          }
          .custom-button-size {
            @media (min-width: 768px) {
              width: var(--desktop-width) !important;
              height: var(--desktop-height) !important;
            }
          }
        `}</style>
      </button>
    </div>
  );
});
