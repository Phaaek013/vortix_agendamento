export default function FooterPublic() {
    return (
        <footer className="bg-[#102222] pt-16 pb-8 text-gray-300 dark:text-slate-400 w-full mt-auto">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-4">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-2 text-white">
                            <span className="material-symbols-outlined text-[#13ecec] text-[28px]">medical_services</span>
                            <span className="text-xl font-bold">LifeMed ClinicOps</span>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-gray-400">Compromisso com a sua saúde através de tecnologia e atendimento humanizado.</p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Institucional</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a className="hover:text-[#13ecec] transition" href="#">Sobre nós</a></li>
                            <li><a className="hover:text-[#13ecec] transition" href="#">Corpo Clínico</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Pacientes</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a className="hover:text-[#13ecec] transition" href="#">Agendar Consulta</a></li>
                            <li><a className="hover:text-[#13ecec] transition" href="#">Resultados de Exames</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Legal</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a className="hover:text-[#13ecec] transition" href="#">Política de Privacidade</a></li>
                            <li><a className="hover:text-[#13ecec] transition" href="#">Termos de Uso</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-16 flex flex-col items-center justify-between border-t border-gray-800 dark:border-slate-700 pt-8 sm:flex-row">
                    <p className="text-sm text-gray-500 dark:text-slate-400">© 2024 LifeMed ClinicOps. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
