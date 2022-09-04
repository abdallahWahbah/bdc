import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import WizardForm from './Components/Wizard/WizardForm';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#f58232',
        contrastText: "#fff"

      },
    },
  });
  return ( // css file: home
    <ThemeProvider theme={theme}>
      <div className='app'>
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<WizardForm />} />
        </Routes>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App