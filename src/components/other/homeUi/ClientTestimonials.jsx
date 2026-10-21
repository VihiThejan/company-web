'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Paper, useMediaQuery, IconButton } from '@mui/material';
import customTheme, { brand } from '@/theme/theme';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: 'Alisa Olivia',
        role: 'CTO at Ritovex',
        text: 'The Vihi team worked closely with us and leveraged their out-of-the-box creativity and unique design thinking skill to bring to life a solution.',
        avatar: '/images/clients/client1.jpg',
        rating: 5,
    },
    {
        name: 'Michael Davis',
        role: 'Founder at TechCraft',
        text: 'Joining forces with Vihi, we’re revolutionizing digital experiences via Softlogic One Super App. We’re delighted to announce Vihi as our new digital partner.',
        avatar: '/images/clients/client2.jpg',
        rating: 5,
    },
    {
        name: 'Sophia Lee',
        role: 'Manager at Nova Inc.',
        text: 'A team that genuinely cares about client satisfaction! Excellent results and quick turnaround time. Their communication and execution were flawless.',
        avatar: '/images/clients/client3.jpg',
        rating: 5,
    },
    {
        name: 'Daniel Thomas',
        role: 'CEO at CloudEdge',
        text: 'Professionalism and creativity at their best. We will definitely collaborate again! The scalability of the solution provided was exactly what we needed.',
        avatar: '/images/clients/client3.jpg',
        rating: 5,
    },
    {
        name: 'James Wilson',
        role: 'Director at FutureTech',
        text: 'The scalability of the solution provided was exactly what we needed for our rapid growth phase. Efficient, reliable, and innovative.',
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
];

const ClientTestimonials = () => {
    const isMobile = useMediaQuery(customTheme.breakpoints.down('md'));
    const itemsToShow = isMobile ? 1 : 2;
    const [currentIndex, setCurrentIndex] = useState(0);

    const maxIndex = Math.ceil(testimonials.length / itemsToShow) - 1;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Auto-slide effect (optional, can be removed if strictly manual is preferred)
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 8000);
        return () => clearInterval(timer);
    }, [itemsToShow]);


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
                    fontWeight: 800,
                    textAlign: 'center',
                    mb: 2,
                    color: brand.ink,
                    fontSize: { xs: '2.2rem', md: '3rem' },
                }}
            >
                What our clients say
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    textAlign: 'center',
                    mb: { xs: 5, md: 7 },
                    maxWidth: '52ch',
                    mx: 'auto',
                    px: 2,
                    textAlign: 'center',
                    fontSize: { xs: '1.05rem', md: '1.15rem' },
                    color: brand.steel
                }}
            >
                Hear directly from our clients about their experiences and the results
                we've delivered.
            </Typography>

            {/* Carousel Container */}
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 1200,
                    mx: 'auto',
                    position: 'relative',
                    px: { xs: 2, md: 8 }, // Space for arrows
                }}
            >
                {/* Navigation Arrows (Desktop) */}
                {!isMobile && (
                    <>
                        <IconButton
                            onClick={prevSlide}
                            sx={{
                                position: 'absolute',
                                left: 0,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 2,
                                color: customTheme.palette.secondary.main,
                                '&:hover': { bgcolor: 'rgba(0,0,0,0.05)' }
                            }}
                        >
                            <ArrowBackIosNewIcon fontSize="large" />
                        </IconButton>
                        <IconButton
                            onClick={nextSlide}
                            sx={{
                                position: 'absolute',
                                right: 0,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 2,
                                color: customTheme.palette.secondary.main,
                                '&:hover': { bgcolor: 'rgba(0,0,0,0.05)' }
                            }}
                        >
                            <ArrowForwardIosIcon fontSize="large" />
                        </IconButton>
                    </>
                )}

                {/* Slides Track */}
                <Box
                    sx={{
                        display: 'flex',
                        overflow: 'hidden',
                        width: '100%',
                    }}
                >
                    <motion.div
                        animate={{ x: `-${currentIndex * 100}%` }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        style={{
                            display: 'flex',
                            width: '100%',
                        }}
                    >
                        {/* Group testimonials into chunks based on itemsToShow */}
                        {Array.from({ length: Math.ceil(testimonials.length / itemsToShow) }).map((_, groupIndex) => {
                            const groupItems = testimonials.slice(
                                groupIndex * itemsToShow,
                                groupIndex * itemsToShow + itemsToShow
                            );

                            return (
                                <Box
                                    key={groupIndex}
                                    sx={{
                                        minWidth: '100%',
                                        display: 'flex',
                                        gap: 3,
                                        px: 1,
                                    }}
                                >
                                    {groupItems.map((testimonial, index) => (
                                        <Paper
                                            key={index}
                                            elevation={0}
                                            sx={{
                                                flex: 1,
                                                borderRadius: '20px',
                                                p: { xs: 3, md: 5 },
                                                bgcolor: brand.stone,
                                                border: `1px solid ${brand.stone}`,
                                                position: 'relative',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                                minHeight: 320,
                                                transition: 'border-color 0.25s ease',
                                                '&:hover': {
                                                    borderColor: brand.ink,
                                                }
                                            }}
                                        >
                                            <Box>
                                                {/* Stars */}
                                                <Box sx={{ display: 'flex', gap: 0.5, mb: 2 }}>
                                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                        <Box
                                                            key={i}
                                                            component="span"
                                                            sx={{
                                                                color: brand.ink,
                                                                fontSize: 18,
                                                            }}
                                                        >
                                                            ★
                                                        </Box>
                                                    ))}
                                                </Box>

                                                {/* Text */}
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        color: brand.ink,
                                                        fontSize: '1.1rem',
                                                        lineHeight: 1.6,
                                                        mb: 4,
                                                        position: 'relative',
                                                        zIndex: 1,
                                                    }}
                                                >
                                                    {testimonial.text}
                                                </Typography>
                                            </Box>

                                            {/* Bottom Section */}
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 'auto', position: 'relative', zIndex: 1 }}>
                                                {/* Author */}
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                    <Avatar
                                                        src={testimonial.avatar}
                                                        sx={{ width: 50, height: 50, border: `2px solid ${brand.paper}` }}
                                                    />
                                                    <Box>
                                                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: brand.ink, lineHeight: 1.2 }}>
                                                            {testimonial.name}
                                                        </Typography>
                                                        <Typography
                                                            variant="caption"
                                                            sx={{ color: brand.steel, fontSize: '0.85rem' }}
                                                        >
                                                            {testimonial.role}
                                                        </Typography>
                                                    </Box>
                                                </Box>

                                                {/* Quote Icon */}
                                                <FormatQuoteIcon
                                                    sx={{
                                                        fontSize: '4rem',
                                                        color: 'rgba(0,0,0,0.08)',
                                                        transform: 'rotate(180deg)',
                                                        position: 'absolute',
                                                        right: -10,
                                                        bottom: -10,
                                                    }}
                                                />
                                            </Box>
                                        </Paper>
                                    ))}
                                </Box>
                            );
                        })}
                    </motion.div>
                </Box>

                {/* Dots Pagination */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <Box
                            key={i}
                            onClick={() => goToSlide(i)}
                            sx={{
                                width: 10,
                                height: 10,
                                borderRadius: '50%',
                                bgcolor: currentIndex === i ? brand.ink : brand.line,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    bgcolor: customTheme.palette.secondary.main,
                                    transform: 'scale(1.2)'
                                }
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default ClientTestimonials;
