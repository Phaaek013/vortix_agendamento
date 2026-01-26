import { useState } from 'react'
import './AppointmentBooking.css'

function AppointmentBooking({ onNavigate }) {
  const [selectedService, setSelectedService] = useState('Consulta Geral')
  const [activeTab, setActiveTab] = useState('consultas')
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')

  const services = [
    {
      id: 1,
      name: 'Consulta Geral',
      description: 'Avaliação inicial de sintomas e encaminhamento.',
      duration: '30 min',
      icon: 'stethoscope',
      category: 'Clínico Geral'
    },
    {
      id: 2,
      name: 'Cardiologia',
      description: 'Check-up preventivo e acompanhamento cardíaco.',
      duration: '45 min',
      icon: 'heart',
      category: 'Cardiologia'
    },
    {
      id: 3,
      name: 'Dermatologia',
      description: 'Tratamento de pele, unhas e cabelos.',
      duration: '30 min',
      icon: 'skin',
      category: 'Dermatologia'
    },
    {
      id: 4,
      name: 'Pediatria',
      description: 'Atendimento especializado para crianças.',
      duration: '40 min',
      icon: 'baby',
      category: 'Pediatria'
    }
  ]

  const categories = ['Todos', 'Cardiologia', 'Dermatologia', 'Clínico Geral', 'Pediatria', 'Ortopedia']

  return (
    <div className="appointment-booking">
      {/* Main Content */}
      <main className="appointment-main">
        <div className="appointment-container">
          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            <span>Inicio</span>
            <span className="breadcrumb-separator">/</span>
            <span>Agendar</span>
          </div>

          {/* Title Section */}
          <div className="title-section">
            <h1 className="page-title">Agendar Atendimento</h1>
            <p className="page-description">
              Selecione o serviço que deseja realizar abaixo. Você poderá escolher o profissional e o horário nos próximos passos.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="progress-indicator">
            <div className="progress-label">PASSO 1 DE 5</div>
            <div className="progress-steps">
              <div className="progress-step progress-step-active">
                <div className="step-number">1</div>
                <span className="step-label">Serviço</span>
              </div>
              <div className="progress-step">
                <div className="step-number">2</div>
                <span className="step-label">Profissional</span>
              </div>
              <div className="progress-step">
                <div className="step-number">3</div>
                <span className="step-label">Data & Hora</span>
              </div>
              <div className="progress-step">
                <div className="step-number">4</div>
                <span className="step-label">Dados</span>
              </div>
              <div className="progress-step">
                <div className="step-number">5</div>
                <span className="step-label">Confirmação</span>
              </div>
            </div>
          </div>

          <div className="content-wrapper">
            {/* Left Content */}
            <div className="left-content">
              {/* Tabs */}
              <div className="tabs">
                <button 
                  className={`tab ${activeTab === 'consultas' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('consultas')}
                >
                  Consultas
                </button>
                <button 
                  className={`tab ${activeTab === 'exames' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('exames')}
                >
                  Exames
                </button>
              </div>

              {/* Search Bar */}
              <div className="search-bar">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon">
                  <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 17.5L13.875 13.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input 
                  type="text" 
                  placeholder="Buscar serviço..." 
                  className="search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filters */}
              <div className="category-filters">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`category-filter ${activeFilter === category ? 'category-filter-active' : ''}`}
                    onClick={() => setActiveFilter(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Services Grid */}
              <div className="services-grid">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`service-card ${selectedService === service.name ? 'service-card-selected' : ''}`}
                    onClick={() => setSelectedService(service.name)}
                  >
                    {selectedService === service.name && (
                      <div className="selected-checkmark">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="10" cy="10" r="10" fill="#2196f3"/>
                          <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                    <div className="service-icon">
                      {service.icon === 'stethoscope' && (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 9V2H8V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6 9V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 9H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === 'heart' && (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.84 4.61C20.3292 3.9998 19.7228 3.49864 19.0554 3.12157C18.3879 2.7445 17.6695 2.49829 16.93 2.393C16.1905 2.28771 15.4402 2.32515 14.72 2.503C14.0098 2.68085 13.3427 2.9957 12.75 3.43C12.1573 2.9957 11.4902 2.68085 10.78 2.503C10.0698 2.32515 9.31949 2.28771 8.58 2.393C7.84046 2.49829 7.12208 2.7445 6.45464 3.12157C5.7872 3.49864 5.18076 3.9998 4.67 4.61C4.15428 5.22219 3.74406 5.91853 3.45631 6.67036C3.16856 7.42219 3.00781 8.21953 2.98 9.03C2.98 14.49 8.27 17.75 11.64 19.03C12.0837 19.1974 12.5431 19.2833 13 19.2833C13.4569 19.2833 13.9163 19.1974 14.36 19.03C17.73 17.75 23.02 14.49 23.02 9.03C22.9922 8.21953 22.8314 7.42219 22.5437 6.67036C22.256 5.91853 21.8457 5.22219 21.33 4.61H20.84Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === 'skin' && (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="9" cy="9" r="1.5" fill="currentColor"/>
                          <circle cx="15" cy="9" r="1.5" fill="currentColor"/>
                          <path d="M8 15C8 16.5 9.5 18 12 18C14.5 18 16 16.5 16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      )}
                      {service.icon === 'baby' && (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6 21C6 17 9 14 12 14C15 14 18 17 18 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="9" cy="6" r="1.5" fill="currentColor"/>
                          <circle cx="15" cy="6" r="1.5" fill="currentColor"/>
                        </svg>
                      )}
                    </div>
                    <h3 className="service-card-title">{service.name}</h3>
                    <p className="service-card-description">{service.description}</p>
                    <div className="service-card-duration">{service.duration}</div>
                  </div>
                ))}
              </div>

              {/* Help Section */}
              <div className="help-section">
                <div className="help-content">
                  <p className="help-title">Não encontrou o que procurava?</p>
                  <p className="help-text">Tente buscar por outro termo ou entre em contato conosco.</p>
                </div>
                <button className="btn-help">Fale com atendente</button>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="right-sidebar">
              <div className="summary-card">
                <div className="summary-header">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 2H5C3.89543 2 3 2.89543 3 4V16C3 17.1046 3.89543 18 5 18H15C16.1046 18 17 17.1046 17 16V4C17 2.89543 16.1046 2 15 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 7H17M7 2V7M13 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3 className="summary-title">Resumo do agendamento</h3>
                </div>
                <div className="summary-content">
                  <div className="summary-item">
                    <span className="summary-label">Tipo de Atendimento</span>
                    <span className="summary-value">Consulta</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Serviço Selecionado</span>
                    <div className="summary-value-with-icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill="#4caf50"/>
                        <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{selectedService}</span>
                    </div>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Duração Estimada</span>
                    <span className="summary-value">
                      {services.find(s => s.name === selectedService)?.duration || '30 min'}
                    </span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Valor</span>
                    <span className="summary-value">A consultar</span>
                  </div>
                </div>
                <div className="summary-next-step">
                  <span className="next-step-label">Próximo passo:</span>
                  <p className="next-step-text">Você escolherá o profissional de sua preferência.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="appointment-footer">
        <div className="footer-container">
          <button className="btn-back">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Voltar
          </button>
          <button className="btn-continue" onClick={() => onNavigate?.('professional')}>
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

export default AppointmentBooking

