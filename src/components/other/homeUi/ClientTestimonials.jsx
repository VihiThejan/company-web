import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Box, Typography, Avatar, Paper, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const testimonials = [
  {
    name: 'Alisa Olivia',
    role: 'CTO at Ritovex',
    text: 'I came to them with a vague idea, and they helped me refine it into a concrete plan. Throughout the process, they kept me informed and involved, ensuring I was happy with the direction.',
    avatar: '/images/clients/client1.jpg',
    rating: 5,
  },
  {
    name: 'Alisa Olivia',
    role: 'CTO at Ritovex',
    text: 'I came to them with a vague idea, and they helped me refine it into a concrete plan. Throughout the process, they kept me informed and involved, ensuring I was happy with the direction.',
    avatar: '/images/clients/client2.jpg',
    rating: 5,
  },
  {
    name: 'Alisa Olivia',
    role: 'CTO at Ritovex',
    text: 'I came to them with a vague idea, and they helped me refine it into a concrete plan. Throughout the process, they kept me informed and involved, ensuring I was happy with the direction.',
    avatar: '/images/clients/client3.jpg',
    rating: 5,
  },
];

// Duplicate first two items at the end for seamless looping
const testimonialsLoop = [...testimonials, testimonials[0], testimonials[1]];

const ClientTestimonials = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('md'));
  const controls = useAnimation();
  const intervalRef = useRef();
  const indexRef = useRef(0);

  // Responsive card width
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef();

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

  // Always show 2 cards at a time on large, 1 on small
  const visibleCount = isLarge ? 2 : 1;
  const cardWidth = containerWidth / visibleCount || 400;

  useEffect(() => {
    controls.start({ x: 0 });
    indexRef.current = 0;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      indexRef.current += 1;
      if (indexRef.current > testimonialsLoop.length - visibleCount) {
        controls.start({ x: 0, transition: { duration: 0 } });
        indexRef.current = 1;
        setTimeout(() => {
          controls.start({
            x: -cardWidth * indexRef.current,
            transition: { duration: 0.8, ease: 'easeInOut' },
          });
        }, 50);
      } else {
        controls.start({
          x: -cardWidth * indexRef.current,
          transition: { duration: 0.8, ease: 'easeInOut' },
        });
      }
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, [controls, cardWidth, visibleCount]);

  return (
    <Box
      sx={{
        width: '100vw',
        py: { xs: 6, md: 10 },
        px: 0,
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
          fontSize: { xs: '2rem', md: '2.7rem' },
        }}
      >
        What Our Clients are Saying
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
        Hear directly from our clients about their experiences and the results
        we've delivered. Explore Client Feedback
      </Typography>
      <Box
        ref={containerRef}
        sx={{
          width: '100vw',
          maxWidth: '100vw',
          overflow: 'hidden',
          position: 'relative',
          mx: 'auto',
          borderRadius: 4,
        }}
      >
        {/* Fade outline overlay */}
        <Box
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            borderRadius: 4,
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0.18) 100%),' +
              'linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0.18) 100%)',
            boxShadow: '0 0 0 8px rgba(255,255,255,0.08) inset',
          }}
        />
        <motion.div
          animate={controls}
          style={{
            display: 'flex',
            gap: 24,
            width:
              testimonialsLoop.length * cardWidth +
              (testimonialsLoop.length - 1) * 24,
            overflow: 'hidden',
          }}
        >
          {testimonialsLoop.map((t, idx) => (
            <Paper
              key={idx}
              elevation={3}
              sx={{
                minWidth: `${cardWidth}px`,
                maxWidth: `${cardWidth}px`,
                borderRadius: 4,
                p: 3,
                mb: '5px',
                mx: 'auto',
                background: '#fafafd',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: {xs: '300px', md: '230px'},
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
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: '#222', fontSize: 18 }}>
                      ★
                    </span>
                  ))}
                </Box>
                <Typography
                  variant="body1"
                  sx={{ color: '#222', fontSize: '1rem', mb: 2 }}
                >
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
