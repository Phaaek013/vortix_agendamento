import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';
import TopbarAdmin from '../components/admin/TopbarAdmin';

// ─── Types ──────────────────────────────────────
interface BlocoAgenda {
    id: number;
    pacienteId: number;
    paciente: string;
    initials: string;
    avatar?: string;
    plano: string;
    corPlano: string;
    statusCor: string;
    horaInicio: number;
    duracao: number;
    medico: string;
    tipo: 'normal' | 'alerta' | 'bloqueado';
}

interface DiaAgenda {
    diaSemana: number;
    blocos: BlocoAgenda[];
}

// ─── Helpers ─────────────────────────────────────
const minToStr = (m: number) => {
    const h = Math.floor(m / 60);
    const min = m % 60;
    return `${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
};

const addDays = (d: Date, n: number) => {
    const r = new Date(d);
    r.setDate(r.getDate() + n);
    return r;
};

const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

const NOMES_DIA = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];

const NOMES_MES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const NOMES_MES_CURTO = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
const HORA_INICIO = 7 * 60;
const HORA_FIM = 21 * 60;
const PX_POR_HORA = 64;
const PX_POR_MIN = PX_POR_HORA / 60;

// ─── Mock Data ───────────────────────────────────
const gerarMockSemana = (): DiaAgenda[] => [
    {
        diaSemana: 1, blocos: [
            { id: 1, pacienteId: 1, paciente: 'Maria Oliveira', initials: 'MO', plano: 'Consulta Particular', corPlano: 'red', statusCor: 'red', horaInicio: 600, duracao: 60, medico: 'Dr. Ricardo', tipo: 'alerta' },
        ]
    },
    {
        diaSemana: 2, blocos: [
            { id: 2, pacienteId: 2, paciente: 'João Silva', initials: 'JS', avatar: 'https://i.pravatar.cc/150?u=1', plano: 'CONVÊNIO UNIMED', corPlano: 'teal', statusCor: '#13ecec', horaInicio: 540, duracao: 60, medico: 'Dr. Ricardo', tipo: 'normal' },
            { id: 3, pacienteId: 3, paciente: 'Ana Costa', initials: 'AC', plano: 'Exames Gerais', corPlano: 'emerald', statusCor: 'emerald', horaInicio: 780, duracao: 60, medico: 'Dra. Ana', tipo: 'normal' },
            { id: 10, pacienteId: 0, paciente: 'Conflito', initials: 'XX', plano: '', corPlano: 'red', statusCor: 'red', horaInicio: 960, duracao: 60, medico: '', tipo: 'alerta' },
        ]
    },
    {
        diaSemana: 3, blocos: [
            { id: 5, pacienteId: 5, paciente: 'Roberto M.', initials: 'RM', plano: 'Primeira Consulta', corPlano: 'orange', statusCor: 'orange', horaInicio: 600, duracao: 90, medico: 'Dr. Ricardo', tipo: 'normal' },
        ]
    },
    { diaSemana: 4, blocos: [] },
    {
        diaSemana: 5, blocos: [
            { id: 6, pacienteId: 6, paciente: 'Luana Gomes', initials: 'LG', plano: 'Bradesco Saúde', corPlano: 'pink', statusCor: 'pink', horaInicio: 480, duracao: 30, medico: 'Dra. Ana', tipo: 'normal' },
        ]
    },
];

const mockSemana = gerarMockSemana();

const getBlocosForDate = (d: Date): BlocoAgenda[] => {
    const dow = d.getDay();
    return mockSemana.find(dia => dia.diaSemana === dow)?.blocos || [];
};

// ─── Helpers para mês ────────────────────────────
const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

// ─── Componente Principal ───────────────────────
export default function Agenda() {
    const navigate = useNavigate();
    const scrollRef = useRef<HTMLDivElement>(null);

    type ViewMode = 'Dia' | 'Semana' | 'Mês' | 'Ano';
    const [viewMode, setViewMode] = useState<ViewMode>('Semana');
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedBloco, setSelectedBloco] = useState<BlocoAgenda | null>(null);
    const [cardPos, setCardPos] = useState({ x: 0, y: 0 });

    // Auto-scroll to 08:00
    useEffect(() => {
        if (scrollRef.current && (viewMode === 'Dia' || viewMode === 'Semana')) {
            scrollRef.current.scrollTop = (480 - HORA_INICIO) * PX_POR_MIN - 20;
        }
    }, [viewMode, currentDate]);

    const today = new Date();

    // ─── Navigation ──────────────────────────────
    const navPrev = () => {
        const d = new Date(currentDate);
        if (viewMode === 'Dia') d.setDate(d.getDate() - 1);
        else if (viewMode === 'Semana') d.setDate(d.getDate() - 7);
        else if (viewMode === 'Mês') d.setMonth(d.getMonth() - 1);
        else d.setFullYear(d.getFullYear() - 1);
        setCurrentDate(d);
    };
    const navNext = () => {
        const d = new Date(currentDate);
        if (viewMode === 'Dia') d.setDate(d.getDate() + 1);
        else if (viewMode === 'Semana') d.setDate(d.getDate() + 7);
        else if (viewMode === 'Mês') d.setMonth(d.getMonth() + 1);
        else d.setFullYear(d.getFullYear() + 1);
        setCurrentDate(d);
    };
    const navHoje = () => setCurrentDate(new Date());

    // Format header title Google Calendar style
    const getTitle = () => {
        if (viewMode === 'Dia') {
            return `${currentDate.getDate()} de ${NOMES_MES[currentDate.getMonth()].toLowerCase()} de ${currentDate.getFullYear()}`;
        }
        if (viewMode === 'Semana') {
            const startOfWeek = addDays(currentDate, -currentDate.getDay());
            const endOfWeek = addDays(startOfWeek, 6);
            if (startOfWeek.getMonth() === endOfWeek.getMonth()) {
                return `${NOMES_MES[startOfWeek.getMonth()]} de ${startOfWeek.getFullYear()}`;
            }
            return `${NOMES_MES_CURTO[startOfWeek.getMonth()]} – ${NOMES_MES_CURTO[endOfWeek.getMonth()]} de ${endOfWeek.getFullYear()}`;
        }
        if (viewMode === 'Mês') {
            return `${NOMES_MES[currentDate.getMonth()]} de ${currentDate.getFullYear()}`;
        }
        return `${currentDate.getFullYear()}`;
    };

    // ─── Week helpers ────────────────────────────
    const getWeekDays = () => {
        const startOfWeek = addDays(currentDate, -currentDate.getDay());
        return Array.from({ length: 7 }, (_, i) => addDays(startOfWeek, i));
    };

    // Hours for timeline
    const horas: string[] = [];
    for (let m = HORA_INICIO; m <= HORA_FIM; m += 60) horas.push(minToStr(m));
    const totalHeight = (HORA_FIM - HORA_INICIO) * PX_POR_MIN;

    // Current time line
    const now = new Date();
    const nowMin = now.getHours() * 60 + now.getMinutes();
    const nowTop = (nowMin - HORA_INICIO) * PX_POR_MIN;

    const handleClicarBloco = (e: React.MouseEvent, bloco: BlocoAgenda) => {
        e.stopPropagation();
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setCardPos({ x: rect.left, y: rect.bottom + 8 });
        setSelectedBloco(bloco);
    };

    // ─── Render Bloco ────────────────────────────
    const renderBloco = (b: BlocoAgenda, compact = false) => {
        const top = (b.horaInicio - HORA_INICIO) * PX_POR_MIN;
        const height = b.duracao * PX_POR_MIN;
        const isConflito = b.paciente === 'Conflito';
        const isCyan = b.statusCor === '#13ecec';

        if (isConflito) {
            return (
                <div key={b.id} className="absolute w-full px-0.5" style={{ top, height }}>
                    <div className="w-full h-full rounded-md border-l-4 border-red-500 border-dashed bg-red-50 dark:bg-red-900/10 flex items-center justify-center cursor-pointer hover:shadow-md transition-shadow"
                        onClick={(e) => handleClicarBloco(e, b)}>
                        <span className="text-red-500 text-xs font-bold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">warning</span>
                            {!compact && 'Conflito'}
                        </span>
                    </div>
                </div>
            );
        }

        return (
            <div key={b.id} className="absolute w-full px-0.5" style={{ top, height }}>
                <div onClick={(e) => handleClicarBloco(e, b)}
                    className={`w-full h-full rounded-md border-l-[3px] p-1.5 cursor-pointer hover:shadow-md transition-shadow flex flex-col overflow-hidden
                        ${b.tipo === 'alerta' ? 'bg-red-50 dark:bg-red-900/10 border-red-500' : isCyan ? 'bg-teal-50 dark:bg-teal-900/10' : `bg-${b.corPlano}-50 dark:bg-${b.corPlano}-900/10 border-${b.corPlano}-500`}`}
                    style={isCyan ? { borderColor: '#13ecec' } : {}}>
                    <p className="text-[11px] font-bold text-[#0d1b1b] dark:text-slate-100 truncate leading-tight">{b.paciente}</p>
                    {!compact && height > 40 && (
                        <p className={`text-[10px] mt-0.5 truncate leading-tight font-medium ${isCyan ? 'text-teal-700 dark:text-teal-300' : b.tipo === 'alerta' ? 'text-red-600' : `text-${b.corPlano}-700`}`}>
                            {minToStr(b.horaInicio)} - {minToStr(b.horaInicio + b.duracao)}
                        </p>
                    )}
                    {!compact && height > 60 && (
                        <p className="text-[9px] text-gray-500 dark:text-gray-400 mt-auto truncate">{b.medico}</p>
                    )}
                </div>
            </div>
        );
    };

    // ─── VIEW: DIA ───────────────────────────────
    const renderDia = () => (
        <div className="flex-1 bg-white dark:bg-[#1c2725] rounded-xl border border-[#e7f3f3] dark:border-[#2a3a38] flex flex-col overflow-hidden shadow-sm dark:shadow-none min-h-0">
            {/* Day header */}
            <div className="flex border-b border-[#e7f3f3] dark:border-[#2a3a38] shrink-0">
                <div className="w-16 shrink-0 border-r border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#10221f] flex items-center justify-center">
                    <span className="text-[10px] font-bold text-[#4c9a9a]">GMT-3</span>
                </div>
                <div className="flex-1 py-3 flex flex-col items-center justify-center">
                    <span className="text-[11px] font-bold text-[#4c9a9a]">{NOMES_DIA[currentDate.getDay()]}</span>
                    <span className={`text-2xl font-black leading-none mt-0.5 ${isSameDay(currentDate, today) ? 'bg-[#13ecec] text-[#0d1b1b] size-10 rounded-full flex items-center justify-center' : 'text-[#0d1b1b] dark:text-slate-100'}`}>
                        {currentDate.getDate()}
                    </span>
                </div>
            </div>

            {/* Timeline */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto flex relative pt-4 pb-8" style={{ minHeight: 0 }}>
                <div className="w-16 shrink-0 border-r border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#10221f] relative" style={{ height: totalHeight }}>
                    {horas.map((h, i) => (
                        <div key={h} className="absolute w-full flex items-center justify-center" style={{ top: i * PX_POR_HORA - 9 }}>
                            <span className="text-[10px] font-semibold text-[#4c9a9a] dark:text-slate-400 bg-[#f8fcfc] dark:bg-[#10221f] px-1">{h}</span>
                        </div>
                    ))}
                </div>
                <div className="flex-1 relative" style={{ height: totalHeight }}>
                    {/* Horizontal lines */}
                    {horas.map((_, i) => (
                        <div key={`line-${i}`} className="absolute w-full border-b border-[#e7f3f3]/60 dark:border-[#2a3a38]/60" style={{ top: i * PX_POR_HORA }} />
                    ))}
                    {/* Current time */}
                    {isSameDay(currentDate, today) && nowMin >= HORA_INICIO && nowMin <= HORA_FIM && (
                        <div className="absolute w-full flex items-center pointer-events-none z-10" style={{ top: nowTop }}>
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500 -ml-1" />
                            <div className="flex-1 h-[2px] bg-red-500" />
                        </div>
                    )}
                    {/* Blocos */}
                    {getBlocosForDate(currentDate).map(b => renderBloco(b))}
                </div>
            </div>
        </div>
    );

    // ─── VIEW: SEMANA ────────────────────────────
    const renderSemana = () => {
        const weekDays = getWeekDays();
        return (
            <div className="flex-1 bg-white dark:bg-[#1c2725] rounded-xl border border-[#e7f3f3] dark:border-[#2a3a38] flex flex-col overflow-hidden shadow-sm dark:shadow-none min-h-0">
                {/* Week headers */}
                <div className="flex border-b border-[#e7f3f3] dark:border-[#2a3a38] shrink-0">
                    <div className="w-14 shrink-0 border-r border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#10221f] flex items-center justify-center">
                        <span className="text-[9px] font-bold text-[#4c9a9a] dark:text-slate-400">GMT-3</span>
                    </div>
                    <div className="flex-1 grid grid-cols-7 divide-x divide-[#e7f3f3] dark:divide-[#2a3a38]">
                        {weekDays.map((d, i) => (
                            <div key={i} className="py-2 flex flex-col items-center justify-center cursor-pointer hover:bg-[#f8fcfc] dark:hover:bg-[#10221f] transition-colors"
                                onClick={() => { setCurrentDate(d); setViewMode('Dia'); }}>
                                <span className="text-[10px] font-bold text-[#4c9a9a] dark:text-slate-400">{NOMES_DIA[d.getDay()]}</span>
                                <span className={`text-base font-black leading-none mt-0.5 ${isSameDay(d, today) ? 'bg-[#13ecec] text-[#0d1b1b] size-7 rounded-full flex items-center justify-center text-sm' : 'text-[#0d1b1b] dark:text-slate-100'}`}>
                                    {d.getDate()}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto flex relative pt-4 pb-8" style={{ minHeight: 0 }}>
                    <div className="w-14 shrink-0 border-r border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#10221f] relative" style={{ height: totalHeight }}>
                        {horas.map((h, i) => (
                            <div key={h} className="absolute w-full flex items-center justify-center" style={{ top: i * PX_POR_HORA - 8 }}>
                                <span className="text-[9px] font-semibold text-[#4c9a9a] dark:text-slate-400 bg-[#f8fcfc] dark:bg-[#10221f] px-0.5">{h}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex-1 grid grid-cols-7 divide-x divide-[#e7f3f3] dark:divide-[#2a3a38] relative" style={{ height: totalHeight }}>
                        {/* Horizontal lines */}
                        <div className="absolute inset-0 pointer-events-none">
                            {horas.map((_, i) => (
                                <div key={`hline-${i}`} className="border-b border-[#e7f3f3]/50 dark:border-[#2a3a38]/50" style={{ height: PX_POR_HORA }} />
                            ))}
                        </div>
                        {/* Current time line */}
                        {nowMin >= HORA_INICIO && nowMin <= HORA_FIM && (
                            <div className="absolute w-full flex items-center pointer-events-none z-10" style={{ top: nowTop }}>
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <div className="flex-1 h-px bg-red-500" />
                            </div>
                        )}
                        {/* Day columns */}
                        {weekDays.map((d, i) => (
                            <div key={i} className="relative group/col hover:bg-[#f8fcfc]/40 dark:hover:bg-[#10221f]/20 transition-colors">
                                {getBlocosForDate(d).map(b => renderBloco(b, false))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    // ─── VIEW: MÊS ───────────────────────────────
    const renderMes = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDow = getFirstDayOfMonth(year, month);
        const prevMonthDays = getDaysInMonth(year, month - 1);

        // Build grid: 42 cells (6 rows × 7 cols)
        const cells: { day: number; isCurrentMonth: boolean; date: Date }[] = [];
        // Previous month fill
        for (let i = firstDow - 1; i >= 0; i--) {
            const d = prevMonthDays - i;
            cells.push({ day: d, isCurrentMonth: false, date: new Date(year, month - 1, d) });
        }
        // Current month
        for (let d = 1; d <= daysInMonth; d++) {
            cells.push({ day: d, isCurrentMonth: true, date: new Date(year, month, d) });
        }
        // Next month fill
        const remaining = 42 - cells.length;
        for (let d = 1; d <= remaining; d++) {
            cells.push({ day: d, isCurrentMonth: false, date: new Date(year, month + 1, d) });
        }

        // Trim to 5 rows if last row is all next month
        const rows = [];
        for (let i = 0; i < cells.length; i += 7) {
            rows.push(cells.slice(i, i + 7));
        }
        if (rows.length > 5 && rows[5].every(c => !c.isCurrentMonth)) rows.pop();

        return (
            <div className="flex-1 bg-white dark:bg-[#1c2725] rounded-xl border border-[#e7f3f3] dark:border-[#2a3a38] flex flex-col overflow-hidden shadow-sm dark:shadow-none min-h-0">
                {/* Day names header */}
                <div className="grid grid-cols-7 border-b border-[#e7f3f3] dark:border-[#2a3a38] shrink-0">
                    {NOMES_DIA.map(d => (
                        <div key={d} className="py-2 text-center text-[11px] font-bold text-[#4c9a9a] dark:text-slate-400">{d}</div>
                    ))}
                </div>

                {/* Grid */}
                <div className="flex-1 grid overflow-y-auto" style={{ gridTemplateRows: `repeat(${rows.length}, minmax(100px, 1fr))` }}>
                    {rows.map((row, ri) => (
                        <div key={ri} className="grid grid-cols-7 divide-x divide-[#e7f3f3] dark:divide-[#2a3a38] border-b border-[#e7f3f3] dark:border-[#2a3a38] last:border-b-0">
                            {row.map((cell, ci) => {
                                const blocos = getBlocosForDate(cell.date);
                                const isToday = isSameDay(cell.date, today);
                                return (
                                    <div key={ci}
                                        className={`p-1.5 flex flex-col gap-0.5 cursor-pointer hover:bg-[#f8fcfc] dark:hover:bg-[#10221f] transition-colors min-h-[100px] ${!cell.isCurrentMonth ? 'opacity-40' : ''}`}
                                        onClick={() => { setCurrentDate(cell.date); setViewMode('Dia'); }}>
                                        <span className={`text-xs font-bold self-end mb-0.5 ${isToday ? 'bg-[#13ecec] text-[#0d1b1b] size-6 rounded-full flex items-center justify-center' : 'text-[#0d1b1b] dark:text-slate-100'}`}>
                                            {cell.day}
                                        </span>
                                        {blocos.slice(0, 3).map(b => (
                                            <div key={b.id}
                                                onClick={(e) => { e.stopPropagation(); handleClicarBloco(e, b); }}
                                                className={`rounded px-1.5 py-0.5 text-[10px] font-semibold truncate cursor-pointer hover:opacity-80 transition-opacity
                                                    ${b.tipo === 'alerta' ? 'bg-red-100 text-red-700' : b.statusCor === '#13ecec' ? 'bg-teal-100 text-teal-700' : `bg-${b.corPlano}-100 text-${b.corPlano}-700`}`}>
                                                {minToStr(b.horaInicio)} {b.paciente}
                                            </div>
                                        ))}
                                        {blocos.length > 3 && (
                                            <span className="text-[10px] font-bold text-[#4c9a9a] dark:text-slate-400 px-1">+{blocos.length - 3} mais</span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    // ─── VIEW: ANO ───────────────────────────────
    const renderAno = () => {
        const year = currentDate.getFullYear();
        return (
            <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                    {Array.from({ length: 12 }, (_, monthIdx) => {
                        const daysInMonth = getDaysInMonth(year, monthIdx);
                        const firstDow = getFirstDayOfMonth(year, monthIdx);
                        const isCurrentMonth = today.getFullYear() === year && today.getMonth() === monthIdx;

                        // Build mini calendar cells
                        const cells: (number | null)[] = [];
                        for (let i = 0; i < firstDow; i++) cells.push(null);
                        for (let d = 1; d <= daysInMonth; d++) cells.push(d);

                        return (
                            <div key={monthIdx}
                                className={`bg-white dark:bg-[#1c2725] rounded-xl border shadow-sm p-3 cursor-pointer hover:shadow-md transition-all ${isCurrentMonth ? 'border-[#13ecec] ring-1 ring-[#13ecec]/20' : 'border-[#e7f3f3] dark:border-[#2a3a38]'}`}
                                onClick={() => { setCurrentDate(new Date(year, monthIdx, 1)); setViewMode('Mês'); }}>
                                <h3 className={`text-sm font-bold mb-2 ${isCurrentMonth ? 'text-[#13ecec]' : 'text-[#0d1b1b] dark:text-slate-100'}`}>
                                    {NOMES_MES[monthIdx]}
                                </h3>
                                {/* Mini day headers */}
                                <div className="grid grid-cols-7 gap-0 mb-1">
                                    {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d, i) => (
                                        <span key={i} className="text-[8px] font-bold text-[#4c9a9a] text-center">{d}</span>
                                    ))}
                                </div>
                                {/* Mini days grid */}
                                <div className="grid grid-cols-7 gap-0">
                                    {cells.map((day, i) => {
                                        const isToday = day !== null && today.getFullYear() === year && today.getMonth() === monthIdx && today.getDate() === day;
                                        return (
                                            <div key={i} className="flex items-center justify-center py-0.5">
                                                {day !== null ? (
                                                    <span className={`text-[10px] font-medium size-5 flex items-center justify-center rounded-full ${isToday ? 'bg-[#13ecec] text-[#0d1b1b] font-bold' : 'text-[#0d1b1b] dark:text-slate-300'}`}>
                                                        {day}
                                                    </span>
                                                ) : <span className="size-5" />}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div className="bg-[#f6f8f8] dark:bg-[#10221f] text-[#0d1b1b] dark:text-slate-100 antialiased h-screen flex overflow-hidden font-display">
            <Sidebar />

            <main className="flex-1 flex flex-col h-full overflow-hidden" onClick={() => setSelectedBloco(null)}>
                <TopbarAdmin showDateControls={false} showProFilter={true} showRoomFilter={true} />

                <div className="flex-1 overflow-hidden p-4 md:p-6 bg-[#f8fcfc] dark:bg-[#10221f] flex flex-col">
                    <div className="flex-1 max-w-[1400px] w-full mx-auto flex flex-col gap-3 overflow-hidden">

                        {/* ── Top Controls (Google Calendar style) ── */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
                            <div className="flex items-center gap-3">
                                {/* Today button */}
                                <button onClick={navHoje}
                                    className="px-4 py-1.5 text-sm font-bold text-[#0d1b1b] dark:text-slate-100 border border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] rounded-lg hover:bg-gray-50 dark:hover:bg-[#2a3a38] transition">
                                    Hoje
                                </button>
                                {/* Nav arrows */}
                                <div className="flex items-center gap-0.5">
                                    <button onClick={navPrev} className="p-1.5 text-[#4c9a9a] hover:bg-gray-100 dark:hover:bg-[#2a3a38] rounded-full transition">
                                        <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                                    </button>
                                    <button onClick={navNext} className="p-1.5 text-[#4c9a9a] hover:bg-gray-100 dark:hover:bg-[#2a3a38] rounded-full transition">
                                        <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                                    </button>
                                </div>
                                {/* Title */}
                                <h1 className="text-lg md:text-xl font-bold text-[#0d1b1b] dark:text-slate-100">
                                    {getTitle()}
                                </h1>
                            </div>

                            <div className="flex flex-wrap items-center gap-3">
                                {/* View Mode Switcher (Google Calendar style) */}
                                <div className="flex bg-white dark:bg-[#1c2725] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-lg overflow-hidden">
                                    {(['Dia', 'Semana', 'Mês', 'Ano'] as ViewMode[]).map(m => (
                                        <button key={m} onClick={() => setViewMode(m)}
                                            className={`px-3 py-1.5 text-xs font-bold transition border-r border-[#e7f3f3] dark:border-[#2a3a38] last:border-r-0 ${viewMode === m ? 'bg-[#e7f3f3] dark:bg-[#2a3a38] text-[#0d1b1b] dark:text-slate-100' : 'text-[#4c9a9a] hover:bg-[#f8fcfc] dark:hover:bg-[#10221f]'}`}>
                                            {m}
                                        </button>
                                    ))}
                                </div>

                                <Link to="/novo-agendamento" className="flex items-center gap-1 bg-[#13ecec] hover:bg-[#0EBDBD] text-[#0d1b1b] font-bold text-sm py-1.5 px-4 rounded-lg shadow-sm transition">
                                    <span className="material-symbols-outlined text-[18px]">add</span> Agendar
                                </Link>
                            </div>
                        </div>

                        {/* ── Calendar View ── */}
                        {viewMode === 'Dia' && renderDia()}
                        {viewMode === 'Semana' && renderSemana()}
                        {viewMode === 'Mês' && renderMes()}
                        {viewMode === 'Ano' && renderAno()}
                    </div>
                </div>

                {/* ── Patient Card Popover ── */}
                {selectedBloco && selectedBloco.paciente !== 'Conflito' && (
                    <div
                        className="fixed z-50 bg-white dark:bg-[#1c2725] rounded-2xl shadow-xl border border-[#e7f3f3] dark:border-[#2a3a38] w-80 p-5 flex flex-col gap-4"
                        style={{ top: Math.min(cardPos.y, window.innerHeight - 400), left: Math.min(cardPos.x - 160, window.innerWidth - 350) }}
                        onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-start">
                            <button onClick={() => navigate(`/pacientes/${selectedBloco.pacienteId}`)} className="flex gap-3 items-center group/avatar hover:opacity-80 transition-opacity">
                                {selectedBloco.avatar ? (
                                    <div className="size-12 rounded-full bg-cover bg-center border border-gray-100 group-hover/avatar:ring-2 group-hover/avatar:ring-[#13ecec] transition-all" style={{ backgroundImage: `url(${selectedBloco.avatar})` }} />
                                ) : (
                                    <div className="size-12 rounded-full bg-[#13ecec]/20 text-[#0d1b1b] flex items-center justify-center font-bold text-lg group-hover/avatar:ring-2 group-hover/avatar:ring-[#13ecec] transition-all">
                                        {selectedBloco.initials}
                                    </div>
                                )}
                                <div className="flex flex-col">
                                    <p className="font-bold text-base text-[#0d1b1b] dark:text-slate-100 leading-tight group-hover/avatar:text-[#13ecec] transition-colors">{selectedBloco.paciente}</p>
                                    <p className="text-[10px] font-bold text-[#13ecec] uppercase tracking-wider mt-0.5">{selectedBloco.plano}</p>
                                </div>
                            </button>
                            <button onClick={() => setSelectedBloco(null)} className="text-gray-400 hover:text-gray-600 dark:hover:text-slate-200">
                                <span className="material-symbols-outlined text-[20px]">close</span>
                            </button>
                        </div>

                        <div className="flex flex-col gap-3 border-y border-[#e7f3f3] dark:border-[#2a3a38] py-4">
                            <div className="flex gap-3 items-center text-sm text-[#0d1b1b] dark:text-slate-200">
                                <span className="material-symbols-outlined text-[#4c9a9a] text-[18px]">medical_services</span>
                                <span className="font-medium">Cardiologia • Retorno</span>
                            </div>
                            <div className="flex gap-3 items-center text-sm text-[#0d1b1b] dark:text-slate-200">
                                <span className="material-symbols-outlined text-[#4c9a9a] text-[18px]">calendar_month</span>
                                <span className="font-medium">{minToStr(selectedBloco.horaInicio)} - {minToStr(selectedBloco.horaInicio + selectedBloco.duracao)}</span>
                            </div>
                            <div className="flex gap-3 items-center text-sm text-[#0d1b1b] dark:text-slate-200">
                                <span className="material-symbols-outlined text-[#4c9a9a] text-[18px]">stethoscope</span>
                                <span className="font-medium">{selectedBloco.medico}</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <button className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors">
                                <span className="material-symbols-outlined text-[16px]">check</span> Confirmar
                            </button>
                            <button className="bg-[#f0f4ff] text-blue-700 hover:bg-blue-100 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors">
                                <span className="material-symbols-outlined text-[16px]">login</span> Check-in
                            </button>
                            <button className="border border-[#e7f3f3] dark:border-[#2a3a38] text-[#0d1b1b] dark:text-slate-100 hover:bg-gray-50 dark:hover:bg-[#2a3a38] py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors">
                                <span className="material-symbols-outlined text-[16px]">event_repeat</span> Reagendar
                            </button>
                            <button className="bg-red-50 text-red-700 hover:bg-red-100 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors">
                                <span className="material-symbols-outlined text-[16px]">close</span> Cancelar
                            </button>
                        </div>

                        <div className="flex justify-center mt-1">
                            <Link to={`/pacientes/${selectedBloco.pacienteId}/anamnese/novo`}
                                className="flex text-[#13ecec] text-xs font-bold gap-1 items-center hover:text-[#0EBDBD] transition-colors">
                                <span className="material-symbols-outlined text-[16px]">assignment</span>
                                Anamnese / Prontuário
                            </Link>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
