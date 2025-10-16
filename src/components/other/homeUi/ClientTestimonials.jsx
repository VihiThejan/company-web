'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography, Avatar, Paper, IconButton } from '@mui/material';
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

const variants = {
  enter: { opacity: 0, x: 100 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const ClientTestimonials = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef();
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate logic
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 6, md: 10 },
        background: '#fff',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          textAlign: 'center',
          mb: 2,
          color: customTheme.palette.secondary.main,
          fontSize: { xs: '2.5rem', md: '3rem' },
        }}
      >
        What Our Clients Are Saying
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          mb: { xs: 2},
          color: '#222',
          fontWeight: 400,
          fontSize: { xs: '1rem', md: '1.25rem' },
          maxWidth: 700,
          mx: 'auto',
        }}
      >
        Hear directly from our clients about their experiences and the results
        we've delivered.
      </Typography>

      {/* Testimonial Card */}
      <Box
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        sx={{
          width: '100%',
          maxWidth: 1000,
          mx: 'auto',
          position: 'relative',
          height: { xs: 380, md: 300 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ position: 'absolute', width: '100%' }}
          >
            <Paper
              elevation={3}
              sx={{
                width: '100%',
                borderRadius: 4,
                p: { xs: 3, md: 4 },
                background: '#fafafd',
                height: { xs: 300, md: 250 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    mb: 1,
                  }}
                >
                  {Array.from({ length: testimonials[index].rating }).map(
                    (_, i) => (
                      <span key={i} style={{ color: '#ffb400', fontSize: 18 }}>
                        ★
                      </span>
                    )
                  )}
                </Box>
                <Typography
                  variant="body1"
                  sx={{ color: '#222', fontSize: '1rem' }}
                >
                  {testimonials[index].text}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar
                  src={testimonials[index].avatar}
                  sx={{ width: 48, height: 48 }}
                />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {testimonials[index].name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#555' }}>
                    {testimonials[index].role}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* Navigation Dots */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 4,
          gap: 1.5,
        }}
      >
        {testimonials.map((_, i) => (
          <IconButton
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background:
                index === i ? customTheme.palette.primary.main : '#ccc',
              transition: 'all 0.3s',
              '&:hover': { background: customTheme.palette.primary.main },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ClientTestimonials;
