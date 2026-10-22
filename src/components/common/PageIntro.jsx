import { Box, Typography } from '@mui/material';

/**
 * Centered page title (the page's H1) with a short intro line.
 * Matches the hero headings on the Technology, Team and Careers pages.
 */
export default function PageIntro({ title, children }) {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1000,
        mx: 'auto',
        px: { xs: 2, sm: 4 },
        textAlign: 'center',
      }}
    >
      <Typography
        component="h1"
        variant="h2"
        sx={{
          fontWeight: 700,
          lineHeight: 1.2,
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem', xl: '3.6rem' },
          mb: { xs: 1.5, sm: 2 },
        }}
      >
        {title}
      </Typography>
      {children && (
        <Typography
          sx={{
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem', lg: '1.25rem' },
            color: '#222',
            maxWidth: 720,
            mx: 'auto',
          }}
        >
          {children}
        </Typography>
      )}
    </Box>
  );
}
