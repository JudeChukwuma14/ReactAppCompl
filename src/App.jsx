import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Error from './Pages/Error'
import Navbar from './components/Navbar'
import Offers from './Pages/Offers'

export const App = () => {
  let text = "My div"
  let number = 99
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='offers' element={<Offers />} />
        <Route path='offers/:id' element={<Offers />} />
        <Route path='*' element={<Error />}/>
      </Routes>

    </BrowserRouter>
  )
}
