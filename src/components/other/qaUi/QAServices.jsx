'use client';

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Test Automation Services',
        description: 'Automate your testing processes to accelerate releases and ensure consistent software quality. Our test automation solutions reduce manual effort while increasing test coverage and reliability.',
        highlights: [
            'Automated UI, API, and mobile testing',
            'Tools: Selenium, Cypress, Playwright, Appium',
            'CI/CD pipeline integration',
            'Faster regression testing and feedback'
        ],
        footerTitle: 'Value delivered:',
        footerItems: [
            'Reduced testing time',
            'Improved accuracy',
            'Faster time-to-market'
        ],
        image: '/images/qapage-img/test_automation-image.webp',
    },
    {
        title: 'Manual & Functional Testing',
        description: 'Ensure your application functions exactly as intended through detailed and user-focused manual testing. We validate business requirements, workflows, and usability across platforms.',
        highlights: [
            'Functional and regression testing',
            'UI/UX and usability validation',
            'Cross-browser and cross-device testing',
            'Test case creation and execution'
        ],
        footerTitle: 'Outcome:',
        footerItems: [
            'Bug-free user journeys',
            'Improved usability',
            'High customer satisfaction'
        ],
        image: '/images/qapage-img/Manual and Functional Testing - image.png',
    },
    {
        title: 'Performance & Load Testing',
        description: 'Validate your application’s stability and responsiveness under real-world and peak-load conditions. We identify performance bottlenecks before they impact users.',
        highlights: [
            'Load, stress, and endurance testing',
            'Performance benchmarking',
            'Scalability and reliability analysis',
            'Tools: JMeter, LoadRunner'
        ],
        footerTitle: 'Benefits:',
        footerItems: [
            'Stable performance under heavy traffic',
            'Faster response times',
            'Reliable system behavior'
        ],
        image: '/images/qapage-img/Performance & Load Testing-image.png',
    },
    {
        title: 'Security & Penetration Testing',
        description: 'Protect your application and sensitive data by identifying vulnerabilities and security risks. Our security testing follows industry best practices and standards.',
        highlights: [
            'Vulnerability assessment',
            'Penetration testing',
            'OWASP Top 10 coverage',
            'SQL injection, XSS, and authentication testing'
        ],
        footerTitle: 'Results:',
        footerItems: [
            'Reduced security threats',
            'Improved compliance',
            'Stronger application protection'
        ],
        image: '/images/qapage-img/Security & Penetration Testing - imge.webp',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export default function QAServices() {
    return (
        <Box
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
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
                            size={{ xs: 12, md: 12 }}
                            key={index}
                            component={motion.div}
                            variants={itemVariants}
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
                                mb: 4,
                            }}
                        >
                            {/* Image */}
                            <Box
                                className="hover-image-container"
                                sx={{
                                    width: { xs: '100%', sm: '90%', md: '100%' },
                                    height: { xs: 220, sm: 250, md: 400 },
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    flex: 1,
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
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
                                    textAlign: 'left',
                                    mt: { xs: '20px', md: 0 },
                                    mb: { xs: '30px', md: 0 },
                                    flex: 1.2,
                                    pl: index % 2 === 1 ? { md: 8 } : 0,
                                    pr: index % 2 === 0 ? { md: 8 } : 0,
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 800,
                                            fontSize: { xs: '1.6rem', sm: '2rem', md: '2.6rem' },
                                            mb: 2,
                                            color: '#1a1a1a',
                                            letterSpacing: '-0.5px',
                                        }}
                                    >
                                        {service.title}
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: { xs: '1rem', md: '1.15rem' },
                                            color: '#555',
                                            lineHeight: 1.8,
                                            mb: 4,
                                            maxWidth: '95%',
                                        }}
                                    >
                                        {service.description}
                                    </Typography>

                                    {/* Highlights */}
                                    <Box sx={{ mb: 4 }}>
                                        {service.highlights.map((highlight, hIndex) => (
                                            <Box
                                                key={hIndex}
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    mb: 1.8,
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        color: '#ffc107',
                                                        fontWeight: 'bold',
                                                        mr: 2,
                                                        fontSize: '1.4rem',
                                                        lineHeight: 1,
                                                    }}
                                                >
                                                    •
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: '1.05rem',
                                                        color: '#333',
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {highlight}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>

                                    {/* Footer Section (Outcome/Value) */}
                                    <Box
                                        sx={{
                                            backgroundColor: '#f9f9f9',
                                            p: 4,
                                            borderRadius: 3,
                                            borderLeft: '5px solid #ffc107',
                                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontWeight: 800,
                                                fontSize: '0.9rem',
                                                mb: 3,
                                                color: '#1a1a1a',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1.5px',
                                            }}
                                        >
                                            {service.footerTitle}
                                        </Typography>
                                        <Grid container spacing={3}>
                                            {service.footerItems.map((item, iIndex) => (
                                                <Grid size={{ xs: 12, sm: 6 }} key={iIndex}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Box
                                                            sx={{
                                                                width: 20,
                                                                height: 20,
                                                                borderRadius: '50%',
                                                                backgroundColor: 'rgba(40, 167, 69, 0.1)',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                mr: 1.5,
                                                            }}
                                                        >
                                                            <Typography
                                                                sx={{
                                                                    color: '#28a745',
                                                                    fontWeight: 'bold',
                                                                    fontSize: '0.8rem',
                                                                }}
                                                            >
                                                                ✔
                                                            </Typography>
                                                        </Box>
                                                        <Typography
                                                            sx={{
                                                                fontSize: '1rem',
                                                                color: '#444',
                                                                fontWeight: 600,
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
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}
