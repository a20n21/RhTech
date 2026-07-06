import express from 'express';
import cors from 'cors';
import pool from './src/db.js';
import authRoutes from './src/routes/auth.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// A rota /ready agora indica apenas que o app está ativo
// Isso impede o Kubernetes de tentar reiniciar o pod por falha de conexão temporária
app.get('/ready', (req, res) => {
    res.status(200).send('Ready');
});

app.use('/api/auth', authRoutes);

app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({ success: true, time: result.rows[0] });
    } catch (err) {
        console.error('Erro na query de teste:', err.message);
        res.status(500).json({ error: 'Database connection error' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
