'use client';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CallToActionCards from '@/components/other/homeUi/CallToActionCards';
import TeamCard from '@/components/common/TeamCard';
import ProjectShowCase from '@/components/other/portfolioUi/ProjectShowCase';

export default function Portfolio() {
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
      <Box className="hover-section" sx={{ mb: '50px', pt: { xs: 15, sm: 18, md: 20 } }}>
        <ProjectShowCase />
      </Box>
      <Box
        className="hover-section"
        sx={{
          width: '100%',
          px: { xs: 2, sm: 4 },
          pt: { xs: 0, md: 10 },
          pb: 2,
        }}
      >
        <TeamCard />
      </Box>
      <Box className="hover-section" sx={{ width: '100%', px: { xs: 2, sm: 4 } }}>
        <CallToActionCards />
      </Box>
    </Box>
  );
}
