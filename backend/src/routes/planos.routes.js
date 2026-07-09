import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    const planos = [
        { id: 1, nome: "Bronze", preco: "R$ 49,90", beneficios: ["Até 10 colaboradores", "Suporte por e-mail"] },
        { id: 2, nome: "Prata", preco: "R$ 99,90", beneficios: ["Até 50 colaboradores", "Suporte 24h", "Relatórios simples"] },
        { id: 3, nome: "Ouro", preco: "R$ 199,90", beneficios: ["Colaboradores ilimitados", "Suporte VIP", "Dashboard IA"] }
    ];
    res.json(planos);
});

export default router;
