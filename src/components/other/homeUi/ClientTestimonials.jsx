'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Box, Typography, Avatar, Paper, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import customTheme from '@/theme/theme';

const testimonials = [
  {
    name: 'Alisa Olivia',
    role: 'CTO at Ritovex',
    text: 'They transformed our initial concept into a brilliant product that exceeded our expectations. Truly dedicated and professional team!',
    avatar: '/images/clients/client1.jpg',
    rating: 5,
  },
  {
    name: 'Michael Davis',
    role: 'Founder at TechCraft',
    text: 'Their communication and execution were flawless. They kept us updated throughout the project and delivered beyond scope.',
    avatar: '/images/clients/client2.jpg',
    rating: 5,
  },
  {
    name: 'Sophia Lee',
    role: 'Manager at Nova Inc.',
    text: 'A team that genuinely cares about client satisfaction! Excellent results and quick turnaround time.',
    avatar: '/images/clients/client3.jpg',
    rating: 5,
  },
  {
    name: 'Daniel Thomas',
    role: 'CEO at CloudEdge',
    text: 'Professionalism and creativity at their best. We will definitely collaborate again!',
    avatar: '/images/clients/client4.jpg',
    rating: 5,
  },
];

const ClientTestimonials = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('md'));
  const controls = useAnimation();
  const containerRef = useRef();
  const [containerWidth, setContainerWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef();

  // Responsive layout width
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCount = isLarge ? 2 : 1;
  const gap = 24;
  const cardWidth = (containerWidth - gap * (visibleCount - 1)) / visibleCount || 400;
  const totalCards = testimonials.length;

  // Create cloned slides for smooth loop
  const extendedSlides = [...testimonials, ...testimonials.slice(0, visibleCount)];

  // Auto slide logic with seamless looping
  useEffect(() => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const total = testimonials.length;
    controls.start({
      x: -(cardWidth + gap) * index,
      transition: { duration: 0.8, ease: 'easeInOut' },
    });

    // When reaching the cloned slides, reset instantly
    if (index === total) {
      setTimeout(() => {
        controls.set({ x: 0 });
        setIndex(0);
      }, 850);
    }
  }, [index, cardWidth, controls, testimonials.length]);

  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 6, md: 10 },
        background: '#fff',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          textAlign: 'center',
          mb: 2,
          color: customTheme.palette.secondary.main,
          fontSize: { xs: '2rem', md: '2.7rem' },
        }}
      >
        What Our Clients Are Saying
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          mb: { xs: 4, md: 6 },
          color: '#222',
          fontWeight: 400,
          fontSize: { xs: '1rem', md: '1.25rem' },
          maxWidth: 700,
          mx: 'auto',
        }}
      >
        Hear directly from our clients about their experiences and the results we've delivered.
      </Typography>

      <Box
        ref={containerRef}
        sx={{
          width: '100vw',
          overflow: 'hidden',
          position: 'relative',
          mx: 'auto',
          touchAction: 'pan-y',
        }}
      >
        <motion.div
          animate={controls}
          drag="x"
          dragConstraints={{
            left: -((extendedSlides.length - visibleCount) * (cardWidth + gap)),
            right: 0,
          }}
          dragElastic={0.15}
          style={{
            display: 'flex',
            gap: `${gap}px`,
            cursor: 'grab',
            width: extendedSlides.length * (cardWidth + gap),
          }}
        >
          {extendedSlides.map((t, idx) => (
            <Paper
              key={idx}
              elevation={3}
              sx={{
                flexShrink: 0,
                width: `${cardWidth}px`,
                borderRadius: 4,
                p: 3,
                mb: 1,
                background: '#fafafd',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: { xs: 320, md: 250 },
                boxSizing: 'border-box',
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: '#ffb400', fontSize: 18 }}>★</span>
                  ))}
                </Box>
                <Typography variant="body1" sx={{ color: '#222', fontSize: '1rem' }}>
                  {t.text}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar src={t.avatar} sx={{ width: 48, height: 48 }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {t.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#555' }}>
                    {t.role}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default ClientTestimonials;
