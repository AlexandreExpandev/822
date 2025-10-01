export interface UseCodeDownloadOptions {
  language: string;
}

export interface UseCodeDownloadReturn {
  downloadCode: () => Promise<void>;
  isDownloading: boolean;
}
