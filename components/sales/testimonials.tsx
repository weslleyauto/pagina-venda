import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Carla Silva',
      age: 34,
      profession: 'Publicitária',
      weight: '7,3 kg',
      time: '30 dias',
      avatar: '/professional-woman-avatar.png',
      quote: 'Eu nunca imaginei que iria perder peso comendo tanto. O Método Reset mudou tudo pra mim. Hoje sou uma nova pessoa!'
    },
    {
      name: 'Rodrigo Martins',
      age: 41,
      profession: 'Empresário',
      weight: '5,8 kg',
      time: '30 dias',
      avatar: '/professional-man-avatar.png',
      quote: 'Eu vivia comendo de madrugada. O Reset eliminou minha fome noturna em 4 dias. Recuperei minha confiança.'
    },
    {
      name: 'Juliana Costa',
      age: 27,
      profession: 'Advogada',
      weight: '9 kg',
      time: '30 dias',
      avatar: '/young-woman-avatar.png',
      quote: 'É surreal! Pela primeira vez na vida eu não senti fome numa dieta. Recomendo para todas as minhas amigas.'
    },
    {
      name: 'Fernando Oliveira',
      age: 48,
      profession: 'Engenheiro',
      weight: '8,5 kg',
      time: '30 dias',
      avatar: '/mature-man-avatar.jpg',
      quote: 'Perdi peso, ganhei saúde e disposição. Minha família toda está fazendo o método agora.'
    },
    {
      name: 'Beatriz Lima',
      age: 32,
      profession: 'Professora',
      weight: '6,2 kg',
      time: '30 dias',
      avatar: '/woman-professional-teacher.jpg',
      quote: 'Não precisei gastar com academia. Perdi peso em casa, com receitas que toda a minha família come.'
    },
    {
      name: 'Lucas Pereira',
      age: 29,
      profession: 'Desenvolvedor',
      weight: '6,8 kg',
      time: '30 dias',
      avatar: '/young-man-avatar-tech.jpg',
      quote: 'Fácil, prático e eficaz. Finalmente encontrei algo que realmente funciona.'
    },
    {
      name: 'Amanda Santos',
      age: 35,
      profession: 'Nutricionista',
      weight: '10,1 kg',
      time: '30 dias',
      avatar: '/woman-health-professional.jpg',
      quote: 'Como profissional, fiquei impressionada com a base científica do método. Impecável!'
    },
    {
      name: 'Marco Dias',
      age: 45,
      profession: 'Gestor',
      weight: '7,6 kg',
      time: '30 dias',
      avatar: '/business-man-avatar.png',
      quote: 'Recuperei minha autoestima e saúde. Graças ao Reset, voltei a me sentir bem comigo mesmo.'
    }
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900">
            Veja o <span className="text-pink-600">Antes & Depois</span>
          </h2>
          <p className="text-xl text-slate-600">
            Depoimentos reais de pessoas que transformaram suas vidas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-pink-300 hover:shadow-lg transition-all"
            >
              {/* Stars */}
              <div className="text-yellow-400 text-sm mb-4">⭐⭐⭐⭐⭐</div>

              {/* Quote */}
              <p className="text-slate-700 font-semibold text-sm mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-red-400 flex-shrink-0 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-black text-slate-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-slate-600">{testimonial.age} anos • {testimonial.profession}</p>
                  <p className="text-xs font-bold text-green-600 mt-1">
                    -{testimonial.weight} em {testimonial.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Alunos Satisfeitos', value: '+15.000' },
            { label: 'Média Perda Peso', value: '7,2 kg' },
            { label: 'Taxa de Sucesso', value: '94%' },
            { label: 'Países Atingidos', value: '12' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-8 text-center"
            >
              <p className="text-3xl md:text-4xl font-black text-blue-600 mb-2">{stat.value}</p>
              <p className="font-bold text-slate-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
