'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography, Paper } from '@mui/material';

/**
 * ProductivityTrendChart - 7-day productivity trend visualization
 * Shows daily active time, idle time, and productivity score
 */
export default function ProductivityTrendChart({ data }) {
  if (!data || data.length === 0) {
    return (
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          7-Day Productivity Trend
        </Typography>
        <Typography color="text.secondary">No productivity data available</Typography>
      </Paper>
    );
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        7-Day Productivity Trend
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="dateFormatted" 
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            yAxisId="left"
            label={{ value: 'Hours', angle: -90, position: 'insideLeft' }}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            domain={[0, 100]}
            label={{ value: 'Productivity %', angle: 90, position: 'insideRight' }}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
            formatter={(value, name) => {
              if (name === 'Productivity Score') return `${value}%`;
              return `${value}h`;
            }}
          />
          <Legend />
          <Line 
            yAxisId="left"
            type="monotone" 
            dataKey="activeTime" 
            stroke="#10b981" 
            name="Active Time"
            strokeWidth={2}
          />
          <Line 
            yAxisId="left"
            type="monotone" 
            dataKey="idleTime" 
            stroke="#ef4444" 
            name="Idle Time"
            strokeWidth={2}
          />
          <Line 
            yAxisId="right"
            type="monotone" 
            dataKey="productivityScore" 
            stroke="#2563eb" 
            name="Productivity Score"
            strokeWidth={2}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
