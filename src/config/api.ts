// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://backend-7wou.onrender.com/api'
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ||  'http://localhost:3000/api'

export const API_CONFIG = {
  API_BASE_URL
};

// Helper function for API calls
export const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${API_CONFIG.API_BASE_URL}${endpoint}`;
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  return fetch(url, defaultOptions);
};

// Helper for authenticated API calls
export const authenticatedApiCall = async (endpoint: string, options: RequestInit = {}) => {
  const token = sessionStorage.getItem('token');
  
  return apiCall(endpoint, {
    ...options,
    headers: {
      'Authorization': `Bearer ${token}`,
      ...options.headers,
    },
  });
};
