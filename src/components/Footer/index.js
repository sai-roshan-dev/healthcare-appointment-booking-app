import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import './index.css'

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-section brand">
        <h2>HealthCare+</h2>
        <p>Your trusted platform for online doctor appointments.</p>
      </div>

      <div className="footer-section links">
        <h3>Quick Links</h3>
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/bookings">Bookings</Link>
      </div>

      <div className="footer-section contact">
        <h3>Contact Us</h3>
        <p>Email: contact@healthcare.com</p>
        <p>Phone: +91 98765 43210</p>
      </div>

      <div className="footer-section social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </footer>
  )
}

export default Footer
