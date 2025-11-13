'use client';

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Typography,
  Box,
  IconButton,
  Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';

// ============================================
// ACTIVITY TABLE
// ============================================
export const ActivityTable = ({ activities, onDelete, showActions = false }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent':
        return 'success';
      case 'good':
        return 'info';
      case 'average':
        return 'warning';
      case 'poor':
        return 'error';
      default:
        return 'default';
    }
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), 'MMM dd, yyyy');
    } catch {
      return dateString;
    }
  };

  if (!activities || activities.length === 0) {
    return (
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="body1" color="text.secondary">
          No activity data available
        </Typography>
      </Paper>
    );
  }

  return (
    <TableContainer component={Paper} elevation={2}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            <TableCell><strong>Date</strong></TableCell>
            <TableCell><strong>Active Time</strong></TableCell>
            <TableCell><strong>Idle Time</strong></TableCell>
            <TableCell><strong>Total Time</strong></TableCell>
            <TableCell><strong>Productivity</strong></TableCell>
            <TableCell><strong>Status</strong></TableCell>
            {showActions && <TableCell><strong>Actions</strong></TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {activities.map((activity) => (
            <TableRow key={activity._id} hover>
              <TableCell>{formatDate(activity.date)}</TableCell>
              <TableCell>{formatTime(activity.activeTime)}</TableCell>
              <TableCell>{formatTime(activity.idleTime)}</TableCell>
              <TableCell>{formatTime(activity.totalTime)}</TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body2">{activity.productivity.score}%</Typography>
                  <Box
                    sx={{
                      width: 50,
                      height: 8,
                      backgroundColor: '#e0e0e0',
                      borderRadius: 1,
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        width: `${activity.productivity.score}%`,
                        height: '100%',
                        backgroundColor:
                          activity.productivity.score >= 80
                            ? '#4caf50'
                            : activity.productivity.score >= 60
                            ? '#2196f3'
                            : activity.productivity.score >= 40
                            ? '#ff9800'
                            : '#f44336',
                      }}
                    />
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Chip
                  label={activity.productivity.status.toUpperCase()}
                  color={getStatusColor(activity.productivity.status)}
                  size="small"
                />
              </TableCell>
              {showActions && (
                <TableCell>
                  <Tooltip title="Delete">
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => onDelete(activity._id)}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// ============================================
// ACTIVITY LOG TABLE (Granular)
// ============================================
export const ActivityLogTable = ({ logs, maxRows = 10 }) => {
  const formatTime = (dateString) => {
    try {
      return format(new Date(dateString), 'HH:mm:ss');
    } catch {
      return dateString;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'productive':
        return 'success';
      case 'neutral':
        return 'default';
      case 'unproductive':
        return 'error';
      default:
        return 'default';
    }
  };

  if (!logs || logs.length === 0) {
    return (
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="body1" color="text.secondary">
          No activity logs available
        </Typography>
      </Paper>
    );
  }

  const displayLogs = logs.slice(0, maxRows);

  return (
    <TableContainer component={Paper} elevation={2} sx={{ maxHeight: 400 }}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            <TableCell><strong>Time</strong></TableCell>
            <TableCell><strong>Active Window</strong></TableCell>
            <TableCell><strong>Mouse</strong></TableCell>
            <TableCell><strong>Keyboard</strong></TableCell>
            <TableCell><strong>Category</strong></TableCell>
            <TableCell><strong>Status</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayLogs.map((log) => (
            <TableRow key={log._id} hover>
              <TableCell>{formatTime(log.timestamp)}</TableCell>
              <TableCell sx={{ maxWidth: 300 }}>
                <Typography variant="body2" noWrap>
                  {log.activeWindow}
                </Typography>
              </TableCell>
              <TableCell>{log.mouseMoves}</TableCell>
              <TableCell>{log.keyboardPresses}</TableCell>
              <TableCell>
                <Chip
                  label={log.windowCategory}
                  color={getCategoryColor(log.windowCategory)}
                  size="small"
                />
              </TableCell>
              <TableCell>
                <Chip
                  label={log.idle ? 'IDLE' : 'ACTIVE'}
                  color={log.idle ? 'warning' : 'success'}
                  size="small"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default {
  ActivityTable,
  ActivityLogTable,
};
