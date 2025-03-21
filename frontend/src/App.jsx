import React from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './Routes/Routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App