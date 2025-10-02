import { Component, ReactNode } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import type { ErrorBoundaryProps, ErrorBoundaryState } from './types';

/**
 * @component ErrorFallback
 * @summary Displays error information when an error is caught
 * @domain core
 * @type ui-component
 * @category feedback
 */
export const ErrorFallback = () => {
  const error = useRouteError();

  let errorMessage = 'An unexpected error occurred';
  let statusCode = 500;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.data?.message || 'Page not found';
    statusCode = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">{statusCode}</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Oops! Something went wrong</h2>
        <p className="text-gray-600 mb-6">{errorMessage}</p>
        <button onClick={() => (window.location.href = '/')} className="btn btn-primary">
          Go to Home
        </button>
      </div>
    </div>
  );
};

/**
 * @component ErrorBoundary
 * @summary Class component that catches JavaScript errors in child components
 * @domain core
 * @type error-boundary
 * @category error-handling
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback || <ErrorFallback />;
    }

    return this.props.children;
  }
}
