import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Book Your Healthcare Appointments Easily</h1>
        <p className="hero-subtitle">Access top doctors and manage your bookings in one place.</p>
        <Link to="/doctors" className="hero-btn">Find Doctors</Link>
      </div>
      <div className="hero-image">
        <img
  src="https://images.unsplash.com/photo-1588776814546-ec7ab8c32e97?auto=format&fit=crop&w=800&q=80"
  alt="Doctor consultation"
/>
      </div>
    </section>
  )
}

export default Hero
