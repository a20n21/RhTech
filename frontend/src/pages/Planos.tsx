// frontend/pages/Planos.tsx
export default function Planos() {
  const planos = [
    {
      nome: "Consultoria Básica",
      preco: "R$ 499",
      descricao: "Ideal para pequenas empresas que precisam de organização inicial.",
      beneficios: ["Análise de Infra", "Suporte 8x5", "Monitoramento Básico"]
    },
    {
      nome: "Consultoria Pro",
      preco: "R$ 999",
      descricao: "Automação completa e observabilidade avançada.",
      beneficios: ["Tudo do Básico", "IaC (Terraform)", "Pipelines CI/CD", "Alertas Zabbix"]
    },
    {
      nome: "Cloud Architect",
      preco: "Sob consulta",
      descricao: "Soluções sob medida em AWS.",
      beneficios: ["Projetos Personalizados", "Suporte 24/7", "FinOps Especializado"]
    }
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nossos Planos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {planos.map((plano, index) => (
          <div key={index} className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{plano.nome}</h2>
            <p className="text-3xl font-bold text-blue-600 mb-4">{plano.preco}</p>
            <p className="text-gray-600 mb-6">{plano.descricao}</p>
            
            <ul className="space-y-2 mb-6">
              {plano.beneficios.map((b, i) => (
                <li key={i} className="flex items-center text-sm text-gray-700">
                  <span className="mr-2">✅</span> {b}
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Escolher Plano
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
