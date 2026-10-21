// Archivo is self-hosted (via Fontsource) so builds never depend on Google Fonts.
import '@fontsource-variable/archivo/wdth.css';
import './globals.css';
import './hover-effects.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Box from '@mui/material/Box';
import MuiThemeProvider from '@/components/providers/MuiThemeProvider';
import ScrollToTopButton from '@/components/common/ScrollToTopButton';

export const metadata = {
  title: 'VIHI IT Solutions',
  description:
    'Software, cloud, design and digital marketing from VIHI IT Solutions, Sri Lanka.',
  openGraph: {
    title: 'VIHI IT Solutions',
    description:
      'Software, cloud, design and digital marketing from VIHI IT Solutions, Sri Lanka.',
  },
};

export const viewport = {
  themeColor: '#000000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }} suppressHydrationWarning={true}>
        <MuiThemeProvider>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              backgroundColor: 'var(--paper)',
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
