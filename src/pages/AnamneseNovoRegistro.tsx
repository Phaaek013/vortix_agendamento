import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';
import TopbarAdmin from '../components/admin/TopbarAdmin';

// ─── Seções do Formulário ─────────────────────────────────
interface SecaoAnamnese {
    id: string;
    titulo: string;
    icone: string;
    obrigatoria: boolean;
    campos: { label: string; tipo: 'texto' | 'area' | 'select' | 'checkbox'; opcoes?: string[]; placeholder?: string }[];
}

const SECOES: SecaoAnamnese[] = [
    {
        id: 'queixa',
        titulo: '1. Queixa Principal e Duração',
        icone: 'record_voice_over',
        obrigatoria: true,
        campos: [
            { label: 'Queixa Principal', tipo: 'area', placeholder: 'Descreva a queixa principal do paciente...' },
            { label: 'Duração dos Sintomas', tipo: 'texto', placeholder: 'Ex: Há 2 semanas, há 3 meses...' },
            { label: 'Intensidade', tipo: 'select', opcoes: ['Leve', 'Moderada', 'Intensa', 'Muito Intensa'] },
            { label: 'Fatores de Melhora/Piora', tipo: 'area', placeholder: 'O que melhora ou piora os sintomas...' },
        ],
    },
    {
        id: 'historico',
        titulo: '2. Histórico do Atendimento Atual',
        icone: 'history',
        obrigatoria: true,
        campos: [
            { label: 'História da Doença Atual (HDA)', tipo: 'area', placeholder: 'Descreva a evolução da doença atual...' },
            { label: 'Tratamentos Anteriores', tipo: 'area', placeholder: 'Medicamentos ou procedimentos já tentados...' },
            { label: 'Resultados de Exames Recentes', tipo: 'area', placeholder: 'Resultados relevantes de exames...' },
        ],
    },
    {
        id: 'antecedentes',
        titulo: '3. Antecedentes Pessoais e Familiares',
        icone: 'family_restroom',
        obrigatoria: true,
        campos: [
            { label: 'Antecedentes Pessoais', tipo: 'area', placeholder: 'Doenças prévias, cirurgias, internações...' },
            { label: 'Antecedentes Familiares', tipo: 'area', placeholder: 'Doenças na família: diabetes, HAS, câncer...' },
            { label: 'Alergias Conhecidas', tipo: 'texto', placeholder: 'Medicamentos, alimentos, substâncias...' },
            { label: 'Medicação de Uso Contínuo', tipo: 'area', placeholder: 'Medicamentos em uso atualmente...' },
        ],
    },
    {
        id: 'exame',
        titulo: '4. Exame Físico',
        icone: 'stethoscope',
        obrigatoria: false,
        campos: [
            { label: 'Pressão Arterial', tipo: 'texto', placeholder: 'Ex: 120/80 mmHg' },
            { label: 'Frequência Cardíaca', tipo: 'texto', placeholder: 'Ex: 72 bpm' },
            { label: 'Temperatura', tipo: 'texto', placeholder: 'Ex: 36.5°C' },
            { label: 'Peso / Altura / IMC', tipo: 'texto', placeholder: 'Ex: 75kg / 1.75m / 24.5' },
            { label: 'Observações do Exame Físico', tipo: 'area', placeholder: 'Achados relevantes do exame físico...' },
        ],
    },
    {
        id: 'conduta',
        titulo: '5. Hipótese Diagnóstica e Conduta',
        icone: 'clinical_notes',
        obrigatoria: false,
        campos: [
            { label: 'Hipótese Diagnóstica', tipo: 'area', placeholder: 'CID / Diagnóstico presuntivo...' },
            { label: 'Plano Terapêutico', tipo: 'area', placeholder: 'Conduta, prescrição, orientações...' },
            { label: 'Exames Solicitados', tipo: 'area', placeholder: 'Exames laboratoriais, de imagem...' },
            { label: 'Retorno', tipo: 'texto', placeholder: 'Ex: 30 dias, 6 meses...' },
        ],
    },
];

const inputCls = "w-full border border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#1A2C2C] rounded-xl px-4 py-2.5 text-sm text-[#0d1b1b] dark:text-slate-100 outline-none focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] transition-all placeholder-[#4c9a9a]/60";

