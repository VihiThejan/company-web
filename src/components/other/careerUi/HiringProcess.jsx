'use client';

import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CustomTheme from '@/theme/theme';
import theme from '@/theme/theme';

const steps = [
  {
    number: '01',
    title: 'Application',
    description:
      'Submit your resume and portfolio through our online application form.',
  },
  {
    number: '02',
    title: 'Screening',
    description:
      'Our HR team reviews your qualifications and shortlists suitable candidates.',
  },
  {
    number: '03',
    title: 'First Interview',
    description:
      'Showcase your skills and problem-solving abilities in a technical discussion.',
  },
  {
    number: '04',
    title: 'Final Interview',
    description:
      'Meet with our leadership team to discuss your fit and future at the company.',
  },
  {
    number: '05',
    title: 'Offer & Onboarding',
    description:
      'Receive your offer letter and begin your journey with our amazing team.',
  },
];

export default function HiringProcessAligned() {
  // Fixed left column width for numbers (keeps the vertical line centered on circles)
  const LEFT_COL_WIDTH = 72; // px
  const CIRCLE_SIZE = 48; // px
  const LINE_OFFSET = LEFT_COL_WIDTH / 2; // center of the left column
  const stepSpacing = 6; // spacing between steps in px (from Stack spacing)

  return (
    <Box
      sx={{
        py: 2,
        px: { xs: 0, md: 8 },
        bgcolor: '#fff',
        width: '100%',
      }}
    >
      {/* SECTION HEADER */}
      <Grid container spacing={6} alignItems="stretch">
        {/* Left Column: Title + Description */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            // on mobile, keep header centered above steps
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.8rem', md: '2.25rem' },
              }}
            >
              Our Hiring Process
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mx: { xs: 2, md: 0 },
                textAlign: 'justify'
              }}
            >
              From initial application to onboarding, our hiring process is
              designed to be transparent, equitable, and tailored to identify
              top talent while providing a positive candidate experience.
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ position: 'relative', width: '100%' }}>
            {/* vertical line centered on the number column, ending at the last circle */}
            <Box
              sx={{
                position: 'absolute',
                left: `${LINE_OFFSET}px`,
                top: `${CIRCLE_SIZE / 2}px`, // start at center of first circle
                height: `calc(100% - ${CIRCLE_SIZE}px - ${
                  (steps.length - 1) * stepSpacing
                }px)`, // adjust height to end at last circle
                width: '2px',
                bgcolor: theme.palette.primary.main,
                zIndex: 0,
              }}
            />

            {/* Steps: each row contains a fixed-left column for number and a flexible content column */}
            <Stack spacing={6}>
              {steps.map((step) => (
                <Box
                  key={step.number}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    // ensures each row has consistent alignment
                    minHeight: `${CIRCLE_SIZE}px`,
                  }}
                >
                  {/* LEFT: fixed width column for number */}
                  <Box
                    sx={{
                      width: `${LEFT_COL_WIDTH}px`,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      // keep number column above the vertical line (so circle overlays it)
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: `${CIRCLE_SIZE}px`,
                        height: `${CIRCLE_SIZE}px`,
                        borderRadius: '50%',
                        background: theme.palette.primary.main,
                        color: '#fff',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 0 6px #fff',
                      }}
                    >
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        {step.number}
                      </Typography>
                    </Box>
                  </Box>

                  {/* RIGHT: content */}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ mb: 0.5 }}>
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        maxWidth: 600,
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
