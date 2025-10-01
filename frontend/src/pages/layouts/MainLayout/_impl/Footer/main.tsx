/**
 * @component Footer
 * @summary Application footer
 * @type layout-component
 */
export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Hello World Generator. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
