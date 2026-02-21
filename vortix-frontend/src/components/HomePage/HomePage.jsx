import './HomePage.css'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'

function HomePage({ onNavigate }) {
  return (
    <div className="homepage" id="inicio">
      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          {/* Left Section - Marketing Content */}
          <div className="marketing-section">
            <div className="new-app-badge">NOVO APP DISPONÍVEL</div>
            
            <h1 className="main-title">
              Sua saúde simplificada e organizada.
            </h1>
            
            <p className="main-description">
              Agende consultas e exames com facilidade na Vortix. Cuidamos de você com tecnologia avançada e atendimento humanizado.
            </p>
            
            <div className="action-buttons">
              <button className="btn-primary" onClick={(e) => { e.preventDefault(); onNavigate?.('appointment') }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 2H5C3.89543 2 3 2.89543 3 4V16C3 17.1046 3.89543 18 5 18H15C16.1046 18 17 17.1046 17 16V4C17 2.89543 16.1046 2 15 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 7H17M7 2V7M13 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Agendar agora
              </button>
              <button className="btn-secondary" onClick={(e) => { e.preventDefault(); onNavigate?.('services') }}>
                Ver serviços
              </button>
            </div>
            
            <div className="social-proof">
              <div className="avatars">
                <div className="avatar"></div>
                <div className="avatar"></div>
                <div className="avatar"></div>
              </div>
              <span className="proof-text">+2k Pacientes atendidos este mês</span>
            </div>
          </div>

          {/* Right Section - Quick Scheduling Form */}
          <div className="scheduling-card">
            <div className="card-header">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="lightning-icon">
                <path d="M11.25 1.25L8.75 8.75H12.5L8.75 18.75L11.25 11.25H7.5L11.25 1.25Z" fill="currentColor"/>
              </svg>
              <h2 className="card-title">Agendamento Rápido</h2>
            </div>
            
            <div className="form-group">
              <div className="input-wrapper">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="input-icon">
                  <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 17.5L13.875 13.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input 
                  type="text" 
                  placeholder="Ex: Cardiologia" 
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="form-group">
              <div className="input-wrapper">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="input-icon">
                  <path d="M15 2.5H5C3.61929 2.5 2.5 3.61929 2.5 5V15C2.5 16.3807 3.61929 17.5 5 17.5H15C16.3807 17.5 17.5 16.3807 17.5 15V5C17.5 3.61929 16.3807 2.5 15 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3333 1.66667V4.16667M6.66667 1.66667V4.16667M2.5 7.5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input 
                  type="text" 
                  placeholder="Selecione uma data" 
                  className="form-input"
                />
              </div>
            </div>
            
            <button className="btn-search">Buscar Horários</button>
            
            <div className="availability-indicator">
              <div className="green-dot"></div>
              <span>Médicos disponíveis agora</span>
            </div>
          </div>
        </div>
      </main>

      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </div>
  )
}

export default HomePage

