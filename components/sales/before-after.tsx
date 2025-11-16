'use client'

export default function BeforeAfter() {
  const transformations = [
    {
      name: 'Marina S.',
      kg: '-8,1kg',
      time: '28 dias',
      image: '/mulher-antes-depois-perda-peso-resultado.jpg',
      highlight: 'Trabalhou mais focado nos hábitos e costumes melhorou tudo'
    },
    {
      name: 'Roberto T.',
      kg: '-8,2kg',
      time: '31 dias',
      image: '/homem-transformacao-corpo-fitness-resultado.jpg',
      highlight: 'Primeira vez com resultado real com produto digital'
    },
    {
      name: 'Juliana M.',
      kg: '-10,2kg',
      time: '33 dias',
      image: '/mulher-confiante-resultado-transformacao.jpg',
      highlight: 'Recuperei minha autoestima'
    },
    {
      name: 'Carlos A.',
      kg: '-8,9kg',
      time: '43 dias',
      image: '/homem-antes-depois-magreza-conquista.jpg',
      highlight: 'Uni o método com academia e consegui perder a pança chata kkkk'
    }
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900">
            Resultados Reais em <span className="text-red-600">30 Dias</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Veja as transformações de pessoas que trabalharam sua mente e conquistaram seus corpos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transformations.map((trans, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105">
              <div className="relative h-72 overflow-hidden bg-gray-200">
                <img 
                  src={trans.image || "/placeholder.svg"} 
                  alt={`Transformação de ${trans.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <div className="text-3xl font-black text-red-600 mb-2">{trans.kg}</div>
                <p className="font-bold text-slate-900 mb-1">{trans.name}</p>
                <p className="text-sm text-slate-600 mb-4">Em {trans.time}</p>
                <p className="text-sm font-semibold text-slate-700 italic">"{trans.highlight}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Destaque */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-black mb-4">A Diferença: Trabalho Mental</h3>
          <p className="text-lg opacity-95 mb-6 max-w-2xl mx-auto">
            Todos os resultados acima vêm do mesmo princípio: mudança mental = transformação real. Quando a mente muda, o corpo segue naturalmente. É ciência, não magia.
          </p>
          <p className="font-black text-xl">Seus Resultados Começam Aqui</p>
        </div>
      </div>
    </section>
  )
}
