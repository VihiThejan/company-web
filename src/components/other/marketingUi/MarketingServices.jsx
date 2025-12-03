'use client';

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const services = [
  {
    title: 'Full Stack Development',
    description:
      'Our full stack engineering team combines expertise across front-end, back-end, and mobile development. We design scalable applications, from concept to deployment, with strong emphasis on performance, maintainability, and cutting-edge user experiences.',
    image: '/images/marketing-img/market-strag.jpg',
  },
  {
    title: 'Cloud Computing',
    description:
      'We design, implement, and manage cloud infrastructure that enhances scalability and security. Our solutions integrate seamlessly with your existing systems, ensuring optimized performance, cost-efficiency, and business continuity.',
    image: '/images/marketing-img/data-driven-perform.png',
  },
  {
    title: 'Data Engineering and BI',
    description:
      'Our data engineering and business intelligence specialists build pipelines, manage data warehouses, and develop analytics solutions that empower data-driven decision-making, helping businesses gain actionable insights for growth.',
    image: '/images/marketing-img/rank&resonates.jpg',
  },
  {
    title: 'AI/ML Data Science',
    description:
      'Our data engineering and business intelligence specialists build pipelines, manage data warehouses, and develop analytics solutions that empower data-driven decision-making, helping businesses gain actionable insights for growth.',
    image: '/images/marketing-img/marketing-automation.jpg',
  },
];

export default function MarketingServices() {
  const [expanded, setExpanded] = React.useState({});

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
        {services.map((service, index) => {
          const isExpanded = expanded[index];
          const text = service.description;
          // Show first 150 chars if not expanded, otherwise full text
          // Only truncate if text is longer than 150 chars
          const shouldTruncate = text.length > 150;
          const displayText =
            !isExpanded && shouldTruncate
              ? text.slice(0, 150) + '...'
              : text;

          return (
            <Grid
              size={{ xs: 12, md: 12 }}
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
                  // bgcolor: 'rgba(0,0,0,0.02)' // Removed as per user request
                },
              }}
            >
              {/* Image */}
              <Box
                className="hover-image-container"
                sx={{
                  width: { xs: '100%', sm: '90%', md: '100%' },
                  height: { xs: 220, sm: 250, md: 350 },
                  borderRadius: 3,
                  overflow: 'hidden', // Required for zoom effect
                  flex: 1,
                }}
              >
                <Box
                  component="img"
                  className="hover-image"
                  src={service.image}
                  alt={service.title}
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
                  width: { xs: '100%', md: '100%' },
                  textAlign: { xs: 'center', md: 'left' },
                  mt: { xs: '20px', md: 0 },
                  mb: { xs: '30px', md: 0 },
                  flex: 1,
                  pl: index % 2 === 1 ? { md: 6 } : 0,
                  pr: index % 2 === 0 ? { md: 6 } : 0,
                }}
              >
                <Box sx={{ padding: { sx: '20px', md: '30px' } }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '1.25rem', sm: '1.4rem', md: '1.8rem' },
                      mb: 2,
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Desktop View: Always show full text */}
                  <Typography
                    variant="body1"
                    sx={{
                      display: { xs: 'none', md: 'block' },
                      fontSize: { xs: '0.95rem', sm: '1rem', md: '1rem' },
                      color: '#555',
                      lineHeight: 1.6,
                      textAlign: 'justify',
                    }}
                  >
                    {service.description}
                  </Typography>

                  {/* Mobile View: Show truncated text with See More button */}
                  <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '0.95rem', sm: '1rem' },
                        color: '#555',
                        lineHeight: 1.6,
                        textAlign: 'justify',
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
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
