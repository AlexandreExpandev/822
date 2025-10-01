/**
 * Standard success response formatter
 */
export const successResponse = <T>(data: T, metadata?: Record<string, any>) => {
  return {
    success: true,
    data,
    metadata: {
      ...metadata,
      timestamp: new Date().toISOString(),
    },
  };
};

/**
 * Standard error response formatter
 */
export const errorResponse = (message: string, code: string, details?: any) => {
  return {
    success: false,
    error: {
      code,
      message,
      details,
    },
    timestamp: new Date().toISOString(),
  };
};

/**
 * Standard paginated response formatter
 */
export const paginatedResponse = <T>(data: T[], page: number, pageSize: number, total: number) => {
  return {
    success: true,
    data,
    metadata: {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
      hasNext: page * pageSize < total,
      hasPrevious: page > 1,
      timestamp: new Date().toISOString(),
    },
  };
};
