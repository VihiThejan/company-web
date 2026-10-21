'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import LanguageIcon from '@mui/icons-material/Language';
import ComputerIcon from '@mui/icons-material/Computer';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import theme from '@/theme/theme';

export default function CareerBenefits() {
  const benefits = [
    {
      title: 'Global Remote Culture',
      description:
        'Work from anywhere with a team distributed across time zones. We embrace flexibility, autonomy, and strong collaboration practices.',
      icon: (
        <LanguageIcon
          sx={{ fontSize: 50, color: theme.palette.secondary.main }}
        />
      ),
    },
    {
      title: 'Meaningful Projects',
      description:
        'Contribute to real-world software products, SaaS platforms, and enterprise systems used across industries.',
      icon: (
        <WorkIcon sx={{ fontSize: 50, color: theme.palette.secondary.main }} />
      ),
    },
    {
      title: 'Tech-First Environment',
      description:
        'We use modern frameworks, cloud-native tools, and agile practices to deliver quality and scalability.',
      icon: (
        <ComputerIcon
          sx={{ fontSize: 50, color: theme.palette.secondary.main }}
        />
      ),
    },
    {
      title: 'Collaborative Teams',
      description:
        'Work closely with senior engineers, UI/UX designers, and product strategists who value impact over hierarchy.',
      icon: (
        <GroupsIcon
          sx={{ fontSize: 50, color: theme.palette.secondary.main }}
        />
      ),
    },
    {
      title: 'Continuous Learning',
      description:
        'Access mentorship, workshops, and training resources to strengthen your technical and leadership skills.',
      icon: (
        <SchoolIcon
          sx={{ fontSize: 50, color: theme.palette.secondary.main }}
        />
      ),
    },
    {
      title: 'Work-Life Flexibility',
      description:
        'We support healthy balance with flexible schedules, remote perks, and encouragement for personal wellbeing.',
      icon: (
        <FlightTakeoffIcon
          sx={{ fontSize: 50, color: theme.palette.secondary.main }}
        />
      ),
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 3 },
        textAlign: 'center',
        bgcolor: '#fff',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: { xs: 2, md: 3 },
          fontSize: { xs: '1.9rem', md: '2.6rem' },
          color: '#111',
        }}
      >
        Why Work With Us
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
          textAlign: 'justify',
        }}
      >
        Join a digital-first culture where innovation, teamwork, and growth
        drive everything we build. Our environment empowers remote talent to do
        their best work from anywhere.
      </Typography>

      <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
        {benefits.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  borderRadius: 4,
                  p: 4,
                  bgcolor: '#fff',
                  boxShadow: 'none',
                  outline: '1px solid #DADAD7',
                  outlineOffset: '-1px',
                  height: '350px',
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
                    width: 80,
                    height: 80,
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
                  {item.icon}
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
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#555',
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    lineHeight: 1.7,
                    textAlign: 'justify',
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
