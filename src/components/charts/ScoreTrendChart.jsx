'use client';

/**
 * ScoreTrendChart Component
 * Displays 7-day AI score trend with line chart
 * VIHI IT Solutions - Stage 4
 */

import { Box, Paper, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const ScoreTrendChart = ({ data, loading = false }) => {
  if (loading) {
    return (
      <Paper sx={{ p: 3, borderRadius: 2 }}>
        <Typography>Loading trend data...</Typography>
      </Paper>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Paper sx={{ p: 3, borderRadius: 2 }}>
        <Typography color="text.secondary">No trend data available</Typography>
      </Paper>
    );
  }

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <Paper sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.95)' }}>
          <Typography variant="body2" fontWeight={600}>
            {data.dateFormatted}
          </Typography>
          <Typography variant="body2" sx={{ color: '#667eea', fontWeight: 600, mt: 1 }}>
            Score: {data.score}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Category: {data.category}
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block">
            Active: {data.activeHours}h | Idle: {data.idleHours}h
          </Typography>
        </Paper>
      );
    }
    return null;
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <Typography variant="h6" fontWeight={600} mb={2}>
        7-Day Productivity Trend
      </Typography>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="dateFormatted"
            tick={{ fontSize: 12 }}
            stroke="#666"
          />
          <YAxis
            domain={[0, 100]}
            tick={{ fontSize: 12 }}
            stroke="#666"
            label={{ value: 'Score', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#667eea"
            strokeWidth={3}
            dot={{ fill: '#667eea', r: 5 }}
            activeDot={{ r: 7 }}
            name="AI Productivity Score"
          />
          {/* Reference lines */}
          <Line
            type="monotone"
            dataKey={() => 80}
            stroke="#4caf50"
            strokeWidth={1}
            strokeDasharray="5 5"
            dot={false}
            name="Excellent (80+)"
          />
          <Line
            type="monotone"
            dataKey={() => 60}
            stroke="#2196f3"
            strokeWidth={1}
            strokeDasharray="5 5"
            dot={false}
            name="Good (60+)"
          />
          <Line
            type="monotone"
            dataKey={() => 40}
            stroke="#ff9800"
            strokeWidth={1}
            strokeDasharray="5 5"
            dot={false}
            name="Needs Improvement (40+)"
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Category Legend */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2, justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Box sx={{ width: 12, height: 12, bgcolor: '#4caf50', borderRadius: '50%' }} />
          <Typography variant="caption">Excellent (80-100)</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Box sx={{ width: 12, height: 12, bgcolor: '#2196f3', borderRadius: '50%' }} />
          <Typography variant="caption">Good (60-79)</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Box sx={{ width: 12, height: 12, bgcolor: '#ff9800', borderRadius: '50%' }} />
          <Typography variant="caption">Needs Improvement (40-59)</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Box sx={{ width: 12, height: 12, bgcolor: '#f44336', borderRadius: '50%' }} />
          <Typography variant="caption">Inactive (0-39)</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default ScoreTrendChart;
