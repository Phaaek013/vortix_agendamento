import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, ProtectedRoute } from './contexts/AuthContext'
import Login from './pages/Login'
import CriarConta from './pages/CriarConta'
import EsqueciSenha from './pages/EsqueciSenha'
import RecuperacaoSenha from './pages/RecuperacaoSenha'
import HomeInstitucional from './pages/HomeInstitucional'
import DashboardEquipe from './pages/DashboardEquipe'
import DashboardClinicOpsDark from './pages/DashboardClinicOpsDark'
import Pacientes from './pages/Pacientes'
import Profissionais from './pages/Profissionais'
import Servicos from './pages/Servicos'
import { ThemeProvider } from './components/ThemeProvider'
import Agendar from './pages/Agendar'
import MeusAgendamentos from './pages/MeusAgendamentos'
import PerfilPaciente from './pages/PerfilPaciente'
import Agenda from './pages/Agenda'
import NovoAgendamentoInterno from './pages/NovoAgendamentoInterno'
import ListaEspera from './pages/ListaEspera'
import Relatorios from './pages/Relatorios'
import FilaAtendimento from './pages/FilaAtendimento'
import FilaTV from './pages/FilaTV'
import DetalhePaciente from './pages/DetalhePaciente'
import RegrasAgenda from './pages/RegrasAgenda'
import ProntuarioCompleto from './pages/ProntuarioCompleto'
import AnamneseNovoRegistro from './pages/AnamneseNovoRegistro'

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Router>
        <AuthProvider>
          <Routes>
            {/* Public — Autenticação */}
            <Route path="/login" element={<Login />} />
            <Route path="/criar-conta" element={<CriarConta />} />
            <Route path="/esqueci-senha" element={<EsqueciSenha />} />
            <Route path="/recuperacao-senha" element={<RecuperacaoSenha />} />

            {/* Public — Paciente (agendamento público) */}
            <Route path="/home" element={<HomeInstitucional />} />
            <Route path="/agendar" element={<Agendar />} />
            <Route path="/meus-agendamentos" element={<MeusAgendamentos />} />
            <Route path="/perfil" element={<PerfilPaciente />} />

            {/* Protected — Admin/Gerente/Colaborador */}
            <Route path="/agenda" element={<ProtectedRoute><Agenda /></ProtectedRoute>} />
            <Route path="/novo-agendamento" element={<ProtectedRoute><NovoAgendamentoInterno /></ProtectedRoute>} />
            <Route path="/lista-espera" element={<ProtectedRoute><ListaEspera /></ProtectedRoute>} />
            <Route path="/relatorios" element={<ProtectedRoute><Relatorios /></ProtectedRoute>} />
            <Route path="/fila-atendimento" element={<ProtectedRoute><FilaAtendimento /></ProtectedRoute>} />
            <Route path="/fila-tv" element={<ProtectedRoute><FilaTV /></ProtectedRoute>} />
            <Route path="/pacientes/:id" element={<ProtectedRoute><DetalhePaciente /></ProtectedRoute>} />
            <Route path="/pacientes/:id/prontuario" element={<ProtectedRoute><ProntuarioCompleto /></ProtectedRoute>} />
            <Route path="/pacientes/:id/anamnese/novo" element={<ProtectedRoute><AnamneseNovoRegistro /></ProtectedRoute>} />
            <Route path="/regras-agenda" element={<ProtectedRoute><RegrasAgenda /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><DashboardEquipe /></ProtectedRoute>} />
            <Route path="/dashboard-dark" element={<ProtectedRoute><DashboardClinicOpsDark /></ProtectedRoute>} />
            <Route path="/pacientes" element={<ProtectedRoute><Pacientes /></ProtectedRoute>} />
            <Route path="/profissionais" element={<ProtectedRoute><Profissionais /></ProtectedRoute>} />
            <Route path="/servicos" element={<ProtectedRoute><Servicos /></ProtectedRoute>} />

            {/* Default route */}
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  )
}

export default App
