import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import ProfessionalsPage from "./pages/Professionals/ProfessionalsPage";

function Placeholder({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>Placeholder por enquanto.</p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Placeholder title="Home" />} />
        <Route path="servicos" element={<Placeholder title="Serviços" />} />
        <Route path="profissionais" element={<ProfessionalsPage />} />
        <Route path="contato" element={<Placeholder title="Contato" />} />
        <Route path="agendar" element={<Placeholder title="Agendar" />} />
        <Route path="login" element={<Placeholder title="Login" />} />
        <Route path="*" element={<Placeholder title="404" />} />
      </Route>
    </Routes>
  );
}
