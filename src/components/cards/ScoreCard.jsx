'use client';

/**
 * ScoreCard Component
 * Displays AI productivity score with color coding
 * VIHI IT Solutions - Stage 4
 */

import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { TrendingUp, TrendingDown, TrendingFlat } from '@mui/icons-material';

const ScoreCard = ({ score, category, change = null, date, loading = false }) => {
  // Color mapping for categories
  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'Excellent':
        return {
          bg: '#e8f5e9',
          border: '#4caf50',
          text: '#2e7d32',
          chipBg: '#4caf50',
        };
      case 'Good':
        return {
          bg: '#e3f2fd',
          border: '#2196f3',
          text: '#1565c0',
          chipBg: '#2196f3',
        };
      case 'Needs Improvement':
        return {
          bg: '#fff3e0',
          border: '#ff9800',
          text: '#e65100',
          chipBg: '#ff9800',
        };
      case 'Inactive':
        return {
          bg: '#ffebee',
          border: '#f44336',
          text: '#c62828',
          chipBg: '#f44336',
        };
      default:
        return {
          bg: '#f5f5f5',
          border: '#9e9e9e',
          text: '#616161',
          chipBg: '#9e9e9e',
        };
    }
  };

  // Trend icon based on change
  const getTrendIcon = () => {
    if (!change) return null;
    if (change > 0) return <TrendingUp sx={{ color: '#4caf50', fontSize: 20 }} />;
    if (change < 0) return <TrendingDown sx={{ color: '#f44336', fontSize: 20 }} />;
    return <TrendingFlat sx={{ color: '#9e9e9e', fontSize: 20 }} />;
  };

  const colors = getCategoryColor(category);

  if (loading) {
    return (
      <Card
        sx={{
          background: '#f5f5f5',
          borderRadius: 2,
          border: '2px solid #e0e0e0',
          height: '100%',
        }}
      >
        <CardContent>
          <Typography color="text.secondary">Loading...</Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        background: `linear-gradient(135deg, ${colors.bg} 0%, #ffffff 100%)`,
        borderRadius: 2,
        border: `2px solid ${colors.border}`,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
        },
        height: '100%',
      }}
    >
      <CardContent>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary" fontWeight={600}>
            AI Productivity Score
          </Typography>
          <Chip
            label={category}
            size="small"
            sx={{
              bgcolor: colors.chipBg,
              color: 'white',
              fontWeight: 600,
              fontSize: '0.75rem',
            }}
          />
        </Box>

        {/* Score Display */}
        <Box sx={{ textAlign: 'center', my: 2 }}>
          <Typography
            variant="h2"
            fontWeight={700}
            sx={{ color: colors.text, fontSize: { xs: '3rem', md: '4rem' } }}
          >
            {score}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            out of 100
          </Typography>
        </Box>

        {/* Trend Indicator */}
        {change !== null && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
              mt: 2,
            }}
          >
            {getTrendIcon()}
            <Typography
              variant="body2"
              fontWeight={600}
              sx={{
                color: change > 0 ? '#4caf50' : change < 0 ? '#f44336' : '#9e9e9e',
              }}
            >
              {change > 0 ? '+' : ''}
              {change} from yesterday
            </Typography>
          </Box>
        )}

        {/* Date */}
        {date && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: 'block', textAlign: 'center', mt: 1 }}
          >
            {new Date(date).toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
            })}
          </Typography>
        )}

        {/* Score Breakdown */}
        <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #e0e0e0' }}>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
            Score Breakdown:
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
            <Typography variant="caption" color="text.secondary">
              Time Efficiency (70%)
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="caption" color="text.secondary">
              Activity Level (30%)
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ScoreCard;
