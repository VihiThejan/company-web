import Box from '@mui/material/Box';
import HomePage from '@/components/ui/HomePage';
import { pageMetadata, DEFAULT_DESCRIPTION } from '@/lib/seo';

export const metadata = pageMetadata({
  description: DEFAULT_DESCRIPTION,
  path: '/',
});

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 100px)', // Adjust based on header/footer height if needed
      }}
    >
      <HomePage />
    </Box>
  );
}
