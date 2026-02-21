// ── LifeMed Auth Context ─────────────────────────────────────
// Estado global de autenticação. Wrapa toda a aplicação.

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { login as loginService, register as registerService, logout as logoutService, type UserData } from '../services/auth';
import { getToken, getStoredUser } from '../services/api';

// ── Tipos ──
interface AuthContextType {
    user: UserData | null;
    isAuthenticated: boolean;
    loading: boolean;
    login: (email: string, password: string) => Promise<{ success: boolean; error?: string; fieldErrors?: Record<string, string[]> }>;
    register: (name: string, email: string, password: string, passwordConfirmation: string) => Promise<{ success: boolean; error?: string; fieldErrors?: Record<string, string[]> }>;
    logout: () => Promise<void>;
    hasRole: (role: string) => boolean;
    hasPermission: (permission: string) => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

// ── Hook de uso ──
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um <AuthProvider>');
    }
    return context;
}

// ── Provider ──
export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);

    // Restaura sessão ao montar
    useEffect(() => {
        const token = getToken();
        const storedUser = getStoredUser();
        if (token && storedUser) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setUser(storedUser as UserData);
        }
        setLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        const result = await loginService(email, password);
        if (result.success) {
            setUser(result.user);
            return { success: true };
        }
        return { success: false, error: result.error, fieldErrors: result.fieldErrors };
    };

    const register = async (name: string, email: string, password: string, passwordConfirmation: string) => {
        const result = await registerService(name, email, password, passwordConfirmation);
        if (result.success) {
            setUser(result.user);
            return { success: true };
        }
        return { success: false, error: result.error, fieldErrors: result.fieldErrors };
    };

    const logout = async () => {
        await logoutService();
        setUser(null);
    };

    const hasRole = (role: string) => user?.roles?.includes(role) ?? false;
    const hasPermission = (permission: string) => user?.permissions?.includes(permission) ?? false;

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: !!user,
            loading,
            login,
            register,
            logout,
            hasRole,
            hasPermission,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

// ── Protected Route Component ──
import { useNavigate } from 'react-router-dom';
export function ProtectedRoute({ children }: { children: ReactNode }) {
    const { isAuthenticated, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            navigate('/login', { replace: true });
        }
    }, [loading, isAuthenticated, navigate]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f6f8f8] dark:bg-[#10221f]">
                <div className="flex flex-col items-center gap-3">
                    <div className="size-10 border-3 border-[#13ecec] border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm text-[#4c9a9a] font-medium">Carregando...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) return null;

    return <>{children}</>;
}
