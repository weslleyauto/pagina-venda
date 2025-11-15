import { CheckCircle2 } from 'lucide-react'

export default function ForWhom() {
  const reasons = [
    'Pessoas que já tentaram de tudo e não emagreceram',
    'Pessoas com fome à noite',
    'Pessoas com metabolismo lento',
    'Quem não tem tempo para treinar',
    'Quem quer resultado rápido e real',
    'Quem precisa de um método simples e direto',
    'Quem quer emagrecer sem sofrimento',
    'Quem busca saúde duradoura'
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900">
            Para <span className="text-blue-600">Quem é</span> o Método?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Se você se identifica com qualquer um destes pontos, o Reset foi criado para VOCÊ:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <p className="font-semibold text-slate-700 text-lg">{reason}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-black mb-6">
            Funciona para Absolutamente QUALQUER Pessoa
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            O Método Reset é adaptável a qualquer nível porque o sucesso não depende do treino ou dieta extrema — <span className="font-black">depende da sua MENTE</span>.
          </p>
          <div className="space-y-4">
            <div className="bg-blue-500 rounded-lg px-8 py-4">
              <p className="font-black text-xl">🧠 Mudança Mental = Resultado Real</p>
              <p className="text-sm mt-2 opacity-95">Estudos científicos comprovam: alterar padrões de pensamento determina 80% do sucesso em qualquer transformação corporal.</p>
            </div>
            <p className="font-bold opacity-95">Personalizado • Científico • Funciona Para Todos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
