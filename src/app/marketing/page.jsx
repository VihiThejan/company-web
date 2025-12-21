'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import theme from '@/theme/theme';
import CallToActionCards from '@/components/other/homeUi/CallToActionCards';
import TeamCard from '@/components/common/TeamCard';
import MarketingServices from '@/components/other/marketingUi/MarketingServices';
import { motion } from 'framer-motion';

export default function Marketing() {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#fff',
      }}
    >
      {/* Headline and subtext */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 1200,
          pt: { xs: 12, sm: 15, md: 18 },
          pb: { xs: 6, sm: 8, md: 10 },
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              lineHeight: 1.1,
              fontSize: {
                xs: '2.4rem',
                sm: '3rem',
                md: '3.8rem',
                lg: '4.5rem',
              },
              mb: 3,
              color: '#1a1a1a',
              letterSpacing: '-0.02em',
            }}
          >
            Empowering Your Business with <br />
            <Box component="span" sx={{ color: theme.palette.primary.main }}>Next-Gen</Box> Technology
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              lineHeight: 1.6,
              fontSize: {
                xs: '1rem',
                sm: '1.1rem',
                md: '1.25rem',
              },
              color: '#555',
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            We combine intelligent strategy, cutting-edge technology, and powerful engineering
            to help brands scale, innovate, and dominate in a digital-first world.
          </Typography>
        </motion.div>
      </Box>

      {/* Hero image with subtle zoom */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: {
            xs: '250px',
            sm: '350px',
            md: '450px',
            lg: '550px',
          },
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src="/images/marketing-img/mar-hero.png"
          alt="Marketing and Technology Team"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.8)',
          }}
        />
      </Box>

      {/* Wave Divider */}
      <Box sx={{ width: '100%', overflow: 'hidden', lineHeight: 0, mt: -1, position: 'relative', height: { xs: '50px', sm: '80px', md: '100px' }, background: '#fff' }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
          <path
            d="M0 120L1440 120L1440 0C1440 0 1140 120 720 120C300 120 0 0 0 0L0 120Z"
            fill="#fff"
          />
        </svg>
      </Box>

      <Box className="hover-section" sx={{ pt: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 4, md: 8 }, width: '100%' }}>
        <MarketingServices />
      </Box>

      {/* Wave Divider before Team */}
      <Box sx={{ width: '100%', overflow: 'hidden', lineHeight: 0, mb: -1, position: 'relative', height: { xs: '50px', sm: '80px', md: '100px' } }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L1440 120L1440 0C1440 0 1140 120 720 120C300 120 0 0 0 0L0 120Z"
            fill="#fafafa"
          />
        </svg>
      </Box>

      <Box
        sx={{
          width: '100%',
          px: { xs: 2, sm: 4 },
          pt: 10,
          pb: 10,
          background: '#fafafa'
        }}
      >
        <TeamCard />
      </Box>

      <Box sx={{ width: '100%', px: { xs: 2, sm: 4, md: 8 }, py: 10, background: '#fff' }}>
        <CallToActionCards />
      </Box>
    </Box>
  );
}
