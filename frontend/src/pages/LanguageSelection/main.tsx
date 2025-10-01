import { Container } from '@/core/components/Container';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import { ErrorMessage } from '@/core/components/ErrorMessage';
import { LanguageGrid } from '@/domain/language/components/LanguageGrid';
import { useLanguages } from '@/domain/language/hooks/useLanguages';

/**
 * @page LanguageSelectionPage
 * @summary Page for selecting a programming language
 * @type selection-page
 * @category language-selection
 */
export function LanguageSelectionPage() {
  const { languages, isLoading, error, refetch } = useLanguages();

  return (
    <Container className="py-8">
      <h1 className="text-3xl font-bold mb-8">Select a Programming Language</h1>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <LoadingSpinner size="large" />
        </div>
      ) : error ? (
        <ErrorMessage
          title="Failed to load languages"
          message={error.message}
          onRetry={refetch}
          className="my-8"
        />
      ) : languages.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No programming languages available.</p>
        </div>
      ) : (
        <LanguageGrid languages={languages} />
      )}
    </Container>
  );
}

export default LanguageSelectionPage;
