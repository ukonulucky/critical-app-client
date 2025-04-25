import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomePageComp from '../components/homeComp'

function HomePage() {
  return (
    <div>
        <Navbar />
         <HomePageComp />
      <Footer />
    </div>
  )
}

export default HomePage