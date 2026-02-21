import ThemeToggle from '../ThemeToggle';

interface TopbarAdminProps {
    /** Whether to show the date controls (Dashboard style) */
    showDateControls?: boolean;
    /** Whether to show the professional filter */
    showProFilter?: boolean;
    /** Whether to show the room filter */
    showRoomFilter?: boolean;
}

export default function TopbarAdmin({ showDateControls = false, showProFilter = false, showRoomFilter = false }: TopbarAdminProps) {
    return (
        <header className="h-16 bg-white dark:bg-[#1c2725] border-b border-[#e7f3f3] dark:border-[#2a3a38] dark:border-[#111817] flex items-center justify-between px-6 shrink-0 z-10">
            {/* Mobile Menu Toggle */}
            <button className="lg:hidden mr-4 text-[#0d1b1b] dark:text-slate-100">
                <span className="material-symbols-outlined">menu</span>
            </button>

            {/* Left: Optional Date Controls */}
            <div className="flex items-center gap-6">
                {showDateControls && (
                    <>
                        <div className="h-6 w-px bg-gray-200 dark:bg-slate-600 hidden md:block"></div>
                        <div className="flex items-center gap-2 bg-[#f6f8f8] dark:bg-[#10221f] p-1 rounded-lg border border-gray-200 dark:border-[#2a3a38] dark:border-slate-700">
                            <button className="px-3 py-1 bg-white dark:bg-[#1c2725] shadow-sm dark:shadow-none rounded border border-gray-100 dark:border-[#2a3a38] text-xs font-semibold text-[#0d1b1b] dark:text-slate-100 hover:bg-gray-50 dark:hover:bg-[#2a3a38] transition-colors">Hoje</button>
                            <div className="flex items-center gap-2 px-2">
                                <span className="material-symbols-outlined text-[#4c9a9a] dark:text-slate-400 text-[18px]">calendar_today</span>
                                <span className="text-sm font-medium text-[#0d1b1b] dark:text-slate-100">14 Out, 2023</span>
                                <span className="material-symbols-outlined text-[#4c9a9a] dark:text-slate-400 text-[16px]">expand_more</span>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4 flex-1 justify-end">
                {/* Pro Filter (optional) */}
                {showProFilter && (
                    <div className="hidden md:flex items-center gap-2 max-w-[200px] w-full">
                        <div className="relative w-full group">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#4c9a9a] dark:text-slate-400 text-[20px]">stethoscope</span>
                            <select className="w-full bg-[#f6f8f8] dark:bg-[#10221f] border-none rounded-lg py-2 pl-10 pr-8 text-sm font-medium text-[#0d1b1b] dark:text-slate-100 focus:ring-1 focus:ring-[#13ecec] cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2a3a38] dark:bg-[#2a3a38] dark:hover:bg-slate-700 transition-colors outline-none">
                                <option>Todos Profissionais</option>
                                <option>Dr. Roberto Silva</option>
                                <option>Dra. Ana Costa</option>
                            </select>
                        </div>
                    </div>
                )}

                {/* Room Filter (optional) */}
                {showRoomFilter && (
                    <div className="hidden md:flex items-center gap-2 max-w-[140px] w-full">
                        <div className="relative w-full group">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#4c9a9a] dark:text-slate-400 text-[20px]">meeting_room</span>
                            <select className="w-full bg-[#f6f8f8] dark:bg-[#10221f] border-none rounded-lg py-2 pl-10 pr-8 text-sm font-medium text-[#0d1b1b] dark:text-slate-100 focus:ring-1 focus:ring-[#13ecec] cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2a3a38] dark:bg-[#2a3a38] dark:hover:bg-slate-700 transition-colors outline-none">
                                <option>Todas Salas</option>
                                <option>Sala 01</option>
                                <option>Sala 02</option>
                            </select>
                        </div>
                    </div>
                )}

                {/* Patient Search */}
                <div className="relative w-full max-w-[240px] hidden sm:block">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#4c9a9a] dark:text-slate-400 text-[20px]">search</span>
                    <input className="w-full bg-[#f6f8f8] dark:bg-[#10221f] border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-[#13ecec] placeholder-[#4c9a9a]/70 dark:placeholder-slate-500 outline-none" placeholder="Buscar paciente..." type="text" />
                </div>

                {/* Theme Toggle */}
                <ThemeToggle />

                {/* Notifications */}
                <button className="relative p-2 text-[#4c9a9a] dark:text-slate-400 hover:text-[#0d1b1b] dark:hover:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#2a3a38] dark:border-[#1c2725]"></span>
                </button>

                {/* Chat */}
                <button className="p-2 text-[#4c9a9a] dark:text-slate-400 hover:text-[#0d1b1b] dark:hover:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors">
                    <span className="material-symbols-outlined">chat</span>
                </button>

                {/* User Profile */}
                <div className="flex items-center gap-3 pl-2 border-l border-gray-200 dark:border-slate-700 ml-2">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-bold text-[#0d1b1b] dark:text-slate-100 leading-none">Admin</p>
                        <p className="text-xs text-[#4c9a9a] dark:text-slate-400 leading-none mt-1">Gestor</p>
                    </div>
                    <button className="size-9 rounded-full bg-gray-200 dark:bg-[#2a3a38] bg-cover bg-center border-2 border-white dark:border-slate-700 shadow-sm dark:shadow-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCyTV1ZS7vrftEiN_aeKyZ1WqVD1QzdXok6eImDBuY-T0ntRfIiyWz48_02gk6Wc8JKKRJ8pAPlJvuE4hYlJ8RCZUBcAb0CukyX4wOMlBZTVu_hhWH684orIetc-_uO6QGWItu7Cad7UF_lbmQyz5186L8I-mOr2psMC0Xd-kJAc5oe3_0_9zTQZg8jrD4nkPuz-YUxHoLjm55oEL7_zCnfFRpN6NRmHjR5jj_FjTk7FPHnxgO31UZQ8Q2yYYN5TlSMzUl5_WWndW7_')" }}></button>
                </div>
            </div>
        </header>
    );
}
