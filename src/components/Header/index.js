import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserMd, FaHistory, FaClinicMedical } from 'react-icons/fa'
import './index.css'

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">
          <FaClinicMedical className="icon" />
          <span className="logo-text">HealthCare+</span>
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/doctors" className="nav-item">
          <FaUserMd className="icon" />
          <span className="link-text">Doctors</span>
        </Link>
        <Link to="/bookings" className="nav-item">
          <FaHistory className="icon" />
          <span className="link-text">Bookings</span>
        </Link>
      </nav>
    </header>
  )
}

export default Header
