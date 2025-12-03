'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, Button } from '@mui/material';
import theme from '@/theme/theme';

const StartTalkSection = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/team'); // 👈 Update path to your contact or form page
  };

  return (
    <Box
      className="hover-lift-shadow"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 3,
        p: { xs: 6, sm: 10 },
        minHeight: 320,
        bgcolor: theme.palette.secondary.main,
        color: '#fff',
        boxShadow: '0 0 40px rgba(0, 0, 0, 0.07)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Soft overlay lighting lines */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />

      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          fontSize: { xs: '2.2rem', sm: '3rem', md: '3rem' },
          mb: 2,
          position: 'relative',
          zIndex: 2,
          color: 'inherit',
        }}
      >
        People Behind the Progress
      </Typography>

      {/* Content */}
      <Typography
        variant="body1"
        sx={{
          fontWeight: 500,
          mb: 2,
          position: 'relative',
          zIndex: 2,
          color: theme.palette.secondary.light
        }}
      >
        The talent behind our breakthrough innovations
      </Typography>

      <Button
        variant="outlined"
        onClick={handleNavigate}
        className="hover-btn"
        sx={{
          color: '#fff',
          borderColor: '#fff',
          fontWeight: 600,
          fontSize: '1rem',
          px: 3,
          py: 1.2,
          borderRadius: '25px',
          '&:hover': {
            backgroundColor: '#fff',
            color: theme.palette.secondary.main,
          },
        }}
      >
        Meet Our Team
      </Button>
    </Box>
  );
};

export default StartTalkSection;
