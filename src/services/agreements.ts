// ── LifeMed Agreements (Convênios) Service ───────────────────
// CRUD de convênios usando a API do backend.

import { apiRequest } from './api';

// ── Tipos ──
export interface Agreement {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

interface CreateAgreementResponse {
    message: string;
    data: Agreement;
}

interface DeleteAgreementResponse {
    message: string;
}

// ── Listar todos os convênios ativos ──
export async function fetchAgreements(): Promise<Agreement[]> {
    return apiRequest<Agreement[]>('/api/agreements');
}

// ── Criar novo convênio ──
export async function createAgreement(name: string): Promise<CreateAgreementResponse> {
    return apiRequest<CreateAgreementResponse>('/api/agreements', {
        method: 'POST',
        body: JSON.stringify({ name }),
    });
}

// ── Deletar convênio (soft delete) ──
export async function deleteAgreement(id: number): Promise<DeleteAgreementResponse> {
    return apiRequest<DeleteAgreementResponse>(`/api/agreements/${id}`, {
        method: 'DELETE',
    });
}
