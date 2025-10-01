import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { codeService } from '../../services/codeService';
import type { UseCodeGenerationOptions, UseCodeGenerationReturn } from './types';

/**
 * @hook useCodeGeneration
 * @summary Hook for generating and managing code examples
 * @domain code
 * @type domain-hook
 */
export const useCodeGeneration = (
  options: UseCodeGenerationOptions = {}
): UseCodeGenerationReturn => {
  const { language = '', enabled = false } = options;

  const [selectedLanguage, setSelectedLanguage] = useState<string>(language);

  // Query for code generation
  const {
    data: code,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['code', selectedLanguage],
    queryFn: () => codeService.generateCode(selectedLanguage),
    enabled: enabled && !!selectedLanguage,
    staleTime: Infinity, // Code examples don't change, so we can cache them indefinitely
  });

  // Handle language selection
  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
  };

  // Handle code download
  const downloadCode = async () => {
    if (selectedLanguage) {
      await codeService.downloadCode(selectedLanguage);
    }
  };

  // Get download URL
  const getDownloadUrl = () => {
    if (selectedLanguage) {
      return codeService.getDownloadUrl(selectedLanguage);
    }
    return '';
  };

  return {
    code,
    isLoading,
    error,
    selectedLanguage,
    selectLanguage,
    downloadCode,
    getDownloadUrl,
    refetchCode: refetch,
  };
};
