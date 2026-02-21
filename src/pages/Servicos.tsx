import { Link } from 'react-router-dom';
import HeaderPublic from '../components/public/HeaderPublic';
import FooterPublic from '../components/public/FooterPublic';

export default function Servicos() {
    return (
        <div className="bg-[#f8fcfc] dark:bg-[#10221f] min-h-screen flex flex-col font-display text-[#0d1b1b] dark:text-slate-100 transition-colors duration-200">
            {/* Header Reutilizável */}
            <HeaderPublic />

            <main className="flex-grow flex flex-col items-center w-full px-4 md:px-10 py-6">
                <div className="w-full max-w-[1200px] flex flex-col gap-6">
                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap gap-2 px-1">
                        <Link className="text-[#4c9a9a] dark:text-slate-400 hover:underline text-sm font-medium" to="/home">Início</Link>
                        <span className="text-[#4c9a9a] text-sm font-medium">/</span>
                        <span className="text-[#0d1b1b] text-sm font-medium">Serviços</span>
                    </div>

                    {/* Page Heading - Mesmo padrão de Profissionais */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#e7f3f3] dark:border-[#2a3a38]">
                        <div className="flex flex-col gap-2 max-w-2xl">
                            <h1 className="text-[#0d1b1b] text-3xl md:text-4xl font-black tracking-tight">Serviços Disponíveis</h1>
                            <p className="text-[#4c9a9a] text-base md:text-lg">Explore nossa lista completa de especialidades médicas e exames de diagnóstico. Agende online com facilidade e segurança.</p>
                        </div>
                        <Link to="/agendar" className="flex shrink-0 cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-[#e7f3f3] dark:bg-[#1A2C2C] hover:bg-gray-200 transition-colors text-[#0d1b1b] dark:text-slate-100 text-sm font-bold">
                            <span className="material-symbols-outlined text-[20px] mr-2">calendar_today</span>
                            Agendamento Rápido
                        </Link>
                    </div>

                    {/* Search and Filter Bar - Mesmo padrão de Profissionais */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Search Input */}
                            <div className="relative flex-grow">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-[#4c9a9a] dark:text-slate-400">search</span>
                                </div>
                                <input className="block w-full rounded-lg border-0 py-3 pl-10 pr-4 bg-[#e7f3f3] dark:bg-[#1A2C2C] text-[#0d1b1b] dark:text-slate-100 placeholder:text-[#4c9a9a] dark:placeholder:text-slate-500 focus:ring-2 focus:ring-[#13ecec] focus:bg-white dark:focus:bg-[#1c2725] outline-none transition-all" placeholder="Buscar por especialidade, médico ou exame..." type="text" />
                            </div>
                            {/* Sort Dropdown */}
                            <div className="relative min-w-[200px]">
                                <button className="flex w-full items-center justify-between rounded-lg bg-[#e7f3f3] dark:bg-[#1A2C2C] py-3 px-4 text-[#0d1b1b] dark:text-slate-100 font-medium hover:bg-gray-200 transition-colors">
                                    <span>Ordenar por: Relevância</span>
                                    <span className="material-symbols-outlined text-[#4c9a9a]">expand_more</span>
                                </button>
                            </div>
                        </div>
                        {/* Filter Chips - Mesmo padrão de Profissionais (pill sólidos) */}
                        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
                            <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-[#13ecec] text-[#0d1b1b] dark:text-slate-100 px-4 font-bold text-sm shadow-sm dark:shadow-none transition-transform active:scale-95">
                                Todos
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-[#e7f3f3] dark:bg-[#1A2C2C] hover:bg-gray-200 text-[#0d1b1b] dark:text-slate-100 px-4 font-medium text-sm transition-colors border border-transparent hover:border-[#4c9a9a]/30">
                                Cardiologia
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-[#e7f3f3] dark:bg-[#1A2C2C] hover:bg-gray-200 text-[#0d1b1b] dark:text-slate-100 px-4 font-medium text-sm transition-colors border border-transparent hover:border-[#4c9a9a]/30">
                                Dermatologia
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-[#e7f3f3] dark:bg-[#1A2C2C] hover:bg-gray-200 text-[#0d1b1b] dark:text-slate-100 px-4 font-medium text-sm transition-colors border border-transparent hover:border-[#4c9a9a]/30">
                                Pediatria
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-[#e7f3f3] dark:bg-[#1A2C2C] hover:bg-gray-200 text-[#0d1b1b] dark:text-slate-100 px-4 font-medium text-sm transition-colors border border-transparent hover:border-[#4c9a9a]/30">
                                Ortopedia
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-[#e7f3f3] dark:bg-[#1A2C2C] hover:bg-gray-200 text-[#0d1b1b] dark:text-slate-100 px-4 font-medium text-sm transition-colors border border-transparent hover:border-[#4c9a9a]/30">
                                Telemedicina
                            </button>
                        </div>
                    </div>

                    {/* Content Grid - Cards no padrão Profissionais */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        {/* Card 1: Consulta Cardiológica */}
                        <article className="group flex flex-col bg-white dark:bg-[#1c2725] rounded-xl overflow-hidden border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none hover:shadow-md transition-shadow">
                            <div className="p-5 flex flex-col gap-4 flex-grow">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative size-14 rounded-full overflow-hidden bg-[#e7f3f3] dark:bg-[#1A2C2C] flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[#0EBDBD] text-[28px]">cardiology</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#0d1b1b] dark:text-slate-100 leading-tight group-hover:text-[#13ecec] transition-colors">Consulta Cardiológica</h3>
                                            <p className="text-[#4c9a9a] font-medium text-sm">Dr. Ricardo Silva e Equipe</p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-300 dark:text-slate-400 hover:text-[#13ecec] cursor-pointer">favorite</span>
                                </div>
                                {/* Badges */}
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold bg-green-100 text-green-800">
                                        <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                        Disponível Hoje
                                    </span>
                                    <span className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-[#2a3a38] text-gray-600 dark:text-slate-300">
                                        45 min · Online ou Presencial
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-slate-300 line-clamp-2">
                                    Avaliação completa da saúde do coração, incluindo análise de pressão arterial e histórico familiar.
                                </p>
                                {/* Availability Mock */}
                                <div className="mt-auto pt-3 border-t border-dashed border-[#e7f3f3]">
                                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Próxima disponibilidade:</p>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-[#0d1b1b] dark:text-slate-100">
                                        <span className="material-symbols-outlined text-[#13ecec] text-[18px]">calendar_clock</span>
                                        Hoje, 15:00
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-[#f8fcfc] dark:bg-[#10221f] dark:bg-[#10221f] border-t border-[#e7f3f3] dark:border-[#2a3a38] flex gap-3">
                                <button className="flex-1 h-10 rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-gray-50 dark:bg-[#1A2C2C] dark:hover:bg-[#2a3a38] transition-colors">
                                    Ver detalhes
                                </button>
                                <Link to="/agendar" state={{ preselectedService: { id: 1, nome: 'Consulta Cardiológica', especialidade: 'Cardiologia', tipo: 'Consulta', tempoMinutos: 45 } }} className="flex flex-1 items-center justify-center h-10 rounded-lg bg-[#13ecec] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-[#13ecec]/90 transition-colors shadow-sm dark:shadow-none">
                                    Agendar
                                </Link>
                            </div>
                        </article>

                        {/* Card 2: Consulta Dermatológica */}
                        <article className="group flex flex-col bg-white dark:bg-[#1c2725] rounded-xl overflow-hidden border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none hover:shadow-md transition-shadow">
                            <div className="p-5 flex flex-col gap-4 flex-grow">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative size-14 rounded-full overflow-hidden bg-[#e7f3f3] dark:bg-[#1A2C2C] flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[#0EBDBD] text-[28px]">dermatology</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#0d1b1b] dark:text-slate-100 leading-tight group-hover:text-[#13ecec] transition-colors">Consulta Dermatológica</h3>
                                            <p className="text-[#4c9a9a] font-medium text-sm">Dra. Ana Paula</p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-300 dark:text-slate-400 hover:text-[#13ecec] cursor-pointer">favorite</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800">
                                        <span className="size-1.5 rounded-full bg-blue-500"></span>
                                        Telemedicina
                                    </span>
                                    <span className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-[#2a3a38] text-gray-600">
                                        30 min · Apenas Online
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-slate-300 line-clamp-2">
                                    Diagnóstico e tratamento de doenças de pele, cabelos e unhas. Ideal para consultas de acompanhamento.
                                </p>
                                <div className="mt-auto pt-3 border-t border-dashed border-[#e7f3f3]">
                                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Próxima disponibilidade:</p>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-[#0d1b1b]">
                                        <span className="material-symbols-outlined text-[#13ecec] text-[18px]">calendar_clock</span>
                                        Amanhã, 10:00
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-[#f8fcfc] dark:bg-[#10221f] dark:bg-[#10221f] border-t border-[#e7f3f3] dark:border-[#2a3a38] flex gap-3">
                                <button className="flex-1 h-10 rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-gray-50 dark:hover:bg-[#2a3a38] transition-colors">
                                    Ver detalhes
                                </button>
                                <Link to="/agendar" state={{ preselectedService: { id: 2, nome: 'Consulta Dermatológica', especialidade: 'Dermatologia', tipo: 'Consulta', tempoMinutos: 30 } }} className="flex flex-1 items-center justify-center h-10 rounded-lg bg-[#13ecec] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-[#13ecec]/90 transition-colors shadow-sm">
                                    Agendar
                                </Link>
                            </div>
                        </article>

                        {/* Card 3: Consulta Pediátrica */}
                        <article className="group flex flex-col bg-white dark:bg-[#1c2725] rounded-xl overflow-hidden border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none hover:shadow-md transition-shadow">
                            <div className="p-5 flex flex-col gap-4 flex-grow">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative size-14 rounded-full overflow-hidden bg-[#e7f3f3] dark:bg-[#1A2C2C] flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[#0EBDBD] text-[28px]">pediatrics</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#0d1b1b] dark:text-slate-100 leading-tight group-hover:text-[#13ecec] transition-colors">Consulta Pediátrica</h3>
                                            <p className="text-[#4c9a9a] font-medium text-sm">Dr. Carlos Mendes</p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-300 dark:text-slate-400 hover:text-[#13ecec] cursor-pointer">favorite</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold bg-orange-100 text-orange-800">
                                        Próxima semana
                                    </span>
                                    <span className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-[#2a3a38] text-gray-600">
                                        50 min · Presencial
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-slate-300 line-clamp-2">
                                    Acompanhamento do desenvolvimento infantil, vacinas e tratamento de doenças respiratórias.
                                </p>
                                <div className="mt-auto pt-3 border-t border-dashed border-[#e7f3f3]">
                                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Próxima disponibilidade:</p>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-[#0d1b1b]">
                                        <span className="material-symbols-outlined text-[#13ecec] text-[18px]">calendar_clock</span>
                                        25 Out, 16:00
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-[#f8fcfc] dark:bg-[#10221f] dark:bg-[#10221f] border-t border-[#e7f3f3] dark:border-[#2a3a38] flex gap-3">
                                <button className="flex-1 h-10 rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-gray-50 dark:hover:bg-[#2a3a38] transition-colors">
                                    Ver detalhes
                                </button>
                                <Link to="/agendar" state={{ preselectedService: { id: 3, nome: 'Consulta Pediátrica', especialidade: 'Pediatria', tipo: 'Consulta', tempoMinutos: 50 } }} className="flex flex-1 items-center justify-center h-10 rounded-lg bg-[#13ecec] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-[#13ecec]/90 transition-colors shadow-sm">
                                    Agendar
                                </Link>
                            </div>
                        </article>

                        {/* Card 4: Ortopedia */}
                        <article className="group flex flex-col bg-white dark:bg-[#1c2725] rounded-xl overflow-hidden border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none hover:shadow-md transition-shadow">
                            <div className="p-5 flex flex-col gap-4 flex-grow">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative size-14 rounded-full overflow-hidden bg-[#e7f3f3] dark:bg-[#1A2C2C] flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[#0EBDBD] text-[28px]">orthopedics</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#0d1b1b] dark:text-slate-100 leading-tight group-hover:text-[#13ecec] transition-colors">Consulta Ortopédica</h3>
                                            <p className="text-[#4c9a9a] font-medium text-sm">Dr. Felipe Andrade</p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-300 dark:text-slate-400 hover:text-[#13ecec] cursor-pointer">favorite</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold bg-green-100 text-green-800">
                                        <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                        Agendável
                                    </span>
                                    <span className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-[#2a3a38] text-gray-600">
                                        40 min · Presencial
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-slate-300 line-clamp-2">
                                    Diagnóstico de dores articulares, lesões esportivas e problemas de coluna com tecnologia avançada.
                                </p>
                                <div className="mt-auto pt-3 border-t border-dashed border-[#e7f3f3]">
                                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Próxima disponibilidade:</p>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-[#0d1b1b]">
                                        <span className="material-symbols-outlined text-[#13ecec] text-[18px]">calendar_clock</span>
                                        Hoje, 17:30
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-[#f8fcfc] dark:bg-[#10221f] dark:bg-[#10221f] border-t border-[#e7f3f3] dark:border-[#2a3a38] flex gap-3">
                                <button className="flex-1 h-10 rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-gray-50 dark:hover:bg-[#2a3a38] transition-colors">
                                    Ver detalhes
                                </button>
                                <Link to="/agendar" state={{ preselectedService: { id: 4, nome: 'Consulta Ortopédica', especialidade: 'Ortopedia', tipo: 'Consulta', tempoMinutos: 40 } }} className="flex flex-1 items-center justify-center h-10 rounded-lg bg-[#13ecec] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-[#13ecec]/90 transition-colors shadow-sm">
                                    Agendar
                                </Link>
                            </div>
                        </article>

                        {/* Card 5: Ginecologia */}
                        <article className="group flex flex-col bg-white dark:bg-[#1c2725] rounded-xl overflow-hidden border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none hover:shadow-md transition-shadow">
                            <div className="p-5 flex flex-col gap-4 flex-grow">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative size-14 rounded-full overflow-hidden bg-[#e7f3f3] dark:bg-[#1A2C2C] flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[#0EBDBD] text-[28px]">gynecology</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#0d1b1b] dark:text-slate-100 leading-tight group-hover:text-[#13ecec] transition-colors">Ginecologia e Obstetrícia</h3>
                                            <p className="text-[#4c9a9a] font-medium text-sm">Dra. Mariana Costa</p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-300 dark:text-slate-400 hover:text-[#13ecec] cursor-pointer">favorite</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold bg-purple-100 text-purple-800">
                                        Poucas vagas
                                    </span>
                                    <span className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-[#2a3a38] text-gray-600">
                                        60 min · Presencial
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-slate-300 line-clamp-2">
                                    Consulta especializada em saúde da mulher, acompanhamento pré-natal e prevenção de doenças.
                                </p>
                                <div className="mt-auto pt-3 border-t border-dashed border-[#e7f3f3]">
                                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Próxima disponibilidade:</p>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-[#0d1b1b]">
                                        <span className="material-symbols-outlined text-[#13ecec] text-[18px]">calendar_clock</span>
                                        26 Out, 08:00
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-[#f8fcfc] dark:bg-[#10221f] dark:bg-[#10221f] border-t border-[#e7f3f3] dark:border-[#2a3a38] flex gap-3">
                                <button className="flex-1 h-10 rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-gray-50 dark:hover:bg-[#2a3a38] transition-colors">
                                    Ver detalhes
                                </button>
                                <Link to="/agendar" state={{ preselectedService: { id: 5, nome: 'Consulta Ginecológica', especialidade: 'Ginecologia', tipo: 'Consulta', tempoMinutos: 60 } }} className="flex flex-1 items-center justify-center h-10 rounded-lg bg-[#13ecec] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-[#13ecec]/90 transition-colors shadow-sm">
                                    Agendar
                                </Link>
                            </div>
                        </article>

                        {/* Card 6: Exames */}
                        <article className="group flex flex-col bg-white dark:bg-[#1c2725] rounded-xl overflow-hidden border border-[#e7f3f3] dark:border-[#2a3a38] shadow-sm dark:shadow-none hover:shadow-md transition-shadow">
                            <div className="p-5 flex flex-col gap-4 flex-grow">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative size-14 rounded-full overflow-hidden bg-[#e7f3f3] dark:bg-[#1A2C2C] flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[#0EBDBD] text-[28px]">biotech</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#0d1b1b] dark:text-slate-100 leading-tight group-hover:text-[#13ecec] transition-colors">Exames Laboratoriais</h3>
                                            <p className="text-[#4c9a9a] font-medium text-sm">Laboratório LifeMed</p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-300 dark:text-slate-400 hover:text-[#13ecec] cursor-pointer">favorite</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold bg-green-100 text-green-800">
                                        <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                        Disponível Hoje
                                    </span>
                                    <span className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-[#2a3a38] text-gray-600">
                                        Resultados em 24h
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-slate-300 line-clamp-2">
                                    Hemograma completo, perfil lipídico, glicemia, TSH e mais de 200 tipos de exames com resultados rápidos.
                                </p>
                                <div className="mt-auto pt-3 border-t border-dashed border-[#e7f3f3]">
                                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Próxima disponibilidade:</p>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-[#0d1b1b]">
                                        <span className="material-symbols-outlined text-[#13ecec] text-[18px]">calendar_clock</span>
                                        Hoje, 07:00 - 18:00
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-[#f8fcfc] dark:bg-[#10221f] dark:bg-[#10221f] border-t border-[#e7f3f3] dark:border-[#2a3a38] flex gap-3">
                                <button className="flex-1 h-10 rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-gray-50 dark:hover:bg-[#2a3a38] transition-colors">
                                    Ver detalhes
                                </button>
                                <Link to="/agendar" state={{ preselectedService: { id: 6, nome: 'Exames de Sangue', especialidade: 'Laboratório', tipo: 'Exame', tempoMinutos: 15 } }} className="flex flex-1 items-center justify-center h-10 rounded-lg bg-[#13ecec] text-[#0d1b1b] dark:text-slate-100 text-sm font-bold hover:bg-[#13ecec]/90 transition-colors shadow-sm">
                                    Agendar
                                </Link>
                            </div>
                        </article>
                    </div>

                    {/* CTA Block - Mesmo padrão de Profissionais */}
                    <div className="mt-8 rounded-xl bg-[#1A2C2C] overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#13ecec]/20 rounded-l-full blur-3xl opacity-30 transform translate-x-1/3"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 gap-6">
                            <div className="flex flex-col gap-3 md:max-w-xl">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-full bg-[#13ecec]/20 flex items-center justify-center text-[#13ecec]">
                                        <span className="material-symbols-outlined">help</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">Precisa de ajuda para encontrar o serviço ideal?</h2>
                                </div>
                                <p className="text-gray-300 text-lg">
                                    Nossa equipe de especialistas está pronta para orientar você na escolha do melhor procedimento ou especialidade para sua necessidade.
                                </p>
                            </div>
                            <div className="flex gap-3 shrink-0">
                                <button className="flex min-w-[140px] items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-gray-500 text-white text-sm font-bold hover:bg-white/10 transition-colors">
                                    Ver profissionais
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
