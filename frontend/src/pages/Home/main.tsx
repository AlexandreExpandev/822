import { useNavigate } from 'react-router-dom';
import { Container } from '@/core/components/Container';
import { Button } from '@/core/components/Button';
import { Card } from '@/core/components/Card';

/**
 * @page HomePage
 * @summary Landing page for the Hello World Generator application
 * @type landing-page
 * @category public
 */
export function HomePage() {
  const navigate = useNavigate();

  return (
    <Container className="py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Hello World Generator</h1>
        <p className="text-xl text-gray-600 mb-8">
          Generate Hello World code in multiple programming languages with just a few clicks.
        </p>

        <Button size="lg" onClick={() => navigate('/languages')} className="mb-12">
          Get Started
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Select Language</h3>
              <p className="text-gray-600">Choose from a variety of programming languages</p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">View Code</h3>
              <p className="text-gray-600">See the Hello World code with syntax highlighting</p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Download</h3>
              <p className="text-gray-600">Download the code in the appropriate file format</p>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
