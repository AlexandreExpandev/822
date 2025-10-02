/**
 * @module code
 * @summary Code generation and management functionality
 * @domain functional
 * @dependencies [core/components, core/lib/api]
 * @version 1.0.0
 */

// Domain public exports - Hooks
export * from './hooks/useCodeGenerator';

// Domain public exports - Types
export * from './types';

// Module metadata
export const moduleMetadata = {
  name: 'code',
  domain: 'functional',
  version: '1.0.0',
  publicHooks: ['useCodeGenerator'],
  dependencies: {
    internal: ['@/core/components', '@/core/lib/api'],
    external: ['react', '@tanstack/react-query'],
    domains: [],
  },
  exports: {
    hooks: ['useCodeGenerator'],
    types: ['GeneratedCode', 'GenerateCodeParams'],
  },
} as const;
