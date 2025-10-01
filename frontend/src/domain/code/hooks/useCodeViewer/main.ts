import { useQuery } from '@tanstack/react-query';
import { codeService } from '../../services/codeService';
import type { UseCodeViewerOptions, UseCodeViewerReturn } from './types';

/**
 * @hook useCodeViewer
 * @summary Hook for fetching and displaying code for a specific language
 * @domain code
 * @type domain-hook
 * @category data
 */
export function useCodeViewer(options: UseCodeViewerOptions): UseCodeViewerReturn {
  const { language } = options;

  const {
    data: codeData,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['code', language],
    queryFn: () => codeService.getCodeByLanguage(language),
    enabled: !!language,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    codeData,
    isLoading,
    error,
    refetch,
  };
}
