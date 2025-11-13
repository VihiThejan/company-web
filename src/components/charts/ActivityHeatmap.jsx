'use client';

import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';

/**
 * ActivityHeatmap - Calendar-style activity heatmap
 * Shows activity intensity over days with color coding
 */
export default function ActivityHeatmap({ data }) {
  if (!data || data.length === 0) {
    return (
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Activity Heatmap
        </Typography>
        <Typography color="text.secondary">No activity data available</Typography>
      </Paper>
    );
  }

  // Get color based on intensity (0-4)
  const getIntensityColor = (intensity) => {
    switch (intensity) {
      case 4:
        return '#10b981'; // Excellent (80-100%)
      case 3:
        return '#3b82f6'; // Good (60-79%)
      case 2:
        return '#f59e0b'; // Fair (40-59%)
      case 1:
        return '#ef4444'; // Poor (1-39%)
      case 0:
      default:
        return '#e5e7eb'; // No activity
    }
  };

  // Group data by week
  const groupByWeek = (data) => {
    const weeks = [];
    let currentWeek = [];

    data.forEach((day, index) => {
      currentWeek.push(day);
      if (currentWeek.length === 7 || index === data.length - 1) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
    });

    return weeks;
  };

  const weeks = groupByWeek(data);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Activity Heatmap (Last 30 Days)
      </Typography>
      
      <Box sx={{ mt: 2 }}>
        {weeks.map((week, weekIndex) => (
          <Box 
            key={weekIndex} 
            sx={{ 
              display: 'flex', 
              gap: 1, 
              mb: 1,
              justifyContent: 'flex-start'
            }}
          >
            {week.map((day) => (
              <Box
                key={day.date}
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: getIntensityColor(day.intensity),
                  borderRadius: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: 2,
                  },
                }}
                title={`${day.date} - ${day.productivity}% productivity\n${day.activeHours}h active`}
              >
                <Typography 
                  variant="caption" 
                  sx={{ 
                    fontWeight: 'bold', 
                    color: day.intensity > 0 ? '#fff' : '#666',
                    fontSize: '10px'
                  }}
                >
                  {day.dayOfWeek}
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: day.intensity > 0 ? '#fff' : '#666',
                    fontSize: '9px'
                  }}
                >
                  {new Date(day.date).getDate()}
                </Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      {/* Legend */}
      <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography variant="caption" color="text.secondary">
          Productivity:
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 20, height: 20, backgroundColor: '#e5e7eb', borderRadius: 0.5 }} />
          <Typography variant="caption">None</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 20, height: 20, backgroundColor: '#ef4444', borderRadius: 0.5 }} />
          <Typography variant="caption">Low</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 20, height: 20, backgroundColor: '#f59e0b', borderRadius: 0.5 }} />
          <Typography variant="caption">Fair</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 20, height: 20, backgroundColor: '#3b82f6', borderRadius: 0.5 }} />
          <Typography variant="caption">Good</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 20, height: 20, backgroundColor: '#10b981', borderRadius: 0.5 }} />
          <Typography variant="caption">Excellent</Typography>
        </Box>
      </Box>
    </Paper>
  );
}
