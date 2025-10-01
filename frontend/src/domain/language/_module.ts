/**
 * @module language
 * @summary Programming language selection and management
 * @domain functional
 * @dependencies [core/components, core/lib/api]
 * @version 1.0.0
 */

// Domain public exports - Services
export * from './services/languageService';

// Domain public exports - Types
export * from './types';

// Domain public exports - Hooks
export * from './hooks/useLanguages';

// Module metadata
export const moduleMetadata = {
  name: 'language',
  domain: 'functional',
  version: '1.0.0',
  dependencies: {
    internal: ['@/core/components', '@/core/lib/api'],
    external: ['react', '@tanstack/react-query'],
    domains: [],
  },
  exports: {
    services: ['languageService'],
    hooks: ['useLanguages'],
    types: ['Language'],
  },
} as const;
