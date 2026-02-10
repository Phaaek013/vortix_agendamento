import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        © {new Date().getFullYear()} ClinicOps. Todos os direitos reservados.
      </div>
    </footer>
  );
}
