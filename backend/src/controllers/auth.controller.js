import pool from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email e senha serão obrigatórios" });
    }

    try {
        // Log para garantir que o pool está sendo acessado
        if (!pool) throw new Error("Pool de conexão com o banco não inicializado");

        const query = 'SELECT * FROM users WHERE email = $1';
        const result = await pool.query(query, [email]);
        
        if (result.rows.length === 0) {
            return res.status(401).json({ error: "Credenciais inválidas" });
        }

        const user = result.rows[0];
        
        // Verifica se a senha está correta
        const validPassword = await bcrypt.compare(password, user.password_hash);

        if (!validPassword) {
            return res.status(401).json({ error: "Credenciais inválidas" });
        }

        const token = jwt.sign({ id: user.id }, 'CHAVE_SUPER_SECRETA', { expiresIn: '1h' });

        res.json({ token, user: { id: user.id, email: user.email } });
    } catch (err) {
        console.error("ERRO NO LOGIN:", err.message);
        res.status(500).json({ 
            error: "Erro interno do servidor", 
            details: err.message 
        });
    }
};