import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { validatePassword } from '../services/auth';

export default function CriarConta() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [error, setError] = useState('');
    const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { register } = useAuth();

    const handlePasswordChange = (value: string) => {
        setPassword(value);
        if (value.length > 0) {
            const validation = validatePassword(value);
            setPasswordErrors(validation.errors);
        } else {
            setPasswordErrors([]);
        }
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validações frontend
        if (!name.trim()) { setError('Informe seu nome completo.'); return; }
        if (!email.trim()) { setError('Informe seu e-mail.'); return; }

        const pwValidation = validatePassword(password);
        if (!pwValidation.isValid) {
            setError('A senha não atende aos requisitos.');
            return;
        }

        if (password !== passwordConfirmation) {
            setError('As senhas não coincidem.');
            return;
        }

        if (!termsAccepted) {
            setError('Você precisa aceitar os termos de uso.');
            return;
        }

        setLoading(true);
        const result = await register(name, email, password, passwordConfirmation);
        setLoading(false);

        if (result.success) {
            navigate('/home');
        } else {
            setError(result.error || 'Erro ao criar conta.');
        }
    };

    return (
        <div className="bg-[#f8f6f6] dark:bg-[#10221f] min-h-screen flex flex-col font-sans transition-colors duration-300">
            <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
                <div className="mb-10 flex flex-col items-center gap-3">
                    <div className="flex items-center gap-3 text-[var(--color-primary)]">
                        <div className="w-10 h-10 flex items-center justify-center bg-[var(--color-primary)]/10 rounded-xl">
                            <svg className="w-7 h-7" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_6_330)">
                                    <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_6_330"><rect fill="white" height="48" width="48"></rect></clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">ClinicOps</h1>
                    </div>
                </div>

                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Criar Conta</h2>
                        <p className="text-slate-500 text-sm">Preencha os dados abaixo para começar</p>
                    </div>

                    <form className="space-y-5" onSubmit={handleRegister}>
                        {error && (
                            <div className="bg-red-50 dark:bg-red-900/20 text-red-500 p-3 rounded-xl text-sm text-center font-medium">
                                {error}
                            </div>
                        )}

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Nome completo</label>
                            <input
                                className="w-full px-4 py-3.5 bg-white dark:bg-[#1c2725] border border-slate-200 dark:border-[#2a3a38] rounded-xl focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] outline-none transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                                placeholder="Como devemos te chamar?"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={loading}
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">E-mail</label>
                            <input
                                className="w-full px-4 py-3.5 bg-white dark:bg-[#1c2725] border border-slate-200 dark:border-[#2a3a38] rounded-xl focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] outline-none transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                                placeholder="seu@email.com"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Senha</label>
                            <input
                                className="w-full px-4 py-3.5 bg-white dark:bg-[#1c2725] border border-slate-200 dark:border-[#2a3a38] rounded-xl focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] outline-none transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                                placeholder="Mínimo 8 caracteres"
                                type="password"
                                value={password}
                                onChange={(e) => handlePasswordChange(e.target.value)}
                                disabled={loading}
                            />
                            {/* Indicadores de força da senha */}
                            {password.length > 0 && (
                                <div className="mt-2 space-y-1 px-1">
                                    {[
                                        { label: 'Mínimo 8 caracteres', ok: password.length >= 8 },
                                        { label: 'Letra maiúscula', ok: /[A-Z]/.test(password) },
                                        { label: 'Letra minúscula', ok: /[a-z]/.test(password) },
                                        { label: 'Número', ok: /[0-9]/.test(password) },
                                        { label: 'Caractere especial (!@#$...)', ok: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password) },
                                    ].map((rule) => (
                                        <div key={rule.label} className="flex items-center gap-2 text-xs">
                                            <span className={`material-symbols-outlined text-[14px] ${rule.ok ? 'text-green-500' : 'text-slate-300 dark:text-slate-600'}`}>
                                                {rule.ok ? 'check_circle' : 'radio_button_unchecked'}
                                            </span>
                                            <span className={rule.ok ? 'text-green-600 dark:text-green-400' : 'text-slate-400'}>{rule.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Confirmação de Senha</label>
                            <input
                                className="w-full px-4 py-3.5 bg-white dark:bg-[#1c2725] border border-slate-200 dark:border-[#2a3a38] rounded-xl focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] outline-none transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                                placeholder="Repita sua senha"
                                type="password"
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                disabled={loading}
                            />
                            {passwordConfirmation.length > 0 && password !== passwordConfirmation && (
                                <p className="text-xs text-red-500 mt-1 ml-1 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">error</span>
                                    As senhas não coincidem
                                </p>
                            )}
                        </div>

                        <div className="flex items-start gap-3 py-2">
                            <div className="flex items-center h-5">
                                <input
                                    className="w-5 h-5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/50 cursor-pointer bg-white"
                                    id="terms"
                                    type="checkbox"
                                    checked={termsAccepted}
                                    onChange={(e) => setTermsAccepted(e.target.checked)}
                                    disabled={loading}
                                />
                            </div>
                            <label className="text-sm text-slate-600 dark:text-slate-400 leading-snug cursor-pointer select-none" htmlFor="terms">
                                Li e aceito os <a className="text-[var(--color-primary)] hover:underline font-medium" href="#">termos de uso</a> e <a className="text-[var(--color-primary)] hover:underline font-medium" href="#">políticas de privacidade</a>.
                            </label>
                        </div>

                        <button
                            className="w-full bg-[var(--color-primary)] hover:bg-[#10d1d1] font-bold py-4 rounded-xl shadow-lg shadow-[var(--color-primary)]/20 transition-all active:scale-[0.98] mt-4 text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            type="submit"
                            disabled={loading || passwordErrors.length > 0 || !termsAccepted || password !== passwordConfirmation}
                        >
                            {loading ? (
                                <>
                                    <div className="size-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                                    Criando conta...
                                </>
                            ) : 'Criar conta'}
                        </button>

                        <div className="pt-6 text-center">
                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                Já tem uma conta?
                                <Link className="text-[var(--color-primary)] font-bold hover:underline ml-1" to="/login">Entrar agora</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </main>

            <footer className="py-8 text-center mt-auto">
                <div className="inline-flex items-center gap-2 opacity-30">
                    <div className="h-px w-8 bg-slate-400"></div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Gerenciamento Clínico Inteligente</span>
                    <div className="h-px w-8 bg-slate-400"></div>
                </div>
            </footer>
        </div>
    );
}
