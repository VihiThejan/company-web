'use client';

import theme from '@/theme/theme';
import { Box, Chip, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const GridCard = ({ title, tags, bgImage, LinkTo }) => {
  const router = useRouter();
  const handleNavigate = () => {
    if (LinkTo) router.push(LinkTo);
  };

  const card = (
    <Box
      sx={{
        background: bgImage
          ? `url(${bgImage}) center/cover, linear-gradient(135deg, #1a237e 60%, #0d133d 100%)`
          : 'linear-gradient(135deg, #1a237e 60%, #0d133d 100%)',
        borderRadius: 3,
        p: 3,
        minHeight: { xs: 320, sm: 380, md: 460 },
        color: theme.palette.secondary.light,
        boxShadow: 3,
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
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: theme.palette.secondary.light,
          zIndex: 2,
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1.5,
          zIndex: 2,
        }}
      >
        {tags.map((tag, idx) => (
          <Chip
            key={idx}
            label={tag}
            sx={{
              background: theme.palette.primary.main,
              color: theme.palette.secondary.option,
              fontWeight: 500,
              fontSize: '1rem',
              borderRadius: 50,
              px: 2,
              py: 1,
              boxShadow: 1,
              cursor: 'pointer',
            }}
          />
        ))}
      </Box>
      {/* Optional: Overlay for effect */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.54)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
    </Box>
  );

  // Return the card element directly (using router push on click) instead of
  // rendering an <a> tag. This prevents the browser from showing the destination
  // URL in the status bar on hover while still supporting keyboard and click navigation.
  return card;
};

export default GridCard;
