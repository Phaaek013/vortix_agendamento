import { useState } from 'react'
import './ProfessionalSelection.css'

function ProfessionalSelection({ onNavigate }) {
  const [selectedProfessional, setSelectedProfessional] = useState('Dr. Roberto Silva')
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedService] = useState('Consulta Cardiológica - Primeira Vez')

  const professionals = [
    {
      id: 1,
      name: 'Dr. Roberto Silva',
      specialty: 'Cardiologista',
      rating: 4.9,
      reviews: 124,
      nextAvailable: 'Hoje, 14:30',
      gender: 'Masculino',
      image: 'male'
    },
    {
      id: 2,
      name: 'Dra. Ana Souza',
      specialty: 'Cardiologista Intervencionista',
      rating: 5.0,
      reviews: 89,
      nextAvailable: 'Amanhã, 09:00',
      gender: 'Feminino',
      image: 'female'
    },
    {
      id: 3,
      name: 'Dr. Carlos Mendes',
      specialty: 'Cardiologista Pediátrico',
      rating: 4.8,
      reviews: 210,
      nextAvailable: null,
      gender: 'Masculino',
      image: 'male'
    }
  ]

  const filters = ['Todos', 'Hoje', 'Amanhã', 'Feminino', 'Masculino']

  const selectedProf = professionals.find(p => p.name === selectedProfessional)

  return (
    <div className="professional-selection">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <span className="top-bar-text">Agendar: Profissional (Passo 2/5)</span>
        </div>
        <button className="code-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7.5L2.5 10L5 12.5M15 7.5L17.5 10L15 12.5M11.25 4.5L8.75 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <main className="professional-main">
        <div className="professional-container">
          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            <span>Início</span>
            <span className="breadcrumb-separator">›</span>
            <span>Agendar</span>
          </div>

          {/* Title Section */}
          <div className="title-section">
            <h1 className="page-title">Agendar Consulta</h1>
            <p className="page-description">
              Passo 2 de 5: Escolha o especialista ideal para o seu atendimento.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="progress-indicator">
            <div className="progress-steps">
              <div className="progress-step progress-step-completed">
                <div className="step-number">1</div>
                <span className="step-label">Serviço</span>
              </div>
              <div className="progress-step progress-step-active">
                <div className="step-number">2</div>
                <span className="step-label">Profissional</span>
              </div>
              <div className="progress-step">
                <div className="step-number">3</div>
                <span className="step-label">Data e Hora</span>
              </div>
              <div className="progress-step">
                <div className="step-number">4</div>
                <span className="step-label">Dados</span>
              </div>
              <div className="progress-step">
                <div className="step-number">5</div>
                <span className="step-label">Fim</span>
              </div>
            </div>
          </div>

          <div className="content-wrapper">
            {/* Left Content */}
            <div className="left-content">
              {/* Selected Service Card */}
              <div className="selected-service-card">
                <div className="selected-service-label">SERVIÇO SELECIONADO</div>
                <div className="selected-service-content">
                  <div className="selected-service-info">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon-small">
                      <path d="M10 2L3 5V9C3 13.55 6.16 17.74 10 19C13.84 17.74 17 13.55 17 9V5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="10" cy="7" r="1" fill="currentColor"/>
                    </svg>
                    <span>{selectedService}</span>
                  </div>
                  <button className="btn-change-service" onClick={() => onNavigate?.('appointment')}>Trocar serviço</button>
                </div>
              </div>

              {/* Search and Filters */}
              <div className="search-filters-section">
                <div className="search-bar">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon">
                    <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 17.5L13.875 13.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Buscar profissional por nome..." 
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <select className="availability-select">
                  <option>Disponibilidade</option>
                </select>
              </div>

              {/* Category Filters */}
              <div className="category-filters">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    className={`category-filter ${activeFilter === filter ? 'category-filter-active' : ''}`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Any Professional Card */}
              <div className="any-professional-card">
                <div className="any-professional-content">
                  <div className="any-professional-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="19" cy="7" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="any-professional-text">
                    <p className="any-professional-title">Qualquer Profissional</p>
                    <p className="any-professional-description">
                      O horário mais próximo disponível com qualquer especialista da nossa equipe.
                    </p>
                  </div>
                </div>
                <div className="radio-button">
                  <input type="radio" name="professional" />
                </div>
              </div>

              {/* Professionals List */}
              <div className="professionals-list">
                {professionals.map((professional) => (
                  <div
                    key={professional.id}
                    className={`professional-card ${selectedProfessional === professional.name ? 'professional-card-selected' : ''}`}
                    onClick={() => setSelectedProfessional(professional.name)}
                  >
                    {selectedProfessional === professional.name && (
                      <div className="selected-checkmark">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="10" cy="10" r="10" fill="#2196f3"/>
                          <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                    <div className="professional-avatar">
                      {professional.image === 'male' ? (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6 21C6 17 9 14 12 14C15 14 18 17 18 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6 21C6 17 9 14 12 14C15 14 18 17 18 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      )}
                    </div>
                    <div className="professional-info">
                      <h3 className="professional-name">{professional.name}</h3>
                      <p className="professional-specialty">{professional.specialty}</p>
                      <div className="professional-rating">
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill={i < Math.floor(professional.rating) ? "#ffc107" : "none"} xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 1L10.163 5.52786L15 6.23607L11.5 9.47214L12.326 14.2639L8 11.8L3.674 14.2639L4.5 9.47214L1 6.23607L5.837 5.52786L8 1Z" stroke="#ffc107" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          ))}
                        </div>
                        <span className="rating-value">{professional.rating}</span>
                        <span className="reviews-count">({professional.reviews} avaliações)</span>
                      </div>
                      {professional.nextAvailable && (
                        <div className="next-available">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2H4C2.89543 2 2 2.89543 2 4V12C2 13.1046 2.89543 14 4 14H12C13.1046 14 14 13.1046 14 12V4C14 2.89543 13.1046 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 6H14M5 2V6M11 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Próximo: {professional.nextAvailable}</span>
                        </div>
                      )}
                    </div>
                    {selectedProfessional !== professional.name && (
                      <div className="radio-button">
                        <input type="radio" name="professional" />
                      </div>
                    )}
                    <a href="#" className="link-details" onClick={(e) => e.stopPropagation()}>
                      Ver detalhes
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="load-more-section">
                <a href="#" className="link-load-more">Carregar mais profissionais</a>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="right-sidebar">
              <div className="summary-card">
                <div className="summary-header">
                  <h3 className="summary-title">Resumo</h3>
                  <span className="summary-badge">Em andamento</span>
                </div>
                <div className="summary-content">
                  <div className="summary-item">
                    <span className="summary-label">Serviço</span>
                    <div className="summary-value-with-duration">
                      <span>Consulta Cardiológica</span>
                      <span className="summary-duration">30min</span>
                    </div>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Profissional</span>
                    <span className="summary-value">{selectedProf?.name || 'Não selecionado'}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Data e Hora</span>
                    <span className="summary-value">A selecionar no próximo passo</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Valor da consulta</span>
                    <span className="summary-value summary-value-price">R$ 350,00</span>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="info-box">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M10 6V10M10 14H10.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="info-content">
                  <p className="info-title">Dúvida na escolha?</p>
                  <p className="info-text">
                    Selecione 'Qualquer Profissional' para visualizar os horários mais próximos disponíveis na clínica independente do médico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="professional-footer">
        <div className="footer-container">
          <button className="btn-back" onClick={() => onNavigate?.('appointment')}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Voltar
          </button>
          <button className="btn-continue" onClick={() => onNavigate?.('datetime')}>
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

export default ProfessionalSelection

