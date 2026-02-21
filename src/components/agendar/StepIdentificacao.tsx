import { useState } from 'react';

type Props = {
    onConfirm?: () => void;
};

export default function StepIdentificacao({ onConfirm }: Props = {}) {
    const [tab, setTab] = useState<'criar' | 'entrar'>('criar');
    const [isLogged] = useState(() => localStorage.getItem('userRole') === 'paciente');
    const [isEditing, setIsEditing] = useState(false);

    if (isLogged) {
        return (
            <div className="bg-white dark:bg-[#1c2725] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl p-6 flex flex-col gap-5">
                <div>
                    <h3 className="text-lg font-bold text-[#0d1b1b] dark:text-white">Confirmação de Dados</h3>
                    <p className="text-xs text-[#4c9a9a] dark:text-slate-400 mt-1">Verifique e confirme seus dados para prosseguir.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2 flex flex-col gap-1.5"><label className="text-xs font-bold text-[#0d1b1b] dark:text-slate-300">Nome Completo</label><input disabled className="w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-gray-100 dark:bg-[#10221f] px-4 py-2.5 text-sm text-[#4c9a9a] dark:text-slate-500 cursor-not-allowed" value="João da Silva" /></div>
                    <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-[#0d1b1b] dark:text-slate-300">E-mail</label><input disabled className="w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-gray-100 dark:bg-[#10221f] px-4 py-2.5 text-sm text-[#4c9a9a] dark:text-slate-500 cursor-not-allowed" value="joao.silva@email.com" /></div>
                    <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-[#0d1b1b] dark:text-slate-300">Celular</label><input disabled={!isEditing} className={`w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] px-4 py-2.5 text-sm outline-none transition-all ${isEditing ? 'bg-[#f8fcfc] dark:bg-[#1A2C2C] text-[#0d1b1b] dark:text-white focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec]' : 'bg-gray-100 dark:bg-[#10221f] text-[#4c9a9a] dark:text-slate-500 cursor-not-allowed'}`} defaultValue="(11) 99999-9999" /></div>
                    <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-[#0d1b1b] dark:text-slate-300">Data de Nascimento</label><input type="date" disabled={!isEditing} className={`w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] px-4 py-2.5 text-sm outline-none transition-all ${isEditing ? 'bg-[#f8fcfc] dark:bg-[#1A2C2C] text-[#0d1b1b] dark:text-white focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec]' : 'bg-gray-100 dark:bg-[#10221f] text-[#4c9a9a] dark:text-slate-500 cursor-not-allowed'}`} defaultValue="1985-10-15" /></div>
                    <div className="md:col-span-2 flex flex-col gap-1.5"><label className="text-xs font-bold text-[#0d1b1b] dark:text-slate-300">Endereço Residencial</label><input disabled={!isEditing} className={`w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] px-4 py-2.5 text-sm outline-none transition-all ${isEditing ? 'bg-[#f8fcfc] dark:bg-[#1A2C2C] text-[#0d1b1b] dark:text-white focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec]' : 'bg-gray-100 dark:bg-[#10221f] text-[#4c9a9a] dark:text-slate-500 cursor-not-allowed'}`} defaultValue="Rua das Flores, 123" /></div>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#e7f3f3] dark:border-[#2a3a38] mt-2">
                    {isEditing ? (
                        <>
                            <button onClick={() => setIsEditing(false)} className="px-5 py-2.5 rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] text-sm font-bold text-[#0d1b1b] dark:text-slate-200 hover:bg-[#e7f3f3] dark:hover:bg-[#1A2C2C] transition-all">
                                Cancelar Edição
                            </button>
                            <div className="flex-1 flex justify-end">
                                <button onClick={() => onConfirm?.()} className="px-5 py-2.5 rounded-lg bg-[#13ecec] text-[#0d1b1b] text-sm font-bold hover:bg-[#0ebaba] transition-all shadow-sm">
                                    Salvar Alterações e Confirmar
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <button onClick={() => setIsEditing(true)} className="px-5 py-2.5 rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] text-sm font-bold text-[#0d1b1b] dark:text-slate-200 hover:bg-[#e7f3f3] dark:hover:bg-[#1A2C2C] transition-all">
                                Editar Dados
                            </button>
                            <div className="flex-1 flex justify-end">
                                <button onClick={() => onConfirm?.()} className="px-5 py-2.5 rounded-lg bg-[#13ecec] text-[#0d1b1b] text-sm font-bold hover:bg-[#0ebaba] transition-all shadow-sm flex items-center gap-2">
                                    Confirmar Dados <span className="material-symbols-outlined text-[18px]">check</span>
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            {/* Tabs */}
            <div className="flex border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl overflow-hidden">
                <button onClick={() => setTab('criar')} className={`flex-1 py-3 text-sm font-bold transition-all ${tab === 'criar' ? 'bg-white dark:bg-[#1c2725] text-[#0d1b1b] dark:text-white' : 'bg-[#f8fcfc] dark:bg-[#10221f] text-[#4c9a9a] dark:text-slate-500 hover:bg-[#e7f3f3] dark:hover:bg-[#1A2C2C]'}`}>Criar conta</button>
                <button onClick={() => setTab('entrar')} className={`flex-1 py-3 text-sm font-bold transition-all ${tab === 'entrar' ? 'bg-white dark:bg-[#1c2725] text-[#0d1b1b] dark:text-white' : 'bg-[#f8fcfc] dark:bg-[#10221f] text-[#4c9a9a] dark:text-slate-500 hover:bg-[#e7f3f3] dark:hover:bg-[#1A2C2C]'}`}>Entrar</button>
            </div>

            {tab === 'criar' ? (
                <div className="bg-white dark:bg-[#1c2725] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl p-6 flex flex-col gap-5">
                    <div><h3 className="text-lg font-bold text-[#0d1b1b] dark:text-white">Nova conta</h3><p className="text-xs text-[#4c9a9a] dark:text-slate-400 mt-1">Preencha seus dados para criar seu perfil de paciente.</p></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2 flex flex-col gap-1.5"><label className="text-xs font-bold text-[#0d1b1b] dark:text-slate-300">Nome Completo</label><input className="w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#1A2C2C] px-4 py-2.5 text-sm text-[#0d1b1b] dark:text-white outline-none focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] transition-all" placeholder="Ex: Maria Silva" /></div>
                        <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-[#0d1b1b] dark:text-slate-300">E-mail</label><input type="email" className="w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#1A2C2C] px-4 py-2.5 text-sm text-[#0d1b1b] dark:text-white outline-none focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] transition-all" placeholder="seu@email.com" /></div>
                        <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-[#0d1b1b] dark:text-slate-300">Celular <span className="text-[#4c9a9a] font-normal">(Opcional)</span></label><input type="tel" className="w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#1A2C2C] px-4 py-2.5 text-sm text-[#0d1b1b] dark:text-white outline-none focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] transition-all" placeholder="(00) 00000-0000" /></div>
                        <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-[#0d1b1b] dark:text-slate-300">Data de Nascimento</label><input type="date" className="w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#1A2C2C] px-4 py-2.5 text-sm text-[#0d1b1b] dark:text-white outline-none focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] transition-all" /></div>
                        <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-[#0d1b1b] dark:text-slate-300">Senha</label><input type="password" className="w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#1A2C2C] px-4 py-2.5 text-sm text-[#0d1b1b] dark:text-white outline-none focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] transition-all" placeholder="••••••••" /></div>
                        <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-[#0d1b1b] dark:text-slate-300">Confirmar Senha</label><input type="password" className="w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#1A2C2C] px-4 py-2.5 text-sm text-[#0d1b1b] dark:text-white outline-none focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] transition-all" placeholder="••••••••" /></div>
                    </div>
                    <label className="flex items-start gap-2 text-xs text-[#4c9a9a] dark:text-slate-400"><input type="checkbox" className="mt-0.5 accent-[#13ecec]" /><span>Eu concordo com os <a href="#" className="text-[#13ecec] underline">Termos de Uso</a>. Li e aceito a <a href="#" className="text-[#13ecec] underline">Política de Privacidade</a> e o processamento dos meus dados de saúde.</span></label>
                    {/* Security badge */}
                    <div className="flex items-center gap-2 bg-[#e7f3f3] dark:bg-[#1A2C2C] rounded-lg p-3"><span className="material-symbols-outlined text-[#13ecec] text-[18px]">verified_user</span><div><p className="text-xs font-bold text-[#0d1b1b] dark:text-white">Seus dados estão seguros</p><p className="text-[10px] text-[#4c9a9a] dark:text-slate-400">Seguimos rigorosamente a LGPD para proteção médica.</p></div></div>
                </div>
            ) : (
                <div className="bg-white dark:bg-[#1c2725] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl p-6 flex flex-col gap-5">
                    <div><h3 className="text-lg font-bold text-[#0d1b1b] dark:text-white">Entrar</h3><p className="text-xs text-[#4c9a9a] dark:text-slate-400 mt-1">Faça login com sua conta existente.</p></div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-[#0d1b1b] dark:text-slate-300">E-mail</label><input type="email" className="w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#1A2C2C] px-4 py-2.5 text-sm text-[#0d1b1b] dark:text-white outline-none focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] transition-all" placeholder="seu@email.com" /></div>
                        <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-[#0d1b1b] dark:text-slate-300">Senha</label><input type="password" className="w-full rounded-lg border border-[#e7f3f3] dark:border-[#2a3a38] bg-[#f8fcfc] dark:bg-[#1A2C2C] px-4 py-2.5 text-sm text-[#0d1b1b] dark:text-white outline-none focus:border-[#13ecec] focus:ring-1 focus:ring-[#13ecec] transition-all" placeholder="••••••••" /></div>
                        <a href="#" className="text-xs font-bold text-[#13ecec] hover:underline self-end">Esqueci minha senha</a>
                    </div>
                </div>
            )}
        </div>
    );
}
