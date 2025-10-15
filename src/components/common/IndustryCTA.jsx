'use client';

import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import EastIcon from '@mui/icons-material/East';
import theme from '@/theme/theme';
import { useRouter } from 'next/navigation';

export default function IndustryCTA() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/contactus'); // 👈 Update path to your contact or form page
  };
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      sx={{
        bgcolor: theme.palette.secondary.main,
        color: '#fff',
        py: { xs: 6, md: 8 },
        px: { xs: 3, md: 6 },
        borderRadius: 3,
        textAlign: 'center',
        maxWidth: '100%',
        boxShadow: 6,
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 2,
          fontSize: { xs: '1.8rem', md: '2.3rem' },
        }}
      >
        Ready for an IT Partner Who Speaks Your Industry’s Language?
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        sx={{
          mb: 5,
          maxWidth: 800,
          mx: 'auto',
          color: 'rgba(255,255,255,0.85)',
          lineHeight: 1.7,
          fontSize: { xs: '1rem', md: '1.1rem' },
        }}
      >
        Stop adopting generic software. Start innovating with tailor-made
        solutions that drive measurable business outcomes and industry
        excellence.
      </Typography>

      {/* Buttons */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        spacing={2}
      >
        <Button
          variant="outlined"
          onClick={handleNavigate}
          sx={{
            color: '#fff',
            borderColor: '#fff',
            fontWeight: 600,
            fontSize: '1rem',
            px: 3,
            py: 1.2,
            borderRadius: '25px',
            '&:hover': {
              backgroundColor: '#fff',
              color: theme.palette.secondary.main,
            },
          }}
        >
          Contact Our Experts
        </Button>
      </Stack>
    </Box>
  );
}
