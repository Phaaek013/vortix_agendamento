import './WhyChooseUs.css'

function WhyChooseUs() {
  return (
    <div className="why-choose-us">
      <div className="why-choose-us-container">
        <h1 className="section-title">Por que escolher a Vortix?</h1>
        <p className="section-subtitle">Tecnologia que trabalha a favor da sua saúde.</p>
        
        <div className="features-grid">
          {/* Card 1 - Agendamento Online 24/7 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper feature-icon-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 9H20M8 3V7M16 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="14" r="1" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="feature-title">Agendamento Online 24/7</h3>
            <p className="feature-description">
              Marque suas consultas a qualquer hora, de qualquer lugar, sem precisar ligar. Liberdade total para sua agenda.
            </p>
          </div>

          {/* Card 2 - Lembretes Automáticos */}
          <div className="feature-card">
            <div className="feature-icon-wrapper feature-icon-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-title">Lembretes Automáticos</h3>
            <p className="feature-description">
              Receba confirmações via WhatsApp e não perca seus horários.
            </p>
          </div>

          {/* Card 3 - Lista de Espera */}
          <div className="feature-card">
            <div className="feature-icon-wrapper feature-icon-green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2H18C19.1046 2 20 2.89543 20 4V8C20 9.10457 19.1046 10 18 10H6C4.89543 10 4 9.10457 4 8V4C4 2.89543 4.89543 2 6 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 14H18C19.1046 14 20 14.8954 20 16V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V16C4 14.8954 4.89543 14 6 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-title">Lista de Espera</h3>
            <p className="feature-description">
              Seja avisado automaticamente se surgir uma vaga antes.
            </p>
          </div>

          {/* Card 4 - Recepção Organizada */}
          <div className="feature-card">
            <div className="feature-icon-wrapper feature-icon-purple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-title">Recepção Organizada</h3>
            <p className="feature-description">
              Check-in digital rápido para evitar filas na chegada à clínica.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs

