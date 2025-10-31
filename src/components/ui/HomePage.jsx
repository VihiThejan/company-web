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
import Link from 'next/link';
import CallIcon from '@mui/icons-material/Call';

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
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        style={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          color: theme.palette.secondary.light,
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
            filter: 'brightness(0.6) contrast(1.2)',
          }}
        >
          <source src="/videos/home-hero.mp4" type="video/mp4" />
        </Box>

        {/* Animated Gradient Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 30% 40%, rgba(0, 230, 118, 0.2), transparent 60%), radial-gradient(circle at 70% 60%, rgba(33,150,243,0.25), transparent 60%)',
            animation: 'gradientShift 10s ease-in-out infinite alternate',
            zIndex: 1,
            '@keyframes gradientShift': {
              '0%': { transform: 'translateX(0px)' },
              '100%': { transform: 'translateX(50px)' },
            },
          }}
        />

        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(0, 0, 0, 0.26) 0%, rgba(0, 0, 0, 0.37) 100%)',
            zIndex: 2,
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 3,
            px: { xs: 3, md: 6, xl: 2 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: { xs: '900px', xl: '1200px' },
            height: '100vh',
          }}
        >
          {/* Headline */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', lg: '3.5rem', xl: '6rem' },
              fontWeight: '900',
              lineHeight: 1.4,
              mt: { xs: 10, sm: 0, smm: 13, mdll: 10 },
            }}
          >
            Empowering Businesses with Intelligent Digital Solutions
          </Typography>

          {/* Tagline */}
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem', lg: '1.5rem' },
              color: theme.palette.secondary.light,
              mt: 3,
              mb: 5,
              lineHeight: 1.6,
              textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              display: { smm: 'none', lg: 'block' },
            }}
          >
            Building intelligent, scalable, and high-performing solutions that
            redefine your digital success story.
          </Typography>

          {/* CTA Button */}
          <Box>
            <Link href={`/contactus`} style={{ textDecoration: 'none' }}>
              <Box
                component="button"
                sx={{
                  background: theme.palette.primary.main,
                  color: theme.palette.secondary.option,
                  border: 'none',
                  px: 5,
                  py: 1.6,
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  mt: { mdll: 2, lg: 0 },
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'scale(1.06)',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <span>Book a Call</span>
                  <CallIcon />
                </Box>
              </Box>
            </Link>
          </Box>
          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
            }
            style={{
              mt: 10,
              opacity: 0.8,
            }}
          >
            <Box
              sx={{
                width: 30,
                height: 50,
                border: `2px solid ${theme.palette.primary.main}`,
                borderRadius: 12,
                cursor: 'pointer',
                mt: 2,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: theme.palette.primary.main,
                  animation: 'scrollDot 2s infinite',
                },
                '@keyframes scrollDot': {
                  '0%': { opacity: 0, transform: 'translate(-50%, 0)' },
                  '50%': { opacity: 1, transform: 'translate(-50%, 12px)' },
                  '100%': { opacity: 0, transform: 'translate(-50%, 0)' },
                },
              }}
            />
          </motion.div>
        </Box>
      </motion.section>

      <Box
        sx={{
          with: '100%',
          mx: 2,
          my: 3,
        }}
      ></Box>

      {/* about us section */}
      <Box sx={{ flexGrow: 1, mx: { xs: 2, md: 4, lg: 8 }, mb: 10 }}>
        <Intro />
      </Box>

      {/* Services Grid */}
      <Box sx={{ flexGrow: 1, mx: { xs: 2, md: 4, lg: 8 }, mb: 10 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 12 }}>
            <GridCard
              title="Technology"
              tags={['Web Apps', 'Mobile Apps', 'Cloud', 'AI', '+More']}
              bgImage="/images/home-img/home-tech.webp"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <GridCard
              title="Marketing"
              tags={marketingTags}
              bgImage="/images/home-img/home-marketing.webp"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <GridCard
              title="Design"
              tags={['UI/UX', 'Branding', 'Prototyping', 'Web Design', '+More']}
              bgImage="/images/home-img/home-design.webp"
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, mx: { xs: 2, md: 4, lg: 8 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 12 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                textAlign: 'center',
                fontSize: { xs: '2.5rem', md: '3rem' },
              }}
            >
              Expensive Areas of Expertise
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                mb: { xs: 2 },
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              We provide customized digital solution to help you capture
              opportunities in a variety of industries.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 12 }} sx={{ borderRadius: 5 }}>
            <ExpertiseCarousel />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, mx: { xs: 2, md: 4, lg: 8 } }}>
        <ClientTestimonials />
      </Box>

      <Box sx={{ flexGrow: 1, mx: { xs: 2, md: 4, lg: 8 } }}>
        <CallToActionCards />
      </Box>
    </Box>
  );
};

export default HomePage;
