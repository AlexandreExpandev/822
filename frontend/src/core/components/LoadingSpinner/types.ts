import { HTMLAttributes } from 'react';

export type SpinnerSize = 'sm' | 'default' | 'large';

export interface LoadingSpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
}
