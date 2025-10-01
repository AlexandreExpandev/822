export type LoadingSpinnerSize = 'sm' | 'md' | 'lg' | 'large';

export interface LoadingSpinnerProps {
  /**
   * Size of the spinner
   * @default 'md'
   */
  size?: LoadingSpinnerSize;

  /**
   * Additional CSS classes
   */
  className?: string;
}

export type LoadingSpinnerVariantProps = {
  size?: LoadingSpinnerSize;
};
