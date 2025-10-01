import { LanguageCard } from '../LanguageCard';
import type { LanguageGridProps } from './types';

/**
 * @component LanguageGrid
 * @summary Grid display of programming languages
 * @domain language
 * @type domain-component
 * @category display
 */
export function LanguageGrid({ languages }: LanguageGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {languages.map((language) => (
        <LanguageCard key={language.id} language={language} />
      ))}
    </div>
  );
}
