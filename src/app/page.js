import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// No need for Button import here unless you use it specifically on the homepage

export default function Home() {
  return (
    <Box
      sx={{
        // Remove mx: '100px' if you decide to apply global padding in layout.js main section
        // or keep it if you want page-specific horizontal padding.
        mx: '100px',
        minHeight: 'calc(100vh - 100px)', // Adjust based on header/footer height if needed
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center', // Center text horizontally within the box
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: 'primary.main', // Use theme's primary color
          // The color="#fff" from your original code is now handled by the theme
        }}
        gutterBottom
      >
        🚀Vihi IT Solution Under Maintenance. We will Back Soon..!
      </Typography>
      <Typography variant="h5" color="text.secondary">
        We're working hard to bring you an improved experience.
      </Typography>
    </Box>
  );
}
