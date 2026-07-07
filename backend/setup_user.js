import 'dotenv/config';
import bcrypt from 'bcrypt';
import pool from './src/db.js';

const email = 'rhtech@rh.com';
const plainPassword = '12345';

async function createUser() {
    try {
        const hash = await bcrypt.hash(plainPassword, 10);
        await pool.query('INSERT INTO users (email, password_hash) VALUES ($1, $2)', [email, hash]);
        console.log('Usuário criado com sucesso!');
    } catch (err) {
        console.error('Erro ao criar usuário:', err.message);
    } finally {
        process.exit();
    }
}

createUser();
