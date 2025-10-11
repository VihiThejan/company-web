'use client';

import { Box, Grid, Typography, Button } from '@mui/material';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import theme from '@/theme/theme';
import { projects } from '@/lib/projectlist';

function ProjectShowCase() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#fff',
        pt: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={6} sx={{ width: '100%' }}>
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            key={index}
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                md: index % 2 === 1 ? 'row' : 'row-reverse',
              },
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                width: { xs: '100%', sm: '90%', md: '48%' },
                height: { xs: 220, sm: 300, md: 420 },
                objectFit: 'cover',
                borderRadius: 3,
                boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
              }}
            />

            {/* Text Section */}
            <Box
              sx={{
                width: { xs: '100%', md: '48%' },
                // textAlign: { xs: 'center', md: 'left' },
                mt: { xs: 3, md: 0 },
              }}
            >
              <Box sx={{ mb: 1 }}>
                <Box
                  component="img"
                  src={project.companyLogo}
                  alt={project.title}
                  sx={{
                    width: '120px',
                    height: '120px',
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 1.5,
                  fontSize: { xs: '1.3rem', md: '1.8rem' },
                }}
              >
                {project.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  color: theme.palette.secondary.main,
                  mb: 1.5,
                  textAlign: 'justify',
                }}
              >
                {project.description}
              </Typography>

              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: '1rem',
                  mb: 2,
                }}
              >
                <strong>Industry : </strong> {project.industry}
              </Typography>

              <Box
                component={Link}
                href={`/portfolio/${project.slug}`}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                  color: '#111',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(5px)',
                  },
                }}
              >
                Read More
                <ArrowForwardIcon sx={{ fontSize: 20 }} />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProjectShowCase;
