import { Link } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../components/admin/Sidebar';
import TopbarAdmin from '../components/admin/TopbarAdmin';

export default function Pacientes() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div className="bg-[#f6f8f8] dark:bg-[#10221f] text-[#0d1b1b] dark:text-slate-100 antialiased h-screen flex overflow-hidden font-display">
            {/* SIDEBAR Reutilizável */}
            <Sidebar isPatientView={true} />

            {/* MAIN CONTENT */}
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                {/* Topbar Reutilizável */}
                <TopbarAdmin showDateControls={false} showProFilter={false} />

                {/* SCROLLABLE PAGE CONTENT */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#f8fcfc] dark:bg-[#10221f]">
                    <div className="max-w-7xl mx-auto flex flex-col gap-5">
                        {/* BREADCRUMBS & HEADING */}
                        <div className="flex flex-col gap-6">

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-black text-[#0d1b1b] dark:text-slate-100">Pacientes</h1>
                                    <p className="text-[#4c9a9a] text-sm mt-0.5">Gerencie o cadastro e visualize o status de agendamento dos seus pacientes.</p>
                                </div>
                                {/* Quick Stats Filter Cards */}
                                <div className="flex gap-3 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto">
                                    <button className="group flex flex-col items-start min-w-[160px] p-4 rounded-xl bg-white dark:bg-[#1c2725] border border-[#cfe7e7] dark:border-[#2a3a38] hover:border-[#13ecec] hover:shadow-md transition-all cursor-pointer text-left">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-[#4c9a9a] dark:text-slate-400 mb-1">Agendados Hoje</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-[#0d1b1b] dark:text-slate-100 group-hover:text-[#13ecec] transition-colors">12</span>
                                            <span className="text-xs bg-[#13ecec]/10 text-[#0EBDBD] px-1.5 py-0.5 rounded font-medium">+2</span>
                                        </div>
                                    </button>
                                    <button className="group flex flex-col items-start min-w-[160px] p-4 rounded-xl bg-white dark:bg-[#1c2725] border border-[#cfe7e7] dark:border-[#2a3a38] hover:border-[#13ecec] hover:shadow-md transition-all cursor-pointer text-left">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-[#4c9a9a] dark:text-slate-400 mb-1">Futuro</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-[#0d1b1b] dark:text-slate-100 group-hover:text-[#13ecec] transition-colors">450</span>
                                        </div>
                                    </button>
                                    <button className="group flex flex-col items-start min-w-[160px] p-4 rounded-xl bg-white dark:bg-[#1c2725] border border-[#cfe7e7] dark:border-[#2a3a38] hover:border-[#13ecec] hover:shadow-md transition-all cursor-pointer text-left">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-[#4c9a9a] dark:text-slate-400 mb-1">Sem Agendamento</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-[#0d1b1b] dark:text-slate-100 group-hover:text-[#13ecec] transition-colors">89</span>
                                            <span className="material-symbols-outlined text-orange-400 text-lg">warning</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* MAIN CARD CONTAINER (Filter + Table) */}
                        <div className="bg-white dark:bg-[#1c2725] rounded-xl border border-[#cfe7e7] dark:border-[#2a3a38] shadow-sm dark:shadow-none flex flex-col overflow-hidden">
                            {/* FILTER BAR */}
                            <div className="p-5 border-b border-[#cfe7e7] dark:border-[#2a3a38] flex flex-col lg:flex-row gap-4 items-center justify-between">
                                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-center">
                                    <div className="relative w-full sm:w-64">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4c9a9a] dark:text-slate-400 material-symbols-outlined text-[20px]">search</span>
                                        <input className="w-full h-10 pl-10 pr-4 bg-[#f6f8f8] dark:bg-[#10221f] border-none focus:bg-white dark:focus:bg-[#1c2725] focus:ring-1 focus:ring-[#13ecec] rounded-lg text-sm text-[#0d1b1b] dark:text-slate-100 placeholder:text-[#4c9a9a] dark:placeholder:text-slate-500 transition-all outline-none" placeholder="Buscar nome, CPF ou tel..." type="text" />
                                    </div>
                                    <div className="flex gap-2 w-full sm:w-auto overflow-x-auto hide-scrollbar">
                                        <button className="h-10 px-3 py-1.5 rounded-lg border border-[#cfe7e7] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] text-[#0d1b1b] dark:text-slate-100 text-sm font-medium hover:bg-[#f6f8f8] flex items-center gap-2 whitespace-nowrap">
                                            <span className="material-symbols-outlined text-[18px]">filter_list</span>
                                            Status
                                            <span className="material-symbols-outlined text-[18px] text-[#4c9a9a]">arrow_drop_down</span>
                                        </button>
                                        <button className="h-10 px-3 py-1.5 rounded-lg border border-[#cfe7e7] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] text-[#0d1b1b] dark:text-slate-100 text-sm font-medium hover:bg-[#f6f8f8] flex items-center gap-2 whitespace-nowrap">
                                            Tags
                                            <span className="material-symbols-outlined text-[18px] text-[#4c9a9a]">arrow_drop_down</span>
                                        </button>
                                        <button className="h-10 px-3 py-1.5 rounded-lg border border-[#cfe7e7] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] text-[#0d1b1b] dark:text-slate-100 text-sm font-medium hover:bg-[#f6f8f8] flex items-center gap-2 whitespace-nowrap hidden md:flex">
                                            <span className="material-symbols-outlined text-[18px]">sort</span>
                                            Ordernar por
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full lg:w-auto flex justify-end">
                                    <button onClick={() => setIsDrawerOpen(true)} className="h-10 bg-[#13ecec] hover:bg-[#0ed9d9] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold px-5 rounded-lg flex items-center gap-2 shadow-sm dark:shadow-none transition-colors whitespace-nowrap w-full sm:w-auto justify-center">
                                        <span className="material-symbols-outlined text-[20px]">add</span>
                                        Novo Paciente
                                    </button>
                                </div>
                            </div>

                            {/* DATA TABLE */}
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#f6f8f8] text-[#4c9a9a] dark:text-slate-400 text-xs font-semibold uppercase tracking-wider border-b border-[#cfe7e7] dark:border-[#2a3a38]">
                                            <th className="p-4 w-10">
                                                <input className="rounded border-gray-300 dark:border-[#2a3a38] text-[#13ecec] focus:ring-[#13ecec] cursor-pointer size-4" type="checkbox" />
                                            </th>
                                            <th className="p-4 min-w-[200px]">Paciente</th>
                                            <th className="p-4 min-w-[180px]">Contato</th>
                                            <th className="p-4 min-w-[160px]">Próximo Agendamento</th>
                                            <th className="p-4 min-w-[140px] hidden md:table-cell">Última Visita</th>
                                            <th className="p-4 min-w-[120px] hidden lg:table-cell">Tags</th>
                                            <th className="p-4 w-14"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#cfe7e7] bg-white dark:bg-[#1c2725] text-sm">
                                        {/* Row 1 */}
                                        <tr className="group hover:bg-[#f6f8f8] transition-colors">
                                            <td className="p-4">
                                                <input className="rounded border-gray-300 dark:border-[#2a3a38] text-[#13ecec] focus:ring-[#13ecec] cursor-pointer size-4" type="checkbox" />
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold shrink-0">AS</div>
                                                    <div className="flex flex-col">
                                                        <Link to="/pacientes/1" className="font-bold text-[#0d1b1b] dark:text-slate-100 hover:text-[#0EBDBD] transition-colors cursor-pointer">Ana Silva</Link>
                                                        <span className="text-xs text-[#4c9a9a]">ID: #49201</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex flex-col">
                                                    <span className="text-[#0d1b1b] dark:text-slate-100">(11) 9****-1234</span>
                                                    <span className="text-xs text-[#4c9a9a]">ana.silva@email.com</span>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="size-2 rounded-full bg-emerald-500"></div>
                                                    <div className="flex flex-col">
                                                        <span className="font-medium text-[#0d1b1b]">14 Out, 10:00</span>
                                                        <span className="text-xs text-emerald-600 font-medium">Confirmado</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 hidden md:table-cell">
                                                <span className="text-[#4c9a9a]">10 Set 2023</span>
                                            </td>
                                            <td className="p-4 hidden lg:table-cell">
                                                <div className="flex gap-1 flex-wrap">
                                                    <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-700 text-xs font-bold border border-purple-200">VIP</span>
                                                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-xs font-bold border border-blue-200">Particular</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-right">
                                                <button className="p-1.5 rounded-lg text-[#4c9a9a] dark:text-slate-400 hover:bg-white dark:hover:bg-[#2a3a38] hover:shadow-sm hover:text-[#0d1b1b] transition-all">
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                        {/* Row 2 */}
                                        <tr className="group hover:bg-[#f6f8f8] transition-colors">
                                            <td className="p-4">
                                                <input className="rounded border-gray-300 dark:border-[#2a3a38] text-[#13ecec] focus:ring-[#13ecec] cursor-pointer size-4" type="checkbox" />
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLrGR6j5r9PhMAi-aUCmUQUP7vuY14Odf8U8Tmz15zLwXu7bdNsEJMx35NeUnXCUqdeAxmPHdvf4Un781PKYJFDqz8qRjaxpa_E3m-yoA1fyZ-5_Qa34CtbJwriK2BsANlwE4H2u-RQJwdZV4C0znjsQaAw4XEVSbjW_--JOqctH_8WJR6xnsSw5yYNKOzsZzGJ7dyn22GcObCiF3kw9wVBmKNobHcYL4P76OmNWfw9ZMRHZQPhwxN5HwXpfBk_1E9hsUnaOX3hKU4")' }}></div>
                                                    <div className="flex flex-col">
                                                        <Link to="/pacientes/2" className="font-bold text-[#0d1b1b] dark:text-slate-100 hover:text-[#0EBDBD] transition-colors cursor-pointer">Carlos Mendez</Link>
                                                        <span className="text-xs text-[#4c9a9a]">ID: #49205</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex flex-col">
                                                    <span className="text-[#0d1b1b]">(21) 9****-9876</span>
                                                    <span className="text-xs text-[#4c9a9a]">carlos.m@email.com</span>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="size-2 rounded-full bg-orange-400"></div>
                                                    <div className="flex flex-col">
                                                        <span className="font-medium text-[#0d1b1b]">15 Out, 14:30</span>
                                                        <span className="text-xs text-orange-600 font-medium">Aguardando</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 hidden md:table-cell">
                                                <span className="text-[#4c9a9a]">02 Ago 2023</span>
                                            </td>
                                            <td className="p-4 hidden lg:table-cell">
                                                <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-[#2a3a38] text-gray-600 dark:text-slate-300 text-xs font-bold border border-gray-200 dark:border-[#2a3a38]">Convênio</span>
                                            </td>
                                            <td className="p-4 text-right">
                                                <button className="p-1.5 rounded-lg text-[#4c9a9a] dark:text-slate-400 hover:bg-white dark:hover:bg-[#2a3a38] hover:shadow-sm hover:text-[#0d1b1b] transition-all">
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                        {/* Row 3 */}
                                        <tr className="group hover:bg-[#f6f8f8] transition-colors">
                                            <td className="p-4">
                                                <input className="rounded border-gray-300 dark:border-[#2a3a38] text-[#13ecec] focus:ring-[#13ecec] cursor-pointer size-4" type="checkbox" />
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 font-bold shrink-0">MJ</div>
                                                    <div className="flex flex-col">
                                                        <Link to="/pacientes/3" className="font-bold text-[#0d1b1b] dark:text-slate-100 hover:text-[#0EBDBD] transition-colors cursor-pointer">Mariana Jones</Link>
                                                        <span className="text-xs text-[#4c9a9a]">ID: #49210</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex flex-col">
                                                    <span className="text-[#0d1b1b]">(41) 9****-5544</span>
                                                    <span className="text-xs text-[#4c9a9a]">mari.jones@email.com</span>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <span className="text-[#4c9a9a] italic text-sm">--</span>
                                            </td>
                                            <td className="p-4 hidden md:table-cell">
                                                <span className="text-[#4c9a9a]">Ontem</span>
                                            </td>
                                            <td className="p-4 hidden lg:table-cell">
                                                <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 text-xs font-bold border border-red-200">Débito Pendente</span>
                                            </td>
                                            <td className="p-4 text-right">
                                                <button className="p-1.5 rounded-lg text-[#4c9a9a] dark:text-slate-400 hover:bg-white dark:hover:bg-[#2a3a38] hover:shadow-sm hover:text-[#0d1b1b] transition-all">
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* PAGINATION */}
                            <div className="p-4 border-t border-[#cfe7e7] dark:border-[#2a3a38] flex flex-col sm:flex-row items-center justify-between gap-4">
                                <p className="text-sm text-[#4c9a9a]">Mostrando <span className="font-bold text-[#0d1b1b]">1-3</span> de <span className="font-bold text-[#0d1b1b]">492</span> pacientes</p>
                                <div className="flex items-center gap-2">
                                    <button className="size-9 flex items-center justify-center rounded-lg border border-[#cfe7e7] dark:border-[#2a3a38] text-[#4c9a9a] dark:text-slate-400 hover:bg-[#f6f8f8] disabled:opacity-50" disabled>
                                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                                    </button>
                                    <button className="size-9 flex items-center justify-center rounded-lg bg-[#13ecec] text-[#0d1b1b] dark:text-slate-100 font-bold text-sm shadow-sm dark:shadow-none">1</button>
                                    <button className="size-9 flex items-center justify-center rounded-lg border border-[#cfe7e7] dark:border-[#2a3a38] text-[#4c9a9a] dark:text-slate-400 hover:bg-[#f6f8f8] text-sm font-medium">2</button>
                                    <button className="size-9 flex items-center justify-center rounded-lg border border-[#cfe7e7] dark:border-[#2a3a38] text-[#4c9a9a] dark:text-slate-400 hover:bg-[#f6f8f8] text-sm font-medium">3</button>
                                    <span className="text-[#4c9a9a] px-1">...</span>
                                    <button className="size-9 flex items-center justify-center rounded-lg border border-[#cfe7e7] dark:border-[#2a3a38] text-[#4c9a9a] dark:text-slate-400 hover:bg-[#f6f8f8] text-sm font-medium">10</button>
                                    <button className="size-9 flex items-center justify-center rounded-lg border border-[#cfe7e7] dark:border-[#2a3a38] text-[#4c9a9a] dark:text-slate-400 hover:bg-[#f6f8f8] dark:bg-[#10221f]">
                                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* DRAWER / MODAL (Slide-over) */}
            <div className={`fixed inset-0 z-50 flex justify-end transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="absolute inset-0 bg-[#0d1b1b]/20 backdrop-blur-sm transition-opacity" onClick={() => setIsDrawerOpen(false)}></div>
                <div className="relative z-10 w-full max-w-md bg-white dark:bg-[#1c2725] h-full shadow-2xl flex flex-col">
                    <div className="px-6 py-4 border-b border-[#cfe7e7] dark:border-[#2a3a38] flex items-center justify-between bg-[#e7f3f3] dark:bg-[#1A2C2C]">
                        <h2 className="text-lg font-bold text-[#0d1b1b]">Novo Paciente</h2>
                        <button className="text-[#4c9a9a] hover:text-[#0d1b1b] transition-colors" onClick={() => setIsDrawerOpen(false)}>
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
                        <div className="flex flex-col items-center gap-2 mb-2">
                            <div className="size-20 rounded-full bg-[#f6f8f8] dark:bg-[#10221f] border-2 border-dashed border-[#cfe7e7] dark:border-[#2a3a38] flex items-center justify-center text-[#4c9a9a] dark:text-slate-400 cursor-pointer hover:border-[#13ecec] hover:text-[#13ecec] transition-all">
                                <span className="material-symbols-outlined text-3xl">add_a_photo</span>
                            </div>
                            <span className="text-xs text-[#4c9a9a] dark:text-slate-400 font-medium">Adicionar foto</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-[#0d1b1b]">Nome Completo <span className="text-red-500">*</span></label>
                                <input className="w-full h-11 px-4 rounded-lg bg-[#f6f8f8] dark:bg-[#10221f] border-transparent focus:bg-white dark:focus:bg-[#1c2725] focus:ring-1 focus:ring-[#13ecec] text-sm outline-none" placeholder="Ex: Maria Silva" type="text" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-bold text-[#0d1b1b]">Celular <span className="text-red-500">*</span></label>
                                    <input className="w-full h-11 px-4 rounded-lg bg-[#f6f8f8] dark:bg-[#10221f] border-transparent focus:bg-white dark:focus:bg-[#1c2725] focus:ring-1 focus:ring-[#13ecec] text-sm outline-none" placeholder="(00) 00000-0000" type="tel" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-bold text-[#0d1b1b]">Data de Nasc.</label>
                                    <input className="w-full h-11 px-4 rounded-lg bg-[#f6f8f8] dark:bg-[#10221f] border-transparent focus:bg-white dark:focus:bg-[#1c2725] focus:ring-1 focus:ring-[#13ecec] text-sm text-[#4c9a9a] dark:text-slate-400 outline-none" type="date" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-[#0d1b1b]">E-mail</label>
                                <input className="w-full h-11 px-4 rounded-lg bg-[#f6f8f8] dark:bg-[#10221f] border-transparent focus:bg-white dark:focus:bg-[#1c2725] focus:ring-1 focus:ring-[#13ecec] text-sm outline-none" placeholder="nome@exemplo.com" type="email" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-[#0d1b1b]">CPF / Documento</label>
                                <input className="w-full h-11 px-4 rounded-lg bg-[#f6f8f8] dark:bg-[#10221f] border-transparent focus:bg-white dark:focus:bg-[#1c2725] focus:ring-1 focus:ring-[#13ecec] text-sm outline-none" placeholder="000.000.000-00" type="text" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-[#0d1b1b]">Tags iniciais</label>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    <span className="px-2 py-1 bg-[#13ecec]/20 text-[#0d1b1b] dark:text-slate-100 text-xs font-bold rounded flex items-center gap-1">
                                        Novo
                                        <button className="hover:text-red-500"><span className="material-symbols-outlined text-[14px]">close</span></button>
                                    </span>
                                </div>
                                <input className="w-full h-11 px-4 rounded-lg bg-[#f6f8f8] dark:bg-[#10221f] border-transparent focus:bg-white dark:focus:bg-[#1c2725] focus:ring-1 focus:ring-[#13ecec] text-sm outline-none" placeholder="Digite e pressione enter..." type="text" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-bold text-[#0d1b1b]">Observações (Admin)</label>
                                <textarea className="w-full p-4 rounded-lg bg-[#f6f8f8] dark:bg-[#10221f] border-transparent focus:bg-white dark:focus:bg-[#1c2725] focus:ring-1 focus:ring-[#13ecec] text-sm outline-none resize-none" placeholder="Informações internas..." rows={3}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 border-t border-[#cfe7e7] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] flex gap-3">
                        <button className="flex-1 h-12 rounded-lg border border-[#cfe7e7] dark:border-[#2a3a38] text-[#0d1b1b] dark:text-slate-100 font-bold hover:bg-[#f6f8f8] transition-colors" onClick={() => setIsDrawerOpen(false)}>Cancelar</button>
                        <button className="flex-1 h-12 rounded-lg bg-[#13ecec] hover:bg-[#0ed9d9] text-[#0d1b1b] dark:text-slate-100 font-bold shadow-sm dark:shadow-none transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">check</span>
                            Salvar Paciente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
