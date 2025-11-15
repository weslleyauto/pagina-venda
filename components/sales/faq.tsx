'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const faqs = [
    {
      q: 'Funciona sem ir à academia?',
      a: 'Sim! Os treinos estão inclusos no método e podem ser feitos em casa em apenas 15-20 minutos.'
    },
    {
      q: 'Vou passar fome?',
      a: 'Não. O método usa estratégias de alta saciedade com proteína. Muitos alunos dizem que comem MAIS que antes.'
    },
    {
      q: 'Pode ter efeito sanfona?',
      a: 'Não, porque você está aprendendo hábitos duradouros. Após 30 dias, você entende como emagrecer de forma sustentável.'
    },
    {
      q: 'Pode para iniciantes?',
      a: 'Claro! O método é 100% adaptável para qualquer nível. Tem passo-a-passo para tudo.'
    },
    {
      q: 'Quanto tempo dedico por dia?',
      a: 'Em média 30 minutos: preparar refeição (15min) + treino (15min). Pode fazer menos se quiser.'
    },
    {
      q: 'Preciso contar calorias?',
      a: 'Não! O método usa cardápios prontos. Você só segue o que está no plano.'
    },
    {
      q: 'Funciona com restrições alimentares?',
      a: 'Sim! Temos versões vegetariana, vegana, sem lactose e sem glúten do plano alimentar.'
    },
    {
      q: 'Posso voltar? A garantia é real?',
      a: 'Sim. Se em 7 dias você não sentir mudanças, devolve 100%. Nenhuma pegadinha.'
    },
    {
      q: 'É online ou presencial?',
      a: 'Totalmente online! Você acessa pelo celular, tablet ou computador quando quiser.'
    },
    {
      q: 'Quanto tempo demora para ver resultados?',
      a: 'Muitos alunos veem mudanças em 3-4 dias (redução de fome). Os primeiros quilos em 7-10 dias.'
    }
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900">
            Perguntas <span className="text-blue-600">Frequentes</span>
          </h2>
          <p className="text-xl text-slate-600">
            Dúvidas resolvidas sobre o Método Reset
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-2 border-slate-200 rounded-xl overflow-hidden hover:border-blue-400 transition-colors"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 flex items-start justify-between gap-4 bg-white hover:bg-slate-50 transition-colors text-left"
              >
                <span className="font-bold text-slate-900 flex-1">{faq.q}</span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIdx === idx && (
                <div className="bg-blue-50 px-6 py-4 border-t-2 border-blue-200">
                  <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
