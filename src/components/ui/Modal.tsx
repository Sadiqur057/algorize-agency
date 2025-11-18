import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib';
import { ModalProps } from '@/types/components';

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  size = 'md',
  children,
  className,
}) => {
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-4xl',
    xl: 'max-w-5xl',
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-bg-primary/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
            <motion.div
              className={cn(
                'w-full rounded-xl sm:rounded-2xl border border-border-primary bg-bg-secondary text-text-primary shadow-2xl',
                'ring-1 ring-black/5',
                sizeClasses[size],
                'max-h-[85vh] overflow-y-auto',
                className
              )}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              {/* Header */}
              {title && (
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border-primary/80 bg-bg-secondary/60 backdrop-blur">
                  <h2 className="text-xl font-semibold text-text-primary">
                    {title}
                  </h2>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg transition-colors duration-200 hover:bg-bg-primary/70"
                  >
                    <X className="w-5 h-5 text-text-secondary" />
                  </button>
                </div>
              )}

              {/* Content */}
              <div className="p-4 sm:p-6">{children}</div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
