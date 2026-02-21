import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';
import TopbarAdmin from '../components/admin/TopbarAdmin';

type SenhaStatus = 'aguardando' | 'em_atendimento' | 'finalizado';

interface Senha {
    id: number;
    codigo: string;
    paciente: string;
    horario: string;
    tipo: 'Normal' | 'Preferencial';
    status: SenhaStatus;
    guiche: string;
}

const SENHAS_MOCK: Senha[] = [
    { id: 1, codigo: 'A041', paciente: 'Luana Gomes', horario: '09:30', tipo: 'Normal', status: 'finalizado', guiche: 'G-01' },
    { id: 2, codigo: 'A042', paciente: 'João Pereira', horario: '09:45', tipo: 'Normal', status: 'em_atendimento', guiche: 'G-02' },
    { id: 3, codigo: 'P001', paciente: 'Maria Silva', horario: '10:00', tipo: 'Preferencial', status: 'aguardando', guiche: '-' },
    { id: 4, codigo: 'A043', paciente: 'Carlos Souza', horario: '10:15', tipo: 'Normal', status: 'aguardando', guiche: '-' },
    { id: 5, codigo: 'A044', paciente: 'Fernanda Lima', horario: '10:30', tipo: 'Normal', status: 'aguardando', guiche: '-' },
    { id: 6, codigo: 'P002', paciente: 'Bruno Alves', horario: '10:45', tipo: 'Preferencial', status: 'aguardando', guiche: '-' },
    { id: 7, codigo: 'A045', paciente: 'Rafael Nunes', horario: '11:00', tipo: 'Normal', status: 'aguardando', guiche: '-' },
];

