import { codeService } from './index';
import { languageService } from '../language';
import { NotFoundError } from '../../middleware/errorMiddleware';

// Mock the language service
jest.mock('../language', () => ({
  languageService: {
    getLanguageById: jest.fn(),
  },
}));

describe('Code Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('generateCode', () => {
    it('should generate code for a valid language', async () => {
      (languageService.getLanguageById as jest.Mock).mockResolvedValue({
        id: 'javascript',
        name: 'JavaScript',
        extension: 'js',
      });

      const result = await codeService.generateCode('javascript');

      expect(result).toEqual({
        language: 'JavaScript',
        content: expect.any(String),
        extension: 'js',
      });
      expect(result.content).toContain('Hello, World!');
    });

    it('should throw NotFoundError for an invalid language', async () => {
      (languageService.getLanguageById as jest.Mock).mockResolvedValue(undefined);

      await expect(codeService.generateCode('invalid-language')).rejects.toThrow(NotFoundError);
    });
  });

  describe('generateCodeFile', () => {
    it('should generate a code file for a valid language', async () => {
      (languageService.getLanguageById as jest.Mock).mockResolvedValue({
        id: 'javascript',
        name: 'JavaScript',
        extension: 'js',
      });

      const result = await codeService.generateCodeFile('javascript');

      expect(result).toEqual({
        content: expect.any(String),
        filename: 'hello_world.js',
      });
      expect(result.content).toContain('Hello, World!');
    });

    it('should throw NotFoundError for an invalid language', async () => {
      (languageService.getLanguageById as jest.Mock).mockResolvedValue(undefined);

      await expect(codeService.generateCodeFile('invalid-language')).rejects.toThrow(NotFoundError);
    });
  });
});
