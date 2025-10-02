import { UseQueryResult } from '@tanstack/react-query';
import type { Language } from '../../types';

/**
 * Options for the useLanguages hook
 */
export interface UseLanguagesOptions {
  /**
   * Callback when languages are successfully fetched
   */
  onSuccess?: (languages: Language[]) => void;

  /**
   * Callback when an error occurs
   */
  onError?: (error: unknown) => void;
}

/**
 * Return type for the useLanguages hook
 */
export interface UseLanguagesReturn {
  /**
   * List of available programming languages
   */
  languages: Language[];

  /**
   * Whether languages are currently being loaded
   */
  isLoading: boolean;

  /**
   * Error that occurred during language fetching, if any
   */
  error: unknown;

  /**
   * Function to refetch languages
   */
  refetch: () => void;

  /**
   * Function to get a specific language by ID
   */
  getLanguage: (id: number) => UseQueryResult<Language, unknown>;
}
