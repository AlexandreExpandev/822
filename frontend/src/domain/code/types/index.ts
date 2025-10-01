/**
 * Represents a code example
 */
export interface Code {
  /**
   * Programming language name
   */
  language: string;

  /**
   * Code content
   */
  content: string;

  /**
   * File extension for the language
   */
  extension: string;
}

/**
 * Represents a downloadable code file
 */
export interface CodeFile {
  /**
   * File content
   */
  content: string;

  /**
   * Filename with extension
   */
  filename: string;
}
