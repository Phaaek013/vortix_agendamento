import { useState } from 'react';

import Sidebar from '../components/admin/Sidebar';
import TopbarAdmin from '../components/admin/TopbarAdmin';

// ─── Types ──────────────────────────────────────
type DiaSemana = 'Segunda-feira' | 'Terça-feira' | 'Quarta-feira' | 'Quinta-feira' | 'Sexta-feira' | 'Sábado' | 'Domingo';

interface FaixaHorario {
    id: number;
    inicio: string;
    fim: string;
    conflito?: boolean;
}

interface DiaConfig {
    dia: DiaSemana;
    ativo: boolean;
    faixas: FaixaHorario[];
}

interface LogEntry {
    id: number;
    usuario: string;
    avatar?: string;
    acao: string;
    data: string;
    hora: string;
    detalhe: string;
}

const TABS = ['Regras semanais', 'Bloqueios', 'Políticas'] as const;

// ─── Componente Principal ───────────────────────
export default function RegrasAgenda() {
    const [tabAtiva, setTabAtiva] = useState<typeof TABS[number]>('Regras semanais');
    const [profissional, setProfissional] = useState('Dr. João Silva (Cardiologia)');
    const [configurarPara, setConfigurarPara] = useState('Profissional Específico');
    const [online, setOnline] = useState(true);
    const [hasChanges, setHasChanges] = useState(false);
    const [logExpandido, setLogExpandido] = useState<number | null>(null);

    // Antecedência e janela
    const [antecedenciaVal, setAntecedenciaVal] = useState('2');
    const [antecedenciaUnid, setAntecedenciaUnid] = useState('Horas');
    const [janelaVal, setJanelaVal] = useState('30');
    const [janelaUnid, setJanelaUnid] = useState('Dias');

    // Política de cancelamento
    const [cancelamento, setCancelamento] = useState('Sim, até 24h antes');
    const [mensagemCancel, setMensagemCancel] = useState('');

    // Grade de horários
    const [dias, setDias] = useState<DiaConfig[]>([
        {
            dia: 'Segunda-feira', ativo: true, faixas: [
                { id: 1, inicio: '08:00', fim: '12:00' },
                { id: 2, inicio: '13:30', fim: '17:00' },
            ]
        },
        {
            dia: 'Terça-feira', ativo: true, faixas: [
                { id: 3, inicio: '09:00', fim: '11:00' },
                { id: 4, inicio: '10:30', fim: '13:00', conflito: true },
            ]
        },
        { dia: 'Quarta-feira', ativo: false, faixas: [] },
        {
            dia: 'Quinta-feira', ativo: true, faixas: [
                { id: 5, inicio: '08:00', fim: '18:00' },
            ]
        },
        {
            dia: 'Sexta-feira', ativo: true, faixas: [
                { id: 6, inicio: '08:00', fim: '12:00' },
                { id: 7, inicio: '14:00', fim: '18:00' },
            ]
        },
        { dia: 'Sábado', ativo: false, faixas: [] },
        { dia: 'Domingo', ativo: false, faixas: [] },
    ]);

    // Log de alterações
    const [logs] = useState<LogEntry[]>([
        { id: 1, usuario: 'Admin Gestor', avatar: '', acao: 'Regra criada', data: '20/02/2026', hora: '14:30', detalhe: 'Configurou horário de Segunda a Sexta para Dr. João Silva. Faixas: 08:00-12:00, 13:30-17:00.' },
        { id: 2, usuario: 'Admin Gestor', avatar: '', acao: 'Bloqueio adicionado', data: '19/02/2026', hora: '09:15', detalhe: 'Bloqueou Quarta-feira por motivo: Reunião de equipe semanal.' },
        { id: 3, usuario: 'Dra. Maria Costa', avatar: '', acao: 'Regra alterada', data: '18/02/2026', hora: '16:45', detalhe: 'Alterou faixa de Terça-feira de 08:00-12:00 para 09:00-11:00.' },
    ]);

    let nextId = 100;

    const toggleDia = (idx: number) => {
        setDias(prev => prev.map((d, i) => i === idx ? { ...d, ativo: !d.ativo } : d));
        setHasChanges(true);
    };

    const removeFaixa = (diaIdx: number, faixaId: number) => {
        setDias(prev => prev.map((d, i) => i === diaIdx ? { ...d, faixas: d.faixas.filter(f => f.id !== faixaId) } : d));
        setHasChanges(true);
    };

    const addFaixa = (diaIdx: number) => {
        nextId++;
        setDias(prev => prev.map((d, i) => i === diaIdx ? { ...d, faixas: [...d.faixas, { id: nextId, inicio: '08:00', fim: '12:00' }] } : d));
        setHasChanges(true);
    };

    const updateFaixa = (diaIdx: number, faixaId: number, campo: 'inicio' | 'fim', valor: string) => {
        setDias(prev => prev.map((d, i) => i === diaIdx ? {
            ...d, faixas: d.faixas.map(f => f.id === faixaId ? { ...f, [campo]: valor } : f)
        } : d));
        setHasChanges(true);
    };

    const replicarSegunda = () => {
        const seg = dias[0];
        if (!seg) return;
        setDias(prev => prev.map((d, i) => i === 0 ? d : { ...d, ativo: seg.ativo, faixas: seg.faixas.map(f => ({ ...f, id: f.id + 1000 * (i + 1) })) }));
        setHasChanges(true);
    };

    const countFaixas = (d: DiaConfig) => {
        if (!d.ativo) return 'Fechado';
        if (d.faixas.some(f => f.conflito)) return 'Conflito';
        return `${d.faixas.length} faixa${d.faixas.length !== 1 ? 's' : ''}`;
    };

    return (
        <div className="bg-[#f6f8f8] dark:bg-[#10221f] text-[#0d1b1b] dark:text-slate-100 antialiased h-screen flex overflow-hidden font-display">
            <Sidebar />
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                <TopbarAdmin showDateControls={false} showProFilter={false} />

                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* ── Tabs ── */}
                    <div className="border-b border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] px-6 shrink-0">
                        <div className="flex gap-6">
                            {TABS.map(t => (
                                <button key={t} onClick={() => setTabAtiva(t)}
                                    className={`py-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${tabAtiva === t ? 'border-[#13ecec] text-[#0d1b1b] dark:text-slate-100' : 'border-transparent text-[#4c9a9a] hover:text-[#0d1b1b] dark:hover:text-slate-200'}`}>
                                    <span className="material-symbols-outlined text-[18px]">
                                        {t === 'Regras semanais' ? 'calendar_month' : t === 'Bloqueios' ? 'block' : 'policy'}
                                    </span>
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* ── Content ── */}
                    <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#f8fcfc] dark:bg-[#10221f]">
                        <div className="max-w-4xl mx-auto flex flex-col gap-6">

                            {/* ── Filtros Topo ── */}
                            <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] p-5 flex flex-col gap-4">
                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-bold text-[#4c9a9a] uppercase tracking-wider">Configurar Para</span>
                                        <div className="flex items-center gap-2 bg-[#f8fcfc] dark:bg-[#10221f] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl px-3 py-2">
                                            <span className="material-symbols-outlined text-[#13ecec] text-[18px]">settings_suggest</span>
                                            <select value={configurarPara} onChange={e => { setConfigurarPara(e.target.value); setHasChanges(true); }}
                                                className="bg-transparent text-sm font-semibold outline-none">
                                                <option>Profissional Específico</option>
                                                <option>Clínica Geral</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-bold text-[#4c9a9a] uppercase tracking-wider">Selecionar Profissional</span>
                                        <div className="flex items-center gap-2 bg-[#f8fcfc] dark:bg-[#10221f] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl px-3 py-2">
                                            <span className="material-symbols-outlined text-[#13ecec] text-[18px]">stethoscope</span>
                                            <select value={profissional} onChange={e => { setProfissional(e.target.value); setHasChanges(true); }}
                                                className="bg-transparent text-sm font-semibold outline-none min-w-[200px]">
                                                <option>Dr. João Silva (Cardiologia)</option>
                                                <option>Dra. Ana Costa (Dermatologia)</option>
                                                <option>Dr. Ricardo Santos (Ortopedia)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 ml-auto">
                                        <button className="flex items-center gap-1.5 text-sm font-semibold text-[#4c9a9a] hover:text-[#0d1b1b] dark:hover:text-slate-100 transition-colors">
                                            <span className="material-symbols-outlined text-[16px]">content_copy</span>
                                            Copiar do padrão
                                        </button>

                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-semibold text-[#0d1b1b] dark:text-slate-100">Online</span>
                                            <button onClick={() => { setOnline(!online); setHasChanges(true); }}
                                                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${online ? 'bg-[#13ecec]' : 'bg-gray-200 dark:bg-[#2a3a38]'}`}>
                                                <span className={`inline-block size-5 rounded-full bg-white shadow-sm transition-transform ${online ? 'translate-x-6' : 'translate-x-1'}`} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-[#4c9a9a]">
                                    <span className="material-symbols-outlined text-[14px]">public</span>
                                    Fuso horário: America/Sao_Paulo (GMT-03:00)
                                </div>
                            </div>

                            {/* ── Grade de Horários ── */}
                            <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] p-5 flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold">Grade de Horários</h3>
                                    <button onClick={replicarSegunda}
                                        className="flex items-center gap-1.5 text-sm font-bold text-[#13ecec] hover:text-[#0EBDBD] transition-colors">
                                        <span className="material-symbols-outlined text-[16px]">content_copy</span>
                                        Replicar Segunda para todos
                                    </button>
                                </div>

                                <div className="flex flex-col gap-0 divide-y divide-[#e7f3f3] dark:divide-[#2a3a38]">
                                    {dias.map((d, dIdx) => (
                                        <div key={d.dia} className={`py-5 flex flex-col sm:flex-row gap-4 items-start ${d.faixas.some(f => f.conflito) ? 'border-l-4 border-red-500 pl-4 -ml-1' : ''}`}>
                                            {/* Toggle + Nome */}
                                            <div className="flex items-center gap-3 min-w-[160px] shrink-0">
                                                <button onClick={() => toggleDia(dIdx)}
                                                    className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors shrink-0 ${d.ativo ? 'bg-[#13ecec]' : 'bg-gray-200 dark:bg-[#2a3a38]'}`}>
                                                    <span className={`inline-block size-5 rounded-full bg-white shadow-sm transition-transform ${d.ativo ? 'translate-x-6' : 'translate-x-1'}`} />
                                                </button>
                                                <div>
                                                    <p className={`text-sm font-bold ${d.ativo ? 'text-[#0d1b1b] dark:text-slate-100' : 'text-[#4c9a9a]'}`}>{d.dia}</p>
                                                    <p className={`text-[10px] font-bold ${d.faixas.some(f => f.conflito) ? 'text-red-500' : d.ativo ? 'text-[#4c9a9a]' : 'text-[#4c9a9a]'}`}>{countFaixas(d)}</p>
                                                </div>
                                            </div>

                                            {/* Faixas */}
                                            <div className="flex-1 flex flex-col gap-2">
                                                {!d.ativo ? (
                                                    <p className="text-sm italic text-[#4c9a9a]">Não há atendimento neste dia.</p>
                                                ) : (
                                                    <>
                                                        {d.faixas.map(f => (
                                                            <div key={f.id} className="flex items-center gap-2 flex-wrap">
                                                                <div className={`flex items-center gap-1 rounded-lg border px-2 py-1.5 ${f.conflito ? 'border-red-300 bg-red-50 dark:bg-red-900/10' : 'border-[#e7f3f3] dark:border-[#2a3a38]'}`}>
                                                                    <input type="time" value={f.inicio} onChange={e => updateFaixa(dIdx, f.id, 'inicio', e.target.value)}
                                                                        className="bg-transparent text-sm font-semibold outline-none w-20 text-center" />
                                                                    <span className="text-[#4c9a9a] text-sm">-</span>
                                                                    <input type="time" value={f.fim} onChange={e => updateFaixa(dIdx, f.id, 'fim', e.target.value)}
                                                                        className="bg-transparent text-sm font-semibold outline-none w-20 text-center" />
                                                                </div>
                                                                {f.conflito && (
                                                                    <span className="text-xs font-bold text-red-500 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded">Sobreposição detectada</span>
                                                                )}
                                                                <button onClick={() => removeFaixa(dIdx, f.id)}
                                                                    className="text-[#4c9a9a] hover:text-red-500 transition-colors p-1">
                                                                    <span className="material-symbols-outlined text-[18px]">delete</span>
                                                                </button>
                                                            </div>
                                                        ))}
                                                        <button onClick={() => addFaixa(dIdx)}
                                                            className="flex items-center gap-1 text-sm font-bold text-[#13ecec] hover:text-[#0EBDBD] transition-colors mt-1 self-start">
                                                            <span className="material-symbols-outlined text-[16px]">add_circle</span>
                                                            Adicionar intervalo
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* ── Regras + Política ── */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] p-5 flex flex-col gap-4">
                                    <h3 className="font-bold text-sm uppercase tracking-wider text-[#4c9a9a]">Regras de Agendamento</h3>
                                    <div className="flex flex-col gap-3">
                                        <div>
                                            <label className="text-sm font-medium text-[#0d1b1b] dark:text-slate-200 mb-1 block">Antecedência mínima</label>
                                            <div className="flex gap-2">
                                                <input type="number" value={antecedenciaVal} onChange={e => { setAntecedenciaVal(e.target.value); setHasChanges(true); }}
                                                    className="w-20 bg-[#f8fcfc] dark:bg-[#10221f] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl px-3 py-2 text-sm font-bold text-center outline-none focus:border-[#13ecec]" />
                                                <select value={antecedenciaUnid} onChange={e => { setAntecedenciaUnid(e.target.value); setHasChanges(true); }}
                                                    className="flex-1 bg-[#f8fcfc] dark:bg-[#10221f] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl px-3 py-2 text-sm font-semibold outline-none focus:border-[#13ecec]">
                                                    <option>Horas</option><option>Dias</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-[#0d1b1b] dark:text-slate-200 mb-1 block">Janela máxima de agendamento</label>
                                            <div className="flex gap-2">
                                                <input type="number" value={janelaVal} onChange={e => { setJanelaVal(e.target.value); setHasChanges(true); }}
                                                    className="w-20 bg-[#f8fcfc] dark:bg-[#10221f] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl px-3 py-2 text-sm font-bold text-center outline-none focus:border-[#13ecec]" />
                                                <select value={janelaUnid} onChange={e => { setJanelaUnid(e.target.value); setHasChanges(true); }}
                                                    className="flex-1 bg-[#f8fcfc] dark:bg-[#10221f] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl px-3 py-2 text-sm font-semibold outline-none focus:border-[#13ecec]">
                                                    <option>Dias</option><option>Semanas</option><option>Meses</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] p-5 flex flex-col gap-4">
                                    <h3 className="font-bold text-sm uppercase tracking-wider text-[#4c9a9a]">Política de Cancelamento</h3>
                                    <div className="flex flex-col gap-3">
                                        <div>
                                            <label className="text-sm font-medium text-[#0d1b1b] dark:text-slate-200 mb-1 block">Permitir cancelamento pelo paciente?</label>
                                            <select value={cancelamento} onChange={e => { setCancelamento(e.target.value); setHasChanges(true); }}
                                                className="w-full bg-[#f8fcfc] dark:bg-[#10221f] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl px-3 py-2 text-sm font-semibold outline-none focus:border-[#13ecec]">
                                                <option>Sim, até 24h antes</option>
                                                <option>Sim, até 48h antes</option>
                                                <option>Não permitir</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-[#0d1b1b] dark:text-slate-200 mb-1 block">Mensagem personalizada</label>
                                            <textarea value={mensagemCancel} onChange={e => { setMensagemCancel(e.target.value); setHasChanges(true); }}
                                                rows={3} placeholder="Ex: Para reagendar sem custo..."
                                                className="w-full bg-[#f8fcfc] dark:bg-[#10221f] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl px-3 py-2 text-sm outline-none focus:border-[#13ecec] resize-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ── Log / Histórico ── */}
                            <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] p-5 flex flex-col gap-4">
                                <h3 className="flex items-center gap-2 font-bold text-lg">
                                    <span className="material-symbols-outlined text-[#13ecec]">history</span>
                                    Histórico de Alterações
                                </h3>
                                <div className="flex flex-col divide-y divide-[#e7f3f3] dark:divide-[#2a3a38]">
                                    {logs.map(log => (
                                        <div key={log.id} className="py-3 flex flex-col gap-2">
                                            <button onClick={() => setLogExpandido(logExpandido === log.id ? null : log.id)}
                                                className="flex items-center justify-between w-full text-left group hover:bg-gray-50 dark:hover:bg-[#10221f] -mx-2 px-2 py-1 rounded-lg transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-8 rounded-full bg-[#13ecec]/20 flex items-center justify-center text-xs font-bold text-[#0EBDBD]">
                                                        {log.usuario.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-[#0d1b1b] dark:text-slate-100">{log.usuario}</p>
                                                        <p className="text-xs text-[#4c9a9a]">{log.acao} • {log.data} às {log.hora}</p>
                                                    </div>
                                                </div>
                                                <span className={`material-symbols-outlined text-[#4c9a9a] text-[18px] transition-transform ${logExpandido === log.id ? 'rotate-180' : ''}`}>expand_more</span>
                                            </button>
                                            {logExpandido === log.id && (
                                                <div className="ml-11 bg-[#f8fcfc] dark:bg-[#10221f] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl p-3">
                                                    <p className="text-sm text-[#0d1b1b] dark:text-slate-200">{log.detalhe}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* ── Footer com Salvar ── */}
                    {hasChanges && (
                        <div className="shrink-0 px-6 py-4 border-t border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                            <div className="flex items-center gap-2 text-orange-600">
                                <span className="material-symbols-outlined text-[18px]">warning</span>
                                <span className="text-sm font-semibold">Você tem alterações não salvas</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button onClick={() => setHasChanges(false)}
                                    className="px-5 py-2.5 text-sm font-bold text-[#4c9a9a] hover:text-[#0d1b1b] dark:hover:text-slate-100 transition-colors">
                                    Descartar
                                </button>
                                <button onClick={() => setHasChanges(false)}
                                    className="flex items-center gap-2 bg-[#13ecec] hover:bg-[#0EBDBD] text-[#0d1b1b] font-bold px-5 py-2.5 rounded-xl transition shadow-sm">
                                    <span className="material-symbols-outlined text-[18px]">save</span>
                                    Salvar Regras
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
