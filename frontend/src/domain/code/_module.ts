/**
 * @module code
 * @summary Code generation and management functionality
 * @domain functional
 * @dependencies [core/components, core/lib/api]
 * @version 1.0.0
 */

// Domain public exports - Services
export * from './services/codeService';

// Domain public exports - Types
export * from './types';

// Domain public exports - Hooks
export * from './hooks/useCodeGeneration';

// Module metadata
export const moduleMetadata = {
  name: 'code',
  domain: 'functional',
  version: '1.0.0',
  dependencies: {
    internal: ['@/core/components', '@/core/lib/api'],
    external: ['react', '@tanstack/react-query'],
    domains: ['@/domain/language'],
  },
  exports: {
    services: ['codeService'],
    hooks: ['useCodeGeneration'],
    types: ['Code', 'CodeFile'],
  },
} as const;
