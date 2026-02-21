import { Link, useParams } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';
import TopbarAdmin from '../components/admin/TopbarAdmin';

// ─── Mock Data ──────────────────────────────────────────
const REGISTROS_PRONTUARIO = [
    {
        id: 1,
        data: '15 Fev 2026',
        hora: '10:30',
        tipo: 'Consulta de Retorno',
        especialidade: 'Cardiologia',
        profissional: 'Dr. Ricardo Silva',
        crm: 'CRM/SP 123456',
        status: 'Finalizado' as const,
        resumo: 'Check-up cardiológico anual. Pressão arterial dentro dos padrões normais. ECG sem alterações. Mantida medicação atual.',
        conduta: 'Manter Losartana 50mg 1x ao dia. Retorno em 6 meses.',
    },
    {
        id: 2,
        data: '20 Jan 2026',
        hora: '09:00',
        tipo: 'Primeira Consulta',
        especialidade: 'Cardiologia',
        profissional: 'Dr. Ricardo Silva',
        crm: 'CRM/SP 123456',
        status: 'Finalizado' as const,
        resumo: 'Avaliação cardiovascular completa. Paciente relata dores no peito eventuais. Solicitado ecocardiograma e exames laboratoriais.',
        conduta: 'Iniciado Losartana 50mg 1x ao dia. Solicitados exames complementares.',
    },
    {
        id: 3,
        data: '10 Dez 2025',
        hora: '14:00',
        tipo: 'Exame',
        especialidade: 'Cardiologia',
        profissional: 'Dra. Ana Costa',
        crm: 'CRM/SP 654321',
        status: 'Finalizado' as const,
        resumo: 'Ecocardiograma realizado. Fração de ejeção preservada em 65%. Sem alterações valvulares significativas.',
        conduta: 'Resultado dentro da normalidade. Encaminhado para avaliação do cardiologista.',
    },
    {
        id: 4,
        data: '05 Out 2025',
        hora: '11:00',
        tipo: 'Consulta de Retorno',
        especialidade: 'Dermatologia',
        profissional: 'Dra. Juliana Mendes',
        crm: 'CRM/SP 789012',
        status: 'Finalizado' as const,
        resumo: 'Acompanhamento de dermatite atópica. Melhora significativa das lesões após tratamento com corticoide tópico.',
        conduta: 'Reduzir frequência do corticoide. Manter hidratação intensiva.',
    },
];

const STATUS_COR: Record<string, string> = {
    Finalizado: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Rascunho: 'bg-amber-50 text-amber-700 border-amber-200',
    Pendente: 'bg-blue-50 text-blue-700 border-blue-200',
};

