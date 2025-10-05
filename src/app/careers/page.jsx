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
          height: { xs: '60vh', md: '70vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mx: 'auto',
          pt: { xs: 6, md: 10 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '3rem' },
            mb: 2,
          }}
        >
          Careers @ Vihi IT Solutions
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            fontSize: { xs: '1rem', md: '1.25rem' },
            color: '#222',
            mb: 3,
          }}
        >
          Build the future with pixels, code, and zero corporate nonsense.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={handleScrollToJobs}
          sx={{
            mt: 2,
            px: 4,
            py: 1.5,
            backgroundColor: theme.palette.primary.main,
            fontSize: { xs: '0.9rem', md: '1rem' },
            borderRadius: '50px',
            textTransform: 'none',
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
          height: { xs: '220px', md: '450px' },
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
      <Box
        sx={{
          with: '100%',
          mx: 4,
          my: 3,
        }}
      >
        <TeamMembers />
      </Box>
      <Box
        sx={{
          with: '100%',
          mx: 4,
          my: 3,
        }}
      >
        <HiringProcess />
      </Box>
      <Box
        id="job-openings"
        sx={{
          width: '100%',
          mx: 4,
          my: 3,
        }}
      >
        <Vacancies />
      </Box>
    </Box>
  );
}
