import { ReactNode } from 'react';

export interface ErrorBoundaryProps {
  /**
   * Components that might throw errors
   */
  children: ReactNode;

  /**
   * Custom fallback UI to display when an error occurs
   */
  fallback?: ReactNode;
}

export interface ErrorBoundaryState {
  /**
   * Whether an error has been caught
   */
  hasError: boolean;

  /**
   * The error that was caught, if any
   */
  error: Error | null;
}
