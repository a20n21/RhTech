import express from 'express';
import cors from 'cors';
import pool from './src/db.js';
import authRoutes from './src/routes/auth.routes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);

// Rota de teste do banco (opcional, mas bom para debug)
app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({ success: true, time: result.rows[0] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Inicialização
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
