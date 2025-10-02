import { apiClient, API_BASE_URL } from '@/core/lib/api';
import type { GeneratedCode, GenerateCodeParams } from '../types';

/**
 * @service codeService
 * @summary Service for code generation and download operations
 * @domain code
 * @type api-service
 */
export const codeService = {
  /**
   * Generates Hello World code in the specified programming language
   * @param {GenerateCodeParams} params - Parameters for code generation
   * @returns {Promise<GeneratedCode>} Generated code data
   */
  async generateCode(params: GenerateCodeParams): Promise<GeneratedCode> {
    const response = await apiClient.post('/code/generate', params);
    return response.data.data;
  },

  /**
   * Gets the download URL for the generated code
   * @param {number} languageId - ID of the programming language
   * @returns {string} URL for downloading the code file
   */
  getDownloadUrl(languageId: number): string {
    return `${API_BASE_URL}/code/download/${languageId}`;
  },
};
