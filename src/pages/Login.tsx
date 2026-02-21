import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    // ── Modo Demo (remover quando o backend estiver pronto) ──
    const handleDemoLogin = () => {
        const demoUser = {
            id: 0,
            name: 'Admin Demo',
            email: 'demo@clinicops.com',
            roles: ['admin'],
            permissions: ['agreements.view', 'agreements.create', 'agreements.edit', 'agreements.delete'],
        };
        localStorage.setItem('auth_token', 'demo-token');
        localStorage.setItem('user_data', JSON.stringify(demoUser));
        window.location.href = '/dashboard';
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Preencha e-mail e senha.');
            return;
        }

        setLoading(true);
        const result = await login(email, password);
        setLoading(false);

        if (result.success) {
            // Redireciona baseado no role retornado pela API
            // Roles admin/gerente/colaborador → dashboard; paciente → home
            const userData = JSON.parse(localStorage.getItem('user_data') || '{}');
            const roles: string[] = userData.roles || [];

            if (roles.some(r => ['admin', 'gerente', 'colaborador', 'medico'].includes(r))) {
                navigate('/dashboard');
            } else {
                navigate('/home');
            }
        } else {
            setError(result.error || 'Credenciais inválidas.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-[#1A2C2C]">
            <main className="w-full max-w-md">
                <section className="bg-white dark:bg-[#1c2725] rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05),0_2px_10px_-2px_rgba(0,0,0,0.03)] p-8 md:p-10">
                    <header className="text-center mb-8">
                        <div className="flex justify-center mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white font-extrabold text-xl">V</div>
                                <span className="text-2xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">Clinic<span className="text-slate-500">Ops</span></span>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Entrar no Portal</h1>
                        <p className="text-sm text-slate-500">Acesse sua conta para continuar.</p>
                    </header>

                    <form onSubmit={handleLogin} className="space-y-5">
                        {error && (
                            <div className="bg-red-50 dark:bg-red-900/20 text-red-500 p-3 rounded-lg text-sm text-center font-medium">
                                {error}
                            </div>
                        )}
                        <div className="space-y-1.5">
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="email">E-mail</label>
                            <input
                                className="block w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-[#2a3a38] dark:bg-[#10221f] dark:text-slate-100 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] transition-colors text-slate-900"
                                id="email"
                                name="email"
                                placeholder="seu@email.com"
                                required
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="password">Senha</label>
                            <div className="relative">
                                <input
                                    className="block w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-[#2a3a38] dark:bg-[#10221f] dark:text-slate-100 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] transition-colors text-slate-900"
                                    id="password"
                                    name="password"
                                    placeholder="••••••••"
                                    required
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    disabled={loading}
                                />
                                <button
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        {showPassword ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        ) : (
                                            <>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644C3.399 8.049 7.21 5 12 5c4.789 0 8.601 3.049 9.964 7.322a1.012 1.012 0 010 .644C20.601 15.95 16.79 19 12 19c-4.79 0-8.399-3.049-9.964-7.322z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </>
                                        )}
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-1">
                            <div className="flex items-center">
                                <input className="h-4 w-4 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]" id="remember-me" name="remember-me" type="checkbox" />
                                <label className="ml-2 block text-sm text-slate-600 dark:text-slate-400" htmlFor="remember-me">
                                    Manter conectado
                                </label>
                            </div>
                            <div className="text-sm">
                                <Link className="font-medium text-slate-600 dark:text-slate-400 hover:text-[var(--color-primary)] transition-colors" to="/esqueci-senha">
                                    Esqueci minha senha
                                </Link>
                            </div>
                        </div>

                        <button
                            className="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent rounded-lg shadow-sm dark:shadow-none text-base font-bold text-slate-900 bg-[var(--color-primary)] hover:bg-[#10d1d1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] transition-all uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <div className="size-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                                    Entrando...
                                </>
                            ) : 'Entrar'}
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
                        Não tem uma conta? <Link to="/criar-conta" className="font-semibold text-[var(--color-primary)] hover:text-[#10d1d1]">Crie uma agora</Link>
                    </div>

                    {/* Modo Demo — remover quando backend estiver pronto */}
                    <div className="mt-4 flex gap-2">
                        <button
                            onClick={handleDemoLogin}
                            className="flex-1 py-2.5 border-2 border-dashed border-slate-200 dark:border-[#2a3a38] rounded-lg text-xs font-medium text-slate-400 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all"
                        >
                            🏥 Demo LifeMed
                        </button>
                        <button
                            onClick={() => {
                                const demoPatient = {
                                    id: 0,
                                    name: 'Paciente Demo',
                                    email: 'paciente@demo.com',
                                    roles: ['paciente'],
                                    permissions: [],
                                };
                                localStorage.setItem('auth_token', 'demo-token-paciente');
                                localStorage.setItem('user_data', JSON.stringify(demoPatient));
                                window.location.href = '/home';
                            }}
                            className="flex-1 py-2.5 border-2 border-dashed border-slate-200 dark:border-[#2a3a38] rounded-lg text-xs font-medium text-slate-400 hover:text-emerald-500 hover:border-emerald-400 transition-all"
                        >
                            👤 Demo Paciente
                        </button>
                    </div>

                    <footer className="mt-8 pt-6 border-t border-slate-100 dark:border-[#2a3a38] text-center">
                        <div className="inline-flex items-center text-xs font-medium text-slate-400 border border-slate-200 dark:border-[#2a3a38] px-3 py-1.5 rounded-full uppercase tracking-widest">
                            <svg className="h-4 w-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                            Acesso seguro e auditado
                        </div>
                    </footer>
                </section>

                <div className="mt-8 text-center">
                    <p className="text-xs text-slate-400">
                        © 2024 Vortix Technologies. Todos os direitos reservados.
                    </p>
                </div>
            </main>
        </div>
    );
}
