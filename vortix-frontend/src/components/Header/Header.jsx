import './Header.css'

function Header({ currentPage, onNavigate }) {
  const handleNavClick = (e, page) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="logo-text">Vortix ClinicOps</span>
        </div>
        
        <nav className="nav">
          <a 
            href="#inicio" 
            className={`nav-link ${currentPage === 'home' ? 'nav-link-active' : ''}`}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Inicio
          </a>
          <a 
            href="#servicos" 
            className={`nav-link ${currentPage === 'services' ? 'nav-link-active' : ''}`}
            onClick={(e) => handleNavClick(e, 'services')}
          >
            Serviços
          </a>
          <a href="#profissionais" className="nav-link">Profissionais</a>
          <a 
            href="#agendar" 
            className={`nav-link ${currentPage === 'appointment' ? 'nav-link-active' : ''}`}
            onClick={(e) => handleNavClick(e, 'appointment')}
          >
            Agendar
          </a>
        </nav>
        
        <div className="header-actions">
          <button className="btn-login">Entrar</button>
          <button className="btn-account">Minha Conta</button>
        </div>
      </div>
    </header>
  )
}

export default Header

