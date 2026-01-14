import './HomePage.css'

function HomePage() {
  return (
    <div className="homepage">
      <header className="homepage-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Bem-vindo ao <span className="gradient-text">Vortix</span>
          </h1>
          <p className="hero-subtitle">
            Uma plataforma moderna e poderosa para transformar suas ideias em realidade
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Começar Agora</button>
            <button className="btn btn-secondary">Saiba Mais</button>
          </div>
        </div>
      </header>

      <section className="homepage-features">
        <div className="container">
          <h2 className="section-title">Recursos Principais</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Performance</h3>
              <p className="feature-description">
                Construído com as tecnologias mais modernas para máxima velocidade e eficiência
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3 className="feature-title">Design Moderno</h3>
              <p className="feature-description">
                Interface intuitiva e elegante que proporciona uma experiência excepcional
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Segurança</h3>
              <p className="feature-description">
                Proteção de dados e privacidade são nossas prioridades
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3 className="feature-title">Escalável</h3>
              <p className="feature-description">
                Cresça sem limites com uma arquitetura preparada para o futuro
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="homepage-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Pronto para começar?</h2>
            <p className="cta-description">
              Junte-se a milhares de usuários que já estão transformando suas ideias em realidade
            </p>
            <button className="btn btn-primary btn-large">Começar Agora</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

