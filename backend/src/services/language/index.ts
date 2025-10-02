import { languageTypes } from './languageTypes';

/**
 * Retrieves a list of all supported programming languages
 *
 * @returns Array of language objects
 */
export async function languageList(): Promise<LanguageInfo[]> {
  return languageTypes;
}

/**
 * Retrieves information for a specific programming language
 *
 * @param id - Language identifier
 * @returns Language information or null if not found
 */
export async function languageGet(id: number): Promise<LanguageInfo | null> {
  const language = languageTypes.find((lang) => lang.id === id);
  return language || null;
}
