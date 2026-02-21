import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderPublic from '../components/public/HeaderPublic';
import FooterPublic from '../components/public/FooterPublic';

export default function PerfilPaciente() {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="flex min-h-screen w-full flex-col bg-[#f8fcfc] dark:bg-[#10221f] font-display text-[#0d1b1b] dark:text-slate-100 transition-colors duration-200">
            {/* Header */}
            <HeaderPublic />

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center w-full px-4 md:px-10 py-8">
                <div className="w-full max-w-[900px] flex flex-col gap-6">
                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap gap-2 px-1">
                        <Link className="text-[#4c9a9a] dark:text-slate-400 hover:underline text-sm font-medium" to="/home">Início</Link>
                        <span className="text-[#4c9a9a] text-sm font-medium">/</span>
                        <span className="text-[#0d1b1b] dark:text-slate-200 text-sm font-medium">Meu Perfil</span>
                    </div>

                    {/* Page Heading & Actions */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#e7f3f3] dark:border-[#2a3a38]">
                        <div className="flex flex-col gap-2 max-w-2xl">
                            <h1 className="text-[#0d1b1b] dark:text-white text-3xl md:text-4xl font-black tracking-tight">Meu Perfil</h1>
                            <p className="text-[#4c9a9a] dark:text-slate-400 text-base md:text-lg">Gerencie suas informações pessoais e dados de contato.</p>
                        </div>

                        {!isEditing ? (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="flex shrink-0 cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-[#e7f3f3] dark:bg-[#1A2C2C] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-[#0d1b1b] dark:text-slate-200 font-bold"
                            >
                                <span className="material-symbols-outlined mr-2 text-[18px]">edit</span>
                                Editar Dados
                            </button>
                        ) : (
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className="flex shrink-0 cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-transparent border border-[#cfe7e7] dark:border-[#2a3a38] hover:bg-[#e7f3f3] dark:hover:bg-[#1A2C2C] transition-colors text-[#4c9a9a] dark:text-slate-300 font-bold"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className="flex shrink-0 cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-[#13ecec] hover:bg-[#0ebaba] transition-colors text-[#0d1b1b] font-bold shadow-sm"
                                >
                                    <span className="material-symbols-outlined mr-2 text-[18px]">save</span>
                                    Salvar Alterações
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Sidebar/Resumo Perfil */}
                        <div className="lg:col-span-1 flex flex-col gap-6">
                            <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#cfe7e7] dark:border-[#2a3a38] p-6 flex flex-col items-center shadow-sm">
                                <div className="relative mb-4">
                                    <div className="h-24 w-24 rounded-full bg-[#13ecec]/20 flex items-center justify-center text-[#13ecec] text-4xl overflow-hidden">
                                        <img src="https://ui-avatars.com/api/?name=João+Silva&background=13ecec&color=0d1b1b&size=128" alt="Avatar" className="h-full w-full object-cover" />
                                    </div>
                                    {isEditing && (
                                        <button className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-[#13ecec] text-[#0d1b1b] flex items-center justify-center border-2 border-white dark:border-[#1c2725] hover:bg-[#0ebaba] transition-colors">
                                            <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                                        </button>
                                    )}
                                </div>
                                <h2 className="text-xl font-bold text-[#0d1b1b] dark:text-white text-center">João da Silva</h2>
                                <p className="text-[#4c9a9a] dark:text-slate-400 text-sm text-center">Paciente desde Nov 2025</p>
                            </div>
                        </div>

                        {/* Formulário Dados Principais */}
                        <div className="lg:col-span-2 flex flex-col gap-6">

                            {/* Dados Pessoais */}
                            <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#cfe7e7] dark:border-[#2a3a38] p-6 md:p-8 flex flex-col gap-6 shadow-sm">
                                <h3 className="text-lg font-bold text-[#0d1b1b] dark:text-white border-b border-[#e7f3f3] dark:border-[#2a3a38] pb-4">Dados Pessoais</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-bold text-[#0d1b1b] dark:text-slate-300">Nome Completo</label>
                                        <input
                                            type="text"
                                            defaultValue="João da Silva"
                                            disabled={!isEditing}
                                            className="w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#1A2C2C] px-4 py-2.5 text-[#0d1b1b] dark:text-white disabled:opacity-70 disabled:bg-gray-50 dark:disabled:bg-[#10221f]/50 outline-none focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-bold text-[#0d1b1b] dark:text-slate-300">CPF</label>
                                        <input
                                            type="text"
                                            defaultValue="123.456.789-00"
                                            disabled={!isEditing}
                                            className="w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#1A2C2C] px-4 py-2.5 text-[#0d1b1b] dark:text-white disabled:opacity-70 disabled:bg-gray-50 dark:disabled:bg-[#10221f]/50 outline-none focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-bold text-[#0d1b1b] dark:text-slate-300">Data de Nascimento</label>
                                        <input
                                            type="date"
                                            defaultValue="1985-10-15"
                                            disabled={!isEditing}
                                            className="w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#1A2C2C] px-4 py-2.5 text-[#0d1b1b] dark:text-white disabled:opacity-70 disabled:bg-gray-50 dark:disabled:bg-[#10221f]/50 outline-none focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-bold text-[#0d1b1b] dark:text-slate-300">Sexo</label>
                                        <select
                                            defaultValue="M"
                                            disabled={!isEditing}
                                            className="w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#1A2C2C] px-4 py-2.5 text-[#0d1b1b] dark:text-white disabled:opacity-70 disabled:bg-gray-50 dark:disabled:bg-[#10221f]/50 outline-none focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] transition-all"
                                        >
                                            <option value="M">Masculino</option>
                                            <option value="F">Feminino</option>
                                            <option value="O">Outro</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Contatos */}
                            <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#cfe7e7] dark:border-[#2a3a38] p-6 md:p-8 flex flex-col gap-6 shadow-sm">
                                <h3 className="text-lg font-bold text-[#0d1b1b] dark:text-white border-b border-[#e7f3f3] dark:border-[#2a3a38] pb-4">Contatos e Acesso</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-bold text-[#0d1b1b] dark:text-slate-300">E-mail</label>
                                        <input
                                            type="email"
                                            defaultValue="joao.silva@email.com"
                                            disabled={!isEditing}
                                            className="w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#1A2C2C] px-4 py-2.5 text-[#0d1b1b] dark:text-white disabled:opacity-70 disabled:bg-gray-50 dark:disabled:bg-[#10221f]/50 outline-none focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-bold text-[#0d1b1b] dark:text-slate-300">Celular</label>
                                        <input
                                            type="tel"
                                            defaultValue="(11) 98765-4321"
                                            disabled={!isEditing}
                                            className="w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#1A2C2C] px-4 py-2.5 text-[#0d1b1b] dark:text-white disabled:opacity-70 disabled:bg-gray-50 dark:disabled:bg-[#10221f]/50 outline-none focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Segurança */}
                            <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#cfe7e7] dark:border-[#2a3a38] p-6 md:p-8 flex flex-col gap-6 shadow-sm">
                                <h3 className="text-lg font-bold text-[#0d1b1b] dark:text-white border-b border-[#e7f3f3] dark:border-[#2a3a38] pb-4">Segurança</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-1.5 md:col-span-2">
                                        <label className="text-sm font-bold text-[#0d1b1b] dark:text-slate-300">Senha</label>
                                        <input
                                            type="password"
                                            defaultValue="********"
                                            disabled={!isEditing}
                                            className="w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#1A2C2C] px-4 py-2.5 text-[#0d1b1b] dark:text-white disabled:opacity-70 disabled:bg-gray-50 dark:disabled:bg-[#10221f]/50 outline-none focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] transition-all"
                                        />
                                    </div>
                                    {isEditing && (
                                        <div className="flex flex-col gap-1.5 md:col-span-2">
                                            <label className="text-sm font-bold text-[#0d1b1b] dark:text-slate-300">Confirmar Nova Senha</label>
                                            <input
                                                type="password"
                                                placeholder="Confirme a nova senha"
                                                className="w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#1A2C2C] px-4 py-2.5 text-[#0d1b1b] dark:text-white outline-none focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] transition-all"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Convênio */}
                            <div className="bg-white dark:bg-[#1c2725] rounded-2xl border border-[#cfe7e7] dark:border-[#2a3a38] p-6 md:p-8 flex flex-col gap-6 shadow-sm mb-10">
                                <div className="flex items-center justify-between border-b border-[#e7f3f3] dark:border-[#2a3a38] pb-4">
                                    <h3 className="text-lg font-bold text-[#0d1b1b] dark:text-white">Convênio</h3>
                                    <span className="bg-[#13ecec]/20 text-[#0ebaba] dark:text-[#13ecec] px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">Ativo</span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-bold text-[#0d1b1b] dark:text-slate-300">Operadora</label>
                                        <select
                                            defaultValue="amil"
                                            disabled={!isEditing}
                                            className="w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#1A2C2C] px-4 py-2.5 text-[#0d1b1b] dark:text-white disabled:opacity-70 disabled:bg-gray-50 dark:disabled:bg-[#10221f]/50 outline-none focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] transition-all"
                                        >
                                            <option value="amil">Amil Saúde</option>
                                            <option value="bradesco">Bradesco Saúde</option>
                                            <option value="sulamerica">SulAmérica Saúde</option>
                                            <option value="unimed">Unimed</option>
                                            <option value="particular">Particular (Sem Plano)</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-bold text-[#0d1b1b] dark:text-slate-300">Número da Carteirinha</label>
                                        <input
                                            type="text"
                                            defaultValue="567812349000123"
                                            disabled={!isEditing}
                                            className="w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#1A2C2C] px-4 py-2.5 text-[#0d1b1b] dark:text-white disabled:opacity-70 disabled:bg-gray-50 dark:disabled:bg-[#10221f]/50 outline-none focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <FooterPublic />
        </div>
    );
}
