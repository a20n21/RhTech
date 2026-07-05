import { useState, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password
      });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard'); // Redireciona para o portal após login
    } catch (error: any) {
      setStatus('Credenciais inválidas ou erro no servidor.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ fontSize: '1.8rem', textAlign: 'center', color: '#1e293b', marginBottom: '24px' }}>RhTech Portal</h1>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input type="email" placeholder="Email corporativo" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ padding: '12px', borderRadius: '6px', border: '1px solid #e2e8f0' }} />
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ padding: '12px', borderRadius: '6px', border: '1px solid #e2e8f0' }} />
          <button type="submit" style={{ padding: '12px', background: '#0f172a', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Entrar</button>
        </form>
        {status && <p style={{ color: '#ef4444', textAlign: 'center', marginTop: '16px' }}>{status}</p>}
      </div>
    </div>
  );
}
