import { CodeBlock } from '@/core/components/CodeBlock';
import { Button } from '@/core/components/Button';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import type { CodeDisplayProps } from './types';

/**
 * @component CodeDisplay
 * @summary Component for displaying generated code with syntax highlighting
 * @domain code
 * @type ui-component
 */
export const CodeDisplay = ({ code, isLoading, onDownload }: CodeDisplayProps) => {
  if (isLoading) {
    return (
      <div className="py-8 flex flex-col items-center justify-center">
        <LoadingSpinner size="md" />
        <p className="mt-4 text-gray-600">Generating code...</p>
      </div>
    );
  }

  if (!code) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-600">Select a language to generate code</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium text-gray-900">Hello World in {code.language}</h3>
        <Button variant="primary" size="sm" onClick={onDownload}>
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download
        </Button>
      </div>

      <div className="border rounded-md overflow-hidden">
        <CodeBlock code={code.content} language={code.language.toLowerCase()} className="text-sm" />
      </div>

      <div className="mt-2 text-xs text-gray-500">File extension: .{code.extension}</div>
    </div>
  );
};
