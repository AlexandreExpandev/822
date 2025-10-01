import { apiClient } from '@/core/lib/api';
import type { CodeData } from '../hooks/useCodeViewer/types';

/**
 * @service codeService
 * @summary Service for interacting with code-related API endpoints
 * @domain code
 * @type api-service
 * @category data
 */
export const codeService = {
  /**
   * Get code for a specific programming language
   * @param language - The programming language identifier
   */
  async getCodeByLanguage(language: string): Promise<CodeData> {
    const response = await apiClient.get(`/external/public/code/${language}`);
    return response.data.data;
  },
};
