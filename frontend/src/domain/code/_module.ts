/**
 * @module code
 * @summary Module for code generation, display, and download functionality
 * @domain functional
 * @dependencies [core, language]
 * @version 1.0.0
 */

// Domain public exports - Components
export * from './components/CodeDisplay';

// Domain public exports - Hooks
export * from './hooks/useCodeViewer';

// Domain public exports - Services
export * from './services/codeService';

// Module metadata
export const moduleMetadata = {
  name: 'code',
  domain: 'functional',
  version: '1.0.0',
  publicComponents: ['CodeDisplay'],
  publicHooks: ['useCodeViewer'],
  publicServices: ['codeService'],
  dependencies: {
    internal: ['@/core/components', '@/core/hooks'],
    external: ['react', '@tanstack/react-query'],
    domains: ['@/domain/language'],
  },
  exports: {
    components: ['CodeDisplay'],
    hooks: ['useCodeViewer'],
    services: ['codeService'],
  },
} as const;
