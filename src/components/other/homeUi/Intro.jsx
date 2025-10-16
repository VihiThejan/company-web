'use client';
import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import theme from '@/theme/theme';

const stats = [
  {
    icon: <WorkIcon sx={{ fontSize: 32, color: theme.palette.primary.main }} />,
    value: 50,
    label: 'We deliver great work always',
  },
  {
    icon: <WorkspacePremiumIcon sx={{ fontSize: 32, color: theme.palette.primary.main }} />,
    value: 2,
    label: 'Experience you can count on',
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 32, color: theme.palette.primary.main }} />,
    value: 32,
    label: 'Revenue Increase',
  },
  {
    icon: <PeopleAltIcon sx={{ fontSize: 32, color: theme.palette.primary.main }} />,
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
        background: '#ffffffff',
        maxWidth: '1200px',
        px: { xs: 2, md: 2 },
        mx: 'auto',
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
        }}
      >
        Who We Are. Learn About us
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          mb: { xs: 4, md: 6 },
          color: '#222',
          maxWidth: 700,
          mx: 'auto',
        }}
      >
        We are a dynamic team of innovators, storytellers, and visionaries
        dedicated to transforming ideas into extraordinary experiences.
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                width: '100%',
                height: { xs: 220, md: '90%' },
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: 2,
              }}
            >
              <img
                src="/images/home-img/intro.jpg"
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

          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2}>
              {stats.map((stat, idx) => (
                <Grid size={{ xs: 6, md: 6 }} key={idx}>
                  <Box
                    sx={{
                      borderRadius: 3,
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      boxShadow: 2,
                      height: 170,
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
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Intro;
