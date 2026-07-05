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


app.get('/ready', async (req, res) => {
    try {
        await pool.query('SELECT 1'); 
        res.status(200).send('Ready');
    } catch (err) {
        res.status(503).send('Database not reachable');
    }
});



app.use('/api/auth', authRoutes);

app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({ success: true, time: result.rows[0] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
