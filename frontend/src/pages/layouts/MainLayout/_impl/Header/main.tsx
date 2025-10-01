import { Link, useNavigate } from 'react-router-dom';
import { Container } from '@/core/components/Container';
import { useLanguages } from '@/domain/language/hooks/useLanguages';
import { LanguageSelector } from '@/domain/language/components/LanguageSelector';

/**
 * @component Header
 * @summary Application header with navigation and language selector
 */
export function Header() {
  const navigate = useNavigate();
  const { languages } = useLanguages();

  return (
    <header className="bg-white shadow-sm py-4">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary-600">
              Hello World Generator
            </Link>
          </div>

          <div className="w-full md:w-auto md:max-w-md">
            {languages.length > 0 && <LanguageSelector languages={languages} />}
          </div>
        </div>
      </Container>
    </header>
  );
}
