import axios from 'axios';
import { API_BASE_URL } from '../constants/api';

/**
 * @service apiClient
 * @summary Axios instance for making API requests
 * @type api-client
 * @category core-library
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
    // Handle errors globally here
    return Promise.reject(error);
  }
);
