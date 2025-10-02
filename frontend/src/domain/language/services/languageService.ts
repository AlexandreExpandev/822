import { apiClient } from '@/core/lib/api';
import type { Language } from '../types';

/**
 * @service languageService
 * @summary Service for retrieving programming language data
 * @domain language
 * @type api-service
 */
export const languageService = {
  /**
   * Retrieves a list of all supported programming languages
   * @returns {Promise<Language[]>} List of languages
   */
  async getLanguages(): Promise<Language[]> {
    const response = await apiClient.get('/languages');
    return response.data.data;
  },

  /**
   * Retrieves details for a specific programming language
   * @param {number} id - Language identifier
   * @returns {Promise<Language>} Language details
   */
  async getLanguage(id: number): Promise<Language> {
    const response = await apiClient.get(`/languages/${id}`);
    return response.data.data;
  },
};
