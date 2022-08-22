import { Grid } from '@mui/material';
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import WizardForm from './Components/WizardForm';

const App = () => 
{
    return ( // css file: home
      <div className='app'>
          <Header/>

          <Routes>
            <Route path="/" element={<Navigate to="home"/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/form" element={<WizardForm />}/>
          </Routes>

          <Footer/>
      </div>
    )
}

export default App