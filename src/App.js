import { Grid,Box } from '@mui/material'
import React from 'react'
import { Navbar,Banner,Projects ,Contact ,Footer } from './Components'
const App = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Projects/>
      <Contact/>
      <Footer/>  
    </>
  )
}

export default App