import { useState } from 'react'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import ServicesPage from './components/ServicesPage/ServicesPage'
import AppointmentBooking from './components/AppointmentBooking/AppointmentBooking'
import ProfessionalSelection from './components/AppointmentBooking/ProfessionalSelection/ProfessionalSelection'
import DateTimeSelection from './components/AppointmentBooking/DateTimeSelection/DateTimeSelection'
import Identification from './components/AppointmentBooking/Identification/Identification'
import Confirmation from './components/AppointmentBooking/Confirmation/Confirmation'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigateToPage = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="app-container">
      <Header currentPage={currentPage} onNavigate={navigateToPage} />
      {currentPage === 'home' && <HomePage onNavigate={navigateToPage} />}
      {currentPage === 'services' && <ServicesPage onNavigate={navigateToPage} />}
      {currentPage === 'appointment' && <AppointmentBooking onNavigate={navigateToPage} />}
      {currentPage === 'professional' && <ProfessionalSelection onNavigate={navigateToPage} />}
      {currentPage === 'datetime' && <DateTimeSelection onNavigate={navigateToPage} />}
      {currentPage === 'identification' && <Identification onNavigate={navigateToPage} />}
      {currentPage === 'confirmation' && <Confirmation onNavigate={navigateToPage} />}
    </div>
  )
}

export default App

