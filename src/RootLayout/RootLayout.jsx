import React from 'react'
import Navbar from '../components/Header/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer/Footer'

function RootLayout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout
