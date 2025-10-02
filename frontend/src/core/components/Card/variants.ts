import { CardVariant } from './types';

type CardVariantProps = {
  variant: CardVariant;
};

export const cardVariants = ({ variant }: CardVariantProps): string => {
  // Base classes for all cards
  const baseClasses = 'bg-white rounded-lg overflow-hidden';

  // Variant classes
  const variantClasses = {
    default: 'shadow-md',
    elevated: 'shadow-xl',
    bordered: 'border border-gray-200',
    flat: '',
  }[variant];

  return `${baseClasses} ${variantClasses}`;
};
