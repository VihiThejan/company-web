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

// ============================================
// ACTIVITY LOG API (Granular Tracking)
// ============================================

export const activityLogAPI = {
  // Create activity log entry
  createLog: async (logData) => {
    const response = await api.post('/api/activity/log', logData);
    return response.data;
  },

  // Get activity logs for employee
  getLogs: async (employeeId, filters = {}) => {
    const response = await api.get(`/api/activity/log/${employeeId}`, {
      params: filters,
    });
    return response.data;
  },

  // Get activity log summary
  getSummary: async (employeeId, filters = {}) => {
    const response = await api.get(`/api/activity/log/summary/${employeeId}`, {
      params: filters,
    });
    return response.data;
  },

  // Get recent logs (for live dashboard)
  getRecent: async (employeeId, minutes = 5) => {
    const response = await api.get(`/api/activity/log/recent/${employeeId}`, {
      params: { minutes },
    });
    return response.data;
  },

  // Get all logs (Admin only)
  getAllLogs: async (filters = {}) => {
    const response = await api.get('/api/activity/log/all', { params: filters });
    return response.data;
  },

  // Cleanup old logs (Admin only)
  cleanup: async (days = 90) => {
    const response = await api.delete('/api/activity/log/cleanup', {
      params: { days },
    });
    return response.data;
  },
};

// ============================================
// ANALYTICS API
// ============================================

export const analyticsAPI = {
  // Get employee summary
  getSummary: async (employeeId, startDate, endDate) => {
    const response = await api.get('/api/analytics/summary', {
      params: { employeeId, startDate, endDate },
    });
    return response.data;
  },

  // Get 7-day productivity trend
  getProductivityTrend: async (employeeId, days = 7) => {
    const response = await api.get('/api/analytics/productivity-trend', {
      params: { employeeId, days },
    });
    return response.data;
  },

  // Get top applications
  getTopApps: async (employeeId, limit = 10, days = 30) => {
    const response = await api.get('/api/analytics/top-apps', {
      params: { employeeId, limit, days },
    });
    return response.data;
  },

  // Get team summary (Admin only)
  getTeamSummary: async (startDate, endDate, department) => {
    const response = await api.get('/api/analytics/team-summary', {
      params: { startDate, endDate, department },
    });
    return response.data;
  },

  // Get hourly distribution
  getHourlyDistribution: async (employeeId, date) => {
    const response = await api.get('/api/analytics/hourly-distribution', {
      params: { employeeId, date },
    });
    return response.data;
  },

  // Get activity heatmap
  getHeatmap: async (employeeId, days = 30) => {
    const response = await api.get('/api/analytics/heatmap', {
      params: { employeeId, days },
    });
    return response.data;
  },

  // Get real-time status
  getRealTimeStatus: async (employeeId) => {
    const response = await api.get('/api/analytics/real-time-status', {
      params: { employeeId },
    });
    return response.data;
  },

  // Get online employees (Admin only)
  getOnlineEmployees: async () => {
    const response = await api.get('/api/analytics/online-employees');
    return response.data;
  },
};

// ============================================
// REPORTS API
// ============================================

export const reportsAPI = {
  // Download daily CSV report
  downloadDailyCSV: (employeeId, date) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    const url = `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/reports/daily/csv?employeeId=${employeeId}&date=${date}`;
    
    // Open in new window to trigger download
    window.open(
      `${url}${token ? `&token=${token}` : ''}`,
      '_blank'
    );
  },

  // Download daily PDF report
  downloadDailyPDF: (employeeId, date) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    
    // Create temporary link to download
    const link = document.createElement('a');
    link.href = `${baseURL}/api/reports/daily/pdf?employeeId=${employeeId}&date=${date}`;
    link.target = '_blank';
    link.download = `activity_report_${employeeId}_${date}.pdf`;
    
    // Add auth header via fetch
    fetch(link.href, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `activity_report_${employeeId}_${date}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      });
  },

  // Download team CSV report (Admin only)
  downloadTeamCSV: (startDate, endDate, department) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    let url = `${baseURL}/api/reports/team/csv?startDate=${startDate}&endDate=${endDate}`;
    
    if (department) {
      url += `&department=${department}`;
    }
    
    window.open(url, '_blank');
  },

  // Download team PDF report (Admin only)
  downloadTeamPDF: (startDate, endDate, department) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    let url = `${baseURL}/api/reports/team/pdf?startDate=${startDate}&endDate=${endDate}`;
    
    if (department) {
      url += `&department=${department}`;
    }
    
    // Fetch and download PDF
    fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((res) => res.blob())
      .then((blob) => {
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = `team_report_${startDate}_to_${endDate}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(downloadUrl);
        document.body.removeChild(a);
      });
  },
};

// ============================================
// AI & ANOMALY DETECTION API (Stage 4)
// ============================================
export const aiAPI = {
  // Get employee AI score for date
  getEmployeeScore: (employeeId, date) =>
    api.get(`/api/ai/score/${employeeId}/${date}`),

  // Get employee score trend (last N days)
  getScoreTrend: (employeeId, days = 7) =>
    api.get(`/api/ai/score/${employeeId}/trend/${days}`),

  // Get team scores for date (Admin only)
  getTeamScores: (date, department = null) =>
    api.get(`/api/ai/team/scores/${date}${department ? `?department=${department}` : ''}`),

  // Get performance distribution (Admin only)
  getPerformanceDistribution: (days = 30) =>
    api.get(`/api/ai/performance/distribution?days=${days}`),

  // Get employee anomalies
  getEmployeeAnomalies: (employeeId, days = 7) =>
    api.get(`/api/ai/anomalies/${employeeId}?days=${days}`),

  // Get all unresolved anomalies (Admin only)
  getAllAnomalies: (department = null) =>
    api.get(`/api/ai/anomalies${department ? `?department=${department}` : ''}`),

  // Get anomaly statistics (Admin only)
  getAnomalyStats: (days = 30) =>
    api.get(`/api/ai/anomalies/stats?days=${days}`),

  // Resolve anomaly (Admin only)
  resolveAnomaly: (anomalyId, notes) =>
    api.patch(`/api/ai/anomalies/${anomalyId}/resolve`, { notes }),

  // Test alert system (Admin only)
  testAlerts: () =>
    api.post('/api/ai/alerts/test'),

  // Run manual analysis (Admin only)
  runManualAnalysis: (date) =>
    api.post('/api/ai/analysis/run', { date }),

  // Get cron job status (Admin only)
  getCronStatus: () =>
    api.get('/api/ai/cron/status'),
};

export default api;
