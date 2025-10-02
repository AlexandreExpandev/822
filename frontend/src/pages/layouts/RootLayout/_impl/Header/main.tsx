import { Link } from 'react-router-dom';

/**
 * @component Header
 * @summary Application header with navigation
 * @type ui-component
 * @category navigation
 */
export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <span className="text-xl font-bold text-gray-900">Hello World Generator</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