export default function AnamneseNovoRegistro() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [secaoAtiva, setSecaoAtiva] = useState('queixa');
    const [salvando, setSalvando] = useState(false);

    // Track completion of sections
    const [secoesConcluidas, setSecoesConcluidas] = useState<Set<string>>(new Set());

    const toggleConcluida = (secaoId: string) => {
        setSecoesConcluidas(prev => {
            const next = new Set(prev);
            if (next.has(secaoId)) next.delete(secaoId);
            else next.add(secaoId);
            return next;
        });
    };

    const handleSalvarRascunho = () => {
        setSalvando(true);
        setTimeout(() => {
            setSalvando(false);
            // toast or feedback
        }, 1000);
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
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-black">Registro de Anamnese Segura</h1>
                                <p className="text-[#4c9a9a] text-sm mt-0.5">Preencha as seções abaixo para o atendimento do paciente.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={handleSalvarRascunho} disabled={salvando}
                                    className="flex items-center gap-2 border border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] hover:bg-[#f8fcfc] dark:hover:bg-[#2a3a38] text-[#0d1b1b] dark:text-slate-100 font-bold text-sm py-2.5 px-5 rounded-xl transition-all">
                                    <span className="material-symbols-outlined text-[18px]">{salvando ? 'hourglass_top' : 'save'}</span>
                                    {salvando ? 'Salvando...' : 'Salvar Rascunho'}
                                </button>
                                <button onClick={() => navigate(`/pacientes/${id}/prontuario`)}
                                    className="flex items-center gap-2 bg-[#13ecec] hover:bg-[#0EBDBD] text-[#0d1b1b] font-bold text-sm py-2.5 px-5 rounded-xl transition-all shadow-sm">
                                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                                    Finalizar Registro
                                </button>
                            </div>
                        </div>

                        {/* Layout: Form + Sidebar */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pb-8">

                            {/* Main Form */}
                            <div className="lg:col-span-3 flex flex-col gap-5">
                                {/* Patient Context Card */}
                                <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] p-5 flex items-center gap-4 shadow-sm">
                                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="" className="size-12 rounded-full border-2 border-[#13ecec]/30 object-cover" />
                                    <div className="flex-1">
                                        <p className="font-bold text-base">João Silva</p>
                                        <p className="text-xs text-[#4c9a9a]">34 anos • Masculino • Convênio Unimed</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-[#4c9a9a]">Data do Atendimento</p>
                                        <p className="font-bold text-sm">21 Fev 2026 • 10:30</p>
                                    </div>
                                </div>

                                {/* Sections */}
                                {SECOES.map(secao => (
                                    <div key={secao.id} id={`section-${secao.id}`}
                                        className={`bg-white dark:bg-[#1c2725] rounded-2xl border shadow-sm dark:shadow-none overflow-hidden transition-all ${secaoAtiva === secao.id ? 'border-[#13ecec]/50 ring-1 ring-[#13ecec]/20' : 'border-[#e7f3f3] dark:border-[#2a3a38]'}`}>
                                        {/* Section Header */}
                                        <button onClick={() => setSecaoAtiva(secaoAtiva === secao.id ? '' : secao.id)}
                                            className="w-full px-5 py-4 flex items-center gap-3 hover:bg-[#f8fcfc] dark:hover:bg-[#10221f] transition-colors">
                                            <span className={`material-symbols-outlined text-[20px] ${secoesConcluidas.has(secao.id) ? 'text-emerald-500' : 'text-[#13ecec]'}`}>
                                                {secoesConcluidas.has(secao.id) ? 'check_circle' : secao.icone}
                                            </span>
                                            <h2 className="text-base font-bold flex-1 text-left">{secao.titulo}</h2>
                                            {secao.obrigatoria && !secoesConcluidas.has(secao.id) && (
                                                <span className="text-[10px] font-bold text-red-500 bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded-full">OBRIGATÓRIO</span>
                                            )}
                                            <span className={`material-symbols-outlined text-[#4c9a9a] text-[20px] transition-transform ${secaoAtiva === secao.id ? 'rotate-180' : ''}`}>
                                                expand_more
                                            </span>
                                        </button>

                                        {/* Section Body */}
                                        {secaoAtiva === secao.id && (
                                            <div className="px-5 pb-5 flex flex-col gap-4 border-t border-[#e7f3f3] dark:border-[#2a3a38] pt-4">
                                                {secao.campos.map((campo, i) => (
                                                    <div key={i}>
                                                        <label className="block text-xs font-bold text-[#0d1b1b] dark:text-slate-300 mb-1.5">
                                                            {campo.label}
                                                        </label>
                                                        {campo.tipo === 'area' ? (
                                                            <textarea className={`${inputCls} resize-none`} rows={3} placeholder={campo.placeholder} />
                                                        ) : campo.tipo === 'select' ? (
                                                            <select className={inputCls}>
                                                                <option value="">Selecionar...</option>
                                                                {campo.opcoes?.map(o => <option key={o}>{o}</option>)}
                                                            </select>
                                                        ) : (
                                                            <input type="text" className={inputCls} placeholder={campo.placeholder} />
                                                        )}
                                                    </div>
                                                ))}

                                                <button onClick={() => toggleConcluida(secao.id)}
                                                    className={`self-end flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg transition-all ${secoesConcluidas.has(secao.id) ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' : 'bg-[#e7f3f3] dark:bg-[#2a3a38] text-[#4c9a9a] hover:text-[#0d1b1b] dark:hover:text-slate-100'}`}>
                                                    <span className="material-symbols-outlined text-[16px]">{secoesConcluidas.has(secao.id) ? 'check_circle' : 'radio_button_unchecked'}</span>
                                                    {secoesConcluidas.has(secao.id) ? 'Seção Concluída' : 'Marcar como Concluída'}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Sidebar */}
                            <div className="flex flex-col gap-4">
                                {/* Checklist */}
                                <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm overflow-hidden sticky top-0">
                                    <div className="px-5 py-4 border-b border-[#e7f3f3] dark:border-[#2a3a38] flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#13ecec] text-[20px]">fact_check</span>
                                        <h3 className="font-bold text-sm">Itens Pendentes</h3>
                                    </div>
                                    <div className="p-3 flex flex-col gap-2">
                                        {SECOES.map(s => {
                                            const concluida = secoesConcluidas.has(s.id);
                                            return (
                                                <button key={s.id}
                                                    onClick={() => { setSecaoAtiva(s.id); document.getElementById(`section-${s.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                                                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left transition-all text-xs font-semibold ${concluida ? 'bg-emerald-50 dark:bg-emerald-900/10 text-emerald-700 dark:text-emerald-400' : s.obrigatoria ? 'bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400' : 'bg-[#f8fcfc] dark:bg-[#10221f] text-[#4c9a9a] hover:text-[#0d1b1b] dark:hover:text-slate-100'}`}>
                                                    <span className="material-symbols-outlined text-[16px]">{concluida ? 'check_circle' : s.obrigatoria ? 'error_outline' : 'radio_button_unchecked'}</span>
                                                    <span className="flex-1 truncate">{s.titulo.split('. ')[1]}</span>
                                                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Version Control */}
                                <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm overflow-hidden">
                                    <div className="px-5 py-4 border-b border-[#e7f3f3] dark:border-[#2a3a38]">
                                        <h3 className="font-bold text-sm">Controle de Versão</h3>
                                    </div>
                                    <div className="p-4 flex flex-col gap-3">
                                        <div className="flex items-start gap-3">
                                            <div className="size-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                                            <div>
                                                <p className="text-xs font-bold">Rascunho criado</p>
                                                <p className="text-[10px] text-[#4c9a9a]">Hoje, {new Date().getHours()}:{String(new Date().getMinutes()).padStart(2, '0')} por Dr. Ricardo</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="size-2 rounded-full bg-amber-300 mt-1.5 shrink-0" />
                                            <div>
                                                <p className="text-xs font-bold text-amber-600">Pendente de Finalização</p>
                                                <p className="text-[10px] text-[#4c9a9a]">Aguardando dados complementares</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Appointment Context */}
                                <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm overflow-hidden">
                                    <div className="px-5 py-4 border-b border-[#e7f3f3] dark:border-[#2a3a38]">
                                        <h3 className="font-bold text-sm">Contexto do Atendimento</h3>
                                    </div>
                                    <div className="p-4 flex flex-col gap-3">
                                        <div>
                                            <p className="text-[10px] font-bold text-[#4c9a9a] uppercase tracking-wider">Tipo</p>
                                            <p className="text-sm font-semibold">Consulta de Retorno</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-[#4c9a9a] uppercase tracking-wider">Especialidade</p>
                                            <p className="text-sm font-semibold">Cardiologia</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-[#4c9a9a] uppercase tracking-wider">Profissional</p>
                                            <p className="text-sm font-semibold">Dr. Ricardo Silva</p>
                                            <p className="text-[10px] text-[#4c9a9a]">CRM/SP 123456</p>
                                        </div>
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
