import { useNavigate } from 'react-router-dom';
import { Select } from '@/core/components/Select';
import { Button } from '@/core/components/Button';
import { useState } from 'react';
import type { LanguageSelectorProps } from './types';

/**
 * @component LanguageSelector
 * @summary Dropdown selector for programming languages
 * @domain language
 * @type domain-component
 * @category input
 */
export function LanguageSelector({ languages }: LanguageSelectorProps) {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedLanguage) {
      navigate(`/code/${selectedLanguage}`);
    }
  };

  const options = languages.map((lang) => ({
    value: lang.name,
    label: lang.displayName,
  }));

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <Select
        options={options}
        value={selectedLanguage}
        onChange={handleChange}
        placeholder="Select a programming language"
        className="flex-grow"
        required
      />
      <Button type="submit" disabled={!selectedLanguage}>
        Generate Code
      </Button>
    </form>
  );
}
