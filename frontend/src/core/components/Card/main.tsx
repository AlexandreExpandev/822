import { forwardRef } from 'react';
import { cardVariants } from './variants';
import type { CardProps } from './types';

/**
 * @component Card
 * @summary Container component for grouping related content
 * @domain core
 * @type ui-component
 * @category display
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'default', className = '', ...props }, ref) => {
    const variantClasses = cardVariants({ variant });

    return (
      <div ref={ref} className={`${variantClasses} ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
