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
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 3,
        p: { xs: 6, sm: 10 },
        minHeight: 320,
        background: '#111',
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
        }}
      >
        People Behind the Progress
      </Typography>

      {/* Content */}
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 500,
          mb: 2,
          position: 'relative',
          zIndex: 2,
        }}
      >
        The talent behind our breakthrough innovations
      </Typography>

      <Button
        variant="contained"
        onClick={handleNavigate}
        sx={{
          textTransform: 'none',
          px: 4,
          py: 1.2,
          borderRadius: '50px',
          backgroundColor: '#fff',
          color: '#000',
          fontSize: '1rem',
          zIndex: 2,
          '&:hover': {
            backgroundColor: '#eaeaea',
          },
        }}
      >
        Meet Our Team
      </Button>
    </Box>
  );
};

export default StartTalkSection;
