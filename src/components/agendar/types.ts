export type AgendamentoData = {
    servico: { nome: string; duracao: string; tipo: string } | null;
    profissional: { nome: string; especialidade: string; crm: string; avatar: string } | null;
    data: string | null;
    horario: string | null;
    local: string;
    valor: string;
};
