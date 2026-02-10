import { useState } from 'react'
import './Confirmation.css'

function Confirmation({ onNavigate }) {
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [earlyNotification, setEarlyNotification] = useState(false)

  // Dados do agendamento (simulados)
  const appointmentData = {
    service: 'Consulta Cardiológica',
    duration: '30 min',
    description: 'Avaliação de rotina e check-up.',
    professional: 'Dr. Roberto Silva',
    specialty: 'Cardiologista',
    crm: 'CRM125458',
    date: '14 Out, 2023',
    time: '14:30 - 15:00',
    location: 'Unidade Paulista',
    address: 'Av. Paulista, 1000 - Sala 42 São Paulo - SP',
    patient: {
      name: 'Ana Souza',
      initials: 'AS',
      phone: '(11) 99999-9999',
      email: 'ana.souza@email.com'
    },
    code: 'LIF-8823',
    value: 'R$ 350,00',
    paymentType: 'Particular',
    paymentMethod: 'Pagamento no local',
    status: 'Pendente'
  }

  const handleConfirm = () => {
    setIsConfirmed(true)
  }

  return (
    <div className="confirmation">
      {/* Main Content */}
      <main className="confirmation-main">
        <div className="confirmation-container">
          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            <span>Início</span>
            <span className="breadcrumb-separator">›</span>
            <span>Agendar</span>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-active">Confirmação</span>
          </div>

          {/* Title Section */}
          <div className="title-section">
            <h1 className="page-title">Confirmar agendamento</h1>
            <p className="page-description">
              Revise os detalhes do seu agendamento abaixo antes de confirmar. Último passo!
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
                <span className="step-label">Serviço</span>
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
                <span className="step-label">Data</span>
              </div>
              <div className="progress-step progress-step-completed">
                <div className="step-number">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="step-label">Identificação</span>
              </div>
              <div className="progress-step progress-step-active">
                <div className="step-number">5</div>
                <span className="step-label">Confirmação</span>
              </div>
            </div>
          </div>

          <div className="confirmation-content-wrapper">
            {/* Left Panel */}
            <div className="confirmation-left-panel">
              {!isConfirmed ? (
                <>
                  {/* Appointment Details Card */}
                  <div className="details-card">
                    <div className="details-card-header">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M3 10H21M7 4V10M17 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <h2 className="details-card-title">Detalhes do Agendamento</h2>
                    </div>

                    <div className="details-content">
                      {/* Service */}
                      <div className="detail-row">
                        <div className="detail-label">SERVIÇO</div>
                        <div className="detail-value-group">
                          <div className="detail-value-with-badge">
                            <span className="detail-value">{appointmentData.service}</span>
                            <span className="detail-badge">{appointmentData.duration}</span>
                          </div>
                          <div className="detail-description">{appointmentData.description}</div>
                        </div>
                      </div>

                      {/* Professional */}
                      <div className="detail-row">
                        <div className="detail-label">PROFISSIONAL</div>
                        <div className="detail-value-group">
                          <div className="detail-value-with-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
                              <path d="M4 18C4 15 7 13 10 13C13 13 16 15 16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            <span className="detail-value">{appointmentData.professional}</span>
                          </div>
                          <div className="detail-description">{appointmentData.specialty} • {appointmentData.crm}</div>
                        </div>
                      </div>

                      {/* Date & Time */}
                      <div className="detail-row">
                        <div className="detail-label">DATA E HORA</div>
                        <div className="detail-value-group">
                          <div className="detail-value-with-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="3" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                              <path d="M3 8H17M7 2V6M13 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            <span className="detail-value">{appointmentData.date}</span>
                          </div>
                          <div className="detail-time">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                              <path d="M8 4V8L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            {appointmentData.time}
                          </div>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="detail-row">
                        <div className="detail-label">LOCAL</div>
                        <div className="detail-value-group">
                          <div className="detail-value-with-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 10.5C11.3807 10.5 12.5 9.38071 12.5 8C12.5 6.61929 11.3807 5.5 10 5.5C8.61929 5.5 7.5 6.61929 7.5 8C7.5 9.38071 8.61929 10.5 10 10.5Z" stroke="currentColor" strokeWidth="1.5"/>
                              <path d="M10 18C13 14 16 11.5 16 8C16 4.5 13.5 2 10 2C6.5 2 4 4.5 4 8C4 11.5 7 14 10 18Z" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                            <span className="detail-value">{appointmentData.location}</span>
                          </div>
                          <div className="detail-description">{appointmentData.address}</div>
                        </div>
                      </div>

                      {/* Patient */}
                      <div className="detail-row">
                        <div className="detail-label">PACIENTE</div>
                        <div className="detail-value-group">
                          <div className="detail-value-with-avatar">
                            <div className="patient-avatar">{appointmentData.patient.initials}</div>
                            <span className="detail-value">{appointmentData.patient.name}</span>
                          </div>
                          <div className="detail-contact">
                            {appointmentData.patient.phone} - {appointmentData.patient.email}
                            <button className="btn-edit">Editar</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Early Notification Toggle */}
                  <div className="early-notification-card">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        checked={earlyNotification}
                        onChange={(e) => setEarlyNotification(e.target.checked)}
                        className="toggle-input"
                      />
                      <span className="toggle-slider"></span>
                      <span className="toggle-text">
                        Quero adiantar se abrir vaga
                      </span>
                    </label>
                    <p className="toggle-description">
                      Se um horário anterior ficar disponível com este profissional, notificaremos você por SMS/WhatsApp
                    </p>
                  </div>

                  {/* Policies */}
                  <div className="policies-section">
                    <h3 className="policies-title">POLÍTICAS DE AGENDAMENTO</h3>
                    <div className="policies-list">
                      <div className="policy-item">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="policy-icon policy-icon-success">
                          <path d="M20 6L9 17L4 12" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className="policy-text">
                          Você pode cancelar ou reagendar sem custos até 24 horas antes do horário marcado.
                        </p>
                      </div>
                      <div className="policy-item">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="policy-icon policy-icon-warning">
                          <circle cx="12" cy="12" r="10" stroke="#ff9800" strokeWidth="2"/>
                          <path d="M12 6V12L16 14" stroke="#ff9800" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <p className="policy-text">
                          Recomendamos chegar com 15 minutos de antecedência para preenchimento de ficha cadastral.
                        </p>
                      </div>
                      <div className="policy-item">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="policy-icon policy-icon-info">
                          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#2196f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 2V8H20" stroke="#2196f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className="policy-text">
                          Não esqueça de trazer um documento com foto e sua carteirinha do convênio (se aplicável).
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="action-buttons">
                    <button className="btn-back" onClick={() => onNavigate?.('identification')}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Voltar
                    </button>
                    <a href="#" className="link-change-time">Alterar data e horário</a>
                    <button className="btn-confirm" onClick={handleConfirm}>
                      Confirmar Agendamento
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>

                  {/* Help Section */}
                  <div className="help-section">
                    <p className="help-text">Teve algum problema ou precisa de ajuda especial?</p>
                    <button className="btn-help">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M7 7C7 8.65685 8.34315 10 10 10C11.6569 10 13 8.65685 13 7C13 5.34315 11.6569 4 10 4C8.34315 4 7 5.34315 7 7Z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M6 15C6 13 8 12 10 12C12 12 14 13 14 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      Falar com Atendimento
                    </button>
                  </div>
                </>
              ) : (
                /* Success State */
                <div className="success-state">
                  <div className="success-box">
                    <div className="success-icon">
                      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="32" r="32" fill="#4caf50"/>
                        <path d="M20 32L28 40L44 24" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="success-title">Agendamento Confirmado!</h2>
                    <p className="success-message">Enviamos os detalhes para seu e-mail</p>
                    <div className="appointment-code">Código do agendamento #{appointmentData.code}</div>
                  </div>

                  <div className="success-actions">
                    <button className="btn-success-action">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M3 8H17M7 2V6M13 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      Add. Calendário
                    </button>
                    <button className="btn-success-action">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 2V6M15 2V6M3 6H17M3 6V16C3 17.1046 3.89543 18 5 18H15C16.1046 18 17 17.1046 17 16V6M3 6H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 12H13M7 15H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      Imprimir
                    </button>
                  </div>

                  <button className="btn-go-to-appointments">
                    Ir para Meus Agendamentos
                  </button>
                </div>
              )}
            </div>

            {/* Right Panel - Summary */}
            <div className="confirmation-right-panel">
              <div className="final-summary-card">
                <h3 className="summary-card-title">Resumo Final</h3>

                <div className="summary-item">
                  <div className="summary-label">SERVIÇO</div>
                  <div className="summary-value">{appointmentData.service}</div>
                  <div className="summary-subvalue">{appointmentData.paymentType}</div>
                </div>

                <div className="summary-item">
                  <div className="summary-label">DATA</div>
                  <div className="summary-value">{appointmentData.date}, {appointmentData.time.split(' - ')[0]}</div>
                </div>

                <div className="summary-item">
                  <div className="summary-label">TOTAL ESTIMADO</div>
                  <div className="summary-value-large">{appointmentData.value}</div>
                  <div className="summary-subvalue">{appointmentData.paymentMethod}</div>
                </div>

                <div className="summary-item">
                  <div className="summary-label">Status</div>
                  <span className="status-badge status-pending">{appointmentData.status}</span>
                </div>

                <div className="summary-terms">
                  <p className="terms-text">
                    Ao confirmar, você concorda com os <a href="#" className="terms-link">Termos de Uso</a> da LifeMed. Você poderá gerenciar este agendamento em sua conta.
                  </p>
                </div>

                <div className="summary-security">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2L3 7V11C3 16.55 6.84 21.74 10 23C13.16 21.74 17 16.55 17 11V7L10 2Z" stroke="#4caf50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 10L9 12L13 8" stroke="#4caf50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="security-text">Seus dados estão protegidos e seguros.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Confirmation

