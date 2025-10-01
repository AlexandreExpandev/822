import { useState } from 'react';
import { API_BASE_URL } from '@/core/constants/api';
import type { UseCodeDownloadOptions, UseCodeDownloadReturn } from './types';

/**
 * @hook useCodeDownload
 * @summary Hook for handling code download functionality
 * @type utility-hook
 * @category download
 */
export function useCodeDownload(options: UseCodeDownloadOptions): UseCodeDownloadReturn {
  const { language } = options;
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadCode = async () => {
    try {
      setIsDownloading(true);

      // Create download URL
      const downloadUrl = `${API_BASE_URL}/external/public/code/${language}/download`;

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', `HelloWorld.${language}`);

      // Append to the document and trigger click
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading code:', error);
      throw error;
    } finally {
      setIsDownloading(false);
    }
  };

  return {
    downloadCode,
    isDownloading,
  };
}
