import { HTMLAttributes } from 'react';

export interface ErrorMessageProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  message?: string;
  onRetry?: () => void;
}
