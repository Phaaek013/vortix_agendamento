import { useState } from 'react'
import './DateTimeSelection.css'

function DateTimeSelection({ onNavigate }) {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2, 12)) // Março 2024
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 2, 12))
  const [selectedTime, setSelectedTime] = useState('09:00')
  const [activeTimeTab, setActiveTimeTab] = useState('manha') // 'manha' ou 'tarde'

  // Dados do agendamento (simulados)
  const appointmentData = {
    service: 'Cardiologia Check-up',
    professional: 'Dr. Silva',
    crm: 'CRM/SP123456',
    duration: '30 min',
    location: 'Unidade Paulista',
    address: 'Av. Paulista, 1000 - Sala 304',
    value: 'R$ 350,00',
    type: 'Presencial'
  }

  // Horários disponíveis
  const morningSlots = ['08:00', '08:30', '09:00', '09:30', '10:00', '11:00', '11:30']
  const afternoonSlots = ['13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00']
  const unavailableSlots = ['10:30'] // Horários indisponíveis

  // Função para obter o primeiro dia do mês
  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1)
  }

  // Função para obter o último dia do mês
  const getLastDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0)
  }

  // Função para gerar os dias do calendário
  const getCalendarDays = () => {
    const firstDay = getFirstDayOfMonth(currentDate)
    const lastDay = getLastDayOfMonth(currentDate)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - startDate.getDay()) // Começar no domingo

    const days = []
    const current = new Date(startDate)

    // Gerar 42 dias (6 semanas)
    for (let i = 0; i < 42; i++) {
      days.push(new Date(current))
      current.setDate(current.getDate() + 1)
    }

    return days
  }

  // Navegação do calendário
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  // Verificar se uma data é do mês atual
  const isCurrentMonth = (date) => {
    return date.getMonth() === currentDate.getMonth()
  }

  // Verificar se uma data está selecionada
  const isSelected = (date) => {
    return date.toDateString() === selectedDate.toDateString()
  }

  // Formatar data para exibição
  const formatDate = (date) => {
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return `${days[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]}`
  }

  // Formatar mês/ano
  const formatMonthYear = (date) => {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return `${months[date.getMonth()]} ${date.getFullYear()}`
  }

  const calendarDays = getCalendarDays()
  const currentTimeSlots = activeTimeTab === 'manha' ? morningSlots : afternoonSlots

  return (
    <div className="date-time-selection">
      {/* Main Content */}
      <main className="date-time-main">
        <div className="date-time-container">
          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            <span>Início</span>
            <span className="breadcrumb-separator">/</span>
            <span>Agendar</span>
          </div>

          {/* Title Section */}
          <div className="title-section">
            <h1 className="page-title">Agendar</h1>
            <p className="page-description">
              Escolha o melhor dia e horário para seu atendimento.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="progress-indicator-simple">
            <span className="progress-text">Passo 3 de 5</span>
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: '60%' }}></div>
            </div>
          </div>

          <div className="date-time-content-wrapper">
            {/* Left Panel */}
            <div className="date-time-left-panel">
              {/* Doctor/Service Info */}
              <div className="doctor-service-info">
                <div className="doctor-avatar">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#e3f2fd"/>
                    <circle cx="20" cy="16" r="6" fill="#2196f3"/>
                    <path d="M8 32C8 28 12 26 20 26C28 26 32 28 32 32" fill="#2196f3"/>
                  </svg>
                </div>
                <div className="doctor-info-text">
                  <div className="doctor-specialty">Cardiologia • Dr. Silva</div>
                  <div className="doctor-duration">30 min estimado</div>
                </div>
                <button className="btn-change">Trocar</button>
              </div>

              {/* Calendar */}
              <div className="calendar-section">
                <div className="calendar-header">
                  <button className="calendar-nav-btn" onClick={goToPreviousMonth}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <h3 className="calendar-month-year">{formatMonthYear(currentDate)}</h3>
                  <button className="calendar-nav-btn" onClick={goToNextMonth}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                <div className="calendar-weekdays">
                  {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, index) => (
                    <div key={index} className="calendar-weekday">{day}</div>
                  ))}
                </div>

                <div className="calendar-grid">
                  {calendarDays.map((day, index) => {
                    const isCurrentMonthDay = isCurrentMonth(day)
                    const isSelectedDay = isSelected(day)
                    
                    return (
                      <button
                        key={index}
                        className={`calendar-day ${!isCurrentMonthDay ? 'calendar-day-other-month' : ''} ${isSelectedDay ? 'calendar-day-selected' : ''}`}
                        onClick={() => isCurrentMonthDay && setSelectedDate(new Date(day))}
                        disabled={!isCurrentMonthDay}
                      >
                        {day.getDate()}
                      </button>
                    )
                  })}
                </div>

                <div className="calendar-footer-link">
                  <button className="link-next-available">Próximo horário disponível</button>
                </div>
              </div>

              {/* Time Selection */}
              <div className="time-selection-section">
                <div className="time-selection-header">
                  <div className="selected-date-display">
                    {formatDate(selectedDate)}
                    <span className="timezone">GMT-3</span>
                  </div>
                </div>

                <div className="time-tabs">
                  <button
                    className={`time-tab ${activeTimeTab === 'manha' ? 'time-tab-active' : ''}`}
                    onClick={() => setActiveTimeTab('manha')}
                  >
                    Manhã
                  </button>
                  <button
                    className={`time-tab ${activeTimeTab === 'tarde' ? 'time-tab-active' : ''}`}
                    onClick={() => setActiveTimeTab('tarde')}
                  >
                    Tarde
                  </button>
                </div>

                <div className="time-slots-grid">
                  {currentTimeSlots.map((time) => {
                    const isUnavailable = unavailableSlots.includes(time)
                    const isSelected = selectedTime === time
                    
                    return (
                      <button
                        key={time}
                        className={`time-slot ${isUnavailable ? 'time-slot-unavailable' : ''} ${isSelected ? 'time-slot-selected' : ''}`}
                        onClick={() => !isUnavailable && setSelectedTime(time)}
                        disabled={isUnavailable}
                      >
                        {isSelected && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="time-slot-check">
                            <circle cx="8" cy="8" r="8" fill="#2196f3"/>
                            <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {time}
                      </button>
                    )
                  })}
                </div>

                {/* High Demand Warning */}
                <div className="high-demand-warning">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="warning-icon">
                    <path d="M10 2L2 18H18L10 2Z" fill="#FFC107" stroke="#FFA000" strokeWidth="1.5"/>
                    <path d="M10 7V11M10 13H10.01" stroke="#FFA000" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <div className="warning-text">
                    Alta procura para este dia. Recomendamos concluir o agendamento em até 5 minutos para garantir seu horário.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Summary */}
            <div className="date-time-right-panel">
              <div className="appointment-summary-card">
                <h3 className="summary-card-title">Resumo do agendamento</h3>

                {/* Service */}
                <div className="summary-item">
                  <div className="summary-item-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 2L2 7L10 12L18 7L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 13L10 18L18 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 10L10 15L18 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="summary-item-content">
                    <div className="summary-item-label">Serviço</div>
                    <div className="summary-item-value">{appointmentData.service}</div>
                    <div className="summary-item-subvalue">{appointmentData.type}</div>
                  </div>
                </div>

                {/* Professional */}
                <div className="summary-item">
                  <div className="summary-item-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M4 18C4 15 7 13 10 13C13 13 16 15 16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="summary-item-content">
                    <div className="summary-item-label">Profissional</div>
                    <div className="summary-item-value">{appointmentData.professional}</div>
                    <div className="summary-item-subvalue">{appointmentData.crm}</div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="summary-item">
                  <div className="summary-item-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M3 8H17M7 2V6M13 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="summary-item-content">
                    <div className="summary-item-label">Data & Hora</div>
                    <div className="summary-item-value">
                      {selectedDate.getDate()} de {formatMonthYear(selectedDate).split(' ')[0]}, {selectedTime}
                    </div>
                    <div className="summary-item-status">
                      <span className="status-dot"></span>
                      <span>Disponível</span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="summary-item">
                  <div className="summary-item-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 10.5C11.3807 10.5 12.5 9.38071 12.5 8C12.5 6.61929 11.3807 5.5 10 5.5C8.61929 5.5 7.5 6.61929 7.5 8C7.5 9.38071 8.61929 10.5 10 10.5Z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M10 18C13 14 16 11.5 16 8C16 4.5 13.5 2 10 2C6.5 2 4 4.5 4 8C4 11.5 7 14 10 18Z" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div className="summary-item-content">
                    <div className="summary-item-label">Local</div>
                    <div className="summary-item-value">{appointmentData.location}</div>
                    <div className="summary-item-subvalue">{appointmentData.address}</div>
                  </div>
                </div>

                {/* Value */}
                <div className="summary-value-section">
                  <div className="summary-value-label">Valor da consulta</div>
                  <div className="summary-value-amount">{appointmentData.value}</div>
                  <div className="summary-value-note">Pagamento no próximo passo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="date-time-footer">
        <div className="footer-container">
          <button className="btn-back" onClick={() => onNavigate?.('professional')}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Voltar
          </button>
          <button className="btn-continue" onClick={() => onNavigate?.('identification')}>
            Continuar
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </footer>
    </div>
  )
}

export default DateTimeSelection

