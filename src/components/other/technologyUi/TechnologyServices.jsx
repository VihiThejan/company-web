'use client';

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const services = [
  {
    title: 'Full Stack Development',
    description:
      'Our full stack engineering team combines expertise across front-end, back-end, and mobile development. We design scalable applications, from concept to deployment, with strong emphasis on performance, maintainability, and cutting-edge user experiences.',
    image: '/images/technology-img/tech-services/fullstack.webp',
  },
  {
    title: 'Cloud Computing',
    description:
      'We design, implement, and manage cloud infrastructure that enhances scalability and security. Our solutions integrate seamlessly with your existing systems, ensuring optimized performance, cost-efficiency, and business continuity.',
    image: '/images/technology-img/tech-services/cloud.webp',
  },
  {
    title: 'Data Engineering and BI',
    description:
      'Our data engineering and business intelligence specialists build pipelines, manage data warehouses, and develop analytics solutions that empower data-driven decision-making, helping businesses gain actionable insights for growth.',
    image: '/images/technology-img/tech-services/data-bi.webp',
  },
  {
    title: 'AI/ML Data Science',
    description:
      'Our data engineering and business intelligence specialists build pipelines, manage data warehouses, and develop analytics solutions that empower data-driven decision-making, helping businesses gain actionable insights for growth.',
    image: '/images/technology-img/tech-services/ai-ml.webp',
  },
];

export default function TechnologyServices() {
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
        {services.map((service, index) => (
          <Grid
            size={{ xs: 12, md: 12 }}
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
              src={service.image}
              alt={service.title}
              sx={{
                width: { xs: '100%', sm: '90%', md: '100%' },
                height: { xs: 220, sm: 250, md: 500 },
                objectFit: 'cover',
                borderRadius: 5,
              }}
            />

            {/* Text Section */}
            <Box
              sx={{
                width: { xs: '100%', md: '100%' },
                textAlign: { xs: 'center', md: 'left' },
                mt: {xs: '30px', md: 0},
                mb: {xs: '50px', md: 0}
              
              }}
            >
              <Box sx={{padding: {sx: '20px', md: '30px'}}}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.25rem', sm: '1.4rem', md: '1.9rem' },
                    mb: 1.5,
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
                    color: '#555',
                    lineHeight: 1.6,
                    textAlign: 'justify'
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
