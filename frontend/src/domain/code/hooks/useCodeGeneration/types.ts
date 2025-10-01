import type { Code } from '../../types';

export interface UseCodeGenerationOptions {
  /**
   * Initial language selection
   */
  language?: string;

  /**
   * Whether to enable the query automatically
   * @default false
   */
  enabled?: boolean;
}

export interface UseCodeGenerationReturn {
  /**
   * Generated code data
   */
  code?: Code;

  /**
   * Loading state
   */
  isLoading: boolean;

  /**
   * Error state
   */
  error: unknown;

  /**
   * Currently selected language
   */
  selectedLanguage: string;

  /**
   * Function to select a language
   */
  selectLanguage: (language: string) => void;

  /**
   * Function to download the code
   */
  downloadCode: () => Promise<void>;

  /**
   * Function to get the download URL
   */
  getDownloadUrl: () => string;

  /**
   * Function to refetch the code
   */
  refetchCode: () => Promise<any>;
}
