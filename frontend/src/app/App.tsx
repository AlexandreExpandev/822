import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { router } from './router';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';

/**
 * @component App
 * @summary Root application component that sets up routing and global UI elements
 * @type root-component
 */
export const App = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner size="large" />}>
        <RouterProvider router={router} />
      </Suspense>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </>
  );
};
