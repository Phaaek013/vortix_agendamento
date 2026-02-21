import { useState, useEffect } from 'react';

const SENHAS_TV = [
    { codigo: 'A042', paciente: 'João Pereira', guiche: 'G-01', tipo: 'Normal', atual: true },
    { codigo: 'A043', paciente: 'Carlos Souza', guiche: '-', tipo: 'Normal', atual: false },
    { codigo: 'P001', paciente: 'Maria Silva', guiche: '-', tipo: 'Preferencial', atual: false },
    { codigo: 'A044', paciente: 'Fernanda Lima', guiche: '-', tipo: 'Normal', atual: false },
    { codigo: 'P002', paciente: 'Bruno Alves', guiche: '-', tipo: 'Preferencial', atual: false },
];

export default function FilaTV() {
    const [hora, setHora] = useState('');
    const [data, setData] = useState('');
    const [pulsing, setPulsing] = useState(false);

    useEffect(() => {
        const update = () => {
            const now = new Date();
            setHora(now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
            setData(now.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }));
        };
        update();
        const t = setInterval(update, 1000);

        // pulsing animation interval
        const p = setInterval(() => {
            setPulsing(true);
            setTimeout(() => setPulsing(false), 1000);
        }, 8000);

        return () => { clearInterval(t); clearInterval(p); };
    }, []);

    const senhaAtual = SENHAS_TV.find(s => s.atual)!;
    const proximasFila = SENHAS_TV.filter(s => !s.atual);

    return (
        <div className="bg-[#0d1b1b] text-white min-h-screen flex flex-col select-none font-display overflow-hidden">
            {/* Topo */}
            <header className="flex items-center justify-between px-10 py-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <div className="bg-[#13ecec]/20 size-10 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#13ecec] text-[22px]">local_hospital</span>
                    </div>
                    <div>
                        <p className="font-black text-xl leading-none">LifeMed</p>
                        <p className="text-[#4c9a9a] text-xs font-medium uppercase tracking-widest">ClinicOps</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-3xl font-black text-white tabular-nums tracking-tight">{hora}</p>
                    <p className="text-xs text-[#4c9a9a] capitalize">{data}</p>
                </div>
            </header>

            {/* Corpo */}
            <main className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Senha Atual (maior) */}
                <div className="lg:col-span-3 flex flex-col items-center justify-center p-10 border-r border-white/10 relative overflow-hidden">
                    {/* Glow de fundo */}
                    <div className={`absolute inset-0 transition-opacity duration-1000 ${pulsing ? 'opacity-20' : 'opacity-5'}`}
                        style={{ background: 'radial-gradient(circle at center, #13ecec 0%, transparent 70%)' }} />

                    <span className="text-[#4c9a9a] text-sm font-bold uppercase tracking-widest mb-4">Senha chamada — Guichê {senhaAtual.guiche}</span>

                    <div className={`transition-all duration-700 ${pulsing ? 'scale-105' : 'scale-100'}`}>
                        <p className={`text-[10rem] md:text-[14rem] font-black leading-none text-center tracking-tight transition-colors ${pulsing ? 'text-[#13ecec]' : 'text-white'}`}>
                            {senhaAtual.codigo}
                        </p>
                    </div>

                    <p className="text-2xl text-[#4c9a9a] font-semibold mt-4">{senhaAtual.paciente}</p>

                    {senhaAtual.tipo === 'Preferencial' && (
                        <span className="mt-4 inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 text-violet-300 text-sm font-bold px-4 py-1.5 rounded-full">
                            <span className="material-symbols-outlined text-[16px]">accessibility</span>
                            Atendimento Preferencial
                        </span>
                    )}

                    {/* Linha inferior decorativa */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#13ecec] to-transparent opacity-30" />
                </div>

                {/* Próximas senhas */}
                <div className="lg:col-span-2 flex flex-col p-8">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="material-symbols-outlined text-[#13ecec] text-[20px]">queue</span>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-[#4c9a9a]">Próximas senhas</h2>
                    </div>
                    <div className="flex flex-col gap-3 flex-1">
                        {proximasFila.map((s, i) => (
                            <div key={s.codigo}
                                className={`flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all ${i === 0 ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/10'}`}>
                                <span className={`text-3xl font-black tracking-tight ${i === 0 ? 'text-[#13ecec]' : 'text-white/60'} w-24 tabular-nums`}>
                                    {s.codigo}
                                </span>
                                <div className="flex-1">
                                    <p className={`font-semibold text-sm ${i === 0 ? 'text-white' : 'text-white/60'}`}>{s.paciente}</p>
                                    {s.tipo === 'Preferencial' && (
                                        <span className="text-xs font-bold text-violet-400">Preferencial</span>
                                    )}
                                </div>
                                {i === 0 && (
                                    <span className="text-xs font-bold text-[#13ecec] bg-[#13ecec]/10 border border-[#13ecec]/20 px-2 py-1 rounded-full">A seguir</span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mensagem institucional */}
                    <div className="mt-auto pt-6 border-t border-white/10">
                        <p className="text-xs text-[#4c9a9a] text-center">
                            Fique atento ao seu número. Aguarde na sala de espera.<br />
                            Em caso de dúvidas, dirija-se à recepção.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
