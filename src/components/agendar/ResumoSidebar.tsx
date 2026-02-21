import type { AgendamentoData } from './types';

type Props = { agendamento: AgendamentoData; currentStep: number };

export default function ResumoSidebar({ agendamento, currentStep }: Props) {
    return (
        <div className="sticky top-28 flex flex-col gap-4">
            <div className="bg-white dark:bg-[#1c2725] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl p-5 flex flex-col gap-4 shadow-sm">
                <div className="flex items-center justify-between">
                    <h3 className="flex items-center gap-2 font-bold text-[#0d1b1b] dark:text-white text-sm">
                        <span className="material-symbols-outlined text-[#13ecec] text-[20px]">receipt_long</span>
                        Resumo do agendamento
                    </h3>
                    {currentStep >= 2 && <span className="text-[10px] font-bold bg-[#13ecec]/10 text-[#13ecec] px-2 py-0.5 rounded">PASSO {currentStep}/5</span>}
                </div>

                {/* Step 4+ : Date block */}
                {currentStep >= 4 && agendamento.data && (
                    <div className="flex items-center gap-3 bg-[#f8fcfc] dark:bg-[#10221f] rounded-lg p-3">
                        <div className="flex flex-col items-center bg-[#13ecec]/10 rounded-lg px-3 py-1.5"><span className="text-[10px] font-bold text-[#13ecec] uppercase">MAR</span><span className="text-xl font-black text-[#0d1b1b] dark:text-white">{agendamento.data?.split('/')[0]}</span></div>
                        <div><p className="flex items-center gap-1 font-bold text-sm text-[#0d1b1b] dark:text-white"><span className="material-symbols-outlined text-[#13ecec] text-[16px]">schedule</span>{agendamento.horario}</p><p className="text-xs text-[#4c9a9a] dark:text-slate-400">Quarta-feira</p></div>
                    </div>
                )}

                {/* Serviço */}
                <div className="flex items-start gap-3">
                    <span className={`material-symbols-outlined text-[18px] mt-0.5 ${agendamento.servico ? 'text-[#13ecec]' : 'text-[#e7f3f3] dark:text-[#2a3a38]'}`}>medical_services</span>
                    <div>
                        <p className="text-[10px] font-bold uppercase text-[#4c9a9a] dark:text-slate-500 tracking-wider">ESPECIALIDADE</p>
                        {agendamento.servico ? (
                            <><p className="font-bold text-sm text-[#0d1b1b] dark:text-white">{agendamento.servico.nome}</p><p className="text-xs text-[#4c9a9a] dark:text-slate-400">Duração aprox. {agendamento.servico.duracao}</p></>
                        ) : (
                            <p className="text-xs text-[#4c9a9a] dark:text-slate-500 italic">A selecionar</p>
                        )}
                    </div>
                </div>

                {/* Profissional */}
                <div className="flex items-start gap-3">
                    <span className={`material-symbols-outlined text-[18px] mt-0.5 ${agendamento.profissional ? 'text-[#13ecec]' : 'text-[#e7f3f3] dark:text-[#2a3a38]'}`}>person</span>
                    <div>
                        <p className="text-[10px] font-bold uppercase text-[#4c9a9a] dark:text-slate-500 tracking-wider">PROFISSIONAL</p>
                        {agendamento.profissional ? (
                            <div className="flex items-center gap-2"><img src={agendamento.profissional.avatar} alt="" className="h-6 w-6 rounded-full" /><div><p className="font-bold text-sm text-[#0d1b1b] dark:text-white">{agendamento.profissional.nome}</p><p className="text-[10px] text-[#4c9a9a] dark:text-slate-400">{agendamento.profissional.crm}</p></div></div>
                        ) : (
                            <p className="text-xs text-[#4c9a9a] dark:text-slate-500 italic">A selecionar no próximo passo</p>
                        )}
                    </div>
                </div>

                {/* Data e Hora */}
                <div className="flex items-start gap-3">
                    <span className={`material-symbols-outlined text-[18px] mt-0.5 ${agendamento.data ? 'text-[#13ecec]' : 'text-[#e7f3f3] dark:text-[#2a3a38]'}`}>calendar_month</span>
                    <div>
                        <p className="text-[10px] font-bold uppercase text-[#4c9a9a] dark:text-slate-500 tracking-wider">DATA E HORA</p>
                        {agendamento.data && agendamento.horario ? (
                            <><p className="font-bold text-sm text-[#0d1b1b] dark:text-white">{agendamento.data}, {agendamento.horario}</p><p className="text-xs text-green-500 font-semibold flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block"></span>Disponível</p></>
                        ) : (
                            <p className="text-xs text-[#4c9a9a] dark:text-slate-500 italic">A selecionar</p>
                        )}
                    </div>
                </div>

                {/* Local */}
                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[18px] mt-0.5 text-[#13ecec]">location_on</span>
                    <div>
                        <p className="text-[10px] font-bold uppercase text-[#4c9a9a] dark:text-slate-500 tracking-wider">LOCAL</p>
                        <p className="font-bold text-sm text-[#0d1b1b] dark:text-white">Unidade Paulista</p>
                        <p className="text-[10px] text-[#4c9a9a] dark:text-slate-400">Av. Paulista, 1000 - Sala 304</p>
                    </div>
                </div>

                {/* Valor */}
                <div className="border-t border-[#e7f3f3] dark:border-[#2a3a38] pt-3 flex items-center justify-between">
                    <span className="text-xs text-[#4c9a9a] dark:text-slate-400">Valor da consulta</span>
                    <span className="font-black text-lg text-[#0d1b1b] dark:text-white">{agendamento.valor}</span>
                </div>
                {currentStep < 5 && <p className="text-[10px] text-[#4c9a9a] dark:text-slate-500 text-right">Pagamento no próximo passo</p>}
            </div>

            {/* Help card on step 2 */}
            {currentStep === 2 && (
                <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-xl p-4 flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500 text-[20px]">info</span>
                    <div><p className="text-xs font-bold text-blue-800 dark:text-blue-300">Dúvida na escolha?</p><p className="text-[10px] text-blue-600 dark:text-blue-400 mt-0.5">Selecione "Qualquer Profissional" para visualizar os horários mais próximos disponíveis na clínica independente do médico.</p></div>
                </div>
            )}

            {/* Timer on step 4 */}
            {currentStep === 4 && (
                <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800/30 rounded-xl p-4 flex items-start gap-3">
                    <span className="material-symbols-outlined text-yellow-600 text-[20px]">timer</span>
                    <div><p className="text-xs font-bold text-yellow-800 dark:text-yellow-300">Este horário está pré-reservado por <span className="font-mono">09:54</span> minutos.</p><p className="text-[10px] text-yellow-600 dark:text-yellow-400 mt-0.5">Complete o cadastro para confirmar.</p></div>
                </div>
            )}

            {/* Next step hint on step 1 */}
            {currentStep === 1 && agendamento.servico && (
                <div className="bg-[#13ecec]/5 dark:bg-[#13ecec]/10 border border-[#13ecec]/20 rounded-xl p-4">
                    <p className="text-xs font-bold text-[#0ebaba] dark:text-[#13ecec]">Próximo passo:</p>
                    <p className="text-[10px] text-[#4c9a9a] dark:text-slate-400 mt-0.5">Você escolherá o profissional de sua preferência.</p>
                </div>
            )}
        </div>
    );
}
