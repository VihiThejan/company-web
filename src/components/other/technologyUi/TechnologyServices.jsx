'use client';

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const services = [
  {
    title: 'Custom End-to-End Software Development',
    description:
      'We deliver full-cycle software development solutions designed to meet the evolving needs of modern businesses. Our dedicated team specializes in building scalable web and mobile applications that integrate seamlessly across platforms. From UX strategy and system architecture to development, testing, and deployment, we handle every phase with precision. Each solution is tailored for security, maintainability, and performance—ensuring your business stays ahead in a competitive digital landscape. Our approach combines innovative design with robust engineering to create reliable, user-focused digital products that drive measurable growth.',
    image: '/images/technology-img/tech-services/fullstack.webp',
  },
  {
    title: 'Enterprise Cloud Architecture & Optimization',
    description:
      'Our cloud experts help organizations harness the full potential of cloud computing through scalable, secure, and optimized cloud infrastructure. We architect, deploy, and manage solutions on leading platforms like AWS, Microsoft Azure, and Google Cloud, ensuring maximum uptime and operational efficiency. From migration of legacy systems to building cloud-native applications, we help businesses achieve greater agility and cost savings. With strong focus on automation, performance monitoring, and security compliance, our cloud consulting services enable long-term digital resilience and scalability.',
    image: '/images/technology-img/tech-services/cloud.webp',
  },
  {
    title: 'Data Engineering, Analytics & Business Intelligence',
    description:
      'We empower organizations to turn complex data into actionable insights with our end-to-end data engineering and business intelligence services. Our experts design robust ETL pipelines, implement cloud-based data warehouses, and develop intuitive dashboards using leading BI tools. We focus on data accuracy, visualization clarity, and real-time decision support—helping enterprises identify trends, optimize performance, and predict opportunities. Whether it’s customer analytics, KPI reporting, or predictive modeling, our data-driven solutions ensure your business decisions are backed by intelligence and precision.',
    image: '/images/technology-img/tech-services/data-bi.webp',
  },
  {
    title: 'AI & Machine Learning Integration',
    description:
      'We help businesses unlock innovation through artificial intelligence and machine learning solutions that enhance productivity, efficiency, and customer engagement. Our AI development services include predictive analytics, intelligent automation, natural language processing, and computer vision. By integrating AI into your existing ecosystem, we enable data-driven decision-making and smarter workflows. From building custom ML models to implementing real-time analytics, our solutions are designed to adapt, learn, and evolve—empowering organizations to scale intelligently and achieve sustainable digital transformation.',
    image: '/images/technology-img/tech-services/ai-ml.webp',
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
                borderRadius: 3,
              }}
            />

            {/* Text Section */}
            <Box
              sx={{
                width: { xs: '100%', md: '100%' },
                textAlign: { xs: 'center', md: 'left' },
                mt: { xs: '30px', md: 0 },
                mb: { xs: '50px', md: 0 },
              }}
            >
              <Box sx={{ padding: { sx: '20px', md: '30px' } }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.25rem', sm: '1.4rem', md: '2rem' },
                    mb: 2.5,
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1rem' },
                    color: '#555',
                    lineHeight: 2,
                    textAlign: 'justify',
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
