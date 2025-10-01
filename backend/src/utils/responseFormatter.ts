export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    timestamp: string;
  };
}

export interface ErrorResponse {
  success: false;
  error: {
    message: string;
    details?: unknown;
    stack?: string;
  };
  timestamp: string;
}

export const successResponse = <T>(data: T): SuccessResponse<T> => {
  return {
    success: true,
    data,
    metadata: {
      timestamp: new Date().toISOString(),
    },
  };
};

export const errorResponse = (
  message: string,
  details?: unknown,
  stack?: string
): ErrorResponse => {
  return {
    success: false,
    error: {
      message,
      ...(details && { details }),
      ...(process.env.NODE_ENV === 'development' && stack && { stack }),
    },
    timestamp: new Date().toISOString(),
  };
};
