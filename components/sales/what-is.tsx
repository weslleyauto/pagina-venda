import { Zap, Heart, Flame, Brain, TrendingUp } from 'lucide-react'

export default function WhatIs() {
  const benefits = [
    { icon: Flame, title: 'Regula a Fome', desc: 'Controle total sobre a fome sem passar por privação' },
    { icon: Heart, title: 'Aumenta Saciedade', desc: 'Mantenha-se satisfeito comendo menos' },
    { icon: TrendingUp, title: 'Melhora Metabolismo', desc: 'Acelera a queima de gordura corporal' },
    { icon: Brain, title: 'Reduz Compulsão', desc: 'Eliminação de gatilhos alimentares' },
    { icon: Zap, title: 'Energia Total', desc: 'Mais disposição durante todo o dia' },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 text-balance">
            O Que é o <span className="text-red-600">Método Reset?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Um sistema completo que combina nutrição estratégica, rotina de hábitos, plano alimentar personalizado, receitas fit e técnicas psicológicas comprovadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div
                key={idx}
                className="group bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-red-300 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
                    <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Como Funciona */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-slate-900">
              Resultado em <span className="text-green-600">7 dias</span>
            </h3>
            <ul className="space-y-3">
              {[
                'Redução da fome noturna',
                'Aumento de energia',
                'Melhor disposição',
                'Primeiros quilos perdidos',
                'Melhora no humor e na autoestima'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <p className="text-center text-sm font-bold text-green-700 mb-4">Primeira Semana</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Fome', value: '-80%' },
                { label: 'Energia', value: '+150%' },
                { label: 'Peso', value: '-2 a 3kg' },
                { label: 'Disposição', value: 'Máxima' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 text-center">
                  <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
                  <p className="text-2xl font-black text-green-600">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
