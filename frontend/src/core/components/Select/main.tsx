import { forwardRef } from 'react';
import { selectVariants } from './variants';
import type { SelectProps } from './types';

/**
 * @component Select
 * @summary Dropdown select component for choosing from a list of options
 * @domain core
 * @type ui-component
 * @category input
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      placeholder,
      variant = 'default',
      size = 'md',
      fullWidth = false,
      isDisabled = false,
      isInvalid = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const variantClasses = selectVariants({ variant, size, fullWidth, isInvalid });

    return (
      <select
        ref={ref}
        className={`${variantClasses} ${className}`}
        disabled={isDisabled}
        {...props}
      >
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
