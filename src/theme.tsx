import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const colorPalette = {
  main: '#e3d5ca',
  dark: '#d5bdaf',
  light: '#f5ebe0',
  accent: '#b5838d',
  translucent: '#edede9',
};

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: colorPalette.main,
      dark: colorPalette.dark,
      light: colorPalette.light,
      contrastText: colorPalette.translucent,
    },
    secondary: {
      main: colorPalette.accent,
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: colorPalette.accent,
          '&:hover': {
            backgroundColor: colorPalette.dark,
            color: colorPalette.accent,
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            color: colorPalette.translucent,
            backgroundColor: colorPalette.accent,
          },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          color: colorPalette.translucent,
          backgroundColor: colorPalette.accent,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: colorPalette.light,
          '&.MuiTableRow-hover': {
            '&:hover': {
              backgroundColor: colorPalette.main,
            },
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: colorPalette.dark,
            color: colorPalette.accent,
          },
        },
      },
    },
  },
  spacing: 8,
});

export default theme;
