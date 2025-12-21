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
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MomentumSection from '../other/homeUi/MomentumSection';



const HomePage = () => {
  const videoRef = useRef(null);
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 1000], [0, 400]);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4; // Set to 40% speed for super-smooth, high-end cinematic feel
    }
  }, []);

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
        {/* Background Video with subtle zoom and parallax animation */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '120%', // Extra height for parallax
            zIndex: 0,
            y: videoY,
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <Box
              component="video"
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                // High-quality rendering properties
                imageRendering: 'auto',
                WebkitFontSmoothing: 'antialiased',
                // Advanced filters for clarity: slightly more contrast, adjusted brightness, and subtle saturation
                filter: 'brightness(0.8) contrast(1.15) saturate(1.1) drop-shadow(0 0 10px rgba(0,0,0,0.3))',
              }}
            >
              <source src="/videos/home-hero.mp4" type="video/mp4" />
            </Box>
          </motion.div>
        </motion.div>

        {/* Animated Gradient Overlay - Removed for clarity */}
        {/* <Box
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
        /> */}

        {/* Elegant Gradient Overlay - Fades to white at bottom */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.1) 50%, #ffffff 100%)',
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
              fontSize: { xs: '2rem', lg: '2.8rem', xl: '4.5rem' },
              fontWeight: '900',
              lineHeight: 1.4,
              mt: { xs: 10, sm: 0, smm: 13, mdll: 10 },
              color: '#fff',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)', // Added for readability
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
                className="hover-btn"
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

      <MomentumSection />

      {/* Animated Fluid Hair-line Wave Transition */}
      <Box sx={{ width: '100%', overflow: 'hidden', lineHeight: 0, mt: -1, mb: -1, position: 'relative', height: '120px', background: 'linear-gradient(180deg, #FFF8E1 0%, #FFFFFF 100%)' }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Animated Fluid Hair-line */}
          <motion.path
            stroke={theme.palette.primary.main}
            strokeWidth="1.5"
            animate={{
              d: [
                "M0 40C240 100 480 10 720 40C960 70 1200 10 1440 40",
                "M0 40C360 -20 720 120 1080 40C1260 0 1440 80 1440 40",
                "M0 40C240 100 480 10 720 40C960 70 1200 10 1440 40"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ opacity: 0.7 }}
          />
          {/* Secondary subtle hairline for depth */}
          <motion.path
            stroke={theme.palette.primary.main}
            strokeWidth="1"
            animate={{
              d: [
                "M0 60C360 120 720 0 1080 60C1440 120 1440 60 1440 60",
                "M0 60C240 0 480 120 720 60C960 0 1200 120 1440 60",
                "M0 60C360 120 720 0 1080 60C1440 120 1440 60 1440 60"
              ]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ opacity: 0.3 }}
          />
        </svg>
      </Box>

      {/* about us section */}
      <Box sx={{ flexGrow: 1, mx: { xs: 2, md: 4, lg: 8 }, mb: 0, mt: -6 }}>
        <Intro />
      </Box>

      {/* Specializations Section with Integrated Waves and Title */}
      <Box sx={{ width: '100%', overflow: 'hidden', lineHeight: 0, background: '#fff', mt: -10, mb: -1, position: 'relative', height: '300px', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* The Title moved lower and Container removed for full-width feel */}
        <Box sx={{ position: 'absolute', zIndex: 10, textAlign: 'center', width: '100%', top: '55%' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              color: theme.palette.secondary.main,
              textShadow: '0 0 20px rgba(255,255,255,0.8)',
              px: { xs: 2, md: 0 } // Add slight padding for mobile if needed, but remove large side spaces
            }}
          >
            Our Core <Box component="span" sx={{ color: theme.palette.primary.main }}>Specializations</Box>
          </Typography>
        </Box>

        <svg viewBox="0 0 1440 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%' }}>
          {/* Wave Line 1 */}
          <motion.path
            animate={{
              d: [
                "M0 120C240 50 480 190 720 120C960 50 1200 190 1440 120V250H0V120Z",
                "M0 90C240 160 480 20 720 90C960 160 1200 20 1440 90V250H0V90Z",
                "M0 120C240 50 480 190 720 120C960 50 1200 190 1440 120V250H0V120Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            fill={theme.palette.primary.main}
            fillOpacity="0.03"
            stroke={theme.palette.primary.main}
            strokeWidth="0.5"
          />
          {/* Wave Line 2 */}
          <motion.path
            animate={{
              d: [
                "M0 160C360 230 720 90 1080 160C1260 195 1440 125 1440 160V250H0V160Z",
                "M0 130C360 60 720 200 1080 130C1260 95 1440 165 1440 130V250H0V130Z",
                "M0 160C360 230 720 90 1080 160C1260 195 1440 125 1440 160V250H0V160Z"
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            fill={theme.palette.primary.main}
            fillOpacity="0.05"
            stroke={theme.palette.primary.main}
            strokeWidth="0.8"
          />
          {/* Wave Line 3 (Hairline Focus) */}
          <motion.path
            animate={{
              d: [
                "M0 200C480 260 960 140 1440 200V250H0V200Z",
                "M0 230C480 170 960 290 1440 230V250H0V230Z",
                "M0 200C480 260 960 140 1440 200V250H0V200Z"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            stroke={theme.palette.primary.main}
            strokeWidth="0.4"
            fillOpacity="0"
          />
          {/* Background fill to connect to next section */}
          <rect y="245" width="1440" height="5" fill="#fafafa" />
        </svg>
      </Box>

      {/* New Services Grid - Modern Style */}
      <Box sx={{ py: 10, px: { xs: 2, md: 4, lg: 8 }, background: '#fafafa', mt: -1 }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
            justifyContent={{ xs: 'flex-start', sm: 'center' }}
            sx={{
              flexWrap: 'nowrap', // Force single line on all screen sizes
              overflowX: { xs: 'auto', sm: 'visible' }, // Scroll only on mobile
              pb: { xs: 2, sm: 0 },
              // Hide scrollbar but keep functionality
              '&::-webkit-scrollbar': { display: 'none' },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {[
              { title: 'Technology', icon: '💻', link: '/technology', desc: 'Cutting-edge software solutions' },
              { title: 'Marketing', icon: '📈', link: '/marketing', desc: 'Data-driven growth strategies' },
              { title: 'Design', icon: '🎨', link: '/design', desc: 'Human-centric digital experiences' }
            ].map((service, index) => (
              <Grid
                item
                xs={10}
                sm={4}
                md={4}
                key={index}
                sx={{
                  minWidth: { xs: '300px', sm: 'auto' },
                  display: 'flex',
                }}
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ width: '100%', display: 'flex' }}
                >
                  <Link href={service.link} style={{ textDecoration: 'none', width: '100%', display: 'flex' }}>
                    <Box
                      sx={{
                        background: '#fff',
                        borderRadius: '24px',
                        p: 5,
                        width: '100%',
                        textAlign: 'center',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                        border: '1px solid rgba(0,0,0,0.03)',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        '&:hover': {
                          borderColor: theme.palette.primary.main,
                          boxShadow: `0 20px 50px ${theme.palette.primary.main}20`,
                          '& .service-icon': {
                            transform: 'scale(1.2) rotate(10deg)',
                            background: theme.palette.primary.main,
                          },
                          '& .service-arrow': {
                            transform: 'translateX(5px)',
                            opacity: 1
                          }
                        }
                      }}
                    >
                      <Box
                        className="service-icon"
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '20px',
                          background: `${theme.palette.primary.main}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '2.5rem',
                          mx: 'auto',
                          mb: 3,
                          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 800,
                          color: theme.palette.secondary.main,
                          mb: 1.5,
                          fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' }
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#777',
                          mb: 3,
                          fontSize: '1rem',
                          fontWeight: 500
                        }}
                      >
                        {service.desc}
                      </Typography>
                      <Box
                        className="service-arrow"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 1,
                          color: theme.palette.primary.main,
                          fontWeight: 700,
                          opacity: 0.8,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        Explore More <ArrowRightAltIcon />
                      </Box>
                    </Box>
                  </Link>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Removed old Services Grid */}

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
