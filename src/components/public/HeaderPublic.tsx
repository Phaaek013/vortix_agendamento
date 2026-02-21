import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ThemeToggle from '../ThemeToggle';

export default function HeaderPublic() {
    // Initialize correctly to avoid blinking
    const [isLogged, setIsLogged] = useState(() => localStorage.getItem('userRole') === 'paciente');
    const navigate = useNavigate();

    useEffect(() => {
        const role = localStorage.getItem('userRole');
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsLogged(role === 'paciente');
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userRole');
        setIsLogged(false);
        navigate('/login');
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-[#2a3a38] dark:border-gray-800 bg-[#ffffff] dark:bg-[#10221f]/90 dark:bg-[#102222]/90 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo - Clicável para /home */}
                <Link to="/home" className="flex items-center gap-3 cursor-pointer">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#13ecec]/20 text-[#0ebaba]">
                        <span className="material-symbols-outlined text-[28px]">medical_services</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-[#0d1b1b] dark:text-white">LifeMed ClinicOps</span>
                </Link>

                {/* Nav Links - Início aponta para /home */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link className="text-sm font-semibold text-[#0d1b1b] dark:text-gray-200 transition hover:text-[#0ebaba] dark:hover:text-[#13ecec]" to="/home">Início</Link>
                    <Link className="text-sm font-semibold text-[#0d1b1b] dark:text-gray-200 transition hover:text-[#0ebaba] dark:hover:text-[#13ecec]" to="/servicos">Serviços</Link>
                    <Link className="text-sm font-semibold text-[#0d1b1b] dark:text-gray-200 transition hover:text-[#0ebaba] dark:hover:text-[#13ecec]" to="/profissionais">Profissionais</Link>
                    <Link className="text-sm font-semibold text-[#0d1b1b] dark:text-gray-200 transition hover:text-[#0ebaba] dark:hover:text-[#13ecec]" to="/agendar">Agendar</Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    {!isLogged ? (
                        <>
                            <Link to="/login" className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-[#0d1b1b] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-[#2a3a38] dark:bg-[#1A2C2C] dark:hover:bg-gray-800 md:block">
                                Entrar
                            </Link>
                            <Link to="/criar-conta" className="flex items-center justify-center gap-2 rounded-lg bg-[#13ecec] px-5 py-2.5 text-sm font-bold text-[#0d1b1b] dark:text-slate-100 transition hover:bg-[#0ebaba] hover:shadow-lg hover:shadow-[#13ecec]/20">
                                <span>Criar Conta</span>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/perfil" className="flex items-center justify-center gap-2 rounded-lg bg-[#13ecec] px-5 py-2.5 text-sm font-bold text-[#0d1b1b] dark:text-slate-100 transition hover:bg-[#0ebaba] hover:shadow-lg hover:shadow-[#13ecec]/20">
                                <span className="material-symbols-outlined text-[18px]">person</span>
                                <span>Minha Conta</span>
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 dark:border-[#2a3a38] dark:border-gray-700 bg-white dark:bg-[#1c2725] dark:bg-[#1A2C2C] px-5 py-2.5 text-sm font-bold text-[#0d1b1b] dark:text-white transition hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                <span>Sair</span>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
