import { cn } from '@/core/utils/cn';
import type { LoadingSpinnerProps } from './types';

/**
 * @component LoadingSpinner
 * @summary Displays a loading spinner with different sizes
 * @type ui-component
 * @category feedback
 */
export function LoadingSpinner({ size = 'default', className, ...props }: LoadingSpinnerProps) {
  return (
    <div className={cn('flex items-center justify-center', className)} {...props}>
      <svg
        className={cn('animate-spin text-primary-600', {
          'h-4 w-4': size === 'sm',
          'h-8 w-8': size === 'default',
          'h-12 w-12': size === 'large',
        })}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
}
