import { api } from '@/core/lib/api';
import type { ApiResponse } from '@/core/types/api';
import type { Language } from '../types';

/**
 * @service languageService
 * @summary Service for managing programming languages
 * @domain language
 * @type api-service
 */
export const languageService = {
  /**
   * Lists all available programming languages
   */
  async listLanguages(): Promise<Language[]> {
    const response = await api.get<ApiResponse<Language[]>>('/external/public/languages');
    return response.data;
  },
};
