import type { LoadingSpinnerVariantProps } from './types';

export const loadingSpinnerVariants = ({ size = 'md' }: LoadingSpinnerVariantProps): string => {
  // Size classes
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    large: 'h-16 w-16',
  }[size];

  return sizeClasses;
};
