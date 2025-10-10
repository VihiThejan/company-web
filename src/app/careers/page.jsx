'use client';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import theme from '@/theme/theme';
import TeamMembers from '@/components/other/careerUi/TeamMembers';
import HiringProcess from '@/components/other/careerUi/HiringProcess';
import Vacancies from '@/components/other/careerUi/Vacancies';

export default function Careers() {
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
            xs: '45vh',
            sm: '60vh',
            md: '100vh',
            lg: '70vh',
            xl: '70vh',
          },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mx: 'auto',
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          pt: { xs: 8, sm: 10, md: 12 },
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
          Careers @ Vihi IT Solutions
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
          Join a team that transforms innovation into real-world impact
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={handleScrollToJobs}
          sx={{
            mt: { xs: 1.5, sm: 2 },
            px: { xs: 3.5, sm: 4.5, md: 5 },
            py: { xs: 1.2, sm: 1.4 },
            backgroundColor: theme.palette.primary.main,
            fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
            borderRadius: '50px',
            textTransform: 'none',
            '&:hover': { backgroundColor: theme.palette.primary.option },
          }}
        >
          View Job Openings
        </Button>
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
          src="/images/career-img/careerHero.webp"
          alt="Team collaborating"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.7)',
          }}
        />
      </Box>

      {/* Subsections */}
      <Box sx={{ width: '100%', mx: { xs: 2, md: 4 }, my: { xs: 2, md: 3 } }}>
        <TeamMembers />
      </Box>
      <Box sx={{ width: '100%', mx: { xs: 2, md: 4 }, my: { xs: 2, md: 3 } }}>
        <HiringProcess />
      </Box>
      <Box
        id="job-openings"
        sx={{ width: '100%', mx: { xs: 2, md: 4 }, my: { xs: 2, md: 3 } }}
      >
        <Vacancies />
      </Box>
    </Box>
  );
}
