import { cn } from '@/core/utils/cn';
import { Button } from '../Button';
import type { ErrorMessageProps } from './types';

/**
 * @component ErrorMessage
 * @summary Displays error messages with optional retry functionality
 * @type ui-component
 * @category feedback
 */
export function ErrorMessage({ title, message, onRetry, className, ...props }: ErrorMessageProps) {
  return (
    <div
      className={cn(
        'rounded-md bg-red-50 border border-red-200 p-4 flex flex-col items-center justify-center text-center',
        className
      )}
      {...props}
    >
      <h3 className="text-lg font-medium text-red-800">{title || 'An error occurred'}</h3>
      {message && <p className="mt-2 text-sm text-red-700">{message}</p>}
      {onRetry && (
        <Button variant="outline" className="mt-4" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
}
