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
          sx={{ fontSize: 30, color: theme.palette.secondary.main }}
        />
      ),
      step: 'Step 1',
    },
    {
      title: 'Design, Build & Optimize',
      description:
        'Our engineers and creative strategists work hand-in-hand to craft robust digital solutions. From scalable full-stack platforms to compelling marketing campaigns, we ensure every detail delivers measurable value.',
      icon: (
        <CodeIcon sx={{ fontSize: 30, color: theme.palette.secondary.main }} />
      ),
      step: 'Step 2',
    },
    {
      title: 'Launch, Scale & Grow',
      description:
        'We go beyond launch — analyzing performance, optimizing user experience, and scaling your presence across platforms. Our continuous innovation keeps your business ahead in a fast-changing digital world.',
      icon: (
        <TrendingUpIcon
          sx={{ fontSize: 30, color: theme.palette.secondary.main }}
        />
      ),
      step: 'Step 3',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 4 },
        px: { xs: 3 },
        textAlign: 'center',
        bgcolor: theme.palette.secondary.light,
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h2"
        sx={{
          color: theme.palette.secondary.main,
          fontWeight: 700,
          textAlign: 'center',
          mb: 2,
          mt: 8,
          fontSize: { xs: '2.5rem', md: '3rem' },
        }}
      >
        How We Work: Strategic, Scalable, Seamless
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          mb: { xs: 2 },
          color: theme.palette.secondary.main,
          maxWidth: 700,
          mx: 'auto',
        }}
      >
        From idea to impact — our integrated process bridges innovation, design,
        and growth to deliver high-performing software and marketing solutions.
      </Typography>

      {/* Steps Grid */}
      <Grid
        container
        spacing={{ xs: 4 }}
        sx={{ mt: 4 }}
        justifyContent="center"
      >
        {steps.map((step, index) => (
          <Grid key={index} size={{ xs: 12, lgl: 4 }}>
            <Box>
              <Box
                sx={{
                  borderRadius: 4,
                  p: 4,
                  bgcolor: theme.palette.secondary.light,
                  boxShadow: 'none',
                  outline: '1px solid #DADAD7',
                  outlineOffset: '-1px',
                  height: '450px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    outlineColor: '#000',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    bgcolor: theme.palette.primary.main,
                    color: '#fff',
                    '& svg': { color: '#fff' },
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
                    color: theme.palette.secondary.main,
                    mb: 2,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.secondary.main,
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
                    variant="body2"
                    sx={{
                      background: theme.palette.primary.main,
                      color: '#fff',
                      px: 3,
                      py: 2,
                      borderRadius: 50,
                      fontWeight: 600,
                    }}
                  >
                    {index + 1}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
