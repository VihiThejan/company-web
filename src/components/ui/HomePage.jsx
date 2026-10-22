'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Box, Typography, Grid } from '@mui/material';
import Link from 'next/link';
import CallIcon from '@mui/icons-material/Call';
import GridCard from '../other/homeUi/GridCard';
import Intro from '../other/homeUi/Intro';
import ExpertiseCarousel from '../other/homeUi/ExpertiseCarousel';
import ClientTestimonials from '../other/homeUi/ClientTestimonials';
import CallToActionCards from '../other/homeUi/CallToActionCards';
import MomentumSection from '../other/homeUi/MomentumSection';
import { brand, fonts } from '@/theme/theme';

const pillButton = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 1,
  px: 3.5,
  py: 1.6,
  borderRadius: '999px',
  fontSize: '1rem',
  fontWeight: 600,
  whiteSpace: 'nowrap',
  transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
};

const HomePage = () => {
  const videoRef = useRef(null);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4; // slow, cinematic
    }
  }, []);

  const ease = [0.22, 1, 0.36, 1];

  return (
    <Box sx={{ overflowX: 'hidden', position: 'relative' }}>
      {/* Hero: the logo's mark, filled with the studio at work */}
      <Box
        component="section"
        aria-label="Introduction"
        sx={{
          position: 'relative',
          minHeight: { xs: 'auto', lg: '100vh' },
          backgroundColor: brand.ink,
          color: brand.paper,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 7fr) minmax(0, 5fr)' },
          alignItems: 'center',
          columnGap: { lg: 6 },
          px: { xs: 3, md: 6, lg: 8 },
          pt: { xs: 14, md: 18, lg: 14 },
          pb: { xs: 8, md: 10, lg: 8 },
          overflow: 'hidden',
        }}
      >
        {/* The mark, used as a window onto the hero video */}
        <motion.div
          // Movement only, no fade: the hero is visible from the first paint,
          // which keeps Google's "largest contentful paint" fast.
          initial={reduceMotion ? false : { scale: 0.92, rotate: -8 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, ease }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box
            aria-hidden="true"
            sx={{
              width: { xs: '72vw', md: '52vw', lg: '100%' },
              maxWidth: { xs: 420, md: 520, lg: 640 },
              aspectRatio: '620 / 593',
              backgroundColor: brand.paper,
              WebkitMaskImage: 'url(/brand/vihi-mark.svg)',
              maskImage: 'url(/brand/vihi-mark.svg)',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskPosition: 'center',
              maskPosition: 'center',
            }}
          >
            <Box
              component="video"
              ref={videoRef}
              autoPlay={!reduceMotion}
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/home-img/home-about.webp"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'contrast(1.05) saturate(1.05)',
                display: 'block',
              }}
            >
              <source src="/videos/home-hero.mp4" type="video/mp4" />
            </Box>
          </Box>
        </motion.div>

        {/* Copy */}
        <Box sx={{ order: { lg: -1 }, mt: { xs: 6, lg: 0 }, maxWidth: 820 }}>
          <motion.div
            initial={reduceMotion ? false : { y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
          >
            <Typography
              variant="h1"
              sx={{
                color: brand.paper,
                fontSize: { xs: '2.35rem', sm: '2.8rem', md: '3.6rem', xl: '4.6rem' },
                fontWeight: 800,
                fontStretch: fonts.displayStretch,
                lineHeight: 1.02,
                letterSpacing: '-0.025em',
              }}
            >
              Empowering businesses with intelligent digital solutions
            </Typography>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
          >
            <Typography
              sx={{
                fontSize: { xs: '1.05rem', md: '1.25rem' },
                color: brand.ash,
                mt: { xs: 3, md: 4 },
                lineHeight: 1.6,
                maxWidth: '46ch',
              }}
            >
              Building intelligent, scalable, and high-performing solutions that
              redefine your digital success story.
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: { xs: 4, md: 5 } }}>
              <Box
                component={Link}
                href="/contactus"
                sx={{
                  ...pillButton,
                  backgroundColor: brand.paper,
                  color: brand.ink,
                  '&:hover': { backgroundColor: brand.stone },
                }}
              >
                <CallIcon sx={{ fontSize: 20 }} />
                Book a call
              </Box>
              <Box
                component={Link}
                href="/portfolio"
                sx={{
                  ...pillButton,
                  border: `1px solid ${brand.lineDark}`,
                  color: brand.paper,
                  '&:hover': { borderColor: brand.paper },
                }}
              >
                See our work
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Box>

      <MomentumSection />

      {/* about us section */}
      <Box sx={{ flexGrow: 1, mx: { xs: 2, md: 4, lg: 8 }, mb: 10 }}>
        <Intro />
      </Box>

      {/* Services Grid */}
      <Box sx={{ flexGrow: 1, mx: { xs: 2, md: 4, lg: 8 }, mb: 10 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 12 }}>
            <GridCard
              title="Technology"

              bgImage="/images/home-img/home-tech.webp"
              LinkTo="/technology"
            />

          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <GridCard
              title="Marketing"

              bgImage="/images/home-img/home-marketing.webp"
              LinkTo="/marketing"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <GridCard
              title="Design"

              bgImage="/images/home-img/home-design.webp"
              LinkTo="/design"
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, mx: { xs: 2, md: 4, lg: 8 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 12 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2.2rem', md: '3rem' },
              }}
            >
              Areas of expertise
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, md: 3 },
                maxWidth: '52ch',
                color: brand.steel,
                fontSize: { xs: '1.05rem', md: '1.15rem' },
              }}
            >
              We provide customized digital solutions to help you capture
              opportunities in a variety of industries.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 12 }} sx={{ borderRadius: 5 }}>
            <ExpertiseCarousel />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, mx: { xs: 2, md: 4, lg: 8 } }}>
        <ClientTestimonials />
      </Box>

      <Box sx={{ flexGrow: 1, mx: { xs: 2, md: 4, lg: 8 } }}>
        <CallToActionCards />
      </Box>
    </Box>
  );
};

export default HomePage;
