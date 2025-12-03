'use client';

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const services = [
    {
        title: 'Test Automation Services',
        description:
            'Accelerate your release cycles and ensure consistent quality with our robust test automation services. We utilize industry-leading tools like Selenium, Cypress, and Playwright to build scalable automation frameworks. Our approach covers UI, API, and mobile testing, reducing manual effort and enabling faster feedback loops. By integrating automation into your CI/CD pipelines, we help you achieve higher test coverage and reliable deployments with every build.',
        image: '/images/technology-img/tech-services/fullstack.jpg', // Placeholder, ideally replace with QA specific image
    },
    {
        title: 'Manual & Functional Testing',
        description:
            'Our meticulous manual testing services ensure that your application behaves exactly as intended from the user\'s perspective. We conduct comprehensive functional, regression, and usability testing to identify bugs and usability issues that automated scripts might miss. Our QA experts simulate real-world user scenarios to validate workflows, ensuring a seamless and bug-free experience for your end-users across all devices and platforms.',
        image: '/images/technology-img/tech-services/cloud.jpg', // Placeholder
    },
    {
        title: 'Performance & Load Testing',
        description:
            'Prepare your application for peak traffic and ensure optimal stability with our performance testing solutions. We simulate high-load scenarios using tools like JMeter and LoadRunner to identify bottlenecks, latency issues, and scalability limits. Our detailed performance reports help you optimize resource usage and database queries, guaranteeing that your system remains responsive and reliable even under extreme user loads.',
        image: '/images/technology-img/tech-services/data-bi.jpg', // Placeholder
    },
    {
        title: 'Security & Penetration Testing',
        description:
            'Protect your business and user data with our comprehensive security testing services. We perform vulnerability assessments and penetration testing to identify security loopholes, potential threats, and compliance gaps. Our security experts follow OWASP standards to test for SQL injection, XSS, and other critical vulnerabilities, ensuring your application is fortified against cyber threats and meets industry security standards.',
        image: '/images/technology-img/tech-services/ai-ml.jpg', // Placeholder
    },
];

export default function QAServices() {
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
                            }}
                        >
                            {/* Image */}
                            <Box
                                className="hover-image-container"
                                sx={{
                                    width: { xs: '100%', sm: '90%', md: '100%' },
                                    height: { xs: 220, sm: 250, md: 350 },
                                    borderRadius: 3,
                                    overflow: 'hidden',
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

                                    {/* Desktop View */}
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

                                    {/* Mobile View */}
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
