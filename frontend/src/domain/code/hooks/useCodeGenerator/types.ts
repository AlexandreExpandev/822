import type { GeneratedCode } from '../../types';

/**
 * Options for the useCodeGenerator hook
 */
export interface UseCodeGeneratorOptions {
  /**
   * Callback when code is successfully generated
   */
  onCodeGenerated?: (code: GeneratedCode) => void;

  /**
   * Callback when code is successfully downloaded
   */
  onCodeDownloaded?: () => void;

  /**
   * Callback when an error occurs
   */
  onError?: (error: unknown) => void;
}

/**
 * Return type for the useCodeGenerator hook
 */
export interface UseCodeGeneratorReturn {
  /**
   * The generated code data
   */
  generatedCode: GeneratedCode | undefined;

  /**
   * Whether code is currently being generated
   */
  isGenerating: boolean;

  /**
   * Whether code is currently being downloaded
   */
  isDownloading: boolean;

  /**
   * Error that occurred during code generation, if any
   */
  generateError: unknown;

  /**
   * ID of the currently selected language
   */
  selectedLanguageId: number | null;

  /**
   * Function to generate code for a language
   */
  generateCode: (languageId: number) => void;

  /**
   * Function to download the generated code
   */
  downloadCode: () => void;

  /**
   * Function to regenerate code for the current language
   */
  regenerateCode: () => void;
}
