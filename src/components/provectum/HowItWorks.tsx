import { motion } from 'framer-motion';

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-background-light text-text-dark">
      <div className="container mx-auto px-6 md:px-20 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-xs font-bold tracking-widest text-dominus uppercase mb-4 block">Processo e Acompanhamento</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Como funciona o acompanhamento
          </h2>
        </motion.div>

        {/* 4 Pilares de Acompanhamento - Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20 max-w-5xl mx-auto">
          {[
            {
              title: "WhatsApp Dedicado",
              desc: "Atendimento humanizado em grupo exclusivo. Agenda semanal lançada antecipadamente. Sem espera. Sem enrolação para responder."
            },
            {
              title: "Análises Periódicas",
              desc: "Gestão do projeto e dos resultados. Reavaliação do plano de ação sempre que necessário. Instrução 360° do negócio. Acompanhamento de vendas."
            },
            {
              title: "Relatório Mensal",
              desc: "Clareza dos números do projeto. Comparação mês a mês. Atualização em tempo real do desempenho."
            },
            {
              title: "Análise Comercial",
              desc: "Estudo de campo (análise de concorrentes). Metrificação do funil de vendas. Cliente oculto na operação da Provectum."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white p-8 md:p-10 border-l-4 border-l-black/5 hover:border-l-dominus rounded-r-2xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(232,113,10,0.08)] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-text-dark">{item.title}</h3>
              <p className="text-text-gray leading-relaxed text-lg">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
