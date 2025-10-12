'use client';

import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DoneIcon from '@mui/icons-material/Done';
import EastIcon from '@mui/icons-material/East';
import theme from '@/theme/theme';

export default function HowWeWork() {
  const steps = [
    {
      title: 'Discover & Strategize',
      description:
        'We begin by understanding your goals, brand identity, and audience. Through data-driven insights and collaborative planning, we define a clear roadmap that aligns technology with marketing impact.',
      icon: (
        <LightbulbIcon
          sx={{ fontSize: 50, color: theme.palette.secondary.main }}
        />
      ),
      step: 'Step 1',
    },
    {
      title: 'Design, Build & Optimize',
      description:
        'Our engineers and creative strategists work hand-in-hand to craft robust digital solutions. From scalable full-stack platforms to compelling marketing campaigns, we ensure every detail delivers measurable value.',
      icon: (
        <CodeIcon sx={{ fontSize: 50, color: theme.palette.secondary.main }} />
      ),
      step: 'Step 2',
    },
    {
      title: 'Launch, Scale & Grow',
      description:
        'We go beyond launch — analyzing performance, optimizing user experience, and scaling your presence across platforms. Our continuous innovation keeps your business ahead in a fast-changing digital world.',
      icon: (
        <TrendingUpIcon
          sx={{ fontSize: 50, color: theme.palette.secondary.main }}
        />
      ),
      step: 'Step 3',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 3},
        textAlign: 'center',
        bgcolor: '#fff',
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: { xs: 2, md: 3 },
          fontSize: { xs: '1.9rem', md: '2.6rem' },
          color: '#111',
        }}
      >
        How We Work: Strategic, Scalable, Seamless
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          maxWidth: 750,
          mx: 'auto',
          mb: { xs: 6, md: 8 },
          color: '#555',
          fontSize: { xs: '1rem', md: '1.1rem' },
          lineHeight: 1.7,
          textAlign: 'justify'
        }}
      >
        From idea to impact — our integrated process bridges innovation, design,
        and growth to deliver high-performing software and marketing solutions.
      </Typography>

      {/* Steps Grid */}
      <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
        {steps.map((step, index) => (
          <Grid key={index} size={{ xs: 12, lgl: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  borderRadius: 4,
                  p: 4,
                  bgcolor: '#fff',
                  boxShadow: 3,
                  height: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: theme.palette.primary.main,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  {step.icon}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: '#111',
                    mb: 2,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#555',
                    mb: 3,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    lineHeight: 1.7,
                    textAlign: 'justify',
                  }}
                >
                  {step.description}
                </Typography>

                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: 2,
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      background: theme.palette.primary.main,
                      px: 3,
                      py: 2,
                      borderRadius: 50,
                      fontWeight: 600
                    }}
                  >
                    {index + 1}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
