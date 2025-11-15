export default function Pricing() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900">
            Oferta <span className="text-red-600">Irresistível</span>
          </h2>
        </div>

        {/* Preço */}
        <div className="bg-gradient-to-br from-red-50 via-orange-50 to-white border-3 border-red-500 rounded-3xl p-12 md:p-16 text-center shadow-2xl mb-8">
          <p className="text-slate-600 text-lg font-bold mb-4">Preço Normal:</p>
          <p className="text-5xl text-slate-400 line-through font-bold mb-8">R$ 197</p>

          <div className="space-y-4 mb-8">
            <p className="text-sm font-black text-red-600 uppercase tracking-widest">🎉 Por Apenas Hoje 🎉</p>
            <div className="text-7xl md:text-8xl font-black text-red-600">R$ 37</div>
          </div>

          <div className="bg-green-100 border-2 border-green-600 rounded-xl p-6 mb-8">
            <p className="font-black text-green-700 text-2xl">ECONOMIZA: R$ 160</p>
            <p className="text-green-600 font-bold mt-2">Que é 81% de desconto! 🤑</p>
          </div>

          <div className="space-y-3 mb-8 text-left max-w-xl mx-auto">
            <h3 className="font-black text-slate-900 text-lg mb-6">TUDO ESTÁ INCLUÍDO:</h3>
            {[
              '✅ Plataforma Completa + 40+ Receitas',
              '✅ Cardápios de 30 Dias Personalizados',
              '✅ Treinos Adaptados (3 Níveis)',
              '✅ Estratégias Mentais Científicas',
              '✅ Suporte por Email',
              '✅ Acesso Vitalício (Atualizações Infinitas)',
              '✅ Garantia 7 Dias 100% Reembolso'
            ].map((item, idx) => (
              <p key={idx} className="font-semibold text-slate-700">
                {item}
              </p>
            ))}
          </div>

          <a 
            href="/link-hotmart"
            className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-black py-6 px-8 rounded-xl text-xl md:text-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 transform inline-block text-center mb-6"
          >
            🎯 QUERO MINHA VAGA AGORA
          </a>

          <p className="text-slate-600 font-semibold">
            ⚠️ Apenas 27 vagas disponíveis com este preço
          </p>
        </div>

        {/* Comparação */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-4xl mb-2">💰</p>
            <p className="font-black text-slate-900 mb-2">Menos Caro</p>
            <p className="text-sm text-slate-600">Que qualquer nutricionista profissional</p>
          </div>
          <div className="text-center">
            <p className="text-4xl mb-2">⏰</p>
            <p className="font-black text-slate-900 mb-2">Imediato</p>
            <p className="text-sm text-slate-600">Acesso em segundos à plataforma</p>
          </div>
          <div className="text-center">
            <p className="text-4xl mb-2">🔒</p>
            <p className="font-black text-slate-900 mb-2">Seguro</p>
            <p className="text-sm text-slate-600">7 dias de garantia total ou dinheiro de volta</p>
          </div>
        </div>
      </div>
    </section>
  )
}
