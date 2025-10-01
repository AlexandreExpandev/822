import type { ButtonVariantProps } from './types';

export const buttonVariants = ({
  variant = 'primary',
  size = 'md',
}: ButtonVariantProps): string => {
  // Base classes for all buttons
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-md focus:outline-none transition-colors';

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }[size];

  // Variant classes
  const variantClasses = {
    primary:
      'bg-primary-600 hover:bg-primary-700 text-white shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
    secondary:
      'bg-secondary-600 hover:bg-secondary-700 text-white shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500',
    outline:
      'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-2 focus:ring-gray-300',
    link: 'bg-transparent underline text-primary-600 hover:text-primary-800 p-0 h-auto',
  }[variant];

  return `${baseClasses} ${sizeClasses} ${variantClasses}`;
};
