export default function SocialProof() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Prova Social Impressionante
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* WhatsApp Conversation */}
          <div className="bg-gradient-to-b from-green-50 to-white border-2 border-green-300 rounded-2xl p-6 shadow-lg">
            <div className="bg-green-600 text-white rounded-t-2xl -m-6 mb-6 p-4 text-center">
              <p className="font-bold">Feedback no WhatsApp</p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-3 border-l-4 border-green-600">
                <p className="text-sm text-slate-700 font-semibold">Maria:</p>
                <p className="text-sm text-slate-600 mt-1">"Que método incrível! Perdi 6kg em 3 semanas e não sinto fome"</p>
              </div>
              <div className="bg-white rounded-lg p-3 border-l-4 border-blue-600">
                <p className="text-sm text-slate-700 font-semibold">João:</p>
                <p className="text-sm text-slate-600 mt-1">"Meu metabolismo acelerou muitooo 🔥"</p>
              </div>
              <div className="bg-white rounded-lg p-3 border-l-4 border-green-600">
                <p className="text-sm text-slate-700 font-semibold">Paula:</p>
                <p className="text-sm text-slate-600 mt-1">"Melhor investimento que fiz! Vale cada real!"</p>
              </div>
            </div>
          </div>

          {/* Before & After */}
          <div className="bg-gradient-to-b from-orange-50 to-white border-2 border-orange-300 rounded-2xl p-6 shadow-lg">
            <h3 className="font-black text-slate-900 text-center mb-6">Transformação Real</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-b from-red-300 to-red-400 rounded-xl h-40 flex items-center justify-center text-center">
                <div>
                  <p className="text-white font-black text-2xl">ANTES</p>
                  <p className="text-white text-sm font-bold">85 kg</p>
                </div>
              </div>
              <div className="bg-gradient-to-b from-green-300 to-green-400 rounded-xl h-40 flex items-center justify-center text-center">
                <div>
                  <p className="text-white font-black text-2xl">DEPOIS</p>
                  <p className="text-white text-sm font-bold">77 kg</p>
                </div>
              </div>
            </div>
            <p className="text-center text-sm font-bold text-slate-700 mt-6">30 dias de transformação</p>
          </div>

          {/* Seals */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-300 rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">🏆</div>
              <p className="font-black text-slate-900">Melhor Método</p>
              <p className="text-sm text-slate-600">De Emagrecimento 2024</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-300 rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">✅</div>
              <p className="font-black text-slate-900">Comprovado</p>
              <p className="text-sm text-slate-600">Baseado em Ciência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
