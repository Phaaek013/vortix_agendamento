import { Link, useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';
import TopbarAdmin from '../components/admin/TopbarAdmin';

export default function DetalhePaciente() {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <div className="bg-[#f6f8f8] dark:bg-[#10221f] text-[#0d1b1b] dark:text-slate-100 antialiased h-screen flex overflow-hidden font-display">
            <Sidebar />
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                <TopbarAdmin showDateControls={false} />
                <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#f8fcfc] dark:bg-[#10221f]">
                    <div className="max-w-5xl mx-auto flex flex-col gap-6">

                        <div className="flex justify-end">
                            <Link to="/agenda" className="text-sm font-bold text-[#4c9a9a] hover:text-[#0d1b1b] flex items-center gap-1">
                                <span className="material-symbols-outlined text-[18px]">arrow_back</span> Voltar
                            </Link>
                        </div>

                        {/* Top Profile Card */}
                        <div className="bg-white dark:bg-[#1c2725] rounded-3xl border border-[#e7f3f3] dark:border-[#2a3a38] p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-[#13ecec]/10 to-transparent pointer-events-none" />

                            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Paciente" className="size-24 md:size-32 rounded-full border-4 border-[#f6f8f8] dark:border-[#10221f] shadow-lg object-cover" />

                            <div className="flex-1 z-10 w-full">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h1 className="text-2xl md:text-4xl font-black">João Silva</h1>
                                        <div className="flex gap-3 mt-1 text-[#4c9a9a] text-sm font-medium">
                                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">male</span> 34 anos</span>
                                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">bloodtype</span> O+</span>
                                        </div>
                                    </div>
                                    <span className="bg-[#13ecec]/20 text-[#0c9c9c] border border-[#13ecec]/30 font-bold px-4 py-1.5 rounded-full text-sm inline-flex items-center gap-1.5 self-start">
                                        <span className="material-symbols-outlined text-[16px]">health_and_safety</span>
                                        Convênio Unimed
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#e7f3f3] dark:border-[#2a3a38]">
                                    <div>
                                        <strong className="block text-xs text-[#4c9a9a] uppercase tracking-wider mb-1">Contato</strong>
                                        <p className="text-sm font-semibold mb-0.5">(11) 98765-4321</p>
                                        <p className="text-sm font-semibold">joao.silva@email.com</p>
                                    </div>
                                    <div>
                                        <strong className="block text-xs text-[#4c9a9a] uppercase tracking-wider mb-1">Endereço</strong>
                                        <p className="text-sm font-semibold mb-0.5">Rua das Flores, 123 - Apto 45</p>
                                        <p className="text-sm font-semibold">São Paulo, SP</p>
                                    </div>
                                    <div>
                                        <strong className="block text-xs text-[#4c9a9a] uppercase tracking-wider mb-1">Frequência</strong>
                                        <p className="text-sm font-semibold mb-0.5">Paciente Regular</p>
                                        <p className="text-sm text-[#4c9a9a]">Última visita: há 2 meses</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Informações médicas Mock */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] p-6 shadow-sm">
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#13ecec]">history</span>
                                    Histórico de Consultas
                                </h3>
                                <div className="flex flex-col gap-4">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-[#1A2C2C] transition-colors border border-transparent hover:border-[#e7f3f3] dark:hover:border-[#2a3a38]">
                                            <div className="bg-[#e7f3f3] text-[#4c9a9a] dark:bg-[#2a3a38] py-2 px-3 rounded-lg flex flex-col items-center justify-center shrink-0">
                                                <span className="text-xs font-bold leading-none">OUT</span>
                                                <span className="text-lg font-black leading-none mt-1">1{i}</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm">Consulta de Retorno - Cardiologia</p>
                                                <p className="text-xs text-[#4c9a9a] mt-0.5">Dr. Ricardo • Duração: 30 min</p>
                                                <p className="text-xs text-[#13ecec] font-bold mt-1 max-w-[200px] truncate">Check-up cardiológico anual realizado com sucesso.</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#e7f3f3] dark:border-[#2a3a38] p-6 shadow-sm flex flex-col gap-6">
                                <div>
                                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-orange-500">warning</span>
                                        Alergias e Restrições
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-red-50 text-red-600 border border-red-200 px-3 py-1.5 rounded-lg text-xs font-bold">Dipirona</span>
                                        <span className="bg-red-50 text-red-600 border border-red-200 px-3 py-1.5 rounded-lg text-xs font-bold">Penicilina</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#13ecec]">vaccines</span>
                                        Medicação de Uso Contínuo
                                    </h3>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center justify-between text-sm py-2 border-b border-[#e7f3f3] dark:border-[#2a3a38]">
                                            <span className="font-semibold">Losartana 50mg</span>
                                            <span className="text-[#4c9a9a]">1x ao dia (Manhã)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto flex flex-col gap-3">
                                    <button onClick={() => navigate(`/pacientes/${id}/anamnese/novo`)} className="w-full flex justify-center items-center gap-2 bg-[#13ecec] hover:bg-[#0EBDBD] text-[#0d1b1b] font-bold py-3.5 rounded-xl transition shadow-sm">
                                        <span className="material-symbols-outlined">assignment</span>
                                        Anamnese / Prontuário
                                    </button>
                                    <button onClick={() => navigate(`/pacientes/${id}/prontuario`)} className="w-full flex justify-center items-center gap-2 bg-[#0d1b1b] dark:bg-slate-100 text-white dark:text-[#0d1b1b] font-bold py-3.5 rounded-xl hover:opacity-90 transition">
                                        <span className="material-symbols-outlined">description</span>
                                        Acessar Prontuário Completo
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
