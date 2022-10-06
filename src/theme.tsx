import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#78909C',
      dark: '#546E7A',
      light: '#e3e9eb',
    },
    secondary: {
      main: '#ff6e40',
    },
    error: {
      main: red.A400,
    },
  },
  spacing: 8,
});

export default theme;
