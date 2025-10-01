import { useEffect } from 'react';
import { useLanguages } from '@/domain/language/hooks/useLanguages';
import { useCodeGeneration } from '@/domain/code/hooks/useCodeGeneration';
import { LanguageSelector } from './_impl/LanguageSelector';
import { CodeDisplay } from './_impl/CodeDisplay';
import { Card } from '@/core/components/Card';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';

/**
 * @page HomePage
 * @summary Main page for Hello World code generation
 * @domain code
 * @type page-component
 */
export const HomePage = () => {
  // Fetch available languages
  const { languages, isLoading: isLoadingLanguages } = useLanguages();

  // Code generation hook
  const {
    code,
    isLoading: isLoadingCode,
    selectedLanguage,
    selectLanguage,
    downloadCode,
  } = useCodeGeneration({ enabled: true });

  // Select first language when languages are loaded
  useEffect(() => {
    if (languages.length > 0 && !selectedLanguage) {
      selectLanguage(languages[0].id);
    }
  }, [languages, selectedLanguage, selectLanguage]);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Hello World Generator</h1>
        <p className="text-lg text-gray-600">
          Generate Hello World code in multiple programming languages
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        <Card className="p-6">
          {isLoadingLanguages ? (
            <div className="py-12">
              <LoadingSpinner size="lg" />
              <p className="text-center mt-4 text-gray-600">Loading languages...</p>
            </div>
          ) : (
            <>
              <LanguageSelector
                languages={languages}
                selectedLanguage={selectedLanguage}
                onSelectLanguage={selectLanguage}
              />

              <div className="mt-6">
                <CodeDisplay code={code} isLoading={isLoadingCode} onDownload={downloadCode} />
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
