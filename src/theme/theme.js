import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // phones portrait
      sm: 480, // small phones landscape
      md: 768, // tablets portrait
      lg: 1024, // tablets landscape / small laptops
      xl: 1440, // desktops
      xxl: 1920, // large wide screens
    },
  },
  typography: {
    fontFamily: 'var(--font-poppins), sans-serif',
    fontFamilySecondary: 'var(--font-inter), sans-serif',
    fontFamilyThird: 'var(--font-roboto), sans-serif',
  },
  palette: {
    primary: {
      main: '#ffc720',
      option: '#e4ab02ff',
    },
    secondary: {
      main: '#303030ff',
    },
  },
});

export default theme;
