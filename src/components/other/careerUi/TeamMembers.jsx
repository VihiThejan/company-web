'use client';

import React from 'react';
import { Box, Typography, IconButton, Grid, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { teamMembers } from '@/lib/teamMembers';
import theme from '@/theme/theme';

export default function TeamMembers() {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#fff',
      }}
    >
      <Grid container spacing={{ xs: 4, md: 5 }} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: 'none',
                outline: '1px solid #DADAD7',
                outlineOffset: '-1px',
                bgcolor: '#fafafa',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  outlineColor: '#000',
                },
              }}
            >
              {/* Image wrapper with fixed aspect ratio */}
              <Box
                sx={{
                  width: '100%',
                  position: 'relative',
                  aspectRatio: '4 / 4', // maintains portrait ratio consistently
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
                        textAlign: 'left'
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: 'theme.palette.text.secondary',
                        fontSize: { xs: '0.85rem', md: '0.9rem' },
                        textAlign: 'left'
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
                      aria-label={`${member.name}'s LinkedIn profile`}
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
  );
}
