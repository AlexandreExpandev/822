/**
 * Formats a successful response
 *
 * @param data - Response data
 * @returns Formatted success response
 */
export function successResponse<T>(data: T): SuccessResponse<T> {
  return {
    success: true,
    data,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Formats an error response
 *
 * @param message - Error message
 * @param code - Error code (optional)
 * @param details - Additional error details (optional)
 * @returns Formatted error response
 */
export function errorResponse(message: string, code?: string, details?: any): ErrorResponse {
  return {
    success: false,
    error: {
      message,
      ...(code && { code }),
      ...(details && { details }),
    },
    timestamp: new Date().toISOString(),
  };
}
