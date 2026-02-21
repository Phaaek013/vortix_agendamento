
import Sidebar from '../components/admin/Sidebar';
import TopbarAdmin from '../components/admin/TopbarAdmin';

export default function Relatorios() {
    const kpis = [
        { label: 'Consultas este mês', value: '342', delta: '+12%', up: true, icon: 'calendar_month', cor: 'teal' },
        { label: 'Faturamento bruto', value: 'R$ 48.600', delta: '+8%', up: true, icon: 'payments', cor: 'emerald' },
        { label: 'Taxa de cancelamento', value: '6,4%', delta: '-1,2%', up: true, icon: 'event_busy', cor: 'orange' },
        { label: 'Pacientes novos', value: '38', delta: '+5', up: true, icon: 'person_add', cor: 'violet' },
    ];

    const top_servicos = [
        { nome: 'Consulta Cardiologia', total: 87, pct: 25 },
        { nome: 'Ecocardiograma', total: 64, pct: 19 },
        { nome: 'Consulta Dermatologia', total: 58, pct: 17 },
        { nome: 'Consulta Ortopedia', total: 52, pct: 15 },
        { nome: 'Consulta Pediatria', total: 45, pct: 13 },
        { nome: 'Outros', total: 36, pct: 11 },
    ];

    const top_pros = [
        { nome: 'Dr. Roberto Santos', especialidade: 'Cardiologista', consultas: 142, tx_ocup: 94 },
        { nome: 'Dra. Ana Costa', especialidade: 'Dermatologista', consultas: 118, tx_ocup: 87 },
        { nome: 'Dr. Carlos Mendes', especialidade: 'Ortopedista', consultas: 96, tx_ocup: 71 },
        { nome: 'Dra. Julia Lima', especialidade: 'Pediatra', consultas: 84, tx_ocup: 62 },
    ];

    const dias = ['01/10', '05/10', '10/10', '15/10', '20/10', '25/10', '30/10'];
    const consultas = [12, 18, 14, 22, 16, 24, 20];
    const maxVal = Math.max(...consultas);

    return (
        <div className="bg-[#f6f8f8] dark:bg-[#10221f] text-[#0d1b1b] dark:text-slate-100 antialiased h-screen flex overflow-hidden font-display">
            <Sidebar />
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                <TopbarAdmin showDateControls={true} showProFilter={false} />
                <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#f8fcfc] dark:bg-[#10221f]">
                    <div className="max-w-7xl mx-auto flex flex-col gap-5">

                        {/* Breadcrumb */}


                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-black">Relatórios</h1>
                                <p className="text-[#4c9a9a] text-sm mt-0.5">Métricas e desempenho da clínica — Outubro 2023.</p>
                            </div>
                            <div className="flex gap-2">
                                <select className="text-xs font-semibold border border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] text-[#0d1b1b] dark:text-slate-100 rounded-xl px-3 py-2 outline-none focus:border-[#13ecec] transition-colors">
                                    <option>Outubro 2023</option>
                                    <option>Setembro 2023</option>
                                    <option>Agosto 2023</option>
                                </select>
                                <button className="flex items-center gap-2 border border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] text-[#4c9a9a] hover:text-[#0d1b1b] dark:hover:text-slate-100 px-3 py-2 rounded-xl text-xs font-bold transition-colors">
                                    <span className="material-symbols-outlined text-[16px]">download</span>
                                    Exportar PDF
                                </button>
                            </div>
                        </div>

                        {/* KPI Cards */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {kpis.map(k => (
                                <div key={k.label} className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none p-5 relative overflow-hidden group hover:border-[#13ecec]/30 transition-all">
                                    <div className="absolute right-4 top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <span className="material-symbols-outlined text-6xl text-[#13ecec]">{k.icon}</span>
                                    </div>
                                    <p className="text-[#4c9a9a] text-xs font-medium mb-2">{k.label}</p>
                                    <p className="text-2xl font-black text-[#0d1b1b] dark:text-slate-100 mb-1">{k.value}</p>
                                    <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${k.up ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600'}`}>
                                        <span className="material-symbols-outlined text-[12px]">{k.up ? 'trending_up' : 'trending_down'}</span>
                                        {k.delta} vs. mês ant.
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Gráfico de barras (CSS) + Top Serviços */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {/* Bar chart */}
                            <div className="lg:col-span-2 bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none p-5">
                                <div className="flex items-center justify-between mb-5">
                                    <h3 className="font-bold text-[#0d1b1b] dark:text-slate-100">Consultas por Dia</h3>
                                    <div className="flex gap-1">
                                        {['Semana', 'Mês', 'Trimestre'].map(p => (
                                            <button key={p} className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${p === 'Mês' ? 'bg-[#13ecec] text-[#0d1b1b]' : 'text-[#4c9a9a] hover:bg-gray-50 dark:hover:bg-[#1A2C2C]'}`}>{p}</button>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-end gap-3 h-48">
                                    {dias.map((d, i) => (
                                        <div key={d} className="flex-1 flex flex-col items-center gap-1.5">
                                            <span className="text-xs font-bold text-[#0d1b1b] dark:text-slate-100">{consultas[i]}</span>
                                            <div className="w-full rounded-t-lg bg-[#13ecec] hover:bg-[#0EBDBD] transition-colors relative group/bar cursor-default"
                                                style={{ height: `${(consultas[i] / maxVal) * 100}%`, minHeight: '8px' }}>
                                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0d1b1b] text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                                                    {consultas[i]} consultas
                                                </div>
                                            </div>
                                            <span className="text-[10px] text-[#4c9a9a]">{d}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Top Serviços */}
                            <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none p-5">
                                <h3 className="font-bold text-[#0d1b1b] dark:text-slate-100 mb-5">Top Serviços</h3>
                                <div className="flex flex-col gap-3">
                                    {top_servicos.map(s => (
                                        <div key={s.nome}>
                                            <div className="flex items-center justify-between text-xs font-semibold mb-1">
                                                <span className="text-[#0d1b1b] dark:text-slate-300 truncate">{s.nome}</span>
                                                <span className="text-[#4c9a9a] ml-2 shrink-0">{s.total}</span>
                                            </div>
                                            <div className="h-1.5 rounded-full bg-gray-100 dark:bg-[#2a3a38] overflow-hidden">
                                                <div className="h-full rounded-full bg-[#13ecec]" style={{ width: `${s.pct}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Tabela de Profissionais */}
                        <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none overflow-hidden pb-4">
                            <div className="px-5 py-4 border-b border-[#e7f3f3] dark:border-[#2a3a38]">
                                <h3 className="font-bold text-[#0d1b1b] dark:text-slate-100">Desempenho por Profissional</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead className="text-[#4c9a9a] text-xs uppercase tracking-wider font-semibold bg-gray-50/50 dark:bg-[#1A2C2C] border-b border-[#e7f3f3] dark:border-[#2a3a38]">
                                        <tr>
                                            <th className="px-5 py-3">Profissional</th>
                                            <th className="px-5 py-3">Especialidade</th>
                                            <th className="px-5 py-3">Consultas</th>
                                            <th className="px-5 py-3">Taxa de Ocupação</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50 dark:divide-[#2a3a38]">
                                        {top_pros.map(p => (
                                            <tr key={p.nome} className="hover:bg-[#f8fcfc] dark:hover:bg-[#10221f] transition-colors">
                                                <td className="px-5 py-3 text-sm font-semibold text-[#0d1b1b] dark:text-slate-100">{p.nome}</td>
                                                <td className="px-5 py-3">
                                                    <span className="text-xs font-bold bg-[#e7f3f3] dark:bg-[#1A2C2C] text-[#4c9a9a] px-2.5 py-1 rounded-full">{p.especialidade}</span>
                                                </td>
                                                <td className="px-5 py-3 text-sm font-bold text-[#0d1b1b] dark:text-slate-100">{p.consultas}</td>
                                                <td className="px-5 py-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex-1 h-1.5 rounded-full bg-gray-100 dark:bg-[#2a3a38] overflow-hidden">
                                                            <div className={`h-full rounded-full ${p.tx_ocup >= 85 ? 'bg-emerald-400' : p.tx_ocup >= 60 ? 'bg-[#13ecec]' : 'bg-orange-400'}`} style={{ width: `${p.tx_ocup}%` }} />
                                                        </div>
                                                        <span className="text-xs font-bold text-[#0d1b1b] dark:text-slate-100 w-10 text-right">{p.tx_ocup}%</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
