import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { getToken } from '../services/api';
import HeaderPublic from '../components/public/HeaderPublic';
import FooterPublic from '../components/public/FooterPublic';
import StepServico from '../components/agendar/StepServico';
import StepProfissional from '../components/agendar/StepProfissional';
import StepDataHora from '../components/agendar/StepDataHora';
import StepIdentificacao from '../components/agendar/StepIdentificacao';
import StepConfirmacao from '../components/agendar/StepConfirmacao';
import ResumoSidebar from '../components/agendar/ResumoSidebar';
import type { AgendamentoData } from '../components/agendar/types';

const STEPS = ['Serviço', 'Profissional', 'Data e Hora', 'Identificação', 'Confirmação'];

export default function Agendar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentStep, setCurrentStep] = useState(1);
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);
    const [confirmado, setConfirmado] = useState(false);
    const [agendamento, setAgendamento] = useState<AgendamentoData>({
        servico: null,
        profissional: null,
        data: null,
        horario: null,
        local: 'Unidade Paulista — Av. Paulista, 1000 - Sala 304',
        valor: 'R$ 350,00',
    });

    // Handle preselection
    useEffect(() => {
        if (location.state) {
            const { preselectedService, preselectedProfessional } = location.state;
            if (preselectedService && !agendamento.servico) {
                setAgendamento(prev => ({ ...prev, servico: preselectedService }));
                setCurrentStep(2);
            }
            if (preselectedProfessional && !agendamento.profissional) {
                setAgendamento(prev => ({ ...prev, profissional: preselectedProfessional }));
                if (preselectedService) {
                    setCurrentStep(3);
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.state]);

    const canContinue = () => {
        if (currentStep === 1) return !!agendamento.servico;
        if (currentStep === 2) return !!agendamento.profissional;
        if (currentStep === 3) return !!agendamento.data && !!agendamento.horario;
        if (currentStep === 4) return true;
        return true;
    };

    return (
        <div className="flex min-h-screen w-full flex-col bg-[#f8fcfc] dark:bg-[#10221f] font-display text-[#0d1b1b] dark:text-slate-100 transition-colors duration-200">
            <HeaderPublic />
            <main className="flex-grow flex flex-col items-center w-full px-4 md:px-10 py-6">
                <div className="w-full max-w-[1200px] flex flex-col gap-5">
                    {/* Breadcrumb */}
                    <div className="flex flex-wrap gap-2 px-1">
                        <Link className="text-[#4c9a9a] dark:text-slate-400 hover:underline text-sm font-medium" to="/home">Início</Link>
                        <span className="text-[#4c9a9a] text-sm font-medium">/</span>
                        <span className="text-[#0d1b1b] dark:text-slate-200 text-sm font-medium">Agendar</span>
                    </div>
                    {/* Title */}
                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-[#0d1b1b] dark:text-white">Agendar Atendimento</h1>
                        <p className="text-[#4c9a9a] dark:text-slate-400 text-sm md:text-base max-w-xl">
                            Selecione o serviço que deseja realizar. Você poderá escolher o profissional e o horário nos próximos passos.
                        </p>
                    </div>
                    {/* Stepper */}
                    <div className="bg-white dark:bg-[#1c2725] border border-[#e7f3f3] dark:border-[#2a3a38] rounded-xl p-4 flex flex-col gap-2">
                        <div className="flex items-center justify-between text-xs font-bold">
                            <span className="text-[#13ecec]">PASSO {currentStep} DE 5</span>
                            <span className="text-[#0d1b1b] dark:text-slate-300 uppercase">{STEPS[currentStep - 1]}</span>
                        </div>
                        <div className="flex items-center gap-0">
                            {STEPS.map((label, i) => {
                                const stepNum = i + 1;
                                const done = stepNum < currentStep;
                                const active = stepNum === currentStep;
                                return (
                                    <div key={label} className="flex items-center flex-1 last:flex-none">
                                        <div className="flex flex-col items-center gap-1">
                                            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-all ${done ? 'bg-[#13ecec] text-[#0d1b1b]' : active ? 'bg-[#0d1b1b] dark:bg-white text-white dark:text-[#0d1b1b]' : 'bg-[#e7f3f3] dark:bg-[#1A2C2C] text-[#4c9a9a] dark:text-slate-500'}`}>
                                                {done ? <span className="material-symbols-outlined text-[18px]">check</span> : stepNum}
                                            </div>
                                            <span className={`text-[10px] font-semibold hidden md:block ${done || active ? 'text-[#0d1b1b] dark:text-slate-200' : 'text-[#4c9a9a] dark:text-slate-500'}`}>{label}</span>
                                        </div>
                                        {stepNum < 5 && <div className={`h-[2px] flex-1 mx-2 ${done ? 'bg-[#13ecec]' : 'bg-[#e7f3f3] dark:bg-[#2a3a38]'}`} />}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    {/* Content + Sidebar */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 flex flex-col gap-4">
                            {currentStep === 1 && <StepServico agendamento={agendamento} setAgendamento={setAgendamento} />}
                            {currentStep === 2 && <StepProfissional agendamento={agendamento} setAgendamento={setAgendamento} />}
                            {currentStep === 3 && <StepDataHora agendamento={agendamento} setAgendamento={setAgendamento} />}
                            {currentStep === 4 && <StepIdentificacao onConfirm={() => setCurrentStep(5)} />}
                            {currentStep === 5 && <StepConfirmacao agendamento={agendamento} confirmado={confirmado} />}
                        </div>
                        <div className="lg:col-span-1">
                            <ResumoSidebar agendamento={agendamento} currentStep={currentStep} />
                        </div>
                    </div>
                    {/* Bottom Navigation */}
                    {!confirmado && (
                        <div className="flex items-center justify-between border-t border-[#e7f3f3] dark:border-[#2a3a38] pt-5 mt-2">
                            <button onClick={() => currentStep > 1 ? setCurrentStep(currentStep - 1) : navigate('/home')} className="flex items-center gap-2 rounded-lg px-5 py-2.5 font-bold text-[#4c9a9a] dark:text-slate-300 hover:bg-[#e7f3f3] dark:hover:bg-[#1A2C2C] transition-all text-sm">
                                <span className="material-symbols-outlined text-[18px]">arrow_back</span> Voltar
                            </button>
                            {currentStep < 5 ? (
                                <button disabled={!canContinue()} onClick={() => setCurrentStep(currentStep + 1)} className={`flex items-center gap-2 rounded-lg px-6 py-2.5 font-bold text-sm transition-all ${canContinue() ? 'bg-[#13ecec] text-[#0d1b1b] hover:bg-[#0ebaba] shadow-sm' : 'bg-gray-200 dark:bg-[#1A2C2C] text-gray-400 dark:text-slate-600 cursor-not-allowed'}`}>
                                    Continuar <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                </button>
                            ) : (
                                <button onClick={() => {
                                    if (getToken()) {
                                        setConfirmado(true);
                                    } else {
                                        setShowLoginPrompt(true);
                                    }
                                }} className="flex items-center gap-2 rounded-lg px-6 py-2.5 font-bold text-sm bg-[#13ecec] text-[#0d1b1b] hover:bg-[#0ebaba] shadow-sm transition-all">
                                    <span>Confirmar Agendamento</span> <span className="material-symbols-outlined text-[18px]">check</span>
                                </button>
                            )}

                            {/* Modal de login obrigatório */}
                            {showLoginPrompt && (
                                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setShowLoginPrompt(false)}>
                                    <div className="bg-white dark:bg-[#1c2725] rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl" onClick={e => e.stopPropagation()}>
                                        <div className="text-center">
                                            <div className="size-16 bg-[#13ecec]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <span className="material-symbols-outlined text-[#13ecec] text-3xl">lock</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-[#0d1b1b] dark:text-white mb-2">Login Necessário</h3>
                                            <p className="text-sm text-[#4c9a9a] dark:text-slate-400 mb-6">Para confirmar seu agendamento, é necessário estar logado na sua conta.</p>
                                            <div className="flex flex-col gap-3">
                                                <Link to="/login" className="w-full py-3 rounded-xl bg-[#13ecec] text-[#0d1b1b] font-bold text-sm hover:bg-[#0ebaba] transition-all text-center">Entrar na minha conta</Link>
                                                <Link to="/criar-conta" className="w-full py-3 rounded-xl border-2 border-[#13ecec] text-[#13ecec] font-bold text-sm hover:bg-[#13ecec]/10 transition-all text-center">Criar uma conta</Link>
                                                <button onClick={() => setShowLoginPrompt(false)} className="text-xs text-[#4c9a9a] hover:text-[#0d1b1b] dark:hover:text-white mt-1">Voltar ao agendamento</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </main>
            <FooterPublic />
        </div>
    );
}
