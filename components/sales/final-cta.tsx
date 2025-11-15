import { CheckCircle2, Lock } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Headline Final */}
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900">
            Sua Transformação <span className="text-red-600">Começa AGORA</span>
          </h2>
          <p className="text-2xl font-bold text-slate-700 max-w-2xl mx-auto">
            Imagine-se 30 dias a partir de agora: mais magro, mais saudável, mais confiante
          </p>
        </div>

        {/* CTA Principal Gigante */}
        <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl mb-12 transform hover:scale-105 transition-transform">
          <div className="mb-6">
            <p className="text-sm font-black uppercase tracking-widest opacity-90 mb-4">
              ⏳ Promoção Válida Apenas Hoje
            </p>
            <h3 className="text-4xl md:text-5xl font-black mb-6">
              SIM, EU QUERO TRANSFORMAR MEU CORPO EM 30 DIAS
            </h3>
            <p className="text-xl font-bold opacity-95 mb-8">
              Garantia Total • Acesso Imediato • Apenas R$ 37 (Antes R$ 197)
            </p>
          </div>

          <button className="w-full bg-white text-red-600 font-black py-6 px-8 rounded-xl text-xl md:text-2xl hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl">
            🎯 COMPRAR AGORA COM DESCONTO DE 76%
          </button>

          <p className="text-sm font-bold mt-8 opacity-90">
            ✅ Acesso Vitalício • ✅ Suporte Incluído • ✅ 7 Dias de Garantia
          </p>
        </div>

        {/* Confiança */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border-2 border-slate-200 rounded-xl p-6 text-center">
            <Lock className="w-8 h-8 text-green-600 mx-auto mb-4" />
            <p className="font-black text-slate-900 mb-2">Seguro</p>
            <p className="text-sm text-slate-600">Pagamento 100% seguro e criptografado</p>
          </div>
          <div className="bg-white border-2 border-slate-200 rounded-xl p-6 text-center">
            <CheckCircle2 className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <p className="font-black text-slate-900 mb-2">Garantido</p>
            <p className="text-sm text-slate-600">Devolução em 7 dias, sem perguntas</p>
          </div>
          <div className="bg-white border-2 border-slate-200 rounded-xl p-6 text-center">
            <span className="text-4xl mb-4 block">🚀</span>
            <p className="font-black text-slate-900 mb-2">Imediato</p>
            <p className="text-sm text-slate-600">Acesso em segundos após compra</p>
          </div>
        </div>

        {/* Última Chance */}
        <div className="bg-amber-100 border-3 border-amber-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-black text-amber-900 mb-4">
            ⚠️ Esta é Sua Última Chance
          </h3>
          <p className="text-amber-900 font-bold mb-6 text-lg">
            Apenas 27 vagas com este preço. A promoção expira hoje. Amanhã o preço volta a R$ 197.
          </p>
          <p className="text-amber-800 font-bold">
            Não deixe essa oportunidade passar. Tome ação AGORA!
          </p>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-12 space-y-2">
          <p className="text-slate-600 text-sm">
            Abra as portas para uma vida saudável, com mais energia e confiança.
          </p>
          <p className="font-black text-slate-900 text-lg">
            Sua transformação começa em um clique ✨
          </p>
        </div>
      </div>
    </section>
  )
}
