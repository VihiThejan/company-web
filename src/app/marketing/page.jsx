'use client';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import theme from '@/theme/theme';
import TeamMembers from '@/components/other/careerUi/TeamMembers';
import HiringProcess from '@/components/other/careerUi/HiringProcess';
import Vacancies from '@/components/other/careerUi/Vacancies';
import CallToActionCards from '@/components/other/homeUi/CallToActionCards';
import Growth from '@/components/other/technologyUi/Growth';
import { Grid } from '@mui/material';
import ExpertiseCarousel from '@/components/other/homeUi/ExpertiseCarousel';
import TeamCard from '@/components/common/TeamCard';
import MarketingServices from '@/components/other/marketingUi/MarketingServices';

export default function Technologies() {
  const handleScrollToJobs = () => {
    const jobSection = document.getElementById('job-openings');
    if (jobSection) {
      jobSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
          height: {
            xs: '40vh',
            sm: '20vh',
            md: '30vh',
            mdl: '40vh',
            lg: '20vh',
            lgl: '70vh',
            xl: '50vh',
          },
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          pt: { xs: 15, sm: 10, md: 12 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            lineHeight: 1.2,
            fontSize: {
              xs: '1.8rem', // very small phones
              sm: '2.2rem', // normal phones
              md: '2.8rem', // tablets
              lg: '3.2rem', // laptops
              xl: '3.6rem', // large desktops
            },
            mb: { xs: 1.5, sm: 2 },
            px: { xs: 1, sm: 0 },
          }}
        >
          Innovating the Digital Future for Growing Businesses
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            lineHeight: 1.4,
            fontSize: {
              xs: '0.95rem',
              sm: '1.05rem',
              md: '1.15rem',
              lg: '1.25rem',
              xl: '1.35rem',
            },
            color: '#222',
            mb: { xs: 2.5, sm: 3 },
            maxWidth: { xs: '90%', sm: '85%', md: '70%' },
          }}
        >
          We combine intelligent strategy, cutting-edge technology, and powerful design to help brands scale, connect, and thrive in a digital-first world.
        </Typography>
      </Box>

      {/* Hero image */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: {
            xs: '220px', // phones
            sm: '280px', // small tablets
            md: '380px', // tablets landscape
            lg: '450px', // desktops
            xl: '520px', // large monitors
          },
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src="/images/marketing-img/mar-hero.webp"
          alt="Team collaborating"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.7)',
          }}
        />
      </Box>
      <Box>
        <MarketingServices />
      </Box>
      <Box sx={{ width: '100%', px: { xs: 2, sm: 4 }, pt: {xs: 0, md: 10}, pb: 2}}>
        <TeamCard/>
      </Box>
      <Box sx={{ width: '100%', px: { xs: 2, sm: 4 } }}>
        <CallToActionCards />
      </Box>
    </Box>
  );
}
