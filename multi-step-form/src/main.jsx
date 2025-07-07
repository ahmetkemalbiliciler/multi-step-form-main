import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './index.css'
import App from './App.jsx'

const theme = createTheme({
  typography: {
    fontFamily: 'Ubuntu, sans-serif',
    h1: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 700,
    },
    h7: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Ubuntu, sans-serif',
        },
      },
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
