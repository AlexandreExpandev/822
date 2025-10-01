import { AppRouter } from './router';
import { AppProviders } from './providers';

/**
 * @component App
 * @summary Root application component that sets up providers and routing
 */
export function App() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
}
