'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import theme from '@/theme/theme';

export default function OurExpertise() {
  const items = [
    {
      icon: (
        <EngineeringIcon
          sx={{ fontSize: 55, color: theme.palette.secondary.main }}
        />
      ),
      title: 'Deep Domain Expertise',
      description:
        'Leverage our proven experience across multiple industries to accelerate your digital transformation.',
    },
    {
      icon: (
        <HandshakeIcon
          sx={{ fontSize: 55, color: theme.palette.secondary.main }}
        />
      ),
      title: 'Strategic Partnership',
      description:
        'Collaborate with a dedicated technology partner committed to long-term growth and measurable results.',
    },
    {
      icon: (
        <CloudUploadIcon
          sx={{ fontSize: 55, color: theme.palette.secondary.main }}
        />
      ),
      title: 'Future-Proof Technology',
      description:
        'Stay ahead with scalable and cloud-ready solutions built to adapt as your business evolves.',
    },
  ];

  return (
    <Box sx={{ pt: { xs: 2 }, pb: 1, px: { xs: 3 }, bgcolor: '#fff' }}>
      <Typography
        component="h2"
        variant="h3"
        textAlign="center"
        sx={{
          fontWeight: 700,
          color: theme.palette.secondary.main,
          mb: 6,
          fontSize: { xs: '2rem', md: '2.7rem' },
        }}
      >
        Why Our Solutions Stand Out?
      </Typography>

      <Grid container spacing={{ xs: 3, md: 5 }} justifyContent="center">
        {items.map((item, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  p: 4,
                  borderRadius: 4,
                  boxShadow: 'none',
                  outline: '1px solid #DADAD7',
                  outlineOffset: '-1px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: '0.3s',
                  '&:hover': { outlineColor: '#000', transform: 'translateY(-3px)' },
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
                  component="h3"
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 1, color: '#111' }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ color: '#555', lineHeight: 1.7 }}>
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
