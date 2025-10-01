import { forwardRef } from 'react';
import { cn } from '@/core/utils/cn';
import type { ButtonProps } from './types';

/**
 * @component Button
 * @summary Reusable button component with different variants
 * @type ui-component
 * @category input
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'btn',
          {
            'btn-primary': variant === 'primary',
            'btn-secondary': variant === 'secondary',
            'btn-outline': variant === 'outline',
            'h-8 px-2 text-xs': size === 'sm',
            'h-10 px-4 text-sm': size === 'default',
            'h-12 px-6 text-base': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
