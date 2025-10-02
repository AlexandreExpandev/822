import { SelectVariant, SelectSize } from './types';

type SelectVariantProps = {
  variant: SelectVariant;
  size: SelectSize;
  fullWidth: boolean;
  isInvalid: boolean;
};

export const selectVariants = ({
  variant,
  size,
  fullWidth,
  isInvalid,
}: SelectVariantProps): string => {
  // Base classes for all selects
  const baseClasses =
    'rounded-md shadow-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';

  // Size classes
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-3 text-base',
  }[size];

  // Variant classes
  const variantClasses = {
    default: 'border border-gray-300 focus:border-primary-500 focus:ring-primary-500',
    outline: 'border-2 border-gray-300 focus:border-primary-500 focus:ring-primary-500',
    filled:
      'bg-gray-100 border border-transparent focus:bg-white focus:border-primary-500 focus:ring-primary-500',
  }[variant];

  // Invalid state
  const invalidClasses = isInvalid
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500 text-red-900 placeholder-red-300'
    : '';

  return `${baseClasses} ${widthClasses} ${sizeClasses} ${variantClasses} ${invalidClasses}`;
};
