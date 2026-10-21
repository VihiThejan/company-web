'use client';

import theme, { brand, fonts } from '@/theme/theme';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const GridCard = ({ title, bgImage, LinkTo }) => {
  const router = useRouter();
  const handleNavigate = () => {
    if (LinkTo) router.push(LinkTo);
  };

  const card = (
    <Box
      className="hover-lift-shadow hover-image-container"
      sx={{
        // background: bgImage
        //   ? `url(${bgImage}) center/cover, linear-gradient(135deg, #1a237e 60%, #0d133d 100%)`
        //   : 'linear-gradient(135deg, #1a237e 60%, #0d133d 100%)',
        background: brand.ink,
        borderRadius: '20px',
        p: { xs: 3, md: 4 },
        minHeight: { xs: 320, sm: 380, md: 460 },
        color: theme.palette.secondary.light,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: LinkTo ? 'pointer' : 'default',
      }}
      role={LinkTo ? 'button' : undefined}
      tabIndex={LinkTo ? 0 : undefined}
      onClick={LinkTo ? handleNavigate : undefined}
      onKeyDown={(e) => {
        if (LinkTo && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleNavigate();
        }
      }}
    >
      {/* Background Image with Hover Effect */}
      {bgImage && (
        <Box
          component="img"
          src={bgImage}
          alt={title}
          className="hover-image mono"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />
      )}

      {/* Overlay to ensure text readability */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.35) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 2,
          zIndex: 2,
          position: 'relative',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            fontStretch: fonts.displayStretch,
            fontSize: { xs: '1.9rem', md: '2.6rem' },
            color: brand.paper,
          }}
        >
          {title}
        </Typography>
        <Box
          aria-hidden="true"
          sx={{
            width: 48,
            height: 48,
            flexShrink: 0,
            borderRadius: '50%',
            bgcolor: brand.paper,
            color: brand.ink,
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <ArrowOutwardIcon />
        </Box>
      </Box>

      {/* Optional: Overlay for effect - Removed as we have a better one above */}
      {/* <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.54)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      /> */}
    </Box>
  );

  // Return the card element directly (using router push on click) instead of
  // rendering an <a> tag. This prevents the browser from showing the destination
  // URL in the status bar on hover while still supporting keyboard and click navigation.
  return card;
};

export default GridCard;
