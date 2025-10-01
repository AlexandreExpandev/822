import { Component, ReactNode } from 'react';
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

/**
 * @component ErrorBoundary
 * @summary Catches and displays errors in the component tree
 * @domain core
 * @type utility-component
 * @category error-handling
 */
export class ErrorBoundaryClass extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Error caught by boundary:', error, errorInfo);
    // Here you could log the error to an error reporting service
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 text-center">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Something went wrong</h1>
              <p className="text-gray-600 mb-6">
                {this.state.error?.message || 'An unexpected error occurred'}
              </p>
              <div className="flex justify-center space-x-4">
                <button onClick={() => window.location.reload()} className="btn-primary">
                  Refresh page
                </button>
                <Link to="/" className="btn-outline">
                  Go to homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * @component ErrorBoundary
 * @summary Router error boundary component that displays route errors
 */
export const ErrorBoundary = () => {
  const error = useRouteError();

  let errorMessage = 'An unexpected error occurred';
  let errorStatus = '500';

  if (isRouteErrorResponse(error)) {
    errorStatus = String(error.status);
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-6xl font-extrabold text-gray-900 mb-2">{errorStatus}</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{errorMessage}</p>
          <div className="flex justify-center space-x-4">
            <button onClick={() => window.location.reload()} className="btn-primary">
              Refresh page
            </button>
            <Link to="/" className="btn-outline">
              Go to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
