'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

export default function ContactMap() {
  return (
    <Box
      sx={{
        mt: 8,
        width: '100%',
        height: { xs: '300px', sm: '400px', md: '500px' },
        mx: 'auto',
        textAlign: 'center',
      }}
    >
      <Typography component="h2" variant="h6" fontWeight={600} mb={2}>
        Find Us on the Map
      </Typography>
      <Box
        component="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64496234.24683682!2d174.14428865!3d9.374110200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xeb453ca99115c5d%3A0x9a450d6c069a23fe!2sVihi%20IT%20Solutions!5e0!3m2!1sen!2slk!4v1759854985167!5m2!1sen!2slk"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        style={{ border: 0, borderRadius: '16px' }}
      ></Box>
    </Box>
  );
}
