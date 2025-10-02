export type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl' | 'large';

export interface LoadingSpinnerProps {
  /**
   * Size of the spinner
   * @default 'md'
   */
  size?: SpinnerSize;

  /**
   * Additional CSS classes to apply
   */
  className?: string;
}
