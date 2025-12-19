import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import './hover-effects.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Box from '@mui/material/Box';
// Import your new MuiThemeProvider component
import MuiThemeProvider from '@/components/providers/MuiThemeProvider';
import localFont from 'next/font/local';
import ScrollToTopButton from '@/components/common/ScrollToTopButton';
import CustomCursor from '@/components/common/CustomCursor';

const bitcount = localFont({
  src: '../../public/fonts/BitcountSingleInk-VariableFont_CRSV,ELSH,ELXP,SZP1,SZP2,XPN1,XPN2,YPN1,YPN2,slnt,wght.ttf',
  variable: '--font-bitcount',
});

export const metadata = {
  title: 'VIHI IT Solutions',
  description: 'Your solution for IT needs.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bitcount.variable}`} style={{ margin: 0 }} suppressHydrationWarning={true}>
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
