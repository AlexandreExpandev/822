import { useNavigate } from 'react-router-dom';
import { Container } from '@/core/components/Container';
import { Button } from '@/core/components/Button';

/**
 * @page NotFoundPage
 * @summary 404 page for handling non-existent routes
 * @type error-page
 * @category error
 */
export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container className="py-16">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button onClick={() => navigate('/')}>Return to Home</Button>
      </div>
    </Container>
  );
}

export default NotFoundPage;
