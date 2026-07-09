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
          <div style={styles.logo}>RH</div>
          <h1 style={styles.title}>RhTech Portal</h1>
          <p style={styles.subtitle}>Acesso corporativo seguro</p>
        </div>

        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputWrapper}>
            <input 
              type="email" 
              placeholder="seu.email@empresa.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              style={styles.input}
            />
          </div>

          <div style={styles.inputWrapper}>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              style={styles.input}
            />
          </div>

          {status && <div style={styles.errorBox}>{status}</div>}

          <button type="submit" disabled={isLoading} style={styles.button}>
            {isLoading ? 'Autenticando...' : 'Acessar o sistema'}
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
    background: '#0f172a',
    backgroundImage: 'radial-gradient(circle at 50% 50%, #1e293b 0%, #0f172a 100%)',
    fontFamily: "'Inter', sans-serif"
  },
  card: {
    background: 'rgba(30, 41, 59, 0.7)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '40px',
    borderRadius: '20px',
    width: '100%',
    maxWidth: '380px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
  },
  logo: {
    width: '50px',
    height: '50px',
    background: '#3b82f6',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: '900',
    fontSize: '20px',
    margin: '0 auto 20px auto'
  },
  header: { textAlign: 'center' as const, marginBottom: '32px' },
  title: { fontSize: '24px', color: '#fff', margin: '0 0 8px 0', fontWeight: '700' },
  subtitle: { fontSize: '14px', color: '#94a3b8', margin: 0 },
  form: { display: 'flex', flexDirection: 'column' as const, gap: '20px' },
  inputWrapper: { position: 'relative' as const },
  input: {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '10px',
    border: '1px solid #334155',
    background: '#0f172a',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box' as const,
    transition: 'border-color 0.2s'
  },
  errorBox: {
    padding: '10px',
    background: 'rgba(220, 38, 38, 0.1)',
    color: '#c71313',
    borderRadius: '8px',
    fontSize: '12px',
    textAlign: 'center' as const,
    border: '1px solid rgba(220, 38, 38, 0.2)'
  },
  button: {
    width: '100%',
    padding: '14px',
    background: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.2s'
  }
};

