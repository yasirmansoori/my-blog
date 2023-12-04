import React from 'react'
import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Components/pages/Homepage'
import Blog1 from './Components/pages/Blog1'
import PageNotFound from './Components/pages/PageNotFound'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/blog1' element={<Blog1 />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
