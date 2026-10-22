'use client';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    Box,
    Typography,
    Breadcrumbs,
    Grid,
    Button,
    Card,
    CardContent,
    Divider,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import theme from '@/theme/theme';
import industriesData from '@/lib/industriesData';

// Icons
import SecurityIcon from '@mui/icons-material/Security';
import SyncLockIcon from '@mui/icons-material/SyncLock';
import GavelIcon from '@mui/icons-material/Gavel';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import HotelIcon from '@mui/icons-material/Hotel';
import LandscapeIcon from '@mui/icons-material/Landscape';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentsIcon from '@mui/icons-material/Payments';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PublicIcon from '@mui/icons-material/Public';
import PolicyIcon from '@mui/icons-material/Policy';
import CloudIcon from '@mui/icons-material/Cloud';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IndustryCTA from '@/components/common/IndustryCTA';


export default function IndustryDetailPage() {
    const { slug } = useParams();
    const industry = industriesData.find((i) => i.slug === slug);
    const cusTheme = useTheme();
    const isMobile = useMediaQuery(cusTheme.breakpoints.down('sm'));
    const router = useRouter();

    if (!industry) {
        return (
            <Box sx={{ py: 10, textAlign: 'center' }}>
                <Typography variant="h5">Industry not found</Typography>
            </Box>
        );
    }

    // Industry-specific icon sets
    const industryIcons = {
        finance: {
            challenges: [<GavelIcon />, <SecurityIcon />, <SyncLockIcon />],
            services: [
                <AccountBalanceIcon />,
                <PaymentsIcon />,
                <CurrencyExchangeIcon />,
            ],
        },
        tourism: {
            challenges: [<TravelExploreIcon />, <HotelIcon />, <LandscapeIcon />],
            services: [<TravelExploreIcon />, <HotelIcon />, <PublicIcon />],
        },
        government: {
            challenges: [<PolicyIcon />, <PublicIcon />, <SecurityIcon />],
            services: [<AccountBalanceIcon />, <CloudIcon />, <GavelIcon />],
        },
    };

    const selectedIcons = industryIcons[slug] || industryIcons.finance;

    return (
        <Box
            sx={{
                bgcolor: '#ffffffff',
                minHeight: '100vh',
                pt: { xs: 18, md: 15, lg: 18 },
                pb: 4,
            }}
        >
            {isMobile ? (
                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Button
                        startIcon={<ArrowBackIcon />}
                        onClick={() => router.back()}
                        sx={{
                            my: 3,
                            px: { xs: 3, md: 10 },
                            mb: 3,
                            color: '#333',
                            textTransform: 'none',
                            fontWeight: 600,
                            fontSize: '1.3rem',
                            '&:hover': { color: '#000' },
                        }}
                    >
                        Industries
                    </Button>
                </Box>
            ) : (
                <Box sx={{ px: { xs: 3, md: 10 }, mb: 3 }}>
                    <Breadcrumbs aria-label="breadcrumb" separator="›">
                        <Link
                            href="/industries"
                            style={{ textDecoration: 'none', color: '#555' }}
                        >
                            Industries
                        </Link>
                        <Typography color="text.primary" sx={{ fontWeight: 600 }}>
                            {industry.title}
                        </Typography>
                    </Breadcrumbs>
                </Box>
            )}

            {/* Hero Section */}
            <Box
                sx={{
                    px: { xs: 3, md: 10 },
                    textAlign: 'center',
                    mb: 6,
                }}
            >
                <Typography
                  component="h1"
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        color: theme.palette.secondary.main,
                        mb: 2,
                        fontSize: { xs: '2rem', md: '2.7rem' },
                    }}
                >
                    {industry.title}
                </Typography>

                <Typography
                    variant="subtitle1"
                    sx={{
                        maxWidth: 1000,
                        mx: 'auto',
                        color: '#555',
                        lineHeight: 1.8,
                        mb: 4,
                        textAlign: { xs: 'justify', lg: 'center' },
                    }}
                >
                    {industry.longDescription}
                </Typography>
            </Box>

            {/* Industry Image */}
            <Box sx={{ px: { xs: 3, md: 10 }, mb: 8 }}>
                <motion.div
                    initial={{ y: 30 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Box
                        component="img"
                        src={industry.image}
                        alt={industry.title}
                        sx={{
                            width: '100%',
                            height: { xs: 240, md: 420 },
                            objectFit: 'cover',
                            borderRadius: 4,
                            boxShadow: 'none',
                        }}
                    />
                </motion.div>
            </Box>

            {/* Main Content */}
            <Box sx={{ px: { xs: 3, md: 10 } }}>
                {/* Key Challenges Section */}
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 700,
                        color: theme.palette.secondary.main,
                        mb: 3,
                    }}
                >
                    Key Challenges We Tackle in {industry.title}
                </Typography>

                <Grid container spacing={3} sx={{ mb: 6 }}>
                    {[
                        'Regulatory Compliance',
                        'Cybersecurity Threats',
                        'Legacy Systems Modernization',
                    ].map((challenge, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, lgl: 4 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card
                                    sx={{
                                        p: 3,
                                        borderRadius: 3,
                                        boxShadow: 'none',
                                        outline: '1px solid #DADAD7',
                                        outlineOffset: '-1px',
                                        display: 'flex',
                                        height: { xs: '250px', md: '320px', lg: '250px' },
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        background: '#fff',
                                        textAlign: 'center',
                                        gap: 1.5,
                                        '&:hover': {
                                            outlineColor: '#000',
                                            transform: 'translateY(-5px)',
                                        },
                                        transition: '0.3s',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: '50%',
                                            bgcolor: theme.palette.primary.main,
                                            color: '#fff',
                                            '& svg': { color: '#fff' },
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mb: 3,
                                        }}
                                    >
                                        {selectedIcons.challenges[index]}
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.secondary.main,
                                            fontSize: '1.1rem',
                                        }}
                                    >
                                        {challenge}
                                    </Typography>
                                    <Typography sx={{ color: '#555', fontSize: '0.95rem' }}>
                                        We address complex {challenge.toLowerCase()} challenges with
                                        tailored, secure, and efficient solutions.
                                    </Typography>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* Solutions & Services Section */}
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 700,
                        color: theme.palette.secondary.main,
                        mb: 3,
                    }}
                >
                    Our Tailored Solutions & Services
                </Typography>
                <Grid container spacing={3} sx={{ mb: 6 }}>
                    {industry.services.map((service, index) => (
                        <Grid size={{ xs: 12, sm: 6, lgl: 4 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card
                                    sx={{
                                        p: 3,
                                        borderRadius: 3,
                                        height: { xs: '280px', md: '350px', lg: '280px' },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        gap: 1.5,
                                        boxShadow: 'none',
                                        outline: '1px solid #DADAD7',
                                        outlineOffset: '-1px',
                                        background: '#fff',
                                        '&:hover': {
                                            outlineColor: '#000',
                                            transform: 'translateY(-5px)',
                                        },
                                        transition: '0.3s',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: '50%',
                                            bgcolor: theme.palette.primary.main,
                                            color: '#fff',
                                            '& svg': { color: '#fff' },
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mb: 3,
                                        }}
                                    >
                                        {
                                            selectedIcons.services[
                                            index % selectedIcons.services.length
                                            ]
                                        }
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.secondary.main,
                                            fontSize: '1.05rem',
                                        }}
                                    >
                                        {service}
                                    </Typography>
                                    <Typography sx={{ color: '#555', fontSize: '0.95rem' }}>
                                        Learn how our {service.toLowerCase()} drives innovation,
                                        efficiency, and compliance.
                                    </Typography>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* Highlights & Outcomes Section */}
                <Grid container spacing={5} sx={{ mt: 4, mb: 10 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                color: theme.palette.secondary.main,
                                mb: 3,
                            }}
                        >
                            Key Highlights
                        </Typography>
                        <Box>
                            {industry.highlights?.map((highlight, hIndex) => (
                                <Box
                                    key={hIndex}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        mb: 2,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: theme.palette.primary.main,
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
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                backgroundColor: '#F1F1EF',
                                p: { xs: 3, md: 4 },
                                borderRadius: 3,
                                boxShadow: 'none',
                                height: '100%',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 800,
                                    fontSize: '0.85rem',
                                    mb: 3,
                                    color: '#1a1a1a',
                                }}
                            >
                                Value Delivered / Outcome
                            </Typography>
                            <Box>
                                {industry.outcomes?.map((outcome, oIndex) => (
                                    <Box key={oIndex} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Box
                                            sx={{
                                                width: 22,
                                                height: 22,
                                                borderRadius: '50%',
                                                backgroundColor: '#000',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mr: 1.5,
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: '#fff',
                                                    fontWeight: 'bold',
                                                    fontSize: '0.8rem',
                                                }}
                                            >
                                                ✔
                                            </Typography>
                                        </Box>
                                        <Typography
                                            sx={{
                                                fontSize: '1.05rem',
                                                color: '#1a1a1a',
                                                fontWeight: 600,
                                            }}
                                        >
                                            {outcome}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 5 }} />

                <IndustryCTA />
            </Box>
        </Box>
    );
}
