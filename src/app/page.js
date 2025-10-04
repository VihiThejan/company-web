import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HomePage from '@/components/ui/HomePage';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 100px)', // Adjust based on header/footer height if needed
      }}
    >
      <HomePage/>
      
    </Box>
  );
}
