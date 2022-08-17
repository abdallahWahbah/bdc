import { AddIcCallOutlined } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Details from './Components/Details';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import WizardForm from './Components/WizardForm';

const App = () => 
{
    return ( // css file: home
      <div className='app'>
        <Header />
          {/* <TextField id="outlined-basic" variant="outlined" type="file"/> */}
          
        {/* <Button sx={{marginTop: "20px"}} variant="contained" component="label" color="primary">
          {" "}
          <input type="file" className='x'/> Upload file

        </Button> */}

        {/* <label for="inputTag" style={{cursor: "pointer"}}>
          Select Image <br/>
          <i class="fa fa-2x fa-camera"></i>
          <input id="inputTag" type="file" style={{display: "none"}}/>
          <br/>
          <span id="imageName" style={{color: "green"}}></span>
        </label> */}
      
        <Routes>
          <Route path="/" element={<Navigate to="home"/>}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/form" element={<WizardForm />}/>
          <Route path='/details' element={<Details />}/>
        </Routes>
        
        <Footer />
      </div>
    )
}

export default App