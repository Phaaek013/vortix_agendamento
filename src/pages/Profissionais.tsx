import { Link } from 'react-router-dom';
import HeaderPublic from '../components/public/HeaderPublic';
import FooterPublic from '../components/public/FooterPublic';

export default function Profissionais() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-[#f8fcfc] dark:bg-[#10221f] dark:bg-[#10221f] font-display text-[#0d1b1b] dark:text-slate-100 transition-colors duration-200">
            {/* Header Reutilizável */}
            <HeaderPublic />


            <main className="flex-grow flex flex-col items-center w-full px-4 md:px-10 py-6">
                <div className="w-full max-w-[1200px] flex flex-col gap-6">
                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap gap-2 px-1">
                        <Link className="text-[#4c9a9a] dark:text-slate-400 hover:underline text-sm font-medium" to="/home">Início</Link>
                        <span className="text-[#4c9a9a] text-sm font-medium">/</span>
                        <span className="text-[#0d1b1b] text-sm font-medium">Profissionais</span>
                    </div>
                    {/* Page Heading */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#e7f3f3] dark:border-[#2a3a38] ">
                        <div className="flex flex-col gap-2 max-w-2xl">
                            <h1 className="text-[#0d1b1b] text-3xl md:text-4xl font-black tracking-tight">Profissionais</h1>
                            <p className="text-[#4c9a9a] text-base md:text-lg">Encontre o especialista ideal para o seu atendimento e agende sua consulta com praticidade.</p>
                        </div>
                        <Link to="/agendar" className="flex shrink-0 cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-[#e7f3f3] dark:bg-[#1A2C2C] hover:bg-gray-200 transition-colors text-[#0d1b1b] dark:text-slate-100 text-sm font-bold">
                            Agendar agora
                        </Link>
                    </div>
                    {/* Search and Filter Bar */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Search Input */}
                            <div className="relative flex-grow">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-[#4c9a9a] dark:text-slate-400">search</span>
                                </div>
                                <input className="block w-full rounded-lg border-0 py-3 pl-10 pr-4 bg-[#e7f3f3] dark:bg-[#1A2C2C] text-[#0d1b1b] dark:text-slate-100 placeholder:text-[#4c9a9a] dark:placeholder:text-slate-500 focus:ring-2 focus:ring-[#13ecec] focus:bg-white dark:focus:bg-[#1c2725] :bg-[#152626] outline-none transition-all" placeholder="Buscar por nome ou especialidade" type="text" />
                            </div>
                            {/* Sort Dropdown */}
                            <div className="relative min-w-[200px]">
                                <button className="flex w-full items-center justify-between rounded-lg bg-[#e7f3f3] dark:bg-[#1A2C2C] py-3 px-4 text-[#0d1b1b] dark:text-slate-100 font-medium hover:bg-gray-200 :bg-gray-700 transition-colors">
                                    <span>Ordenar por: Relevância</span>
                                    <span className="material-symbols-outlined text-[#4c9a9a]">expand_more</span>
                                </button>
                            </div>
                        </div>
                        {/* Filter Chips */}
                        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
                            <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-[#13ecec] text-[#0d1b1b] dark:text-slate-100 px-4 font-bold text-sm shadow-sm dark:shadow-none transition-transform active:scale-95">
                                Todos
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-[#e7f3f3] dark:bg-[#1A2C2C] hover:bg-gray-200 :bg-gray-700 text-[#0d1b1b] dark:text-slate-100 px-4 font-medium text-sm transition-colors border border-transparent hover:border-[#4c9a9a]/30">
                                Cardiologia
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-[#e7f3f3] dark:bg-[#1A2C2C] hover:bg-gray-200 :bg-gray-700 text-[#0d1b1b] dark:text-slate-100 px-4 font-medium text-sm transition-colors border border-transparent hover:border-[#4c9a9a]/30">
                                Dermatologia
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-[#e7f3f3] dark:bg-[#1A2C2C] hover:bg-gray-200 :bg-gray-700 text-[#0d1b1b] dark:text-slate-100 px-4 font-medium text-sm transition-colors border border-transparent hover:border-[#4c9a9a]/30">
                                Pediatria
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-[#e7f3f3] dark:bg-[#1A2C2C] hover:bg-gray-200 :bg-gray-700 text-[#0d1b1b] dark:text-slate-100 px-4 font-medium text-sm transition-colors border border-transparent hover:border-[#4c9a9a]/30">
                                Ortopedia
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-[#e7f3f3] dark:bg-[#1A2C2C] hover:bg-gray-200 :bg-gray-700 text-[#0d1b1b] dark:text-slate-100 px-4 font-medium text-sm transition-colors border border-transparent hover:border-[#4c9a9a]/30">
                                Ginecologia
                            </button>
                        </div>
                    </div>
                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        {/* Card 1 */}
                        <article className="group flex flex-col bg-white dark:bg-[#1c2725] rounded-xl overflow-hidden border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none hover:shadow-md transition-shadow">
                            <div className="p-5 flex flex-col gap-4 flex-grow">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative size-14 rounded-full overflow-hidden bg-gray-100 dark:bg-[#2a3a38]">
                                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiCObTSU4lDhewwdf_AzcXPhlKOW4Y4P1Jjyv2rQCvvpQ5WuThjrMHTcdk1MY5j98f-fUkqnXJUN6VXfwLCCGIW97s16Msaau5_tpquJAwj4dIRVPX8p-YrhEFBxkLVn8tXZx2GgE76b-oSQFammGFgRlUX9cP4POq4SOe-DEgDeekQXTDay791GI3W_GyEiCLYnhfdCiidl8Yd-ClKBEY6WR010au43UVE3lfKUi5p5b9-4wVk54g3B74XwaJ1kV-s2dPcGm47aNd" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#0d1b1b] dark:text-slate-100 leading-tight group-hover:text-[#13ecec] transition-colors">Dra. Ana Costa</h3>
                                            <p className="text-[#4c9a9a] font-medium text-sm">Cardiologia</p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-300 dark:text-slate-400 hover:text-[#13ecec] cursor-pointer">favorite</span>
                                </div>
                                {/* Badges */}
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 ">
                                        <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                        Agendável
                                    </span>
                                    <span className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-[#2a3a38] text-gray-600 dark:text-slate-300 ">
                                        Consultas e Exames
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-slate-300 line-clamp-2">
                                    Especialista em ecocardiografia e prevenção cardiovascular com foco em hipertensão arterial.
                                </p>
                                {/* Availability Mock */}
                                <div className="mt-auto pt-3 border-t border-dashed border-[#e7f3f3] dark:border-[#2a3a38] ">
                                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Próxima disponibilidade:</p>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-[#0d1b1b] dark:text-slate-100 ">
                                        <span className="material-symbols-outlined text-[#13ecec] text-[18px]">calendar_clock</span>
                                        Hoje, 14:30
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-[#f8fcfc] dark:bg-[#10221f] dark:bg-[#10221f] border-t border-[#e7f3f3] dark:border-[#2a3a38] flex gap-3">
                                <button className="flex-1 h-10 rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-gray-50 dark:bg-[#1A2C2C] dark:hover:bg-[#2a3a38] :bg-gray-800 transition-colors">
                                    Ver detalhes
                                </button>
                                <Link to="/agendar" state={{ preselectedProfessional: { id: 2, nome: 'Dra. Ana Costa', especialidade: 'Cardiologista Intervencionista', registro: 'CRM/SP 54321', genero: 'F', proximaDataStr: 'Hoje, 14:30' } }} className="flex flex-1 items-center justify-center h-10 rounded-lg bg-[#13ecec] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-[#13ecec]/90 transition-colors shadow-sm dark:shadow-none">
                                    Agendar
                                </Link>
                            </div>
                        </article>

                        {/* Card 2 */}
                        <article className="group flex flex-col bg-white dark:bg-[#1c2725] rounded-xl overflow-hidden border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none hover:shadow-md transition-shadow">
                            <div className="p-5 flex flex-col gap-4 flex-grow">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative size-14 rounded-full overflow-hidden bg-gray-100">
                                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV2dZ2zBvI5ojtIKznBSIwITdX7uC7eIEjoMeWFAFQTvuTaW46UQeJ0QKTo2UJtUybqCS6YwqT0RE-VfANYwhl7dJJbwarH51zdIL8ZLljP0IFVZOgpfY1V4VR8gw76t7i9BOReLKDzDtLTXJtXBoNW0EyQf_dnu1Jq4rVF9zS4_MihW2-Ve9WBrS9hEhOCLY9M4Fp8KxSp1O4gWB_meXEC6nsmI0sXDSVc2M5U3HZ7_NTkj4QqG0A5ly6zRIL7tvwcEEgb3dlCdOa" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#0d1b1b] dark:text-slate-100 leading-tight group-hover:text-[#13ecec] transition-colors">Dr. Carlos Mendes</h3>
                                            <p className="text-[#4c9a9a] font-medium text-sm">Pediatria</p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-300 dark:text-slate-400 hover:text-[#13ecec] cursor-pointer">favorite</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 ">
                                        <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                        Agendável
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-slate-300 line-clamp-2">
                                    Atendimento humanizado para crianças e adolescentes. Experiência em puericultura e doenças respiratórias.
                                </p>
                                <div className="mt-auto pt-3 border-t border-dashed border-[#e7f3f3] dark:border-[#2a3a38] ">
                                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Próxima disponibilidade:</p>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-[#0d1b1b] dark:text-slate-100 ">
                                        <span className="material-symbols-outlined text-[#13ecec] text-[18px]">calendar_clock</span>
                                        Amanhã, 09:00
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-[#f8fcfc] dark:bg-[#10221f] dark:bg-[#10221f] border-t border-[#e7f3f3] dark:border-[#2a3a38] flex gap-3">
                                <button className="flex-1 h-10 rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-gray-50 dark:hover:bg-[#2a3a38] :bg-gray-800 transition-colors">
                                    Ver detalhes
                                </button>
                                <Link to="/agendar" state={{ preselectedProfessional: { id: 3, nome: 'Dr. Carlos Mendes', especialidade: 'Cardiologista Pediátrico', registro: 'CRM/SP 98765', genero: 'M', proximaDataStr: 'Amanhã, 11:00' } }} className="flex flex-1 items-center justify-center h-10 rounded-lg bg-[#13ecec] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-[#13ecec]/90 transition-colors shadow-sm">
                                    Agendar
                                </Link>
                            </div>
                        </article>

                        {/* Card 3 */}
                        <article className="group flex flex-col bg-white dark:bg-[#1c2725] rounded-xl overflow-hidden border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none hover:shadow-md transition-shadow">
                            <div className="p-5 flex flex-col gap-4 flex-grow">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative size-14 rounded-full overflow-hidden bg-gray-100">
                                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgHOZZL39-f_iwM8tjCajGE_7L57xILWW03QsAwv8L1X6iifUQM_BoPadndqPRarO04ygg2qzWjpwHZ6WZeprvdE-KeZNBAa5Q9b0IlA7kUfQBDpy8pMvG86Ut37oHvLpWqiLRdOLbAQIHlw_PqNVLhRhzT3lrUzcdNPmL9AHJc_xpQ4e0mmBrcHcn0z5CqdFHILYuhZmyX_qpzn_aOdIyLVyIbpwNAhqytHaCvcQaPMnc6HseGNF1lIw8xEpU9zGMD0M21C93eEyE" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#0d1b1b] dark:text-slate-100 leading-tight group-hover:text-[#13ecec] transition-colors">Dra. Sofia Lima</h3>
                                            <p className="text-[#4c9a9a] font-medium text-sm">Dermatologia</p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-300 dark:text-slate-400 hover:text-[#13ecec] cursor-pointer">favorite</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold bg-orange-100 text-orange-800 ">
                                        Poucas Vagas
                                    </span>
                                    <span className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-purple-100 text-purple-600 ">
                                        Telemedicina
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-slate-300 line-clamp-2">
                                    Tratamentos estéticos e clínicos para saúde da pele. Especialista em procedimentos a laser e rejuvenescimento.
                                </p>
                                <div className="mt-auto pt-3 border-t border-dashed border-[#e7f3f3] dark:border-[#2a3a38] ">
                                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Próxima disponibilidade:</p>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-[#0d1b1b] dark:text-slate-100 ">
                                        <span className="material-symbols-outlined text-[#13ecec] text-[18px]">calendar_clock</span>
                                        25 Out, 16:00
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-[#f8fcfc] dark:bg-[#10221f] dark:bg-[#10221f] border-t border-[#e7f3f3] dark:border-[#2a3a38] flex gap-3">
                                <button className="flex-1 h-10 rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-gray-50 dark:hover:bg-[#2a3a38] :bg-gray-800 transition-colors">
                                    Ver detalhes
                                </button>
                                <Link to="/agendar" state={{ preselectedProfessional: { id: 4, nome: 'Dra. Sofia Lima', especialidade: 'Dermatologista Clínica', registro: 'CRM/SP 45678', genero: 'F', proximaDataStr: '25 Out, 16:00' } }} className="flex flex-1 items-center justify-center h-10 rounded-lg bg-[#13ecec] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-[#13ecec]/90 transition-colors shadow-sm">
                                    Agendar
                                </Link>
                            </div>
                        </article>

                        {/* Card 4 */}
                        <article className="group flex flex-col bg-white dark:bg-[#1c2725] rounded-xl overflow-hidden border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none hover:shadow-md transition-shadow">
                            <div className="p-5 flex flex-col gap-4 flex-grow">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative size-14 rounded-full overflow-hidden bg-gray-100">
                                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkaDquTWRfZgPrTwM3PyLZRouBZQXb32zjlx4xmMuHwPnOVPq1ci2Wp2XbeqLE7Q1nfaoWT2q7tkxvpF4fqCUbO_EtwbxQEGd3wpiXXUc0Cl8Fx8qDdRBMN1Cpas22BVLge9gHyA4OZOiAEoqE9mpZn0YXdv-zO__Vl5Z7sC5gM1fOpcTKGHGOTjeioJIypK_EU5Bibxox5_VoYz7dvkeOya27bb5NFrIeProqcdI9ilAFCzW-fGPSuYPXw4PutIofXUH-_SSWpSUb" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#0d1b1b] dark:text-slate-100 leading-tight group-hover:text-[#13ecec] transition-colors">Dr. Ricardo Silva</h3>
                                            <p className="text-[#4c9a9a] font-medium text-sm">Ortopedia</p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-300 dark:text-slate-400 hover:text-[#13ecec] cursor-pointer">favorite</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 ">
                                        <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                        Agendável
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-slate-300 line-clamp-2">
                                    Cirurgia de joelho e medicina esportiva. Reabilitação de lesões e traumas ortopédicos complexos.
                                </p>
                                <div className="mt-auto pt-3 border-t border-dashed border-[#e7f3f3] dark:border-[#2a3a38] ">
                                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Próxima disponibilidade:</p>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-[#0d1b1b] dark:text-slate-100 ">
                                        <span className="material-symbols-outlined text-[#13ecec] text-[18px]">calendar_clock</span>
                                        Hoje, 17:00
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-[#f8fcfc] dark:bg-[#10221f] dark:bg-[#10221f] border-t border-[#e7f3f3] dark:border-[#2a3a38] flex gap-3">
                                <button className="flex-1 h-10 rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-gray-50 dark:hover:bg-[#2a3a38] :bg-gray-800 transition-colors">
                                    Ver detalhes
                                </button>
                                <Link to="/agendar" state={{ preselectedProfessional: { id: 1, nome: 'Dr. Roberto Silva', especialidade: 'Cardiologista', registro: 'CRM/SP 123456', genero: 'M', proximaDataStr: 'Hoje, 14:30' } }} className="flex flex-1 items-center justify-center h-10 rounded-lg bg-[#13ecec] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-[#13ecec]/90 transition-colors shadow-sm">
                                    Agendar
                                </Link>
                            </div>
                        </article>

                        {/* Card 5 */}
                        <article className="group flex flex-col bg-white dark:bg-[#1c2725] rounded-xl overflow-hidden border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none hover:shadow-md transition-shadow">
                            <div className="p-5 flex flex-col gap-4 flex-grow">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative size-14 rounded-full overflow-hidden bg-gray-100">
                                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiO0UBf1hKOXdRnEC7_U_MaHmpTvQFfgXw_bUkIvfzKDZN2E5zt1oW2GNhmlBAo8IvPu4ZDe3IOVG6S9Phgf6PFzBlmFG1ALl3cSFvvpo2w6a50oaOLVbR6XUx7ETDPBY0wHqsT5QgWbLd6bWPS069jqWljJdu5OugwXk0G3UCpjkQ_WBnBF80Lewmxa_4sOVGedGAKl-eCXMPYdhUP4fYZqcpKoRbdGiQldncHCC1sGZrA0EpuZcPS3Uzr5QhcW-m9IBI2xRKQ7AL" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#0d1b1b] dark:text-slate-100 leading-tight group-hover:text-[#13ecec] transition-colors">Enf. Julia Santos</h3>
                                            <p className="text-[#4c9a9a] font-medium text-sm">Enfermagem</p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-300 dark:text-slate-400 hover:text-[#13ecec] cursor-pointer">favorite</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-[#2a3a38] text-gray-600 dark:text-slate-300 ">
                                        Coletas
                                    </span>
                                    <span className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-[#2a3a38] text-gray-600 dark:text-slate-300 ">
                                        Vacinação
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-slate-300 line-clamp-2">
                                    Atendimento especializado em vacinação infantil e adulta, curativos e coletas laboratoriais.
                                </p>
                                <div className="mt-auto pt-3 border-t border-dashed border-[#e7f3f3] dark:border-[#2a3a38] ">
                                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Próxima disponibilidade:</p>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-[#0d1b1b] dark:text-slate-100 ">
                                        <span className="material-symbols-outlined text-[#13ecec] text-[18px]">calendar_clock</span>
                                        Amanhã, 08:30
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-[#f8fcfc] dark:bg-[#10221f] dark:bg-[#10221f] border-t border-[#e7f3f3] dark:border-[#2a3a38] flex gap-3">
                                <button className="flex-1 h-10 rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-gray-50 dark:hover:bg-[#2a3a38] :bg-gray-800 transition-colors">
                                    Ver detalhes
                                </button>
                                <Link to="/agendar" state={{ preselectedProfessional: { id: 5, nome: 'Enf. Julia Santos', especialidade: 'Enfermeira Chefe', registro: 'COREN/SP 12345', genero: 'F', proximaDataStr: 'Amanhã, 08:30' } }} className="flex flex-1 items-center justify-center h-10 rounded-lg bg-[#13ecec] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-[#13ecec]/90 transition-colors shadow-sm">
                                    Agendar
                                </Link>
                            </div>
                        </article>

                        {/* Skeleton Loader Card (Demonstration) */}
                        {/*
 <article className="flex flex-col bg-white dark:bg-[#1c2725] rounded-xl overflow-hidden border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm">
 ...
 </article>
 */}
                    </div>

                    {/* CTA Block: Undecided */}
                    <div className="mt-8 rounded-xl bg-[#1A2C2C] overflow-hidden relative">
                        {/* Abstract pattern background */}
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#13ecec]/20 rounded-l-full blur-3xl opacity-30 transform translate-x-1/3"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 gap-6">
                            <div className="flex flex-col gap-3 md:max-w-xl">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-full bg-[#13ecec]/20 flex items-center justify-center text-[#13ecec] ">
                                        <span className="material-symbols-outlined">help</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white ">Não sabe com quem agendar?</h2>
                                </div>
                                <p className="text-gray-300 text-lg">
                                    Nossa equipe pode ajudar você a encontrar o especialista certo. Navegue pelos nossos serviços ou entre em contato.
                                </p>
                            </div>
                            <div className="flex gap-3 shrink-0">
                                <button className="flex min-w-[140px] items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-gray-500 text-white text-sm font-bold hover:bg-white/10 :bg-black/5 transition-colors">
                                    Ver serviços
                                </button>
                                <button className="flex min-w-[140px] items-center justify-center rounded-lg h-12 px-6 bg-[#13ecec] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-[#13ecec]/90 transition-colors">
                                    Fale conosco
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer Reutilizável */}
            <FooterPublic />
        </div>
    );
}
