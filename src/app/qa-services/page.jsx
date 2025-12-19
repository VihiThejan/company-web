'use client';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import QAServices from '@/components/other/qaUi/QAServices';
import CallToActionCards from '@/components/other/homeUi/CallToActionCards';
import TeamCard from '@/components/common/TeamCard';

export default function QAServicesPage() {
    return (
        <Box
            sx={{
                width: '100%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                background: '#fff',
            }}
        >
            {/* Headline and subtext */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    maxWidth: 1200,
                    minHeight: {
                        xs: '50vh',
                        sm: '40vh',
                        md: '45vh',
                        lg: '50vh',
                        xl: '60vh',
                    },
                    px: { xs: 2, sm: 4, md: 6, lg: 8 },
                    pt: { xs: 15, sm: 10, md: 12 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mx: 'auto',
                    textAlign: 'center',
                }}
            >
                {/* Branding Section */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 4,
                        gap: 2,
                    }}
                >
                    <Box
                        component="img"
                        src="/images/Vihi.png"
                        alt="Vihi Logo"
                        sx={{
                            height: { xs: 50, md: 70 },
                            width: 'auto',
                            objectFit: 'contain',
                        }}
                    />
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography
                            sx={{
                                fontFamily: 'var(--font-bitcount)',
                                fontSize: { xs: '1.8rem', md: '2.4rem' },
                                fontWeight: 800,
                                lineHeight: 1,
                                color: '#1a1a1a',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                            }}
                        >
                            Vihi IT
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'var(--font-bitcount)',
                                fontSize: { xs: '1.2rem', md: '1.6rem' },
                                fontWeight: 600,
                                lineHeight: 1,
                                color: '#444',
                                textTransform: 'uppercase',
                                mt: 0.5,
                                letterSpacing: '4px',
                            }}
                        >
                            Solutions
                        </Typography>
                    </Box>
                </Box>
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 700,
                        lineHeight: 1.2,
                        fontSize: {
                            xs: '1.8rem', // very small phones
                            sm: '2.2rem', // normal phones
                            md: '2.8rem', // tablets
                            lg: '3.2rem', // laptops
                            xl: '3.6rem', // large desktops
                        },
                        mb: { xs: 1.5, sm: 2 },
                        px: { xs: 1, sm: 0 },
                    }}
                >
                    Ensuring Excellence Through Rigorous Quality Assurance
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 400,
                        lineHeight: 1.4,
                        fontSize: {
                            xs: '0.95rem',
                            sm: '1.05rem',
                            md: '1.15rem',
                            lg: '1.25rem',
                            xl: '1.35rem',
                        },
                        color: '#222',
                        mb: { xs: 2.5, sm: 3 },
                        maxWidth: { xs: '90%', sm: '85%', md: '70%' },
                    }}
                >
                    We deliver bug-free, high-performance, and secure software solutions
                    that guarantee a flawless user experience.
                </Typography>
            </Box>

            {/* Hero image */}
            <Box
                className="hover-image-container"
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: {
                        xs: '220px', // phones
                        sm: '280px', // small tablets
                        md: '380px', // tablets landscape
                        lg: '450px', // desktops
                        xl: '520px', // large monitors
                    },
                    overflow: 'hidden',
                }}
            >
                <Box
                    component="img"
                    className="hover-image"
                    src="/images/technology-img/tech-hero.png" // Ideally replace with QA specific hero image
                    alt="QA Team collaborating"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.7)',
                    }}
                />
            </Box>
            <Box className="hover-section" sx={{ pt: { xs: 6, sm: 8, md: 10 }, px: { xs: 2, sm: 4 } }}>
                <QAServices />
            </Box>
            <Box
                className="hover-section"
                sx={{
                    width: '100%',
                    px: { xs: 2, sm: 4 },
                    pt: { xs: 0, md: 10 },
                    pb: 2,
                }}
            >
                <TeamCard />
            </Box>
            <Box className="hover-section" sx={{ width: '100%', px: { xs: 2, sm: 4 } }}>
                <CallToActionCards />
            </Box>
        </Box>
    );
}
