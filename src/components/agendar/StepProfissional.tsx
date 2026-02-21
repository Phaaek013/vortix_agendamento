import type { AgendamentoData } from './types';
import { useState } from 'react';

const profissionais = [
    { id: 'p1', nome: 'Dr. Roberto Silva', especialidade: 'Cardiologista', crm: 'CRM/SP 123456', rating: 4.9, avaliacoes: 124, proximo: 'Hoje, 14:30', avatar: 'https://ui-avatars.com/api/?name=Roberto+Silva&background=13ecec&color=0d1b1b&size=80', sexo: 'M' },
    { id: 'p2', nome: 'Dra. Ana Souza', especialidade: 'Cardiologista Intervencionista', crm: 'CRM/SP 789012', rating: 5.0, avaliacoes: 89, proximo: 'Amanhã, 09:00', avatar: 'https://ui-avatars.com/api/?name=Ana+Souza&background=13ecec&color=0d1b1b&size=80', sexo: 'F' },
    { id: 'p3', nome: 'Dr. Carlos Mendes', especialidade: 'Cardiologista Pediátrico', crm: 'CRM/SP 345678', rating: 4.8, avaliacoes: 210, proximo: 'Amanhã, 11:00', avatar: 'https://ui-avatars.com/api/?name=Carlos+Mendes&background=13ecec&color=0d1b1b&size=80', sexo: 'M' },
];


type Props = { agendamento: AgendamentoData; setAgendamento: (a: AgendamentoData) => void };

export default function StepProfissional({ agendamento, setAgendamento }: Props) {
    const [busca, setBusca] = useState('');
    const selected = agendamento.profissional?.nome;

    const filtrados = profissionais.filter(p => {
        if (busca && !p.nome.toLowerCase().includes(busca.toLowerCase())) return false;
        return true;
    });

    return (
        <div className="flex flex-col gap-4">
            {/* Banner serviço selecionado */}
            <div className="flex items-center justify-between bg-white dark:bg-[#1c2725] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl p-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#13ecec]/20 text-[#0ebaba]"><span className="material-symbols-outlined">medical_services</span></div>
                    <div><p className="text-[10px] font-bold uppercase text-[#4c9a9a] dark:text-slate-400 tracking-wider">SERVIÇO SELECIONADO</p><p className="font-bold text-sm text-[#0d1b1b] dark:text-white">{agendamento.servico?.nome} — Primeira Vez</p></div>
                </div>
                <button className="text-xs font-bold text-[#13ecec] hover:underline">Trocar serviço</button>
            </div>
            {/* Busca + Dropdown */}
            <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span className="material-symbols-outlined text-[#4c9a9a] dark:text-slate-400 text-[20px]">search</span></div>
                    <input value={busca} onChange={e => setBusca(e.target.value)} className="block w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] py-2.5 pl-10 pr-4 bg-white dark:bg-[#1c2725] text-[#0d1b1b] dark:text-slate-100 placeholder:text-[#4c9a9a] dark:placeholder:text-slate-500 focus:ring-2 focus:ring-[#13ecec] outline-none transition-all text-sm" placeholder="Buscar profissional por nome..." />
                </div>
                <select className="rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] px-4 py-2.5 text-sm text-[#0d1b1b] dark:text-slate-100 outline-none focus:ring-2 focus:ring-[#13ecec] min-w-[180px]">
                    <option>Disponibilidade</option><option>Melhor avaliação</option><option>Nome A-Z</option>
                </select>
            </div>
            {/* Filtros removidos conforme solicitação */}
            {/* Qualquer Profissional */}
            <button className="flex items-center gap-4 p-4 rounded-xl border border-dashed border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#10221f] hover:border-[#13ecec]/50 transition-all text-left">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e7f3f3] dark:bg-[#1A2C2C] text-[#4c9a9a] dark:text-slate-400"><span className="material-symbols-outlined">group</span></div>
                <div><p className="font-bold text-sm text-[#0d1b1b] dark:text-white">Qualquer Profissional</p><p className="text-xs text-[#4c9a9a] dark:text-slate-400">O horário mais próximo disponível com qualquer especialista da nossa equipe.</p></div>
            </button>
            {/* Cards Profissionais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filtrados.map(p => (
                    <button key={p.id} onClick={() => setAgendamento({ ...agendamento, profissional: { nome: p.nome, especialidade: p.especialidade, crm: p.crm, avatar: p.avatar } })} className={`relative flex flex-col gap-3 p-4 rounded-xl border text-left transition-all ${selected === p.nome ? 'border-[#13ecec] bg-[#13ecec]/5 dark:bg-[#13ecec]/10 ring-1 ring-[#13ecec]' : 'border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] hover:border-[#13ecec]/50'}`}>
                        {selected === p.nome && <span className="absolute top-3 right-3 material-symbols-outlined text-[#13ecec] text-[20px]">check_circle</span>}
                        <div className="flex items-center gap-3">
                            <img src={p.avatar} alt={p.nome} className="h-12 w-12 rounded-full object-cover" />
                            <div><p className="font-bold text-sm text-[#0d1b1b] dark:text-white">{p.nome}</p><p className="text-xs text-[#4c9a9a] dark:text-slate-400">{p.especialidade}</p>
                                <div className="flex items-center gap-1 mt-0.5"><span className="text-yellow-500 text-xs">★</span><span className="text-xs font-semibold text-[#0d1b1b] dark:text-slate-200">{p.rating}</span><span className="text-xs text-[#4c9a9a] dark:text-slate-500">({p.avaliacoes} avaliações)</span></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 bg-[#e7f3f3] dark:bg-[#1A2C2C] rounded-lg px-3 py-1.5 text-xs"><span className="material-symbols-outlined text-[#13ecec] text-[14px]">event_available</span><span className="font-semibold text-[#0d1b1b] dark:text-slate-200">Próximo: {p.proximo}</span></div>
                        <span className="text-xs font-bold text-[#13ecec] hover:underline cursor-pointer">Ver detalhes ↓</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
