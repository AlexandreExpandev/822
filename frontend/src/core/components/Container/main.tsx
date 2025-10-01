import { cn } from '@/core/utils/cn';
import type { ContainerProps } from './types';

/**
 * @component Container
 * @summary Responsive container with max-width and padding
 * @type ui-component
 * @category layout
 */
export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8', className)} {...props}>
      {children}
    </div>
  );
}
