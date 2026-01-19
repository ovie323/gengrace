import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainHome from './UI/HOME/MainHome'
import Mainabout from './UI/ABOUT/Mainabout'
import Mainproduct from './UI/PRODUCT/Mainproduct'
import MainContact from './UI/CONTACT/MainContact'
import Header from './Constant/Header'
import Footer from './Constant/Footer'
import MainTrack from './UI/TRACK/MainTrack'
import { SearchProvider } from './UI/Context/Searchcontext'
import { CartProvider } from './UI/Context/CartContext'

function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/Maintrack" element={<MainTrack />} />
            <Route path="/Track2/:id" element={<MainTrack />} />
            <Route path="/Mainproduct" element={<Mainproduct />} />
            <Route path="/MainContact" element={<MainContact />} />
            <Route path="/Mainabout" element={<Mainabout />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </SearchProvider>
  )
}

export default App