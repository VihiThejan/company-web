// src/components/providers/MuiThemeProvider.jsx
'use client'; // This marks it as a Client Component

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { brand, fonts } from '@/theme/theme';

// Headlines use Archivo at its widest setting to echo the logo's wordmark.
const display = {
  fontFamily: fonts.family,
  fontStretch: fonts.displayStretch,
  color: brand.ink,
  letterSpacing: '-0.015em',
};

const appTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xss: 380, // phones portrait
      sm: 480, // small phones landscape
      smm: 667,
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
    mode: 'light',
    // Mirrors src/theme/theme.js so components reading the palette through
    // useTheme() and those importing the theme module get the same values.
    primary: {
      main: brand.ink,
      dark: brand.inkSoft,
      option: brand.inkSoft,
      contrastText: brand.paper,
    },
    secondary: {
      main: brand.ink,
      option: brand.inkSoft,
      lowLight: brand.stone,
      midLight: brand.line,
      light: brand.paper,
      contrastText: brand.paper,
    },
    background: {
      default: brand.paper,
      paper: brand.paper,
    },
    text: {
      primary: brand.ink,
      secondary: brand.steel,
    },
    divider: brand.line,
  },
  typography: {
    fontFamily: fonts.family,
    h1: { ...display, fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.08 },
    h2: { ...display, fontSize: '3rem', fontWeight: 800, lineHeight: 1.12 },
    h3: { ...display, fontSize: '2rem', fontWeight: 750, lineHeight: 1.18 },
    h4: { ...display, fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.25 },
    h5: { fontSize: '1.25rem', fontWeight: 600, color: brand.ink, lineHeight: 1.35 },
    h6: { fontSize: '1.15rem', fontWeight: 600, color: brand.ink, lineHeight: 1.4 },
    subtitle1: { fontSize: '1.15rem', color: brand.ink },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.65,
      color: brand.ink,
    },
    body2: {
      fontSize: '0.9rem',
      lineHeight: 1.6,
      color: brand.steel,
    },
    body3: {
      fontSize: '1rem',
      lineHeight: 1.65,
      color: brand.steel,
    },
    button: { fontSize: '0.95rem', fontWeight: 600, textTransform: 'none' },
    caption: { fontSize: '0.8rem', color: brand.steel },
    overline: { letterSpacing: '0.04em', textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: fonts.family,
          backgroundColor: brand.paper,
          color: brand.ink,
        },
        '::selection': { background: brand.ink, color: brand.paper },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 999,
          fontWeight: 600,
          '&.Mui-focusVisible': {
            outline: `2px solid ${brand.ink}`,
            outlineOffset: 3,
          },
        },
        contained: {
          backgroundColor: brand.ink,
          color: brand.paper,
          '&:hover': { backgroundColor: brand.inkSoft },
        },
        outlined: {
          borderColor: brand.ink,
          color: brand.ink,
          '&:hover': { backgroundColor: brand.ink, color: brand.paper, borderColor: brand.ink },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 600 },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: brand.ink },
        },
      },
    },
  },
});

export default function MuiThemeProvider({ children }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
