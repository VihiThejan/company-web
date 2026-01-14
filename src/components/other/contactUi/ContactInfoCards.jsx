'use client';

import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Icon, Snackbar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import theme from '@/theme/theme';

export default function ContactInfoCards() {
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const info = [
    {
      icon: <EmailIcon fontSize="large" color="primary" />,
      title: 'Email Us',
      detail: 'info@vihiitsolutions.com',
      action: 'email',
    },
    {
      icon: <PhoneIcon fontSize="large" color="primary" />,
      title: 'Call Us',
      detail: '+94 72 444 4082 | +94 77 129 5767',
      action: 'copy',
    },
    {
      icon: <LocationOnIcon fontSize="large" color="primary" />,
      title: 'Address',
      detail: '239/9, Uduwana Temple road, Uduwana, Homagama, Sri Lanka',
      action: 'none',
    },
  ];

  const handleCardClick = (item) => {
    if (item.action === 'email') {
      window.location.href = `mailto:${item.detail}`;
    } else if (item.action === 'copy') {
      navigator.clipboard.writeText(item.detail);
      setSnackbarOpen(true);
    }
  };

  return (
    <Box sx={{ mt: 8, width: '100%', mx: 'auto' }}>
      <Grid container spacing={4}>
        {info.map((item, i) => (
          <Grid size={{ xs: 12, md: 4 }} key={i}>
            <Card
              onClick={() => handleCardClick(item)}
              sx={{
                textAlign: 'center',
                p: 3,
                height: '240px',
                borderRadius: 4,
                background: theme.palette.primary.main,
                color: theme.palette.secondary.main,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.22)',
                cursor: item.action !== 'none' ? 'pointer' : 'default',
                '&:hover': {
                  transform: item.action !== 'none' ? 'translateY(-5px)' : 'none',
                  transition: '0.3s',
                },
              }}
            >
              <CardContent sx={{ color: theme.palette.secondary.main }}>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50px',
                      fontSize: 30,
                      background: theme.palette.secondary.main,
                      p: 1,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {item.icon}
                  </Box>
                </Box>
                <Typography sx={{ mt: 2, fontWeight: 600, fontSize: '1.1rem' }}>
                  {item.title}
                </Typography>
                <Typography>{item.detail}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Phone number copied to clipboard!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        ContentProps={{
          sx: {
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: 2,
            fontWeight: 500,
          },
        }}
      />
    </Box>
  );
}
