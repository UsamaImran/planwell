import { DM_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { PRIMARY_BLUE, RAIL_GRAY_TRAIL_COLOR } from '@/styles/colors';

export const roboto = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['DM Sans, sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_BLUE,
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'DM Sans, sans-serif',
      fontWeight: '700',
    },
    body1: {
      fontSize: '20px',
    },
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        rail: {
          color: RAIL_GRAY_TRAIL_COLOR,
          height: 6,
          borderRadius: 4,
        },
      },
    },
  },
});

export default theme;
