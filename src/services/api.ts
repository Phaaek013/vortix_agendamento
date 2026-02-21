// ── LifeMed API Service ──────────────────────────────────────
// Camada base de comunicação com o backend Laravel Sanctum.
// Todas as requisições passam por aqui para injetar token e tratar erros.

const BASE_URL = 'http://teste.app.local:8000';

// ── Tipos ──
export interface ApiError {
    message: string;
    errors?: Record<string, string[]>;
    status: number;
}

// ── Helpers de Token ──
export function getToken(): string | null {
    return localStorage.getItem('auth_token');
}

export function setToken(token: string): void {
    localStorage.setItem('auth_token', token);
}

export function clearToken(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
}

export function getStoredUser() {
    const data = localStorage.getItem('user_data');
    return data ? JSON.parse(data) : null;
}

export function setStoredUser(user: Record<string, unknown>): void {
    localStorage.setItem('user_data', JSON.stringify(user));
}

// ── Requisição genérica ──
export async function apiRequest<T = unknown>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const token = getToken();

    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(options.headers as Record<string, string> || {}),
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers,
    });

    // Token expirado/inválido → limpa e redireciona
    if (response.status === 401) {
        clearToken();
        // Redireciona para login se não estiver já na página de login
        if (!window.location.pathname.includes('/login')) {
            window.location.href = '/login';
        }
        const error: ApiError = {
            message: 'Sessão expirada. Faça login novamente.',
            status: 401,
        };
        throw error;
    }

    // Erro de permissão
    if (response.status === 403) {
        const data = await response.json().catch(() => ({}));
        const error: ApiError = {
            message: data.message || 'Você não tem permissão para esta ação.',
            status: 403,
        };
        throw error;
    }

    // Erro de validação
    if (response.status === 422) {
        const data = await response.json();
        const error: ApiError = {
            message: data.message || 'Dados inválidos.',
            errors: data.errors,
            status: 422,
        };
        throw error;
    }

    // Erro interno do servidor
    if (response.status >= 500) {
        const error: ApiError = {
            message: 'Erro interno do servidor. Tente novamente mais tarde.',
            status: response.status,
        };
        throw error;
    }

    // Outros erros
    if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        const error: ApiError = {
            message: data.message || `Erro na requisição (${response.status})`,
            status: response.status,
        };
        throw error;
    }

    // Sucesso
    return response.json() as Promise<T>;
}
