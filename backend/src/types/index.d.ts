/**
 * Language information
 */
interface LanguageInfo {
  /** Unique language identifier */
  id: number;
  /** Language name (system identifier) */
  name: string;
  /** File extension for the language */
  extension: string;
  /** Display name for the language */
  displayName: string;
}

/**
 * Generated code response
 */
interface GeneratedCode {
  /** Language identifier */
  languageId: number;
  /** Language display name */
  languageName: string;
  /** Generated code content */
  code: string;
  /** File extension */
  extension: string;
}

/**
 * Success response format
 */
interface SuccessResponse<T> {
  /** Success indicator */
  success: true;
  /** Response data */
  data: T;
  /** Response timestamp */
  timestamp: string;
}

/**
 * Error response format
 */
interface ErrorResponse {
  /** Success indicator */
  success: false;
  /** Error details */
  error: {
    /** Error message */
    message: string;
    /** Error code (optional) */
    code?: string;
    /** Additional error details (optional) */
    details?: any;
  };
  /** Response timestamp */
  timestamp: string;
}
