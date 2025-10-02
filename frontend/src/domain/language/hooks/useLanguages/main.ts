import { useQuery } from '@tanstack/react-query';
import { languageService } from '../../services/languageService';
import type { UseLanguagesOptions, UseLanguagesReturn } from './types';

/**
 * @hook useLanguages
 * @summary Hook for retrieving and managing programming languages
 * @domain language
 * @type domain-hook
 */
export const useLanguages = (options: UseLanguagesOptions = {}): UseLanguagesReturn => {
  // Query for fetching languages
  const {
    data: languages,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['languages'],
    queryFn: () => languageService.getLanguages(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    onSuccess: options.onSuccess,
    onError: options.onError,
  });

  // Query for fetching a specific language
  const getLanguage = (id: number) => {
    return useQuery({
      queryKey: ['language', id],
      queryFn: () => languageService.getLanguage(id),
      enabled: !!id,
      staleTime: 5 * 60 * 1000, // 5 minutes
    });
  };

  return {
    languages: languages || [],
    isLoading,
    error,
    refetch,
    getLanguage,
  };
};
