import { HTMLAttributes, ReactNode } from 'react';

export interface FormControlProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Form control content (input, select, etc.)
   */
  children: ReactNode;

  /**
   * Label text
   */
  label?: string;

  /**
   * ID of the form element the label is for
   */
  htmlFor?: string;

  /**
   * Error message to display
   */
  error?: string;

  /**
   * Additional CSS classes to apply
   */
  className?: string;
}
