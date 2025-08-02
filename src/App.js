import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Component Imports
import Home from './components/Home'
import DoctorsList from './components/DoctorsList'
import DoctorDetails from './components/DoctorDetails'
import Appointment from './components/Appointment'
import Confirmation from './components/Confirmation'
import NotFound from './components/NotFound'
import Bookings from './components/Bookings'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<DoctorsList />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
