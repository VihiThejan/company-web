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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Tabs,
  Tab,
  TextField,
  Button,
  Chip,
} from '@mui/material';
import {
  People as PeopleIcon,
  TrendingUp as TrendingIcon,
  Assessment as AssessmentIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';
import useSWR from 'swr';
import { userAPI, activityAPI, activityLogAPI, analyticsAPI, reportsAPI } from '@/lib/api';
import {
  ProductivityBarChart,
  ProductivityScoreChart,
  TopAppsChart,
} from '@/components/charts/ActivityChart';
import { ActivityTable } from '@/components/tables/ActivityTable';
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
// EMPLOYEE CARD COMPONENT
// ============================================
const EmployeeCard = ({ employee, onView }) => {
  const getProductivityColor = (score) => {
    if (score >= 80) return 'success';
    if (score >= 60) return 'info';
    if (score >= 40) return 'warning';
    return 'error';
  };

  return (
    <Card elevation={2} sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box>
            <Typography variant="h6" fontWeight={600}>
              {employee.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {employee.employeeId} • {employee.position}
            </Typography>
            <Chip
              label={employee.department}
              size="small"
              sx={{ mt: 1 }}
            />
          </Box>
          <Chip
            label={employee.isActive ? 'Active' : 'Inactive'}
            color={employee.isActive ? 'success' : 'default'}
            size="small"
          />
        </Box>
        <Button
          variant="outlined"
          size="small"
          fullWidth
          onClick={() => onView(employee)}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

// ============================================
// ADMIN DASHBOARD PAGE
// ============================================
export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [tabValue, setTabValue] = useState(0);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Socket.io for live tracking
  const { connected, onlineEmployees } = useSocket(user?.employeeId);

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
        
        // Check if user is admin or manager
        if (response.data.role !== 'admin' && response.data.role !== 'manager') {
          router.push('/dashboard/employee');
          return;
        }

        setUser(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load user profile');
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  // Fetch all employees
  const { data: employeesData, error: employeesError } = useSWR(
    user ? '/api/users' : null,
    () => userAPI.getAllUsers()
  );

  // Fetch all activities
  const { data: activitiesData, error: activitiesError } = useSWR(
    user ? '/api/activity' : null,
    () => activityAPI.getAll({ limit: 100 })
  );

  // Fetch team summary analytics (Stage 3)
  const { data: teamSummary, error: teamError } = useSWR(
    user ? '/api/analytics/team-summary' : null,
    () => analyticsAPI.getTeamSummary(new Date().toISOString().split('T')[0]),
    { refreshInterval: 60000 } // Refresh every minute
  );

  // Fetch online employees (Stage 3)
  const { data: onlineEmployeesData, error: onlineError } = useSWR(
    user ? '/api/analytics/online-employees' : null,
    () => analyticsAPI.getOnlineEmployees(),
    { refreshInterval: 30000 } // Refresh every 30 seconds
  );

  // Calculate team statistics
  const calculateTeamStats = () => {
    if (!activitiesData?.data) return null;

    const activities = activitiesData.data;
    const totalEmployees = employeesData?.data?.length || 0;
    const activeEmployees = employeesData?.data?.filter(e => e.isActive).length || 0;

    const totalActiveTime = activities.reduce((sum, a) => sum + a.activeTime, 0);
    const totalIdleTime = activities.reduce((sum, a) => sum + a.idleTime, 0);
    const avgProductivity = activities.length > 0
      ? Math.round(activities.reduce((sum, a) => sum + a.productivity.score, 0) / activities.length)
      : 0;

    const lowPerformers = activities.filter(a => a.productivity.score < 40).length;

    return {
      totalEmployees,
      activeEmployees,
      totalActiveTime,
      totalIdleTime,
      avgProductivity,
      lowPerformers,
    };
  };

  const teamStats = calculateTeamStats();

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    return `${hours}h`;
  };

  const handleDeleteActivity = async (activityId) => {
    if (confirm('Are you sure you want to delete this activity record?')) {
      try {
        await activityAPI.delete(activityId);
        // Refresh data
        window.location.reload();
      } catch (err) {
        alert('Failed to delete activity');
      }
    }
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
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Admin Dashboard
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Team activity overview and management
            </Typography>
          </Box>
          {/* Export Reports Buttons */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                const today = new Date().toISOString().split('T')[0];
                reportsAPI.downloadTeamCSV(today, today);
              }}
            >
              Export CSV
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                const today = new Date().toISOString().split('T')[0];
                reportsAPI.downloadTeamPDF(today, today);
              }}
            >
              Export PDF
            </Button>
          </Box>
        </Box>

        {/* Live Status Indicator */}
        {connected && (
          <Alert severity="success" sx={{ mb: 4 }}>
            🟢 Live tracking active - {onlineEmployeesData?.count || 0} employees currently online
          </Alert>
        )}

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Total Employees"
              value={teamStats?.totalEmployees || 0}
              subtitle={`${teamStats?.activeEmployees || 0} active`}
              icon={<PeopleIcon sx={{ fontSize: 28, color: '#2196f3' }} />}
              color="#2196f3"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Team Active Time"
              value={teamStats ? formatTime(teamStats.totalActiveTime) : '0h'}
              subtitle="Last 30 days"
              icon={<AssessmentIcon sx={{ fontSize: 28, color: '#4caf50' }} />}
              color="#4caf50"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Avg Productivity"
              value={teamStats ? `${teamStats.avgProductivity}%` : '0%'}
              subtitle="Team average"
              icon={<TrendingIcon sx={{ fontSize: 28, color: '#ff9800' }} />}
              color="#ff9800"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Low Performers"
              value={teamStats?.lowPerformers || 0}
              subtitle="Need attention"
              icon={<WarningIcon sx={{ fontSize: 28, color: '#f44336' }} />}
              color="#f44336"
            />
          </Grid>
        </Grid>

        {/* Online Employees Panel (Stage 3) */}
        {onlineEmployeesData?.data && onlineEmployeesData.data.length > 0 && (
          <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              🟢 Online Employees ({onlineEmployeesData.count})
            </Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {onlineEmployeesData.data.map((emp) => (
                <Grid item xs={12} sm={6} md={4} key={emp.employeeId}>
                  <Card variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            backgroundColor: emp.status === 'active' ? '#4caf50' : '#ff9800',
                          }}
                        />
                        <Box>
                          <Typography variant="subtitle2" fontWeight={600}>
                            {emp.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {emp.employeeId} • {emp.department}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                        {emp.status === 'active' ? '🟢 Active' : '🟡 Idle'}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" display="block">
                        Current: {emp.currentWindow ? emp.currentWindow.substring(0, 40) + '...' : 'N/A'}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" display="block">
                        Last seen: {new Date(emp.lastSeen).toLocaleTimeString()}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        )}

        {/* Team Summary Table (Stage 3) */}
        {teamSummary?.data && (
          <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Team Performance Summary
            </Typography>
            <Box sx={{ mt: 2, maxHeight: 400, overflow: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f5f5f5' }}>
                    <th style={{ padding: '12px', textAlign: 'left' }}>Employee</th>
                    <th style={{ padding: '12px', textAlign: 'left' }}>Department</th>
                    <th style={{ padding: '12px', textAlign: 'right' }}>Active Hours</th>
                    <th style={{ padding: '12px', textAlign: 'right' }}>Productivity</th>
                    <th style={{ padding: '12px', textAlign: 'right' }}>Total Logs</th>
                  </tr>
                </thead>
                <tbody>
                  {teamSummary.data.employees.map((emp) => (
                    <tr key={emp.employeeId} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '12px' }}>
                        <Typography variant="body2" fontWeight={600}>
                          {emp.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {emp.employeeId}
                        </Typography>
                      </td>
                      <td style={{ padding: '12px' }}>
                        <Typography variant="body2">{emp.department}</Typography>
                      </td>
                      <td style={{ padding: '12px', textAlign: 'right' }}>
                        <Typography variant="body2">{emp.totalActiveTimeHours}h</Typography>
                      </td>
                      <td style={{ padding: '12px', textAlign: 'right' }}>
                        <Chip
                          label={`${emp.productivityScore}%`}
                          color={
                            emp.productivityScore >= 80
                              ? 'success'
                              : emp.productivityScore >= 60
                              ? 'info'
                              : emp.productivityScore >= 40
                              ? 'warning'
                              : 'error'
                          }
                          size="small"
                        />
                      </td>
                      <td style={{ padding: '12px', textAlign: 'right' }}>
                        <Typography variant="body2">{emp.totalLogs}</Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
          </Paper>
        )}

        {/* Department Filter */}
        <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Department</InputLabel>
            <Select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              label="Department"
            >
              <MenuItem value="all">All Departments</MenuItem>
              <MenuItem value="Technology">Technology</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
              <MenuItem value="Design">Design</MenuItem>
              <MenuItem value="HR">HR</MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
              <MenuItem value="Operations">Operations</MenuItem>
            </Select>
          </FormControl>
        </Paper>

        {/* Tabs */}
        <Paper elevation={2} sx={{ mb: 4 }}>
          <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)}>
            <Tab label="Team Overview" />
            <Tab label="All Activities" />
            <Tab label="Employee List" />
          </Tabs>
        </Paper>

        {/* Tab Content */}
        {tabValue === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <ProductivityBarChart
                data={activitiesData?.data?.slice(0, 7).map(a => ({
                  date: new Date(a.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                  activeTime: (a.activeTime / 3600).toFixed(1),
                  idleTime: (a.idleTime / 3600).toFixed(1),
                })) || []}
                title="Team Activity (Last 7 Days)"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TopAppsChart
                data={[
                  { name: 'VS Code', duration: 14400 },
                  { name: 'Chrome', duration: 10800 },
                  { name: 'Slack', duration: 7200 },
                  { name: 'Teams', duration: 5400 },
                  { name: 'Figma', duration: 3600 },
                ]}
                title="Top Team Applications"
              />
            </Grid>
          </Grid>
        )}

        {tabValue === 1 && (
          <ActivityTable
            activities={activitiesData?.data || []}
            onDelete={handleDeleteActivity}
            showActions={true}
          />
        )}

        {tabValue === 2 && (
          <Grid container spacing={3}>
            {employeesData?.data?.map((employee) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={employee._id}>
                <EmployeeCard
                  employee={employee}
                  onView={(emp) => router.push(`/dashboard/employee?id=${emp.employeeId}`)}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}
