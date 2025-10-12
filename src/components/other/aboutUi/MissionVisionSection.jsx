'use client';

import React from 'react';
import { Box, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import theme from '@/theme/theme';

const MissionVisionSection = () => {
  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <Box
      sx={{
        width: '100%',
        py: 5,
        px: 3,
        color: theme.palette.secondary.main,
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
        direction={isMobile ? 'column' : 'row'}
      >
        {/* Left Image */}
        <Grid size={{ xs: 12, lg: 6 }}>
          <Box
            sx={{
              width: { xs: '100%' },
              height: '100%',
              position: 'relative',
              aspectRatio: '6 / 4',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: 4,
              backgroundColor: '#f5f5f5',
            }}
          >
            <Box
              component="img"
              src="/images/about-img/aboutVM.webp"
              alt="our team"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
          </Box>
        </Grid>

        {/* Right Content */}
        <Grid size={{ xs: 12, lg: 6 }}>
          <Box sx={{ position: 'relative', width: '100%' }}>
            {/* Mission */}
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h4"
                fontWeight={700}
                sx={{ color: theme.palette.secondary.main, mb: 1 }}
              >
                Our Mission
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  lineHeight: 1.8,
                  textAlign: 'justify',
                }}
              >
                To empower businesses with innovative software and marketing
                solutions that drive growth, enhance customer engagement, and
                accelerate digital transformation.
              </Typography>
            </Box>

            {/* Connecting Line */}
            <Box
              sx={{
                width: {xs: '100%', md:'70%'},
                height: '2px',
                backgroundColor: '#555',
                mb: 6,
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '-4px',
                  left: 0,
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: theme.palette.secondary.main,
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '-4px',
                  right: 0,
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: theme.palette.secondary.main,
                }}
              />
            </Box>

            {/* Vision */}
            <Box>
              <Typography
                variant="h4"
                fontWeight={700}
                sx={{ color: theme.palette.secondary.main, mb: 1 }}
              >
                Our Vision
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  lineHeight: 1.8,
                  textAlign: 'justify',
                }}
              >
                To become a global leader in delivering intelligent, creative,
                and sustainable digital solutions that inspire innovation and
                shape the future of technology and marketing.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MissionVisionSection;
