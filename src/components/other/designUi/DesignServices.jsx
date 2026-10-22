'use client';

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'UI / UX Design',
        description: 'We create intuitive and user-centered designs that enhance usability and deliver meaningful digital experiences. Our UI/UX approach focuses on understanding user behavior and translating it into elegant, functional interfaces.',
        highlightTitle: 'Key highlights',
        highlights: [
            'User research and journey mapping',
            'Intuitive interface and interaction design',
            'Accessibility and usability best practices',
            'Data-driven design decisions'
        ],
        footerTitle: 'Value delivered',
        footerItems: [
            'Improved user engagement',
            'Seamless user experiences',
            'Higher customer satisfaction'
        ],
        image: '/images/design-img/ui-ux-design.webp',
    },
    {
        title: 'Brand Identity',
        description: 'Build a strong and consistent brand presence that connects with your audience. We design brand identities that communicate your values and leave a lasting impression.',
        highlightTitle: 'What we offer',
        highlights: [
            'Logo design and visual systems',
            'Color palettes and typography',
            'Brand guidelines and assets',
            'Consistent cross-platform branding'
        ],
        footerTitle: 'Benefits',
        footerItems: [
            'Strong brand recognition',
            'Professional visual consistency',
            'Increased customer trust'
        ],
        image: '/images/design-img/brand-identity.avif',
    },
    {
        title: 'Web & Mobile Design',
        description: 'We design responsive, visually appealing web and mobile experiences optimized for performance and usability across all devices.',
        highlightTitle: 'Our services include',
        highlights: [
            'Responsive website design',
            'Mobile app UI design (iOS & Android)',
            'Cross-device compatibility',
            'Performance-focused layouts'
        ],
        footerTitle: 'Outcome',
        footerItems: [
            'Modern and engaging designs',
            'Optimized user experiences',
            'Consistent look across platforms'
        ],
        image: '/images/design-img/web-mobile-design.webp',
    },
    {
        title: 'Prototyping & Wireframing',
        description: 'Visualize ideas early and validate concepts before development begins. Our wireframes and interactive prototypes help reduce risks and speed up decision-making.',
        highlightTitle: 'Our process includes:',
        highlights: [
            'Low-fidelity wireframes',
            'High-fidelity interactive prototypes',
            'User flow and interaction validation',
            'Tools: Figma, Adobe XD'
        ],
        footerTitle: 'Results',
        footerItems: [
            'Clear product direction',
            'Faster development cycles',
            'Reduced rework and cost'
        ],
        image: '/images/design-img/prototyping.webp',
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

export default function DesignServices() {
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
                                p: { xs: 2.5, sm: 4, md: 8 },
                                borderRadius: 4,
                                transition: 'all 0.3s ease',
                                mb: 4,
                            }}
                        >
                            {/* Image */}
                            <Box
                                className="hover-image-container"
                                sx={{
                                    width: { xs: '100%', sm: '95%', md: '100%' },
                                    height: { xs: 240, sm: 300, md: 450 },
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    flex: 1,
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
                                    width: { xs: '100%', md: '100%' },
                                    textAlign: 'left',
                                    mt: { xs: 3, md: 0 },
                                    mb: { xs: 2, md: 0 },
                                    flex: 1.2,
                                    pl: index % 2 === 1 ? { md: 8 } : 0,
                                    pr: index % 2 === 0 ? { md: 8 } : 0,
                                }}
                            >
                                <Box sx={{ p: { xs: 1, sm: 2, md: 0 } }}>
                                    <Typography
                                      component="h2"
                                        variant="h4"
                                        sx={{
                                            fontWeight: 800,
                                            fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.6rem' },
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
                                            fontSize: { xs: '0.95rem', md: '1.15rem' },
                                            color: '#555',
                                            lineHeight: 1.7,
                                            mb: 4,
                                            maxWidth: '95%',
                                            textAlign: 'justify'
                                        }}
                                    >
                                        {service.description}
                                    </Typography>

                                    {/* Highlights */}
                                    <Box sx={{ mb: 4 }}>
                                        <Typography
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: { xs: '1rem', md: '1.1rem' },
                                                mb: 2,
                                                color: '#1a1a1a',
                                            }}
                                        >
                                            {service.highlightTitle}
                                        </Typography>
                                        {service.highlights.map((highlight, hIndex) => (
                                            <Box
                                                key={hIndex}
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    mb: 1.5,
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        color: '#000',
                                                        fontWeight: 'bold',
                                                        mr: 1.5,
                                                        fontSize: '1.2rem',
                                                        lineHeight: 1,
                                                    }}
                                                >
                                                    •
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: { xs: '0.9rem', md: '1.05rem' },
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
                                            backgroundColor: '#F1F1EF',
                                            p: { xs: 3, md: 4 },
                                            borderRadius: 3,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontWeight: 800,
                                                fontSize: '0.85rem',
                                                mb: 2,
                                                color: '#1a1a1a',
                                            }}
                                        >
                                            {service.footerTitle}
                                        </Typography>
                                        <Grid container spacing={2}>
                                            {service.footerItems.map((item, iIndex) => (
                                                <Grid size={{ xs: 12, sm: 6 }} key={iIndex}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Box
                                                            sx={{
                                                                width: 18,
                                                                height: 18,
                                                                borderRadius: '50%',
                                                                backgroundColor: '#000',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                mr: 1.2,
                                                            }}
                                                        >
                                                            <Typography
                                                                sx={{
                                                                    color: '#fff',
                                                                    fontWeight: 'bold',
                                                                    fontSize: '0.75rem',
                                                                }}
                                                            >
                                                                ✔
                                                            </Typography>
                                                        </Box>
                                                        <Typography
                                                            sx={{
                                                                fontSize: { xs: '0.9rem', md: '1rem' },
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
