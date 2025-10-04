import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import theme from '@/theme/theme';

const stats = [
  {
    icon: <WorkIcon sx={{ fontSize: 32, color: '#222' }} />,
    value: '50+',
    label: 'We deliver great work always',
  },
  {
    icon: <WorkspacePremiumIcon sx={{ fontSize: 32, color: '#222' }} />,
    value: '2+',
    label: 'Experience you can count on',
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 32, color: '#222' }} />,
    value: '32+',
    label: 'Revenue Increase Compared to the previous year.',
  },
  {
    icon: <PeopleAltIcon sx={{ fontSize: 32, color: '#222' }} />,
    value: '50+',
    label: 'We have happy Clients worldwide',
  },
];

const Intro = () => {
  return ( // <-- Add this return!
    <Box
      sx={{
        background: '#ffffffff',
        maxWidth: '1200px',
        px: { xs: 2, md: 2 },
        mx: 'auto',
        my: { xs: 4, md: 8 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: theme.palette.secondary.main,
          fontWeight: 700,
          textAlign: 'center',
          mb: 2,
          fontSize: { xs: '2rem', md: '3rem' },
        }}
      >
        Who We Are. Learn About us
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          mb: { xs: 4, md: 6 },
          color: '#222',
          fontWeight: 400,
          fontSize: { xs: '1rem', md: '1.25rem' },
          maxWidth: 700,
          mx: 'auto',
        }}
      >
        We are a dynamic team of innovators, storytellers, and visionaries
        dedicated to transforming ideas into extraordinary experiences.
      </Typography>
      <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid  size={{xs: 12, md: 6}}>
          <Box
            sx={{
              width: '100%',
              height: { xs: 220, md: 320 },
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: 2,
            }}
          >
            <img
              src="/images/home-img/it.jpg"
              alt="About Us"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '16px',
              }}
            />
          </Box>
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
          <Grid container spacing={2}>
            {stats.map((stat, idx) => (
              <Grid  size={{xs: 12, md: 6}} key={idx}>
                <Box
                  sx={{
                    background: '#fafafd',
                    borderRadius: 3,
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    boxShadow: 1,
                    height: 150,
                  }}
                >
                  {stat.icon}
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: '#222',
                        fontSize: { xs: '1.2rem', md: '1.5rem' },
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#444',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: { xs: 3, md: 5 } }}>
            <Button
              variant="contained"
              sx={{
                background: '#ffe600',
                color: '#222',
                fontWeight: 600,
                borderRadius: '5px',
                px: 5,
                py: 1.5,
                fontSize: { xs: '1rem', md: '1.1rem' },
                boxShadow: 2,
                '&:hover': { background: '#fff200' },
              }}
              href="/contactus"
            >
              Contact Us
            </Button>
          </Box>
        </Grid>
      </Grid>
      </Box>
    </Box>
  );
};

export default Intro;