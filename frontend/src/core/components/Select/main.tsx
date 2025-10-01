import { forwardRef } from 'react';
import { cn } from '@/core/utils/cn';
import type { SelectProps } from './types';

/**
 * @component Select
 * @summary Dropdown select component for choosing from options
 * @type ui-component
 * @category input
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, placeholder, ...props }, ref) => {
    return (
      <select className={cn('select w-full', className)} ref={ref} {...props}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = 'Select';
