import { useParams, useNavigate } from 'react-router-dom';
import { Container } from '@/core/components/Container';
import { Card } from '@/core/components/Card';
import { Button } from '@/core/components/Button';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import { ErrorMessage } from '@/core/components/ErrorMessage';
import { CodeDisplay } from '@/domain/code/components/CodeDisplay';
import { useCodeViewer } from '@/domain/code/hooks/useCodeViewer';

/**
 * @page CodeViewPage
 * @summary Page for viewing and downloading generated code
 * @type detail-page
 * @category code-view
 */
export function CodeViewPage() {
  const { language } = useParams<{ language: string }>();
  const navigate = useNavigate();

  const { codeData, isLoading, error, refetch } = useCodeViewer({
    language: language || '',
  });

  return (
    <Container className="py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Hello World Code</h1>
        <Button variant="outline" onClick={() => navigate('/languages')}>
          Choose Another Language
        </Button>
      </div>

      <Card className="overflow-hidden">
        {isLoading ? (
          <div className="flex justify-center py-12">
            <LoadingSpinner size="large" />
          </div>
        ) : error ? (
          <ErrorMessage title="Failed to load code" message={error.message} onRetry={refetch} />
        ) : !codeData ? (
          <ErrorMessage
            title="Language not found"
            message={`No code available for ${language}`}
            onRetry={() => navigate('/languages')}
          />
        ) : (
          <CodeDisplay
            code={codeData.code}
            language={codeData.displayName}
            fileExtension={codeData.fileExtension}
          />
        )}
      </Card>
    </Container>
  );
}

export default CodeViewPage;
