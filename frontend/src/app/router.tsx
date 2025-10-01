import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { MainLayout } from '@/pages/layouts/MainLayout';
import { ErrorBoundary } from '@/core/components/ErrorBoundary';

// Lazy-loaded pages
const HomePage = lazy(() => import('@/pages/Home'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

/**
 * @router AppRouter
 * @summary Main application routing configuration with lazy loading
 * @type router-configuration
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
