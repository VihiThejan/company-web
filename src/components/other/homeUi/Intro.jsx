'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import theme, { brand, fonts } from '@/theme/theme';
import Link from 'next/link';

const stats = [
  {
    icon: <WorkIcon sx={{ fontSize: 32, color: brand.ink }} />,
    value: 50,
    label: 'We deliver great work always',
  },
  {
    icon: (
      <WorkspacePremiumIcon
        sx={{ fontSize: 28, color: brand.ink }}
      />
    ),
    value: 2,
    label: 'Experience you can count on',
  },
  {
    icon: (
      <EmojiEventsIcon
        sx={{ fontSize: 28, color: brand.ink }}
      />
    ),
    value: 32,
    label: 'Revenue Increase',
  },
  {
    icon: (
      <PeopleAltIcon sx={{ fontSize: 32, color: brand.ink }} />
    ),
    value: 50,
    label: 'We have happy Clients worldwide',
  },
];

const AnimatedNumber = ({ targetValue }) => {
  // Start at the real value so the page HTML (what search engines and
  // no-JavaScript visitors see) shows "50+", not "0+". The count-up runs
  // once, when the number scrolls into view.
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(targetValue);

  useEffect(() => {
    if (!inView || reduceMotion) return undefined;
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
  }, [inView, reduceMotion, targetValue]);

  return (
    <Typography
      ref={ref}
      component="p"
      variant="h3"
      sx={{
        fontWeight: 800,
        fontStretch: fonts.displayStretch,
        fontSize: { xs: '2.2rem', md: '2.8rem' },
        lineHeight: 1,
        mb: 1,
        color: brand.ink,
      }}
    >
      {count}+
    </Typography>
  );
};


const Intro = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
          color: brand.ink,
          fontWeight: 800,
          mb: 2,
          fontSize: { xs: '2.2rem', md: '3rem' },
        }}
      >
        Who we are
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: { xs: 4, md: 6 },
          color: brand.steel,
          fontSize: { xs: '1.05rem', md: '1.15rem' },
          maxWidth: '52ch',
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
                borderRadius: '20px',
                overflow: 'hidden',
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
                      borderRadius: '16px',
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: 2,
                      height: { xs: 'auto', md: 205 },
                      width: '100%',
                      bgcolor: brand.stone,
                      border: `1px solid ${brand.stone}`,
                    }}
                  >
                    {stat.icon}
                    <Box>
                      <AnimatedNumber targetValue={stat.value} />
                      <Typography variant="body1" sx={{ color: brand.steel }}>
                        {stat.label}
                      </Typography>
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
                  color: brand.ink,
                  border: `1px solid ${brand.ink}`,
                  borderRadius: '999px',
                  padding: '10px 25px',
                  fontWeight: 600,
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    backgroundColor: brand.ink,
                    color: brand.paper,
                    border: `1px solid ${brand.ink}`,
                  },
                }}
              >
                More about us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

    </Box>
  );
};

export default Intro;
