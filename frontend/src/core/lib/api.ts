import axios from 'axios';

/**
 * @constant API_BASE_URL
 * @summary Base URL for API requests
 */
export const API_BASE_URL = '/api';

/**
 * @constant apiClient
 * @summary Axios instance configured for API requests
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
    // Handle global error cases here
    return Promise.reject(error);
  }
);

/**
 * @function downloadFile
 * @summary Initiates a file download from the given URL
 * @param {string} url - The URL to download from
 * @param {string} [filename] - Optional filename to use for the download
 */
export const downloadFile = (url: string, filename?: string): void => {
  const link = document.createElement('a');
  link.href = url;
  if (filename) link.download = filename;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
