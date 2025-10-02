import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button content
   */
  children: ReactNode;

  /**
   * Button visual style variant
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Button size
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * Whether the button should take full width of its container
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Shows loading spinner and disables button when true
   * @default false
   */
  isLoading?: boolean;

  /**
   * Icon to display before button text
   */
  leftIcon?: ReactNode;

  /**
   * Icon to display after button text
   */
  rightIcon?: ReactNode;

  /**
   * Additional CSS classes to apply
   */
  className?: string;
}
