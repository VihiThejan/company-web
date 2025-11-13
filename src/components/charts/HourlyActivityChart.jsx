'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography, Paper } from '@mui/material';

/**
 * HourlyActivityChart - Hourly activity distribution for a day
 * Shows active and idle time by hour
 */
export default function HourlyActivityChart({ data }) {
  if (!data || data.length === 0) {
    return (
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Hourly Activity Distribution
        </Typography>
        <Typography color="text.secondary">No hourly data available</Typography>
      </Paper>
    );
  }

  // Filter out hours with no activity for cleaner visualization
  const activeHours = data.filter((hour) => hour.totalLogs > 0);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Hourly Activity Distribution
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={activeHours.length > 0 ? activeHours : data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="hour" 
            tick={{ fontSize: 11 }}
          />
          <YAxis 
            label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
            formatter={(value, name) => [`${value} min`, name]}
          />
          <Legend />
          <Bar 
            dataKey="activeMinutes" 
            fill="#10b981" 
            name="Active Time"
          />
          <Bar 
            dataKey="idleMinutes" 
            fill="#ef4444" 
            name="Idle Time"
          />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
}
