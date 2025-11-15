import { BookOpen, ListChecks, UtensilsCrossed, Dumbbell, Leaf, LogIn, ShoppingCart, AlertCircle, Calendar, Brain } from 'lucide-react'

export default function Includes() {
  const items = [
    { icon: Brain, title: 'Estratégias Mentais', desc: 'Técnicas psicológicas contra compulsão alimentar' },
    { icon: BookOpen, title: 'Método Completo', desc: 'Sistema estruturado em módulos interativos' },
    { icon: UtensilsCrossed, title: 'Cardápios 30 Dias', desc: '4 opções diferentes de menu com receitas' },
    { icon: Calendar, title: 'Planner Interativo', desc: 'Acompanhamento em tempo real do progresso' },
    { icon: Dumbbell, title: 'Treinos Rápidos', desc: '3 níveis: iniciante, intermediário, avançado' },
    { icon: Leaf, title: 'Guia de Nutrição', desc: 'Bebidas e alimentos que aceleram metabolismo' },
    { icon: ShoppingCart, title: 'Guia de Compras', desc: 'Lista completa de alimentos permitidos' },
    { icon: Brain, title: 'Psicologia Comportamental', desc: 'Técnicas contra ansiedade e hábitos ruins' },
    { icon: AlertCircle, title: 'Guia de Emergência', desc: 'O que fazer em ataques de fome repentinos' },
    { icon: ListChecks, title: 'Checklist Diário', desc: 'Acompanhamento do progresso dia a dia' },
    { icon: Leaf, title: 'Receitas Adaptadas', desc: 'Personalizadas para seus gostos e limitações' },
    { icon: LogIn, title: 'Acesso Vitalício', desc: 'Atualizações permanentes e novos conteúdos' }
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900">
            O Que Você <span className="text-purple-600">Recebe</span>
          </h2>
          <p className="text-xl text-slate-600">
            Acesso completo à plataforma com tudo que você precisa para transformar em 30 dias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all hover:scale-105 transform"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-black mb-4">TUDO ORGANIZADO NA NOSSA PLATAFORMA</h3>
          <p className="text-lg opacity-95 mb-6">
            Você recebe acesso vitalício a um site completo com todos os recursos: cardápios, receitas, treinos, áudios, vídeos e guias. Tudo sincronizado no seu celular.
          </p>
          <p className="font-black text-xl">📱 100% Acessível pelo Celular • 🔄 Atualizações Permanentes</p>
        </div>
      </div>
    </section>
  )
}
