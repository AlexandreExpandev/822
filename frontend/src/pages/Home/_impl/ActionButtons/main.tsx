import { Button } from '@/core/components/Button';
import type { ActionButtonsProps } from './types';

/**
 * @component ActionButtons
 * @summary Component for code action buttons (download, copy, etc.)
 * @domain code
 * @type ui-component
 * @category input
 */
export const ActionButtons = ({
  isGenerating,
  isDownloading,
  onDownload,
  showDownload = true,
}: ActionButtonsProps) => {
  return (
    <div className="flex space-x-2">
      {showDownload && (
        <Button
          variant="primary"
          size="sm"
          onClick={onDownload}
          isLoading={isDownloading}
          disabled={isGenerating}
          leftIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          }
        >
          Download
        </Button>
      )}
    </div>
  );
};
