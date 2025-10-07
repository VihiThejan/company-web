'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Avatar,
  Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from 'next/link';

// Styled Components
const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #fffdfdff 0%, #ffffffff 100%)',
  color: 'black',
  padding: theme.spacing(8, 0),
  paddingTop: theme.spacing(12),
  textAlign: 'center',
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.spacing(2),
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[10],
  },
}));

const ExpertCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  height: '300px',
  position: 'relative',
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const StatCard = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  background: 'linear-gradient(145deg, #f0f0f0, #cacaca)',
  boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
}));



//for animations
const MotionBox = motion(Box);

// CTA Card Component
const CTACard = ({ bg, color, label, labelBg, title, subtitle, buttonHref }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={buttonHref} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <MotionBox
        sx={{
          background: bg,
          color: color,
          borderRadius: 2,
          p: { xs: 3, md: 4 },
          height: { xs: 'auto', md: 280 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: 2,
          position: 'relative',
          cursor: 'pointer',
          overflow: 'hidden',
          transition: 'box-shadow 0.2s',
          '&:hover': { boxShadow: 6 },
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <Box>
          <Box
            sx={{
              background: labelBg,
              color: '#fff',
              borderRadius: 2,
              px: 1.5,
              py: 0.5,
              fontSize: '0.95rem',
              fontWeight: 500,
              display: 'inline-block',
              mb: 2,
            }}
          >
            {label}
          </Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: subtitle ? 1 : 2,
              fontSize: { xs: '1.3rem', md: '2rem' },
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                mb: 1,
                fontSize: { xs: '1rem', md: '1.15rem' },
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          style={{
            position: 'absolute',
            bottom: 24,
            right: 24,
            zIndex: 2,
          }}
        >
          <Button
            tabIndex={-1}
            sx={{
              minWidth: 10,
              p: 1.2,
              borderRadius: '50%',
              background: '#fff',
              color: '#000',
              boxShadow: 1,
              transition: 'background 0.2s, color 0.2s',
              pointerEvents: 'none',
            }}
          >
            <ArrowOutwardIcon />
          </Button>
        </motion.div>
      </MotionBox>
    </Link>
  );
};

// CTA Section Component
const CTASection = () => (
  <Box sx={{ width: '100%', py: 2 }}>
    <Grid container spacing={3} justifyContent="center">
      <Grid size={{ xs: 12, md: 6 }}>
        <CTACard
          bg="#111"
          color="#fff"
          label="Careers"
          labelBg="#757575ff"
          title={
            <>
              join with our <br /> talented team ?
            </>
          }
          subtitle="Explore opportunities"
          buttonHref="/careers"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <CTACard
          bg="#ffc720"
          color="#111"
          label="Get in touch"
          labelBg="#a88a2c"
          title="Speak to our experts"
          subtitle="Accelerate your growth goals"
          buttonHref="/contactus"
        />
      </Grid>
    </Grid>
  </Box>
);

const TechnologyPage = () => {
  // Service data
  const services = [
    {
      title: 'Full stack engineering team',
      description: 'Our full-stack engineering team combines expertise across front-end, back-end, and everything in between to build seamless, scalable applications. From concept to deployment, we create intuitive, high-performing systems that deliver solutions that support business growth and adapt to evolving needs.',
      image: '/images/technology/full-stack-team.png',
    },
    {
      title: 'Cloud computing',
      description: 'We design, implement, and manage cloud infrastructures that empower organizations to scale rapidly while staying secure. Our cloud solutions enable billion-dollar enterprises and government agencies to operate with flexibility, eliminate traditional resource limitations, and stay resilient, handling demands in even the most challenging environments.',
      image: '/images/technology/cloud-computing.png',
    },
    {
      title: 'Data engineering and BI',
      description: 'Our data engineering professionals intelligence capabilities transform raw data into strategic assets. We build robust data architectures and business intelligence solutions that empower informed decisions with confidence, helping organizations harness their data for competitive advantage.',
      image: '/images/technology/data-analytics.png',
    },
    {
      title: 'Data science, AI/ML',
      description: 'We harness the power of AI, machine learning models, and data science algorithms to transform the way businesses operate. Our team of experts build insights from the most focused thinking and implement AI-driven solutions, delivering breakthrough value to organizations across industries.',
      image: '/images/technology/ai-ml-brain.png',
    },
    {
      title: 'Cybersecurity',
      description: 'Our cybersecurity consulting services encompass identity access management, risk analysis, and compliance with industry standards. We secure digital businesses against evolving cybersecurity threats, ensuring that critical information stays safe and organizations meet critical information security standards.',
      image: '/images/technology/cybersecurity-shield.png',
    },
  ];

  // Experts data
  const experts = [
    { id: 1, name: 'John Smith', role: 'Senior Full Stack Developer' },
    { id: 2, name: 'Sarah Johnson', role: 'Cloud Architect' },
    { id: 3, name: 'Mike Chen', role: 'Data Scientist' },
    { id: 4, name: 'Emma Wilson', role: 'DevOps Engineer' },
    { id: 5, name: 'David Brown', role: 'Cybersecurity Specialist' },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold', 
              mb: 3,
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            Hire the top 1% of
          </Typography>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold', 
              mb: 4,
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            engineering talent
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4, 
              maxWidth: '600px', 
              mx: 'auto', 
              opacity: 0.9,
              fontSize: { xs: '1rem', md: '1.25rem' },
              px: { xs: 2, md: 0 }
            }}
          >
            Leverage top engineering expertise to drive innovation, accelerate growth and outperform
            the competition with our best-in-class technical teams.
          </Typography>
          <Grid 
            container 
            spacing={4} 
            sx={{ 
              mt: 4,
              justifyContent: 'center',
              maxWidth: '900px',
              mx: 'auto'
            }}
          >
            <Grid item xs={12} sm={6} md={5}>
              <Box
                component="img"
                src="/images/technology/team-collaboration.png"
                alt="Team collaboration"
                sx={{
                  width: '100%',
                  height: { xs: '250px', md: '300px' },
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.2)',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <Box
                component="img"
                src="/images/technology/team-success.png"
                alt="Technology workspace"
                sx={{
                  width: '100%',
                  height: { xs: '250px', md: '300px' },
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.2)',
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* Main Content Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ 
            fontWeight: 'bold', 
            mb: 3,
            fontSize: { xs: '1.75rem', md: '2.75rem' },
            px: { xs: 2, md: 0 }
          }}
        >
          Build, maintain, and scale with agile end to end engineering teams
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ 
            mb: 8,
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.125rem' },
            color: '#666',
            px: { xs: 2, md: 0 },
            lineHeight: 1.6
          }}
        >
          Our top 1% engineering talent delivers reliable, scalable solutions designed to handle the demands of high-impact organizations, ensuring performance, security, and innovation at every stage.
        </Typography>

        {/* Services Sections */}
        {services.map((service, index) => (
          <Box key={service.title} sx={{ mb: { xs: 8, md: 12 } }}>
            <Grid 
              container 
              spacing={{ xs: 4, md: 6 }} 
              alignItems="center"
              direction={{ xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
            >
              {/* Text Content */}
              <Grid item xs={12} md={6}>
                <Box sx={{ pr: { md: index % 2 === 0 ? 4 : 0 }, pl: { md: index % 2 === 1 ? 4 : 0 } }}>
                  <Typography 
                    variant="h4" 
                    component="h3" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 'bold',
                      mb: 3,
                      fontSize: { xs: '1.5rem', md: '2rem' },
                      color: '#1a1a1a'
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontSize: { xs: '1rem', md: '1.125rem' },
                      lineHeight: 1.7,
                      color: '#666',
                      mb: 0
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Grid>
              
              {/* Image Content */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 3,
                    overflow: 'hidden',
                    height: { xs: '300px', md: '400px' },
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Container>

      {/* Experts Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold', mb: 6 }}
          >
            Our experts in design
          </Typography>
          <Grid container spacing={3}>
            {experts.map((expert) => (
              <Grid item xs={6} sm={4} md={2.4} key={expert.id}>
                <ExpertCard>
                  <Box
                    sx={{
                      height: '100%',
                      background: `linear-gradient(145deg, ${
                        expert.id % 2 === 0 ? '#e0e0e0' : '#f0f0f0'
                      }, ${expert.id % 2 === 0 ? '#c0c0c0' : '#d0d0d0'})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <Avatar
                      sx={{
                        width: { xs: 60, md: 80 },
                        height: { xs: 60, md: 80 },
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        backgroundColor: '#667eea',
                      }}
                    >
                      {expert.name.split(' ').map(n => n[0]).join('')}
                    </Avatar>
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: 'white',
                        p: { xs: 1, md: 2 },
                      }}
                    >
                      <Typography 
                        variant="subtitle2" 
                        align="center"
                        sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
                      >
                        {expert.name}
                      </Typography>
                      <Typography 
                        variant="caption" 
                        align="center" 
                        display="block"
                        sx={{ fontSize: { xs: '0.65rem', md: '0.75rem' } }}
                      >
                        {expert.role}
                      </Typography>
                    </Box>
                  </Box>
                </ExpertCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Growth Statistics */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Overview Of Growth
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <StatCard>
              <Typography variant="h2" component="div" sx={{ fontWeight: 'bold', color: '#667eea' }}>
                32+
              </Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>
                Expert Developers
              </Typography>
            </StatCard>
          </Grid>
          <Grid item xs={12} md={3}>
            <StatCard>
              <Typography variant="h2" component="div" sx={{ fontWeight: 'bold', color: '#667eea' }}>
                100+
              </Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>
                Projects Completed
              </Typography>
            </StatCard>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <CTASection />
        </Container>
      </Box>
    </Box>
  );
};

export default TechnologyPage;
