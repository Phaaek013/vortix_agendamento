import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

type SidebarProps = {
    isPatientView?: boolean;
};

export default function Sidebar({ isPatientView = false }: SidebarProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const menuOptions = [
        { name: "Dashboard", icon: "dashboard", to: "/dashboard" },
        { name: "Agenda", icon: "calendar_month", to: "/agenda" },
        { name: "Novo Agendamento", icon: "add_circle", to: "/novo-agendamento" },
        { name: "Pacientes", icon: "group", to: "/pacientes" },
        { name: "Lista de espera", icon: "hourglass_top", to: "/lista-espera" },
        { name: "Regras da agenda", icon: "rule", to: "/regras-agenda" },
        { name: "Fila de atendimento", icon: "queue_music", to: "/fila-atendimento" },
    ];

    const isCurrentRoute = (path: string) => {
        if (path === '#') return false;
        return location.pathname === path;
    };

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <aside className="w-64 bg-white dark:bg-[#1c2725] border-r border-[#e7f3f3] dark:border-[#2a3a38] flex flex-col justify-between h-full shrink-0 z-20 hidden lg:flex">
            <div className="flex flex-col h-full">
                {/* Header Logo */}
                <div className="p-6 pb-2">
                    <Link to="/dashboard" className="flex items-center gap-3 mb-8 cursor-pointer">
                        <div className="bg-[#13ecec]/20 flex items-center justify-center rounded-lg size-10 text-[#0EBDBD]">
                            <span className="material-symbols-outlined">local_hospital</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-[#0d1b1b] dark:text-slate-100 text-lg font-bold leading-tight">LifeMed</h1>
                            <p className="text-[#4c9a9a] dark:text-slate-400 text-xs font-medium uppercase tracking-wide">ClinicOps</p>
                        </div>
                    </Link>

                    {/* Nav Items */}
                    <nav className="flex flex-col gap-1">
                        {menuOptions.map((item) => {
                            const active = isPatientView ? (item.to === '/pacientes') : isCurrentRoute(item.to);
                            return (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${active
                                        ? 'bg-[#13ecec]/10 border-l-4 border-[#13ecec] text-[#0d1b1b] dark:text-[#13ecec]'
                                        : 'text-[#4c9a9a] dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-[#2a3a38] hover:text-[#0d1b1b] dark:hover:text-slate-100'
                                        }`}
                                >
                                    <span
                                        className={`material-symbols-outlined ${active ? 'text-[#0EBDBD]' : ''}`}
                                        style={active ? { fontVariationSettings: "'FILL' 1" } : {}}
                                    >
                                        {item.icon}
                                    </span>
                                    <span className="text-sm font-semibold">{item.name}</span>
                                </Link>
                            );
                        })}

                        <div className="my-2 border-t border-gray-100 dark:border-[#2a3a38]"></div>

                        <Link to="/relatorios" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#4c9a9a] dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-[#2a3a38] hover:text-[#0d1b1b] dark:hover:text-slate-100 transition-colors group">
                            <span className="material-symbols-outlined">assessment</span>
                            <span className="text-sm font-semibold">Relatórios</span>
                        </Link>
                    </nav>
                </div>

                {/* Footer Admin Panel */}
                <div className="mt-auto p-4 border-t border-[#e7f3f3] dark:border-[#2a3a38]">
                    <div className="flex items-center gap-3 px-3 py-2 mb-2">
                        <span className="material-symbols-outlined text-[#4c9a9a] dark:text-slate-400">admin_panel_settings</span>
                        <div className="flex flex-col">
                            <span className="text-[#0d1b1b] dark:text-slate-100 text-sm font-medium truncate max-w-[140px]">
                                {user?.name || 'Painel Admin'}
                            </span>
                            <span className="text-[10px] text-[#4c9a9a] dark:text-slate-400 bg-gray-100 dark:bg-[#10221f] px-1.5 py-0.5 rounded w-fit uppercase font-semibold">
                                {user?.roles?.[0] || 'ADMINISTRADOR'}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors group cursor-pointer"
                    >
                        <span className="material-symbols-outlined">logout</span>
                        <span className="text-sm font-semibold">Sair</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}
