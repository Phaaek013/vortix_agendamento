import { Link } from 'react-router-dom';
import HeaderPublic from '../components/public/HeaderPublic';
import FooterPublic from '../components/public/FooterPublic';

export default function HomeInstitucional() {
    return (
        <div className="bg-[#ffffff] dark:bg-[#10221f] text-[#0d1b1b] dark:text-slate-100 antialiased selection:bg-[#13ecec]/30 font-display">
            {/* Header Reutilizável */}
            <HeaderPublic />


            {/* Hero Section */}
            <header className="relative overflow-hidden bg-[#f8fcfc] dark:bg-[#10221f] dark:bg-[#10221f] py-12 sm:py-24 lg:py-32" id="inicio">
                {/* Decorative Background elements */}
                <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#13ecec]/10 blur-3xl"></div>
                <div className="absolute top-1/2 right-0 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-100 blur-3xl"></div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
                        <div className="flex flex-col justify-center">
                            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#13ecec]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#0ebaba]">
                                <span className="h-2 w-2 rounded-full bg-[#13ecec]"></span>
                                Novo App Disponível
                            </div>
                            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#0d1b1b] dark:text-slate-100 sm:text-5xl xl:text-6xl">
                                Sua saúde simplificada e organizada.
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-[#4c9a9a] dark:text-slate-400">
                                Agende consultas e exames com facilidade na LifeMed. Cuidamos de você com tecnologia avançada e atendimento humanizado.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link to="/agendar" className="flex items-center justify-center gap-2 rounded-lg bg-[#13ecec] px-8 py-3.5 text-base font-bold text-[#0d1b1b] dark:text-slate-100 shadow-lg shadow-[#13ecec]/25 transition hover:bg-[#0ebaba] hover:text-[#0d1b1b]">
                                    <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                                    Agendar agora
                                </Link>
                                <Link to="/servicos" className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] px-8 py-3.5 text-base font-bold text-[#0d1b1b] dark:text-slate-100 transition hover:bg-gray-50 dark:hover:bg-[#2a3a38] dark:bg-[#1A2C2C]">
                                    Ver serviços
                                </Link>
                            </div>
                            <div className="mt-10 flex items-center gap-4 text-sm text-[#4c9a9a]">
                                <div className="flex -space-x-2">
                                    <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-[#2a3a38] border-2 border-white dark:border-[#2a3a38] bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_0w2TF_uj-Kdg7iA8-13SfvNsJP8ESZz_x83Nsz98aiYgYDNvjRnS3B0VtYNhGtcGPLTyAFlR6MTB1P6kkNPjy-7BnwIlpbABKlkpHpBOZ06R2fZbl8dud3-fXxF-aQGDBzO_37q_zBiFw_bXh7mbX6WR8un6rqLrSlIDx9pg60HUwLJ-0ZVmePRUX2WA9VwTXwPa-86C__0AUgkFkW9W8SjQRJJxYo-Mmec2ymsjp467pf7xEJMtPiRaIAF05RfWWBgVYb2YECza')" }}></div>
                                    <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-[#2a3a38] border-2 border-white dark:border-[#2a3a38] bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEWmTnXhiHtlmprfCjn96gFmYcJBL-l9HgZLCxrDTM-zYMdPgeHF1GR0he_TM8dOnjBvr5HAIGiD-mFBVGQWFFwRJshwLrXN96AJVEQ9FW7NtrrGwjFD0ZFJM9ysVpFok4m6-hiGzj_PwDCdsD0NK1L8CwZiszC-Zj0-qnBQ0BJpt68QprPkRy9RdaM4hUd6zi1uNIO3IfNqOvRsVg1drv0E9OZjL8QEUCEb8LUvi7rddvF-NQIm9nLTdRiqNucCvZswYzXyHeOc3c')" }}></div>
                                    <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-[#2a3a38] border-2 border-white dark:border-[#2a3a38] bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4n3rN0wfZtTX_IPFOnnI9Lb6Us_DGxcuZY6KDWBdyHr8nO7GZJYYR4CsMQeWGKhXozwfmz_Syh7JlK6z2__yY8wkLoyR06xJ2D7PEmJp2AzTIu2stf15wV3KyHb1xiIvJQcr-4iBdHauLkI_3OrRHal2Atq-1VHysnlJ42qpLp4lPiDlJuHiNpcdgGKP6i8JXfqYrGYCPf2BOaDBPEEDqvWHLgOwJdCNoKr2sH9M_jSmPuOfzRdOav500MLH8WIIUrv-PFywS0aWw')" }}></div>
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white dark:border-[#2a3a38] bg-gray-100 dark:bg-[#2a3a38] text-xs font-bold">+2k</div>
                                </div>
                                <p>Pacientes atendidos este mês</p>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center lg:justify-end">
                            {/* Quick Schedule Widget Mock */}
                            <div className="w-full max-w-md rounded-2xl bg-white dark:bg-[#1c2725] p-6 shadow-2xl ring-1 ring-gray-900/5 backdrop-blur-sm sm:p-8">
                                <div className="mb-6 flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-[#0d1b1b] dark:text-slate-100">Agendamento Rápido</h3>
                                    <span className="material-symbols-outlined text-[#0ebaba]">bolt</span>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="mb-1 block text-xs font-semibold text-[#4c9a9a]">Especialidade</label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <span className="material-symbols-outlined text-gray-400 dark:text-slate-500 text-[20px]">search</span>
                                            </div>
                                            <input className="block w-full rounded-lg border-gray-200 dark:border-[#2a3a38] bg-gray-50 dark:bg-[#1A2C2C] py-3 pl-10 text-sm focus:border-[#13ecec] focus:ring-[#13ecec]" placeholder="Ex: Cardiologia" type="text" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-xs font-semibold text-[#4c9a9a]">Data Preferencial</label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <span className="material-symbols-outlined text-gray-400 dark:text-slate-500 text-[20px]">event</span>
                                            </div>
                                            <input className="block w-full rounded-lg border-gray-200 dark:border-[#2a3a38] bg-gray-50 dark:bg-[#1A2C2C] py-3 pl-10 text-sm focus:border-[#13ecec] focus:ring-[#13ecec]" placeholder="Selecione uma data" type="text" />
                                        </div>
                                    </div>
                                    <Link to="/agendar" className="mt-2 flex w-full items-center justify-center rounded-lg bg-[#0d1b1b] py-3.5 text-sm font-bold text-white transition hover:bg-black">
                                        Buscar Horários
                                    </Link>
                                </div>
                                <div className="mt-6 border-t border-gray-100 dark:border-[#2a3a38] pt-4">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                                        <p className="text-xs font-medium text-gray-500 dark:text-slate-400">Médicos disponíveis agora</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Bento Grid Benefits */}
            <section className="py-20 bg-white dark:bg-[#1c2725]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-[#0d1b1b] dark:text-slate-100 sm:text-4xl">Por que escolher a LifeMed?</h2>
                        <p className="mt-4 text-lg text-[#4c9a9a]">Tecnologia que trabalha a favor da sua saúde.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
                        <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#f8fcfc] dark:bg-[#10221f] dark:bg-[#10221f] p-8 transition hover:shadow-lg sm:col-span-2 lg:row-span-2 border border-gray-100 dark:border-[#2a3a38]">
                            <div className="relative z-10">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#13ecec]/20 text-[#0ebaba]">
                                    <span className="material-symbols-outlined">calendar_clock</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#0d1b1b]">Agendamento Online 24/7</h3>
                                <p className="mt-2 text-[#4c9a9a]">Marque suas consultas a qualquer hora, de qualquer lugar, sem precisar ligar. Liberdade total para sua agenda.</p>
                            </div>
                            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-[#13ecec]/10 transition group-hover:scale-150"></div>
                        </div>

                        <div className="group relative overflow-hidden rounded-2xl bg-[#f8fcfc] dark:bg-[#10221f] dark:bg-[#10221f] p-6 transition hover:shadow-lg sm:col-span-1 border border-gray-100">
                            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                                <span className="material-symbols-outlined">notifications_active</span>
                            </div>
                            <h3 className="text-lg font-bold text-[#0d1b1b]">Lembretes Automáticos</h3>
                            <p className="mt-1 text-sm text-[#4c9a9a]">Receba confirmações via WhatsApp e não perca seus horários.</p>
                        </div>

                        <div className="group relative overflow-hidden rounded-2xl bg-[#f8fcfc] dark:bg-[#10221f] dark:bg-[#10221f] p-6 transition hover:shadow-lg sm:col-span-1 border border-gray-100">
                            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600">
                                <span className="material-symbols-outlined">hourglass_empty</span>
                            </div>
                            <h3 className="text-lg font-bold text-[#0d1b1b]">Lista de Espera</h3>
                            <p className="mt-1 text-sm text-[#4c9a9a]">Seja avisado automaticamente se surgir uma vaga antes.</p>
                        </div>

                        <div className="group relative flex items-center gap-6 overflow-hidden rounded-2xl bg-[#f8fcfc] dark:bg-[#10221f] dark:bg-[#10221f] p-6 transition hover:shadow-lg sm:col-span-2 border border-gray-100">
                            <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                                <span className="material-symbols-outlined">check_circle</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#0d1b1b]">Recepção Organizada</h3>
                                <p className="mt-1 text-sm text-[#4c9a9a]">Check-in digital rápido para evitar filas na chegada à clínica.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section with Loading State */}
            <section className="bg-[#f8fcfc] dark:bg-[#10221f] py-20" id="servicos">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-12">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-[#0d1b1b]">Nossas Especialidades</h2>
                            <p className="mt-2 text-[#4c9a9a]">Cuidados completos para você e sua família.</p>
                        </div>
                        <Link className="group flex items-center gap-2 font-bold text-[#0ebaba] hover:text-[#0d1b1b]" to="/servicos">
                            Ver todos os serviços
                            <span className="material-symbols-outlined transition group-hover:translate-x-1">arrow_forward</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="relative overflow-hidden rounded-xl bg-white dark:bg-[#1c2725] shadow-sm dark:shadow-none transition hover:shadow-md border border-gray-100">
                            <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmpduh3qb9PGqlE-IVWW4OhfR_VsaXOtUhQoa6tl_7eF3i41NG5yYFzwSWIbnJeNvY7KF6Ek126uj1Bu2JP0U_aJT5804UWMhbZjaSbyqMd--o_SAIMontfhH3pHhzRQ6vFp7Iump3YkLJ7pS5iBHuakPyMO9OKUXOCdA8yaWcfMTt05TR3OfH0IUGRU3l9vH5jlgyDRN6mzpVHcGxqPD53V21NFMGAYtM6_B1lWQjBJQnOKJX8-MlLfzM4D7XpZpYfm4hXNg6zyNT')" }}></div>
                            <div className="p-6">
                                <div className="mb-2 flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-[#0d1b1b]">Cardiologia</h3>
                                    <span className="rounded bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">Consulta</span>
                                </div>
                                <p className="mb-4 text-sm text-[#4c9a9a] dark:text-slate-400 line-clamp-2">Acompanhamento completo da saúde do seu coração com especialistas.</p>
                                <button className="w-full rounded-lg border border-gray-200 dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] py-2 text-sm font-bold text-[#0d1b1b] dark:text-slate-100 hover:border-[#13ecec] hover:text-[#0ebaba]">Agendar</button>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-xl bg-white dark:bg-[#1c2725] shadow-sm dark:shadow-none transition hover:shadow-md border border-gray-100">
                            <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuACG2lHwP2HmQEIaERCLauntERDoVbDMbPur_hdq5K3VAQCcXZvN1LYhvlqQqkDMoPCxqJUrQl-E44P4IxiRCHpa7kYixeNpL5jKajZVCsJbtkwjRO4XV_NP0bJsQdQiLJmuM_PaiRFU124B1NILgWNd1su1I0IIE0tQGYX8Eymypq_UgIqsZly19noL_3W_Ej_ZnmBrvwu2-S2uZmRjESfCmHxlFCgCpzPaFaxoR4kibxYO_-kv2tdcmSsy56Sj3z-gAIEewFSg8vo')" }}></div>
                            <div className="p-6">
                                <div className="mb-2 flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-[#0d1b1b]">Exames Laboratoriais</h3>
                                    <span className="rounded bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">Exame</span>
                                </div>
                                <p className="mb-4 text-sm text-[#4c9a9a] dark:text-slate-400 line-clamp-2">Coleta rápida e resultados online para sua comodidade.</p>
                                <button className="w-full rounded-lg border border-gray-200 dark:border-[#2a3a38] bg-white dark:bg-[#1c2725] py-2 text-sm font-bold text-[#0d1b1b] dark:text-slate-100 hover:border-[#13ecec] hover:text-[#0ebaba]">Agendar</button>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-xl bg-white dark:bg-[#1c2725] border border-gray-100">
                            <div className="h-48 w-full animate-pulse bg-gray-200"></div>
                            <div className="p-6">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="h-6 w-1/2 animate-pulse rounded bg-gray-200"></div>
                                    <div className="h-5 w-16 animate-pulse rounded bg-gray-200"></div>
                                </div>
                                <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200"></div>
                                <div className="mb-4 h-4 w-2/3 animate-pulse rounded bg-gray-200"></div>
                                <div className="h-10 w-full animate-pulse rounded-lg bg-gray-200"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Como funciona */}
            <section className="bg-white dark:bg-[#1c2725] py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#0d1b1b]">Agende em 3 passos simples</h2>
                    </div>
                    <div className="relative">
                        <div className="absolute left-0 top-12 hidden h-0.5 w-full -translate-y-1/2 bg-gray-100 dark:bg-[#2a3a38] lg:block"></div>
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                            <div className="relative flex flex-col items-center text-center">
                                <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white dark:bg-[#1c2725] ring-8 ring-[#f8fcfc] dark:ring-[#2a3a38] shadow-sm dark:shadow-none border border-gray-100">
                                    <span className="material-symbols-outlined text-4xl text-[#13ecec]">stethoscope</span>
                                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#0d1b1b] text-sm font-bold text-white">1</div>
                                </div>
                                <h3 className="text-xl font-bold text-[#0d1b1b]">Escolha o serviço</h3>
                                <p className="mt-2 max-w-xs text-[#4c9a9a]">Selecione a especialidade médica ou o tipo de exame que você precisa.</p>
                            </div>
                            <div className="relative flex flex-col items-center text-center">
                                <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white dark:bg-[#1c2725] ring-8 ring-[#f8fcfc] dark:ring-[#2a3a38] shadow-sm dark:shadow-none border border-gray-100">
                                    <span className="material-symbols-outlined text-4xl text-[#13ecec]">calendar_add_on</span>
                                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#0d1b1b] text-sm font-bold text-white">2</div>
                                </div>
                                <h3 className="text-xl font-bold text-[#0d1b1b]">Escolha o horário</h3>
                                <p className="mt-2 max-w-xs text-[#4c9a9a]">Veja a disponibilidade em tempo real e escolha o melhor momento.</p>
                            </div>
                            <div className="relative flex flex-col items-center text-center">
                                <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white dark:bg-[#1c2725] ring-8 ring-[#f8fcfc] dark:ring-[#2a3a38] shadow-sm dark:shadow-none border border-gray-100">
                                    <span className="material-symbols-outlined text-4xl text-[#13ecec]">verified</span>
                                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#0d1b1b] text-sm font-bold text-white">3</div>
                                </div>
                                <h3 className="text-xl font-bold text-[#0d1b1b]">Confirme</h3>
                                <p className="mt-2 max-w-xs text-[#4c9a9a]">Receba a confirmação instantânea e prepare-se para sua consulta.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Profissionais / Avaliações */}
            <section className="bg-[#f8fcfc] dark:bg-[#10221f] py-20" id="profissionais">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-[#0d1b1b]">Quem cuida de você</h2>
                            <p className="mt-4 text-lg text-[#4c9a9a]">Nossa equipe é formada por especialistas renomados, prontos para oferecer o melhor atendimento.</p>
                            <div className="mt-8 space-y-4">
                                <div className="flex items-center gap-4 rounded-xl bg-white dark:bg-[#1c2725] p-4 shadow-sm dark:shadow-none border border-gray-100">
                                    <div className="h-16 w-16 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBW45ZNLWuvtMNgOgcOHya6nlYSZuOwXjsEN98Cv2kxQMcYGuKZwe6HkjJDMn-v6Hssdg4w69QjI5NNFp7JRT8CpS2tIFXt509RsG7YCMaNTmUWzY-I5UlkOyq-vNu6Eouh4-j7EwclvdO_DO2Do6K4IRXhtwLlP6jC4TsBFx3m6lv_Xe27zLADLgiKVRUMqg6-AFGpDyjjRVGQoovxIVuPKkHhjNKC64Vzij20jcpK52wzhj2Z-fOpEX2Cl2VSBq8RxhWRmL879djd')" }}></div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#0d1b1b]">Dr. Carlos Silva</h4>
                                        <p className="text-sm text-[#0ebaba] font-medium">Cardiologista</p>
                                    </div>
                                    <button className="ml-auto rounded-full bg-gray-50 dark:bg-[#1A2C2C] p-2 text-[#0d1b1b] dark:text-slate-100 hover:bg-[#13ecec] hover:text-black transition">
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                                <div className="flex items-center gap-4 rounded-xl bg-white dark:bg-[#1c2725] p-4 border border-gray-100">
                                    <div className="h-16 w-16 rounded-full bg-gray-200 dark:bg-[#2a3a38] animate-pulse"></div>
                                    <div className="flex-1 space-y-2">
                                        <div className="h-4 w-1/3 rounded bg-gray-200 dark:bg-[#2a3a38] animate-pulse"></div>
                                        <div className="h-3 w-1/4 rounded bg-gray-200 dark:bg-[#2a3a38] animate-pulse"></div>
                                    </div>
                                </div>
                                <Link className="mt-4 inline-block font-bold text-[#0ebaba] hover:text-[#0d1b1b]" to="/profissionais">Ver toda a equipe →</Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -right-4 top-0 hidden h-full w-px bg-gray-200 dark:bg-[#2a3a38] lg:block"></div>
                            <h3 className="mb-6 text-xl font-bold text-[#0d1b1b]">O que dizem nossos pacientes</h3>
                            <div className="flex flex-col gap-6">
                                <div className="rounded-xl bg-white dark:bg-[#1c2725] p-6 shadow-sm dark:shadow-none border border-gray-100">
                                    <div className="mb-4 text-[#13ecec]">
                                        <span className="material-symbols-outlined text-3xl">format_quote</span>
                                    </div>
                                    <p className="text-[#4c9a9a] italic">"O atendimento foi excelente desde a recepção até a consulta. O sistema de agendamento é muito prático!"</p>
                                    <div className="mt-4 flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-gray-300 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWRvtUnW7dWPSDP7CLXOUYcpMsX8axyNeKHOx_-EdsBQqIertPNwlZBkVr1m5aMpqQDG9rLti98RJ2TRiZcldE5EXPFtgcaiShIlfe22np0RAe_IXbtkP1bBZeyOPwuqDigM1QEF0YMzO-i8Tt8fGeQMUBWgZF16TZFu57VuSDEEWLyopuDanWCf6Zy6_nalCddweo8DEtQYGySW7neX1-IrQzRL2W0ycncNUUNhFHDZJ1YhoiNsCqoBns94RARU2R2lyA21i2t8A4')" }}></div>
                                        <div>
                                            <p className="text-sm font-bold text-[#0d1b1b]">Mariana Costa</p>
                                            <p className="text-xs text-[#4c9a9a]">Paciente desde 2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-xl bg-white dark:bg-[#1c2725] p-6 shadow-sm dark:shadow-none border border-gray-100">
                                    <div className="mb-4 text-[#13ecec]">
                                        <span className="material-symbols-outlined text-3xl">format_quote</span>
                                    </div>
                                    <p className="text-[#4c9a9a] italic">"Gostei muito da pontualidade. Recebi o lembrete no WhatsApp e fui atendido na hora marcada."</p>
                                    <div className="mt-4 flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-gray-300 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkJC0d--NfbIS5KfBQn2hZb6xUAAGZX_UooC-Z-O9tJ4D3Tnb5ooZAG6TQzqX_4Amsco9VDDckZ9nNcoqRCJyexmQt800-HMDZJ5BpAb_E_8hAcWBNmDRn__s0ZoWvzEiEpZT8ie70g7v-_FbCi1mQYDkPd1kr2Rbedah3uPkFYkq9eyJioK40zu7WLG0LA0FN6tGO7RjaH5-7cn9FZSLy9geh3HxgDa5XV7sa3CnzzYOePg8YOiyoBSjCuq-2p5yOpBHzeCXG9YTd')" }}></div>
                                        <div>
                                            <p className="text-sm font-bold text-[#0d1b1b]">Roberto Almeida</p>
                                            <p className="text-xs text-[#4c9a9a]">Paciente desde 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contato Map */}
            <section className="bg-white dark:bg-[#1c2725] py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-2xl bg-[#102222] shadow-2xl">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-10 lg:p-16">
                                <h2 className="text-3xl font-bold text-white">Venha nos visitar</h2>
                                <p className="mt-4 text-gray-400">Estamos localizados em um ponto estratégico para facilitar seu acesso.</p>
                                <ul className="mt-10 space-y-6">
                                    <li className="flex items-start gap-4">
                                        <span className="material-symbols-outlined rounded-lg bg-[#13ecec]/20 p-2 text-[#13ecec]">location_on</span>
                                        <div>
                                            <h4 className="font-bold text-white">Endereço</h4>
                                            <p className="text-sm text-gray-400">Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="material-symbols-outlined rounded-lg bg-[#13ecec]/20 p-2 text-[#13ecec]">call</span>
                                        <div>
                                            <h4 className="font-bold text-white">Telefone</h4>
                                            <p className="text-sm text-gray-400">(11) 99999-9999</p>
                                            <p className="text-sm text-gray-400">(11) 3333-3333</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="material-symbols-outlined rounded-lg bg-[#13ecec]/20 p-2 text-[#13ecec]">schedule</span>
                                        <div>
                                            <h4 className="font-bold text-white">Horário de Atendimento</h4>
                                            <p className="text-sm text-gray-400">Seg - Sex: 08:00 - 18:00</p>
                                            <p className="text-sm text-gray-400">Sáb: 08:00 - 12:00</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="mt-10">
                                    <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-bold text-white transition hover:bg-[#20bd5a] sm:w-auto">
                                        <span className="material-symbols-outlined">chat</span>
                                        Falar no WhatsApp
                                    </button>
                                </div>
                            </div>
                            <div className="relative min-h-[300px] w-full bg-gray-800">
                                <img alt="Mapa" className="absolute h-full w-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoGNSkEkqWk2YoJYHnATk-rlIuDL0rGy0CPC8ZVoz_vM_ZjuT0rnDXX02IwZCWd7xUwGPpliYlrMCp0gGLZg2khcsjnUihPMwU9y_2yPh6je8meQp-D5Sng8flj_ybnmIzyoIklAs7TRFyOYxlyZCNOHx-B3JX8ntrdNjXz3soFcuYaKVksXdK5mSFhl2sHhECFNLghUQ4ulnt8tYTdeLRNJHyjCy5xRqEWNXJMlOmdg2n2PF5ugmGbipsAti5R9jARQrvpVm3d9hz" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                    <span className="rounded-full bg-white dark:bg-[#1c2725] px-4 py-2 text-sm font-bold text-[#0d1b1b] dark:text-slate-100 shadow-lg">Abrir no Maps</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-[#f8fcfc] dark:bg-[#10221f] py-20">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-[#0d1b1b]">Dúvidas Frequentes</h2>
                    <div className="space-y-4">
                        <div className="rounded-lg bg-white dark:bg-[#1c2725] p-6 shadow-sm dark:shadow-none border border-gray-100">
                            <button className="flex w-full items-center justify-between text-left font-bold text-[#0d1b1b]">
                                <span>Aceitam convênios médicos?</span>
                                <span className="material-symbols-outlined text-[#4c9a9a]">expand_more</span>
                            </button>
                        </div>
                        <div className="rounded-lg bg-white dark:bg-[#1c2725] p-6 shadow-sm dark:shadow-none border border-gray-100">
                            <button className="flex w-full items-center justify-between text-left font-bold text-[#0d1b1b]">
                                <span>Como cancelo um agendamento?</span>
                                <span className="material-symbols-outlined text-[#4c9a9a]">expand_more</span>
                            </button>
                        </div>
                        <div className="rounded-lg bg-white dark:bg-[#1c2725] p-6 shadow-sm dark:shadow-none border border-gray-100">
                            <button className="flex w-full items-center justify-between text-left font-bold text-[#0d1b1b]">
                                <span>Quais documentos preciso levar?</span>
                                <span className="material-symbols-outlined text-[#4c9a9a]">expand_more</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Reutilizável */}
            <FooterPublic />
        </div>
    );
}
