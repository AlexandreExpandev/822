import { Select } from '@/core/components/Select';
import type { LanguageSelectorProps } from './types';

/**
 * @component LanguageSelector
 * @summary Component for selecting a programming language
 * @domain language
 * @type ui-component
 */
export const LanguageSelector = ({
  languages,
  selectedLanguage,
  onSelectLanguage,
}: LanguageSelectorProps) => {
  // Convert languages to select options
  const languageOptions = languages.map((lang) => ({
    value: lang.id,
    label: lang.name,
  }));

  return (
    <div>
      <label htmlFor="language-select" className="block text-sm font-medium text-gray-700 mb-1">
        Select Programming Language
      </label>
      <Select
        id="language-select"
        options={languageOptions}
        value={selectedLanguage}
        onChange={(e) => onSelectLanguage(e.target.value)}
        placeholder="Choose a language"
      />
    </div>
  );
};
