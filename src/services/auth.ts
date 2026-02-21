// ── LifeMed Auth Service ─────────────────────────────────────
// Login, Registro e Logout usando Laravel Sanctum.

import { apiRequest, setToken, setStoredUser, clearToken, type ApiError } from './api';

// ── Tipos ──
export interface UserData {
    id?: number;
    name: string;
    email: string;
    roles: string[];
    permissions?: string[];
    profile_complete?: boolean;
}

interface LoginResponse {
    token: string;
    user: UserData;
}

interface RegisterResponse {
    message: string;
    token: string;
    user: UserData;
}

// ── Login ──
export async function login(email: string, password: string): Promise<{ success: true; user: UserData } | { success: false; error: string; fieldErrors?: Record<string, string[]> }> {
    try {
        const data = await apiRequest<LoginResponse>('/api/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                device_name: 'LifeMed Web',
            }),
        });

        setToken(data.token);
        setStoredUser(data.user as unknown as Record<string, unknown>);

        return { success: true, user: data.user };
    } catch (err) {
        const apiErr = err as ApiError;
        const firstFieldError = apiErr.errors
            ? Object.values(apiErr.errors).flat()[0]
            : undefined;

        return {
            success: false,
            error: firstFieldError || apiErr.message || 'Erro ao fazer login.',
            fieldErrors: apiErr.errors,
        };
    }
}

// ── Registro de Paciente ──
export async function register(
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string,
    termsAccepted: boolean = true
): Promise<{ success: true; user: UserData } | { success: false; error: string; fieldErrors?: Record<string, string[]> }> {
    try {
        const data = await apiRequest<RegisterResponse>('/api/register', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                password,
                password_confirmation: passwordConfirmation,
                device_name: 'LifeMed Web',
                terms_accepted: termsAccepted,
            }),
        });

        setToken(data.token);
        setStoredUser(data.user as unknown as Record<string, unknown>);

        return { success: true, user: data.user };
    } catch (err) {
        const apiErr = err as ApiError;
        const firstFieldError = apiErr.errors
            ? Object.values(apiErr.errors).flat()[0]
            : undefined;

        return {
            success: false,
            error: firstFieldError || apiErr.message || 'Erro ao criar conta.',
            fieldErrors: apiErr.errors,
        };
    }
}

// ── Logout ──
export async function logout(): Promise<void> {
    try {
        await apiRequest('/api/logout', { method: 'POST' });
    } catch {
        // Mesmo com erro na API, limpa o lado local
    } finally {
        clearToken();
    }
}

// ── Validação de Senha (frontend) ──
export function validatePassword(password: string): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (password.length < 8) errors.push('Mínimo de 8 caracteres');
    if (!/[A-Z]/.test(password)) errors.push('Pelo menos uma letra maiúscula');
    if (!/[a-z]/.test(password)) errors.push('Pelo menos uma letra minúscula');
    if (!/[0-9]/.test(password)) errors.push('Pelo menos um número');
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) errors.push('Pelo menos um caractere especial');

    return { isValid: errors.length === 0, errors };
}
