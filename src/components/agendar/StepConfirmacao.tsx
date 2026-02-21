import type { AgendamentoData } from './types';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type Props = { agendamento: AgendamentoData; confirmado: boolean; };

export default function StepConfirmacao({ agendamento, confirmado }: Props) {
    const [antecipar, setAntecipar] = useState(false);

    if (confirmado) {
        return (
            <div className="flex flex-col items-center gap-6 py-10">
                <div className="h-20 w-20 rounded-full bg-[#13ecec] flex items-center justify-center"><span className="material-symbols-outlined text-white text-4xl">check</span></div>
                <div className="text-center"><h2 className="text-2xl font-black text-[#0d1b1b] dark:text-white">Agendamento Confirmado!</h2><p className="text-sm text-[#4c9a9a] dark:text-slate-400 mt-1">Enviamos os detalhes para seu e-mail.</p></div>
                <div className="bg-[#f8fcfc] dark:bg-[#10221f] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl px-5 py-3 flex items-center gap-3"><span className="text-sm text-[#4c9a9a] dark:text-slate-400">Código do agendamento</span><span className="font-mono font-bold text-lg text-[#0d1b1b] dark:text-white">#LIF-8823</span></div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] px-5 py-2.5 text-sm font-bold text-[#0d1b1b] dark:text-slate-200 hover:bg-[#e7f3f3] dark:hover:bg-[#1A2C2C] transition-colors"><span className="material-symbols-outlined text-[16px]">calendar_add_on</span>Add. Calendário</button>
                    <button className="flex items-center gap-2 rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] px-5 py-2.5 text-sm font-bold text-[#0d1b1b] dark:text-slate-200 hover:bg-[#e7f3f3] dark:hover:bg-[#1A2C2C] transition-colors"><span className="material-symbols-outlined text-[16px]">print</span>Imprimir</button>
                </div>
                <Link to="/meus-agendamentos" className="flex items-center justify-center gap-2 rounded-lg bg-[#13ecec] px-8 py-3 font-bold text-[#0d1b1b] hover:bg-[#0ebaba] shadow-sm transition-all text-sm w-full max-w-xs">Ir para Meus Agendamentos</Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-5">
            {/* Detalhes */}
            <div className="bg-white dark:bg-[#1c2725] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl p-6 flex flex-col gap-5">
                <h3 className="flex items-center gap-2 font-bold text-[#0d1b1b] dark:text-white text-base"><span className="material-symbols-outlined text-[#13ecec] text-[20px]">event_note</span>Detalhes do Agendamento</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div><p className="text-[10px] font-bold uppercase text-[#4c9a9a] dark:text-slate-500 tracking-wider">SERVIÇO</p><p className="font-bold text-sm text-[#0d1b1b] dark:text-white">{agendamento.servico?.nome} <span className="text-xs text-[#4c9a9a]">{agendamento.servico?.duracao}</span></p><p className="text-xs text-[#4c9a9a] dark:text-slate-400">Avaliação de rotina e check-up.</p></div>
                    <div className="flex items-center gap-3"><img src={agendamento.profissional?.avatar} alt="" className="h-10 w-10 rounded-full" /><div><p className="text-[10px] font-bold uppercase text-[#4c9a9a] dark:text-slate-500 tracking-wider">PROFISSIONAL</p><p className="font-bold text-sm text-[#0d1b1b] dark:text-white">{agendamento.profissional?.nome}</p><p className="text-xs text-[#4c9a9a] dark:text-slate-400">{agendamento.profissional?.especialidade} • {agendamento.profissional?.crm}</p></div></div>
                    <div><p className="text-[10px] font-bold uppercase text-[#4c9a9a] dark:text-slate-500 tracking-wider">DATA E HORA</p><p className="font-bold text-sm text-[#0d1b1b] dark:text-white flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-[#13ecec]">calendar_month</span>{agendamento.data}</p><p className="text-xs text-[#4c9a9a] dark:text-slate-400 flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span>{agendamento.horario} — {agendamento.servico?.duracao}</p></div>
                    <div><p className="text-[10px] font-bold uppercase text-[#4c9a9a] dark:text-slate-500 tracking-wider">LOCAL</p><p className="font-bold text-sm text-[#0d1b1b] dark:text-white flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-[#13ecec]">location_on</span>Unidade Paulista</p><p className="text-xs text-[#4c9a9a] dark:text-slate-400">Av. Paulista, 1000 - Sala 304 • São Paulo - SP</p></div>
                </div>
                <div className="border-t border-[#e7f3f3] dark:border-[#2a3a38] pt-4 flex items-center gap-3"><div className="h-9 w-9 rounded-full bg-[#13ecec]/20 flex items-center justify-center text-[#0ebaba]"><span className="material-symbols-outlined text-[18px]">person</span></div><div><p className="text-[10px] font-bold uppercase text-[#4c9a9a] dark:text-slate-500 tracking-wider">PACIENTE</p><p className="font-bold text-sm text-[#0d1b1b] dark:text-white">Ana Souza</p><p className="text-xs text-[#4c9a9a] dark:text-slate-400">(11) 98888-9999 • ana.souza@email.com</p></div><button className="ml-auto text-xs font-bold text-[#13ecec] hover:underline">Editar</button></div>
            </div>
            {/* Opção antecipação */}
            <div className="flex items-center justify-between bg-white dark:bg-[#1c2725] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl p-4">
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-[#4c9a9a] dark:text-slate-400 text-[22px]">notifications_active</span><div><p className="text-sm font-bold text-[#0d1b1b] dark:text-white">Quero adiantar se abrir vaga</p><p className="text-[10px] text-[#4c9a9a] dark:text-slate-400">Se um horário anterior ficar disponível com este profissional, notificaremos você por SMS/WhatsApp.</p></div></div>
                <div onClick={() => setAntecipar(!antecipar)} className={`h-6 w-11 rounded-full relative cursor-pointer transition-colors ${antecipar ? 'bg-[#13ecec]' : 'bg-[#e7f3f3] dark:bg-[#1A2C2C]'}`}>
                    <div className={`h-5 w-5 bg-white rounded-full shadow absolute top-0.5 transition-all duration-200 ${antecipar ? 'left-[22px]' : 'left-0.5'}`} />
                </div>
            </div>
            {/* Políticas */}
            <div className="bg-white dark:bg-[#1c2725] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl p-5 flex flex-col gap-3">
                <h4 className="flex items-center gap-2 font-bold text-sm text-[#0d1b1b] dark:text-white"><span className="material-symbols-outlined text-[18px]">policy</span>POLÍTICAS DE AGENDAMENTO</h4>
                <div className="flex items-start gap-2 text-xs"><span className="text-green-500">✓</span><div><span className="font-bold text-[#0d1b1b] dark:text-slate-200">Cancelamento Gratuito:</span> <span className="text-[#4c9a9a] dark:text-slate-400">Você pode cancelar ou reagendar sem custos até 24 horas antes do horário marcado.</span></div></div>
                <div className="flex items-start gap-2 text-xs"><span className="text-yellow-500">⚠</span><div><span className="font-bold text-[#0d1b1b] dark:text-slate-200">Chegada:</span> <span className="text-[#4c9a9a] dark:text-slate-400">Recomendamos chegar com 15 minutos de antecedência para preenchimento de ficha cadastral.</span></div></div>
                <div className="flex items-start gap-2 text-xs"><span className="text-blue-500">📋</span><div><span className="font-bold text-[#0d1b1b] dark:text-slate-200">Documentos:</span> <span className="text-[#4c9a9a] dark:text-slate-400">Não esqueça de trazer um documento com foto e sua carteirinha do convênio (se aplicável).</span></div></div>
            </div>
        </div>
    );
}
