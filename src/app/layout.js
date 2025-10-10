import { Inter, Poppins, Bitcount } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Box from '@mui/material/Box';
// Import your new MuiThemeProvider component
import MuiThemeProvider from '@/components/providers/MuiThemeProvider';
import localFont from 'next/font/local';
import ScrollToTopButton from '@/components/common/ScrollToTopButton';

export const metadata = {
  title: 'VIHI IT Solutions',
  description: 'Your solution for IT needs.',
};

export const viewport = {
  themeColor: '#ffc720',
  appleMobileWebAppStatusBarStyle: '#ffc720',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {/* Wrap your entire application content with the MuiThemeProvider */}
        <MuiThemeProvider>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              // Use theme.palette.background.default from the theme.
              // Since layout.js is a Server Component, you can't access theme here directly for styling.
              // You'd typically let the CssBaseline handle the root background, or
              // if you need specific root styling, you might apply a global class
              // or let a client component handle it. For now, let's keep it minimal here.
              backgroundColor: '#fff', // Hardcode for now, or use a global CSS variable if you need this to match your theme background.
            }}
          >
            <Header />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
              }}
            >
              {children}
            </Box>
            <ScrollToTopButton />
            <Footer />
          </Box>
        </MuiThemeProvider>
      </body>
    </html>
  );
}
