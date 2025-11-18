import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib';
import { CardProps } from '@/types/components';

const Card: React.FC<CardProps> = ({
  children,
  padding = 'md',
  shadow = 'md',
  rounded = 'lg',
  className,
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };
  
  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  };

  return (
    <motion.div
      className={cn(
        'bg-white border border-secondary-200',
        paddingClasses[padding],
        shadowClasses[shadow],
        roundedClasses[rounded],
        'hover:shadow-lg transition-shadow duration-300',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
