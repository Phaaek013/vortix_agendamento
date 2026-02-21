import type { AgendamentoData } from './types';
import { useState } from 'react';

const servicos = [
    { id: 'consulta-geral', nome: 'Consulta Geral', desc: 'Avaliação inicial de sintomas e encaminhamento.', duracao: '30 min', icon: 'stethoscope', tipo: 'Consulta', cat: 'Clínico Geral' },
    { id: 'cardio', nome: 'Cardiologia', desc: 'Check-up preventivo e acompanhamento cardíaco.', duracao: '45 min', icon: 'favorite', tipo: 'Consulta', cat: 'Cardiologia' },
    { id: 'dermato', nome: 'Dermatologia', desc: 'Tratamento de pele, unhas e cabelos.', duracao: '30 min', icon: 'face_retouching_natural', tipo: 'Consulta', cat: 'Dermatologia' },
    { id: 'pediatria', nome: 'Pediatria', desc: 'Atendimento especializado para crianças.', duracao: '40 min', icon: 'child_care', tipo: 'Consulta', cat: 'Pediatria' },
    { id: 'ortopedia', nome: 'Ortopedia', desc: 'Ossos, músculos e articulações.', duracao: '30 min', icon: 'orthopedics', tipo: 'Consulta', cat: 'Ortopedia' },
    { id: 'gineco', nome: 'Ginecologia', desc: 'Saúde da mulher e acompanhamento.', duracao: '40 min', icon: 'pregnant_woman', tipo: 'Consulta', cat: 'Clínico Geral' },
    { id: 'hemograma', nome: 'Hemograma Completo', desc: 'Exame de sangue completo com análise.', duracao: '15 min', icon: 'bloodtype', tipo: 'Exame', cat: 'Clínico Geral' },
    { id: 'raio-x', nome: 'Raio-X', desc: 'Imagem radiográfica para diagnóstico.', duracao: '20 min', icon: 'radiology', tipo: 'Exame', cat: 'Ortopedia' },
];
const categorias = ['Todos', 'Cardiologia', 'Dermatologia', 'Clínico Geral', 'Pediatria', 'Ortopedia'];

type Props = { agendamento: AgendamentoData; setAgendamento: (a: AgendamentoData) => void };

export default function StepServico({ agendamento, setAgendamento }: Props) {
    const [tab, setTab] = useState<'Consulta' | 'Exame'>('Consulta');
    const [filtro, setFiltro] = useState('Todos');
    const [busca, setBusca] = useState('');

    const filtrados = servicos.filter(s => {
        if (s.tipo !== (tab === 'Consulta' ? 'Consulta' : 'Exame')) return false;
        if (filtro !== 'Todos' && s.cat !== filtro) return false;
        if (busca && !s.nome.toLowerCase().includes(busca.toLowerCase())) return false;
        return true;
    });

    const selected = agendamento.servico?.nome;

    return (
        <div className="flex flex-col gap-4">
            {/* Tabs Consultas / Exames */}
            <div className="flex gap-2">
                <button onClick={() => setTab('Consulta')} className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${tab === 'Consulta' ? 'bg-[#0d1b1b] dark:bg-white text-white dark:text-[#0d1b1b]' : 'bg-[#e7f3f3] dark:bg-[#1A2C2C] text-[#0d1b1b] dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-[#2a3a38]'}`}>Consultas</button>
                <button onClick={() => setTab('Exame')} className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${tab === 'Exame' ? 'bg-[#0d1b1b] dark:bg-white text-white dark:text-[#0d1b1b]' : 'bg-[#e7f3f3] dark:bg-[#1A2C2C] text-[#0d1b1b] dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-[#2a3a38]'}`}>Exames</button>
                {/* Search */}
                <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span className="material-symbols-outlined text-[#4c9a9a] dark:text-slate-400 text-[20px]">search</span></div>
                    <input value={busca} onChange={e => setBusca(e.target.value)} className="block w-full rounded-lg border-0 py-2 pl-10 pr-4 bg-[#e7f3f3] dark:bg-[#1A2C2C] text-[#0d1b1b] dark:text-slate-100 placeholder:text-[#4c9a9a] dark:placeholder:text-slate-500 focus:ring-2 focus:ring-[#13ecec] focus:bg-white dark:focus:bg-[#1c2725] outline-none transition-all text-sm" placeholder="Buscar serviço..." />
                </div>
            </div>
            {/* Filtros pill */}
            <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
                {categorias.map(c => (
                    <button key={c} onClick={() => setFiltro(c)} className={`flex h-8 shrink-0 items-center justify-center rounded-lg px-4 font-bold text-xs shadow-sm dark:shadow-none transition-transform active:scale-95 ${filtro === c ? 'bg-[#13ecec] text-[#0d1b1b]' : 'bg-[#e7f3f3] dark:bg-[#1A2C2C] text-[#0d1b1b] dark:text-slate-100 hover:bg-gray-200 dark:hover:bg-[#2a3a38]'}`}>{c}</button>
                ))}
            </div>
            {/* Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filtrados.map(s => (
                    <button key={s.id} onClick={() => setAgendamento({ ...agendamento, servico: { nome: s.nome, duracao: s.duracao, tipo: s.tipo } })} className={`relative flex items-start gap-4 p-4 rounded-xl border text-left transition-all ${selected === s.nome ? 'border-[#13ecec] bg-[#13ecec]/5 dark:bg-[#13ecec]/10 ring-1 ring-[#13ecec]' : 'border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] hover:border-[#13ecec]/50'}`}>
                        {selected === s.nome && <span className="absolute top-3 right-3 material-symbols-outlined text-[#13ecec] text-[20px]">check_circle</span>}
                        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${selected === s.nome ? 'bg-[#13ecec]/20 text-[#0ebaba]' : 'bg-[#e7f3f3] dark:bg-[#1A2C2C] text-[#4c9a9a] dark:text-slate-400'}`}>
                            <span className="material-symbols-outlined">{s.icon}</span>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <span className="font-bold text-[#0d1b1b] dark:text-slate-100 text-sm">{s.nome}</span>
                            <span className="text-xs text-[#4c9a9a] dark:text-slate-400">{s.desc}</span>
                            <span className="flex items-center gap-1 text-xs text-[#4c9a9a] dark:text-slate-500 mt-1"><span className="material-symbols-outlined text-[14px]">schedule</span>{s.duracao}</span>
                        </div>
                    </button>
                ))}
            </div>
            {/* Help */}
            <div className="flex items-center justify-between bg-white dark:bg-[#1c2725] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl p-4">
                <div><p className="font-bold text-sm text-[#0d1b1b] dark:text-white">Não encontrou o que procurava?</p><p className="text-xs text-[#4c9a9a] dark:text-slate-400">Tente buscar por outro termo ou entre em contato conosco.</p></div>
                <button className="shrink-0 rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] px-4 py-2 text-xs font-bold text-[#0d1b1b] dark:text-slate-200 hover:bg-[#e7f3f3] dark:hover:bg-[#1A2C2C] transition-colors">Fale com atendente</button>
            </div>
        </div>
    );
}
