import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import 'bootstrap/dist/css/bootstrap.css';

import 'normalize.css'
import '../assets/css/main.css'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      { children }
      <Footer />
    </div>
  )
}

export default Layout
