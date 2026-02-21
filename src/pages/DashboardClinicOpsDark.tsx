import Sidebar from '../components/admin/Sidebar';
import TopbarAdmin from '../components/admin/TopbarAdmin';

export default function DashboardClinicOpsDark() {
    return (
        <div className="bg-[#10221f] dark:bg-[#102222] text-slate-100 antialiased h-screen flex overflow-hidden font-display">
            {/* Sidebar Reutilizável */}
            <Sidebar isPatientView={false} />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                {/* Topbar Reutilizável */}
                <TopbarAdmin showDateControls={true} showProFilter={true} />

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#10221f]">
                    <div className="max-w-7xl mx-auto flex flex-col gap-6">
                        {/* ROW 1: KPI Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-[#1c2725] p-5 rounded-xl border border-slate-800 shadow-sm dark:shadow-none flex flex-col justify-between h-32 relative overflow-hidden group hover:border-[#13ecec]/30 transition-all">
                                <div className="absolute right-[-10px] top-[-10px] p-4 bg-[#13ecec]/5 rounded-full group-hover:bg-[#13ecec]/10 transition-colors">
                                    <span className="material-symbols-outlined text-[#13ecec] text-4xl opacity-50">calendar_today</span>
                                </div>
                                <p className="text-slate-400 text-sm font-medium z-10">Agendamentos hoje</p>
                                <div className="flex items-end gap-2 z-10">
                                    <h3 className="text-3xl font-bold text-slate-100">42</h3>
                                    <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-1.5 py-0.5 rounded mb-1 flex items-center">
                                        <span className="material-symbols-outlined text-[12px] mr-0.5">trending_up</span> +5%
                                    </span>
                                </div>
                            </div>

                            <div className="bg-[#1c2725] p-5 rounded-xl border border-slate-800 shadow-sm dark:shadow-none flex flex-col justify-between h-32 relative overflow-hidden group hover:border-[#13ecec]/30 transition-all">
                                <div className="absolute right-[-10px] top-[-10px] p-4 bg-orange-50 dark:bg-orange-900/20 rounded-full group-hover:bg-orange-100 transition-colors">
                                    <span className="material-symbols-outlined text-orange-400 text-4xl opacity-50">pending_actions</span>
                                </div>
                                <p className="text-slate-400 text-sm font-medium z-10">Pendentes confirmação</p>
                                <div className="flex items-end gap-2 z-10">
                                    <h3 className="text-3xl font-bold text-slate-100">8</h3>
                                    <span className="text-orange-500 text-xs font-bold px-1.5 py-0.5 rounded mb-1">Ação necessária</span>
                                </div>
                            </div>

                            <div className="bg-[#1c2725] p-5 rounded-xl border border-slate-800 shadow-sm dark:shadow-none flex flex-col justify-between h-32 relative overflow-hidden group hover:border-[#13ecec]/30 transition-all">
                                <div className="absolute right-[-10px] top-[-10px] p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full group-hover:bg-blue-100 transition-colors">
                                    <span className="material-symbols-outlined text-blue-400 text-4xl opacity-50">hourglass_top</span>
                                </div>
                                <p className="text-slate-400 text-sm font-medium z-10">Lista de espera</p>
                                <div className="flex items-end gap-2 z-10">
                                    <h3 className="text-3xl font-bold text-slate-100">12</h3>
                                    <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-1.5 py-0.5 rounded mb-1">+2 novos</span>
                                </div>
                            </div>

                            <div className="bg-[#1c2725] p-5 rounded-xl border border-slate-800 shadow-sm dark:shadow-none flex flex-col justify-between h-32 relative overflow-hidden group hover:border-[#13ecec]/30 transition-all">
                                <div className="absolute right-[-10px] top-[-10px] p-4 bg-red-50 dark:bg-red-900/20 rounded-full group-hover:bg-red-100 transition-colors">
                                    <span className="material-symbols-outlined text-red-400 text-4xl opacity-50">event_busy</span>
                                </div>
                                <p className="text-slate-400 text-sm font-medium z-10">Faltas ontem</p>
                                <div className="flex items-end gap-2 z-10">
                                    <h3 className="text-3xl font-bold text-slate-100">3</h3>
                                    <span className="text-slate-400 text-xs font-medium mb-1">vs 2 semana passada</span>
                                </div>
                            </div>
                        </div>

                        {/* ROW 2: Main Grid (Agenda + Queue) */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            {/* Left Column: Agenda (Wider) */}
                            <div className="lg:col-span-8 flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-slate-100">Agenda de hoje</h3>
                                    <button className="bg-[#13ecec] hover:bg-[#0EBDBD] text-black text-sm font-bold py-2 px-4 rounded-lg shadow-sm dark:shadow-none shadow-[#13ecec]/20 flex items-center gap-2 transition-all">
                                        <span className="material-symbols-outlined text-[20px]">add</span>
                                        Novo Agendamento
                                    </button>
                                </div>
                                <div className="bg-[#1c2725] rounded-xl border border-slate-800 shadow-sm dark:shadow-none overflow-hidden flex-1 min-h-[400px]">
                                    {/* Filters */}
                                    <div className="px-5 py-3 border-b border-slate-800 flex gap-3 overflow-x-auto hide-scrollbar">
                                        <button className="px-3 py-1.5 rounded-full bg-[#13ecec]/10 text-[#0EBDBD] text-xs font-bold whitespace-nowrap border border-[#13ecec]/20">Todos (42)</button>
                                        <button className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 text-xs font-bold whitespace-nowrap border border-transparent">Confirmados (24)</button>
                                        <button className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 text-xs font-bold whitespace-nowrap border border-transparent">Pendentes (8)</button>
                                        <button className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 text-xs font-bold whitespace-nowrap border border-transparent">Finalizados (10)</button>
                                    </div>
                                    {/* Table */}
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider font-semibold">
                                                <tr>
                                                    <th className="px-5 py-4 w-20">Horário</th>
                                                    <th className="px-5 py-4">Paciente</th>
                                                    <th className="px-5 py-4">Procedimento</th>
                                                    <th className="px-5 py-4 hidden sm:table-cell">Profissional</th>
                                                    <th className="px-5 py-4">Status</th>
                                                    <th className="px-5 py-4 text-right">Ações</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-800">
                                                <tr className="hover:bg-[#10221f] transition-colors group">
                                                    <td className="px-5 py-3 font-bold text-slate-100 text-sm">08:00</td>
                                                    <td className="px-5 py-3">
                                                        <div className="flex items-center gap-3">
                                                            <div className="size-8 rounded-full bg-slate-600 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqFeA-A0Uykt4EEVXN9oioX2fhpVQxeQeVEsdIgwamUZAA-oKyKl4TrbmpC7vhTfDRGrBkQt0DEgi3ejXn3Z4H1NhOxn9O8zzq_dVaj1pvILqP7-hrKrympDD2m63vkguatLqlMMlMSQtEdUh_gF9SV-AcUEqBVMch31XOAQVKTkT9t-VI4k2aERPFO8rZEaYOTX0RDxsTYhhzr_O-iAjH2tMn73ML6SlawNL1iKM6NgkWFQBeg-YoWX06OZzy-ShJ5Vls5COu2Sqw')" }}></div>
                                                            <div>
                                                                <p className="text-sm font-semibold text-slate-100">Maria Silva</p>
                                                                <p className="text-xs text-slate-400">Particular</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-3 text-sm text-slate-100">Consulta Cardiologia</td>
                                                    <td className="px-5 py-3 text-sm text-slate-400 hidden sm:table-cell">Dr. Roberto</td>
                                                    <td className="px-5 py-3">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                                                            <span className="size-1.5 rounded-full bg-emerald-500"></span> Confirmado
                                                        </span>
                                                    </td>
                                                    <td className="px-5 py-3 text-right">
                                                        <button className="text-slate-400 hover:text-slate-100 p-1 rounded-md hover:bg-slate-700">
                                                            <span className="material-symbols-outlined">more_vert</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-[#10221f] transition-colors group">
                                                    <td className="px-5 py-3 font-bold text-slate-100 text-sm">08:30</td>
                                                    <td className="px-5 py-3">
                                                        <div className="flex items-center gap-3">
                                                            <div className="size-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">JP</div>
                                                            <div>
                                                                <p className="text-sm font-semibold text-slate-100">João Pereira</p>
                                                                <p className="text-xs text-slate-400">Unimed</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-3 text-sm text-slate-100">Retorno Exames</td>
                                                    <td className="px-5 py-3 text-sm text-slate-400 hidden sm:table-cell">Dra. Ana</td>
                                                    <td className="px-5 py-3">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                                                            <span className="size-1.5 rounded-full bg-blue-500"></span> Na Recepção
                                                        </span>
                                                    </td>
                                                    <td className="px-5 py-3 text-right">
                                                        <button className="text-slate-400 hover:text-slate-100 p-1 rounded-md hover:bg-slate-700">
                                                            <span className="material-symbols-outlined">more_vert</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-[#10221f] transition-colors group">
                                                    <td className="px-5 py-3 font-bold text-slate-100 text-sm">09:00</td>
                                                    <td className="px-5 py-3">
                                                        <div className="flex items-center gap-3">
                                                            <div className="size-8 rounded-full bg-slate-600 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCG58Lv878rEGvSDSpSCrp1olHaJOAsd6VwKY-MxtksfLhjxNdhgOQrq5NHA_f0Akn7fB-58LZ0SkjGal3aMICYHJ0Mb5iKhJ8AmxCvHjhmEwXcJr4sTJR8jXhn_UADScvgr_Eix0MgBDTjNQ31rKDjSIP2jyxAr1c9er-RL7wgqA3_EEGXixtgHIxgbajBrvMQ685y4yplL2MyUArvP55wpU_RNeV00R8s5LqsuBTt5AhrfCYUz_vTnz3DE08fORaonDOCia9yieeJ')" }}></div>
                                                            <div>
                                                                <p className="text-sm font-semibold text-slate-100">Carlos Souza</p>
                                                                <p className="text-xs text-slate-400">Particular</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-3 text-sm text-slate-100">Ecocardiograma</td>
                                                    <td className="px-5 py-3 text-sm text-slate-400 hidden sm:table-cell">Dr. Roberto</td>
                                                    <td className="px-5 py-3">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-100">
                                                            <span className="size-1.5 rounded-full bg-orange-500"></span> Pendente
                                                        </span>
                                                    </td>
                                                    <td className="px-5 py-3 text-right">
                                                        <button className="text-slate-400 hover:text-slate-100 p-1 rounded-md hover:bg-slate-700">
                                                            <span className="material-symbols-outlined">more_vert</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-[#10221f] transition-colors group">
                                                    <td className="px-5 py-3 font-bold text-slate-100 text-sm">09:30</td>
                                                    <td className="px-5 py-3">
                                                        <div className="flex items-center gap-3">
                                                            <div className="size-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xs">LG</div>
                                                            <div>
                                                                <p className="text-sm font-semibold text-slate-100">Luana Gomes</p>
                                                                <p className="text-xs text-slate-400">Bradesco Saúde</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-3 text-sm text-slate-100">Consulta Dermatologia</td>
                                                    <td className="px-5 py-3 text-sm text-slate-400 hidden sm:table-cell">Dra. Ana</td>
                                                    <td className="px-5 py-3">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-700 text-slate-300 border border-slate-700">
                                                            <span className="size-1.5 rounded-full bg-gray-400"></span> Finalizado
                                                        </span>
                                                    </td>
                                                    <td className="px-5 py-3 text-right">
                                                        <button className="text-slate-400 hover:text-slate-100 p-1 rounded-md hover:bg-slate-700">
                                                            <span className="material-symbols-outlined">more_vert</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* Pagination / Footer */}
                                    <div className="px-5 py-4 border-t border-slate-800 flex items-center justify-center">
                                        <button className="text-sm font-medium text-[#13ecec] hover:text-[#0EBDBD] transition-colors">Ver agenda completa</button>
                                    </div>
                                </div>
                            </div>
                            {/* Right Column: Queue (Narrower) */}
                            <div className="lg:col-span-4 flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#13ecec]">queue_music</span> Fila agora
                                    </h3>
                                    <a className="text-xs font-bold text-[#13ecec] hover:underline" href="#">Abrir Fila</a>
                                </div>
                                <div className="bg-[#1c2725] rounded-xl border border-slate-800 shadow-sm dark:shadow-none p-6 flex flex-col items-center text-center relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#13ecec] to-transparent opacity-50"></div>
                                    <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Senha Atual</p>
                                    <div className="text-6xl font-black text-slate-100 tracking-tight mb-6">A042</div>
                                    <div className="w-full grid grid-cols-2 gap-3 mb-6">
                                        <button className="col-span-2 bg-[#13ecec] hover:bg-[#0EBDBD] text-black font-bold py-3 px-4 rounded-lg shadow-sm dark:shadow-none shadow-[#13ecec]/20 transition-all active:scale-95 flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined">campaign</span> Chamar
                                        </button>
                                        <button className="bg-slate-700 hover:bg-slate-600 text-slate-100 font-semibold py-2 px-4 rounded-lg transition-colors text-sm">Em atendimento</button>
                                        <button className="bg-slate-700 hover:bg-slate-600 text-slate-100 font-semibold py-2 px-4 rounded-lg transition-colors text-sm">Finalizar</button>
                                    </div>
                                    <div className="w-full pt-4 border-t border-slate-800">
                                        <p className="text-xs text-slate-400 font-medium text-left mb-3 pl-1">Próximas senhas:</p>
                                        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
                                            <div className="bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm font-bold text-slate-100 whitespace-nowrap">A043</div>
                                            <div className="bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm font-bold text-slate-100 whitespace-nowrap">A044</div>
                                            <div className="bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm font-bold text-slate-100 whitespace-nowrap">N102</div>
                                            <div className="bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm font-bold text-slate-400 whitespace-nowrap">...</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ROW 3: Tasks Lists */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
                            {/* Task 1: Pendencies */}
                            <div className="bg-[#1c2725] rounded-xl border border-slate-800 shadow-sm dark:shadow-none flex flex-col">
                                <div className="px-5 py-4 border-b border-slate-800 flex justify-between items-center bg-orange-50/30 dark:bg-orange-900/10">
                                    <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-orange-400 text-[20px]">mark_chat_unread</span> Pendências de confirmação
                                    </h3>
                                    <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-0.5 rounded-full">8</span>
                                </div>
                                <div className="p-2 flex-1">
                                    <ul className="flex flex-col">
                                        <li className="flex items-center justify-between p-3 hover:bg-slate-800 rounded-lg group transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className="size-9 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 font-bold text-xs">CS</div>
                                                <div>
                                                    <p className="text-sm font-semibold text-slate-100">Carlos Souza</p>
                                                    <p className="text-xs text-slate-400">Hoje, 09:00 - Ecocardiograma</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="size-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors" title="Confirmar">
                                                    <span className="material-symbols-outlined text-[18px]">check</span>
                                                </button>
                                                <button className="size-8 flex items-center justify-center rounded-full bg-slate-700 text-slate-400 hover:bg-slate-600 transition-colors" title="Ver detalhes">
                                                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                                                </button>
                                            </div>
                                        </li>
                                        <li className="flex items-center justify-between p-3 hover:bg-slate-800 rounded-lg group transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className="size-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">MA</div>
                                                <div>
                                                    <p className="text-sm font-semibold text-slate-100">Mariana Alves</p>
                                                    <p className="text-xs text-slate-400">Hoje, 14:15 - Retorno</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="size-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors" title="Confirmar">
                                                    <span className="material-symbols-outlined text-[18px]">check</span>
                                                </button>
                                                <button className="size-8 flex items-center justify-center rounded-full bg-slate-700 text-slate-400 hover:bg-slate-600 transition-colors" title="Ver detalhes">
                                                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="px-5 py-3 border-t border-slate-800 text-center">
                                    <button className="text-xs font-bold text-slate-400 hover:text-[#13ecec] transition-colors">Ver todas pendências</button>
                                </div>
                            </div>

                            {/* Task 2: Waitlist */}
                            <div className="bg-[#1c2725] rounded-xl border border-slate-800 shadow-sm dark:shadow-none flex flex-col">
                                <div className="px-5 py-4 border-b border-slate-800 flex justify-between items-center bg-blue-50/30 dark:bg-blue-900/10">
                                    <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-blue-400 text-[20px]">person_add</span> Lista de espera (Oportunidades)
                                    </h3>
                                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">2</span>
                                </div>
                                <div className="p-2 flex-1">
                                    <ul className="flex flex-col">
                                        <li className="flex items-center justify-between p-3 hover:bg-slate-800 rounded-lg group transition-colors border-l-2 border-transparent hover:border-blue-400">
                                            <div className="flex flex-col">
                                                <p className="text-sm font-semibold text-slate-100">Fernando Torres</p>
                                                <div className="flex items-center gap-2 mt-0.5">
                                                    <span className="text-[10px] font-bold bg-slate-700 text-slate-300 px-1.5 rounded">Cardiologia</span>
                                                    <span className="text-xs text-slate-400">Prefere manhã</span>
                                                </div>
                                            </div>
                                            <button className="text-xs font-bold text-[#13ecec] hover:text-[#0EBDBD] border border-[#13ecec]/30 hover:bg-[#13ecec]/5 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px]">calendar_add_on</span> Agendar
                                            </button>
                                        </li>
                                        <li className="flex items-center justify-between p-3 hover:bg-slate-800 rounded-lg group transition-colors border-l-2 border-transparent hover:border-blue-400">
                                            <div className="flex flex-col">
                                                <p className="text-sm font-semibold text-slate-100">Beatriz Lima</p>
                                                <div className="flex items-center gap-2 mt-0.5">
                                                    <span className="text-[10px] font-bold bg-slate-700 text-slate-300 px-1.5 rounded">Dermatologia</span>
                                                    <span className="text-xs text-slate-400">Qualquer horário</span>
                                                </div>
                                            </div>
                                            <button className="text-xs font-bold text-[#13ecec] hover:text-[#0EBDBD] border border-[#13ecec]/30 hover:bg-[#13ecec]/5 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px]">calendar_add_on</span> Agendar
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="px-5 py-3 border-t border-slate-800 text-center">
                                    <button className="text-xs font-bold text-slate-400 hover:text-[#13ecec] transition-colors">Gerenciar lista completa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
