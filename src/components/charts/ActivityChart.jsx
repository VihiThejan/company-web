'use client';

import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from 'recharts';

// ============================================
// PRODUCTIVITY BAR CHART
// ============================================
export const ProductivityBarChart = ({ data, title = 'Daily Productivity' }) => {
  const COLORS = {
    activeTime: '#4caf50',
    idleTime: '#ff9800',
  };

  return (
    <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="activeTime" fill={COLORS.activeTime} name="Active Time (hrs)" />
          <Bar dataKey="idleTime" fill={COLORS.idleTime} name="Idle Time (hrs)" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

// ============================================
// PRODUCTIVITY SCORE LINE CHART
// ============================================
export const ProductivityScoreChart = ({ data, title = 'Productivity Trend' }) => {
  return (
    <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#2196f3"
            strokeWidth={2}
            name="Productivity Score"
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

// ============================================
// TOP APPLICATIONS PIE CHART
// ============================================
export const TopAppsChart = ({ data, title = 'Top Applications' }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="duration"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
};

// ============================================
// HOURLY ACTIVITY BAR CHART
// ============================================
export const HourlyActivityChart = ({ data, title = 'Activity by Hour' }) => {
  return (
    <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="activity" fill="#2196f3" name="Activity Level" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

// ============================================
// CATEGORY BREAKDOWN PIE CHART
// ============================================
export const CategoryBreakdownChart = ({ data, title = 'Activity Categories' }) => {
  const COLORS = {
    productive: '#4caf50',
    neutral: '#ffc720',
    unproductive: '#f44336',
  };

  const chartData = [
    { name: 'Productive', value: data.productive || 0, color: COLORS.productive },
    { name: 'Neutral', value: data.neutral || 0, color: COLORS.neutral },
    { name: 'Unproductive', value: data.unproductive || 0, color: COLORS.unproductive },
  ].filter((item) => item.value > 0);

  return (
    <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default {
  ProductivityBarChart,
  ProductivityScoreChart,
  TopAppsChart,
  HourlyActivityChart,
  CategoryBreakdownChart,
};
