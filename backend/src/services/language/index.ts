import { languageTypes } from './languageTypes';

/**
 * Service for managing programming languages
 */
export const languageService = {
  /**
   * Lists all available programming languages
   * @returns Array of language objects with id, name, and extension
   */
  listLanguages: async (): Promise<languageTypes.Language[]> => {
    return languageTypes.SUPPORTED_LANGUAGES;
  },

  /**
   * Gets a specific language by its identifier
   * @param id Language identifier
   * @returns Language object if found, undefined otherwise
   */
  getLanguageById: async (id: string): Promise<languageTypes.Language | undefined> => {
    return languageTypes.SUPPORTED_LANGUAGES.find((lang) => lang.id === id);
  },
};
