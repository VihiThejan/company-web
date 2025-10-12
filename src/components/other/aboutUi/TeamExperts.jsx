'use client';

import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  useTheme,
  Grid,
} from '@mui/material';
import { teamMembers } from '@/lib/teamMembers';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import theme from '@/theme/theme';

export default function TeamExperts() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 3 },
        bgcolor: '#fff',
        color: '#111',
        textAlign: 'center',
      }}
    >
      {/* Section Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          mb: 5,
        }}
      >
        <Box textAlign="left">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              color: '#111',
            }}
          >
            OUR{' '}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              TEAM
            </Box>{' '}
            EXPERTS
          </Typography>
          <Typography
            sx={{
              mt: 1,
              color: '#666',
              fontSize: { xs: '0.95rem', md: '1rem' },
            }}
          >
            Meet the creative professionals powering our software and marketing
            innovation.
          </Typography>
        </Box>

        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          component={Link}
          href="/team"
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: '#1E1E1E',
            borderRadius: '50px',
            textTransform: 'none',
            padding: '8px 20px',
            fontWeight: 400,
            mt: { xs: 3, lg: 0 },
            '&:hover': { backgroundColor: theme.palette.primary.option },
          }}
        >
          View All Teams
        </Button>
      </Box>

      <Box
        sx={{
          width: '100%',
          bgcolor: '#fff',
        }}
      >
        <Grid container spacing={{ xs: 4, md: 5 }} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid size={{ xs: 12, md: 6, lgl: 4 }} key={index}>
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: 3,
                  bgcolor: '#fafafa',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  },
                }}
              >
                {/* Image wrapper with fixed aspect ratio */}
                <Box
                  sx={{
                    width: '100%',
                    position: 'relative',
                    aspectRatio: '4 / 5', // maintains portrait ratio consistently
                    overflow: 'hidden',
                    backgroundColor: '#f5f5f5',
                  }}
                >
                  <Box
                    component="img"
                    src={member.image}
                    alt={member.name}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top', // keeps face/head consistent
                      transition: 'transform 0.4s ease',
                      '&:hover': { transform: 'scale(1.05)' },
                    }}
                  />
                </Box>

                {/* Text + LinkedIn */}
                <Box sx={{ px: 2, py: 2, flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 2,
                      flexWrap: 'wrap',
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: '#222',
                          fontSize: { xs: '1rem', md: '1rem' },
                          textAlign: 'left',
                        }}
                      >
                        {member.name}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: 'theme.palette.text.secondary',
                          fontSize: { xs: '0.85rem', md: '0.9rem' },
                          textAlign: 'left',
                        }}
                      >
                        {member.role}
                      </Typography>
                    </Box>
                    {member.linkedin && (
                      <IconButton
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: theme.palette.primary.option,
                          p: 1,
                          '&:hover': { color: theme.palette.secondary.main },
                        }}
                      >
                        <LinkedInIcon fontSize="large" />
                      </IconButton>
                    )}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
