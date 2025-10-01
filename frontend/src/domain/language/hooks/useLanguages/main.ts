import { useQuery } from '@tanstack/react-query';
import { languageService } from '../../services/languageService';
import type { UseLanguagesOptions, UseLanguagesReturn } from './types';

/**
 * @hook useLanguages
 * @summary Hook for fetching and managing programming languages
 * @domain language
 * @type domain-hook
 * @category data
 */
export function useLanguages(options: UseLanguagesOptions = {}): UseLanguagesReturn {
  const { enabled = true } = options;

  const {
    data: languages,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['languages'],
    queryFn: languageService.listLanguages,
    enabled,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    languages: languages || [],
    isLoading,
    error,
    refetch,
  };
}
