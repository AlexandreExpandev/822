import { apiClient } from '@/core/lib/api';
import type { Language } from '../types';

/**
 * @service languageService
 * @summary Service for interacting with language-related API endpoints
 * @domain language
 * @type api-service
 * @category data
 */
export const languageService = {
  /**
   * List all available programming languages
   */
  async listLanguages(): Promise<Language[]> {
    const response = await apiClient.get('/external/public/languages');
    return response.data.data;
  },
};
