import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '@/pages/layouts/MainLayout';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';

// Lazy-loaded pages for code splitting
const HomePage = lazy(() => import('@/pages/Home'));
const LanguageSelectionPage = lazy(() => import('@/pages/LanguageSelection'));
const CodeViewPage = lazy(() => import('@/pages/CodeView'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

/**
 * @component AppRouter
 * @summary Main application routing configuration
 */
export function AppRouter() {
  return (
    <Suspense fallback={<LoadingSpinner size="large" />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="languages" element={<LanguageSelectionPage />} />
          <Route path="code/:language" element={<CodeViewPage />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
