import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'

const AppRoutes = () => {
  return (
        <div>
            <Routes>
                {/* <Route path='/home' element={<Home/>}  /> */}
                {/* <Route path='/about' element={<About/>}  /> */}
                {/* <Route path='/login' element={<Login/>}  /> */}
                {/* <Route path="*" element={<Navigate to="/home" />} /> */}
            </Routes>
        </div>
  )
}

export default AppRoutes