'use client';

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const services = [
  {
    title: 'Custom End-to-End Software Development',
    description:
      'We deliver full-cycle software development solutions designed to meet the evolving needs of modern businesses. Our dedicated team specializes in building scalable web and mobile applications that integrate seamlessly across platforms. From UX strategy and system architecture to development, testing, and deployment, we handle every phase with precision. Each solution is tailored for security, maintainability, and performance—ensuring your business stays ahead in a competitive digital landscape. Our approach combines innovative design with robust engineering to create reliable, user-focused digital products that drive measurable growth.',
    image: '/images/technology-img/tech-services/fullstack.jpg',
  },
  {
    title: 'Enterprise Cloud Architecture & Optimization',
    description:
      'Our cloud experts help organizations harness the full potential of cloud computing through scalable, secure, and optimized cloud infrastructure. We architect, deploy, and manage solutions on leading platforms like AWS, Microsoft Azure, and Google Cloud, ensuring maximum uptime and operational efficiency. From migration of legacy systems to building cloud-native applications, we help businesses achieve greater agility and cost savings. With strong focus on automation, performance monitoring, and security compliance, our cloud consulting services enable long-term digital resilience and scalability.',
    image: '/images/technology-img/tech-services/cloud.jpg',
  },
  {
    title: 'Data Engineering, Analytics & Business Intelligence',
    description:
      'We empower organizations to turn complex data into actionable insights with our end-to-end data engineering and business intelligence services. Our experts design robust ETL pipelines, implement cloud-based data warehouses, and develop intuitive dashboards using leading BI tools. We focus on data accuracy, visualization clarity, and real-time decision support—helping enterprises identify trends, optimize performance, and predict opportunities. Whether it’s customer analytics, KPI reporting, or predictive modeling, our data-driven solutions ensure your business decisions are backed by intelligence and precision.',
    image: '/images/technology-img/tech-services/data-bi.jpg',
  },
  {
    title: 'AI & Machine Learning Integration',
    description:
      'We help businesses unlock innovation through artificial intelligence and machine learning solutions that enhance productivity, efficiency, and customer engagement. Our AI development services include predictive analytics, intelligent automation, natural language processing, and computer vision. By integrating AI into your existing ecosystem, we enable data-driven decision-making and smarter workflows. From building custom ML models to implementing real-time analytics, our solutions are designed to adapt, learn, and evolve—empowering organizations to scale intelligently and achieve sustainable digital transformation.',
    image: '/images/technology-img/tech-services/ai-ml.jpg',
  },
];

export default function TechnologyServices() {
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
                      color: '#000',
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
                        color: '#000',
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
