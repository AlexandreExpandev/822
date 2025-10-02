/**
 * @module language
 * @summary Programming language management functionality
 * @domain functional
 * @dependencies [core/lib/api]
 * @version 1.0.0
 */

// Domain public exports - Hooks
export * from './hooks/useLanguages';

// Domain public exports - Types
export * from './types';

// Module metadata
export const moduleMetadata = {
  name: 'language',
  domain: 'functional',
  version: '1.0.0',
  publicHooks: ['useLanguages'],
  dependencies: {
    internal: ['@/core/lib/api'],
    external: ['react', '@tanstack/react-query'],
    domains: [],
  },
  exports: {
    hooks: ['useLanguages'],
    types: ['Language'],
  },
} as const;
