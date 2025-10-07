// src/components/providers/MuiThemeProvider.jsx
'use client'; // This marks it as a Client Component

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Bitcount, Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const bitcount = Bitcount({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

// Define your custom Material-UI theme here
const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,      // phones portrait
      sm: 480,    // small phones landscape
      md: 768,    // tablets portrait
      mdl: 820,   // tablets landscape
      lg: 1024,   // tablets landscape / small laptops
      lgl: 1080,  // laptops
      xl: 1440,   // desktops
      xxl: 1920,  // large wide screens
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