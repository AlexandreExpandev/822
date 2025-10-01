import type { Language } from '../../types';

export interface UseLanguagesOptions {
  /**
   * Whether to enable the query automatically
   * @default true
   */
  enabled?: boolean;
}

export interface UseLanguagesReturn {
  /**
   * List of available languages
   */
  languages: Language[];

  /**
   * Loading state
   */
  isLoading: boolean;

  /**
   * Error state
   */
  error: unknown;

  /**
   * Function to refetch languages
   */
  refetchLanguages: () => Promise<any>;
}
