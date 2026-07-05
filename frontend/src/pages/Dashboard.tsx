import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

// Dados fictícios para o gráfico
const data = [
  { name: 'Jan', qtd: 4 },
  { name: 'Fev', qtd: 7 },
  { name: 'Mar', qtd: 5 },
  { name: 'Abr', qtd: 8 },
  { name: 'Mai', qtd: 10 },
];

export default function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '1.8rem', color: '#1e293b', marginBottom: '30px' }}>Visão Geral</h1>
      
      {/* Cards de Métricas */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <div style={{ padding: '25px', background: '#fff', borderRadius: '12px', flex: 1, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '10px' }}>Vagas Abertas</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a' }}>12</p>
        </div>
        <div style={{ padding: '25px', background: '#fff', borderRadius: '12px', flex: 1, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '10px' }}>Funcionários</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a' }}>45</p>
        </div>
      </div>

      {/* Gráfico */}
      <div style={{ background: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', height: '350px' }}>
        <h3 style={{ marginBottom: '20px', color: '#1e293b' }}>Evolução de Contratações</h3>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="qtd" fill="#2563eb" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
