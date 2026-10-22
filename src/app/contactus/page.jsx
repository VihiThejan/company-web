'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactForm from '@/components/other/contactUi/ContactForm';
import ContactInfoCards from '@/components/other/contactUi/ContactInfoCards';
import ContactMap from '@/components/other/contactUi/ContactMap';

export default function ContactUs() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#fff',
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3 },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          textAlign: 'center',
          mb: 4,
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          pt: { xs: 8, sm: 6, md: 8 },
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '3rem' },
            mb: 1,
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth={600}
          mx="auto"
        >
          Have questions or want to learn more about our services? Fill out the
          form below — we’ll get back to you within 24 hours.
        </Typography>
      </Box>

      {/* Components */}
      <Box sx={{ width: '100%', px: { xs: 2, md: 20 } }}>
        <ContactForm />
      </Box>
      <Box sx={{ width: '100%', px: { xs: 2, md: 4 } }}>
        <ContactInfoCards />
      </Box>
      <Box sx={{ width: '100%', px: { xs: 2, md: 4 } }}>
        <ContactMap />
      </Box>
    </Box>
  );
}
