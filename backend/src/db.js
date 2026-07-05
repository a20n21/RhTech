import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

// Criando a conexão com o banco
const pool = new Pool({
  user: process.env.DB_USER || 'admin',
  host: process.env.DB_HOST || 'db',
  database: process.env.DB_NAME || 'rhtech_db',
  password: process.env.DB_PASSWORD || 'secretpassword',
  port: process.env.DB_PORT || 5432,
});

// Teste de conexão imediato
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Erro crítico ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  }
});

export default pool;
