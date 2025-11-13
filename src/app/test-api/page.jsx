'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Button, Paper, Alert, CircularProgress } from '@mui/material';
import { checkHealth, userAPI, activityAPI } from '@/lib/api';

export default function TestAPI() {
  const [healthStatus, setHealthStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [testResults, setTestResults] = useState([]);

  // Test health endpoint
  const testHealth = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await checkHealth();
      setHealthStatus(data);
      addTestResult('✅ Health Check', 'Success', data);
    } catch (err) {
      setError(err.toString());
      addTestResult('❌ Health Check', 'Failed', err.toString());
    } finally {
      setLoading(false);
    }
  };

  // Test user registration
  const testRegister = async () => {
    setLoading(true);
    setError(null);
    const testUser = {
      name: 'Test Employee',
      email: `test${Date.now()}@vihi.com`,
      password: 'password123',
      employeeId: `VIHI${Math.floor(Math.random() * 1000)}`,
      department: 'Technology',
      position: 'Software Engineer',
      role: 'employee',
    };

    try {
      const data = await userAPI.register(testUser);
      addTestResult('✅ User Registration', 'Success', data);
    } catch (err) {
      addTestResult('❌ User Registration', 'Failed', err.toString());
    } finally {
      setLoading(false);
    }
  };

  // Test user login
  const testLogin = async () => {
    setLoading(true);
    setError(null);
    const credentials = {
      email: 'john@vihi.com', // Use your registered email
      password: 'password123',
    };

    try {
      const data = await userAPI.login(credentials);
      addTestResult('✅ User Login', 'Success', data);
    } catch (err) {
      addTestResult('❌ User Login', 'Failed', err.toString());
    } finally {
      setLoading(false);
    }
  };

  // Test get profile
  const testGetProfile = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await userAPI.getProfile();
      addTestResult('✅ Get Profile', 'Success', data);
    } catch (err) {
      addTestResult('❌ Get Profile', 'Failed', err.toString());
    } finally {
      setLoading(false);
    }
  };

  // Test create activity
  const testCreateActivity = async () => {
    setLoading(true);
    setError(null);
    const activityData = {
      employeeId: 'VIHI001', // Use your employee ID
      date: new Date().toISOString(),
      activeTime: 28800,
      idleTime: 3600,
      applications: [
        {
          name: 'VS Code',
          duration: 14400,
          category: 'productive',
        },
        {
          name: 'Chrome',
          duration: 10800,
          category: 'neutral',
        },
      ],
      websites: [
        {
          url: 'https://github.com',
          domain: 'github.com',
          duration: 7200,
          category: 'productive',
        },
      ],
      deviceInfo: {
        hostname: 'TEST-LAPTOP',
        os: 'Windows 11',
        ipAddress: '192.168.1.100',
      },
    };

    try {
      const data = await activityAPI.create(activityData);
      addTestResult('✅ Create Activity', 'Success', data);
    } catch (err) {
      addTestResult('❌ Create Activity', 'Failed', err.toString());
    } finally {
      setLoading(false);
    }
  };

  const addTestResult = (test, status, data) => {
    setTestResults((prev) => [
      ...prev,
      {
        test,
        status,
        data: JSON.stringify(data, null, 2),
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  };

  const clearResults = () => {
    setTestResults([]);
    setHealthStatus(null);
    setError(null);
  };

  useEffect(() => {
    // Auto-test health on component mount
    testHealth();
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 8,
        px: { xs: 2, md: 4 },
        backgroundColor: '#f5f5f5',
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
          🧪 API Testing Dashboard
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
          Test the connection between Next.js frontend and Express backend
        </Typography>

        {/* Control Panel */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Test Endpoints
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Button
              variant="contained"
              onClick={testHealth}
              disabled={loading}
              sx={{ backgroundColor: '#ffc720' }}
            >
              Health Check
            </Button>
            <Button
              variant="outlined"
              onClick={testRegister}
              disabled={loading}
            >
              Register User
            </Button>
            <Button variant="outlined" onClick={testLogin} disabled={loading}>
              Login User
            </Button>
            <Button
              variant="outlined"
              onClick={testGetProfile}
              disabled={loading}
            >
              Get Profile
            </Button>
            <Button
              variant="outlined"
              onClick={testCreateActivity}
              disabled={loading}
            >
              Create Activity
            </Button>
            <Button variant="outlined" color="error" onClick={clearResults}>
              Clear Results
            </Button>
          </Box>
        </Paper>

        {/* Loading Indicator */}
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
            <CircularProgress />
          </Box>
        )}

        {/* Health Status */}
        {healthStatus && (
          <Alert severity="success" sx={{ mb: 3 }}>
            <Typography variant="h6">🚀 Backend is Running!</Typography>
            <Typography variant="body2">
              Message: {healthStatus.message}
            </Typography>
            <Typography variant="body2">
              Environment: {healthStatus.environment}
            </Typography>
            <Typography variant="body2">
              Timestamp: {healthStatus.timestamp}
            </Typography>
          </Alert>
        )}

        {/* Error Display */}
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Test Results */}
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
          Test Results
        </Typography>
        {testResults.length === 0 ? (
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="body1" color="text.secondary">
              No tests run yet. Click a button above to start testing.
            </Typography>
          </Paper>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {testResults.map((result, index) => (
              <Paper key={index} sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 1,
                  }}
                >
                  <Typography variant="h6">{result.test}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {result.timestamp}
                  </Typography>
                </Box>
                <Alert
                  severity={
                    result.status === 'Success' ? 'success' : 'error'
                  }
                  sx={{ mb: 2 }}
                >
                  {result.status}
                </Alert>
                <Box
                  component="pre"
                  sx={{
                    backgroundColor: '#1e1e1e',
                    color: '#d4d4d4',
                    p: 2,
                    borderRadius: 1,
                    overflow: 'auto',
                    fontSize: '0.85rem',
                  }}
                >
                  {result.data}
                </Box>
              </Paper>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
