import { Box, Typography, Button, Grid } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import theme from '@/theme/theme';

const MotionBox = motion(Box);

const Card = ({
  bg,
  color,
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
        sx={{
          background: bg,
          color: color,
          borderRadius: 2,
          p: { xs: 3, md: 4 },
          height: { xs: 'auto', md: 280 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: 2,
          position: 'relative',
          cursor: 'pointer',
          overflow: 'hidden',
          transition: 'box-shadow 0.2s',
          '&:hover': { boxShadow: 6 },
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
              fontSize: '0.95rem',
              fontWeight: 500,
              display: 'inline-block',
              mb: 2,
            }}
          >
            {label}
          </Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: subtitle ? 1 : 2,
              fontSize: { xs: '1.3rem', md: '2rem' },
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
                fontSize: { xs: '1rem', md: '1.15rem' },
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
              background: '#fff',
              color: '#000',
              boxShadow: 1,
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
          title="Meet Your New Team"
          subtitle="Find the next step in your professional journey and collaborate with top industry talent"
          buttonHref="/careers"
          bg={`${theme.palette.secondary.main}`}
          color={theme.palette.secondary.light}
          labelBg={theme.palette.secondary.light}
          labelClr={theme.palette.secondary.main}
          subtitleClr={theme.palette.secondary.light}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card
          label="Get in touch"
          title="Consult Our Specialists"
          subtitle="Book a time to speak directly with an expert and get the guidance you need"
          buttonHref="/contactus"
          bg={theme.palette.primary.main}
          color={theme.palette.secondary.main}
          labelBg={theme.palette.secondary.main}
          labelClr={theme.palette.secondary.light}
          subtitleClr={theme.palette.secondary.main}
        />
      </Grid>
    </Grid>
  </Box>
);

export default CallToActionCards;
