// src/components/Home/index.js
import React from 'react'
import Header from '../Header'
import HeroSection from '../HeroSection'
import DoctorPreview from '../DoctorPreview'
import Footer from '../Footer'
import './index.css'

const Home = () => {
  return (
    <div className="home-container">
      <Header />
     <HeroSection />
      <DoctorPreview />
      <Footer />
    </div>
  )
}

export default Home
