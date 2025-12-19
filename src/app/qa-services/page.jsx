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
            {/* Logo and Branded Text Section */}
            <Box
                sx={{
                    pt: { xs: 15, sm: 12, md: 15 },
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                    width: '100%',
                }}
            >
                <Box
                    component="img"
                    src="/images/Vihi.png"
                    alt="Vihi Logo"
                    sx={{
                        height: { xs: 40, md: 60 },
                        width: 'auto',
                        objectFit: 'contain',
                    }}
                />
                <Typography
                    sx={{
                        fontFamily: 'var(--font-bitcount)',
                        fontSize: { xs: '1.5rem', md: '2.5rem' },
                        fontWeight: 400,
                        color: '#000',
                        lineHeight: 1,
                    }}
                >
                    QA IT Services
                </Typography>
            </Box>

            {/* Headline and subtext */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    maxWidth: 1200,
                    px: { xs: 2, sm: 4, md: 6, lg: 8 },
                    pt: { xs: 4, sm: 5, md: 6 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mx: 'auto',
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 700,
                        lineHeight: 1.2,
                        fontSize: {
                            xs: '1.8rem',
                            sm: '2.2rem',
                            md: '2.8rem',
                            lg: '3.2rem',
                            xl: '3.6rem',
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
