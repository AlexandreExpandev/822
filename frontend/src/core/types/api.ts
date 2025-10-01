/**
 * Standard API response format
 */
export interface ApiResponse<T> {
  /**
   * Whether the request was successful
   */
  success: boolean;

  /**
   * Response data
   */
  data: T;

  /**
   * Response metadata
   */
  metadata?: Record<string, any>;

  /**
   * Error message if success is false
   */
  error?: string;
}
