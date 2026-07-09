import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Briefcase, UserPlus, Receipt, User, LogOut } from 'lucide-react';

export default function Layout() {
  const location = useLocation();

  // Função para estilo do link ativo
  const linkStyle = (path: string) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    color: location.pathname === path ? '#ffffff' : '#94a3b8',
    backgroundColor: location.pathname === path ? '#334155' : 'transparent',
    transition: 'all 0.2s',
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f1f5f9', fontFamily: 'Inter, sans-serif' }}>
      {/* Sidebar Elegante */}
      <aside style={{ width: '260px', background: '#0f172a', color: '#cbd5e1', padding: '24px', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ color: 'white', marginBottom: '40px', fontSize: '1.25rem', textAlign: 'center' }}>RhTech Portal</h2>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
          <Link to="/dashboard" style={linkStyle('/dashboard')}><LayoutDashboard size={20} /> Dashboard</Link>
          <Link to="/funcionarios" style={linkStyle('/funcionarios')}><Users size={20} /> Funcionários</Link>
          <Link to="/vagas" style={linkStyle('/vagas')}><Briefcase size={20} /> Vagas</Link>
          <Link to="/candidatos" style={linkStyle('/candidatos')}><UserPlus size={20} /> Candidatos</Link>
          <Link to="/folha" style={linkStyle('/folha')}><Receipt size={20} /> Folha</Link>
          <Link to="/perfil" style={linkStyle('/perfil')}><User size={20} /> Perfil</Link>
        </nav>

        <button style={{ background: 'transparent', border: 'none', color: '#a01616', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <LogOut size={20} /> Sair
        </button>
      </aside>

      {/* Área Central */}
      <main style={{ flex: 1, padding: '40px' }}>
        <Outlet />
      </main>
    </div>
  );
}
