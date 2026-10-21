import { createTheme } from '@mui/material/styles';

/*
 * VIHI IT Solutions — monochrome brand tokens.
 *
 * The identity is the logo itself: pure black on white, no accent colour.
 * Contrast comes from inverting whole sections (black panels, white type),
 * not from a highlight hue.
 */
export const brand = {
  ink: '#000000', // logo black — headlines, primary buttons, dark panels
  inkSoft: '#262626', // hover state for ink surfaces
  paper: '#FFFFFF', // page background, type on dark panels
  stone: '#F1F1EF', // quiet surfaces: cards, callouts, form fields
  steel: '#5E5E5E', // secondary text (AA on white and stone)
  ash: '#A3A3A3', // secondary text on black
  line: '#DADAD7', // hairlines and card borders
  lineDark: '#2E2E2E', // hairlines on black
};

export const fonts = {
  // One family, two widths: expanded for display (echoes the wide wordmark),
  // normal for reading.
  family: "'Archivo Variable', 'Archivo', 'Helvetica Neue', Arial, sans-serif",
  displayStretch: '125%',
  textStretch: '100%',
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // phones portrait
      sm: 480, // small phones landscape
      md: 768, // tablets portrait
      mdll: 960, // custom medium-large
      lg: 1024, // tablets landscape / small laptops
      lgl: 1200, // custom large
      xl: 1440, // desktops
      xxl: 1920, // large wide screens
    },
  },
  typography: {
    fontFamily: fonts.family,
    fontFamilySecondary: fonts.family,
    fontFamilyThird: fonts.family,
    body1: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    body2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    button: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: brand.ink,
      option: brand.inkSoft,
      contrastText: brand.paper,
    },
    secondary: {
      main: brand.ink,
      option: brand.inkSoft,
      lowLight: brand.stone,
      midLight: brand.line,
      light: brand.paper,
    },
  },
});

export default theme;
