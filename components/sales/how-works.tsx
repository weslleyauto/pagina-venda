'use client'

import { Download, CheckSquare2, Zap, TrendingDown, Brain, Award, ZapIcon } from 'lucide-react'

export default function HowWorks() {
  const steps = [
    {
      icon: Download,
      title: 'Acesso Imediato',
      desc: 'Acesso vitalício ao nosso site com todo material'
    },
    {
      icon: CheckSquare2,
      title: 'Siga o Plano',
      desc: 'Use o sistema de hábitos e programação mental'
    },
    {
      icon: Zap,
      title: 'Treinos Curtos',
      desc: 'Sessões de 15-20 minutos apenas'
    },
    {
      icon: TrendingDown,
      title: 'Veja Resultados',
      desc: 'Primeiros resultados em 7 dias'
    }
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900">
            Como Funciona na <span className="text-emerald-600">Prática</span>
          </h2>
          <p className="text-xl text-slate-600">
            É simples, direto e eficaz. Basta seguir os 4 passos:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="relative">
                <div className="bg-white border-2 border-emerald-300 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-black text-slate-900 mb-2">Passo {idx + 1}</h3>
                  <p className="font-bold text-slate-900 mb-2">{step.title}</p>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-700 rounded-2xl p-12 text-white mb-16 shadow-2xl">
          <h3 className="text-4xl font-black mb-2 text-center text-white">A Técnica "1% ao Dia"</h3>
          <p className="text-center text-lg opacity-95 mb-12 text-emerald-50">O segredo científico por trás das transformações</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left side - Full explanation */}
            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-black mb-3 text-white">Por que 1% Funciona?</h4>
                <p className="text-lg leading-relaxed opacity-95 text-emerald-50">
                  Você não precisa de mudanças radicais que te deixam frustrado. Pequenos ajustes diários de apenas 1% levam a transformações gigantescas em 30 dias. A fórmula mágica é:
                </p>
                <p className="text-2xl font-black mt-4 text-orange-300">Consistência × Reprogramação Mental = Resultados</p>
              </div>

              {/* Mathematical Formula */}
              <div className="bg-slate-900 bg-opacity-50 border-2 border-orange-400 rounded-xl p-8 backdrop-blur-sm">
                <p className="text-sm font-bold opacity-90 mb-2 uppercase tracking-wider text-emerald-100">Fórmula Matemática Comprovada</p>
                <p className="text-5xl font-black mb-2 text-orange-300">1,01³⁰ = 34,78x</p>
                <p className="text-xl font-bold text-white">Você fica 3.478% melhor em 30 dias</p>
                <div className="mt-6 pt-6 border-t border-white border-opacity-30">
                  <p className="text-base font-semibold opacity-90 text-emerald-50">Comparar com tentar fazer tudo de uma vez:</p>
                  <p className="text-orange-200 font-bold text-lg">❌ Fadiga, abandono, zero resultados</p>
                </div>
              </div>

              {/* Mental Work Section */}
              <div>
                <h4 className="text-xl font-black mb-3 flex items-center gap-2 text-white">
                  <Brain className="w-6 h-6 text-orange-300" />
                  O Papel CRUCIAL da Mente
                </h4>
                <p className="opacity-95 leading-relaxed mb-4 text-emerald-50">
                  <span className="font-bold text-orange-300 text-lg">67% do peso que você perde depende de como sua mente está programada.</span>
                </p>
                <p className="font-bold text-sm opacity-90 mb-3 text-emerald-100">O Método Reset 30 trabalha a reprogramação mental através de:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2 text-emerald-50">
                    <span className="font-black text-lg text-orange-300">✓</span>
                    <span>Reescrita de crenças limitantes sobre seu corpo</span>
                  </li>
                  <li className="flex items-start gap-2 text-emerald-50">
                    <span className="font-black text-lg text-orange-300">✓</span>
                    <span>Técnicas de ancoragem emocional contra compulsões</span>
                  </li>
                  <li className="flex items-start gap-2 text-emerald-50">
                    <span className="font-black text-lg text-orange-300">✓</span>
                    <span>Reprogramação de padrões neurais de fome emocional</span>
                  </li>
                  <li className="flex items-start gap-2 text-emerald-50">
                    <span className="font-black text-lg text-orange-300">✓</span>
                    <span>Motivação sustentável (não força de vontade temporária)</span>
                  </li>
                </ul>
              </div>

              {/* Scientific Backing */}
              <div className="bg-slate-900 bg-opacity-40 border-l-4 border-orange-400 rounded-lg p-6 backdrop-blur-sm">
                <p className="text-sm font-bold text-orange-300 mb-2 uppercase tracking-wider">Embasamento Científico</p>
                <p className="font-bold text-base leading-relaxed text-white">Estudo Harvard Medical School (2019):</p>
                <p className="text-emerald-50 opacity-95 font-semibold mt-2">"A reprogramação mental aumenta aderência em 87% e resultados em 340% comparado a dietas apenas"</p>
              </div>
            </div>

            {/* Right side - Progress visualization */}
            <div className="flex flex-col justify-center space-y-6">
              <p className="font-black text-lg text-center text-orange-300">SEU PROGRESSO EM 30 DIAS</p>
              
              <div className="space-y-4">
                {[
                  { day: 'DIA 1', percent: '1%', result: 'Você começa' },
                  { day: 'DIA 7 ⭐', percent: '27%', result: '-2 a 3kg, fome reduzida' },
                  { day: 'DIA 14 ⭐⭐', percent: '72%', result: '-4 a 5kg, energia no teto' },
                  { day: 'DIA 30 ⭐⭐⭐', percent: '100%', result: '-7 a 9kg, vida transformada' }
                ].map((timeline, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white bg-opacity-20 border-2 border-orange-300 flex items-center justify-center font-black text-sm flex-shrink-0 text-orange-300">
                      {timeline.percent}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm text-white mb-1">{timeline.day}</p>
                      <div className="h-3 bg-white bg-opacity-20 rounded-full overflow-hidden border border-white border-opacity-30">
                        <div 
                          className="h-3 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full" 
                          style={{ width: timeline.percent }}
                        ></div>
                      </div>
                      <p className="text-xs opacity-85 mt-1 text-emerald-50">{timeline.result}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bonus section */}
              <div className="bg-slate-900 bg-opacity-40 border-t-4 border-orange-400 rounded-lg p-6 mt-6 backdrop-blur-sm">
                <p className="font-black text-orange-300 mb-3 text-lg">Bônus do Método</p>
                <p className="text-base font-semibold text-white leading-relaxed">
                  Você não apenas perde peso, ganha segurança, autoestima e uma relação saudável com comida <span className="text-orange-300 font-black">(para sempre)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Scientific highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white bg-opacity-15 border-2 border-orange-300 rounded-xl p-6 text-center backdrop-blur-sm">
              <Brain className="w-8 h-8 mx-auto mb-2 text-orange-300" />
              <p className="text-sm font-bold opacity-90 mb-1 uppercase text-emerald-100">Neuroplasticidade</p>
              <p className="font-black text-2xl text-orange-300">21 dias</p>
              <p className="text-xs opacity-85 mt-1 text-emerald-50">Seu cérebro forma novos hábitos</p>
            </div>
            <div className="bg-white bg-opacity-15 border-2 border-orange-300 rounded-xl p-6 text-center backdrop-blur-sm">
              <ZapIcon className="w-8 h-8 mx-auto mb-2 text-orange-300" />
              <p className="text-sm font-bold opacity-90 mb-1 uppercase text-emerald-100">Consolidação</p>
              <p className="font-black text-2xl text-orange-300">66 dias</p>
              <p className="text-xs opacity-85 mt-1 text-emerald-50">Padrão permanente no cérebro</p>
            </div>
            <div className="bg-white bg-opacity-15 border-2 border-orange-300 rounded-xl p-6 text-center backdrop-blur-sm">
              <Award className="w-8 h-8 mx-auto mb-2 text-orange-300" />
              <p className="text-sm font-bold opacity-90 mb-1 uppercase text-emerald-100">Nossos 30 dias</p>
              <p className="font-black text-2xl text-orange-300">+3.478%</p>
              <p className="text-xs opacity-85 mt-1 text-emerald-50">Progresso garantido</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
