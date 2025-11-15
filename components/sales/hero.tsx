'use client'

import { useState, useEffect } from 'react'
import { Heart, Check } from 'lucide-react'

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 47, seconds: 23 })
  const [spotsLeft, setSpotsLeft] = useState(27)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-white via-white to-slate-50 pt-24 pb-12 px-4 md:px-8 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Urgência */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-red-700">Promoção Expira Hoje!</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8 z-10">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-black leading-tight text-balance">
                <span className="text-slate-900">Transforme Seu Corpo em</span>{' '}
                <span className="text-red-600">30 Dias</span>
              </h1>

              <p className="text-2xl md:text-3xl font-bold text-slate-700 text-balance">
                Sem Dietas Extremas, Sem Academia, Sem Sofrimento!
              </p>

              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                O programa que funciona porque trabalha sua MENTE. Pesquisas comprovam: quem muda seus padrões mentais emagrece 3x mais. Acesso vitalício ao nosso site com todas as ferramentas que você precisa.
              </p>
            </div>

            {/* Selos de Confiança */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Check className="w-5 h-5 text-green-600" />
                Método Científico
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Check className="w-5 h-5 text-green-600" />
                +15.000 Alunos
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Check className="w-5 h-5 text-green-600" />
                Garantia 7 Dias
              </div>
            </div>

            {/* CTA Principal */}
            <div className="space-y-4 pt-6">
              <a 
                href="#checkout"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform inline-block text-center"
              >
                🎯 QUERO EMAGRECER EM 30 DIAS
              </a>

              <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4 text-center">
                <p className="text-sm font-bold text-orange-900">⏳ Oferta Especial</p>
                <p className="text-2xl font-black text-orange-600 mt-2">
                  De R$ 197 por <span className="text-3xl text-red-600">R$ 37</span>
                </p>
                <p className="text-xs text-orange-700 mt-2">• Acesso Imediato • Apenas {spotsLeft} Vagas</p>
              </div>
            </div>
          </div>

          {/* Cronômetro e Mockup */}
          <div className="space-y-8 flex flex-col items-center">
            {/* Cronômetro */}
            <div className="w-full max-w-sm bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-center text-sm font-bold uppercase tracking-widest opacity-90 mb-6">
                A Promoção Expira Em:
              </h3>
              <div className="flex justify-center gap-4 mb-4">
                <div className="flex flex-col items-center">
                  <div className="bg-red-800 bg-opacity-50 rounded-lg px-4 py-3 mb-2">
                    <p className="text-4xl font-black">{String(timeLeft.hours).padStart(2, '0')}</p>
                  </div>
                  <p className="text-xs font-semibold">Horas</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-4xl font-black mb-4">:</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-red-800 bg-opacity-50 rounded-lg px-4 py-3 mb-2">
                    <p className="text-4xl font-black">{String(timeLeft.minutes).padStart(2, '0')}</p>
                  </div>
                  <p className="text-xs font-semibold">Minutos</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-4xl font-black mb-4">:</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-red-800 bg-opacity-50 rounded-lg px-4 py-3 mb-2">
                    <p className="text-4xl font-black">{String(timeLeft.seconds).padStart(2, '0')}</p>
                  </div>
                  <p className="text-xs font-semibold">Segundos</p>
                </div>
              </div>
              <p className="text-center text-sm font-bold mt-6">🚨 Vagas Limitadas: {spotsLeft} Restantes</p>
            </div>

            {/* Mockup eBook */}
            <div className="w-full max-w-sm">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-1 shadow-2xl transform hover:scale-105 transition-transform">
                <div className="bg-white rounded-xl p-8 space-y-4 text-center">
                  <div className="text-6xl font-black bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">30</div>
                  <h4 className="text-2xl font-black text-slate-900">MÉTODO RESET</h4>
                  <p className="text-sm text-slate-600">Plataforma Completa de Transformação</p>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-xs text-slate-500 font-bold">Acesso Vitalício ao Site</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
