import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Funcionarios from './pages/Funcionarios';
import Vagas from './pages/Vagas';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota inicial */}
        <Route path="/" element={<Login />} />
        
        {/* Rotas protegidas pelo Layout com a Sidebar */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/funcionarios" element={<Funcionarios />} />
          <Route path="/vagas" element={<Vagas />} />
          
          {/* Novas rotas com conteúdo fictício */}
          <Route path="/candidatos" element={<PlaceholderPage title="Candidatos" />} />
          <Route path="/folha" element={<PlaceholderPage title="Folha de Pagamento" />} />
          <Route path="/perfil" element={<PlaceholderPage title="Perfil do Usuário" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
