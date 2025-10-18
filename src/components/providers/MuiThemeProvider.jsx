// src/components/providers/MuiThemeProvider.jsx
'use client'; // This marks it as a Client Component

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Bitcount, Inter, Poppins } from 'next/font/google';
import theme from '@/theme/theme';

const inter = Inter({ subsets: ['latin'] });
const bitcount = Bitcount({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

// Define your custom Material-UI theme here
const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xss: 380, // phones portrait
      sm: 480, // small phones landscape
      md: 768, // tablets portrait
      mdl: 820,
      mdll: 840, // tablets landscape
      lg: 1024, // tablets landscape / small laptops
      lgl: 1080, // laptops
      lgll: 1340,
      xl: 1440, // desktops
      xxl: 1920, // large wide screens
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFD700',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#303030ff',
      secondary: '#747373ff',
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    h1: { fontSize: '3.5rem', fontWeight: 700 },
    h2: { fontSize: '3rem', fontWeight: 700 },
    h3: { fontSize: '2rem', fontWeight: 600 },
    h4: { fontSize: '1.5rem', fontWeight: 600 },
    h5: { fontSize: '1.25rem', fontWeight: 500 },
    h6: { fontSize: '1.15rem', fontWeight: 500 },
    subtitle1: { fontSize: '1.15rem', color: theme.palette.secondary.main },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: theme.palette.secondary.main,
    },
    body2: {
      fontSize: '0.9rem',
      lineHeight: 1.6,
      color: theme.palette.secondary.option,
    },
    body3: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: theme.palette.secondary.midLight,
    },
    button: { fontSize: '0.95rem', fontWeight: 500, textTransform: 'none' },
    caption: { fontSize: '0.8rem', color: theme.palette.secondary.lowLight },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default function MuiThemeProvider({ children }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
