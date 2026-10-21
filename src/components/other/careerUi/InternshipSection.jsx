'use client';

import React from 'react';
import {
    Box,
    Typography,
    Button,
    Paper,
    Stack,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function InternshipSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ py: 10, px: { xs: 2, md: 4 }, bgcolor: '#fff', width: '100%' }}>
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.9rem', md: '2.6rem' },
                    color: '#111',
                    textAlign: 'center',
                    mb: 6,
                }}
            >
                Internships
            </Typography>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 4, md: 8 },
                        borderRadius: '24px',
                        background: '#000',
                        color: '#fff',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: 'none',
                    }}
                >
                    {/* Decorative Background Icon */}
                    <RocketLaunchIcon
                        sx={{
                            position: 'absolute',
                            right: -20,
                            bottom: -20,
                            fontSize: '200px',
                            opacity: 0.08,
                            transform: 'rotate(-20deg)',
                            color: '#fff',
                        }}
                    />

                    <Stack spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
                        <Box>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: '#A3A3A3',
                                    fontWeight: 600,
                                    letterSpacing: 0,
                                    fontSize: '1rem',
                                }}
                            >
                                Featured program
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 800,
                                    fontSize: { xs: '2rem', md: '3.5rem' },
                                    mt: 1,
                                    lineHeight: 1.1,
                                    color: '#fff',
                                }}
                            >
                                The Vihi Visionary Challenge 2026
                            </Typography>
                        </Box>

                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 500,
                                color: '#A3A3A3',
                                maxWidth: '700px',
                                fontSize: { xs: '1.1rem', md: '1.5rem' },
                                lineHeight: 1.4,
                            }}
                        >
                            Don’t Just Intern. Innovate. Pitch us your idea and build it with our experts.
                        </Typography>

                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={3}
                            alignItems={{ xs: 'stretch', sm: 'center' }}
                        >
                            <Box>
                                <Typography variant="body2" sx={{ color: '#A3A3A3', mb: 0.5, fontWeight: 600 }}>
                                    Application period
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff' }}>
                                    Jan 16 – Jan 30, 2026
                                </Typography>
                            </Box>

                            <Box sx={{ display: { xs: 'none', sm: 'block' }, width: 2, height: 40, bgcolor: '#2E2E2E' }} />

                            <Box>
                                <Typography variant="body2" sx={{ color: '#A3A3A3', mb: 0.5, fontWeight: 600 }}>
                                    Status
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff' }}>
                                    Open for Pitching
                                </Typography>
                            </Box>
                        </Stack>

                        <Box sx={{ pt: 2 }}>
                            <Button
                                component={Link}
                                href="/careers/visionary-challenge"
                                variant="contained"
                                size="large"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    bgcolor: '#fff',
                                    color: '#000',
                                    fontWeight: 700,
                                    px: 5,
                                    py: 2,
                                    borderRadius: '50px',
                                    fontSize: '1.1rem',
                                    textTransform: 'none',
                                    '&:hover': {
                                        bgcolor: '#F1F1EF',
                                    },
                                }}
                            >
                                Learn More & Apply
                            </Button>
                        </Box>
                    </Stack>
                </Paper>
            </motion.div>
        </Box>
    );
}
