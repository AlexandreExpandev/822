import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @utility cn
 * @summary Utility for conditionally joining class names with Tailwind support
 * @type utility-function
 * @category styling
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
