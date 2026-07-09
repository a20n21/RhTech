import express from 'express';
import cors from 'cors';
import pool from './src/db.js';
import authRoutes from './src/routes/auth.routes.js';
import planosRoutes from './src/routes/planos.routes.js'; // Importando a nova rota de planos

const app = express();
app.use(cors());
app.use(express.json());

// Apenas health check, sem banco de dados
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Apenas ready check, sem banco de dados
app.get('/ready', (req, res) => {
    res.status(200).send('Ready');
});

app.use('/api/auth', authRoutes);
app.use('/api/planos', planosRoutes); // Registrando a rota de planos

// O banco SÓ é acessado aqui, quando alguém realmente chama esta rota
app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({ success: true, time: result.rows[0] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
