import type { Language } from '@/domain/language/types';

export interface LanguageSelectorProps {
  /**
   * Callback when a language is selected
   */
  onSelectLanguage: (language: Language) => void;
}
