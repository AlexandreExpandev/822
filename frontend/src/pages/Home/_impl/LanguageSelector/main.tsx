import { useEffect, useState } from 'react';
import { FormControl } from '@/core/components/FormControl';
import { Select } from '@/core/components/Select';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import { useLanguages } from '@/domain/language/hooks/useLanguages';
import type { LanguageSelectorProps } from './types';
import type { SelectOption } from '@/core/components/Select';

/**
 * @component LanguageSelector
 * @summary Component for selecting a programming language
 * @domain language
 * @type ui-component
 * @category input
 */
export const LanguageSelector = ({ onSelectLanguage }: LanguageSelectorProps) => {
  const { languages, isLoading, error } = useLanguages();
  const [options, setOptions] = useState<SelectOption[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>('');

  useEffect(() => {
    if (languages.length > 0) {
      const languageOptions = languages.map((lang) => ({
        value: lang.id.toString(),
        label: lang.name,
      }));
      setOptions(languageOptions);
    }
  }, [languages]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedValue(value);

    if (value) {
      const languageId = parseInt(value, 10);
      const selectedLanguage = languages.find((lang) => lang.id === languageId);
      if (selectedLanguage) {
        onSelectLanguage(selectedLanguage);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-4">
        <LoadingSpinner size="md" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 py-2">Failed to load languages. Please try again.</div>;
  }

  return (
    <FormControl label="Programming Language" htmlFor="language-select">
      <Select
        id="language-select"
        options={options}
        value={selectedValue}
        onChange={handleChange}
        placeholder="Select a language"
        fullWidth
      />
    </FormControl>
  );
};
