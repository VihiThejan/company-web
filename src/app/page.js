import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <Box
      sx={{
        mx: '100px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h2"
        sx={{ textAlign: 'center' }}
        color="#fff"
        gutterBottom
      >
        🚀Vihi IT Solution Under Maintenance. We will Back Soon..!
      </Typography>
    </Box>
  );
}
