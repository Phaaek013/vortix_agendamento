import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';
import TopbarAdmin from '../components/admin/TopbarAdmin';

// ─── Dados Mock ──────────────────────────────────────────────────────────────────
const PACIENTES_MOCK = [
    { id: 1, nome: 'Maria Silva', id_str: '#45201', plano: 'Particular' },
    { id: 2, nome: 'João Pereira', id_str: '#45202', plano: 'Unimed' },
    { id: 3, nome: 'Carlos Souza', id_str: '#45203', plano: 'Particular' },
    { id: 4, nome: 'Luana Gomes', id_str: '#45204', plano: 'Bradesco Saúde' },
    { id: 5, nome: 'Rafael Nunes', id_str: '#45205', plano: 'SulAmérica' },
    { id: 6, nome: 'Fernanda Lima', id_str: '#45206', plano: 'Particular' },
    { id: 7, nome: 'Bruno Alves', id_str: '#45207', plano: 'Amil' },
];

const PROFISSIONAIS = [
    { nome: 'Dr. Roberto Santos', especialidade: 'Cardiologista' },
    { nome: 'Dra. Ana Costa', especialidade: 'Dermatologista' },
    { nome: 'Dr. Carlos Mendes', especialidade: 'Ortopedista' },
    { nome: 'Dra. Julia Lima', especialidade: 'Pediatra' },
];

const SERVICOS = [
    { nome: 'Primeira Consulta', duracao: '30 min' },
    { nome: 'Retorno / Consulta Rápida', duracao: '20 min' },
    { nome: 'Ecocardiograma', duracao: '45 min' },
    { nome: 'Consulta Dermatológica', duracao: '30 min' },
    { nome: 'Consulta Ortopédica', duracao: '40 min' },
    { nome: 'Consulta Pediátrica', duracao: '30 min' },
];

const HORARIOS_DISPONIVEIS = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '14:00', '14:30', '15:00', '15:30', '16:00'];

