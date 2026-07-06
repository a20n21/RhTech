import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

// Captura erros no pool para evitar derrubar o processo
pool.on('error', (err) => {
  console.error('Erro inesperado no Pool de banco de dados:', err.message);
});

export default pool;
