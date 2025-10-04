'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Box, Typography, Container, Grid, Paper, styled } from '@mui/material';
import GridCard from '../other/homeUi/GridCard';
import theme from '@/theme/theme';
import Intro from '../other/homeUi/Intro';
import ExpertiseCarousel from '../other/homeUi/ExpertiseCarousel';
import ClientTestimonials from '../other/homeUi/ClientTestimonials';
import { Call } from '@mui/icons-material';
import CallToActionCards from '../other/homeUi/CallToActionCards';

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
        <Box sx={{ zIndex: 2, transform: {xs: 'translateY(120%)', md:'translateY(1)'} }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 'bold',
              mb: 2,
              mx: 4,
              textAlign: 'left',
            }}
          >
            Empowering Businesses with <br/>Intelligent Digital Solutions
          </Typography>
        </Box>
      </motion.div>

      <Box
        sx={{
          with: '100%',
          mx: 2,
          my: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            px: 3,
            py: 3,
            background: '#e6e6e6ff',
            borderRadius: 10,
            color: theme.palette.secondary.main,
            textAlign: 'left',
            fontWeight: 600,
            fontSize: { xs: '2.5rem', md: '6rem' },
          }}
        >
          “Engineering excellence with intelligent solutions that power your business forward”
        </Typography>
      </Box>

      {/* about us section */}
      <Box sx={{ width: '100%' }}>
        <Intro />
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

      <Box sx={{ flexGrow: 1, mx: 2, my: 5 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, ml: 2, mb: 2 }}>
              Expensive Areas
              <br />
              of Expertise
            </Typography>
            <Typography variant="body1" sx={{ color: '#888', ml: 2, mb: 3 }}>
              We provide customized digital solution to help you capture
              opportunities in a variety of industries.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ borderRadius: 5 }}>
            <ExpertiseCarousel />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <ClientTestimonials />
      </Box>

      <Box sx={{ mx: 2, mb: 5 }}>
        <CallToActionCards />
      </Box>
    </Box>
  );
};

export default HomePage;
