import { useEffect, useRef } from 'react';
import { CodeBlock } from '@/core/components/CodeBlock';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import type { CodeDisplayProps } from './types';

/**
 * @component CodeDisplay
 * @summary Component for displaying generated code with syntax highlighting
 * @domain code
 * @type ui-component
 * @category display
 */
export const CodeDisplay = ({ code, language, isLoading }: CodeDisplayProps) => {
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (codeRef.current && !isLoading && code) {
      codeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [code, isLoading]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!code) {
    return null;
  }

  return (
    <div ref={codeRef} className="rounded-lg overflow-hidden">
      <CodeBlock code={code} language={language} />
    </div>
  );
};
