import { HTMLAttributes } from 'react';

export interface CodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  code: string;
  language: string;
}
