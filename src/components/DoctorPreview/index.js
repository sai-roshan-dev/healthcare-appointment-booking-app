import React from 'react'
import './index.css'

const doctorsList = [
  {
    id: 1,
    name: 'Dr. Ananya Sharma',
    specialty: 'Cardiologist',
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'Dr. Arjun Patel',
    specialty: 'Dermatologist',
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'Dr. Meera Rao',
    specialty: 'Pediatrician',
    imageUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
]

const DoctorPreview = () => {
  return (
    <section className="doctor-preview">
      <h2>Our Top Doctors</h2>
      <div className="doctor-cards">
        {doctorsList.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <img src={doctor.imageUrl} alt={doctor.name} className="doctor-image" />
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <button className="book-btn">Book Now</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DoctorPreview
