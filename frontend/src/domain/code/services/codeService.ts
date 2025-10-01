import { api } from '@/core/lib/api';
import type { ApiResponse } from '@/core/types/api';
import type { Code, CodeFile } from '../types';

/**
 * @service codeService
 * @summary Service for generating and managing code examples
 * @domain code
 * @type api-service
 */
export const codeService = {
  /**
   * Generates Hello World code for the specified programming language
   * @param language - Programming language identifier
   */
  async generateCode(language: string): Promise<Code> {
    const response = await api.get<ApiResponse<Code>>(`/external/public/code/${language}`);
    return response.data;
  },

  /**
   * Downloads Hello World code for the specified programming language as a file
   * @param language - Programming language identifier
   */
  async downloadCode(language: string): Promise<void> {
    // For file downloads, we need to use window.location to trigger browser download
    window.location.href = `${api.apiClient.defaults.baseURL}/external/public/code/${language}/download`;
  },

  /**
   * Gets the download URL for a specific language
   * @param language - Programming language identifier
   */
  getDownloadUrl(language: string): string {
    return `${api.apiClient.defaults.baseURL}/external/public/code/${language}/download`;
  },
};
