'use client';
import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import theme from '@/theme/theme';
import Link from 'next/link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const stats = [
  {
    icon: <WorkIcon sx={{ fontSize: 32, color: theme.palette.secondary.main }} />,
    value: 50,
    label: 'We deliver great work always',
  },
  {
    icon: (
      <WorkspacePremiumIcon
        sx={{ fontSize: 32, color: theme.palette.secondary.main }}
      />
    ),
    value: 2,
    label: 'Experience you can count on',
  },
  {
    icon: (
      <EmojiEventsIcon
        sx={{ fontSize: 32, color: theme.palette.secondary.main }}
      />
    ),
    value: 32,
    label: 'Revenue Increase',
  },
  {
    icon: (
      <PeopleAltIcon sx={{ fontSize: 32, color: theme.palette.secondary.main }} />
    ),
    value: 50,
    label: 'We have happy Clients worldwide',
  },
];

const AnimatedNumber = ({ targetValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // total time (ms)
    const incrementTime = 20; // frame time
    const totalFrames = duration / incrementTime;
    const increment = targetValue / totalFrames;

    const counter = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        start = targetValue;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(counter);
  }, [targetValue]);

  return (
    <Typography
      variant="h3"
      sx={{
        fontWeight: 700,
        color: theme.palette.secondary.main,
      }}
    >
      {count}+
    </Typography>
  );
};

const Intro = () => {
  return (
    <Box
      sx={{
        background: theme.palette.secondary.light,
        maxWidth: '1200px',
        minWidth: '100%',
        px: { xs: 2, md: 2 },
        my: { xs: 4, md: 8 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: theme.palette.secondary.main,
          fontWeight: 700,
          textAlign: 'center',
          mb: 2,
          fontSize: { xs: '2.5rem', md: '3rem' },
        }}
      >
        Who We Are. Learn About us
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          mb: { xs: 4 },
          color: theme.palette.secondary.main,
          maxWidth: 700,
          mx: 'auto',
        }}
      >
        We are a dynamic team of innovators, storytellers, and visionaries
        dedicated to transforming ideas into extraordinary experiences.
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              className="hover-image-container"
              sx={{
                width: '100%',
                height: { xs: 220, md: '450px' },
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: 2,
              }}
            >
              <img
                className="hover-image"
                src="/images/home-img/home-about.webp"
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

          <Grid size={{ xs: 12, md: 6 }} sx={{ height: '100%' }}>
            <Grid container spacing={2}>
              {stats.map((stat, idx) => (
                <Grid size={{ xs: 12, md: 6 }} sx={{ width: '100%' }} key={idx}>
                  <Box
                    className="hover-lift-shadow"
                    sx={{
                      borderRadius: 3,
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      boxShadow: 2,
                      height: { xs: 120, md: 170 },
                      width: '100%',
                      bgcolor: '#fff', // Ensure background is white for shadow effect
                    }}
                  >
                    {stat.icon}
                    <Box>
                      <AnimatedNumber targetValue={stat.value} />
                      <Typography variant="body1">{stat.label}</Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                mt: { xs: 5, lg: 5 },
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                alignItems: 'center',
              }}
            >
              <Button
                variant="outlined"
                component={Link}
                href="/aboutus"
                className="hover-btn"
                // onClick={handleNavClick}
                sx={{
                  color: theme.palette.secondary.main,
                  border: `1px solid ${theme.palette.secondary.main}`,
                  borderRadius: '50px',
                  padding: '10px 25px',
                  fontWeight: 500,
                  width: '165px',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                    border: `1px solid ${theme.palette.primary.main}`,
                  },
                }}
              >
                Learn More
                <ArrowRightAltIcon sx={{ ml: 0.5 }} />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Intro;
