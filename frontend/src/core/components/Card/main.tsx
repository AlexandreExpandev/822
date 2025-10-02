import { cardVariants } from './variants';
import type { CardProps } from './types';

/**
 * @component Card
 * @summary Container component with different variants for displaying content in a box
 * @domain core
 * @type ui-component
 * @category display
 */
export const Card = ({ children, variant = 'default', className = '', ...props }: CardProps) => {
  const variantClasses = cardVariants({ variant });

  return (
    <div className={`${variantClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};
