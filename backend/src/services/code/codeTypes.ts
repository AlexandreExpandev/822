export namespace codeTypes {
  /**
   * Code entry entity
   */
  export interface CodeEntry {
    id: number;
    languageId: number;
    code: string;
    description?: string;
  }

  /**
   * Code response with language information
   */
  export interface CodeResponse {
    id: number;
    language: string;
    displayName: string;
    fileExtension: string;
    code: string;
    description?: string;
  }

  /**
   * Input for creating a new code entry
   */
  export interface CreateCodeInput {
    languageId: number;
    code: string;
    description?: string;
  }

  /**
   * Input for updating a code entry
   */
  export interface UpdateCodeInput {
    languageId?: number;
    code?: string;
    description?: string;
  }
}
