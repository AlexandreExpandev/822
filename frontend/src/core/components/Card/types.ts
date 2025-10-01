import { HTMLAttributes, ReactNode } from 'react';

export type CardVariant = 'default' | 'bordered' | 'elevated';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Card content
   */
  children: ReactNode;

  /**
   * Card visual variant
   * @default 'default'
   */
  variant?: CardVariant;

  /**
   * Additional CSS classes
   */
  className?: string;
}

export type CardVariantProps = {
  variant?: CardVariant;
};
