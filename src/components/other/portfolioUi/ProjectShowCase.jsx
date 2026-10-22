import React, { useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import theme from '@/theme/theme';
import { projects } from '@/lib/projectlist';

function ProjectShowCase() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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
      <Grid container sx={{ width: '100%' }}>
        {projects.map((project, index) => {
          const isExpanded = expanded[index];
          const text = project.description;
          const shouldTruncate = text.length > 150;
          const displayText =
            !isExpanded && shouldTruncate
              ? text.slice(0, 150) + '...'
              : text;

          return (
            <Grid
              item
              xs={12}
              key={index}
              className="hover-lift-shadow"
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  md: index % 2 === 1 ? 'row' : 'row-reverse',
                },
                alignItems: 'center',
                justifyContent: 'space-between',
                p: { xs: 4, md: 8 },
                borderRadius: 4,
                transition: 'background-color 0.3s',
                '&:hover': {
                  // bgcolor: 'rgba(0,0,0,0.02)'
                },
              }}
            >
              {/* Image */}
              <Box
                className="hover-image-container"
                sx={{
                  width: { xs: '100%', sm: '90%', md: '48%' },
                  height: { xs: 220, sm: 300, md: 420 },
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: 'none',
                }}
              >
                <Box
                  component="img"
                  className="hover-image"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>

              {/* Text Section */}
              <Box
                sx={{
                  width: { xs: '100%', md: '48%' },
                  mt: { xs: 3, md: 0 },
                }}
              >
                {project.companyLogo && (
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
                )}
                <Typography
                  component="h2"
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 1.5,
                    fontSize: { xs: '1.3rem', md: '1.8rem' },
                  }}
                >
                  {project.title}
                </Typography>

                {/* Desktop View: Always show full text */}
                <Typography
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    color: theme.palette.secondary.main,
                    mb: 1.5,
                    textAlign: 'justify',
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </Typography>

                {/* Mobile View: Show truncated text with See More button */}
                <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 1.5 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: '0.95rem', md: '1rem' },
                      color: theme.palette.secondary.main,
                      textAlign: 'justify',
                      lineHeight: 1.6,
                      mb: 1,
                    }}
                  >
                    {displayText}
                  </Typography>
                  {shouldTruncate && (
                    <Typography
                      component="span"
                      onClick={() => toggleExpand(index)}
                      sx={{
                        color: 'primary.main',
                        fontWeight: 600,
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        fontSize: '0.9rem',
                        '&:hover': {
                          color: 'primary.dark',
                        },
                      }}
                    >
                      {isExpanded ? 'See Less' : 'See More'}
                    </Typography>
                  )}
                </Box>

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
                  View project
                  <span className="visually-hidden">: {project.title}</span>
                  <ArrowForwardIcon sx={{ fontSize: 20 }} aria-hidden="true" />
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default ProjectShowCase;
