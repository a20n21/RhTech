import { useState } from 'react';
import type { FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');
    
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard'); 
    } catch (error: any) {
      setStatus('Credenciais inválidas. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.glowLogo}>RH</div>
          <h1 style={styles.title}>Bem-vindo ao RhTech</h1>
          <p style={styles.subtitle}>Gerenciamento inteligente para sua equipe</p>
        </div>

        <form onSubmit={handleLogin} style={styles.form}>
          <input 
            type="email" 
            placeholder="E-mail corporativo" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={styles.input}
          />

          <input 
            type="password" 
            placeholder="Sua senha secreta" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={styles.input}
          />

          {status && <div style={styles.errorBox}>{status}</div>}

          <button type="submit" disabled={isLoading} style={styles.button}>
            {isLoading ? 'Autenticando...' : 'Acessar Plataforma'}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    padding: '20px',
    fontFamily: "'Inter', system-ui, sans-serif"
  },
  card: {
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '48px',
    borderRadius: '24px',
    width: '100%',
    maxWidth: '420px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(10px)'
  },
  glowLogo: {
    width: '60px',
    height: '60px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: '800',
    margin: '0 auto 20px auto',
    boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)'
  },
  header: { textAlign: 'center' as const, marginBottom: '32px' },
  title: { fontSize: '28px', color: '#0f172a', margin: '0 0 8px 0', fontWeight: '800' },
  subtitle: { fontSize: '14px', color: '#64748b', margin: 0 },
  form: { display: 'flex', flexDirection: 'column' as const, gap: '16px' },
  input: {
    padding: '16px 20px',
    borderRadius: '12px',
    border: '2px solid transparent',
    background: '#f1f5f9',
    fontSize: '15px',
    outline: 'none',
    transition: 'all 0.3s ease'
  },
  errorBox: {
    padding: '12px',
    background: '#fef2f2',
    color: '#b91c1c',
    borderRadius: '10px',
    fontSize: '13px',
    textAlign: 'center' as const
  },
  button: {
    padding: '16px',
    background: '#242527',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s, background 0.2s'
  }
};

