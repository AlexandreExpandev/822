/**
 * Parameters for generating code
 */
export interface GenerateCodeParams {
  languageId: number;
}

/**
 * Generated code response
 */
export interface GeneratedCode {
  languageId: number;
  languageName: string;
  code: string;
  extension: string;
}
