import { useMemo, useState } from "react";
import "./ProfessionalsPage.css";
import { MOCK_PROFESSIONALS } from "./mockProfessionals";
import { devWarn } from "../../utils/devLog";

const SORT_OPTIONS = [
  { value: "relevance", label: "Relevância" },
  { value: "next", label: "Próxima disponibilidade" },
  { value: "name", label: "Nome" },
];

function compareByNextAvailability(a, b) {
  const da = new Date(a.availabilityAt).getTime();
  const db = new Date(b.availabilityAt).getTime();
  return da - db;
}

export default function ProfessionalsPage() {
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("Todos");
  const [sort, setSort] = useState("relevance");

  const specialties = useMemo(() => {
    const unique = new Set(MOCK_PROFESSIONALS.map((p) => p.specialty));
    return [
      "Todos",
      ...Array.from(unique).sort((a, b) => a.localeCompare(b, "pt-BR")),
    ];
  }, []);

  const filteredProfessionals = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = MOCK_PROFESSIONALS.filter((p) => {
      const matchesSpecialty = specialty === "Todos" || p.specialty === specialty;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.specialty.toLowerCase().includes(q);

      return matchesSpecialty && matchesQuery;
    });

    if (sort === "name") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
    }
    if (sort === "next") {
      list = [...list].sort(compareByNextAvailability);
    }
    // "relevance" = keep original mock order for now.

    return list;
  }, [query, specialty, sort]);

  const handleSchedule = (professional) => {
    // TODO: Replace with navigation to schedule flow
    devWarn("[TODO] Implementar navegação: agendar", { id: professional.id });
  };

  const handleDetails = (professional) => {
    // TODO: Replace with navigation to professional details
    devWarn("[TODO] Implementar navegação: detalhes", { id: professional.id });
  };

  return (
    <div className="pro-page">
      <main className="pro-main">
        <div className="pro-container">
          <div className="pro-breadcrumbs">
            <a className="pro-link" href="#">
              Início
            </a>
            <span className="pro-sep">/</span>
            <span className="pro-crumb">Profissionais</span>
          </div>

          <section className="pro-hero">
            <div className="pro-heroText">
              <h1>Profissionais</h1>
              <p>
                Encontre o especialista ideal para o seu atendimento e agende sua
                consulta com praticidade.
              </p>
            </div>

            <button className="btn btn--ghost" onClick={() => devWarn("[TODO] Implementar: agendar agora")}>
              Agendar agora
            </button>
          </section>

          <section className="pro-controls">
            <div className="pro-controlsRow">
              <div className="pro-search">
                <span className="material-symbols-outlined pro-icon">search</span>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar por nome ou especialidade"
                  aria-label="Buscar por nome ou especialidade"
                />
              </div>

              <div className="pro-sort">
                <label className="srOnly" htmlFor="sort">
                  Ordenar por
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      Ordenar por: {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pro-chips">
              {specialties.map((s) => (
                <button
                  key={s}
                  className={`chip ${s === specialty ? "chip--active" : ""}`}
                  onClick={() => setSpecialty(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </section>

          <section className="pro-grid">
            {filteredProfessionals.map((p) => (
              <ProfessionalCard
                key={p.id}
                professional={p}
                onSchedule={() => handleSchedule(p)}
                onDetails={() => handleDetails(p)}
              />
            ))}

            {/* Skeleton card (demo placeholder) */}
            <SkeletonCard />
          </section>

          <section className="pro-cta">
            <div className="pro-ctaLeft">
              <div className="pro-ctaTitle">
                <span className="material-symbols-outlined">help</span>
                <h2>Não sabe com quem agendar?</h2>
              </div>
              <p>
                Nossa equipe pode ajudar você a encontrar o especialista certo.
                Navegue pelos nossos serviços ou entre em contato.
              </p>
            </div>

            <div className="pro-ctaActions">
              <button className="btn btn--outline" onClick={() => devWarn("[TODO] Implementar: ver serviços")}>
                Ver serviços
              </button>
              <button className="btn btn--primary" onClick={() => devWarn("[TODO] Implementar: fale conosco")}>
                Fale conosco
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function ProfessionalCard({ professional, onSchedule, onDetails }) {
  return (
    <article className="card">
      <div className="card-body">
        <div className="card-top">
          <div className="card-person">
            <img className="card-avatar" src={professional.avatarUrl} alt={professional.name} />
            <div className="card-title">
              <h3>{professional.name}</h3>
              <span>{professional.specialty}</span>
            </div>
          </div>

          <button className="icon-btn" onClick={() => devWarn("[TODO] Implementar: favoritar")} aria-label="Favoritar">
            <span className="material-symbols-outlined">favorite</span>
          </button>
        </div>

        <div className="card-badges">
          {professional.badges.map((b) => (
            <span key={b.label} className={`badge badge--${b.tone}`}>
              {b.label}
            </span>
          ))}
        </div>

        <p className="card-desc">{professional.description}</p>

        <div className="card-availability">
          <span className="card-availabilityLabel">Próxima disponibilidade:</span>
          <div className="card-availabilityValue">
            <span className="material-symbols-outlined">calendar_clock</span>
            {professional.availabilityLabel}
          </div>
        </div>
      </div>

      <div className="cardActions">
        <button className="btn btn--outline" onClick={onDetails}>
          Ver detalhes
        </button>
        <button className="btn btn--primary" onClick={onSchedule}>
          Agendar
        </button>
      </div>
    </article>
  );
}

function SkeletonCard() {
  return (
    <article className="card card--skeleton" aria-hidden="true">
      <div className="card-body">
        <div className="sk-row">
          <div className="sk-avatar" />
          <div className="sk-lines">
            <div className="sk-line sk-line--lg" />
            <div className="sk-line sk-line--sm" />
          </div>
        </div>
        <div className="sk-badges">
          <div className="sk-pill" />
          <div className="sk-pill" />
        </div>
        <div className="sk-paragraph">
          <div className="sk-line" />
          <div className="sk-line" />
          <div className="sk-line sk-line--md" />
        </div>
        <div className="sk-divider" />
        <div className="sk-line sk-line--md" />
      </div>
      <div className="cardActions">
        <div className="sk-btn" />
        <div className="sk-btn" />
      </div>
    </article>
  );
}
