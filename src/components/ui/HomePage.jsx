'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          textAlign: 'center',
          color: '#fff',
          overflow: 'hidden',
        }}
      >
        {/* Background Video */}
        <Box
          component="video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src="/videos/home-hero.mp4" type="video/mp4" />
        </Box>

        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.77)',
            zIndex: 1,
          }}
        />

        {/* Hero Text */}
        <Box sx={{ zIndex: 2 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '4rem' },
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            Best-in-class design,
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '4rem' },
              fontWeight: 'bold',
            }}
          >
            marketing and technology
          </Typography>
        </Box>
      </Box>

      {/* Other Sections of Homepage */}
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          About Us
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vehicula, urna ut dapibus hendrerit, neque lacus facilisis erat, vel
          dignissim lacus ex at metus.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
