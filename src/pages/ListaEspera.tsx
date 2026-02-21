import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';
import TopbarAdmin from '../components/admin/TopbarAdmin';

type Prioridade = 'Alta' | 'Normal' | 'Baixa';

interface Entrada {
    id: number;
    paciente: { id: number; nome: string; initials: string; cor: string; telefone: string };
    especialidade: string;
    preferencia: string;
    prioridade: Prioridade;
    dataCadastro: string;
    observacao?: string;
}

const prioridadeConfig: Record<Prioridade, { label: string; classes: string }> = {
    Alta: { label: 'Alta', classes: 'bg-red-50 text-red-700 border border-red-100' },
    Normal: { label: 'Normal', classes: 'bg-yellow-50 text-yellow-700 border border-yellow-100' },
    Baixa: { label: 'Baixa', classes: 'bg-gray-100 text-gray-500 border border-gray-200' },
};

const LISTA_ESPERA: Entrada[] = [
    { id: 1, paciente: { id: 5, nome: 'Fernando Torres', initials: 'FT', cor: 'sky', telefone: '(11) 99001-2233' }, especialidade: 'Cardiologia', preferencia: 'Prefere manhã', prioridade: 'Alta', dataCadastro: '13/10/2023', observacao: 'Aguardando vaga urgente - retorno pós-cirúrgico' },
    { id: 2, paciente: { id: 6, nome: 'Beatriz Lima', initials: 'BL', cor: 'pink', telefone: '(11) 98877-4455' }, especialidade: 'Dermatologia', preferencia: 'Qualquer horário', prioridade: 'Normal', dataCadastro: '12/10/2023' },
    { id: 3, paciente: { id: 7, nome: 'Ricardo Cardoso', initials: 'RC', cor: 'violet', telefone: '(11) 97654-3210' }, especialidade: 'Ortopedia', preferencia: 'Tarde', prioridade: 'Normal', dataCadastro: '11/10/2023' },
    { id: 4, paciente: { id: 8, nome: 'Cláudia Ferreira', initials: 'CF', cor: 'amber', telefone: '(11) 96543-2109' }, especialidade: 'Cardiologia', preferencia: 'Prefere sexta', prioridade: 'Alta', dataCadastro: '10/10/2023', observacao: 'Paciente viaja frequentemente' },
    { id: 5, paciente: { id: 9, nome: 'Antônio Moura', initials: 'AM', cor: 'teal', telefone: '(11) 95432-1098' }, especialidade: 'Neurologia', preferencia: 'Prefere manhã', prioridade: 'Baixa', dataCadastro: '09/10/2023' },
    { id: 6, paciente: { id: 10, nome: 'Patrícia Rocha', initials: 'PR', cor: 'rose', telefone: '(11) 94321-0987' }, especialidade: 'Pediatria', preferencia: 'Qualquer horário', prioridade: 'Normal', dataCadastro: '08/10/2023' },
    { id: 7, paciente: { id: 11, nome: 'Eduardo Lopes', initials: 'EL', cor: 'indigo', telefone: '(11) 93210-9876' }, especialidade: 'Ginecologia', preferencia: 'Manhã ou tarde', prioridade: 'Normal', dataCadastro: '07/10/2023' },
];

