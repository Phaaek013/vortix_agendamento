import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderPublic from '../components/public/HeaderPublic';
import FooterPublic from '../components/public/FooterPublic';

type StatusAgendamento = 'CONFIRMADO' | 'PENDENTE' | 'CONCLUIDO' | 'CANCELADO';

type Agendamento = {
    id: string;
    dtaHora: string;
    profissional: string;
    especialidade: string;
    status: StatusAgendamento;
};

const mockAgendamentos: Agendamento[] = [
    { id: '1', dtaHora: '25/03/2026 às 14:30', profissional: 'Dr. Hans Chucrute', especialidade: 'Cardiologia', status: 'CONFIRMADO' },
    { id: '2', dtaHora: '30/03/2026 às 09:00', profissional: 'Dra. Ana Silva', especialidade: 'Dermatologia', status: 'PENDENTE' },
    { id: '3', dtaHora: '10/02/2026 às 11:15', profissional: 'Dr. Carlos Mendes', especialidade: 'Clínica Médica', status: 'CONCLUIDO' },
    { id: '4', dtaHora: '05/01/2026 às 16:45', profissional: 'Dra. Beatriz Santos', especialidade: 'Ortopedia', status: 'CANCELADO' },
];

export default function MeusAgendamentos() {
    const [filtroStatus, setFiltroStatus] = useState<string>('TODOS');

    const agendamentosFiltrados = mockAgendamentos.filter(agendamento => {
        if (filtroStatus === 'TODOS') return true;
        if (filtroStatus === 'PROXIMOS') return agendamento.status === 'CONFIRMADO' || agendamento.status === 'PENDENTE';
        return agendamento.status === filtroStatus;
    });

    const getStatusStyle = (status: StatusAgendamento) => {
        switch (status) {
            case 'CONFIRMADO': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
            case 'PENDENTE': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
            case 'CONCLUIDO': return 'bg-gray-100 text-gray-800 dark:bg-[#1A2C2C] dark:text-gray-400';
            case 'CANCELADO': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusText = (status: StatusAgendamento) => {
        switch (status) {
            case 'CONFIRMADO': return 'Confirmado';
            case 'PENDENTE': return 'Aguardando Confirmação';
            case 'CONCLUIDO': return 'Concluído';
            case 'CANCELADO': return 'Cancelado';
            default: return status;
        }
    };

    return (
        <div className="flex min-h-screen w-full flex-col bg-[#f8fcfc] dark:bg-[#10221f] font-display text-[#0d1b1b] dark:text-slate-100 transition-colors duration-200">
            {/* Header */}
            <HeaderPublic />

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center w-full px-4 md:px-10 py-6">
                <div className="w-full max-w-[1200px] flex flex-col gap-6">
                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap gap-2 px-1">
                        <Link className="text-[#4c9a9a] dark:text-slate-400 hover:underline text-sm font-medium" to="/home">Início</Link>
                        <span className="text-[#4c9a9a] text-sm font-medium">/</span>
                        <span className="text-[#0d1b1b] dark:text-slate-200 text-sm font-medium">Meus Agendamentos</span>
                    </div>

                    {/* Page Heading */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#e7f3f3] dark:border-[#2a3a38]">
                        <div className="flex flex-col gap-2 max-w-2xl">
                            <h1 className="text-[#0d1b1b] dark:text-white text-3xl md:text-4xl font-black tracking-tight">Meus Agendamentos</h1>
                            <p className="text-[#4c9a9a] dark:text-slate-400 text-base md:text-lg">Acompanhe suas consultas, retornos e histórico de atendimentos.</p>
                        </div>
                        <Link to="/agendar" className="flex shrink-0 cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-[#13ecec] hover:bg-[#0ebaba] transition-colors text-[#0d1b1b] font-bold shadow-sm">
                            <span className="material-symbols-outlined mr-2 text-[18px]">add</span>
                            Novo Agendamento
                        </Link>
                    </div>

                    {/* Filter Bar - Pill Style */}
                    <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
                        <button
                            onClick={() => setFiltroStatus('TODOS')}
                            className={`flex h-9 shrink-0 items-center justify-center rounded-lg px-4 font-bold text-sm shadow-sm dark:shadow-none transition-transform active:scale-95 ${filtroStatus === 'TODOS' ? 'bg-[#13ecec] text-[#0d1b1b]' : 'bg-[#e7f3f3] dark:bg-[#1A2C2C] text-[#0d1b1b] dark:text-slate-100 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                        >
                            Todos
                        </button>
                        <button
                            onClick={() => setFiltroStatus('PROXIMOS')}
                            className={`flex h-9 shrink-0 items-center justify-center rounded-lg px-4 font-bold text-sm shadow-sm dark:shadow-none transition-transform active:scale-95 ${filtroStatus === 'PROXIMOS' ? 'bg-[#13ecec] text-[#0d1b1b]' : 'bg-[#e7f3f3] dark:bg-[#1A2C2C] text-[#0d1b1b] dark:text-slate-100 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                        >
                            Próximos
                        </button>
                        <button
                            onClick={() => setFiltroStatus('CONCLUIDO')}
                            className={`flex h-9 shrink-0 items-center justify-center rounded-lg px-4 font-bold text-sm shadow-sm dark:shadow-none transition-transform active:scale-95 ${filtroStatus === 'CONCLUIDO' ? 'bg-[#13ecec] text-[#0d1b1b]' : 'bg-[#e7f3f3] dark:bg-[#1A2C2C] text-[#0d1b1b] dark:text-slate-100 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                        >
                            Concluídos
                        </button>
                        <button
                            onClick={() => setFiltroStatus('CANCELADO')}
                            className={`flex h-9 shrink-0 items-center justify-center rounded-lg px-4 font-bold text-sm shadow-sm dark:shadow-none transition-transform active:scale-95 ${filtroStatus === 'CANCELADO' ? 'bg-[#13ecec] text-[#0d1b1b]' : 'bg-[#e7f3f3] dark:bg-[#1A2C2C] text-[#0d1b1b] dark:text-slate-100 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                        >
                            Cancelados
                        </button>
                    </div>

                    {/* Agendamentos List */}
                    <div className="flex flex-col gap-4">
                        {agendamentosFiltrados.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-16 bg-white dark:bg-[#1c2725] rounded-xl border border-[#cfe7e7] dark:border-[#2a3a38]">
                                <span className="material-symbols-outlined text-[#4c9a9a] dark:text-slate-500 text-5xl mb-4">event_busy</span>
                                <h3 className="text-xl font-bold text-[#0d1b1b] dark:text-white">Nenhum agendamento encontrado</h3>
                                <p className="text-[#4c9a9a] dark:text-slate-400 mt-2 text-center max-w-md">Você não possui agendamentos com este status no momento.</p>
                            </div>
                        ) : (
                            agendamentosFiltrados.map((agendamento) => (
                                <article key={agendamento.id} className="group relative flex flex-col md:flex-row md:items-center justify-between gap-4 overflow-hidden rounded-xl border border-[#cfe7e7] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] p-5 shadow-sm transition-all hover:border-[#4c9a9a] dark:hover:border-[#4c9a9a]">

                                    <div className="flex flex-col md:flex-row gap-4 md:items-center">
                                        {/* Date/Time Block */}
                                        <div className="flex flex-row md:flex-col items-center justify-between md:justify-center md:min-w-[140px] px-4 py-2 md:py-4 bg-[#e7f3f3] dark:bg-[#1A2C2C] rounded-lg">
                                            <div className="flex items-center gap-2 md:flex-col md:gap-0">
                                                <span className="material-symbols-outlined text-[#13ecec] md:text-[#13ecec] block md:mb-1">calendar_month</span>
                                                <span className="font-bold text-[#0d1b1b] dark:text-white text-lg">25 Mar</span>
                                            </div>
                                            <span className="text-sm font-semibold text-[#4c9a9a] dark:text-slate-400">14:30</span>
                                        </div>

                                        {/* Info Block */}
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-lg font-bold text-[#0d1b1b] dark:text-white">{agendamento.profissional}</h3>
                                            <div className="flex items-center gap-4 text-sm text-[#4c9a9a] dark:text-slate-400">
                                                <div className="flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-[16px]">stethoscope</span>
                                                    <span>{agendamento.especialidade}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action & Status Block */}
                                    <div className="flex flex-row justify-between md:flex-col md:items-end gap-3 mt-4 md:mt-0 w-full md:w-auto border-t md:border-t-0 border-[#e7f3f3] dark:border-[#2a3a38] pt-4 md:pt-0">
                                        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${getStatusStyle(agendamento.status)}`}>
                                            {getStatusText(agendamento.status)}
                                        </div>

                                        <div className="flex items-center gap-2">
                                            {(agendamento.status === 'CONFIRMADO' || agendamento.status === 'PENDENTE') && (
                                                <>
                                                    <button className="text-sm font-bold text-[#4c9a9a] dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                                                        Cancelar
                                                    </button>
                                                    <span className="text-[#e7f3f3] dark:text-[#2a3a38]">|</span>
                                                    <button className="text-sm font-bold text-[#4c9a9a] dark:text-slate-400 hover:text-[#13ecec] transition-colors">
                                                        Reagendar
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            ))
                        )}
                    </div>

                </div>
            </main>

            {/* Footer */}
            <FooterPublic />
        </div>
    );
}
