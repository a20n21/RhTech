import { useState, FormEvent } from 'react';
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
      // Usando rota relativa para que o Ingress faça o roteamento dinâmico em produção
      const response = await axios.post('/api/auth/login', {
        email,
        password
      });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard'); 
    } catch (error: any) {
      setStatus('Credenciais inválidas ou erro no servidor.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.logo}>RH</div>
          <h1 style={styles.title}>RhTech Portal</h1>
          <p style={styles.subtitle}>Entre com suas credenciais corporativas</p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>E-mail Corporativo</label>
            <input 
              type="email" 
              placeholder="nome@empresa.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Senha</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              style={styles.input}
            />
          </div>

          {/* Erro */}
          {status && (
            <div style={styles.errorBox}>
              {status}
            </div>
          )}

          {/* Botão */}
          <button 
            type="submit" 
            disabled={isLoading}
            style={{
              ...styles.button,
              ...(isLoading ? styles.buttonDisabled : {})
            }}
          >
            {isLoading ? 'Carregando...' : 'Entrar no Painel'}
          </button>
        </form>

        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.footerText}>Matias IT Consulting &copy; 2026</p>
        </div>
      </div>
    </div>
  );
}

// Estiloss puros em objetos JavaScript (sem dependência de Tailwind)
const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f8fafc',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    padding: '20px'
  },
  card: {
    background: 'white',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(30, 41, 59, 0.05), 0 20px 48px rgba(30, 41, 59, 0.05)',
    width: '100%',
    maxWidth: '400px',
    border: '1px solid #f1f5f9',
    boxSizing: 'border-box' as const
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '32px'
  },
  logo: {
    inlineFlex: 'display',
    width: '48px',
    height: '48px',
    lineHeight: '48px',
    borderRadius: '12px',
    background: '#0f172a',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '0 auto 12px auto',
    textAlign: 'center' as const
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#0f172a',
    margin: '0 0 6px 0',
    letterSpacing: '-0.5px'
  },
  subtitle: {
    fontSize: '14px',
    color: '#64748b',
    margin: 0
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px'
  },
  label: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#475569',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px'
  },
  input: {
    padding: '12px 16px',
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
    fontSize: '14px',
    color: '#0f172a',
    outline: 'none',
    transition: 'all 0.2s ease',
    boxSizing: 'border-box' as const
  },
  errorBox: {
    padding: '12px',
    background: '#fef2f2',
    border: '1px solid #fee2e2',
    borderRadius: '10px',
    color: '#ef4444',
    fontSize: '13px',
    fontWeight: '500',
    textAlign: 'center' as const
  },
  button: {
    padding: '14px',
    background: '#0f172a',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)'
  },
  buttonDisabled: {
    background: '#94a3b8',
    cursor: 'not-allowed'
  },
  footer: {
    marginTop: '32px',
    paddingTop: '20px',
    borderTop: '1px solid #f1f5f9',
    textAlign: 'center' as const
  },
  footerText: {
    fontSize: '12px',
    color: '#94a3b8',
    margin: 0
  }
};
// Cache breaker: 1783466612
