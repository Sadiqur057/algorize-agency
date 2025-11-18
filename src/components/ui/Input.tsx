import React from 'react';
import { cn } from '@/lib';
import { InputProps } from '@/types/components';

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  error,
  label,
  required = false,
  className,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-secondary-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className={cn(
          'w-full px-4 py-3 border border-secondary-300 rounded-lg',
          'focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
          'transition-colors duration-200',
          'placeholder-secondary-400',
          'disabled:bg-secondary-50 disabled:cursor-not-allowed',
          error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
          className
        )}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;
