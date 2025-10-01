import type { SelectVariantProps } from './types';

export const selectVariants = ({
  variant = 'default',
  size = 'md',
  hasError = false,
}: SelectVariantProps): string => {
  // Base classes for all selects
  const baseClasses = 'block w-full rounded-md shadow-sm focus:outline-none appearance-none';

  // Size classes
  const sizeClasses = {
    sm: 'py-1.5 text-xs',
    md: 'py-2 text-sm',
    lg: 'py-3 text-base',
  }[size];

  // Error classes
  const errorClasses = hasError
    ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
    : '';

  // Variant classes
  const variantClasses = {
    default: `border-gray-300 focus:ring-primary-500 focus:border-primary-500 ${errorClasses}`,
    outline: `border-2 border-gray-300 focus:ring-primary-500 focus:border-primary-500 ${errorClasses}`,
    filled: `bg-gray-100 border-transparent focus:bg-white focus:ring-primary-500 focus:border-primary-500 ${errorClasses}`,
  }[variant];

  return `${baseClasses} ${sizeClasses} ${variantClasses}`;
};
