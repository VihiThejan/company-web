'use client';

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const services = [
    {
        title: 'UI/UX Design',
        description:
            'We create intuitive and engaging user interfaces that provide seamless user experiences. Our design process involves deep user research, wireframing, and prototyping to ensure that every interaction is meaningful and efficient. We focus on accessibility and usability to reach the widest possible audience.',
        image: '/images/home-img/uiux.png',
    },
    {
        title: 'Brand Identity',
        description:
            'We help businesses build strong, memorable brands. From logo design to comprehensive brand guidelines, we ensure consistency across all touchpoints. Our aim is to create a visual identity that resonates with your target audience and communicates your core values effectively.',
        image: '/images/marketing-img/branding.png',
    },
    {
        title: 'Web & Mobile Design',
        description:
            'Our team designs responsive websites and mobile applications that look great on any device. We prioritize mobile-first design principles to ensure that your digital presence is optimized for the growing number of mobile users. We combine aesthetics with functionality to drive engagement and conversions.',
        image: '/images/technology-img/tech-services/Web & Mobile Design.png',
    },
    {
        title: 'Prototyping & Wireframing',
        description:
            'We transform ideas into tangible prototypes. This allows stakeholders to visualize the final product early in the development process, facilitating feedback and reducing the risk of costly changes later. Our high-fidelity prototypes simulate the real user experience.',
        image: '/images/marketing-img/pat.png',
    },
];

export default function DesignServices() {
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
