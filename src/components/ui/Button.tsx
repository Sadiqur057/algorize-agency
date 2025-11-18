import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { ButtonProps } from '@/types/components';
import { cn } from '@/lib';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  loading = false,
  type = 'button',
  className,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary:
      'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 shadow-lg hover:shadow-xl',
    secondary:
      'bg-secondary-800 text-white hover:bg-secondary-700 focus:ring-secondary-500 shadow-lg hover:shadow-xl',
    outline:
      'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500',
    ghost: 'text-secondary-700 hover:bg-secondary-100 focus:ring-secondary-500',
    neon: 'relative text-primary-900 bg-gradient-to-b from-[#d7ff4d] to-[#baff00] border border-[#c1ff1a]/60 shadow-[0_0_0_2px_rgba(0,0,0,0.2),0_10px_25px_-5px_rgba(186,255,0,0.4)] hover:shadow-[0_0_0_2px_rgba(0,0,0,0.2),0_15px_35px_-5px_rgba(186,255,0,0.6)] focus:ring-[#baff00]',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {/* subtle inner highlight for neon */}
      {variant === 'neon' && (
        <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-black/5 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      )}
      {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {children}
    </motion.button>
  );
};

export default Button;
