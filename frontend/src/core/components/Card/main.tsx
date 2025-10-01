import { cn } from '@/core/utils/cn';
import type { CardProps } from './types';

/**
 * @component Card
 * @summary Container component with styling for card-like UI elements
 * @type ui-component
 * @category display
 */
export function Card({ className, children, ...props }: CardProps) {
  return (
    <div className={cn('card p-6', className)} {...props}>
      {children}
    </div>
  );
}