export default function ListaEspera() {
    const [filtroEspec, setFiltroEspec] = useState('Todas');
    const [filtroPrior, setFiltroPrior] = useState<Prioridade | 'Todas'>('Todas');
    const [busca, setBusca] = useState('');

    const especialidades = ['Todas', ...Array.from(new Set(LISTA_ESPERA.map(e => e.especialidade)))];

    const itens = LISTA_ESPERA.filter(e => {
        const okEspec = filtroEspec === 'Todas' || e.especialidade === filtroEspec;
        const okPrior = filtroPrior === 'Todas' || e.prioridade === filtroPrior;
        const okBusca = busca.length < 2 || e.paciente.nome.toLowerCase().includes(busca.toLowerCase());
        return okEspec && okPrior && okBusca;
    });

    return (
        <div className="bg-[#f6f8f8] dark:bg-[#10221f] text-[#0d1b1b] dark:text-slate-100 antialiased h-screen flex overflow-hidden font-display">
            <Sidebar />

            <main className="flex-1 flex flex-col h-full overflow-hidden">
                <TopbarAdmin showDateControls={false} showProFilter={false} />

                <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#f8fcfc] dark:bg-[#10221f]">
                    <div className="max-w-7xl mx-auto flex flex-col gap-5">

                        {/* Breadcrumb */}


                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-black text-[#0d1b1b] dark:text-slate-100">Lista de Espera</h1>
                                <p className="text-[#4c9a9a] text-sm mt-0.5">Pacientes solicitando vaga antecipada. Clique em "Agendar" ao surgir disponibilidade.</p>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex gap-2 items-center border border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] rounded-xl px-3">
                                    <span className="material-symbols-outlined text-[18px] text-[#4c9a9a]">search</span>
                                    <input value={busca} onChange={e => setBusca(e.target.value)}
                                        className="w-40 py-2 text-sm bg-transparent text-[#0d1b1b] dark:text-slate-100 outline-none placeholder-[#4c9a9a]/60"
                                        placeholder="Buscar..." />
                                </div>
                            </div>
                        </div>

                        {/* Stats KPIs */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {[
                                { label: 'Total na espera', value: LISTA_ESPERA.length, icon: 'hourglass_top', color: 'text-[#13ecec]', bg: 'bg-[#13ecec]/10' },
                                { label: 'Prioridade Alta', value: LISTA_ESPERA.filter(e => e.prioridade === 'Alta').length, icon: 'priority_high', color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/20' },
                                { label: 'Prioridade Normal', value: LISTA_ESPERA.filter(e => e.prioridade === 'Normal').length, icon: 'schedule', color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-900/20' },
                                { label: 'Cardiologia', value: LISTA_ESPERA.filter(e => e.especialidade === 'Cardiologia').length, icon: 'cardiology', color: 'text-violet-500', bg: 'bg-violet-50 dark:bg-violet-900/20' },
                            ].map(card => (
                                <div key={card.label} className="bg-white dark:bg-[#1c2725] rounded-xl border border-[#e7f3f3] dark:border-[#2a3a38] p-4 flex items-center gap-3 shadow-sm dark:shadow-none">
                                    <div className={`size-10 rounded-xl ${card.bg} flex items-center justify-center shrink-0`}>
                                        <span className={`material-symbols-outlined text-[20px] ${card.color}`}>{card.icon}</span>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-[#0d1b1b] dark:text-slate-100">{card.value}</p>
                                        <p className="text-xs text-[#4c9a9a]">{card.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Filtros em linha */}
                        <div className="flex flex-wrap gap-2">
                            <div className="flex gap-1 flex-wrap">
                                {especialidades.map(e => (
                                    <button key={e} onClick={() => setFiltroEspec(e)}
                                        className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${filtroEspec === e ? 'bg-[#13ecec]/10 text-[#0EBDBD] border-[#13ecec]/20' : 'bg-white dark:bg-[#1c2725] text-[#4c9a9a] border-[#e7f3f3] dark:border-[#2a3a38]'}`}>
                                        {e}
                                    </button>
                                ))}
                            </div>
                            <div className="flex gap-1 ml-auto">
                                {(['Todas', 'Alta', 'Normal', 'Baixa'] as const).map(p => (
                                    <button key={p} onClick={() => setFiltroPrior(p)}
                                        className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${filtroPrior === p ? 'bg-[#0d1b1b] dark:bg-slate-100 text-white dark:text-[#0d1b1b] border-transparent' : 'bg-white dark:bg-[#1c2725] text-[#4c9a9a] border-[#e7f3f3] dark:border-[#2a3a38]'}`}>
                                        {p}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tabela */}
                        <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none overflow-hidden pb-4">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead className="text-[#4c9a9a] text-xs uppercase tracking-wider font-semibold bg-gray-50/50 dark:bg-[#1A2C2C] border-b border-[#e7f3f3] dark:border-[#2a3a38]">
                                        <tr>
                                            <th className="px-5 py-3">#</th>
                                            <th className="px-5 py-3">Paciente</th>
                                            <th className="px-5 py-3 hidden md:table-cell">Especialidade</th>
                                            <th className="px-5 py-3 hidden lg:table-cell">Preferência</th>
                                            <th className="px-5 py-3">Prioridade</th>
                                            <th className="px-5 py-3 hidden sm:table-cell">Cadastro</th>
                                            <th className="px-5 py-3 text-right">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50 dark:divide-[#2a3a38]">
                                        {itens.length === 0 ? (
                                            <tr>
                                                <td colSpan={7} className="text-center py-16 text-[#4c9a9a]">
                                                    <span className="material-symbols-outlined text-4xl mb-2 block">inbox</span>
                                                    Nenhum paciente na lista de espera
                                                </td>
                                            </tr>
                                        ) : itens.map((e, i) => (
                                            <tr key={e.id} className="hover:bg-[#f8fcfc] dark:hover:bg-[#10221f] transition-colors group">
                                                <td className="px-5 py-3 font-bold text-[#4c9a9a] text-sm">{i + 1}º</td>
                                                <td className="px-5 py-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`size-9 rounded-full bg-${e.paciente.cor}-100 flex items-center justify-center text-${e.paciente.cor}-600 font-bold text-xs shrink-0`}>
                                                            {e.paciente.initials}
                                                        </div>
                                                        <div>
                                                            <Link to={`/pacientes/${e.paciente.id}`} className="text-sm font-semibold text-[#0d1b1b] dark:text-slate-100 hover:text-[#13ecec] transition-colors">
                                                                {e.paciente.nome}
                                                            </Link>
                                                            <p className="text-xs text-[#4c9a9a]">{e.paciente.telefone}</p>
                                                            {e.observacao && (
                                                                <p className="text-xs text-orange-500 mt-0.5 flex items-center gap-1">
                                                                    <span className="material-symbols-outlined text-[12px]">info</span>
                                                                    {e.observacao}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-3 hidden md:table-cell">
                                                    <span className="text-xs font-bold bg-[#e7f3f3] dark:bg-[#1A2C2C] text-[#4c9a9a] px-2.5 py-1 rounded-full">
                                                        {e.especialidade}
                                                    </span>
                                                </td>
                                                <td className="px-5 py-3 text-sm text-[#4c9a9a] hidden lg:table-cell">{e.preferencia}</td>
                                                <td className="px-5 py-3">
                                                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${prioridadeConfig[e.prioridade].classes}`}>
                                                        {e.prioridade}
                                                    </span>
                                                </td>
                                                <td className="px-5 py-3 text-xs text-[#4c9a9a] hidden sm:table-cell">{e.dataCadastro}</td>
                                                <td className="px-5 py-3 text-right">
                                                    <div className="flex items-center justify-end gap-1">
                                                        <Link to="/novo-agendamento"
                                                            className="flex items-center gap-1.5 text-xs font-bold text-[#13ecec] hover:text-[#0EBDBD] border border-[#13ecec]/30 hover:bg-[#e7f3f3] dark:hover:bg-[#1A2C2C] px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap">
                                                            <span className="material-symbols-outlined text-[14px]">calendar_add_on</span>
                                                            Agendar
                                                        </Link>
                                                        <button className="size-8 flex items-center justify-center text-[#4c9a9a] hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                                            title="Remover da lista">
                                                            <span className="material-symbols-outlined text-[16px]">close</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Footer */}
                            <div className="px-5 pt-4 flex items-center justify-between border-t border-[#e7f3f3] dark:border-[#2a3a38] mt-2">
                                <p className="text-xs text-[#4c9a9a]">
                                    Exibindo <span className="font-bold text-[#0d1b1b] dark:text-slate-100">{itens.length}</span> de {LISTA_ESPERA.length}
                                </p>
                                <button className="text-xs font-bold text-[#13ecec] hover:text-[#0EBDBD] flex items-center gap-1 transition-colors">
                                    <span className="material-symbols-outlined text-[14px]">download</span>
                                    Exportar lista
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
