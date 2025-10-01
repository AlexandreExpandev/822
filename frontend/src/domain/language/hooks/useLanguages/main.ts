import { useQuery } from '@tanstack/react-query';
import { languageService } from '../../services/languageService';
import type { UseLanguagesOptions, UseLanguagesReturn } from './types';

/**
 * @hook useLanguages
 * @summary Hook for fetching and managing programming languages
 * @domain language
 * @type domain-hook
 */
export const useLanguages = (options: UseLanguagesOptions = {}): UseLanguagesReturn => {
  const { enabled = true } = options;

  // Query for languages
  const {
    data: languages = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['languages'],
    queryFn: () => languageService.listLanguages(),
    enabled,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours - languages don't change often
  });

  return {
    languages,
    isLoading,
    error,
    refetchLanguages: refetch,
  };
};
