import { Card } from '@/core/components/Card';
import { useNavigate } from 'react-router-dom';
import type { LanguageCardProps } from './types';

/**
 * @component LanguageCard
 * @summary Card component for displaying a programming language
 * @domain language
 * @type domain-component
 * @category display
 */
export function LanguageCard({ language }: LanguageCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/code/${language.name}`);
  };

  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-shadow duration-200"
      onClick={handleClick}
    >
      <div className="flex flex-col items-center text-center">
        <h3 className="text-xl font-semibold mb-2">{language.displayName}</h3>
        <div className="text-sm text-gray-500">.{language.fileExtension}</div>
      </div>
    </Card>
  );
}
