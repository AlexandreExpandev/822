import { languageService } from './index';
import { languageTypes } from './languageTypes';

describe('Language Service', () => {
  describe('listLanguages', () => {
    it('should return all supported languages', async () => {
      const languages = await languageService.listLanguages();

      expect(languages).toEqual(languageTypes.SUPPORTED_LANGUAGES);
      expect(languages.length).toBeGreaterThan(0);
      expect(languages[0]).toHaveProperty('id');
      expect(languages[0]).toHaveProperty('name');
      expect(languages[0]).toHaveProperty('extension');
    });
  });

  describe('getLanguageById', () => {
    it('should return a language when given a valid id', async () => {
      const language = await languageService.getLanguageById('javascript');

      expect(language).toBeDefined();
      expect(language?.id).toBe('javascript');
      expect(language?.name).toBe('JavaScript');
      expect(language?.extension).toBe('js');
    });

    it('should return undefined when given an invalid id', async () => {
      const language = await languageService.getLanguageById('invalid-language');

      expect(language).toBeUndefined();
    });
  });
});
