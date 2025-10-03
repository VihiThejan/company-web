'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Box, Typography, Container } from '@mui/material';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const HomePage = () => {
  const scrollRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const isSection1InView = useInView(section1Ref, { once: true, margin: '-100px' });
  const isSection2InView = useInView(section2Ref, { once: true });


  return (
    <Box sx={{ overflowX: 'hidden', position: 'relative' }}>
      {/* Hero Section */}
      <motion.div
        ref={scrollRef}
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
          opacity: heroOpacity,
          y: heroY,
          zIndex: 10,
        }}
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
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
              mx: 4
            }}
          >
            Best-in-class design, marketing and technology
          </Typography>
        </Box>
      </motion.div>

    </Box>
  );
};

export default HomePage;
