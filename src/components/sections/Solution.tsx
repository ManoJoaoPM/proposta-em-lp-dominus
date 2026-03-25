import { Target, Search, PenTool, Users, LineChart, Layers } from "lucide-react";

const solutions = [
  {
    icon: Target,
    title: "Gestão Meta Ads",
    desc: "Instagram e Facebook com segmentação por perfil de imóvel e público comprador."
  },
  {
    icon: Search,
    title: "Gestão Google Ads",
    desc: "Search + Display capturando quem já está buscando."
  },
  {
    icon: PenTool,
    title: "Criativos com estratégia",
    desc: "Cada peça é pensada para um momento do funil, não produzida em série."
  },
  {
    icon: Users,
    title: "Atendimento diário",
    desc: "Grupo dedicado, sem ticket, sem fila, sem enrolação."
  },
  {
    icon: LineChart,
    title: "Reunião semanal",
    desc: "Toda semana, o que funcionou, o que ajustamos e será feito. Sem surpresa no fim do mês com boleto que não valeu a pena."
  },
  {
    icon: Layers,
    title: "Funis modulares",
    desc: "Estratégia separada para médio padrão e alto padrão."
  }
];

export function Solution() {
  return (
    <section className="py-24 bg-background border-b border-dominus/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 leading-tight">
            Meta Ads + Google Ads. <br />
            <span className="text-gold">Com estratégia de verdade.</span>
          </h2>
          <p className="text-xl text-primary font-medium mb-4">
            Cada campanha tem um papel no funil. Cada criativo tem uma razão de existir.
          </p>
          <p className="text-lg text-secondary">
            Não entregamos campanhas no ar e relatório no fim do mês. Entregamos um canal de aquisição 
            sólido para o portfólio da Inglaterra, de terceiros a lançamentos, do médio ao alto padrão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <div 
              key={index} 
              className="bg-background-alt p-8 border border-white/5 hover:border-dominus/50 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-dominus/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-dominus" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
