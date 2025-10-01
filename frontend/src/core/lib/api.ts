import axios from 'axios';

/**
 * Base API URL from environment or default
 */
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

/**
 * Axios instance with default configuration
 */
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific error cases here if needed
    return Promise.reject(error);
  }
);

/**
 * Generic API service with typed methods
 */
export const api = {
  /**
   * GET request
   */
  get: async <T>(url: string, params?: Record<string, any>): Promise<T> => {
    const response = await apiClient.get<T>(url, { params });
    return response.data;
  },

  /**
   * POST request
   */
  post: async <T>(url: string, data?: any): Promise<T> => {
    const response = await apiClient.post<T>(url, data);
    return response.data;
  },

  /**
   * PUT request
   */
  put: async <T>(url: string, data?: any): Promise<T> => {
    const response = await apiClient.put<T>(url, data);
    return response.data;
  },

  /**
   * DELETE request
   */
  delete: async <T>(url: string): Promise<T> => {
    const response = await apiClient.delete<T>(url);
    return response.data;
  },
};
