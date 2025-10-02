import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { codeService } from '../../services/codeService';
import { downloadFile } from '@/core/lib/api';
import type { UseCodeGeneratorOptions, UseCodeGeneratorReturn } from './types';

/**
 * @hook useCodeGenerator
 * @summary Hook for generating and downloading Hello World code
 * @domain code
 * @type domain-hook
 */
export const useCodeGenerator = (options: UseCodeGeneratorOptions = {}): UseCodeGeneratorReturn => {
  const [selectedLanguageId, setSelectedLanguageId] = useState<number | null>(null);

  // Query for generating code
  const {
    data: generatedCode,
    isLoading: isGenerating,
    error: generateError,
    refetch: regenerateCode,
  } = useQuery({
    queryKey: ['generatedCode', selectedLanguageId],
    queryFn: () => {
      if (!selectedLanguageId) {
        throw new Error('No language selected');
      }
      return codeService.generateCode({ languageId: selectedLanguageId });
    },
    enabled: !!selectedLanguageId,
    onSuccess: options.onCodeGenerated,
    onError: (error) => {
      toast.error('Failed to generate code');
      options.onError?.(error);
    },
  });

  // Mutation for downloading code
  const { mutate: downloadCode, isPending: isDownloading } = useMutation({
    mutationFn: (languageId: number) => {
      const downloadUrl = codeService.getDownloadUrl(languageId);
      downloadFile(downloadUrl);
      return Promise.resolve();
    },
    onSuccess: () => {
      toast.success('Code downloaded successfully');
      options.onCodeDownloaded?.();
    },
    onError: (error) => {
      toast.error('Failed to download code');
      options.onError?.(error);
    },
  });

  const generateCode = (languageId: number) => {
    setSelectedLanguageId(languageId);
  };

  const handleDownloadCode = () => {
    if (selectedLanguageId) {
      downloadCode(selectedLanguageId);
    } else {
      toast.error('Please generate code first');
    }
  };

  return {
    generatedCode,
    isGenerating,
    isDownloading,
    generateError,
    selectedLanguageId,
    generateCode,
    downloadCode: handleDownloadCode,
    regenerateCode,
  };
};
