import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1000C1', // Change this to your primary color
    },
    secondary: {
      main: '#1000C1', // Change this to your secondary color
    },
  },
  typography: {
    fontFamily: 'Mulish, sans-serif',
    fontSize: 15, // Change the default font size if needed
    button: {
      fontWeight: 600,
    },
    allVariants: {
      fontSize: '15px',
      color:'#1B1D29',
      fontWeight: 'normal',
    },
    h1: {
      fontWeight: 700,
      fontSize: '20px',
      color: '#1e2538',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.7rem',
    },
    h5: {
      fontWeight: 600,
      fontWeight: '16px',
      fontSize: '1.1rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: 'secondary',
        variant: 'contained',
      },
      styleOverrides: {
        containedSecondary: {
          fontWeight: 600,
          fontSize: '15px',
          borderRadius: '5px',
          textTransform: 'capitalize',
          padding: '10px 20px',
          minWidth: '100px',
          border: '1px solid #0b0087',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontWeight: '400',
          '&.Mui-error': {
            fontSize: '12px',
            marginLeft: 0,
          },
        },
      },
    },
  },
});

export default theme;
