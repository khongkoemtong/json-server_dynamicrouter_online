import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import Productpage from './pages/Productpage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/product' element={<Productpage/>}/>
          <Route/>
          <Route/>
        </Routes>

        <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App
