import type { AgendamentoData } from './types';
import { useState } from 'react';

const diasSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const diasMes = Array.from({ length: 30 }, (_, i) => i + 1);
const horariosManha = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30'];
const horariosTarde = ['13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];
const indisponiveis = ['10:30', '15:30'];

type Props = { agendamento: AgendamentoData; setAgendamento: (a: AgendamentoData) => void };

export default function StepDataHora({ agendamento, setAgendamento }: Props) {
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    const [periodo, setPeriodo] = useState<'manha' | 'tarde'>('manha');
    const horarios = periodo === 'manha' ? horariosManha : horariosTarde;

    const handleDayClick = (day: number) => {
        setSelectedDay(day);
        const dataStr = `${day}/03/2026`;
        setAgendamento({ ...agendamento, data: dataStr, horario: null });
    };

    const handleHorarioClick = (h: string) => {
        setAgendamento({ ...agendamento, horario: h });
    };

    return (
        <div className="flex flex-col gap-4">
            {/* Banner profissional */}
            <div className="flex items-center justify-between bg-white dark:bg-[#1c2725] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl p-4">
                <div className="flex items-center gap-3">
                    <img src={agendamento.profissional?.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
                    <div><p className="font-bold text-sm text-[#0d1b1b] dark:text-white">{agendamento.servico?.nome} • {agendamento.profissional?.nome}</p><p className="flex items-center gap-1 text-xs text-[#4c9a9a] dark:text-slate-400"><span className="material-symbols-outlined text-[14px]">schedule</span>{agendamento.servico?.duracao} estimado</p></div>
                </div>
                <button className="text-xs font-bold text-[#13ecec] hover:underline">Trocar</button>
            </div>
            {/* Calendar + Time Slots */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Calendar */}
                <div className="bg-white dark:bg-[#1c2725] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-[#0d1b1b] dark:text-white">Março 2026</h3>
                        <div className="flex gap-1">
                            <button className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-[#e7f3f3] dark:hover:bg-[#1A2C2C] transition-colors"><span className="material-symbols-outlined text-[#4c9a9a] text-[18px]">chevron_left</span></button>
                            <button className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-[#e7f3f3] dark:hover:bg-[#1A2C2C] transition-colors"><span className="material-symbols-outlined text-[#4c9a9a] text-[18px]">chevron_right</span></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                        {diasSemana.map((d, i) => <span key={i} className="font-bold text-[#4c9a9a] dark:text-slate-500 py-1">{d}</span>)}
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-sm">
                        {/* offset for March 2026 starting on Sunday */}
                        {diasMes.map(d => {
                            const isSelected = selectedDay === d;
                            const isToday = d === 12;
                            return (
                                <button key={d} onClick={() => handleDayClick(d)} className={`h-9 w-9 mx-auto rounded-full flex items-center justify-center font-medium transition-all ${isSelected ? 'bg-[#13ecec] text-[#0d1b1b] font-bold' : isToday ? 'text-[#13ecec] font-bold' : 'text-[#0d1b1b] dark:text-slate-200 hover:bg-[#e7f3f3] dark:hover:bg-[#1A2C2C]'}`}>
                                    {d}
                                </button>
                            );
                        })}
                    </div>
                    <button className="mt-3 text-xs font-bold text-[#13ecec] hover:underline">Próximo horário disponível</button>
                </div>
                {/* Time Slots */}
                <div className="bg-white dark:bg-[#1c2725] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl p-5 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-[#0d1b1b] dark:text-white">{selectedDay ? `${selectedDay} de Março` : 'Selecione um dia'}</h3>
                        <span className="text-xs text-[#4c9a9a] dark:text-slate-500">GMT-3</span>
                    </div>
                    {/* Periodo tabs */}
                    <div className="flex gap-1 bg-[#e7f3f3] dark:bg-[#1A2C2C] rounded-lg p-0.5">
                        <button onClick={() => setPeriodo('manha')} className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-all ${periodo === 'manha' ? 'bg-white dark:bg-[#1c2725] text-[#0d1b1b] dark:text-white shadow-sm' : 'text-[#4c9a9a] dark:text-slate-400'}`}>Manhã</button>
                        <button onClick={() => setPeriodo('tarde')} className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-all ${periodo === 'tarde' ? 'bg-white dark:bg-[#1c2725] text-[#0d1b1b] dark:text-white shadow-sm' : 'text-[#4c9a9a] dark:text-slate-400'}`}>Tarde</button>
                    </div>
                    {/* Slots */}
                    {selectedDay ? (
                        <div className="grid grid-cols-4 gap-2">
                            {horarios.map(h => {
                                const disabled = indisponiveis.includes(h);
                                const active = agendamento.horario === h;
                                return (
                                    <button key={h} disabled={disabled} onClick={() => handleHorarioClick(h)} className={`py-2 rounded-lg text-xs font-semibold transition-all ${disabled ? 'bg-gray-100 dark:bg-[#10221f] text-gray-300 dark:text-slate-600 line-through cursor-not-allowed' : active ? 'bg-[#13ecec] text-[#0d1b1b] ring-2 ring-[#0ebaba] font-bold' : 'border border-[#e7f3f3] dark:border-[#2a3a38] text-[#0d1b1b] dark:text-slate-200 hover:border-[#13ecec] hover:bg-[#13ecec]/5'}`}>
                                        {h}
                                    </button>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-[#4c9a9a] dark:text-slate-500 text-sm py-8">Selecione um dia no calendário</div>
                    )}
                    {/* Alert */}
                    {selectedDay && <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800/30 rounded-lg p-3 text-xs text-yellow-700 dark:text-yellow-400"><span className="font-bold">⚠ Alta procura para este dia.</span> Recomendamos concluir o agendamento em até 5 minutos para garantir seu horário.</div>}
                </div>
            </div>
        </div>
    );
}
