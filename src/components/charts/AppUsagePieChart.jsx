'use client';

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography, Paper } from '@mui/material';

/**
 * AppUsagePieChart - Top applications usage distribution
 * Shows pie chart of most used applications
 */
export default function AppUsagePieChart({ data }) {
  if (!data || data.length === 0) {
    return (
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Top Applications Usage
        </Typography>
        <Typography color="text.secondary">No application data available</Typography>
      </Paper>
    );
  }

  // Color palette for pie chart
  const COLORS = [
    '#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6',
    '#ec4899', '#14b8a6', '#f97316', '#06b6d4', '#6366f1'
  ];

  // Transform data for pie chart
  const chartData = data.map((app) => ({
    name: app.name,
    value: parseFloat(app.durationHours),
    percentage: app.percentage,
    category: app.category,
  }));

  const renderCustomLabel = ({ name, percentage }) => {
    return `${name} (${percentage}%)`;
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Top Applications Usage
      </Typography>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => `${value} hours`}
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value, entry) => {
              const category = entry.payload.category;
              const emoji = 
                category === 'productive' ? '🟢' :
                category === 'neutral' ? '🔵' : '🔴';
              return `${emoji} ${value}`;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
}