// ─── Label de campo ──────────────────────────────────────────────────────────────
function FieldLabel({ text, required }: { text: string; required?: boolean }) {
    return (
        <label className="block text-xs font-bold text-[#0d1b1b] dark:text-slate-300 mb-1.5">
            {text}
            {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
    );
}

const inputCls = "w-full border border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#1A2C2C] rounded-xl px-4 py-2.5 text-sm text-[#0d1b1b] dark:text-slate-100 outline-none focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] transition-all placeholder-[#4c9a9a]/60";

// ─── Componente Principal ────────────────────────────────────────────────────────
export default function NovoAgendamentoInterno() {
    const navigate = useNavigate();

    const [pacienteBusca, setPacienteBusca] = useState('');
    const [pacienteSelecionado, setPacienteSelecionado] = useState<typeof PACIENTES_MOCK[0] | null>(null);
    const [showSugestoes, setShowSugestoes] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Click-outside detection to close dropdown without race conditions
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setShowSugestoes(false);
            }
        };
        if (showSugestoes) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showSugestoes]);

    const [profissional, setProfissional] = useState('');
    const [servico, setServico] = useState('');
    const [data, setData] = useState('');
    const [horario, setHorario] = useState('');
    const [plano, setPlano] = useState('');
    const [observacoes, setObservacoes] = useState('');
    const [listaEspera, setListaEspera] = useState(false);

    const sugestoes = PACIENTES_MOCK.filter(p =>
        pacienteBusca.length >= 2 &&
        p.nome.toLowerCase().includes(pacienteBusca.toLowerCase())
    );

    const servicoObj = SERVICOS.find(s => s.nome === servico);
    const profObj = PROFISSIONAIS.find(p => p.nome === profissional);

    const podeSalvar = !!pacienteSelecionado && !!profissional && !!servico && !!data && !!horario;

    const handleSalvar = () => {
        // Futuramente: API call
        navigate('/agenda');
    };

    return (
        <div className="bg-[#f6f8f8] dark:bg-[#10221f] text-[#0d1b1b] dark:text-slate-100 antialiased h-screen flex overflow-hidden font-display">
            <Sidebar />

            <main className="flex-1 flex flex-col h-full overflow-hidden">
                <TopbarAdmin showDateControls={false} showProFilter={false} />

                <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#f8fcfc] dark:bg-[#10221f]">
                    <div className="max-w-7xl mx-auto flex flex-col gap-5">

                        {/* Breadcrumb */}


                        {/* Header */}
                        <div>
                            <h1 className="text-2xl md:text-3xl font-black text-[#0d1b1b] dark:text-slate-100">Novo Agendamento</h1>
                            <p className="text-[#4c9a9a] text-sm mt-0.5">Preencha os dados abaixo para cadastrar uma nova consulta.</p>
                        </div>

                        {/* Layout: Form + Sidebar Resumo */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6">

                            {/* ── Coluna Principal (Formulário) ── */}
                            <div className="lg:col-span-2 flex flex-col gap-5">

                                {/* SEÇÃO 1: Paciente */}
                                <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none overflow-hidden">
                                    <div className="px-5 py-4 border-b border-[#e7f3f3] dark:border-[#2a3a38] flex items-center gap-2">
                                        <span className="size-7 rounded-full bg-[#13ecec]/10 flex items-center justify-center text-xs font-black text-[#0EBDBD]">1</span>
                                        <h2 className="text-base font-bold text-[#0d1b1b] dark:text-slate-100">Paciente</h2>
                                    </div>
                                    <div className="p-5">
                                        {pacienteSelecionado ? (
                                            <div className="flex items-center justify-between bg-[#e7f3f3]/50 dark:bg-[#1A2C2C] border border-[#13ecec]/30 rounded-xl px-4 py-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-10 rounded-full bg-[#13ecec]/20 flex items-center justify-center font-bold text-sm text-[#0EBDBD]">
                                                        {pacienteSelecionado.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-sm text-[#0d1b1b] dark:text-slate-100">{pacienteSelecionado.nome}</p>
                                                        <p className="text-xs text-[#4c9a9a]">{pacienteSelecionado.id_str} · {pacienteSelecionado.plano}</p>
                                                    </div>
                                                </div>
                                                <button onClick={() => { setPacienteSelecionado(null); setPacienteBusca(''); }}
                                                    className="text-xs font-bold text-[#4c9a9a] hover:text-red-500 border border-[#e7f3f3] dark:border-[#2a3a38] px-3 py-1.5 rounded-lg transition-colors">
                                                    Alterar
                                                </button>
                                            </div>
                                        ) : (
                                            <div ref={dropdownRef}>
                                                <FieldLabel text="Buscar Paciente" required />
                                                <div className="relative">
                                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-[#4c9a9a]">search</span>
                                                    <input
                                                        value={pacienteBusca}
                                                        onChange={e => { setPacienteBusca(e.target.value); setShowSugestoes(true); }}
                                                        onFocus={() => setShowSugestoes(true)}
                                                        className={`${inputCls} pl-9`}
                                                        placeholder="Nome, CPF ou ID do paciente..."
                                                    />
                                                </div>

                                                {/* Dropdown de sugestões */}
                                                {showSugestoes && pacienteBusca.length >= 2 && sugestoes.length > 0 && (
                                                    <div className="mt-1 w-full bg-white dark:bg-[#1c2725] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl shadow-lg overflow-hidden">
                                                        {sugestoes.map(p => (
                                                            <button key={p.id} onClick={() => { setPacienteSelecionado(p); setPacienteBusca(p.nome); setShowSugestoes(false); }}
                                                                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#f8fcfc] dark:hover:bg-[#1A2C2C] text-left transition-colors">
                                                                <div className="size-8 rounded-full bg-[#13ecec]/20 flex items-center justify-center text-xs font-bold text-[#0EBDBD]">
                                                                    {p.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm font-semibold text-[#0d1b1b] dark:text-slate-100">{p.nome}</p>
                                                                    <p className="text-xs text-[#4c9a9a]">{p.id_str} · {p.plano}</p>
                                                                </div>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Paciente NÃO encontrado — sempre visível quando não há sugestões */}
                                                {pacienteBusca.length >= 2 && sugestoes.length === 0 && (
                                                    <div className="mt-3 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-xl p-4">
                                                        <div className="flex items-start gap-3">
                                                            <span className="material-symbols-outlined text-amber-600 text-[24px] mt-0.5">person_off</span>
                                                            <div className="flex-1">
                                                                <p className="text-sm font-bold text-amber-800 dark:text-amber-300">Paciente não cadastrado</p>
                                                                <p className="text-xs text-amber-700 dark:text-amber-400 mt-0.5">
                                                                    Nenhum paciente encontrado com "<strong>{pacienteBusca}</strong>". Deseja cadastrá-lo como novo paciente?
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <button
                                                            onClick={() => {
                                                                setPacienteSelecionado({
                                                                    id: 999, nome: pacienteBusca, id_str: '#NOVO', plano: 'Particular'
                                                                });
                                                                setShowSugestoes(false);
                                                            }}
                                                            className="w-full mt-3 bg-[#13ecec] hover:bg-[#0EBDBD] text-[#0d1b1b] font-bold py-3 rounded-xl transition text-sm flex items-center justify-center gap-2 shadow-sm">
                                                            <span className="material-symbols-outlined text-[18px]">person_add</span>
                                                            Cadastrar "{pacienteBusca}" como novo paciente
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* SEÇÃO 2: Detalhes */}
                                <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none overflow-hidden">
                                    <div className="px-5 py-4 border-b border-[#e7f3f3] dark:border-[#2a3a38] flex items-center gap-2">
                                        <span className="size-7 rounded-full bg-[#13ecec]/10 flex items-center justify-center text-xs font-black text-[#0EBDBD]">2</span>
                                        <h2 className="text-base font-bold text-[#0d1b1b] dark:text-slate-100">Detalhes do Agendamento</h2>
                                    </div>
                                    <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">

                                        {/* Profissional */}
                                        <div>
                                            <FieldLabel text="Profissional" required />
                                            <select value={profissional} onChange={e => setProfissional(e.target.value)} className={inputCls}>
                                                <option value="">Selecionar profissional...</option>
                                                {PROFISSIONAIS.map(p => <option key={p.nome}>{p.nome}</option>)}
                                            </select>
                                        </div>

                                        {/* Serviço */}
                                        <div>
                                            <FieldLabel text="Serviço / Procedimento" required />
                                            <select value={servico} onChange={e => setServico(e.target.value)} className={inputCls}>
                                                <option value="">Selecionar serviço...</option>
                                                {SERVICOS.map(s => <option key={s.nome}>{s.nome}</option>)}
                                            </select>
                                        </div>

                                        {/* Data */}
                                        <div>
                                            <FieldLabel text="Data" required />
                                            <input type="date" value={data} onChange={e => setData(e.target.value)} className={inputCls} />
                                        </div>

                                        {/* Horário */}
                                        <div>
                                            <FieldLabel text="Horário" required />
                                            <select value={horario} onChange={e => setHorario(e.target.value)} className={inputCls} disabled={!data}>
                                                <option value="">Selecionar horário...</option>
                                                {HORARIOS_DISPONIVEIS.map(h => <option key={h}>{h}</option>)}
                                            </select>
                                        </div>

                                        {/* Convênio */}
                                        <div>
                                            <FieldLabel text="Convênio / Plano de Saúde" />
                                            <input value={plano} onChange={e => setPlano(e.target.value)}
                                                className={inputCls} placeholder="Ex: Unimed, Bradesco, Particular..." />
                                        </div>

                                        {/* Observações */}
                                        <div className="md:col-span-2">
                                            <FieldLabel text="Observações Internas" />
                                            <textarea value={observacoes} onChange={e => setObservacoes(e.target.value)}
                                                rows={3} className={`${inputCls} resize-none`}
                                                placeholder="Observações visíveis apenas para a equipe..." />
                                        </div>

                                        {/* Lista de espera toggle */}
                                        <div className="md:col-span-2">
                                            <label className="flex items-start gap-3 cursor-pointer bg-[#f8fcfc] dark:bg-[#1A2C2C] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl p-4 hover:border-[#13ecec]/50 transition-all">
                                                <div className="mt-0.5">
                                                    <div
                                                        onClick={() => setListaEspera(!listaEspera)}
                                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${listaEspera ? 'bg-[#13ecec]' : 'bg-gray-200 dark:bg-[#2a3a38]'}`}>
                                                        <span className={`inline-block size-4 rounded-full bg-white shadow-sm transition-transform ${listaEspera ? 'translate-x-6' : 'translate-x-1'}`} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-[#0d1b1b] dark:text-slate-100">Adicionar à lista de espera</p>
                                                    <p className="text-xs text-[#4c9a9a] mt-0.5">Marque se o paciente deseja ser notificado caso surja uma vaga anterior a esta data.</p>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ── Sidebar Resumo ── */}
                            <div className="flex flex-col gap-4">
                                <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none overflow-hidden sticky top-0">
                                    <div className="px-5 py-4 border-b border-[#e7f3f3] dark:border-[#2a3a38] flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#13ecec] text-[20px]">assignment</span>
                                        <h2 className="text-base font-bold text-[#0d1b1b] dark:text-slate-100">Resumo</h2>
                                    </div>
                                    <div className="p-5 flex flex-col gap-4">
                                        {/* Paciente */}
                                        <div className="flex flex-col gap-1">
                                            <p className="text-[10px] font-bold text-[#4c9a9a] uppercase tracking-wider">Paciente</p>
                                            <p className={`text-sm font-semibold ${pacienteSelecionado ? 'text-[#0d1b1b] dark:text-slate-100' : 'text-[#4c9a9a] italic'}`}>
                                                {pacienteSelecionado?.nome ?? 'Não selecionado'}
                                            </p>
                                        </div>
                                        <div className="border-b border-[#e7f3f3] dark:border-[#2a3a38]" />
                                        {/* Serviço */}
                                        <div className="flex flex-col gap-1">
                                            <p className="text-[10px] font-bold text-[#4c9a9a] uppercase tracking-wider">Serviço</p>
                                            <p className={`text-sm font-semibold ${servico ? 'text-[#0d1b1b] dark:text-slate-100' : 'text-[#4c9a9a] italic'}`}>
                                                {servico || 'Não selecionado'}
                                            </p>
                                            {servicoObj && <p className="text-xs text-[#4c9a9a]">Duração: {servicoObj.duracao}</p>}
                                        </div>
                                        <div className="border-b border-[#e7f3f3] dark:border-[#2a3a38]" />
                                        {/* Profissional */}
                                        <div className="flex flex-col gap-1">
                                            <p className="text-[10px] font-bold text-[#4c9a9a] uppercase tracking-wider">Profissional</p>
                                            <p className={`text-sm font-semibold ${profissional ? 'text-[#0d1b1b] dark:text-slate-100' : 'text-[#4c9a9a] italic'}`}>
                                                {profissional || 'Não selecionado'}
                                            </p>
                                            {profObj && <p className="text-xs text-[#4c9a9a]">{profObj.especialidade}</p>}
                                        </div>
                                        <div className="border-b border-[#e7f3f3] dark:border-[#2a3a38]" />
                                        {/* Data e Hora */}
                                        <div className="flex flex-col gap-1">
                                            <p className="text-[10px] font-bold text-[#4c9a9a] uppercase tracking-wider">Data e Hora</p>
                                            <p className={`text-sm font-semibold ${(data || horario) ? 'text-[#0d1b1b] dark:text-slate-100' : 'text-[#4c9a9a] italic'}`}>
                                                {data && horario ? `${data} às ${horario}` : data || horario || 'Não selecionado'}
                                            </p>
                                        </div>

                                        {/* Status conflict check */}
                                        {profissional && data && horario && (
                                            <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30 rounded-xl p-3 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                                                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                                                    Nenhum conflito encontrado na agenda de {profissional.split(' ').slice(0, 2).join(' ')}.
                                                </p>
                                            </div>
                                        )}

                                        {/* Botão Confirmar */}
                                        <button
                                            onClick={handleSalvar}
                                            disabled={!podeSalvar}
                                            className={`w-full mt-2 text-sm font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 ${podeSalvar ? 'bg-[#13ecec] hover:bg-[#0EBDBD] text-[#0d1b1b] shadow-sm shadow-[#13ecec]/25' : 'bg-gray-100 dark:bg-[#2a3a38] text-[#4c9a9a] cursor-not-allowed'}`}
                                        >
                                            <span className="material-symbols-outlined text-[18px]">event_available</span>
                                            Confirmar Agendamento
                                        </button>
                                        <Link to="/agenda" className="w-full text-sm font-bold py-2.5 rounded-xl border border-[#e7f3f3] dark:border-[#2a3a38] text-[#4c9a9a] hover:border-[#13ecec]/50 hover:text-[#0d1b1b] dark:hover:text-slate-100 transition-all flex items-center justify-center gap-2">
                                            Cancelar
                                        </Link>

                                        {/* Dica */}
                                        <p className="text-[10px] text-[#4c9a9a] text-center">
                                            Dica: <kbd className="bg-gray-100 dark:bg-[#2a3a38] px-1 py-0.5 rounded text-[9px] font-mono">Alt+N</kbd> para novo cadastro rápido de paciente
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
