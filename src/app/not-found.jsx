import React from 'react';
import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material';
import theme from '@/theme/theme';

export default function NotFound() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: { xs: 3, md: 6 },
        color: theme.palette.secondary.light,
        overflow: 'hidden',
      }}
    >
      {/* Render 404 with emoji inline (no decorative background) */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 920,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.6rem', sm: '3.6rem', md: '4.6rem' },
            fontWeight: 900,
            lineHeight: 1,
            mb: 2,
            color: theme.palette.primary.main,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <Box component="span">404</Box>
          <Box
            component="span"
            sx={{ fontSize: { xs: '2.6rem', sm: '3.6rem', md: '4.6rem' } }}
          >
            😕
          </Box>
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.25rem', md: '1.6rem' },
            fontWeight: 600,
            mb: 2,
            color: theme.palette.secondary.main,
          }}
        >
          Oops — the page you’re looking for can’t be found.
        </Typography>

        <Typography
          sx={{
            mb: 4,
            color: theme.palette.secondary.option,
            maxWidth: 680,
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          It may have been removed, had its name changed, or is temporarily
          unavailable. Try returning to the homepage or get in touch and we’ll
          help you find what you need.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                background: theme.palette.primary.main,
                color: theme.palette.secondary.option,
                px: 4,
                py: 1.2,
                borderRadius: '50px',
              }}
            >
              Go to Homepage
            </Button>
          </Link>

          <Link href="/contactus" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: theme.palette.secondary.main,
                color: theme.palette.secondary.main,
                px: 3,
                py: 1.1,
                borderRadius: '50px',
              }}
            >
              Contact Us
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
