import { CodeBlock } from '@/core/components/CodeBlock';
import { Button } from '@/core/components/Button';
import { useCodeDownload } from '@/core/hooks/useCodeDownload';
import type { CodeDisplayProps } from './types';

/**
 * @component CodeDisplay
 * @summary Displays code with syntax highlighting and download option
 * @domain code
 * @type domain-component
 * @category display
 */
export function CodeDisplay({ code, language, fileExtension }: CodeDisplayProps) {
  const { downloadCode, isDownloading } = useCodeDownload({ language });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Hello World in {language}</h3>
        <Button onClick={downloadCode} disabled={isDownloading} variant="primary">
          {isDownloading ? 'Downloading...' : 'Download'}
        </Button>
      </div>

      <CodeBlock code={code} language={fileExtension} className="mt-4 max-h-96 overflow-y-auto" />

      <div className="text-sm text-gray-500 mt-2">File extension: .{fileExtension}</div>
    </div>
  );
}
