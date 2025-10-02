import { HTMLAttributes, ReactNode } from 'react';

export type CardVariant = 'default' | 'elevated' | 'bordered' | 'flat';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Card content
   */
  children: ReactNode;

  /**
   * Card visual style variant
   * @default 'default'
   */
  variant?: CardVariant;

  /**
   * Additional CSS classes to apply
   */
  className?: string;
}
