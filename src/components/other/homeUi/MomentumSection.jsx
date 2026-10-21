import React from 'react';
import { Box, Typography } from '@mui/material';
import { brand, fonts } from '@/theme/theme';

const MomentumSection = () => {
    return (
        <Box
            id="momentum-section"
            component="section"
            sx={{
                px: { xs: 3, md: 6, lg: 8 },
                py: { xs: 9, md: 14 },
                backgroundColor: brand.paper,
                borderBottom: `1px solid ${brand.line}`,
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    fontWeight: 800,
                    fontStretch: fonts.displayStretch,
                    fontSize: { xs: '1.9rem', md: '3rem', xl: '3.75rem' },
                    lineHeight: 1.08,
                    letterSpacing: '-0.025em',
                    color: brand.ink,
                    maxWidth: '22ch',
                }}
            >
                Engineering enterprise momentum across every platform, industry
                and challenge.
            </Typography>

            <Typography
                sx={{
                    fontSize: { xs: '1.05rem', md: '1.25rem' },
                    color: brand.steel,
                    fontWeight: 500,
                    mt: { xs: 3, md: 4 },
                    maxWidth: '40ch',
                }}
            >
                Keeping your core secure, seamless and scalable.
            </Typography>
        </Box>
    );
};

export default MomentumSection;
