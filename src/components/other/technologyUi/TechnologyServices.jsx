'use client';

import React from 'react';
import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const services = [
  {
    title: 'Custom End-to-End Software Development',
    description:
      'We deliver tailored software solutions covering the entire development lifecycle — from concept and design to deployment and support. Our solutions are built to scale with your business needs.',
    highlightsTitle: 'Key highlights',
    highlights: [
      'Requirement analysis and solution design',
      'Frontend and backend development',
      'API integration and system scalability',
      'Ongoing maintenance and support',
    ],
    valueTitle: 'Value delivered',
    values: [
      'Fully customized solutions',
      'Scalable and secure architecture',
      'Faster time-to-market',
    ],
    image: '/images/technology-img/tech-services/custom-software.jpg',
  },
  {
    title: 'Enterprise Cloud Architecture & Optimization',
    description:
      'Design, migrate, and optimize cloud infrastructures that drive performance, security, and cost efficiency. We help enterprises maximize the value of their cloud investments.',
    highlightsTitle: 'What we offer',
    highlights: [
      'Cloud architecture design and migration',
      'Infrastructure optimization and cost control',
      'High availability and disaster recovery',
      'AWS, Azure, and Google Cloud expertise',
    ],
    valueTitle: 'Benefits',
    values: [
      'Optimized cloud performance',
      'Reduced operational costs',
      'Enhanced scalability and reliability',
    ],
    image: '/images/technology-img/tech-services/cloud-optimization.avif',
  },
  {
    title: 'Data Engineering, Analytics & Business Intelligence',
    description:
      'Turn complex data into actionable insights with robust data engineering and advanced analytics solutions. We help organizations make informed, data-driven decisions.',
    highlightsTitle: 'Our services include',
    highlights: [
      'Data pipelines and ETL processes',
      'Data warehousing and lake solutions',
      'Analytics dashboards and reporting',
      'Tools: Power BI, Tableau, SQL',
    ],
    valueTitle: 'Outcome',
    values: [
      'Accurate and timely insights',
      'Improved business decision-making',
      'Enhanced operational efficiency',
    ],
    image: '/images/technology-img/tech-services/data-analytics.jfif',
  },
  {
    title: 'AI & Machine Learning Integration',
    description:
      'Integrate intelligent AI and ML capabilities into your systems to automate processes and unlock new business opportunities.',
    highlightsTitle: 'Our capabilities',
    highlights: [
      'Predictive analytics and forecasting',
      'Machine learning model integration',
      'Natural Language Processing (NLP)',
      'Computer vision and intelligent automation',
    ],
    valueTitle: 'Results',
    values: [
      'Smarter and faster workflows',
      'Innovation-driven solutions',
      'Competitive business advantage',
    ],
    image: '/images/technology-img/tech-services/ai-ml-integration.jpg',
  },
];

export default function TechnologyServices() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Grid container sx={{ width: '100%' }}>
        {services.map((service, index) => {
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
                transition: 'all 0.3s ease',
              }}
            >
              {/* Image */}
              <Box
                className="hover-image-container"
                sx={{
                  width: { xs: '100%', md: '45%' },
                  height: { xs: 240, sm: 320, md: 480 },
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: 'none',
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
                  width: { xs: '100%', md: '50%' },
                  textAlign: 'left',
                  mt: { xs: 4, md: 0 },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
                    mb: 2,
                    color: '#000',
                    lineHeight: 1.1,
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    color: '#555',
                    lineHeight: 1.6,
                    mb: 4,
                    maxWidth: '95%',
                  }}
                >
                  {service.description}
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 2, color: '#000', fontSize: '1.2rem' }}
                  >
                    {service.highlightsTitle}
                  </Typography>
                  <List disablePadding>
                    {service.highlights.map((item, i) => (
                      <ListItem key={i} disablePadding sx={{ alignItems: 'center', mb: 1.5 }}>
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: '#000',
                            mr: 2,
                            flexShrink: 0,
                          }}
                        />
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{
                            variant: 'body1',
                            sx: { color: '#333', fontSize: '1.05rem', fontWeight: 500 },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                {/* Benefits / Outcome Box */}
                <Box
                  sx={{
                    bgcolor: '#F1F1EF',
                    borderRadius: '12px',
                    p: { xs: 3, md: 4 },
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 800,
                      letterSpacing: '0.05em',
                      color: '#000',
                      mb: 2,
                      display: 'block',
                      fontSize: '0.85rem',
                    }}
                  >
                    {service.valueTitle}
                  </Typography>

                  <Grid container spacing={2}>
                    {service.values.map((item, i) => (
                      <Grid item xs={12} sm={6} key={i}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <CheckCircleIcon sx={{ fontSize: '18px', color: '#000' }} />
                          <Typography
                            sx={{
                              fontWeight: 700,
                              color: '#333',
                              fontSize: '1rem',
                            }}
                          >
                            {item}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