export default function ProntuarioCompleto() {
    const { id } = useParams();

    return (
        <div className="bg-[#f6f8f8] dark:bg-[#10221f] text-[#0d1b1b] dark:text-slate-100 antialiased h-screen flex overflow-hidden font-display">
            <Sidebar />
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                <TopbarAdmin showDateControls={false} showProFilter={false} />
                <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#f8fcfc] dark:bg-[#10221f]">
                    <div className="max-w-5xl mx-auto flex flex-col gap-6">

                        {/* Breadcrumb */}
                        <div className="flex justify-end">
                            <Link to={`/pacientes/${id}`} className="text-sm font-bold text-[#4c9a9a] hover:text-[#0d1b1b] dark:hover:text-slate-100 flex items-center gap-1 transition-colors">
                                <span className="material-symbols-outlined text-[18px]">arrow_back</span> Voltar
                            </Link>
                        </div>

                        {/* Patient Header */}
                        <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] p-6 flex items-center gap-5">
                            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Paciente" className="size-16 rounded-full border-2 border-[#f6f8f8] dark:border-[#10221f] shadow-md object-cover" />
                            <div className="flex-1">
                                <h1 className="text-2xl font-black">João Silva</h1>
                                <div className="flex gap-3 mt-1 text-[#4c9a9a] text-sm font-medium">
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">male</span> 34 anos</span>
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">bloodtype</span> O+</span>
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">health_and_safety</span> Unimed</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Link to={`/pacientes/${id}/anamnese/novo`} className="flex items-center gap-2 bg-[#13ecec] hover:bg-[#0EBDBD] text-[#0d1b1b] font-bold py-2.5 px-5 rounded-xl transition shadow-sm text-sm">
                                    <span className="material-symbols-outlined text-[18px]">add</span>
                                    Novo Registro
                                </Link>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: 'Total de Registros', value: '4', icon: 'description', color: 'text-[#13ecec]' },
                                { label: 'Última Consulta', value: '15 Fev 2026', icon: 'calendar_month', color: 'text-[#4c9a9a]' },
                                { label: 'Profissionais', value: '3', icon: 'stethoscope', color: 'text-purple-500' },
                                { label: 'Especialidades', value: '2', icon: 'medical_services', color: 'text-orange-500' },
                            ].map((s, i) => (
                                <div key={i} className="bg-white dark:bg-[#1c2725] rounded-xl border border-[#e7f3f3] dark:border-[#2a3a38] p-4 flex flex-col gap-1">
                                    <span className={`material-symbols-outlined text-[20px] ${s.color}`}>{s.icon}</span>
                                    <p className="text-xl font-black mt-1">{s.value}</p>
                                    <p className="text-xs text-[#4c9a9a] font-medium">{s.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Security Notice */}
                        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-xl p-4 flex items-center gap-3">
                            <span className="material-symbols-outlined text-amber-600 text-[22px]">shield</span>
                            <div>
                                <p className="text-sm font-bold text-amber-800 dark:text-amber-300">Dados Sensíveis</p>
                                <p className="text-xs text-amber-700 dark:text-amber-400">Todo acesso a esta ficha é auditado e registrado conforme LGPD.</p>
                            </div>
                        </div>

                        {/* Records List */}
                        <div className="flex flex-col gap-4 pb-8">
                            <h2 className="text-lg font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#13ecec]">history</span>
                                Linha do Tempo de Atendimentos
                            </h2>

                            {REGISTROS_PRONTUARIO.map((reg, idx) => (
                                <div key={reg.id} className="relative pl-8">
                                    {/* Timeline connector */}
                                    {idx < REGISTROS_PRONTUARIO.length - 1 && (
                                        <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-[#e7f3f3] dark:bg-[#2a3a38]" />
                                    )}
                                    <div className="absolute left-0 top-2 size-6 rounded-full bg-[#13ecec]/20 flex items-center justify-center">
                                        <div className="size-2.5 rounded-full bg-[#13ecec]" />
                                    </div>

                                    <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] p-5 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-[#e7f3f3] dark:bg-[#2a3a38] py-1.5 px-3 rounded-lg text-center">
                                                    <p className="text-xs font-bold text-[#4c9a9a] uppercase leading-none">{reg.data.split(' ')[1]}</p>
                                                    <p className="text-lg font-black text-[#0d1b1b] dark:text-slate-100 leading-none mt-0.5">{reg.data.split(' ')[0]}</p>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-base">{reg.tipo} — {reg.especialidade}</h3>
                                                    <p className="text-xs text-[#4c9a9a] mt-0.5 flex items-center gap-1">
                                                        <span className="material-symbols-outlined text-[14px]">stethoscope</span>
                                                        {reg.profissional} • {reg.crm}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-[#4c9a9a] font-medium">{reg.hora}</span>
                                                <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${STATUS_COR[reg.status]}`}>{reg.status}</span>
                                            </div>
                                        </div>

                                        <div className="bg-[#f8fcfc] dark:bg-[#10221f] rounded-xl p-4 flex flex-col gap-2 border border-[#e7f3f3] dark:border-[#2a3a38]">
                                            <div>
                                                <p className="text-[10px] font-bold text-[#4c9a9a] uppercase tracking-wider mb-1">Resumo</p>
                                                <p className="text-sm text-[#0d1b1b] dark:text-slate-200">{reg.resumo}</p>
                                            </div>
                                            <div className="border-t border-[#e7f3f3] dark:border-[#2a3a38] pt-2 mt-1">
                                                <p className="text-[10px] font-bold text-[#4c9a9a] uppercase tracking-wider mb-1">Conduta</p>
                                                <p className="text-sm text-[#0d1b1b] dark:text-slate-200 font-medium">{reg.conduta}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
