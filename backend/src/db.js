import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

// Se a variável DATABASE_URL existir (comum no Docker), usa ela. 
// Se não, usa as variáveis individuais do Kubernetes.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Tenta a URL primeiro
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
  connectionTimeoutMillis: 5000,
  max: 20
});

pool.on('error', (err) => {
  console.error('Erro no Pool:', err.message);
});

export default pool;