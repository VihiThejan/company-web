import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-poppins), sans-serif',
    fontFamilySecondary: 'var(--font-inter), sans-serif',
    fontFamilyThird: 'var(--font-roboto), sans-serif',
  },
  palette: {
    primary: {
      main: '#ffe600',
    },
    secondary: {
      main: '#303030ff',
    },
  },
});

export default theme;
