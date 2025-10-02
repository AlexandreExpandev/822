/**
 * Global test setup configuration
 */

// Set environment variables for testing
process.env.NODE_ENV = 'test';
process.env.PORT = '3001';

// Mock dependencies as needed
jest.mock('../utils/logger', () => ({
  logger: {
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn(),
  },
}));
