import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import { cn } from '@/core/utils/cn';
import type { CodeBlockProps } from './types';

/**
 * @component CodeBlock
 * @summary Displays code with syntax highlighting
 * @type ui-component
 * @category display
 */
export function CodeBlock({ code, language, className, ...props }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <pre className={cn('code-block', className)} {...props}>
      <code ref={codeRef} className={language}>
        {code}
      </code>
    </pre>
  );
}