export default function FilaAtendimento() {
    const [senhas, setSenhas] = useState<Senha[]>(SENHAS_MOCK);

    const senhaAtual = senhas.find(s => s.status === 'em_atendimento') ?? null;
    const proximas = senhas.filter(s => s.status === 'aguardando');
    const finalizadas = senhas.filter(s => s.status === 'finalizado');

    const chamarProxima = () => {
        setSenhas(prev => {
            const updated = prev.map(s => s.status === 'em_atendimento' ? { ...s, status: 'finalizado' as SenhaStatus } : s);
            const idx = updated.findIndex(s => s.status === 'aguardando');
            if (idx !== -1) {
                updated[idx] = { ...updated[idx], status: 'em_atendimento', guiche: 'G-01' };
            }
            return updated;
        });
    };

    const finalizar = () => {
        setSenhas(prev =>
            prev.map(s => s.status === 'em_atendimento' ? { ...s, status: 'finalizado' as SenhaStatus } : s)
        );
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
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-black">Fila de Atendimento</h1>
                                <p className="text-[#4c9a9a] text-sm mt-0.5">Controle interno de senhas e chamadas.</p>
                            </div>
                            <Link to="/fila-tv" target="_blank"
                                className="flex items-center gap-2 bg-[#0d1b1b] dark:bg-slate-100 text-white dark:text-[#0d1b1b] font-bold text-sm py-2 px-4 rounded-xl transition-all hover:opacity-80">
                                <span className="material-symbols-outlined text-[18px]">tv</span>
                                Abrir TV Kiosk
                            </Link>
                        </div>

                        {/* Layout: Painel de Controle + Lista */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                            {/* Painel de Controle (esquerda) */}
                            <div className="flex flex-col gap-4">
                                {/* Senha atual */}
                                <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none overflow-hidden">
                                    <div className="h-1 bg-gradient-to-r from-[#13ecec] to-[#0EBDBD]" />
                                    <div className="p-5 text-center">
                                        <p className="text-[#4c9a9a] text-xs font-bold uppercase tracking-wider mb-2">Senha Atual — Guichê G-01</p>
                                        {senhaAtual ? (
                                            <>
                                                <div className="text-7xl font-black text-[#0d1b1b] dark:text-slate-100 tracking-tight my-4">{senhaAtual.codigo}</div>
                                                <p className="text-sm font-semibold text-[#0d1b1b] dark:text-slate-100">{senhaAtual.paciente}</p>
                                                <span className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${senhaAtual.tipo === 'Preferencial' ? 'bg-violet-100 text-violet-700' : 'bg-[#e7f3f3] text-[#4c9a9a]'}`}>
                                                    {senhaAtual.tipo}
                                                </span>
                                            </>
                                        ) : (
                                            <div className="py-6">
                                                <span className="material-symbols-outlined text-5xl text-gray-200 dark:text-[#2a3a38] mb-2 block">hourglass_empty</span>
                                                <p className="text-[#4c9a9a] text-sm">Nenhuma senha em atendimento</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="px-5 pb-5 flex flex-col gap-2">
                                        <button onClick={chamarProxima} disabled={proximas.length === 0}
                                            className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${proximas.length > 0 ? 'bg-[#13ecec] hover:bg-[#0EBDBD] text-[#0d1b1b] shadow-sm shadow-[#13ecec]/25 active:scale-95' : 'bg-gray-100 dark:bg-[#2a3a38] text-[#4c9a9a] cursor-not-allowed'}`}>
                                            <span className="material-symbols-outlined text-[18px]">campaign</span>
                                            Chamar Próxima
                                        </button>
                                        {senhaAtual && (
                                            <button onClick={finalizar}
                                                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 hover:bg-emerald-100 transition-all">
                                                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                                                Finalizar Atendimento
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { label: 'Aguardando', value: proximas.length, color: 'text-orange-500' },
                                        { label: 'Em Atend.', value: senhaAtual ? 1 : 0, color: 'text-violet-600' },
                                        { label: 'Finalizados', value: finalizadas.length, color: 'text-emerald-600' },
                                    ].map(s => (
                                        <div key={s.label} className="bg-white dark:bg-[#1c2725] rounded-xl border border-[#e7f3f3] dark:border-[#2a3a38] p-3 text-center">
                                            <p className={`text-2xl font-black ${s.color}`}>{s.value}</p>
                                            <p className="text-[10px] text-[#4c9a9a] dark:text-slate-400 font-medium">{s.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Próximas senhas */}
                                <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none p-4">
                                    <p className="text-xs font-bold text-[#4c9a9a] uppercase tracking-wider mb-3">Próximas na fila</p>
                                    <div className="flex flex-col gap-2">
                                        {proximas.slice(0, 5).map((s, i) => (
                                            <div key={s.id} className={`flex items-center gap-2.5 p-2 rounded-lg ${i === 0 ? 'bg-[#13ecec]/10 border border-[#13ecec]/20' : 'hover:bg-gray-50 dark:hover:bg-[#1A2C2C]'}`}>
                                                <span className={`text-sm font-black ${i === 0 ? 'text-[#0EBDBD]' : 'text-[#4c9a9a]'}`}>{s.codigo}</span>
                                                <div className="flex-1">
                                                    <p className="text-xs font-semibold text-[#0d1b1b] dark:text-slate-100">{s.paciente}</p>
                                                </div>
                                                {s.tipo === 'Preferencial' && (
                                                    <span className="text-[10px] font-bold bg-violet-100 text-violet-700 px-1.5 py-0.5 rounded">PREF</span>
                                                )}
                                            </div>
                                        ))}
                                        {proximas.length === 0 && (
                                            <p className="text-xs text-center text-[#4c9a9a] dark:text-slate-400 py-4">Fila vazia</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Tabela geral (direita) */}
                            <div className="lg:col-span-2">
                                <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none overflow-hidden">
                                    <div className="px-5 py-4 border-b border-[#e7f3f3] dark:border-[#2a3a38]">
                                        <h3 className="font-bold text-[#0d1b1b] dark:text-slate-100">Todas as senhas de hoje</h3>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left">
                                            <thead className="text-[#4c9a9a] text-xs uppercase tracking-wider font-semibold bg-gray-50/50 dark:bg-[#1A2C2C] border-b border-[#e7f3f3] dark:border-[#2a3a38]">
                                                <tr>
                                                    <th className="px-5 py-3">Senha</th>
                                                    <th className="px-5 py-3">Paciente</th>
                                                    <th className="px-5 py-3">Tipo</th>
                                                    <th className="px-5 py-3">Horário</th>
                                                    <th className="px-5 py-3">Guichê</th>
                                                    <th className="px-5 py-3">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50 dark:divide-[#2a3a38]">
                                                {senhas.map(s => (
                                                    <tr key={s.id} className={`transition-colors ${s.status === 'em_atendimento' ? 'bg-[#13ecec]/5' : 'hover:bg-[#f8fcfc] dark:hover:bg-[#10221f]'}`}>
                                                        <td className="px-5 py-3 font-black text-[#0d1b1b] dark:text-slate-100 text-sm">{s.codigo}</td>
                                                        <td className="px-5 py-3 text-sm font-semibold text-[#0d1b1b] dark:text-slate-100">{s.paciente}</td>
                                                        <td className="px-5 py-3">
                                                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${s.tipo === 'Preferencial' ? 'bg-violet-100 text-violet-700' : 'bg-gray-100 dark:bg-[#2a3a38] text-gray-500 dark:text-slate-400'}`}>
                                                                {s.tipo}
                                                            </span>
                                                        </td>
                                                        <td className="px-5 py-3 text-sm text-[#4c9a9a]">{s.horario}</td>
                                                        <td className="px-5 py-3 text-sm font-bold text-[#0d1b1b] dark:text-slate-100">{s.guiche}</td>
                                                        <td className="px-5 py-3">
                                                            {s.status === 'finalizado' && <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-700"><span className="size-1.5 rounded-full bg-gray-400" />Finalizado</span>}
                                                            {s.status === 'em_atendimento' && <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 border border-violet-100 dark:border-violet-800"><span className="size-1.5 rounded-full bg-violet-500 dark:bg-violet-400" />Em Atendimento</span>}
                                                            {s.status === 'aguardando' && <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border border-orange-100 dark:border-orange-800"><span className="size-1.5 rounded-full bg-orange-400" />Aguardando</span>}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
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
