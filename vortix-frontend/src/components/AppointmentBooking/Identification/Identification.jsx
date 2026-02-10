import { useState, useEffect } from 'react'
import './Identification.css'

function Identification({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('create') // 'create' ou 'login'
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    birthDate: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [reservationTime, setReservationTime] = useState(594) // 9:54 em segundos

  // Dados do agendamento (simulados)
  const appointmentData = {
    date: '14 de Outubro',
    time: '10:30',
    day: 'Segunda-feira',
    specialty: 'Consulta Cardiológica',
    duration: '45 min',
    professional: 'Dr. Roberto Silva',
    specialtyDetail: 'Cardiologista',
    crm: 'CRM 123456',
    location: 'Unidade Centro - Sala 302',
    address: 'Av. Paulista, 1000 - São Paulo'
  }

  // Timer de pré-reserva
  useEffect(() => {
    const interval = setInterval(() => {
      setReservationTime(prev => {
        if (prev <= 0) return 0
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (activeTab === 'create' && !agreeTerms) {
      alert('Você precisa concordar com os termos para continuar')
      return
    }
    // Lógica de submissão aqui
    onNavigate?.('confirmation')
  }

  const handleFormSubmit = () => {
    const form = document.getElementById(activeTab === 'create' ? 'create-form' : 'login-form')
    if (form) {
      form.requestSubmit()
    }
  }

  return (
    <div className="identification">
      {/* Main Content */}
      <main className="identification-main">
        <div className="identification-container">
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
              Identifique-se para garantir seu horário com segurança.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="progress-indicator">
            <div className="progress-steps">
              <div className="progress-step progress-step-completed">
                <div className="step-number">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="step-label">Especialidade</span>
              </div>
              <div className="progress-step progress-step-completed">
                <div className="step-number">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="step-label">Profissional</span>
              </div>
              <div className="progress-step progress-step-completed">
                <div className="step-number">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="step-label">Data e Hora</span>
              </div>
              <div className="progress-step progress-step-active">
                <div className="step-number">4</div>
                <span className="step-label">Identificação</span>
              </div>
              <div className="progress-step">
                <div className="step-number">5</div>
                <span className="step-label">Confirmação</span>
              </div>
            </div>
          </div>

          <div className="identification-content-wrapper">
            {/* Left Panel */}
            <div className="identification-left-panel">
              {/* Auth Tabs */}
              <div className="auth-tabs">
                <button
                  className={`auth-tab ${activeTab === 'create' ? 'auth-tab-active' : ''}`}
                  onClick={() => setActiveTab('create')}
                >
                  Criar conta
                </button>
                <button
                  className={`auth-tab ${activeTab === 'login' ? 'auth-tab-active' : ''}`}
                  onClick={() => setActiveTab('login')}
                >
                  Entrar
                </button>
              </div>

              {/* Form */}
              {activeTab === 'create' ? (
                <form id="create-form" className="auth-form" onSubmit={handleSubmit}>
                  <div className="form-header">
                    <h2 className="form-title">Nova conta</h2>
                    <p className="form-description">
                      Preencha seus dados para criar seu perfil de paciente.
                    </p>
                  </div>

                  <div className="form-fields">
                    {/* Nome Completo */}
                    <div className="form-field">
                      <label className="field-label">Nome Completo</label>
                      <div className="input-wrapper">
                        <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M4 18C4 15 7 13 10 13C13 13 16 15 16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <input
                          type="text"
                          name="fullName"
                          className="form-input"
                          placeholder="Ex: Maria Silva"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    {/* E-mail */}
                    <div className="form-field">
                      <label className="field-label">E-mail</label>
                      <div className="input-wrapper">
                        <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 5L10 10L17 5M3 5H17V15H3V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <input
                          type="email"
                          name="email"
                          className="form-input"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Celular */}
                    <div className="form-field">
                      <label className="field-label">Celular <span className="optional">(Opcional)</span></label>
                      <div className="input-wrapper">
                        <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 2H5C3.89543 2 3 2.89543 3 4V16C3 17.1046 3.89543 18 5 18H15C16.1046 18 17 17.1046 17 16V4C17 2.89543 16.1046 2 15 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 14H10.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <input
                          type="tel"
                          name="phone"
                          className="form-input"
                          placeholder="(00) 00000-0000"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {/* Data de Nascimento */}
                    <div className="form-field">
                      <label className="field-label">Data de Nascimento</label>
                      <div className="input-wrapper">
                        <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M3 8H17M7 2V6M13 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <input
                          type="date"
                          name="birthDate"
                          className="form-input"
                          value={formData.birthDate}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Senha */}
                    <div className="form-field">
                      <label className="field-label">Senha</label>
                      <div className="input-wrapper">
                        <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="9" width="14" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M6 9V6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          className="form-input"
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Confirmar Senha */}
                    <div className="form-field">
                      <label className="field-label">Confirmar Senha</label>
                      <div className="input-wrapper">
                        <button
                          type="button"
                          className="input-icon-button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {showConfirmPassword ? (
                              <>
                                <path d="M2 2L18 18M8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10C8 11.1046 8.89543 12 10 12C10.5304 12 11.0391 11.7893 11.4142 11.4142M8.58579 8.58579L11.4142 11.4142M8.58579 8.58579L3.29289 3.29289C2.90237 2.90237 2.90237 2.2692 3.29289 1.87868C3.68342 1.48815 4.31658 1.48815 4.70711 1.87868L8.58579 5.75736M11.4142 11.4142L15.2929 15.2929C15.6834 15.6834 16.3166 15.6834 16.7071 15.2929C17.0976 14.9024 17.0976 14.2692 16.7071 13.8787L12.8284 10M11.4142 11.4142L12.8284 10M12.8284 10L16.7071 6.12132C17.0976 5.7308 17.0976 5.09763 16.7071 4.70711C16.3166 4.31658 15.6834 4.31658 15.2929 4.70711L11.4142 8.58579" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3 10C3 10 5 13 10 13C11.5 13 12.5 12.5 13.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10 7C10 7 12 8 15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </>
                            ) : (
                              <>
                                <path d="M2 10C2 10 4 7 9 7C10.5 7 11.5 7.5 12.5 8M17 10C17 10 15 13 10 13C9.5 13 9 12.9 8.5 12.8M8.5 12.8L12.5 8M8.5 12.8L3.29289 17.7071C2.90237 18.0976 2.90237 18.7308 3.29289 19.1213C3.68342 19.5118 4.31658 19.5118 4.70711 19.1213L8.58579 15.2426M12.5 8L16.3787 4.12132C16.7692 3.7308 17.4024 3.7308 17.7929 4.12132C18.1834 4.51184 18.1834 5.14501 17.7929 5.53553L13.9142 9.41421" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </>
                            )}
                          </svg>
                        </button>
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          className="form-input"
                          placeholder="••••••••"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Terms and Privacy */}
                  <div className="form-terms">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        required
                      />
                      <span>Eu concordo com os Termos de Uso</span>
                    </label>
                    <p className="terms-text">
                      Li e aceito a <a href="#" className="terms-link">Política de Privacidade</a> e o processamento dos meus dados de saúde.
                    </p>
                  </div>

                  {/* Security Banner */}
                  <div className="security-banner">
                    <div className="security-content">
                      <div className="security-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L3 7V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V7L12 2Z" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9 12L11 14L15 10" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="security-text">
                        <div className="security-title">Seus dados estão seguros</div>
                        <div className="security-subtitle">Seguimos rigorosamente a LGPD para proteção médica.</div>
                      </div>
                    </div>
                    <a href="#" className="help-link">
                      Precisa de ajuda?
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M8 6V8M8 10H8.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </a>
                  </div>
                </form>
              ) : (
                <form id="login-form" className="auth-form" onSubmit={handleSubmit}>
                  <div className="form-header">
                    <h2 className="form-title">Entrar</h2>
                    <p className="form-description">
                      Acesse sua conta para continuar o agendamento.
                    </p>
                  </div>

                  <div className="form-fields">
                    <div className="form-field">
                      <label className="field-label">E-mail</label>
                      <div className="input-wrapper">
                        <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 5L10 10L17 5M3 5H17V15H3V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <input
                          type="email"
                          name="email"
                          className="form-input"
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label className="field-label">Senha</label>
                      <div className="input-wrapper">
                        <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="9" width="14" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M6 9V6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          className="form-input"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-footer">
                    <a href="#" className="forgot-password">Esqueceu sua senha?</a>
                  </div>
                </form>
              )}
            </div>

            {/* Right Panel - Summary */}
            <div className="identification-right-panel">
              <div className="appointment-summary-card">
                <div className="summary-header">
                  <h3 className="summary-card-title">Resumo do agendamento</h3>
                  <span className="summary-step-badge">PASSO 4/5</span>
                </div>

                {/* Date & Time */}
                <div className="summary-date-time">
                  <div className="summary-date">
                    <span className="date-month">OUT</span>
                    <span className="date-day">14</span>
                  </div>
                  <div className="summary-time-info">
                    <div className="time-display">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      {appointmentData.time}
                    </div>
                    <div className="day-display">{appointmentData.day}</div>
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="summary-details">
                  <div className="summary-detail-item">
                    <div className="detail-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2L3 7V11C3 16.55 6.84 21.74 10 23C13.16 21.74 17 16.55 17 11V7L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="detail-content">
                      <div className="detail-label">ESPECIALIDADE</div>
                      <div className="detail-value">{appointmentData.specialty}</div>
                      <div className="detail-subvalue">Duração aprox. {appointmentData.duration}</div>
                    </div>
                  </div>

                  <div className="summary-detail-item">
                    <div className="detail-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M4 18C4 15 7 13 10 13C13 13 16 15 16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div className="detail-content">
                      <div className="detail-label">PROFISSIONAL</div>
                      <div className="detail-value">{appointmentData.professional}</div>
                      <div className="detail-subvalue">{appointmentData.specialtyDetail} • {appointmentData.crm}</div>
                    </div>
                  </div>

                  <div className="summary-detail-item">
                    <div className="detail-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 10.5C11.3807 10.5 12.5 9.38071 12.5 8C12.5 6.61929 11.3807 5.5 10 5.5C8.61929 5.5 7.5 6.61929 7.5 8C7.5 9.38071 8.61929 10.5 10 10.5Z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M10 18C13 14 16 11.5 16 8C16 4.5 13.5 2 10 2C6.5 2 4 4.5 4 8C4 11.5 7 14 10 18Z" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    </div>
                    <div className="detail-content">
                      <div className="detail-label">LOCAL</div>
                      <div className="detail-value">{appointmentData.location}</div>
                      <div className="detail-subvalue">{appointmentData.address}</div>
                    </div>
                  </div>
                </div>

                {/* Reservation Timer */}
                <div className="reservation-timer">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <div className="timer-text">
                    Este horário está pré-reservado por <strong>{formatTime(reservationTime)}</strong> minutos. Complete o cadastro para confirmar.
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="map-placeholder">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" fill="#f0f0f0"/>
                    <path d="M20 30L50 20L80 30V70L50 80L20 70V30Z" stroke="#ccc" strokeWidth="2" fill="none"/>
                    <circle cx="50" cy="50" r="3" fill="#2196f3"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="identification-footer">
        <div className="footer-container">
          <button className="btn-back" onClick={() => onNavigate?.('datetime')}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Voltar
          </button>
          <button 
            type="button" 
            className="btn-continue"
            onClick={handleFormSubmit}
          >
            {activeTab === 'create' ? 'Criar conta e continuar' : 'Entrar e continuar'}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </footer>
    </div>
  )
}

export default Identification

