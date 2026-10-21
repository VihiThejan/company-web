import { Box, Grid } from '@mui/system';
import React from 'react';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Typography } from '@mui/material';

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
    label: 'Revenue Increase',
  },
  {
    icon: <PeopleAltIcon sx={{ fontSize: 32, color: '#222' }} />,
    value: '50+',
    label: 'We have happy Clients worldwide',
  },
];

const Growth = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12}}>
          <Grid container spacing={2}>
            {stats.map((stat, idx) => (
              <Grid size={{ xs: 12, md: 3 }} key={idx}>
                <Box
                  sx={{
                    background: '#fafafd',
                    borderRadius: 3,
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    boxShadow: 'none',
                    outline: '1px solid #DADAD7',
                    outlineOffset: '-1px',
                    height: 170,
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Growth;
