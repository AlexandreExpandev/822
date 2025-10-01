import { SelectHTMLAttributes, ChangeEvent } from 'react';

export type SelectOption = {
  value: string;
  label: string;
};

export type SelectVariant = 'default' | 'outline' | 'filled';
export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * Array of options for the select
   */
  options: SelectOption[];

  /**
   * Current selected value
   */
  value?: string;

  /**
   * Change handler
   */
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Whether the select is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Visual variant
   * @default 'default'
   */
  variant?: SelectVariant;

  /**
   * Size variant
   * @default 'md'
   */
  size?: SelectSize;

  /**
   * Error message
   */
  error?: string;
}

export type SelectVariantProps = {
  variant?: SelectVariant;
  size?: SelectSize;
  hasError?: boolean;
};
