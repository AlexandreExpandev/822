import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { languageService } from '../../services/languageService';
import type { UseLanguagesOptions, UseLanguagesReturn } from './types';
import type { Language } from '../../types';

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
  });

  // Handle success callback with useEffect
  useEffect(() => {
    if (languages && options.onSuccess) {
      options.onSuccess(languages as Language[]);
    }
  }, [languages, options.onSuccess]);

  // Handle error callback with useEffect
  useEffect(() => {
    if (error && options.onError) {
      options.onError(error);
    }
  }, [error, options.onError]);

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
    languages: (languages as Language[]) || [],
    isLoading,
    error,
    refetch,
    getLanguage,
  };
};
