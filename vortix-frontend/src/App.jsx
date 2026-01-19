import { useState } from 'react'
import HomePage from './components/HomePage'
import ServicesPage from './components/ServicesPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigateToPage = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="app-container">
      {currentPage === 'home' && <HomePage onNavigate={navigateToPage} />}
      {currentPage === 'services' && <ServicesPage onNavigate={navigateToPage} />}
    </div>
  )
}

export default App

