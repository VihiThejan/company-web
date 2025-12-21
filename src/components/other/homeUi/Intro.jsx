'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Box, Button, Grid, Typography, Container } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import theme from '@/theme/theme';
import Link from 'next/link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const stats = [
  {
    icon: <WorkIcon sx={{ fontSize: 28 }} />,
    value: 50,
    label: 'Projects Delivered',
    suffix: '+',
    desc: 'Great work delivered consistently'
  },
  {
    icon: <WorkspacePremiumIcon sx={{ fontSize: 28 }} />,
    value: 2,
    label: 'Years Experience',
    suffix: '+',
    desc: 'Excellence you can count on'
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 28 }} />,
    value: 32,
    suffix: '%',
    label: 'Revenue Growth',
    desc: 'Impactful business results'
  },
  {
    icon: <PeopleAltIcon sx={{ fontSize: 28 }} />,
    value: 50,
    label: 'Happy Clients',
    suffix: '+',
    desc: 'Worldwide client network'
  },
];

const AnimatedNumber = ({ targetValue, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const incrementTime = 20;
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
    }
  }, [targetValue, isInView]);

  return (
    <Typography
      ref={nodeRef}
      variant="h3"
      sx={{
        fontWeight: 800,
        fontSize: { xs: '2rem', md: '2.5rem' },
        color: theme.palette.secondary.main,
        lineHeight: 1,
      }}
    >
      {count}{suffix}
    </Typography>
  );
};

const ContentSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{ textAlign: 'center', marginBottom: '4rem' }}
  >
    <Typography
      variant="overline"
      sx={{
        color: theme.palette.primary.main,
        fontWeight: 700,
        letterSpacing: '0.3em',
        fontSize: '1rem',
        mb: 2,
        display: 'block'
      }}
    >
      OUR PERFORMANCE
    </Typography>
    <Typography
      variant="h2"
      sx={{
        color: theme.palette.secondary.main,
        fontWeight: 900,
        fontSize: { xs: '2.5rem', md: '4rem' },
        lineHeight: 1.1,
        mb: 3
      }}
    >
      Driving Digital <Box component="span" sx={{ color: theme.palette.primary.main }}>Success</Box> <br />
      Through Innovation
    </Typography>
    <Typography
      variant="body1"
      sx={{
        color: '#666',
        fontSize: '1.2rem',
        lineHeight: 1.8,
        maxWidth: '700px',
        mx: 'auto',
        mb: 4
      }}
    >
      We combine technical expertise with creative vision to deliver measurable results
      that propel your business forward in the digital landscape.
    </Typography>
  </motion.div>
);

const Intro = () => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        background: '#fff',
        pt: { xs: 2, md: 4 }, // Reduced top padding
        pb: { xs: 8, md: 15 }, // Keep bottom padding
        overflow: 'hidden',
      }}
    >
      {/* Decorative Orbs */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,199,32,0.05) 0%, transparent 70%)',
          filter: 'blur(50px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <ContentSection />

        <Grid container spacing={3}>
          {stats.map((stat, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    p: 5,
                    height: '100%',
                    borderRadius: '32px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    textAlign: 'center',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'default',
                    '&:hover': {
                      transform: 'translateY(-15px)',
                      borderColor: theme.palette.primary.main,
                      background: '#fff',
                      boxShadow: `0 30px 60px -12px rgba(255, 199, 32, 0.15), 0 18px 36px -18px rgba(0, 0, 0, 0.1)`,
                      '& .stat-icon-box': {
                        background: theme.palette.primary.main,
                        color: theme.palette.secondary.main,
                        transform: 'rotate(360deg)',
                      },
                      '& .stat-line': {
                        width: '60px',
                        background: theme.palette.primary.main,
                      }
                    },
                  }}
                >
                  <Box
                    className="stat-icon-box"
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: '20px',
                      background: `${theme.palette.secondary.main}08`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: theme.palette.secondary.main,
                      mb: 3,
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    {stat.icon}
                  </Box>

                  <AnimatedNumber targetValue={stat.value} suffix={stat.suffix} />

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mt: 1,
                      mb: 1,
                      color: theme.palette.secondary.main,
                      fontSize: '1.25rem'
                    }}
                  >
                    {stat.label}
                  </Typography>

                  <Box
                    className="stat-line"
                    sx={{
                      width: '30px',
                      height: '3px',
                      background: '#eee',
                      borderRadius: '2px',
                      transition: 'all 0.4s ease',
                      mb: 2
                    }}
                  />

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#777',
                      fontSize: '0.9rem',
                      lineHeight: 1.5,
                      fontWeight: 500
                    }}
                  >
                    {stat.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: '5rem', textAlign: 'center' }}
        >
          <Button
            variant="contained"
            component={Link}
            href="/aboutus"
            sx={{
              bgcolor: theme.palette.secondary.main,
              color: '#fff',
              borderRadius: '50px',
              px: 6,
              py: 2.2,
              fontSize: '1.1rem',
              fontWeight: 700,
              textTransform: 'none',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              transition: 'all 0.4s ease',
              '&:hover': {
                bgcolor: theme.palette.primary.main,
                color: theme.palette.secondary.main,
                transform: 'scale(1.05)',
                boxShadow: '0 25px 45px rgba(255,199,32,0.3)',
              },
            }}
          >
            Explore Our Story
            <ArrowRightAltIcon sx={{ ml: 1.5, fontSize: '1.5rem' }} />
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Intro;
