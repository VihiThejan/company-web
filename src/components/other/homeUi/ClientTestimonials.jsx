'use client';

import React from 'react';
import { Box, Typography, Avatar, Paper, useMediaQuery, keyframes, styled } from '@mui/material';
import customTheme from '@/theme/theme';

const testimonials = [
    {
        name: 'Alisa Olivia',
        role: 'CTO at Ritovex',
        text: 'They transformed our initial concept into a brilliant product that exceeded our expectations. Truly dedicated and professional team!',
        avatar: '/images/clients/client1.jpg',
        rating: 5,
    },
    {
        name: 'Michael Davis',
        role: 'Founder at TechCraft',
        text: 'Their communication and execution were flawless. They kept us updated throughout the project and delivered beyond scope.',
        avatar: '/images/clients/client2.jpg',
        rating: 5,
    },
    {
        name: 'Sophia Lee',
        role: 'Manager at Nova Inc.',
        text: 'A team that genuinely cares about client satisfaction! Excellent results and quick turnaround time.',
        avatar: '/images/clients/client3.jpg',
        rating: 5,
    },
    {
        name: 'Daniel Thomas',
        role: 'CEO at CloudEdge',
        text: 'Professionalism and creativity at their best. We will definitely collaborate again!',
        avatar: '/images/clients/client3.jpg',
        rating: 5,
    },
    {
        name: 'James Wilson',
        role: 'Director at FutureTech',
        text: 'The scalability of the solution provided was exactly what we needed for our rapid growth phase.',
        avatar: '/images/clients/client1.jpg',
        rating: 5,
    },
    {
        name: 'Emily Chen',
        role: 'Product Lead at Innovate',
        text: 'Outstanding attention to detail and a user-centric approach that really shines through in the final product.',
        avatar: '/images/clients/client2.jpg',
        rating: 5,
    },
    {
        name: 'Robert Taylor',
        role: 'CEO at DataStream',
        text: 'Efficient, reliable, and innovative. They solved complex problems that other agencies struggled with.',
        avatar: '/images/clients/client3.jpg',
        rating: 5,
    },
    {
        name: 'Sarah Miller',
        role: 'Marketing Head at GrowthHub',
        text: 'Their digital strategies have significantly boosted our online presence and lead generation.',
        avatar: '/images/clients/client1.jpg',
        rating: 5,
    },
];

// Duplicate items for infinite loop illusion
const extendedTestimonials = [...testimonials, ...testimonials];

const slide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const CarouselTrack = styled(Box)(({ theme }) => ({
    display: 'flex',
    animation: `${slide} 40s linear infinite`,
    '&:hover': {
        animationPlayState: 'paused',
    },
}));

const ClientTestimonials = () => {
    const isMobile = useMediaQuery(customTheme.breakpoints.down('md'));
    const itemsToShow = isMobile ? 1 : 3;

    return (
        <Box
            sx={{
                width: '100%',
                py: { xs: 6, md: 10 },
                overflow: 'hidden',
                position: 'relative',
                bgcolor: '#fff',
            }}
        >
            {/* Section Title */}
            <Typography
                variant="h2"
                sx={{
                    fontWeight: 700,
                    textAlign: 'center',
                    mb: 2,
                    color: customTheme.palette.secondary.main,
                    fontSize: { xs: '2.5rem', md: '3rem' },
                }}
            >
                What Our Clients Are Saying
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    textAlign: 'center',
                    mb: { xs: 5, md: 8 },
                    maxWidth: 700,
                    mx: 'auto',
                    px: 2,
                }}
            >
                Hear directly from our clients about their experiences and the results
                we've delivered.
            </Typography>

            {/* Carousel Track */}
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 1200,
                    mx: 'auto',
                    overflow: 'hidden',
                    px: 2,
                    py: 4,
                }}
            >
                <CarouselTrack
                    sx={{
                        width: `${(extendedTestimonials.length / itemsToShow) * 100}%`, // Adjust width to fit all items
                    }}
                >
                    {extendedTestimonials.map((testimonial, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: `${100 / extendedTestimonials.length}%`, // Each item takes equal share of the total track width
                                px: 2, // Gap between cards
                                boxSizing: 'border-box',
                            }}
                        >
                            <Paper
                                className="hover-card"
                                sx={{
                                    width: '100%',
                                    borderRadius: 4,
                                    p: { xs: 3, md: 4 },
                                    background: customTheme.palette.secondary.light,
                                    height: '100%',
                                    minHeight: 300,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    boxSizing: 'border-box',
                                }}
                            >
                                <Box sx={{ mb: 2 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 0.5,
                                            mb: 1,
                                        }}
                                    >
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <span
                                                key={i}
                                                style={{
                                                    color: customTheme.palette.primary.option,
                                                    fontSize: 18,
                                                }}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: customTheme.palette.secondary.main,
                                            fontSize: '1rem',
                                        }}
                                    >
                                        {testimonial.text}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Avatar
                                        src={testimonial.avatar}
                                        sx={{ width: 48, height: 48 }}
                                    />
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                            {testimonial.name}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            sx={{ color: customTheme.palette.secondary.main }}
                                        >
                                            {testimonial.role}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    ))}
                </CarouselTrack>
            </Box>
        </Box>
    );
};

export default ClientTestimonials;
