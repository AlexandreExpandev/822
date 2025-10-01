/**
 * @module language
 * @summary Module for language selection and management functionality
 * @domain functional
 * @dependencies [core]
 * @version 1.0.0
 */

// Domain public exports - Components
export * from './components/LanguageCard';
export * from './components/LanguageGrid';
export * from './components/LanguageSelector';

// Domain public exports - Hooks
export * from './hooks/useLanguages';

// Domain public exports - Services
export * from './services/languageService';

// Domain public exports - Types
export * from './types';

// Module metadata
export const moduleMetadata = {
  name: 'language',
  domain: 'functional',
  version: '1.0.0',
  publicComponents: ['LanguageCard', 'LanguageGrid', 'LanguageSelector'],
  publicHooks: ['useLanguages'],
  publicServices: ['languageService'],
  dependencies: {
    internal: ['@/core/components', '@/core/hooks'],
    external: ['react', '@tanstack/react-query', 'react-router-dom'],
    domains: [],
  },
  exports: {
    components: ['LanguageCard', 'LanguageGrid', 'LanguageSelector'],
    hooks: ['useLanguages'],
    services: ['languageService'],
    types: ['Language'],
  },
} as const;
