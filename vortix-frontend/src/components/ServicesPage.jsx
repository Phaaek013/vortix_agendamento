import './ServicesPage.css'

function ServicesPage({ onNavigate }) {
  const handleNavClick = (e, page) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <div className="services-page" id="servicos">
      {/* Header */}
      <header className="services-header">
        <div className="services-header-container">
          <div className="logo">
            <div className="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="logo-text">Vortix ClinicOps</span>
          </div>
          
          <nav className="services-nav">
            <a href="#inicio" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>Inicio</a>
            <a href="#agendamentos" className="nav-link nav-link-active">Agendamentos</a>
            <a href="#resultados" className="nav-link">Resultados</a>
            <a href="#perfil" className="nav-link">Perfil</a>
          </nav>
          
          <div className="header-actions">
            <button className="btn-login">Entrar</button>
            <div className="user-avatar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M6 21C6 17 9 14 12 14C15 14 18 17 18 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="services-main">
        <div className="services-container">
          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            <span>Início</span>
            <span className="breadcrumb-separator">›</span>
            <span>Serviços</span>
          </div>

          {/* Section Header */}
          <div className="section-header">
            <div>
              <h1 className="section-title">Serviços Disponíveis</h1>
              <p className="section-subtitle">
                Explore nossa lista completa de especialidades médicas e exames de diagnóstico. Agende online com facilidade e segurança.
              </p>
            </div>
            <button className="btn-quick-appointment">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 2H5C3.89543 2 3 2.89543 3 4V16C3 17.1046 3.89543 18 5 18H15C16.1046 18 17 17.1046 17 16V4C17 2.89543 16.1046 2 15 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 7H17M7 2V7M13 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Agendamento Rápido
            </button>
          </div>

          {/* Tabs */}
          <div className="tabs">
            <button className="tab tab-active">Consultas</button>
            <button className="tab">Exames</button>
            <button className="tab">Procedimentos</button>
          </div>

          {/* Search and Filters */}
          <div className="search-filters-bar">
            <div className="search-wrapper">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon">
                <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 17.5L13.875 13.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input 
                type="text" 
                placeholder="Buscar por especialidade, médico ou exame..." 
                className="search-input"
              />
            </div>
            <div className="filters">
              <button className="filter-btn filter-btn-active">Todos</button>
              <button className="filter-btn">Cardiologia</button>
              <button className="filter-btn">Dermatologia</button>
              <select className="filter-select">
                <option>Relevância</option>
              </select>
            </div>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {/* Service Card 1 - Consulta Cardiológica */}
            <div className="service-card">
              <div className="service-icon service-icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.61C20.3292 3.9998 19.7228 3.49864 19.0554 3.12157C18.3879 2.7445 17.6695 2.49829 16.93 2.393C16.1905 2.28771 15.4402 2.32515 14.72 2.503C14.0098 2.68085 13.3427 2.9957 12.75 3.43C12.1573 2.9957 11.4902 2.68085 10.78 2.503C10.0698 2.32515 9.31949 2.28771 8.58 2.393C7.84046 2.49829 7.12208 2.7445 6.45464 3.12157C5.7872 3.49864 5.18076 3.9998 4.67 4.61C4.15428 5.22219 3.74406 5.91853 3.45631 6.67036C3.16856 7.42219 3.00781 8.21953 2.98 9.03C2.98 14.49 8.27 17.75 11.64 19.03C12.0837 19.1974 12.5431 19.2833 13 19.2833C13.4569 19.2833 13.9163 19.1974 14.36 19.03C17.73 17.75 23.02 14.49 23.02 9.03C22.9922 8.21953 22.8314 7.42219 22.5437 6.67036C22.256 5.91853 21.8457 5.22219 21.33 4.61H20.84Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="service-badge service-badge-green">Disponível Hoje</div>
              <h3 className="service-title">Consulta Cardiológica</h3>
              <p className="service-provider">Dr. Ricardo Silva e Equipe</p>
              <div className="service-meta">
                <span className="service-duration">45 min</span>
                <span className="service-separator">•</span>
                <span className="service-type">Online ou Presencial</span>
              </div>
              <p className="service-description">
                Avaliação completa da saúde do coração, incluindo análise de pressão arterial, ritmo cardíaco e orientações preventivas.
              </p>
              <div className="service-actions">
                <button className="btn-schedule">Agendar</button>
                <a href="#" className="link-details">Ver detalhes</a>
              </div>
            </div>

            {/* Service Card 2 - Consulta Dermatológica */}
            <div className="service-card">
              <div className="service-icon service-icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12C8 13.1046 8.89543 14 10 14C11.1046 14 12 13.1046 12 12C12 10.8954 11.1046 10 10 10C8.89543 10 8 10.8954 8 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 12C14 13.1046 14.8954 14 16 14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 16C8 17.1046 9.34315 18 11 18C12.6569 18 14 17.1046 14 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="service-badge service-badge-purple">Telemedicina</div>
              <h3 className="service-title">Consulta Dermatológica</h3>
              <p className="service-provider">Dra. Ana Paula</p>
              <div className="service-meta">
                <span className="service-duration">30 min</span>
                <span className="service-separator">•</span>
                <span className="service-type">Apenas Online</span>
              </div>
              <p className="service-description">
                Diagnóstico e tratamento de doenças de pele, cabelos e unhas. Ideal para consultas de rotina e acompanhamento.
              </p>
              <div className="service-actions">
                <button className="btn-schedule">Agendar</button>
                <a href="#" className="link-details">Ver detalhes</a>
              </div>
            </div>

            {/* Service Card 3 - Consulta Pediátrica */}
            <div className="service-card">
              <div className="service-icon service-icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 21C6 17 9 14 12 14C15 14 18 17 18 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="6" r="1.5" fill="currentColor"/>
                  <circle cx="15" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              <div className="service-badge service-badge-gray">Próxima semana</div>
              <h3 className="service-title">Consulta Pediátrica</h3>
              <p className="service-provider">Dr. Carlos Mendes</p>
              <div className="service-meta">
                <span className="service-duration">60 min</span>
                <span className="service-separator">•</span>
                <span className="service-type">Presencial</span>
              </div>
              <p className="service-description">
                Acompanhamento do desenvolvimento infantil, vacinas e orientações gerais sobre saúde e bem-estar da criança.
              </p>
              <div className="service-actions">
                <button className="btn-schedule">Agendar</button>
                <a href="#" className="link-details">Ver detalhes</a>
              </div>
            </div>

            {/* Service Card 4 - Exame de Vista */}
            <div className="service-card">
              <div className="service-icon service-icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="service-title">Exame de Vista</h3>
              <p className="service-provider">Clínica Visual</p>
              <div className="service-meta">
                <span className="service-duration">20 min</span>
                <span className="service-separator">•</span>
                <span className="service-type">Unidade Centro</span>
              </div>
              <p className="service-description">
                Teste de acuidade visual, refração e pressão intraocular para prescrição de óculos ou lentes de contato.
              </p>
              <div className="service-actions">
                <button className="btn-schedule">Agendar</button>
                <a href="#" className="link-details">Ver detalhes</a>
              </div>
            </div>

            {/* Service Card 5 - Acompanhamento Nutricional */}
            <div className="service-card">
              <div className="service-icon service-icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8C10.3431 8 9 7.65685 9 7C9 6.34315 10.3431 6 12 6C13.6569 6 15 6.34315 15 7C15 7.65685 13.6569 8 12 8Z" fill="currentColor"/>
                  <path d="M9 10L10 14L12 12L14 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="service-badge service-badge-purple">Populares</div>
              <h3 className="service-title">Acompanhamento Nutricional</h3>
              <p className="service-provider">Dra. Clara Campos</p>
              <div className="service-meta">
                <span className="service-duration">50 min</span>
                <span className="service-separator">•</span>
                <span className="service-type">Online</span>
              </div>
              <p className="service-description">
                Elaboração de planos alimentares personalizados para reeducação alimentar e melhoria da qualidade de vida.
              </p>
              <div className="service-actions">
                <button className="btn-schedule">Agendar</button>
                <a href="#" className="link-details">Ver detalhes</a>
              </div>
            </div>

            {/* Service Card 6 - Avaliação Ortopédica */}
            <div className="service-card">
              <div className="service-icon service-icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 3V7M16 3V7M3 11H21M5 5H19C20.1046 5 21 5.89543 21 7V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7C3 5.89543 3.89543 5 5 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 15L10 17L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-title">Avaliação Ortopédica</h3>
              <p className="service-provider">Dr. Pedro Santos</p>
              <div className="service-meta">
                <span className="service-duration">40 min</span>
                <span className="service-separator">•</span>
                <span className="service-type">Presencial</span>
              </div>
              <p className="service-description">
                Diagnóstico de dores articulares, lesões esportivas e problemas de coluna.
              </p>
              <div className="service-actions">
                <button className="btn-schedule">Agendar</button>
                <a href="#" className="link-details">Ver detalhes</a>
              </div>
            </div>
          </div>

          {/* Promotional Banner */}
          <div className="promotional-banner">
            <div className="banner-content">
              <div className="banner-text">
                <h2 className="banner-title">Precisa de ajuda para encontrar o serviço ideal?</h2>
                <p className="banner-description">
                  Nossa equipe de especialistas está pronta para orientar você na escolha do melhor procedimento ou especialidade para sua necessidade.
                </p>
                <div className="banner-actions">
                  <button className="btn-banner-primary">Falar com atendente</button>
                  <button className="btn-banner-secondary">Ver perguntas frequentes</button>
                </div>
              </div>
              <div className="banner-image">
                <div className="banner-image-placeholder"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="services-footer">
        <div className="footer-container">
          <div className="footer-logo">
            <div className="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="logo-text">Vortix ClinicOps</span>
          </div>
          <div className="footer-copyright">
            <span>© 2024 Vortix ClinicOps. Todos os direitos reservados.</span>
            <a href="#" className="footer-link">Privacidade</a>
            <a href="#" className="footer-link">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ServicesPage

