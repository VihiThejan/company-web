'use client';

import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import HotelIcon from '@mui/icons-material/Hotel';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HikingIcon from '@mui/icons-material/Hiking';
import theme from '@/theme/theme';
import Link from 'next/link';

export default function IndustriesWeServe() {
  const industries = [
    {
      icon: (
        <AccountBalanceIcon
          sx={{ fontSize: 45, color: theme.palette.primary.main }}
        />
      ),
      title: 'Finance Services',
      description:
        'We deliver secure, reliable, and compliant digital solutions tailored for the financial sector. Our services help financial institutions enhance operational efficiency while protecting sensitive data.',
      button: 'Explore Finance Solutions',
      slug: 'finance',
    },
    {
      icon: (
        <HikingIcon sx={{ fontSize: 45, color: theme.palette.primary.main }} />
      ),
      title: 'Tourism Services',
      description:
        'We build engaging and user-friendly digital solutions that elevate the travel and tourism experience. Our services help tourism businesses attract, engage, and retain customers.',
      button: 'Explore Tourism Solutions',
      slug: 'tourism',
    },
    {
      icon: (
        <BusinessIcon
          sx={{ fontSize: 45, color: theme.palette.primary.main }}
        />
      ),
      title: 'Government Services',
      description:
        'We provide scalable and secure digital solutions that support efficient and transparent government operations. Our services align with regulatory standards and public sector requirements.',
      button: 'Explore Government Solutions',
      slug: 'government',
    },
  ];

  return (
    <Box sx={{ py: { xs: 10 }, px: { xs: 3 } }}>
      <Typography
        variant="h3"
        textAlign="center"
        sx={{
          fontWeight: 700,
          color: theme.palette.secondary.main,
          mb: 6,
          fontSize: { xs: '2rem', md: '2.7rem' },
        }}
      >
        Our Industry Expertise
      </Typography>

      <Grid container spacing={{ xs: 3, md: 3 }} justifyContent="center">
        {industries.map((item, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Link
              href={`/industries/${item.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    bgcolor: '#fff',
                    p: 4,
                    borderRadius: 4,
                    boxShadow: 3,
                    height: { xs: '380px', sm: '320px', md: '360px', lg: '320px' },
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'column',
                    transition: '0.3s',
                    '&:hover': { boxShadow: 6, transform: 'translateY(-5px)' },
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box sx={{ mr: 2 }}>{item.icon}</Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: '#111',
                          mb: 1,
                          fontSize: '1.3rem',
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{ color: '#000', mb: 3 }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: '#1E1E1E',
                      borderRadius: '25px',
                      fontWeight: 400,
                      '&:hover': { backgroundColor: '#ffc02cff' },
                    }}
                  >
                    {item.button}
                  </Button>
                </Box>
              </motion.div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
