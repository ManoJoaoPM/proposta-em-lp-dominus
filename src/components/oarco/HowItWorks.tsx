import { motion } from 'framer-motion';
import { MessageCircle, BarChart3, ClipboardList, Handshake } from 'lucide-react';

const features = [
  {
    icon: <MessageCircle className="w-6 h-6 text-dominus" />,
    title: "WhatsApp",
    items: [
      "Grupo dedicado com atendimento humanizado",
      "Agendas semanais lançadas com antecedência",
      "Respostas sem enrolação"
    ]
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-dominus" />,
    title: "Consultoria",
    items: [
      "Gestão do projeto e dos resultados",
      "Reavaliação mensal do plano de ação",
      "Instrução 360° do negócio",
      "Acompanhamento ativo de vendas"
    ]
  },
  {
    icon: <ClipboardList className="w-6 h-6 text-dominus" />,
    title: "Relatório",
    items: [
      "Clareza total dos números do projeto",
      "Comparação mês a mês com benchmarks",
      "Atualização em tempo real via dashboard"
    ]
  },
  {
    icon: <Handshake className="w-6 h-6 text-dominus" />,
    title: "Ecossistema",
    items: [
      "Conexão com imobiliárias referência de mercado",
      "Troca de soluções periódica com cases reais",
      "Você escolhe as pautas das reuniões"
    ]
  }
];

export function HowItWorks() {
  return (
    <section id="como" className="py-24 md:py-32 bg-background-light text-text-dark">
      <div className="container mx-auto px-6 md:px-20 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-xs font-bold tracking-widest text-dominus uppercase mb-4 block">Acompanhamento</span>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4 text-text-dark">
            Como funciona o dia a dia <br className="hidden md:block" /> do projeto
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-dominus/10 text-2xl mb-6">
                {feat.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-text-dark">
                {feat.title}
              </h4>
              <ul className="space-y-3">
                {feat.items.map((item, j) => (
                  <li 
                    key={j} 
                    className="text-base leading-relaxed border-b border-black/5 pb-3 last:border-b-0 last:pb-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
