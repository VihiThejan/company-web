// Archivo is self-hosted (via Fontsource) so builds never depend on Google Fonts.
import '@fontsource-variable/archivo/wdth.css';
import './globals.css';
import './hover-effects.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Box from '@mui/material/Box';
import MuiThemeProvider from '@/components/providers/MuiThemeProvider';
import ScrollToTopButton from '@/components/common/ScrollToTopButton';
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  organizationJsonLd,
} from '@/lib/seo';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: '#000000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }} suppressHydrationWarning={true}>
        {/* Company details for Google (structured data) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
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
