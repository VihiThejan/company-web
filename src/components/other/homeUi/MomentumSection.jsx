import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const MomentumSection = () => {
    const theme = useTheme();

    return (
        <Box
            id="momentum-section"
            component="section"
            sx={{
                py: { xs: 8, md: 12 },
                // Background: Gold/Yellow mix White combination
                background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF8E1 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '2rem', md: '3.5rem', lg: '4rem' },
                            lineHeight: 1.2,
                            color: '#000', // Dark text for contrast on light background
                            mb: 2,
                        }}
                    >
                        Engineering enterprise momentum across{' '}
                        <Box
                            component="span"
                            sx={{
                                background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, #eebb00 40%, #000000 100%)`,
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline-block',
                                paddingRight: '5px', // Ensure black text doesn't get cut off
                            }}
                        >
                            every platform, industry and challenge.
                        </Box>
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                            fontSize: { xs: '1.2rem', md: '1.5rem' },
                            color: '#555', // Grey subtext
                            fontWeight: 500,
                            mt: 3,
                        }}
                    >
                        Keeping your core secure, seamless and scalable
                    </Typography>
                </motion.div>
            </Container>
        </Box>
    );
};

export default MomentumSection;
