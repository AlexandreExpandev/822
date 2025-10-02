import { SelectHTMLAttributes } from 'react';

export type SelectVariant = 'default' | 'outline' | 'filled';
export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * Array of options to display in the select
   */
  options: SelectOption[];

  /**
   * Placeholder text when no option is selected
   */
  placeholder?: string;

  /**
   * Select visual style variant
   * @default 'default'
   */
  variant?: SelectVariant;

  /**
   * Select size
   * @default 'md'
   */
  size?: SelectSize;

  /**
   * Whether the select should take full width of its container
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Whether the select is disabled
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Whether the select has an error
   * @default false
   */
  isInvalid?: boolean;

  /**
   * Additional CSS classes to apply
   */
  className?: string;
}
