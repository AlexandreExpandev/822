import { useState } from 'react';
import { Card } from '@/core/components/Card';
import { LanguageSelector } from './_impl/LanguageSelector';
import { CodeDisplay } from './_impl/CodeDisplay';
import { ActionButtons } from './_impl/ActionButtons';
import { useCodeGenerator } from '@/domain/code/hooks/useCodeGenerator';
import type { Language } from '@/domain/language/types';

/**
 * @page HomePage
 * @summary Main page for generating and viewing Hello World code
 * @domain code
 * @type page-component
 * @category code-generation
 */
export const HomePage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);

  const { generatedCode, isGenerating, isDownloading, generateCode, downloadCode } =
    useCodeGenerator();

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    generateCode(language.id);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Hello World Generator</h1>
        <p className="text-lg text-gray-600">
          Generate Hello World code in multiple programming languages
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Select a Programming Language</h2>
          <LanguageSelector onSelectLanguage={handleLanguageSelect} />
        </Card>

        {(generatedCode || isGenerating) && (
          <Card className="p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {generatedCode
                  ? `Hello World in ${generatedCode.languageName}`
                  : 'Generating Code...'}
              </h2>
              <ActionButtons
                isGenerating={isGenerating}
                isDownloading={isDownloading}
                onDownload={downloadCode}
                showDownload={!!generatedCode}
              />
            </div>
            <CodeDisplay
              code={generatedCode?.code || ''}
              language={generatedCode?.languageName.toLowerCase() || ''}
              isLoading={isGenerating}
            />
          </Card>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600">Select a language above to generate Hello World code.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
