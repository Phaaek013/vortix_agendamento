import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <NavLink to="/" className="site-brand" end>
        <span className="material-symbols-outlined site-brandIcon">
          local_hospital
        </span>
        <span className="site-brandName">ClinicOps</span>
      </NavLink>

      <nav className="site-nav">
        <NavLink to="/" end>Início</NavLink>
        <NavLink to="/servicos">Serviços</NavLink>
        <NavLink to="/profissionais">Profissionais</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>

      <div className="site-actions">
        <NavLink to="/agendar" className="btn btn--primary">
          Agendar
        </NavLink>
        <NavLink to="/login" className="btn btn--ghost">
          Login
        </NavLink>
      </div>
    </header>
  );
}
