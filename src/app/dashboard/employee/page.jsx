'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  CircularProgress,
  Alert,
  Button,
  Tabs,
  Tab,
} from '@mui/material';
import {
  AccessTime as TimeIcon,
  TrendingUp as TrendingIcon,
  Computer as ComputerIcon,
  Timeline as TimelineIcon,
} from '@mui/icons-material';
import useSWR from 'swr';
import { userAPI, activityAPI, activityLogAPI, analyticsAPI } from '@/lib/api';
import {
  ProductivityBarChart,
  ProductivityScoreChart,
  TopAppsChart,
  CategoryBreakdownChart,
} from '@/components/charts/ActivityChart';
import { ActivityTable, ActivityLogTable } from '@/components/tables/ActivityTable';
import ProductivityTrendChart from '@/components/charts/ProductivityTrendChart';
import AppUsagePieChart from '@/components/charts/AppUsagePieChart';
import ActivityHeatmap from '@/components/charts/ActivityHeatmap';
import HourlyActivityChart from '@/components/charts/HourlyActivityChart';
import useSocket from '@/hooks/useSocket';

// ============================================
// STAT CARD COMPONENT
// ============================================
const StatCard = ({ title, value, subtitle, icon, color = '#2196f3' }) => (
  <Card elevation={3}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography variant="overline" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="h4" sx={{ my: 1, fontWeight: 600 }}>
            {value}
          </Typography>
          {subtitle && (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: 2,
            backgroundColor: `${color}20`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

// ============================================
// EMPLOYEE DASHBOARD PAGE
// ============================================
export default function EmployeeDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tabValue, setTabValue] = useState(0);

  // Socket.io connection
  const { connected, lastActivity } = useSocket(user?.employeeId);

  // Fetch user profile
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          router.push('/login');
          return;
        }

        const response = await userAPI.getProfile();
        setUser(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load user profile');
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  // Fetch activity statistics
  const { data: stats, error: statsError } = useSWR(
    user ? `/api/activity/stats/${user.employeeId}` : null,
    () => activityAPI.getStats(user.employeeId)
  );

  // Fetch activities
  const { data: activitiesData, error: activitiesError } = useSWR(
    user ? `/api/activity/user/${user.employeeId}` : null,
    () => activityAPI.getUserActivities(user.employeeId, { limit: 30 })
  );

  // Fetch recent logs
  const { data: logsData, error: logsError } = useSWR(
    user ? `/api/activity/log/${user.employeeId}` : null,
    () => activityLogAPI.getLogs(user.employeeId, { limit: 50 }),
    { refreshInterval: 60000 }
  );

  // Fetch analytics data (Stage 3)
  const { data: productivityTrend } = useSWR(
    user ? `/api/analytics/productivity-trend/${user.employeeId}` : null,
    () => analyticsAPI.getProductivityTrend(user.employeeId, 7),
    { refreshInterval: 300000 } // Refresh every 5 minutes
  );

  const { data: topApps } = useSWR(
    user ? `/api/analytics/top-apps/${user.employeeId}` : null,
    () => analyticsAPI.getTopApps(user.employeeId, 5, 7),
    { refreshInterval: 300000 }
  );

  const { data: heatmap } = useSWR(
    user ? `/api/analytics/heatmap/${user.employeeId}` : null,
    () => analyticsAPI.getHeatmap(user.employeeId, 30),
    { refreshInterval: 300000 }
  );

  const { data: hourlyDistribution } = useSWR(
    user ? `/api/analytics/hourly/${user.employeeId}` : null,
    () => analyticsAPI.getHourlyDistribution(user.employeeId, new Date().toISOString().split('T')[0]),
    { refreshInterval: 300000 }
  );

  const { data: todaySummary } = useSWR(
    user ? `/api/analytics/summary/${user.employeeId}/today` : null,
    () => analyticsAPI.getSummary(user.employeeId, new Date().toISOString().split('T')[0]),
    { refreshInterval: 60000 } // Refresh every minute
  );

  // Helper functions
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const formatChartData = () => {
    if (!activitiesData?.data) return [];
    return activitiesData.data.slice(0, 7).reverse().map((activity) => ({
      date: new Date(activity.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      activeTime: (activity.activeTime / 3600).toFixed(1),
      idleTime: (activity.idleTime / 3600).toFixed(1),
      score: activity.productivity.score,
    }));
  };

  const getCategoryData = () => {
    if (!stats?.data) return { productive: 0, neutral: 0, unproductive: 0 };
    
    const totalTime = stats.data.totalTime || 1;
    const productiveTime = stats.data.mostUsedApps
      ?.filter(app => app.category === 'productive')
      .reduce((sum, app) => sum + app.duration, 0) || 0;
    
    return {
      productive: Math.round((productiveTime / totalTime) * 100),
      neutral: Math.round((stats.data.totalActiveTime - productiveTime) / totalTime * 100),
      unproductive: Math.round((stats.data.totalIdleTime / totalTime) * 100),
    };
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            My Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Welcome back, {user?.name}! Here's your activity overview.
          </Typography>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Total Active Time"
              value={stats?.data ? formatTime(stats.data.totalActiveTime) : '0h 0m'}
              subtitle="Last 30 days"
              icon={<TimeIcon sx={{ fontSize: 28, color: '#4caf50' }} />}
              color="#4caf50"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Idle Time"
              value={stats?.data ? formatTime(stats.data.totalIdleTime) : '0h 0m'}
              subtitle="Last 30 days"
              icon={<AccessTime sx={{ fontSize: 28, color: '#ff9800' }} />}
              color="#ff9800"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Avg Productivity"
              value={stats?.data ? `${stats.data.averageProductivity}%` : '0%'}
              subtitle={stats?.data?.averageProductivity >= 70 ? 'Excellent!' : 'Keep it up!'}
              icon={<TrendingIcon sx={{ fontSize: 28, color: '#2196f3' }} />}
              color="#2196f3"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Days Tracked"
              value={stats?.data?.totalDays || 0}
              subtitle="Total tracking days"
              icon={<ComputerIcon sx={{ fontSize: 28, color: '#9c27b0' }} />}
              color="#9c27b0"
            />
          </Grid>
        </Grid>

        {/* Stage 3: Analytics Section */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {/* 7-Day Productivity Trend */}
          <Grid item xs={12}>
            <ProductivityTrendChart data={productivityTrend?.data || []} />
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {/* Top Apps Pie Chart */}
          <Grid item xs={12} md={6}>
            <AppUsagePieChart data={topApps?.data || []} />
          </Grid>
          {/* Hourly Distribution */}
          <Grid item xs={12} md={6}>
            <HourlyActivityChart data={hourlyDistribution?.data || []} />
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {/* Activity Heatmap */}
          <Grid item xs={12}>
            <ActivityHeatmap data={heatmap?.data || []} />
          </Grid>
        </Grid>

        {/* Real-time Status Indicator */}
        {connected && (
          <Alert severity="success" sx={{ mb: 4 }}>
            🟢 Live tracking active {lastActivity && `- Last update: ${new Date(lastActivity.timestamp).toLocaleTimeString()}`}
          </Alert>
        )}

        {/* Charts */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={8}>
            <ProductivityBarChart
              data={formatChartData()}
              title="Activity Breakdown (Last 7 Days)"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TopAppsChart
              data={stats?.data?.mostUsedApps || []}
              title="Top 5 Applications"
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={8}>
            <ProductivityScoreChart
              data={formatChartData()}
              title="Productivity Trend"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CategoryBreakdownChart
              data={getCategoryData()}
              title="Activity Categories"
            />
          </Grid>
        </Grid>

        {/* Tabs for Activities and Logs */}
        <Paper elevation={2} sx={{ mb: 4 }}>
          <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)}>
            <Tab label="Activity Summary" />
            <Tab label="Recent Logs" />
          </Tabs>
        </Paper>

        {/* Tab Content */}
        {tabValue === 0 && (
          <ActivityTable activities={activitiesData?.data || []} />
        )}

        {tabValue === 1 && (
          <ActivityLogTable logs={logsData?.data || []} maxRows={50} />
        )}
      </Container>
    </Box>
  );
}
