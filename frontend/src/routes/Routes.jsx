import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Add from '../pages/Add'
import Edit from '../pages/Edit'

function AppRoutes() {
  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/edit' element={<Edit/>}/>

      </Routes>    
  )
}

export default AppRoutes