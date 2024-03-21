import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '16px 16px',
          fontSize: '17px',
          width: '100%',
          borderRadius: '16px',
          minHeight: '56px',
          textTransform: 'none',
          fontWeight: '600',
          lineHeight: '24px'
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          maxWidth: '100%',
          '& .MuiSnackbarContent-root': {
            backgroundColor: '#fff',
            borderRadius: '24px 24px 0 0',
            padding: '8px',
          },
        },
      },
    },   
  },
});

export default theme;
