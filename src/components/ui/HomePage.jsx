'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Box, Typography, Container, Grid, Paper, styled } from '@mui/material';
import GridCard from '../other/GridCard';
import theme from '@/theme/theme';
import Intro from '../other/Intro';

const marketingTags = [
  'Growth Strategy',
  'Lead Nurturing',
  'SEO',
  'Performance Marketing',
  'Go To Market',
  '+More',
];

const HomePage = () => {
  return (
    <Box sx={{ overflowX: 'hidden', position: 'relative' }}>
      {/* Hero Section */}
      <motion.div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
          overflow: 'hidden',
          zIndex: 10,
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
        <Box sx={{ zIndex: 2, transform: 'translateY(120px)' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '4rem' },
              fontWeight: 'bold',
              mb: 2,
              mx: 4,
            }}
          >
            Best-in-class design, marketing and technology
          </Typography>
        </Box>
      </motion.div>

      <Box sx={{mx: 3, my: 5}}>
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.secondary.main,
            textAlign: 'left',
            mt: 5,
            fontWeight: 600,
            fontSize: { xs: '3rem', md: '7rem'}
          }}
        >
          “Empowering Businesses with Strategic IT Solutions and Expert
          Consulting!”
        </Typography>
      </Box>

      {/* about us section */}
      <Box sx={{ width: '100%'}}>
        <Intro/>
      </Box>

      {/* Services Grid */}
      <Box sx={{ flexGrow: 1, mx: 2, my: 5 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 12 }}>
            <GridCard
              title="Technology"
              tags={['Web Apps', 'Mobile Apps', 'Cloud', 'AI', '+More']}
              bgImage="/images/home-img/it.jpg"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <GridCard
              title="Marketing"
              tags={marketingTags}
              bgImage="/images/home-img/marketing.jpg"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <GridCard
              title="Design"
              tags={['UI/UX', 'Branding', 'Prototyping', 'Web Design', '+More']}
              bgImage="/images/home-img/design.jpg"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
