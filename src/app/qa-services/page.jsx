'use client';

import React from 'react';
import Box from '@mui/material/Box';
import QAServices from '@/components/other/qaUi/QAServices';
import CallToActionCards from '@/components/other/homeUi/CallToActionCards';
import TeamCard from '@/components/common/TeamCard';
import { motion } from 'framer-motion';

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
            <Box className="hover-section" sx={{ pt: { xs: 15, sm: 18, md: 20 }, px: { xs: 2, sm: 4, md: 8 }, width: '100%' }}>
                <QAServices />
            </Box>

            {/* Wave Divider before Team */}
            <Box sx={{ width: '100%', overflow: 'hidden', lineHeight: 0, mb: -1, position: 'relative', height: { xs: '50px', sm: '80px', md: '100px' } }}>
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 120L1440 120L1440 0C1440 0 1140 120 720 120C300 120 0 0 0 0L0 120Z"
                        fill="#fafafa"
                    />
                </svg>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    px: { xs: 2, sm: 4 },
                    pt: 10,
                    pb: 10,
                    background: '#fafafa'
                }}
            >
                <TeamCard />
            </Box>

            <Box sx={{ width: '100%', px: { xs: 2, sm: 4, md: 8 }, py: 10, background: '#fff' }}>
                <CallToActionCards />
            </Box>
        </Box>
    );
}
