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
      value,
      onChange,
      placeholder,
      disabled = false,
      className = '',
      variant = 'default',
      size = 'md',
      error,
      ...props
    },
    ref
  ) => {
    const variantClasses = selectVariants({ variant, size, hasError: !!error });

    return (
      <div className="w-full">
        <select
          ref={ref}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`${variantClasses} ${className}`}
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
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';
