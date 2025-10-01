import { Container } from '@/core/components/Container';

/**
 * @component Footer
 * @summary Application footer with copyright information
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm">
            &copy; {currentYear} Hello World Generator. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary-600 text-sm">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 text-sm">
                Privacy
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 text-sm">
                Terms
              </a>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
}
