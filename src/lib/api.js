/**
 * API Client Configuration
 * Axios instance with base configuration for backend API
 * VIHI IT Solutions HR System
 */

import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
});

// Request interceptor - Add auth token to requests
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage (or your preferred storage)
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors globally
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;
      
      if (status === 401) {
        // Unauthorized - clear token and redirect to login
        if (typeof window !== 'undefined') {
          localStorage.removeItem('authToken');
          window.location.href = '/login';
        }
      }
      
      // Return error message from backend
      return Promise.reject(data.error || 'An error occurred');
    } else if (error.request) {
      // Request made but no response received
      return Promise.reject('Network error. Please check your connection.');
    } else {
      // Something else happened
      return Promise.reject(error.message);
    }
  }
);

// ============================================
// API METHODS
// ============================================

// Health Check
export const checkHealth = async () => {
  const response = await api.get('/api/health');
  return response.data;
};

// ============================================
// USER API
// ============================================

export const userAPI = {
  // Register new user
  register: async (userData) => {
    const response = await api.post('/api/users/register', userData);
    return response.data;
  },

  // Login user
  login: async (credentials) => {
    const response = await api.post('/api/users/login', credentials);
    // Store token in localStorage
    if (response.data.data.token && typeof window !== 'undefined') {
      localStorage.setItem('authToken', response.data.data.token);
    }
    return response.data;
  },

  // Logout user
  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
    }
  },

  // Get current user profile
  getProfile: async () => {
    const response = await api.get('/api/users/profile');
    return response.data;
  },

  // Get all users (Admin only)
  getAllUsers: async (filters = {}) => {
    const response = await api.get('/api/users', { params: filters });
    return response.data;
  },

  // Get user by ID
  getUserById: async (userId) => {
    const response = await api.get(`/api/users/${userId}`);
    return response.data;
  },

  // Update user
  updateUser: async (userId, userData) => {
    const response = await api.put(`/api/users/${userId}`, userData);
    return response.data;
  },

  // Delete user
  deleteUser: async (userId) => {
    const response = await api.delete(`/api/users/${userId}`);
    return response.data;
  },
};

// ============================================
// ACTIVITY API
// ============================================

export const activityAPI = {
  // Create activity record
  create: async (activityData) => {
    const response = await api.post('/api/activity', activityData);
    return response.data;
  },

  // Get all activities (Admin only)
  getAll: async (filters = {}) => {
    const response = await api.get('/api/activity', { params: filters });
    return response.data;
  },

  // Get user activities
  getUserActivities: async (employeeId, filters = {}) => {
    const response = await api.get(`/api/activity/user/${employeeId}`, {
      params: filters,
    });
    return response.data;
  },

  // Get activity statistics
  getStats: async (employeeId, filters = {}) => {
    const response = await api.get(`/api/activity/stats/${employeeId}`, {
      params: filters,
    });
    return response.data;
  },

  // Delete activity
  delete: async (activityId) => {
    const response = await api.delete(`/api/activity/${activityId}`);
    return response.data;
  },
};

export default api;
