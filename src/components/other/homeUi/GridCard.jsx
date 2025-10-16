import theme from "@/theme/theme";
import { Box, Chip, Typography } from "@mui/material";

const GridCard = ({ title, tags, bgImage }) => (
  <Box
    sx={{
      background: bgImage
        ? `url(${bgImage}) center/cover, linear-gradient(135deg, #1a237e 60%, #0d133d 100%)`
        : 'linear-gradient(135deg, #1a237e 60%, #0d133d 100%)',
      borderRadius: 3,
      p: 3,
      minHeight: 460,
      color: '#fff',
      boxShadow: 3,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <Typography
      variant="h3"
      sx={{
        fontWeight: 700,
        mb: 2,
        color: '#fff',
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
            cursor: 'pointer'
          }}
        />
      ))}
    </Box>
    {/* Optional: Overlay for effect */}
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.62)',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  </Box>
);

export default GridCard;