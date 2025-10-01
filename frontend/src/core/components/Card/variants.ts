import type { CardVariantProps } from './types';

export const cardVariants = ({ variant = 'default' }: CardVariantProps): string => {
  // Base classes for all cards
  const baseClasses = 'bg-white rounded-lg overflow-hidden';

  // Variant classes
  const variantClasses = {
    default: 'shadow-sm',
    bordered: 'border border-gray-200',
    elevated: 'shadow-md',
  }[variant];

  return `${baseClasses} ${variantClasses}`;
};
