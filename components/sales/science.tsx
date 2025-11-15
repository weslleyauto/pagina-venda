import { Brain, Beaker, BookOpen, Zap } from 'lucide-react'

export default function Science() {
  const concepts = [
    {
      icon: Brain,
      title: 'O Poder da Mente',
      desc: 'Pesquisa de Harvard: alterar padrões mentais determina 80% do sucesso em emagrecimento. Trabalhamos sua mente para mudanças permanentes.'
    },
    {
      icon: Zap,
      title: 'Déficit Inteligente',
      desc: 'Não é sobre comer menos, é sobre comer CERTO. Criamos padrões hormonais que reduzem naturalmente o apetite sem sofrimento.'
    },
    {
      icon: BookOpen,
      title: 'Proteína e Saciedade',
      desc: 'Estudos mostram: alto consumo de proteína mantém você satisfeito por mais tempo, reduzindo desejos de doces e junk food.'
    },
    {
      icon: Beaker,
      title: 'Gatilhos Alimentares',
      desc: 'Técnicas psicológicas comprovadas para eliminar compulsão, ansiedade alimentar e quebrar hábitos que causam ganho de peso.'
    }
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900">
            Por Que o Reset <span className="text-green-600">Realmente Funciona</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ciência comprovada por mais de 15 mil transformações reais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {concepts.map((concept, idx) => {
            const Icon = concept.icon
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-emerald-50 to-white border-2 border-green-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">{concept.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{concept.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-black text-slate-900 text-center mb-12">
            Sua Jornada em 30 Dias
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { week: 'Semana 1', title: 'Adaptação', items: ['Reduz fome', 'Mais energia', '2-3kg'] },
              { week: 'Semana 2', title: 'Aceleração', items: ['Metabolismo +', 'Claro de pele', '3-4kg'] },
              { week: 'Semana 3', title: 'Transformação', items: ['Roupas folgadas', 'Confiança', '4-5kg'] },
              { week: 'Semana 4', title: 'Resultado Final', items: ['Corpo trans-f', 'Vida nova', '7-9kg'] }
            ].map((phase, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-gradient-to-b from-red-600 to-orange-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="font-black text-xl">{idx + 1}</span>
                </div>
                <h4 className="font-black text-lg text-slate-900 mb-2">{phase.week}</h4>
                <p className="text-sm font-bold text-red-600 mb-4">{phase.title}</p>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="text-xs text-slate-600">✓ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
