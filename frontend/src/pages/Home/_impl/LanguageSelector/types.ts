import type { Language } from '@/domain/language/types';

export interface LanguageSelectorProps {
  /**
   * List of available languages
   */
  languages: Language[];

  /**
   * Currently selected language ID
   */
  selectedLanguage: string;

  /**
   * Handler for language selection
   */
  onSelectLanguage: (languageId: string) => void;
}
