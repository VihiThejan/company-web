import { Box, Typography, Button, Grid } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import theme, { brand, fonts } from '@/theme/theme';

const MotionBox = motion.create(Box);

const Card = ({
  bg,
  color,
  border,
  label,
  labelBg,
  labelClr,
  title,
  subtitle,
  subtitleClr,
  buttonHref,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={buttonHref}
      style={{ textDecoration: 'none', display: 'block', height: '100%' }}
    >
      <MotionBox
        className="hover-lift-shadow"
        sx={{
          background: bg,
          color: color,
          border: border || `1px solid ${bg}`,
          borderRadius: '20px',
          p: { xs: 3, md: 4 },
          height: { xs: 'auto', md: 280 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          cursor: 'pointer',
          overflow: 'hidden',
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <Box>
          <Box
            sx={{
              background: labelBg,
              color: labelClr,
              borderRadius: 50,
              px: 1.5,
              py: 0.5,
              fontSize: '0.9rem',
              fontWeight: 600,
              display: 'inline-block',
              mb: 2,
            }}
          >
            {label}
          </Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              fontStretch: fonts.displayStretch,
              letterSpacing: '-0.02em',
              mb: subtitle ? 1.5 : 2,
              fontSize: { xs: '1.5rem', md: '2.2rem' },
              color: 'inherit',
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                mb: 1,
                fontSize: { xs: '1rem', md: '1.1rem' },
                maxWidth: '44ch',
                color: subtitleClr,
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          style={{
            position: 'absolute',
            bottom: 24,
            right: 24,
            zIndex: 2,
          }}
        >
          <Button
            tabIndex={-1}
            sx={{
              minWidth: 10,
              p: 1.2,
              borderRadius: '50%',
              background: color,
              color: bg,
              boxShadow: 'none',
              transition: 'background 0.2s, color 0.2s',
              pointerEvents: 'none',
            }}
          >
            <ArrowOutwardIcon />
          </Button>
        </motion.div>
      </MotionBox>
    </Link>
  );
};

const CallToActionCards = () => (
  <Box sx={{ width: '100%', py: 2 }}>
    <Grid container spacing={3} justifyContent="center">
      <Grid size={{ xs: 12, md: 6 }}>
        <Card
          label="Careers"
          title="Meet your new team"
          subtitle="Find the next step in your professional journey and collaborate with top industry talent"
          buttonHref="/careers"
          bg={brand.ink}
          color={brand.paper}
          labelBg={brand.paper}
          labelClr={brand.ink}
          subtitleClr={brand.ash}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card
          label="Get in touch"
          title="Consult our specialists"
          subtitle="Book a time to speak directly with an expert and get the guidance you need"
          buttonHref="/contactus"
          bg={brand.paper}
          color={brand.ink}
          border={`1px solid ${brand.ink}`}
          labelBg={brand.ink}
          labelClr={brand.paper}
          subtitleClr={brand.steel}
        />
      </Grid>
    </Grid>
  </Box>
);

export default CallToActionCards;
