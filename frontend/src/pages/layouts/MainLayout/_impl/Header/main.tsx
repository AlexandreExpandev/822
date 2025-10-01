import { Link } from 'react-router-dom';

/**
 * @component Header
 * @summary Application header with navigation
 * @type layout-component
 */
export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-primary-600 hover:text-primary-800">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          <span className="font-bold text-xl">Hello World Generator</span>
        </Link>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-primary-600">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
